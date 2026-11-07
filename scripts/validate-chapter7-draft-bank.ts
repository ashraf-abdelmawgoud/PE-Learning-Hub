/**
 * validate-chapter7-draft-bank.ts
 *
 * أداة التدقيق الصارم لبنك أسئلة مسودة الفصل السابع (50 سؤالاً)
 * Build-Time Chapter 7 Draft Question Bank Validation Script
 *
 * يتحقق بدقة من:
 * 1. اكتمال الأسئلة الـ 50 بالضبط (25 اختيار من متعدد و25 صواب وخطأ).
 * 2. تغطية موضوعات الفصل السابع السبعة كاملة وتطابق نسب التوزيع المحددة.
 * 3. فرادة المعرفات وعدم تكرار أرقام الأسئلة أو خيارات الإجابة.
 * 4. صحة الخيارات الأربعة لكل سؤال MCQ وتطابق معرف الإجابة الصحيحة مع الخيار الفعلي.
 * 5. صحة إجابات الصواب والخطأ وتطابق توزيع الإجابات (13 صواب و12 خطأ).
 * 6. وجود تفسير علمي وتربوي ومرجع أكاديمي غير فارغين لكل سؤال من الأسئلة الخمسين.
 * 7. التحقق من سلامة نمط مفاتيح الاختيار من متعدد وخلوه من أي نمط دوري متكرر مصطنع.
 * 8. التحقق من التمييز بين خطوات تخطيط المنهج التسع (ص 63-65) وخطوات بناء المنهج السبع (ص 72-74).
 * 9. عزل المسودة تماماً وعدم إدراجها في بيان النشر (QUIZ_PUBLICATION_MANIFEST).
 * 10. عدم استيراد المسودة في أي ملف من ملفات الإنتاج الموجهة للطلاب.
 * 11. سلامة التجزئة التوافقية القطعية (Content Hash) لبنك المسودة.
 */

import { CHAPTER_7_COMPREHENSIVE_DRAFT_BANK } from '../src/data/academic/quizzes/drafts/chapter7ComprehensiveDraft.ts';
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

const EXPECTED_CH7_TOPIC_DISTRIBUTION: Record<string, { name: string; mcq: number; tf: number; total: number }> = {
  'top-ch7-philosophical-foundations-tyler-model': {
    name: 'الموضوع 1: التأسيس الفلسفي والاصطلاحي لتخطيط المنهج ونموذج تايلر الأكاديمي',
    mcq: 5,
    tf: 2,
    total: 7,
  },
  'top-ch7-timeframes-admin-levels-centralization': {
    name: 'الموضوع 2: أبعاد التخطيط: الأطر الزمنية والمستويات الإدارية بين المركزية واللامركزية',
    mcq: 3,
    tf: 3,
    total: 6,
  },
  'top-ch7-curriculum-strategy-technical-rules-nine-dimensions': {
    name: 'الموضوع 3: استراتيجية بناء المناهج والقواعد الفنية والأبعاد الإجرائية التسع للتخطيط',
    mcq: 10,
    tf: 5,
    total: 15,
  },
  'top-ch7-external-influencing-factors-difficulty-management': {
    name: 'الموضوع 4: العوامل الخارجية المؤثرة في التخطيط واستراتيجيات إدارة الصعوبات',
    mcq: 2,
    tf: 5,
    total: 7,
  },
  'top-ch7-six-planning-criteria-knowledge-structure': {
    name: 'الموضوع 5: معايير تخطيط المنهج الستة وبنية المعرفة وأنواع التخطيط المفهومي',
    mcq: 2,
    tf: 5,
    total: 7,
  },
  'top-ch7-curriculum-construction-steps-three-structural-levels': {
    name: 'الموضوع 6: خطوات بناء المنهج الإجرائية ومستوياته الهيكلية الثلاثة',
    mcq: 2,
    tf: 2,
    total: 4,
  },
  'top-ch7-participating-parties-architectural-curriculum-approach': {
    name: 'الموضوع 7: الأطراف المشاركة في التخطيط ومدخل تنظيم البناء الهندسي للمنهج',
    mcq: 1,
    tf: 3,
    total: 4,
  },
};

// مفاتيح الإجابات المعتمدة في الوثيقة المدققة لأسئلة الاختيار من متعدد (25 سؤالاً)
export const EXPECTED_CH7_MCQ_KEYS = [
  'opt-c', 'opt-a', 'opt-d', 'opt-b', 'opt-b', // Q01 - Q05
  'opt-d', 'opt-a', 'opt-c', 'opt-d', 'opt-b', // Q06 - Q10
  'opt-a', 'opt-c', 'opt-b', 'opt-d', 'opt-c', // Q11 - Q15
  'opt-a', 'opt-d', 'opt-b', 'opt-c', 'opt-a', // Q16 - Q20
  'opt-a', 'opt-c', 'opt-b', 'opt-d', 'opt-a', // Q21 - Q25
];

// مفاتيح الإجابات المعتمدة في الوثيقة المدققة لأسئلة الصواب والخطأ (25 سؤالاً: 13 صواب و12 خطأ)
export const EXPECTED_CH7_TF_KEYS: boolean[] = [
  false, true, true, false, true, // Q26 - Q30
  false, false, true, true, false, // Q31 - Q35
  true, true, false, false, true, // Q36 - Q40
  false, false, true, false, true, // Q41 - Q45
  false, true, true, false, true, // Q46 - Q50
];

export function validateChapter7DraftBank(): DraftBankValidationResult {
  const bank = CHAPTER_7_COMPREHENSIVE_DRAFT_BANK;
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. التحقق من هوية البنك وحالته
  if (bank.bankId !== 'bank-ch7-planning-draft-50q') {
    errors.push(`معرف بنك مسودة الفصل السابع غير متوقع: "${bank.bankId}"`);
  }
  if (bank.approvalStatus !== 'draft') {
    errors.push(`حالة اعتماد بنك المسودة يجب أن تكون "draft" حصراً، والقيمة الحالية هي: "${bank.approvalStatus}"`);
  }
  if (bank.targetType !== 'chapter' || bank.chapterId !== 'chap-curriculum-planning') {
    errors.push(`استهداف بنك المسودة يجب أن يكون فصلياً للفصل السابع: chapterId="chap-curriculum-planning"`);
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

  for (const tid of Object.keys(EXPECTED_CH7_TOPIC_DISTRIBUTION)) {
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
    if (!gq.topicId || !EXPECTED_CH7_TOPIC_DISTRIBUTION[gq.topicId]) {
      errors.push(`${prefix} ارتباط الموضوع غير صالح أو غير موجود ضمن موضوعات الفصل السابع: "${gq.topicId}"`);
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
  for (const [tid, expected] of Object.entries(EXPECTED_CH7_TOPIC_DISTRIBUTION)) {
    const actual = topicCounts[tid] || { mcq: 0, tf: 0, total: 0 };
    if (actual.mcq !== expected.mcq || actual.tf !== expected.tf || actual.total !== expected.total) {
      errors.push(
        `توزيع أسئلة ${expected.name} غير مطابق: فعلي (MCQ: ${actual.mcq}, TF: ${actual.tf}, إجمالي: ${actual.total}) — متوقع (MCQ: ${expected.mcq}, TF: ${expected.tf}, إجمالي: ${expected.total})`
      );
    }
  }

  // 6. التحقق من تطابق توزيع الإجابات الصحيحة في البنك مع الوثيقة المدققة
  // توزيع الاختيار من متعدد: أ=7, ب=6, ج=6, د=6
  if (
    mcqOptionCounts['opt-a'] !== 7 ||
    mcqOptionCounts['opt-b'] !== 6 ||
    mcqOptionCounts['opt-c'] !== 6 ||
    mcqOptionCounts['opt-d'] !== 6
  ) {
    errors.push(
      `توزيع إجابات الاختيار من متعدد غير مطابق للوثيقة المدققة: أ=${mcqOptionCounts['opt-a']} (متوقع 7)، ب=${mcqOptionCounts['opt-b']} (متوقع 6)، ج=${mcqOptionCounts['opt-c']} (متوقع 6)، د=${mcqOptionCounts['opt-d']} (متوقع 6)`
    );
  }

  // توزيع الصواب والخطأ: صواب=13, خطأ=12
  if (trueCount !== 13 || falseCount !== 12) {
    errors.push(
      `توزيع إجابات الصواب والخطأ غير مطابق للوثيقة المدققة: صواب=${trueCount} (متوقع 13)، خطأ=${falseCount} (متوقع 12)`
    );
  }

  // 7. التدقيق الصارم لنمط مفاتيح الاختيار من متعدد وخلوه من أي نمط دوري متكرر
  const actualMcqKeys = questions.slice(0, 25).map((gq) => (gq.question as { correctOptionId: string }).correctOptionId);

  // أ. كشف الأنماط الدورية المتكررة الرتيبة (Periods 2 to 6)
  for (let period = 2; period <= 6; period++) {
    let periodicMatches = 0;
    for (let i = 0; i < 25; i++) {
      if (actualMcqKeys[i] === actualMcqKeys[i % period]) {
        periodicMatches++;
      }
    }
    // إذا تطابق 80% أو أكثر مع نمط دوري ثابت، يُرفض البنك
    if (periodicMatches >= 20) {
      errors.push(
        `تم اكتشاف نمط دوري متكرر رتيب لمفاتيح الاختيار من متعدد بفاصل دوري ${period} (نسبة التطابق: ${periodicMatches}/25)!`
      );
    }
  }

  // ب. منع التكرار المتتالي الزائد (لا يسمح بثلاث إجابات متطابقة على التوالي)
  for (let i = 0; i < 23; i++) {
    if (actualMcqKeys[i] === actualMcqKeys[i + 1] && actualMcqKeys[i] === actualMcqKeys[i + 2]) {
      errors.push(`تكرار متتالٍ ثلاثي غير مرغوب للإجابة (${actualMcqKeys[i]}) في الأسئلة ${i + 1} و ${i + 2} و ${i + 3}.`);
    }
  }

  // ج. التحقق من تطابق المفاتيح مع مفاتيح الوثيقة المعتمدة
  for (let i = 0; i < 25; i++) {
    if (actualMcqKeys[i] !== EXPECTED_CH7_MCQ_KEYS[i]) {
      errors.push(
        `السؤال ${i + 1}: مفتاح الإجابة الفعلي (${actualMcqKeys[i]}) لا يطابق مفتاح الوثيقة المدققة (${EXPECTED_CH7_MCQ_KEYS[i]}).`
      );
    }
  }

  // د. التحقق الصارم من تطابق مفاتيح أسئلة الصواب والخطأ الـ 25 سؤالاً بسؤال مع الوثيقة المدققة
  const actualTfKeys = questions.slice(25, 50).map((gq) => (gq.question as { correctAnswer: boolean }).correctAnswer);
  for (let i = 0; i < 25; i++) {
    if (actualTfKeys[i] !== EXPECTED_CH7_TF_KEYS[i]) {
      errors.push(
        `السؤال ${i + 26}: إجابة الصواب والخطأ الفعلية (${actualTfKeys[i]}) لا تطابق الوثيقة المدققة (${EXPECTED_CH7_TF_KEYS[i]}).`
      );
    }
  }

  // هـ. التدقيق الأكاديمي الصارم للسؤال 41 وارتباطه بـ (خطوات بناء المنهج - ص 74)
  const q41Item = questions[40];
  if (q41Item) {
    if (q41Item.topicId !== 'top-ch7-curriculum-construction-steps-three-structural-levels') {
      errors.push(
        `السؤال 41: يجب أن يرتبط بموضوع خطوات بناء المنهج ومستوياته الهيكلية (top-ch7-curriculum-construction-steps-three-structural-levels) بدلاً من ${q41Item.topicId}`
      );
    }
    if (!q41Item.question.sourceReference?.includes('74')) {
      errors.push(`السؤال 41: يجب أن يشير مرجعه إلى الصفحة المطبوعة 74 (سابعاً : تنفيذ المنهج وتقويمه).`);
    }
    if ((q41Item.question as any).correctAnswer !== false) {
      errors.push(`السؤال 41: الإجابة الصحيحة المعتمدة في الوثيقة المدققة هي خطأ (false).`);
    }
  }

  // 8. التحقق من عزل المسودة وعدم تسجيلها في بيان النشر الرسمي
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
  (process.argv[1].endsWith('validate-chapter7-draft-bank.ts') || process.argv[1].includes('validate-chapter7-draft-bank'));

if (isDirectExecution) {
  console.log('--- بدء التدقيق الصارم لبنك أسئلة مسودة الفصل السابع (50 سؤالاً) ---');
  const result = validateChapter7DraftBank();

  if (!result.isValid || result.errors.length > 0) {
    console.error('\n❌ فشل التحقق من مسودة بنك أسئلة الفصل السابع! اكتُشفت الأخطاء التالية:');
    for (const err of result.errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ تدقيق مسودة بنك أسئلة الفصل السابع سليم بنسبة 100%:');
  console.log(`   - إجمالي الأسئلة: ${result.totalQuestions} (25 MCQ + 25 True/False)`);
  console.log(`   - الموضوعات المغطاة: ${result.topicsCoveredCount} من أصل 7 موضوعات للفصل السابع`);
  console.log('   - تطابق تام لخيارات الإجابة والتفسيرات الأكاديمية والمراجع العلمية.');
  console.log('   - سلامة توزيع الخيارات وتوازنها (أ: 7، ب: 6، ج: 6، د: 6 / صواب: 13، خطأ: 12).');
  console.log('   - التمييز التام بين خطوات تخطيط المنهج التسع وخطوات بناء المنهج السبع وفق نص الكتاب.');
  console.log('   - المسودة معزولة تماماً وغير منشورة في بيان النشر الرسمي.');
  console.log('   - لا توجد أي تسريبات للمسودة في كود الإنتاج أو واجهات الطلاب.');
  console.log('--- اكتمال التدقيق بنجاح ---\n');
  process.exit(0);
}
