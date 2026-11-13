import { COURSES_PLACEHOLDER_DATA } from '../coursesData.ts';
import { DEV_SANDBOX_COURSE } from './devSandboxCourse.ts';
import { VISUAL_SANDBOX_COURSE } from './visualSandboxData.ts';
import {
  CURRICULUM_OFFICIAL_CHAPTERS,
  CURRICULUM_COURSE_REFERENCES,
} from './curriculumChaptersData.ts';
import {
  KINEMATIC_OFFICIAL_CHAPTERS,
  KINEMATIC_COURSE_REFERENCES,
} from './kinematicAnalysisChaptersData.ts';
import {
  MOTOR_LEARNING_OFFICIAL_CHAPTERS,
  MOTOR_LEARNING_COURSE_REFERENCES,
} from './motorLearningChaptersData.ts';
import type {
  AcademicCourse,
  Chapter,
  Topic,
  Lesson,
  BreadcrumbItem,
} from '../../types';

/**
 * تحويل بيانات المواد الدراسية الست الرسمية إلى النموذج الأكاديمي الشامل
 * مع الحفاظ على حالتها الدقيقة:
 * - مادة مناهج التربية الرياضية (course-1) تتضمن الهيكل الأكاديمي المعتمد كاملاً (5 فصول + موضوعان مستقلان + المراجع).
 * - بقية المواد الخمس خالية من الفصول بانتظار تزويد المنصة بكتبها الرسمية.
 */
const OFFICIAL_ACADEMIC_COURSES: AcademicCourse[] = COURSES_PLACEHOLDER_DATA.map((c) => {
  if (c.id === 'course-1') {
    return {
      ...c,
      title: 'مناهج التربية الرياضية',
      targetBookReference: 'كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (2025/2026م)',
      status: 'pending_content',
      statusLabel: 'متاح للمراجعة',
      description:
        'مقرر مناهج التربية الرياضية لطلاب الفرقة الرابعة (أ.د. هاني الدسوقي إبراهيم — 2025/2026م).',
      chapters: CURRICULUM_OFFICIAL_CHAPTERS,
      academicReferences: CURRICULUM_COURSE_REFERENCES,
      isDevSandbox: false,
    };
  }

  if (c.id === 'course-7') {
    return {
      ...c,
      title: 'التحليل الحركي',
      targetBookReference:
        'كتاب مبادئ التحليل الحركي (نظري – تطبيقي) — د. رحاب عبدالمنعم الرشيدي (2020م)',
      status: 'pending_content',
      statusLabel: 'قيد إعداد المحتوى الأكاديمي',
      description:
        'مقرر التحليل الحركي لطلاب الفرقة الرابعة بكلية علوم الرياضة والتربية البدنية، استناداً إلى كتاب «مبادئ التحليل الحركي (نظري – تطبيقي)» للدكتورة رحاب عبدالمنعم الرشيدي (2020م).',
      chapters: KINEMATIC_OFFICIAL_CHAPTERS,
      academicReferences: KINEMATIC_COURSE_REFERENCES,
      isDevSandbox: false,
    };
  }

  if (c.id === 'course-2') {
    return {
      ...c,
      title: 'التعلم الحركي',
      targetBookReference: 'كتاب التعلم الحركي — جامعة جنوب الوادي / كلية علوم الرياضة (الفرقة الرابعة)',
      status: 'pending_content',
      statusLabel: 'قيد التجهيز',
      description:
        'مقرر التعلم الحركي لطلاب الفرقة الرابعة بكلية علوم الرياضة، استناداً إلى كتاب المقرر.',
      chapters: MOTOR_LEARNING_OFFICIAL_CHAPTERS,
      academicReferences: MOTOR_LEARNING_COURSE_REFERENCES,
      isDevSandbox: false,
    };
  }

  return {
    ...c,
    chapters: [],
    academicReferences: [],
    isDevSandbox: false,
  };
});

/**
 * بيئة التشغيل: هل نحن في وضع التطوير المحلي؟
 * في بيئة الإنتاج: import.meta.env.DEV تكون false قطعياً أثناء البناء
 */
const isDevMode = import.meta.env ? import.meta.env.DEV : true;

/**
 * جميع المقررات في المنصة:
 * في الإنتاج (Production): تقتصر حصراً على المقررات الرسمية الست (OFFICIAL_ACADEMIC_COURSES).
 * في التطوير (Development): يُضاف إليها النموذجان التجريبيان (DEV_SANDBOX_COURSE و VISUAL_SANDBOX_COURSE).
 */
const ALL_COURSES: AcademicCourse[] = isDevMode
  ? [
      ...OFFICIAL_ACADEMIC_COURSES,
      DEV_SANDBOX_COURSE,
      VISUAL_SANDBOX_COURSE,
    ]
  : OFFICIAL_ACADEMIC_COURSES;

// ==========================================
// Selectors & Query Functions
// ==========================================

/**
 * استرجاع قائمة المقررات الدراسية
 * @param includeDevSandbox هل يشمل النموذج التقني التجريبي (افتراضياً: false لحماية المقررات الرسمية)
 */
export function getAllCourses(includeDevSandbox = false): AcademicCourse[] {
  if (includeDevSandbox && isDevMode) {
    return ALL_COURSES;
  }
  return OFFICIAL_ACADEMIC_COURSES;
}

/**
 * استرجاع مقرر دراسي بواسطة المعرف id
 */
export function getCourseById(courseId: string): AcademicCourse | undefined {
  return ALL_COURSES.find((c) => c.id === courseId);
}

/**
 * استرجاع فصول مقرر دراسي
 */
export function getChaptersByCourse(courseId: string): Chapter[] {
  const course = getCourseById(courseId);
  if (!course || !course.chapters) return [];
  return [...course.chapters].sort((a, b) => a.order - b.order);
}

/**
 * استرجاع فصل محدد بواسطة المعرف
 */
export function getChapterById(courseId: string, chapterId: string): Chapter | undefined {
  const chapters = getChaptersByCourse(courseId);
  return chapters.find((chap) => chap.id === chapterId);
}

/**
 * استرجاع موضوعات فصل دراسي
 */
export function getTopicsByChapter(chapterId: string): Topic[] {
  for (const course of ALL_COURSES) {
    for (const chapter of course.chapters) {
      if (chapter.id === chapterId) {
        return [...chapter.topics].sort((a, b) => a.order - b.order);
      }
    }
  }
  return [];
}

/**
 * استرجاع موضوع محدد بواسطة المعرف
 */
export function getTopicById(chapterId: string, topicId: string): Topic | undefined {
  const topics = getTopicsByChapter(chapterId);
  const found = topics.find((top) => top.id === topicId);
  if (found) return found;
  // Backward compatibility alias for Chapter 1 introduction topic
  if (chapterId === 'chap-curriculum-intro' && topicId === 'top-curriculum-concept-evolution') {
    return topics.find((top) => top.id === 'top-ch1-curriculum-comprehensive-dev');
  }
  // Backward compatibility aliases for Chapter 2 foundations topics
  if (chapterId === 'chap-curriculum-foundations') {
    if (topicId === 'top-ch2-psychological') {
      return topics.find((top) => top.id === 'top-ch2-psychological-foundation');
    }
    if (topicId === 'top-ch2-philosophical') {
      return topics.find((top) => top.id === 'top-ch2-philosophical-foundation');
    }
    if (topicId === 'top-ch2-knowledge') {
      return topics.find((top) => top.id === 'top-ch2-knowledge-foundation');
    }
  }
  return undefined;
}

/**
 * استرجاع الدروس التابعة لموضوع محدد
 */
export function getLessonsByTopic(topicId: string): Lesson[] {
  for (const course of ALL_COURSES) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        if (topic.id === topicId) {
          return [...topic.lessons].sort((a, b) => a.order - b.order);
        }
      }
    }
  }
  return [];
}

/**
 * استرجاع درس محدد بواسطة المعرف
 */
export function getLessonById(lessonId: string): Lesson | undefined {
  for (const course of ALL_COURSES) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        const lesson = topic.lessons.find((l) => l.id === lessonId);
        if (lesson) return lesson;
      }
    }
  }
  return undefined;
}

/**
 * استرجاع الدروس المرتبطة بدرس معين (Cross-references)
 */
export function getRelatedLessons(lessonId: string): Lesson[] {
  const lesson = getLessonById(lessonId);
  if (!lesson || !lesson.relatedLessons || lesson.relatedLessons.length === 0) {
    return [];
  }

  const related: Lesson[] = [];
  for (const relId of lesson.relatedLessons) {
    const found = getLessonById(relId);
    if (found && found.id !== lessonId) {
      related.push(found);
    }
  }
  return related;
}

/**
 * استرجاع الدرس السابق والتالي في سياق الموضوع والفصل والمقرر
 */
export function getPreviousAndNextLesson(lessonId: string): {
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  topic: Topic | null;
  chapter: Chapter | null;
  course: AcademicCourse | null;
} {
  for (const course of ALL_COURSES) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        const lessons = [...topic.lessons].sort((a, b) => a.order - b.order);
        const index = lessons.findIndex((l) => l.id === lessonId);

        if (index !== -1) {
          const prevLesson = index > 0 ? lessons[index - 1] : null;
          const nextLesson = index < lessons.length - 1 ? lessons[index + 1] : null;

          return {
            prevLesson,
            nextLesson,
            topic,
            chapter,
            course,
          };
        }
      }
    }
  }

  return {
    prevLesson: null,
    nextLesson: null,
    topic: null,
    chapter: null,
    course: null,
  };
}

/**
 * توليد عناصر مسار التنقل الأكاديمي (Breadcrumbs)
 * الرئيسية <- المقررات <- المقرر <- الفصل <- الموضوع <- الدرس
 */
export function getAcademicBreadcrumbs(params: {
  courseId?: string;
  chapterId?: string;
  topicId?: string;
  lessonId?: string;
}): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'المقررات الدراسية', path: '/courses' },
  ];

  if (!params.courseId) return items;

  const course = getCourseById(params.courseId);
  if (!course) return items;

  items.push({
    label: course.title,
    path: `/courses/${course.id}`,
  });

  if (!params.chapterId) return items;

  const chapter = getChapterById(course.id, params.chapterId);
  if (!chapter) return items;

  items.push({
    label: chapter.title,
    path: `/courses/${course.id}/chapters/${chapter.id}`,
  });

  if (!params.topicId) return items;

  const topic = getTopicById(chapter.id, params.topicId);
  if (!topic) return items;

  items.push({
    label: topic.title,
    path: `/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}`,
  });

  if (!params.lessonId) return items;

  const lesson = getLessonById(params.lessonId);
  if (!lesson) return items;

  items.push({
    label: lesson.title,
    path: `/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${lesson.id}`,
  });

  return items;
}
