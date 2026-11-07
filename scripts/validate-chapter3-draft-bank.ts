/**
 * validate-chapter3-draft-bank.ts
 *
 * أداة التدقيق الصارم لبنك أسئلة مسودة الفصل الثالث (50 سؤالاً)
 * Build-Time Chapter 3 Draft Question Bank Validation Script
 *
 * يتحقق بدقة من:
 * 1. اكتمال الأسئلة الـ 50 بالضبط (25 اختيار من متعدد و25 صواب وخطأ).
 * 2. تغطية موضوعات الفصل الثالث السبعة كاملة وتطابق نسب التوزيع المحددة.
 * 3. فرادة المعرفات وعدم تكرار أرقام الأسئلة أو خيارات الإجابة.
 * 4. صحة الخيارات الأربعة لكل سؤال MCQ وتطابق معرف الإجابة الصحيحة بالضبط.
 * 5. صحة إجابات الصواب والخطأ وتطابق توزيع الإجابات (17 صواب و8 خطأ).
 * 6. وجود تفسير علمي وتربوي ومرجع أكاديمي غير فارغين لكل سؤال من الأسئلة الخمسين.
 * 7. توثيق التنبيه المصدري الخاص بالخلل الترقيمي لعناصر المنهج في السؤال 26.
 * 8. عزل المسودة تماماً وعدم إدراجها في بيان النشر (QUIZ_PUBLICATION_MANIFEST).
 * 9. عدم استيراد المسودة في أي ملف من ملفات الإنتاج الموجهة للطلاب.
 * 10. سلامة التجزئة التوافقية القطعية (Content Hash) لبنك المسودة.
 */

import { CHAPTER_3_COMPREHENSIVE_DRAFT_BANK } from '../src/data/academic/quizzes/drafts/chapter3ComprehensiveDraft.ts';
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

const EXPECTED_CH3_TOPIC_DISTRIBUTION: Record<string, { name: string; mcq: number; tf: number; total: number }> = {
  'top-ch3-curriculum-core-elements': {
    name: 'الموضوع 1: البناء الهيكلي لعناصر المنهج الأربعة ومدخل عناصر التنفيذ الميداني',
    mcq: 2,
    tf: 2,
    total: 4,
  },
  'top-ch3-teacher-guide': {
    name: 'الموضوع 2: دليل معلم التربية الرياضية: المفهوم، الأهمية، والمحتويات الثمانية للدليل',
    mcq: 7,
    tf: 6,
    total: 13,
  },
  'top-ch3-textbook-physical-education': {
    name: 'الموضوع 3: الكتاب المدرسي في التربية الرياضية: الأهمية والفوائد الـ 12 والضوابط الـ 18 لتأليفه',
    mcq: 5,
    tf: 6,
    total: 11,
  },
  'top-ch3-pe-teacher-learner': {
    name: 'الموضوع 4: الركنان الأساسيان للتنفيذ: معلم التربية الرياضية ومتطلبات إعداده والمتعلم كغاية ومحور',
    mcq: 4,
    tf: 3,
    total: 7,
  },
  'top-ch3-teaching-methods-media': {
    name: 'الموضوع 5: المنظومة الإجرائية للتنفيذ: طرق التدريس المناسبة والوسائل التعليمية',
    mcq: 2,
    tf: 2,
    total: 4,
  },
  'top-ch3-educational-admin-leadership': {
    name: 'الموضوع 6: القيادات التربوية والإدارية المباشرة: المدير العام، مدير بحوث المناهج، موجه التربية الرياضية، والإدارة المدرسية',
    mcq: 4,
    tf: 3,
    total: 7,
  },
  'top-ch3-school-environment-community': {
    name: 'الموضوع 7: المحيط البيئي والمجتمعي الداعم: البيئة المدرسية، أولياء الأمور، والعاملون بالمدرسة',
    mcq: 1,
    tf: 3,
    total: 4,
  },
};

export function validateChapter3DraftBank(): DraftBankValidationResult {
  const bank = CHAPTER_3_COMPREHENSIVE_DRAFT_BANK;
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. التحقق من هوية البنك وحالته
  if (bank.bankId !== 'bank-ch3-elements-draft-50q') {
    errors.push(`معرف بنك مسودة الفصل الثالث غير متوقع: "${bank.bankId}"`);
  }
  if (bank.approvalStatus !== 'draft') {
    errors.push(`حالة اعتماد بنك المسودة يجب أن تكون "draft" حصراً، والقيمة الحالية هي: "${bank.approvalStatus}"`);
  }
  if (bank.targetType !== 'chapter' || bank.chapterId !== 'chap-curriculum-elements') {
    errors.push(`استهداف بنك المسودة يجب أن يكون فصلياً للفصل الثالث: chapterId="chap-curriculum-elements"`);
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

  for (const tid of Object.keys(EXPECTED_CH3_TOPIC_DISTRIBUTION)) {
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
    if (!gq.topicId || !EXPECTED_CH3_TOPIC_DISTRIBUTION[gq.topicId]) {
      errors.push(`${prefix} ارتباط الموضوع غير صالح أو غير موجود ضمن موضوعات الفصل الثالث: "${gq.topicId}"`);
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
  for (const [tid, expected] of Object.entries(EXPECTED_CH3_TOPIC_DISTRIBUTION)) {
    const actual = topicCounts[tid] || { mcq: 0, tf: 0, total: 0 };
    if (actual.mcq !== expected.mcq || actual.tf !== expected.tf || actual.total !== expected.total) {
      errors.push(
        `توزيع أسئلة ${expected.name} غير مطابق: فعلي (MCQ: ${actual.mcq}, TF: ${actual.tf}, إجمالي: ${actual.total}) — متوقع (MCQ: ${expected.mcq}, TF: ${expected.tf}, إجمالي: ${expected.total})`
      );
    }
  }

  // 6. التحقق من تطابق توزيع الإجابات الصحيحة في الوثيقة
  // متوقع في الاختيار من متعدد: أ=7, ب=6, ج=6, د=6
  if (
    mcqOptionCounts['opt-a'] !== 7 ||
    mcqOptionCounts['opt-b'] !== 6 ||
    mcqOptionCounts['opt-c'] !== 6 ||
    mcqOptionCounts['opt-d'] !== 6
  ) {
    errors.push(
      `توزيع إجابات الاختيار من متعدد غير مطابق للوثيقة الأصلية: أ=${mcqOptionCounts['opt-a']} (متوقع 7)، ب=${mcqOptionCounts['opt-b']} (متوقع 6)، ج=${mcqOptionCounts['opt-c']} (متوقع 6)، د=${mcqOptionCounts['opt-d']} (متوقع 6)`
    );
  }

  // متوقع في الصواب والخطأ: صواب=17, خطأ=8
  if (trueCount !== 17 || falseCount !== 8) {
    errors.push(
      `توزيع إجابات الصواب والخطأ غير مطابق للوثيقة: صواب=${trueCount} (متوقع 17)، خطأ=${falseCount} (متوقع 8)`
    );
  }

  // 7. التحقق من التنبيه المصدري والبيانات الوصفية للسؤال 26
  const q26 = questions.find((q) => q.question.id === 'ch3-draft-q26');
  if (q26) {
    if (!q26.reviewMetadata || !q26.reviewMetadata.reviewNotes?.includes('تنبيه مصدري')) {
      errors.push('السؤال 26: تنبيه التوثيق المصدري للخلل الترقيمي مفقود في البيانات الوصفية (reviewMetadata).');
    }
  } else {
    errors.push('السؤال 26 غير موجود.');
  }

  // 8. التحقق من عدم تسجيل بنك المسودة في بيان النشر الرسمي
  const inManifest = QUIZ_PUBLICATION_MANIFEST.some((entry) => entry.bankId === bank.bankId);
  if (inManifest) {
    errors.push(`خطأ جسيم! بنك المسودة "${bank.bankId}" مسجل في بيان النشر الرسمي (QUIZ_PUBLICATION_MANIFEST). يُحظر نشر المسودات.`);
  }

  // 9. التحقق من عزل مسار المسودات وعدم استيرادها في ملفات الإنتاج الموجهة للطلاب
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
  (process.argv[1].endsWith('validate-chapter3-draft-bank.ts') || process.argv[1].includes('validate-chapter3-draft-bank'));

if (isDirectExecution) {
  console.log('--- بدء التدقيق الصارم لبنك أسئلة مسودة الفصل الثالث (50 سؤالاً) ---');
  const result = validateChapter3DraftBank();

  if (!result.isValid || result.errors.length > 0) {
    console.error('\n❌ فشل التحقق من مسودة بنك أسئلة الفصل الثالث! اكتُشفت الأخطاء التالية:');
    for (const err of result.errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ تدقيق مسودة بنك أسئلة الفصل الثالث سليم بنسبة 100%:');
  console.log(`   - إجمالي الأسئلة: ${result.totalQuestions} (25 MCQ + 25 True/False)`);
  console.log(`   - الموضوعات المغطاة: ${result.topicsCoveredCount} من أصل 7 موضوعات للفصل الثالث`);
  console.log('   - تطابق تام لخيارات الإجابة والتفسيرات الأكاديمية والمراجع العلمية.');
  console.log('   - توثيق دقيق للتنبيه المصدري والخلل الترقيمي في السؤال 26.');
  console.log('   - المسودة معزولة تماماً وغير منشورة في بيان النشر الرسمي.');
  console.log('   - لا توجد أي تسريبات للمسودة في كود الإنتاج أو واجهات الطلاب.');
  console.log('--- اكتمال التدقيق بنجاح ---\n');
  process.exit(0);
}
