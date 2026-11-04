import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicById,
  getLessonsByTopic,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { NotFoundPage } from './NotFoundPage';
import { isDevSandboxAllowed } from '../utils/devRouteGuard';
import { BookOpen, Target, FileText, ArrowLeft, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const TopicDetailPage: React.FC = () => {
  const { courseId, chapterId, topicId } = useParams<{
    courseId: string;
    chapterId: string;
    topicId: string;
  }>();

  if (!courseId || !chapterId || !topicId) {
    return <Navigate to="/courses" replace />;
  }

  const course = getCourseById(courseId);
  const chapter = getChapterById(courseId, chapterId);
  const topic = getTopicById(chapterId, topicId);

  if (!course || !chapter || !topic || (course.isDevSandbox && !isDevSandboxAllowed())) {
    return <NotFoundPage />;
  }

  const lessons = getLessonsByTopic(topic.id);
  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
    topicId: topic.id,
  });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumbs */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Banner if Dev Sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (موضوع تجريبي)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Dev Sandbox
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا الموضوع مخصص للمعاينة التقنية واختبار بنية الدروس في محرك المنصة، وليس مادة أكاديمية معتمدة لكلية علوم الرياضة.
              </p>
            </div>
          </div>
        )}

        {/* Topic Header Banner */}
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-lg border border-[#D4E9DC]">
              موضوع {topic.order} &bull; {chapter.title}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3">
            {topic.title}
          </h1>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed max-w-3xl">
            {topic.description}
          </p>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#00C853]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#173D2B]">
                دروس الموضوع ({lessons.length})
              </h2>
            </div>
            <span className="text-xs font-bold text-[#6C8577]">
              جاهزة للعرض عبر محرك LessonRenderer
            </span>
          </div>

          {lessons.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-xs hover:border-[#00C853] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#E8F8EE] text-[#173D2B] font-mono text-xs font-bold flex items-center justify-center border border-[#D4E9DC]">
                        {lesson.order}
                      </span>
                      <h3 className="text-lg font-black text-[#173D2B]">
                        {lesson.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#486555] leading-relaxed max-w-2xl">
                      {lesson.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#6C8577] pt-1">
                      <span className="flex items-center gap-1 font-semibold text-[#173D2B] bg-[#E8F8EE] px-2.5 py-1 rounded-lg">
                        <Target className="w-3.5 h-3.5 text-[#00C853]" />
                        <span>أهداف التعلم: {lesson.learningObjectives?.length || 0} أهداف</span>
                      </span>

                      <span className="flex items-center gap-1 font-semibold text-[#173D2B] bg-[#E8F8EE] px-2.5 py-1 rounded-lg">
                        <FileText className="w-3.5 h-3.5 text-[#00C853]" />
                        <span>كتل المحتوى: {lesson.blocks.length} كتل</span>
                      </span>

                      {lesson.references && lesson.references.length > 0 && (
                        <span className="flex items-center gap-1 font-semibold text-[#059669] bg-[#E8F8EE] px-2.5 py-1 rounded-lg">
                          <BookOpen className="w-3.5 h-3.5 text-[#059669]" />
                          <span>موثق أكاديمياً ({lesson.references.length})</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${lesson.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-[#00C853]/20 active:scale-98"
                  >
                    <span>بدء دراسة الدرس</span>
                    <ArrowLeft className="w-4 h-4 text-[#071C12]" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 text-center text-[#6C8577] text-sm">
              لا توجد دروس منشورة في هذا الموضوع حالياً.
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="pt-4">
          <Link
            to={`/courses/${course.id}/chapters/${chapter.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة إلى موضوعات الفصل</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
