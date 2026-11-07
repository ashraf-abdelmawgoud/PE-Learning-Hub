/**
 * validate-chapter2-draft-bank.ts
 *
 * أداة التدقيق الصارم لبنك أسئلة مسودة الفصل الثاني (50 سؤالاً)
 * Build-Time Chapter 2 Draft Question Bank Validation Script
 *
 * يتحقق بدقة من:
 * 1. اكتمال الأسئلة الـ 50 بالضبط (25 اختيار من متعدد و25 صواب وخطأ).
 * 2. تغطية موضوعات الفصل الثاني التسعة كاملة وتطابق نسب التوزيع المحددة.
 * 3. فرادة المعرفات وعدم تكرار أرقام الأسئلة أو خيارات الإجابة.
 * 4. صحة الخيارات الأربعة لكل سؤال MCQ وتطابق معرف الإجابة الصحيحة بالضبط.
 * 5. صحة إجابات الصواب والخطأ وتطابق توزيع الإجابات (13 صواب و12 خطأ).
 * 6. وجود تفسير علمي وتربوي ومرجع أكاديمي غير فارغين لكل سؤال من الأسئلة الخمسين.
 * 7. تطبيق التعديلات التحريرية الثلاثة المؤكدة في تفسيرات الأسئلة (5، 15، 19).
 * 8. عزل المسودة تماماً وعدم إدراجها في بيان النشر (QUIZ_PUBLICATION_MANIFEST).
 * 9. عدم استيراد المسودة في أي ملف من ملفات الإنتاج الموجهة للطلاب.
 * 10. سلامة التجزئة التوافقية القطعية (Content Hash) لبنك المسودة.
 */

import { CHAPTER_2_COMPREHENSIVE_DRAFT_BANK } from '../src/data/academic/quizzes/drafts/chapter2ComprehensiveDraft.ts';
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

const EXPECTED_CH2_TOPIC_DISTRIBUTION: Record<string, { name: string; mcq: number; tf: number; total: number }> = {
  'top-ch2-curriculum-foundations-intro': {
    name: 'الموضوع 1: مدخل إلى أسس بناء المنهج والتنظيمات الرئيسية للمناهج',
    mcq: 2,
    tf: 0,
    total: 2,
  },
  'top-ch2-psychological-foundation': {
    name: 'الموضوع 2: الأساس النفسي للمنهج وطبيعة المتعلم',
    mcq: 3,
    tf: 2,
    total: 5,
  },
  'top-ch2-human-growth-issues': {
    name: 'الموضوع 3: نمو الإنسان ومشكلاته وعلاقته بالمنهج',
    mcq: 2,
    tf: 3,
    total: 5,
  },
  'top-ch2-learner-needs-learning-teaching': {
    name: 'الموضوع 4: حاجات المتعلمين والتعلم والتعليم وعلاقتها بالمنهج',
    mcq: 5,
    tf: 6,
    total: 11,
  },
  'top-ch2-philosophical-foundation': {
    name: 'الموضوع 5: الأساس الفلسفي للمنهج والفلسفة والتربية',
    mcq: 3,
    tf: 3,
    total: 6,
  },
  'top-ch2-traditional-philosophies-idealism': {
    name: 'الموضوع 6: الفلسفات ذات الصبغة التقليدية: الفلسفة المثالية',
    mcq: 3,
    tf: 2,
    total: 5,
  },
  'top-ch2-curriculum-arab-society-problems': {
    name: 'الموضوع 7: المنهج ومشكلات المجتمع العربي',
    mcq: 0,
    tf: 2,
    total: 2,
  },
  'top-ch2-knowledge-foundation': {
    name: 'الموضوع 8: الأسس المعرفية للمنهج ومصادر المعرفة',
    mcq: 4,
    tf: 5,
    total: 9,
  },
  'top-ch2-knowledge-structure-organization': {
    name: 'الموضوع 9: تنظيم بنية المعرفة والمنهج',
    mcq: 3,
    tf: 2,
    total: 5,
  },
};

export function validateChapter2DraftBank(): DraftBankValidationResult {
  const bank = CHAPTER_2_COMPREHENSIVE_DRAFT_BANK;
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. التحقق من هوية البنك وحالته
  if (bank.bankId !== 'bank-ch2-foundations-draft-50q') {
    errors.push(`معرف بنك مسودة الفصل الثاني غير متوقع: "${bank.bankId}"`);
  }
  if (bank.approvalStatus !== 'draft') {
    errors.push(`حالة اعتماد بنك المسودة يجب أن تكون "draft" حصراً، والقيمة الحالية هي: "${bank.approvalStatus}"`);
  }
  if (bank.targetType !== 'chapter' || bank.chapterId !== 'chap-curriculum-foundations') {
    errors.push(`استهداف بنك المسودة يجب أن يكون فصلياً للفصل الثاني: chapterId="chap-curriculum-foundations"`);
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

  for (const tid of Object.keys(EXPECTED_CH2_TOPIC_DISTRIBUTION)) {
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
    if (!gq.topicId || !EXPECTED_CH2_TOPIC_DISTRIBUTION[gq.topicId]) {
      errors.push(`${prefix} ارتباط الموضوع غير صالح أو غير موجود ضمن موضوعات الفصل الثاني: "${gq.topicId}"`);
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
  for (const [tid, expected] of Object.entries(EXPECTED_CH2_TOPIC_DISTRIBUTION)) {
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

  // متوقع في الصواب والخطأ: صواب=13, خطأ=12
  if (trueCount !== 13 || falseCount !== 12) {
    errors.push(
      `توزيع إجابات الصواب والخطأ غير مطابق للوثيقة: صواب=${trueCount} (متوقع 13)، خطأ=${falseCount} (متوقع 12)`
    );
  }

  // 7. التحقق من التعديلات التحريرية المؤكدة في التفسيرات (الأسئلة 5 و15 و19)
  const q5 = questions.find((q) => q.question.id === 'ch2-draft-q05');
  if (q5) {
    if (!q5.question.explanation.includes('الخيار الأول يصف غريزة الخلاص')) {
      errors.push('السؤال 5: لم يتم تطبيق التعديل التحريري المطلوب في التفسير (استبدال "الخيار الثاني" بـ "الخيار الأول").');
    }
  } else {
    errors.push('السؤال 5 غير موجود.');
  }

  const q15 = questions.find((q) => q.question.id === 'ch2-draft-q15');
  if (q15) {
    if (!q15.question.explanation.includes('الخيار الأول يمثل توجيه الفلسفة المثالية')) {
      errors.push('السؤال 15: لم يتم تطبيق التعديل التحريري المطلوب في التفسير (استبدال "الخيار الثاني" بـ "الخيار الأول").');
    }
  } else {
    errors.push('السؤال 15 غير موجود.');
  }

  const q19 = questions.find((q) => q.question.id === 'ch2-draft-q19');
  if (q19) {
    if (!q19.question.explanation.includes('الخيار الأول يصف «المعرفة» بمعناها العلمي')) {
      errors.push('السؤال 19: لم يتم تطبيق التعديل التحريري المطلوب في التفسير (استبدال "الخيار الثاني" بـ "الخيار الأول").');
    }
  } else {
    errors.push('السؤال 19 غير موجود.');
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
  (process.argv[1].endsWith('validate-chapter2-draft-bank.ts') || process.argv[1].includes('validate-chapter2-draft-bank'));

if (isDirectExecution) {
  console.log('--- بدء التدقيق الصارم لبنك أسئلة مسودة الفصل الثاني (50 سؤالاً) ---');
  const result = validateChapter2DraftBank();

  if (!result.isValid || result.errors.length > 0) {
    console.error('\n❌ فشل التحقق من مسودة بنك أسئلة الفصل الثاني! اكتُشفت الأخطاء التالية:');
    for (const err of result.errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ تدقيق مسودة بنك أسئلة الفصل الثاني سليم بنسبة 100%:');
  console.log(`   - إجمالي الأسئلة: ${result.totalQuestions} (25 MCQ + 25 True/False)`);
  console.log(`   - الموضوعات المغطاة: ${result.topicsCoveredCount} من أصل 9 موضوعات للفصل الثاني`);
  console.log('   - تطابق تام لخيارات الإجابة والتفسيرات الأكاديمية والمراجع العلمية.');
  console.log('   - تطبيق مؤكد للتعديلات التحريرية الثلاثة في تفسيرات الأسئلة 5 و15 و19.');
  console.log('   - المسودة معزولة تماماً وغير منشورة في بيان النشر الرسمي.');
  console.log('   - لا توجد أي تسريبات للمسودة في كود الإنتاج أو واجهات الطلاب.');
  console.log('--- اكتمال التدقيق بنجاح ---\n');
  process.exit(0);
}
