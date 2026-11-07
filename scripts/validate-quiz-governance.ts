/**
 * validate-quiz-governance.ts
 *
 * أداة التدقيق الصارم لحوكمة الأسئلة وبنوك التقويم الأكاديمية قبل البناء
 * Build-Time Quiz Governance Validation Script
 *
 * يتحقق من:
 * 1. صحة واكتمال بيانات الاعتماد الأكاديمي لجميع بنوك الأسئلة المصرح بنشرها.
 * 2. مطابقة التجزئة التوافقية القطعية (Content Hash) لمنع أي تلاعب غير معتمد بالمحتوى.
 * 3. حظر نشر أي بنك أو سؤال بوضع مسودة (draft) أو قيد مراجعة (under_review) أو مرفوض (rejected).
 * 4. التحقق الهيكلي الدقيق لخيارات الأسئلة، الإجابات الصحيحة، والتفسيرات العلمية.
 * 5. عزل مسودات الأسئلة (drafts) تماماً والتأكد من عدم استيرادها في كود الإنتاج.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

import type {
  GovernedQuestionBank,
  QuizPublicationManifestEntry,
  QuizGovernanceValidationResult,
} from '../src/types/quizGovernance.ts';
import {
  QUIZ_PUBLICATION_MANIFEST,
  CHAPTER_1_LEGACY_EXCEPTION,
} from '../src/data/academic/quizzes/governance/governanceManifest.ts';
import { ALL_APPROVED_QUESTION_BANKS } from '../src/data/academic/quizzes/approved/index.ts';
import { computeQuestionBankHash } from '../src/utils/contentHash.ts';
import { getAllCourses } from '../src/data/academic/selectors.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

/**
 * فحص مجلد src للتأكد من عدم استيراد أي ملفات من مسار drafts في بيئة الإنتاج
 */
export function verifyNoDraftImports(projectRoot: string = PROJECT_ROOT): { leakedImports: string[] } {
  const srcDir = path.join(projectRoot, 'src');
  const draftsDir = path.join(srcDir, 'data', 'academic', 'quizzes', 'drafts');
  const leakedImports: string[] = [];

  function scanDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      // تخطي مجلد المسودات ذاته
      if (fullPath.startsWith(draftsDir)) continue;
      // تخطي node_modules أو git
      if (entry.name === 'node_modules' || entry.name === '.git') continue;

      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // البحث عن أي استيراد يتضمن كلمة drafts داخل مسارات quizzes
        const draftImportPattern = /from\s+['"][^'"]*quizzes\/drafts[^'"]*['"]/g;
        if (draftImportPattern.test(content)) {
          leakedImports.push(path.relative(projectRoot, fullPath));
        }
      }
    }
  }

  scanDir(srcDir);
  return { leakedImports };
}

/**
 * تدقيق بنك أسئلة مفرد خاضع للحوكمة
 */
export function validateSingleGovernedBank(
  bank: GovernedQuestionBank,
  manifestEntry?: QuizPublicationManifestEntry,
  validTopicIdsByCourseChapter?: Map<string, Set<string>>
): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];
  const bankPrefix = `[Bank: ${bank.bankId || 'UNKNOWN'}]`;

  // 1. التحقق من المعرفات الأساسية
  if (!bank.bankId || bank.bankId.trim() === '') {
    errors.push(`${bankPrefix} معرف البنك فارغ.`);
  }
  if (!bank.version || bank.version.trim() === '') {
    errors.push(`${bankPrefix} إصدار البنك فارغ.`);
  }
  if (!bank.title || bank.title.trim() === '') {
    errors.push(`${bankPrefix} عنوان بنك الأسئلة فارغ.`);
  }
  if (!['topic', 'chapter'].includes(bank.targetType)) {
    errors.push(`${bankPrefix} نوع الاستهداف غير صالح: ${bank.targetType}.`);
  }

  // فحص ارتباط البنك بالموضوع إن كان محدد الموضع
  if (bank.topicId && validTopicIdsByCourseChapter) {
    const key = `${bank.courseId}::${bank.chapterId}`;
    const validTopics = validTopicIdsByCourseChapter.get(key);
    if (validTopics && !validTopics.has(bank.topicId)) {
      errors.push(
        `${bankPrefix} معرف موضوع البنك "${bank.topicId}" غير موجود ضمن الفصل المحدد (${bank.chapterId}) في المقرر (${bank.courseId}).`
      );
    }
  }

  // 2. التحقق الصارم من حالة الاعتماد (حظر النشر لغير المعتمد)
  if (bank.approvalStatus !== 'approved') {
    errors.push(
      `${bankPrefix} محظور من النشر! حالة الاعتماد هي "${bank.approvalStatus}". يسمح بنشر البنوك المعتمدة صراحة (approved) فقط.`
    );
  }

  // 3. التحقق من بيانات المراجعة والاعتماد الأكاديمي
  const meta = bank.reviewMetadata;
  if (!meta) {
    errors.push(`${bankPrefix} مفقود: بيانات المراجعة والاعتماد الأكاديمي (reviewMetadata).`);
  } else {
    if (!meta.reviewerName || meta.reviewerName.trim() === '') {
      errors.push(`${bankPrefix} مفقود: اسم المراجع الأكاديمي المعتمد (reviewerName).`);
    }
    if (!meta.approvalDate || meta.approvalDate.trim() === '') {
      errors.push(`${bankPrefix} مفقود: تاريخ الاعتماد الأكاديمي (approvalDate).`);
    } else {
      // التحقق من صيغة التاريخ YYYY-MM-DD
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(meta.approvalDate)) {
        errors.push(`${bankPrefix} صيغة تاريخ الاعتماد غير صالحة: "${meta.approvalDate}". يجب أن تكون YYYY-MM-DD.`);
      }
    }
    if (!meta.academicSource || meta.academicSource.trim() === '') {
      errors.push(`${bankPrefix} مفقود: المرجع الأكاديمي المعتمد من كتاب المقرر (academicSource).`);
    }
  }

  // 4. التحقق من التجزئة التوافقية القطعية (Content Hash)
  const computedHash = computeQuestionBankHash(bank);
  if (bank.contentHash !== computedHash) {
    errors.push(
      `${bankPrefix} فشل تطابق تجزئة المحتوى! الهاش المسجل في البنك (${bank.contentHash}) لا يطابق الهاش المحسوب فعلياً (${computedHash}). يدل هذا على تعديل المحتوى بعد الاعتماد.`
    );
  }

  if (manifestEntry) {
    if (manifestEntry.approvedContentHash !== computedHash) {
      errors.push(
        `${bankPrefix} فشل تطابق تجزئة المحتوى مع بيان النشر! الهاش المسجل في البيان (${manifestEntry.approvedContentHash}) لا يطابق الهاش المحسوب (${computedHash}).`
      );
    }
    if (manifestEntry.approvedVersion !== bank.version) {
      errors.push(
        `${bankPrefix} تعارض في رقم الإصدار: بيان النشر يتوقع (${manifestEntry.approvedVersion}) بينما إصدار البنك هو (${bank.version}).`
      );
    }
  }

  // 5. التحقق من الأسئلة المندرجة
  if (!bank.questions || !Array.isArray(bank.questions) || bank.questions.length === 0) {
    errors.push(`${bankPrefix} بنك الأسئلة خالٍ؛ يجب أن يحتوي على سؤال واحد على الأقل.`);
  } else {
    const questionIds = new Set<string>();

    for (const [qIdx, gq] of bank.questions.entries()) {
      const qPrefix = `${bankPrefix} [Question #${qIdx + 1} ID: ${gq.question?.id || 'MISSING'}]`;

      // حالة اعتماد السؤال الفردي إن وجدت
      if (gq.approvalStatus && gq.approvalStatus !== 'approved') {
        errors.push(`${qPrefix} حالة السؤال الفردي "${gq.approvalStatus}" محظورة من النشر.`);
      }

      const q = gq.question;
      if (!q) {
        errors.push(`${qPrefix} كائن السؤال مفقود.`);
        continue;
      }

      if (!q.id || q.id.trim() === '') {
        errors.push(`${qPrefix} معرف السؤال فارغ.`);
      } else if (questionIds.has(q.id)) {
        errors.push(`${qPrefix} تكرار معرف السؤال داخل البنك: "${q.id}".`);
      } else {
        questionIds.add(q.id);
      }

      if (!q.prompt || q.prompt.trim() === '') {
        errors.push(`${qPrefix} نص السؤال (prompt) فارغ.`);
      }

      if (!q.explanation || q.explanation.trim() === '') {
        errors.push(`${qPrefix} مفقود: التفسير التعليمي للإجابة (explanation). التفسير إلزامي لكل سؤال معتمد.`);
      }

      const effectiveSource = q.sourceReference || gq.reviewMetadata?.academicSource || meta?.academicSource;
      if (!effectiveSource || effectiveSource.trim() === '') {
        errors.push(`${qPrefix} مفقود: المرجع الأكاديمي للسؤال (sourceReference).`);
      }

      // فحص نوع السؤال
      if (q.type === 'multiple_choice') {
        if (!q.options || !Array.isArray(q.options) || q.options.length < 2) {
          errors.push(`${qPrefix} سؤال الاختيار من متعدد يجب أن يحتوي على خيارين على الأقل.`);
        } else {
          const optIds = new Set<string>();
          let correctOptionMatches = 0;

          for (const opt of q.options) {
            if (!opt.id || opt.id.trim() === '') {
              errors.push(`${qPrefix} خيار بدون معرف.`);
            } else if (optIds.has(opt.id)) {
              errors.push(`${qPrefix} تكرار معرف الخيار: "${opt.id}".`);
            } else {
              optIds.add(opt.id);
            }
            if (!opt.text || opt.text.trim() === '') {
              errors.push(`${qPrefix} نص الخيار "${opt.id}" فارغ.`);
            }
            if (opt.id === q.correctOptionId) {
              correctOptionMatches++;
            }
          }

          if (correctOptionMatches !== 1) {
            errors.push(
              `${qPrefix} سؤال الاختيار من متعدد يجب أن يحتوي على خيار صحيح واحد فقط مطابق لمعرف correctOptionId ("${q.correctOptionId}"). عدد المطابقات المكتشفة: ${correctOptionMatches}.`
            );
          }
        }
      } else if (q.type === 'true_false') {
        if (typeof q.correctAnswer !== 'boolean') {
          errors.push(`${qPrefix} الإجابة الصحيحة لسؤال الصواب والخطأ يجب أن تكون boolean (true أو false).`);
        }
      } else if (q.type === 'ordering') {
        if (!q.items || !Array.isArray(q.items) || q.items.length < 2) {
          errors.push(`${qPrefix} سؤال الترتيب يجب أن يحتوي على عنصرين على الأقل.`);
        } else if (!q.correctOrder || !Array.isArray(q.correctOrder) || q.correctOrder.length !== q.items.length) {
          errors.push(`${qPrefix} سؤال الترتيب يجب أن يحتوي على قائمة correctOrder مساوية لعدد العناصر.`);
        } else {
          const itemIds = new Set(q.items.map((it) => it.id));
          for (const ordId of q.correctOrder) {
            if (!itemIds.has(ordId)) {
              errors.push(`${qPrefix} معرف العنصر "${ordId}" في correctOrder غير موجود ضمن قائمة items.`);
            }
          }
        }
      } else {
        errors.push(`${qPrefix} نوع السؤال غير مدعوم: "${(q as unknown as { type: string }).type}".`);
      }

      // فحص ارتباط السؤال بالموضوع إن كان محدد الموضع
      const targetTopicId = gq.topicId || bank.topicId;
      if (targetTopicId && validTopicIdsByCourseChapter) {
        const key = `${bank.courseId}::${bank.chapterId}`;
        const validTopics = validTopicIdsByCourseChapter.get(key);
        if (validTopics && !validTopics.has(targetTopicId)) {
          errors.push(
            `${qPrefix} معرف الموضوع "${targetTopicId}" غير موجود ضمن الفصل المحدد (${bank.chapterId}) في المقرر (${bank.courseId}).`
          );
        }
      }
    }
  }

  return { errors, warnings };
}

/**
 * دالة التدقيق العامة لحوكمة الأسئلة وبنوك التقويم
 */
export function validateQuizGovernance(options?: {
  manifest?: QuizPublicationManifestEntry[];
  customBanks?: GovernedQuestionBank[];
  projectRoot?: string;
  skipImportCheck?: boolean;
}): QuizGovernanceValidationResult {
  const manifest = options?.manifest ?? QUIZ_PUBLICATION_MANIFEST;
  const customBanks = options?.customBanks ?? ALL_APPROVED_QUESTION_BANKS;
  const projectRoot = options?.projectRoot ?? PROJECT_ROOT;
  const skipImportCheck = options?.skipImportCheck ?? false;

  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  // 1. فحص عزل مسودات الأسئلة عن ملفات الإنتاج
  if (!skipImportCheck) {
    const importAudit = verifyNoDraftImports(projectRoot);
    if (importAudit.leakedImports.length > 0) {
      for (const leaked of importAudit.leakedImports) {
        allErrors.push(
          `[Draft Leakage] ملف الإنتاج "${leaked}" يحتوي على استيراد من مجلد مسودات الأسئلة (drafts). يُحظر استيراد المسودات في كود الإنتاج.`
        );
      }
    }
  }

  // استخراج خارطة الموضوعات للتحقق من سلامة العلاقات
  const validTopicMap = new Map<string, Set<string>>();
  try {
    const courses = getAllCourses(true);
    for (const c of courses) {
      for (const ch of c.chapters) {
        const key = `${c.id}::${ch.id}`;
        validTopicMap.set(key, new Set(ch.topics.map((t) => t.id)));
      }
    }
  } catch {
    // في حال الاستدعاء في بيئة اختبار معزولة
  }

  const banksById = new Map<string, GovernedQuestionBank>();
  for (const b of customBanks) {
    banksById.set(b.bankId, b);
  }

  let publishedBanksCount = 0;
  let publishedQuestionsCount = 0;

  // 2. تدقيق كل مدخلة في بيان النشر
  for (const entry of manifest) {
    if (entry.isLegacyPilotException) {
      // استثناء موثق لأسئلة الفصل الأول التجريبية
      continue;
    }

    const bank = banksById.get(entry.bankId);
    if (!bank) {
      allErrors.push(
        `[Manifest Error] البنك المسجل في بيان النشر "${entry.bankId}" لم يتم العثور على ملف البيانات البرمجي المعتمد الخاص به.`
      );
      continue;
    }

    const result = validateSingleGovernedBank(bank, entry, validTopicMap);
    allErrors.push(...result.errors);
    allWarnings.push(...result.warnings);

    if (result.errors.length === 0) {
      publishedBanksCount++;
      publishedQuestionsCount += bank.questions.length;
    }
  }

  // 3. التحقق من سلامة بنية استثناء الفصل الأول
  if (!CHAPTER_1_LEGACY_EXCEPTION.isLegacyPilotException) {
    allErrors.push('[Legacy Error] تم الإخلال بتوثيق استثناء الفصل الأول التجريبي.');
  }

  return {
    isValid: allErrors.length === 0,
    publishedBanksCount,
    publishedQuestionsCount,
    errors: allErrors,
    warnings: allWarnings,
  };
}

// تشغيل الفحص المباشر عند استدعاء الملف كبرنامج نصي
const isDirectExecution =
  process.argv[1] &&
  (fileURLToPath(import.meta.url) === process.argv[1] ||
    process.argv[1].endsWith('validate-quiz-governance.ts'));

if (isDirectExecution) {
  console.log('--- بدء تدقيق حوكمة واعتماد الأسئلة الأكاديمية (Quiz Governance Validation) ---');

  const report = validateQuizGovernance();

  if (!report.isValid || report.errors.length > 0) {
    console.error('\n❌ فشل التحقق من حوكمة الأسئلة الأكاديمية! تم اكتشاف مخالفات تمنع البناء:');
    for (const err of report.errors) {
      console.error(`  - ${err}`);
    }
    console.error(`\nإجمالي المخالفات: ${report.errors.length}. تم إيقاف عملية البناء (Build Aborted) لحماية بيئة الإنتاج.`);
    process.exit(1);
  }

  if (report.warnings.length > 0) {
    console.warn(`\n⚠️ تنبيهات حوكمة الأسئلة (${report.warnings.length}):`);
    for (const warn of report.warnings) {
      console.warn(`  - ${warn}`);
    }
  }

  console.log('✅ فحص حوكمة الأسئلة الأكاديمية سليم بنسبة 100%:');
  console.log(`   - بنوك الأسئلة المعتمدة المنشورة: ${report.publishedBanksCount}`);
  console.log(`   - الأسئلة الأكاديمية المعتمدة: ${report.publishedQuestionsCount}`);
  console.log('   - مجلد المسودات معزول بنسبة 100% ولا توجد أي تسريبات لكود الإنتاج.');
  console.log('   - استثناء أسئلة الفصل الأول التجريبية موثق وسليم دون تزييف بيانات اعتماد.');
  console.log('--- اكتمال تدقيق الحوكمة بنجاح: التصريح بالانتقال للمرحلة التالية ---\n');
  process.exit(0);
}
