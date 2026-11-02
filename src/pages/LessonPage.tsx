import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicById,
  getLessonById,
  getPreviousAndNextLesson,
  getRelatedLessons,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { LessonRenderer } from '../components/academic/LessonRenderer';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import {
  BookOpen,
  Clock,
  Target,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BookmarkCheck,
  Share2,
} from 'lucide-react';

export const LessonPage: React.FC = () => {
  const { courseId, chapterId, topicId, lessonId } = useParams<{
    courseId: string;
    chapterId: string;
    topicId: string;
    lessonId: string;
  }>();

  if (!courseId || !chapterId || !topicId || !lessonId) {
    return <Navigate to="/courses" replace />;
  }

  const course = getCourseById(courseId);
  const chapter = getChapterById(courseId, chapterId);
  const topic = getTopicById(chapterId, topicId);
  const lesson = getLessonById(lessonId);

  if (!course || !chapter || !topic || !lesson) {
    return <Navigate to={`/courses/${courseId}`} replace />;
  }

  const { prevLesson, nextLesson } = getPreviousAndNextLesson(lesson.id);
  const relatedLessons = getRelatedLessons(lesson.id);
  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
    topicId: topic.id,
    lessonId: lesson.id,
  });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FAFF] min-h-[90vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Showcase Alert if sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>تنبيه بيئة التطوير:</strong> هذا الدرس نموذج تقني شامل يعرض كتل المحتوى المعتمدة ولا يمثل مادة أكاديمية نهائية.
            </span>
          </div>
        )}

        {/* Lesson Header Banner */}
        <header className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-9 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/60">
              درس {lesson.order}
            </span>
            <span className="text-xs text-[#64748B]">
              {topic.title} &bull; {chapter.title}
            </span>
            <span className="mr-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#0891B2] bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.estimatedDuration} دقيقة قراءة تفاعلية</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#172B4D] mb-4 leading-tight">
            {lesson.title}
          </h1>

          <p className="text-[#334155] text-base leading-relaxed mb-6 font-normal">
            {lesson.description}
          </p>

          {/* Learning Objectives Box */}
          {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
            <div className="bg-gradient-to-br from-[#F4FAFF] to-blue-50/40 rounded-2xl p-5 border border-[#D9EAF7]">
              <div className="flex items-center gap-2 mb-3 text-[#2563EB] font-black text-sm">
                <Target className="w-4 h-4" />
                <span>أهداف التعلم الأكاديمية المستهدفة</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#172B4D]">
                {lesson.learningObjectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Main Lesson Content (Rendered via LessonRenderer) */}
        <article className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-10 shadow-sm">
          <LessonRenderer blocks={lesson.blocks} />
        </article>

        {/* Academic References Section */}
        {lesson.references && lesson.references.length > 0 && (
          <section className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#172B4D] font-black text-lg">
              <BookmarkCheck className="w-5 h-5 text-[#2563EB]" />
              <span>المراجع الأكاديمية المعتمدة لهذا الدرس ({lesson.references.length})</span>
            </div>

            <div className="space-y-3">
              {lesson.references.map((ref) => (
                <div
                  key={ref.id}
                  className="bg-[#F8FCFF] rounded-2xl p-4.5 border border-[#D9EAF7] flex items-start gap-3 text-xs sm:text-sm"
                >
                  <BookOpen className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-[#334155]">
                    <div className="font-bold text-[#172B4D]">
                      {ref.bookTitle}
                    </div>
                    <div className="text-[#64748B] flex flex-wrap gap-x-4 gap-y-1">
                      <span>المؤلف: {ref.author}</span>
                      {ref.edition && <span>الطبعة: {ref.edition}</span>}
                      {ref.chapter && <span>الفصل: {ref.chapter}</span>}
                      {ref.pageRange && <span>الصفحات: {ref.pageRange}</span>}
                    </div>
                    {ref.notes && (
                      <p className="text-[11px] text-[#64748B] pt-0.5">
                        {ref.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cross-references & Related Lessons */}
        {relatedLessons.length > 0 && (
          <section className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#172B4D] font-black text-base">
              <Share2 className="w-4 h-4 text-[#2563EB]" />
              <span>موضوعات ودروس ذات صلة علمية (Cross-references)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedLessons.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${rel.id}`}
                  className="p-3.5 rounded-2xl bg-[#F8FCFF] border border-[#D9EAF7] hover:border-[#2563EB] hover:shadow-xs transition-all flex items-center justify-between"
                >
                  <span className="text-xs font-bold text-[#172B4D]">
                    {rel.title}
                  </span>
                  <ArrowLeft className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Previous & Next Lesson Navigation */}
        <nav aria-label="التنقل بين الدروس" className="pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevLesson ? (
              <Link
                to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${prevLesson.id}`}
                className="group flex items-center justify-between p-4.5 rounded-3xl bg-white border border-[#D9EAF7] hover:border-[#2563EB] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] block">الدرس السابق</span>
                    <span className="text-sm font-black text-[#172B4D] group-hover:text-[#2563EB] transition-colors">
                      {prevLesson.title}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-4.5 rounded-3xl bg-[#F8FCFF] border border-[#D9EAF7]/60 text-[#64748B] text-xs flex items-center justify-center">
                هذا هو الدرس الأول في الموضوع
              </div>
            )}

            {nextLesson ? (
              <Link
                to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${nextLesson.id}`}
                className="group flex items-center justify-between p-4.5 rounded-3xl bg-white border border-[#D9EAF7] hover:border-[#2563EB] hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3 mr-auto order-last">
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#64748B] block">الدرس التالي</span>
                    <span className="text-sm font-black text-[#172B4D] group-hover:text-[#2563EB] transition-colors">
                      {nextLesson.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-4.5 rounded-3xl bg-[#F8FCFF] border border-[#D9EAF7]/60 text-[#64748B] text-xs flex items-center justify-center">
                هذا هو الدرس الأخير في الموضوع
              </div>
            )}
          </div>
        </nav>

        {/* Back Link to Topic */}
        <div className="pt-2">
          <Link
            to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى موضوعات ({topic.title})</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
