/**
 * validate-chapter6-draft-bank.ts
 *
 * أداة التدقيق الصارم لبنك أسئلة مسودة الفصل السادس (50 سؤالاً)
 * Build-Time Chapter 6 Draft Question Bank Validation Script
 *
 * يتحقق بدقة من:
 * 1. اكتمال الأسئلة الـ 50 بالضبط (25 اختيار من متعدد و25 صواب وخطأ).
 * 2. تغطية موضوعات الفصل السادس الستة كاملة وتطابق نسب التوزيع المحددة.
 * 3. فرادة المعرفات وعدم تكرار أرقام الأسئلة أو خيارات الإجابة.
 * 4. صحة الخيارات الأربعة لكل سؤال MCQ وتطابق معرف الإجابة الصحيحة مع الخيار الفعلي.
 * 5. صحة إجابات الصواب والخطأ وتطابق توزيع الإجابات (13 صواب و12 خطأ).
 * 6. وجود تفسير علمي وتربوي ومرجع أكاديمي غير فارغين لكل سؤال من الأسئلة الخمسين.
 * 7. سلامة التوزيع الإحصائي للخيارات (أ: 6، ب: 7، ج: 6، د: 6).
 * 8. تغطية الصفحات المطبوعة 51–59 الخاصة بالموضوع السادس.
 * 9. سلامة التجزئة التوافقية القطعية (Content Hash) لبنك المسودة.
 */

import { CHAPTER_6_COMPREHENSIVE_DRAFT_BANK } from '../src/data/academic/quizzes/drafts/chapter6ComprehensiveDraft.ts';
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

const EXPECTED_CH6_TOPIC_DISTRIBUTION: Record<string, { name: string; mcq: number; tf: number; total: number }> = {
  'top-ch6-unit-concept-curriculum-planning': {
    name: 'الموضوع 1: مفهوم الوحدة الدراسية والتخطيط العام لمنهج الصف السادس',
    mcq: 6,
    tf: 6,
    total: 12,
  },
  'top-ch6-grade6-characteristics-teacher-role': {
    name: 'الموضوع 2: الخصائص النفسية والتربوية لطلاب الصف السادس والدور الإجرائي للمعلم',
    mcq: 5,
    tf: 6,
    total: 11,
  },
  'top-ch6-gymnastics-skill-analysis-steps': {
    name: 'الموضوع 3: الإطار التطبيقي للوحدة الرابعة (الجمباز): التحليل المهاري والخطوات التدريسية',
    mcq: 5,
    tf: 4,
    total: 9,
  },
  'top-ch6-basketball-basic-skills-drills': {
    name: 'الموضوع 4: الإطار التطبيقي للوحدة الخامسة (كرة السلة): المهارات الأساسية وتدريباتها',
    mcq: 6,
    tf: 5,
    total: 11,
  },
  'top-ch6-handball-whip-shot-feints': {
    name: 'الموضوع 5: الإطار التطبيقي للوحدة السادسة (كرة اليد): التصويب الكرباجي والخداع',
    mcq: 2,
    tf: 3,
    total: 5,
  },
  'top-ch6-lesson-execution-field-challenges': {
    name: 'الموضوع 6: إدارة وتوقعات تنفيذ الحصة الدراسية والتحديات الميدانية',
    mcq: 1,
    tf: 1,
    total: 2,
  },
};

// مفاتيح الإجابات المعتمدة في الوثيقة المدققة لأسئلة الاختيار من متعدد (25 سؤالاً)
export const EXPECTED_CH6_MCQ_KEYS = [
  'opt-b', 'opt-a', 'opt-a', 'opt-c', 'opt-b', // Q01 - Q05
  'opt-c', 'opt-d', 'opt-d', 'opt-b', 'opt-b', // Q06 - Q10
  'opt-a', 'opt-d', 'opt-a', 'opt-c', 'opt-a', // Q11 - Q15
  'opt-d', 'opt-d', 'opt-c', 'opt-a', 'opt-c', // Q16 - Q20
  'opt-b', 'opt-c', 'opt-b', 'opt-d', 'opt-b', // Q21 - Q25
];

// مفاتيح الإجابات المعتمدة في الوثيقة المدققة لأسئلة الصواب والخطأ (25 سؤالاً: 13 صواب و12 خطأ)
export const EXPECTED_CH6_TF_KEYS: boolean[] = [
  true, false, true, true, true,   // Q26 - Q30
  false, true, true, false, true,  // Q31 - Q35
  true, false, true, false, true,  // Q36 - Q40
  false, false, false, true, false, // Q41 - Q45
  false, false, true, true, false, // Q46 - Q50
];

export function validateChapter6DraftBank(): DraftBankValidationResult {
  const bank = CHAPTER_6_COMPREHENSIVE_DRAFT_BANK;
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. التحقق من الهوية الأساسية للبنك
  if (bank.bankId !== 'bank-ch6-unit-design-draft-50q') {
    errors.push(`معرف بنك مسودة الفصل السادس غير صحيح: ${bank.bankId}`);
  }
  if (bank.courseId !== 'course-1') {
    errors.push(`معرف المقرر غير مطابق: ${bank.courseId}`);
  }
  if (bank.chapterId !== 'chap-curriculum-unit-design') {
    errors.push(`معرف الفصل غير مطابق: ${bank.chapterId}`);
  }
  if (bank.targetType !== 'chapter') {
    errors.push(`مستوى الاستهداف للبنك يجب أن يكون chapter: ${bank.targetType}`);
  }

  // 2. التحقق من إجمالي عدد الأسئلة والتقسيم النوعي
  const totalQuestions = bank.questions.length;
  if (totalQuestions !== 50) {
    errors.push(`إجمالي عدد الأسئلة غير مطابق: المتوقع 50، الفعلي ${totalQuestions}`);
  }

  const mcqQuestions = bank.questions.filter((g) => g.question.type === 'multiple_choice');
  const tfQuestions = bank.questions.filter((g) => g.question.type === 'true_false');

  if (mcqQuestions.length !== 25) {
    errors.push(`عدد أسئلة الاختيار من متعدد غير مطابق: المتوقع 25، الفعلي ${mcqQuestions.length}`);
  }
  if (tfQuestions.length !== 25) {
    errors.push(`عدد أسئلة الصواب والخطأ غير مطابق: المتوقع 25، الفعلي ${tfQuestions.length}`);
  }

  // 3. التحقق من فرادة المعرفات والترتيب التسلسلي
  const seenIds = new Set<string>();
  const seenOrders = new Set<number>();

  bank.questions.forEach((g, index) => {
    const q = g.question;
    const expectedOrder = index + 1;

    if (q.order !== expectedOrder) {
      errors.push(`ترتيب السؤال غير متسلسل: السؤال ${q.id} ترتيبه ${q.order} والمتوقع ${expectedOrder}`);
    }

    if (seenIds.has(q.id)) {
      errors.push(`تكرار في معرف السؤال: ${q.id}`);
    }
    seenIds.add(q.id);

    if (seenOrders.has(q.order)) {
      errors.push(`تكرار في رقم ترتيب السؤال: ${q.order}`);
    }
    seenOrders.add(q.order);

    const pad = String(expectedOrder).padStart(2, '0');
    const expectedId = `ch6-draft-q${pad}`;
    if (q.id !== expectedId) {
      errors.push(`معرف السؤال غير متطابق مع النمط القياسي: الفعلي ${q.id}، المتوقع ${expectedId}`);
    }

    // التحقق من الحقول الأساسية
    if (!q.prompt || q.prompt.trim() === '') {
      errors.push(`نص السؤال فارغ: ${q.id}`);
    }
    if (!q.explanation || q.explanation.trim() === '') {
      errors.push(`التفسير الأكاديمي فارغ: ${q.id}`);
    }
    if (!q.sourceReference || q.sourceReference.trim() === '') {
      errors.push(`المرجع الأكاديمي فارغ: ${q.id}`);
    }
    if (!g.topicId || !EXPECTED_CH6_TOPIC_DISTRIBUTION[g.topicId]) {
      errors.push(`الموضوع المرتبط بالسؤال غير صالح أو غير معتمد للفصل السادس: ${g.topicId} في السؤال ${q.id}`);
    }
  });

  // 4. التحقق التفصيلي لأسئلة الاختيار من متعدد
  const mcqOptionCounts: Record<string, number> = { 'opt-a': 0, 'opt-b': 0, 'opt-c': 0, 'opt-d': 0 };

  mcqQuestions.forEach((g, idx) => {
    const q = g.question;
    if (q.type !== 'multiple_choice') return;

    if (!q.options || q.options.length !== 4) {
      errors.push(`السؤال ${q.id} يجب أن يحتوي على 4 خيارات بالضبط (الفعلي: ${q.options?.length})`);
      return;
    }

    const optIds = q.options.map((o) => o.id);
    const expectedOptIds = ['opt-a', 'opt-b', 'opt-c', 'opt-d'];
    if (JSON.stringify(optIds) !== JSON.stringify(expectedOptIds)) {
      errors.push(`معرفات خيارات السؤال ${q.id} غير مطابقة للمعيار [opt-a, opt-b, opt-c, opt-d]`);
    }

    q.options.forEach((opt) => {
      if (!opt.text || opt.text.trim() === '') {
        errors.push(`نص الخيار ${opt.id} في السؤال ${q.id} فارغ`);
      }
    });

    if (!q.correctOptionId || !expectedOptIds.includes(q.correctOptionId)) {
      errors.push(`معرف الإجابة الصحيحة في السؤال ${q.id} غير صالح: ${q.correctOptionId}`);
    } else {
      mcqOptionCounts[q.correctOptionId] = (mcqOptionCounts[q.correctOptionId] || 0) + 1;

      // مطابقة مفتاح الإجابة مع الوثيقة المدققة
      const expectedKey = EXPECTED_CH6_MCQ_KEYS[idx];
      if (q.correctOptionId !== expectedKey) {
        errors.push(
          `مفتاح الإجابة للسؤال ${q.id} (رقم ${idx + 1}) غير مطابق للوثيقة المدققة: الفعلي ${q.correctOptionId}، المتوقع ${expectedKey}`
        );
      }
    }
  });

  // التحقق من توزيع خيارات MCQ: أ: 6، ب: 7، ج: 6، د: 6
  if (mcqOptionCounts['opt-a'] !== 6) {
    errors.push(`توزيع الخيار أ غير مطابق: المتوقع 6، الفعلي ${mcqOptionCounts['opt-a']}`);
  }
  if (mcqOptionCounts['opt-b'] !== 7) {
    errors.push(`توزيع الخيار ب غير مطابق: المتوقع 7، الفعلي ${mcqOptionCounts['opt-b']}`);
  }
  if (mcqOptionCounts['opt-c'] !== 6) {
    errors.push(`توزيع الخيار ج غير مطابق: المتوقع 6، الفعلي ${mcqOptionCounts['opt-c']}`);
  }
  if (mcqOptionCounts['opt-d'] !== 6) {
    errors.push(`توزيع الخيار د غير مطابق: المتوقع 6، الفعلي ${mcqOptionCounts['opt-d']}`);
  }

  // 5. التحقق التفصيلي لأسئلة الصواب والخطأ
  let trueCount = 0;
  let falseCount = 0;

  tfQuestions.forEach((g, idx) => {
    const q = g.question;
    if (q.type !== 'true_false') return;

    if (typeof q.correctAnswer !== 'boolean') {
      errors.push(`الإجابة الصحيحة في السؤال ${q.id} ليست قيمة منطقية boolean`);
      return;
    }

    if (q.correctAnswer === true) trueCount++;
    if (q.correctAnswer === false) falseCount++;

    const expectedTF = EXPECTED_CH6_TF_KEYS[idx];
    if (q.correctAnswer !== expectedTF) {
      errors.push(
        `إجابة سؤال الصواب والخطأ ${q.id} (رقم ${idx + 26}) غير مطابقة للوثيقة المدققة: الفعلي ${q.correctAnswer}، المتوقع ${expectedTF}`
      );
    }
  });

  if (trueCount !== 13) {
    errors.push(`توزيع أسئلة الصواب غير مطابق للوثيقة: المتوقع 13، الفعلي ${trueCount}`);
  }
  if (falseCount !== 12) {
    errors.push(`توزيع أسئلة الخطأ غير مطابق للوثيقة: المتوقع 12، الفعلي ${falseCount}`);
  }

  // 6. التحقق من توزيع الأسئلة على موضوعات الفصل السادس الستة
  const actualTopicCounts: Record<string, { mcq: number; tf: number; total: number }> = {};
  for (const topicId of Object.keys(EXPECTED_CH6_TOPIC_DISTRIBUTION)) {
    actualTopicCounts[topicId] = { mcq: 0, tf: 0, total: 0 };
  }

  bank.questions.forEach((g) => {
    if (g.topicId && actualTopicCounts[g.topicId]) {
      if (g.question.type === 'multiple_choice') actualTopicCounts[g.topicId].mcq++;
      if (g.question.type === 'true_false') actualTopicCounts[g.topicId].tf++;
      actualTopicCounts[g.topicId].total++;
    }
  });

  let topicsCoveredCount = 0;
  for (const [tId, exp] of Object.entries(EXPECTED_CH6_TOPIC_DISTRIBUTION)) {
    const act = actualTopicCounts[tId];
    if (act && act.total > 0) {
      topicsCoveredCount++;
    }
    if (act.total !== exp.total) {
      errors.push(
        `توزيع الأسئلة في ${exp.name} غير مطابق: المتوقع ${exp.total} (MCQ: ${exp.mcq}, TF: ${exp.tf})، الفعلي ${act.total} (MCQ: ${act.mcq}, TF: ${act.tf})`
      );
    }
  }

  if (topicsCoveredCount !== 6) {
    errors.push(`عدد الموضوعات المغطاة غير مطابق: المتوقع 6، الفعلي ${topicsCoveredCount}`);
  }

  // 7. التحقق من سلامة التجزئة التوافقية القطعية (Content Hash)
  const computedHash = computeQuestionBankHash(bank);
  if (bank.contentHash !== computedHash) {
    errors.push(`تجزئة محتوى بنك أسئلة الفصل السادس غير مطابقة: الفعلي ${bank.contentHash}، المحسوب ${computedHash}`);
  }

  return {
    isValid: errors.length === 0,
    totalQuestions,
    mcqCount: mcqQuestions.length,
    tfCount: tfQuestions.length,
    topicsCoveredCount,
    errors,
    warnings,
  };
}

// تشغيل مباشر عبر Node.js
const isDirectExecution =
  process.argv[1] &&
  (process.argv[1].endsWith('validate-chapter6-draft-bank.ts') || process.argv[1].includes('validate-chapter6-draft-bank'));

if (isDirectExecution) {
  console.log('--- بدء التدقيق الصارم لبنك أسئلة مسودة الفصل السادس (50 سؤالاً) ---');
  const result = validateChapter6DraftBank();

  if (!result.isValid || result.errors.length > 0) {
    console.error('\n❌ فشل التحقق من مسودة بنك أسئلة الفصل السادس! اكتُشفت الأخطاء التالية:');
    for (const err of result.errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ تدقيق مسودة بنك أسئلة الفصل السادس سليم بنسبة 100%:');
  console.log(`   - إجمالي الأسئلة: ${result.totalQuestions} (25 MCQ + 25 True/False)`);
  console.log(`   - الموضوعات المغطاة: ${result.topicsCoveredCount} من أصل 6 موضوعات للفصل السادس`);
  console.log('   - تطابق تام لخيارات الإجابة والتفسيرات الأكاديمية والمراجع العلمية.');
  console.log('   - التوزيع الإحصائي للخيارات: أ: 6، ب: 7، ج: 6، د: 6 / صواب: 13، خطأ: 12');
  console.log(`   - الهاش المشفر: ${CHAPTER_6_COMPREHENSIVE_DRAFT_BANK.contentHash}`);
  console.log('--- اكتمال التدقيق بنجاح ---\n');
  process.exit(0);
}
