/**
 * mergedChapterQuizzes.ts
 *
 * كتل الاختبارات الشاملة المدمجة لفصول مقرر مناهج التربية الرياضية (الفرقة الرابعة)
 * تدمج الأسئلة التأسيسية التاريخية مع بنوك الأسئلة الأكاديمية المعتمدة (50 سؤالاً لكل فصل).
 *
 * توزيع الأسئلة:
 * - الفصل الأول: 15 سؤالاً تاريخياً + 50 سؤالاً معتمداً = 65 سؤالاً.
 * - الفصل الثاني: 50 سؤالاً معتمداً.
 * - الفصل الثالث: 50 سؤالاً معتمداً.
 * - الفصل الرابع: 50 سؤالاً معتمداً.
 * - الفصل الخامس: 50 سؤالاً معتمداً.
 * - الموضوع السادس: 50 سؤالاً معتمداً.
 * - الموضوع السابع: 50 سؤالاً معتمداً.
 *
 * إجمالي الأسئلة المدمجة المنشورة: 365 سؤالاً عبر الفصول.
 */

import type { QuizBlock, QuizQuestion } from '../../../types/academic.ts';

import { CHAPTER_1_APPROVED_BANK } from './approved/chapter1ApprovedBank.ts';
import { CHAPTER_2_APPROVED_BANK } from './approved/chapter2ApprovedBank.ts';
import { CHAPTER_3_APPROVED_BANK } from './approved/chapter3ApprovedBank.ts';
import { CHAPTER_4_APPROVED_BANK } from './approved/chapter4ApprovedBank.ts';
import { CHAPTER_5_APPROVED_BANK } from './approved/chapter5ApprovedBank.ts';
import { CHAPTER_6_APPROVED_BANK } from './approved/chapter6ApprovedBank.ts';
import { CHAPTER_7_APPROVED_BANK } from './approved/chapter7ApprovedBank.ts';

/**
 * دالة مساعدة لضبط أرقام ترتيب الأسئلة (order) عند الدمج
 */
function mapQuestionsWithOrderOffset(
  questions: readonly { question: QuizQuestion }[],
  offset: number = 0
): QuizQuestion[] {
  return questions.map((gq, idx) => ({
    ...gq.question,
    order: offset + idx + 1,
  }));
}

/**
 * دمج أسئلة الفصل الأول:
 * الحفاظ التام على الأسئلة التأسيسية التاريخية الـ 15 بأرقام ترتيبها 1-15 ومعرفاتها،
 * وإلحاق الـ 50 سؤالاً الأكاديمية المعتمدة بترتيب 16-65.
 */
export function createMergedChapter1Quiz(historical15Questions: QuizQuestion[]): QuizBlock {
  const appended50Questions = mapQuestionsWithOrderOffset(CHAPTER_1_APPROVED_BANK.questions, 15);
  const combinedQuestions: QuizQuestion[] = [
    ...historical15Questions,
    ...appended50Questions,
  ];

  return {
    id: 'quiz-ch1-comprehensive',
    type: 'quiz',
    order: 1,
    title: 'الاختبار الشامل للفصل الأول: مقدمة وماهية المنهج',
    description:
      'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل الأول كاملة (65 سؤالاً: 15 سؤالاً تأسيسياً + 50 سؤالاً تحكيمياً).',
    instructions:
      'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
    passingScorePercentage: 60,
    sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 2 - 6)',
    questions: combinedQuestions,
  };
}

/**
 * الاختبار الشامل للفصل الثاني (50 سؤالاً)
 */
export const MERGED_CHAPTER_2_QUIZ: QuizBlock = {
  id: 'quiz-ch2-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للفصل الثاني: أسس ومكونات بناء المنهج المدرسي',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل الثاني كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 7 - 22)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_2_APPROVED_BANK.questions, 0),
};

/**
 * الاختبار الشامل للفصل الثالث (50 سؤالاً)
 */
export const MERGED_CHAPTER_3_QUIZ: QuizBlock = {
  id: 'quiz-ch3-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للفصل الثالث: عناصر المنهج',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل الثالث كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 22 - 31)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_3_APPROVED_BANK.questions, 0),
};

/**
 * الاختبار الشامل للفصل الرابع (50 سؤالاً)
 */
export const MERGED_CHAPTER_4_QUIZ: QuizBlock = {
  id: 'quiz-ch4-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للفصل الرابع: العوامل المؤثرة في بناء المنهج',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل الرابع كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 32 - 38)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_4_APPROVED_BANK.questions, 0),
};

/**
 * الاختبار الشامل للفصل الخامس (50 سؤالاً)
 */
export const MERGED_CHAPTER_5_QUIZ: QuizBlock = {
  id: 'quiz-ch5-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للفصل الخامس: تصميمات وتنظيمات المنهاج المدرسية',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل الخامس كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 38 - 51)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_5_APPROVED_BANK.questions, 0),
};

/**
 * الاختبار الشامل للموضوع السادس (50 سؤالاً)
 */
export const MERGED_CHAPTER_6_QUIZ: QuizBlock = {
  id: 'quiz-ch6-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للموضوع السادس: تصميم وحدة دراسية',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الموضوع السادس كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 51 - 59)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_6_APPROVED_BANK.questions, 0),
};

/**
 * الاختبار الشامل للموضوع السابع (50 سؤالاً)
 */
export const MERGED_CHAPTER_7_QUIZ: QuizBlock = {
  id: 'quiz-ch7-comprehensive',
  type: 'quiz',
  order: 1,
  title: 'الاختبار الشامل للموضوع السابع: تخطيط المنهج المدرسي',
  description:
    'تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الموضوع السابع كاملة (50 سؤالاً موضوعياً: 25 اختيار من متعدد و25 صواب وخطأ).',
  instructions:
    'أجب عن جميع الأسئلة ثم اضغط على زر إرسال الإجابات لمعرفة نتيجتك ومراجعة التفسيرات من كتاب المقرر.',
  passingScorePercentage: 60,
  sourceReference: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم (ص 60 - 78)',
  questions: mapQuestionsWithOrderOffset(CHAPTER_7_APPROVED_BANK.questions, 0),
};
