/**
 * validate-chapter5-draft-bank.ts
 *
 * أداة التدقيق الصارم لبنك أسئلة مسودة الفصل الخامس (50 سؤالاً)
 * Build-Time Chapter 5 Draft Question Bank Validation Script
 *
 * يتحقق بدقة من:
 * 1. اكتمال الأسئلة الـ 50 بالضبط (25 اختيار من متعدد و25 صواب وخطأ).
 * 2. تغطية موضوعات الفصل الخامس السبعة كاملة وتطابق نسب التوزيع المحددة.
 * 3. فرادة المعرفات وعدم تكرار أرقام الأسئلة أو خيارات الإجابة.
 * 4. صحة الخيارات الأربعة لكل سؤال MCQ وتطابق معرف الإجابة الصحيحة بالضبط.
 * 5. صحة إجابات الصواب والخطأ وتطابق توزيع الإجابات (13 صواب و12 خطأ).
 * 6. وجود تفسير علمي وتربوي ومرجع أكاديمي غير فارغين لكل سؤال من الأسئلة الخمسين.
 * 7. توثيق النمط الدوري التكراري لمفاتيح الاختيار من متعدد (ب، د، أ، ج) والتوصية بالخلط الآمن للعرض.
 * 8. التحقق من توثيق مراجعة السؤال 48 وحفظ التنبيه المصدري لاختلاف عنوان ص 47 في المتن.
 * 9. عزل المسودة تماماً وعدم إدراجها في بيان النشر (QUIZ_PUBLICATION_MANIFEST).
 * 10. عدم استيراد المسودة في أي ملف من ملفات الإنتاج الموجهة للطلاب.
 * 11. سلامة التجزئة التوافقية القطعية (Content Hash) لبنك المسودة.
 */

import { CHAPTER_5_COMPREHENSIVE_DRAFT_BANK } from '../src/data/academic/quizzes/drafts/chapter5ComprehensiveDraft.ts';
import { QUIZ_PUBLICATION_MANIFEST } from '../src/data/academic/quizzes/governance/governanceManifest.ts';
import { verifyNoDraftImports } from './validate-quiz-governance.ts';
import { computeQuestionBankHash } from '../src/utils/contentHash.ts';

export interface DraftBankValidationResult {
  isValid: boolean;
  totalQuestions: number;
  mcqCount: number;
  tfCount: number;
  topicsCoveredCount: number;
  errors: string[];
  warnings: string[];
}

const EXPECTED_CH5_TOPIC_DISTRIBUTION: Record<string, { name: string; mcq: number; tf: number; total: number }> = {
  'top-ch5-curriculum-design-foundations': {
    name: 'الموضوع 1: مفهوم تصميم المنهج، أسسه، ومبادئه العامة والمعايير الحاكمة',
    mcq: 8,
    tf: 4,
    total: 12,
  },
  'top-ch5-design-principles-levels': {
    name: 'الموضوع 2: أبعاد الواقع التربوي ومستويات تصميم المنهج (القومي، المحلي، المدرسي، الفصلي)',
    mcq: 2,
    tf: 3,
    total: 5,
  },
  'top-ch5-subject-matter-curricula': {
    name: 'الموضوع 3: مناهج المواد الدراسية: الفلسفة، الخصائص، الأنواع، والمزايا والعيوب',
    mcq: 3,
    tf: 5,
    total: 8,
  },
  'top-ch5-activity-curriculum': {
    name: 'الموضوع 4: منهج النشاط: الأسس النفسية والتربوية، الخصائص، والانتقادات',
    mcq: 3,
    tf: 4,
    total: 7,
  },
  'top-ch5-core-and-unit-curriculum': {
    name: 'الموضوع 5: المنهج المحوري ومنهج الوحدات الدراسية: المنطلقات، الخصائص، والتطبيق',
    mcq: 5,
    tf: 5,
    total: 10,
  },
  'top-ch5-technological-curriculum-comparison': {
    name: 'الموضوع 6: المنهج التكنولوجي ومقارنة تنظيمات المناهج الحديثة',
    mcq: 3,
    tf: 2,
    total: 5,
  },
  'top-ch5-pe-curriculum-characteristics': {
    name: 'الموضوع 7: خصائص ومعايير منهاج التربية الرياضية الجيد وتطبيقاته',
    mcq: 1,
    tf: 2,
    total: 3,
  },
};

export function validateChapter5DraftBank(): DraftBankValidationResult {
  const bank = CHAPTER_5_COMPREHENSIVE_DRAFT_BANK;
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. التحقق من هوية البنك وحالته
  if (bank.bankId !== 'bank-ch5-designs-draft-50q') {
    errors.push(`معرف بنك مسودة الفصل الخامس غير متوقع: "${bank.bankId}"`);
  }
  if (bank.approvalStatus !== 'draft') {
    errors.push(`حالة اعتماد بنك المسودة يجب أن تكون "draft" حصراً، والقيمة الحالية هي: "${bank.approvalStatus}"`);
  }
  if (bank.targetType !== 'chapter' || bank.chapterId !== 'chap-curriculum-designs') {
    errors.push(`استهداف بنك المسودة يجب أن يكون فصلياً للفصل الخامس: chapterId="chap-curriculum-designs"`);
  }

  // 2. التحقق من التجزئة التوافقية القطعية
  const calculatedHash = computeQuestionBankHash(bank);
  if (bank.contentHash !== calculatedHash) {
    errors.push(`عدم تطابق هاش محتوى المسودة! المسجل: "${bank.contentHash}"، المحسوب: "${calculatedHash}"`);
  }

  // 3. التحقق من إجمالي عدد الأسئلة والأنواع
  const questions = bank.questions || [];
  if (questions.length !== 50) {
    errors.push(`إجمالي عدد الأسئلة غير صحيح: ${questions.length} (المطلوب 50 سؤالاً بالضبط)`);
  }

  const mcqs = questions.filter((q) => q.question.type === 'multiple_choice');
  const tfs = questions.filter((q) => q.question.type === 'true_false');

  if (mcqs.length !== 25) {
    errors.push(`عدد أسئلة الاختيار من متعدد MCQ غير مطابق: ${mcqs.length} (المطلوب 25 سؤالاً)`);
  }
  if (tfs.length !== 25) {
    errors.push(`عدد أسئلة الصواب والخطأ True/False غير مطابق: ${tfs.length} (المطلوب 25 سؤالاً)`);
  }

  // 4. التحقق من فرادة المعرفات وتسلسل الأرقام
  const seenQIds = new Set<string>();
  const seenOrders = new Set<number>();
  const topicCounts: Record<string, { mcq: number; tf: number; total: number }> = {};

  for (const tid of Object.keys(EXPECTED_CH5_TOPIC_DISTRIBUTION)) {
    topicCounts[tid] = { mcq: 0, tf: 0, total: 0 };
  }

  const mcqOptionCounts: Record<string, number> = { 'opt-a': 0, 'opt-b': 0, 'opt-c': 0, 'opt-d': 0 };
  let trueCount = 0;
  let falseCount = 0;

  for (const [idx, gq] of questions.entries()) {
    const q = gq.question;
    const qNum = idx + 1;
    const prefix = `[السؤال ${qNum} | ${q?.id || 'MISSING'}]`;

    // حالة السؤال الفردي
    if (gq.approvalStatus !== 'draft') {
      errors.push(`${prefix} حالة اعتماد السؤال الفردي يجب أن تكون "draft" حصراً.`);
    }

    if (!q.id) {
      errors.push(`${prefix} معرف السؤال فارغ.`);
    } else if (seenQIds.has(q.id)) {
      errors.push(`${prefix} تكرار معرف السؤال: "${q.id}"`);
    } else {
      seenQIds.add(q.id);
    }

    if (typeof q.order === 'number') {
      if (seenOrders.has(q.order)) {
        errors.push(`${prefix} تكرار رقم ترتيب السؤال (order): ${q.order}`);
      } else {
        seenOrders.add(q.order);
      }
    } else {
      errors.push(`${prefix} السؤال لا يحمل رقم ترتيب عددي (order).`);
    }

    if (!q.prompt || q.prompt.trim() === '') {
      errors.push(`${prefix} نص السؤال (prompt) فارغ.`);
    }

    if (!q.explanation || q.explanation.trim() === '') {
      errors.push(`${prefix} التفسير العلمي والتربوي (explanation) فارغ.`);
    }

    if (!q.sourceReference || q.sourceReference.trim() === '') {
      errors.push(`${prefix} المرجع الأكاديمي (sourceReference) فارغ.`);
    }

    // إحصاء وتدقيق الموضوع المرتبط
    if (!gq.topicId || !EXPECTED_CH5_TOPIC_DISTRIBUTION[gq.topicId]) {
      errors.push(`${prefix} ارتباط الموضوع غير صالح أو غير موجود ضمن موضوعات الفصل الخامس: "${gq.topicId}"`);
    } else {
      topicCounts[gq.topicId].total++;
      if (q.type === 'multiple_choice') {
        topicCounts[gq.topicId].mcq++;
      } else if (q.type === 'true_false') {
        topicCounts[gq.topicId].tf++;
      }
    }

    // تدقيق أسئلة الاختيار من متعدد
    if (q.type === 'multiple_choice') {
      if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`${prefix} سؤال الاختيار من متعدد يجب أن يحتوي على 4 خيارات بالضبط. العدد الحالي: ${q.options?.length}`);
      } else {
        const optIds = new Set<string>();
        let correctMatch = 0;

        for (const opt of q.options) {
          if (!opt.id) {
            errors.push(`${prefix} خيار بدون معرف id.`);
          } else if (optIds.has(opt.id)) {
            errors.push(`${prefix} تكرار معرف الخيار: "${opt.id}"`);
          } else {
            optIds.add(opt.id);
          }

          if (!opt.text || opt.text.trim() === '') {
            errors.push(`${prefix} نص الخيار "${opt.id}" فارغ.`);
          }

          if (opt.id === q.correctOptionId) {
            correctMatch++;
          }
        }

        if (correctMatch !== 1) {
          errors.push(
            `${prefix} يجب أن يطابق correctOptionId خياراً واحداً بالضبط. المطابقات الحالية: ${correctMatch}`
          );
        }

        if (q.correctOptionId && mcqOptionCounts[q.correctOptionId] !== undefined) {
          mcqOptionCounts[q.correctOptionId]++;
        }
      }
    } else if (q.type === 'true_false') {
      if (typeof q.correctAnswer !== 'boolean') {
        errors.push(`${prefix} الإجابة الصحيحة لسؤال الصواب والخطأ يجب أن تكون boolean (true أو false).`);
      } else {
        if (q.correctAnswer === true) trueCount++;
        if (q.correctAnswer === false) falseCount++;
      }
    }
  }

  // 5. التحقق من تطابق توزيع الموضوعات بدقة
  for (const [tid, expected] of Object.entries(EXPECTED_CH5_TOPIC_DISTRIBUTION)) {
    const actual = topicCounts[tid] || { mcq: 0, tf: 0, total: 0 };
    if (actual.mcq !== expected.mcq || actual.tf !== expected.tf || actual.total !== expected.total) {
      errors.push(
        `توزيع أسئلة ${expected.name} غير مطابق: فعلي (MCQ: ${actual.mcq}, TF: ${actual.tf}, إجمالي: ${actual.total}) — متوقع (MCQ: ${expected.mcq}, TF: ${expected.tf}, إجمالي: ${expected.total})`
      );
    }
  }

  // 6. التحقق من تطابق توزيع الإجابات الصحيحة في الوثيقة
  // متوقع في الاختيار من متعدد: أ=6, ب=7, ج=6, د=6
  if (
    mcqOptionCounts['opt-a'] !== 6 ||
    mcqOptionCounts['opt-b'] !== 7 ||
    mcqOptionCounts['opt-c'] !== 6 ||
    mcqOptionCounts['opt-d'] !== 6
  ) {
    errors.push(
      `توزيع إجابات الاختيار من متعدد غير مطابق للوثيقة الأصلية: أ=${mcqOptionCounts['opt-a']} (متوقع 6)، ب=${mcqOptionCounts['opt-b']} (متوقع 7)، ج=${mcqOptionCounts['opt-c']} (متوقع 6)، د=${mcqOptionCounts['opt-d']} (متوقع 6)`
    );
  }

  // متوقع في الصواب والخطأ: صواب=13, خطأ=12
  if (trueCount !== 13 || falseCount !== 12) {
    errors.push(
      `توزيع إجابات الصواب والخطأ غير مطابق للوثيقة: صواب=${trueCount} (متوقع 13)، خطأ=${falseCount} (متوقع 12)`
    );
  }

  // 7. التحقق من النمط الدوري لمفاتيح الاختيار من متعدد (ب، د، أ، ج)
  const expectedMcqCycle = ['opt-b', 'opt-d', 'opt-a', 'opt-c'];
  for (let i = 0; i < 24; i++) {
    const expectedOpt = expectedMcqCycle[i % 4];
    const actualOpt = (questions[i].question as { correctOptionId?: string }).correctOptionId;
    if (actualOpt !== expectedOpt) {
      errors.push(`السؤال ${i + 1}: مفتاح الإجابة غير مطابق للنمط الدوري المتوقع (${expectedOpt})، القيمة الفعلية: (${actualOpt})`);
    }
  }
  const q25ActualOpt = (questions[24].question as { correctOptionId?: string }).correctOptionId;
  if (q25ActualOpt !== 'opt-b') {
    errors.push(`السؤال 25: مفتاح الإجابة متوقع أن يكون opt-b، القيمة الفعلية: (${q25ActualOpt})`);
  }

  // 8. التحقق من توثيق التنبيه المصدري للسؤال 48 (صفحة 47)
  const q48 = questions.find((q) => q.question.id === 'ch5-draft-q48');
  if (!q48) {
    errors.push(`السؤال 48 (ch5-draft-q48) مفقود من البنك.`);
  } else {
    if (!q48.reviewMetadata || !q48.reviewMetadata.reviewNotes) {
      errors.push(`السؤال 48 يفتقر إلى بيانات المراجعة الأكاديمية والملاحظات المصدرية الموثقة (reviewMetadata.reviewNotes).`);
    } else if (!q48.reviewMetadata.reviewNotes.includes('47')) {
      errors.push(`ملاحظات مراجعة السؤال 48 يجب أن توثق صراحة التنبيه المصدري لاختلاف العنوان في الصفحة المطبوعة 47.`);
    }
  }

  // 9. التحقق من عدم تسجيل بنك المسودة في بيان النشر الرسمي
  const inManifest = QUIZ_PUBLICATION_MANIFEST.some((entry) => entry.bankId === bank.bankId);
  if (inManifest) {
    errors.push(`خطأ جسيم! بنك المسودة "${bank.bankId}" مسجل في بيان النشر الرسمي (QUIZ_PUBLICATION_MANIFEST). يُحظر نشر المسودات.`);
  }

  // 10. التحقق من عزل مسار المسودات وعدم استيرادها في ملفات الإنتاج الموجهة للطلاب
  const draftImportsCheck = verifyNoDraftImports();
  if (draftImportsCheck.leakedImports.length > 0) {
    for (const leaked of draftImportsCheck.leakedImports) {
      errors.push(`تسريب مسودة! تم اكتشاف استيراد للمسودة في ملف الإنتاج: "${leaked}"`);
    }
  }

  return {
    isValid: errors.length === 0,
    totalQuestions: questions.length,
    mcqCount: mcqs.length,
    tfCount: tfs.length,
    topicsCoveredCount: Object.keys(topicCounts).filter((tid) => topicCounts[tid].total > 0).length,
    errors,
    warnings,
  };
}

// تشغيل مباشر عبر Node.js
const isDirectExecution =
  process.argv[1] &&
  (process.argv[1].endsWith('validate-chapter5-draft-bank.ts') || process.argv[1].includes('validate-chapter5-draft-bank'));

if (isDirectExecution) {
  console.log('--- بدء التدقيق الصارم لبنك أسئلة مسودة الفصل الخامس (50 سؤالاً) ---');
  const result = validateChapter5DraftBank();

  if (!result.isValid || result.errors.length > 0) {
    console.error('\n❌ فشل التحقق من مسودة بنك أسئلة الفصل الخامس! اكتُشفت الأخطاء التالية:');
    for (const err of result.errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ تدقيق مسودة بنك أسئلة الفصل الخامس سليم بنسبة 100%:');
  console.log(`   - إجمالي الأسئلة: ${result.totalQuestions} (25 MCQ + 25 True/False)`);
  console.log(`   - الموضوعات المغطاة: ${result.topicsCoveredCount} من أصل 7 موضوعات للفصل الخامس`);
  console.log('   - تطابق تام لخيارات الإجابة والتفسيرات الأكاديمية والمراجع العلمية.');
  console.log('   - توثيق دقيق للنمط التكراري لمفاتيح الإجابات (ب، د، أ، ج) والتوصية بالخلط الآمن للعرض مستقبلاً.');
  console.log('   - توثيق كامل للتنبيه المصدري للسؤال 48 حول الصفحة المطبوعة 47 دون تغيير في نص السؤال.');
  console.log('   - المسودة معزولة تماماً وغير منشورة في بيان النشر الرسمي.');
  console.log('   - لا توجد أي تسريبات للمسودة في كود الإنتاج أو واجهات الطلاب.');
  console.log('--- اكتمال التدقيق بنجاح ---\n');
  process.exit(0);
}
