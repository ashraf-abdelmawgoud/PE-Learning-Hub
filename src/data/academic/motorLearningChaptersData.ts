/**
 * motorLearningChaptersData.ts
 * الهيكل الأكاديمي لفصول مقرر التعلم الحركي (course-2 — الفرقة الرابعة)
 *
 * المصدر الأكاديمي للحزمة الأولى:
 * - حزمة: MOTOR-LEARNING-CH01-QA-04
 * - الكتاب: «التعلم الحركي» — جامعة جنوب الوادي / كلية علوم الرياضة (الفرقة الرابعة)
 * - الفصل الأول: «المهارة الحركية» (ص3–17)
 *
 * ملاحظة حوكمة:
 * - الفصل مجهز محلياً في وضع مسودة (draft) بانتظار الاعتماد النهائي من الإدارة المركزية.
 * - بنك الأسئلة (50 سؤالاً) محفوظ في مسار المسودات المعزول drafts/ وغير منشور للطلاب حتى الاعتماد.
 */

import type { Chapter, AcademicReference } from '../../types/academic.ts';
import {
  CHAPTER_1_MOTOR_SKILL_TOPICS,
  MOTOR_LEARNING_CHAPTER_1_STUDENT_QUIZ_BLOCK,
} from './motorLearningChapter1Data.ts';

const isDevPreviewMode = Boolean(import.meta.env && import.meta.env.DEV);

/**
 * المراجع الأكاديمية المسجلة لمقرر التعلم الحركي
 */
export const MOTOR_LEARNING_COURSE_REFERENCES: AcademicReference[] = [
  {
    id: 'ref-motor-learning-svu',
    bookTitle: 'التعلم الحركي',
    author: 'غير مثبت صراحة على الغلاف (تدريس أ.د. الشريف محمد أحمد حسين)',
    edition: 'غير مثبتة على الغلاف (الفرقة الرابعة)',
    notes: 'المصدر الوحيد للفصل الأول «المهارة الحركية» ص3–17 وفق حزمة MOTOR-LEARNING-CH01-QA-04.',
  },
];

/**
 * الفصل الأول: المهارة الحركية
 */
export const CHAPTER_1_MOTOR_SKILL: Chapter = {
  id: 'chap-motor-skill',
  courseId: 'course-2',
  title: 'الفصل الأول: المهارة الحركية',
  description:
    'يتناول مفهوم المهارة الحركية وتعريفاتها، والمهارات الانتقالية، ومهارات المعالجة والتناول والاتزان، وتصنيفات المهارات الرياضية الخاصة والعوامل المؤثرة فيها، وتدفق المعلومات والتغذية الراجعة والذاكرة الحركية، وخصائص المهارات الحركية الرياضية.',
  order: 1,
  status: 'draft',
  academicReference: {
    id: 'ref-motor-ch1',
    bookTitle: 'التعلم الحركي',
    author: 'غير مثبت صراحة على الغلاف',
    chapter: 'الفصل الأول: المهارة الحركية',
    pageRange: 'ص3–17',
  },
  learningObjectives: [
    'تحديد مفهوم المهارة الحركية وتعريفاتها وأمثلتها الرياضية في المرجع.',
    'التمييز بين المهارات الانتقالية ومهارات المعالجة والتناول ومهارات الاتزان.',
    'تصنيف المهارات الرياضية الخاصة وتحديد العوامل المعززة والمضعفة لتعلمها.',
    'استيعاب تدفق المعلومات والتغذية الراجعة والذاكرة الحركية وخصائص المهارات الخمس.',
  ],
  topics: CHAPTER_1_MOTOR_SKILL_TOPICS,
  chapterQuiz: isDevPreviewMode ? MOTOR_LEARNING_CHAPTER_1_STUDENT_QUIZ_BLOCK : undefined,
};

export const MOTOR_LEARNING_OFFICIAL_CHAPTERS: Chapter[] = [
  CHAPTER_1_MOTOR_SKILL,
];
