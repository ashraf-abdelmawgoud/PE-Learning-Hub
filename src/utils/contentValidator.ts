import type { AcademicCourse, ContentBlock } from '../types';
import { getAllCourses } from '../data/academic/selectors.ts';

export interface ValidationError {
  level: 'error' | 'warning';
  entity: 'course' | 'chapter' | 'topic' | 'lesson' | 'block';
  id: string;
  message: string;
}

export interface ValidationReport {
  isValid: boolean;
  coursesCount: number;
  chaptersCount: number;
  topicsCount: number;
  lessonsCount: number;
  blocksCount: number;
  errors: ValidationError[];
  warnings: ValidationError[];
}

const VALID_BLOCK_TYPES = new Set([
  'heading',
  'paragraph',
  'list',
  'definition',
  'example',
  'key_point',
  'comparison',
  'image',
  'academic_reference',
  'interactive_placeholder',
  'interactive_diagram',
  'animated_explanation',
  'visual_comparison',
  'visual_sequence',
  'curriculum_journey_animation',
  'generic_future_block',
]);

/**
 * نظام الفحص الأكاديمي والتحقق من جودة المحتوى والعلاقات
 */
export function validateAcademicContent(
  customCourses?: AcademicCourse[]
): ValidationReport {
  const courses = customCourses || getAllCourses(true);
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  const seenCourseIds = new Set<string>();
  const seenChapterIds = new Set<string>();
  const seenTopicIds = new Set<string>();
  const seenLessonIds = new Set<string>();
  const seenBlockIds = new Set<string>();

  let chaptersCount = 0;
  let topicsCount = 0;
  let lessonsCount = 0;
  let blocksCount = 0;

  for (const course of courses) {
    // 1. فحص المقرر
    if (!course.id) {
      errors.push({ level: 'error', entity: 'course', id: 'unknown', message: 'مقرر بدون معرف id' });
      continue;
    }

    if (seenCourseIds.has(course.id)) {
      errors.push({ level: 'error', entity: 'course', id: course.id, message: `تكرار معرف المقرر: ${course.id}` });
    }
    seenCourseIds.add(course.id);

    if (!course.title || course.title.trim() === '') {
      errors.push({ level: 'error', entity: 'course', id: course.id, message: `المقرر ${course.id} بدون عنوان` });
    }

    // 2. فحص الفصول
    if (course.chapters && course.chapters.length > 0) {
      const chapterOrders = new Set<number>();

      for (const chapter of course.chapters) {
        chaptersCount++;

        if (seenChapterIds.has(chapter.id)) {
          errors.push({ level: 'error', entity: 'chapter', id: chapter.id, message: `تكرار معرف الفصل: ${chapter.id}` });
        }
        seenChapterIds.add(chapter.id);

        if (chapter.courseId !== course.id) {
          errors.push({
            level: 'error',
            entity: 'chapter',
            id: chapter.id,
            message: `عدم تطابق علاقة الفصل: courseId (${chapter.courseId}) لا يطابق id المقرر (${course.id})`,
          });
        }

        if (chapterOrders.has(chapter.order)) {
          warnings.push({
            level: 'warning',
            entity: 'chapter',
            id: chapter.id,
            message: `تكرار ترتيب الفصل (order: ${chapter.order}) في المقرر ${course.id}`,
          });
        }
        chapterOrders.add(chapter.order);

        // 3. فحص الموضوعات
        if (chapter.topics && chapter.topics.length > 0) {
          const topicOrders = new Set<number>();

          for (const topic of chapter.topics) {
            topicsCount++;

            if (seenTopicIds.has(topic.id)) {
              errors.push({ level: 'error', entity: 'topic', id: topic.id, message: `تكرار معرف الموضوع: ${topic.id}` });
            }
            seenTopicIds.add(topic.id);

            if (topic.chapterId !== chapter.id) {
              errors.push({
                level: 'error',
                entity: 'topic',
                id: topic.id,
                message: `عدم تطابق علاقة الموضوع: chapterId (${topic.chapterId}) لا يطابق id الفصل (${chapter.id})`,
              });
            }

            if (topicOrders.has(topic.order)) {
              warnings.push({
                level: 'warning',
                entity: 'topic',
                id: topic.id,
                message: `تكرار ترتيب الموضوع (order: ${topic.order}) في الفصل ${chapter.id}`,
              });
            }
            topicOrders.add(topic.order);

            // 4. فحص الدروس
            if (topic.lessons && topic.lessons.length > 0) {
              const lessonOrders = new Set<number>();

              for (const lesson of topic.lessons) {
                lessonsCount++;

                if (seenLessonIds.has(lesson.id)) {
                  errors.push({ level: 'error', entity: 'lesson', id: lesson.id, message: `تكرار معرف الدرس: ${lesson.id}` });
                }
                seenLessonIds.add(lesson.id);

                if (lesson.topicId !== topic.id) {
                  errors.push({
                    level: 'error',
                    entity: 'lesson',
                    id: lesson.id,
                    message: `عدم تطابق علاقة الدرس: topicId (${lesson.topicId}) لا يطابق id الموضوع (${topic.id})`,
                  });
                }

                if (!lesson.title || lesson.title.trim() === '') {
                  errors.push({ level: 'error', entity: 'lesson', id: lesson.id, message: `الدرس ${lesson.id} بدون عنوان` });
                }

                if (lesson.status === 'published' && (!lesson.blocks || lesson.blocks.length === 0)) {
                  errors.push({
                    level: 'error',
                    entity: 'lesson',
                    id: lesson.id,
                    message: `الدرس ${lesson.id} معلن كمنشور (published) ولكنه فارغ من الكتل`,
                  });
                }

                if (lessonOrders.has(lesson.order)) {
                  warnings.push({
                    level: 'warning',
                    entity: 'lesson',
                    id: lesson.id,
                    message: `تكرار ترتيب الدرس (order: ${lesson.order}) في الموضوع ${topic.id}`,
                  });
                }
                lessonOrders.add(lesson.order);

                // 5. فحص كتل المحتوى
                if (lesson.blocks && lesson.blocks.length > 0) {
                  for (const block of lesson.blocks) {
                    blocksCount++;

                    if (seenBlockIds.has(block.id)) {
                      errors.push({ level: 'error', entity: 'block', id: block.id, message: `تكرار معرف الكتلة: ${block.id}` });
                    }
                    seenBlockIds.add(block.id);

                    if (!VALID_BLOCK_TYPES.has(block.type)) {
                      warnings.push({
                        level: 'warning',
                        entity: 'block',
                        id: block.id,
                        message: `نوع كتلة غير مسجل في النظام القياسي: ${(block as any).type}`,
                      });
                    }

                    // تحقق تفصيلي بحسب نوع الكتلة
                    validateBlockPayload(block, errors);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 6. التحقق من صحة الروابط المتقاطعة (Cross-references)
  for (const course of courses) {
    for (const chapter of course.chapters) {
      for (const topic of chapter.topics) {
        for (const lesson of topic.lessons) {
          if (lesson.relatedLessons && lesson.relatedLessons.length > 0) {
            for (const relatedId of lesson.relatedLessons) {
              if (!seenLessonIds.has(relatedId)) {
                warnings.push({
                  level: 'warning',
                  entity: 'lesson',
                  id: lesson.id,
                  message: `رابط درس مرتبط يشير لمعرف غير موجود: ${relatedId}`,
                });
              }
            }
          }
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    coursesCount: courses.length,
    chaptersCount,
    topicsCount,
    lessonsCount,
    blocksCount,
    errors,
    warnings,
  };
}

function validateBlockPayload(block: ContentBlock, errors: ValidationError[]) {
  switch (block.type) {
    case 'heading':
      if (!block.text || block.text.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة عنوان بدون نص' });
      }
      break;
    case 'paragraph':
      if (!block.text || block.text.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة فقرة بدون نص' });
      }
      break;
    case 'list':
      if (!block.items || block.items.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة قائمة بدون عناصر' });
      }
      break;
    case 'definition':
      if (!block.term || !block.definition) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة تعريف تفتقر للمصطلح أو الشرح' });
      }
      break;
    case 'comparison':
      if (!block.headers || block.headers.length !== 2 || !block.rows || block.rows.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مقارنة غير مكتملة الأعمدة أو الصفوف' });
      }
      break;
    case 'academic_reference':
      if (!block.reference || !block.reference.bookTitle) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة توثيق مرجعي تفتقر لعنوان الكتاب' });
      }
      break;
    case 'interactive_diagram':
      if (!block.title || block.title.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مخطط تفاعلي بدون عنوان' });
      }
      if (!block.nodes || block.nodes.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مخطط تفاعلي لا تحتوي على أي عناصر (nodes)' });
      } else {
        const nodeIds = new Set(block.nodes.map((n) => n.id));
        if (block.connections) {
          for (const conn of block.connections) {
            if (!nodeIds.has(conn.from) || !nodeIds.has(conn.to)) {
              errors.push({
                level: 'error',
                entity: 'block',
                id: block.id,
                message: `رابط في المخطط التفاعلي يشير إلى عنصر غير موجود: ${conn.from} -> ${conn.to}`,
              });
            }
          }
        }
      }
      break;
    case 'animated_explanation':
      if (!block.title || block.title.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة شرح متحرك بدون عنوان' });
      }
      if (!block.steps || block.steps.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة شرح متحرك بدون خطوات (steps)' });
      }
      if (!block.baseElements || block.baseElements.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة شرح متحرك بدون عناصر بصرية أساسية (baseElements)' });
      }
      break;
    case 'visual_comparison':
      if (!block.title || block.title.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مقارنة بصرية بدون عنوان' });
      }
      if (!block.items || block.items.length < 2) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مقارنة بصرية يجب أن تحتوي على مفهومين على الأقل' });
      }
      if (!block.criteria || block.criteria.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة مقارنة بصرية بدون معايير مقارنة (criteria)' });
      }
      break;
    case 'visual_sequence':
      if (!block.title || block.title.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'نشاط ترتيب الخطوات بدون عنوان' });
      }
      if (!block.items || block.items.length < 2) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'نشاط ترتيب الخطوات يجب أن يحتوي على خطوتين على الأقل' });
      }
      if (!block.correctOrder || block.correctOrder.length === 0) {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'نشاط ترتيب الخطوات بدون ترتيب صحيح محدد' });
      }
      break;
    case 'curriculum_journey_animation':
      if (!block.title || block.title.trim() === '') {
        errors.push({ level: 'error', entity: 'block', id: block.id, message: 'كتلة أنيميشن رحلة المنهج بدون عنوان' });
      }
      break;
  }
}
