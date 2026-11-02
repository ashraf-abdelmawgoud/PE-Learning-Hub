import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicsByChapter,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { Folder, ArrowLeft, ChevronRight, FileText, Sparkles } from 'lucide-react';

export const ChapterDetailPage: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();

  if (!courseId || !chapterId) {
    return <Navigate to="/courses" replace />;
  }

  const course = getCourseById(courseId);
  const chapter = getChapterById(courseId, chapterId);

  if (!course || !chapter) {
    return <Navigate to={`/courses/${courseId}`} replace />;
  }

  const topics = getTopicsByChapter(chapter.id);
  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
  });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FAFF] min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Banner if Dev Sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (فصل تجريبي)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Dev Sandbox
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا الفصل مخصص للمعاينة التقنية واختبار بنية الفصول والموضوعات في محرك المنصة، وليس مادة أكاديمية معتمدة لكلية علوم الرياضة.
              </p>
            </div>
          </div>
        )}

        {/* Chapter Header Banner */}
        <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-9 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[#2563EB] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200/60">
              {course.code} &bull; الفصل {chapter.order}
            </span>
            <span className="text-xs font-semibold text-[#64748B]">
              من مقرر: {course.title}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#172B4D] mb-3">
            {chapter.title}
          </h1>

          <p className="text-[#334155] text-sm sm:text-base leading-relaxed max-w-3xl">
            {chapter.description}
          </p>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Folder className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#172B4D]">
                موضوعات الفصل ({topics.length})
              </h2>
            </div>
            <span className="text-xs font-bold text-[#64748B]">
              مرتبة تسلسلياً حسب المنهج
            </span>
          </div>

          {topics.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-3xl border border-[#D9EAF7] p-6 shadow-xs hover:border-[#2563EB]/40 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] font-mono text-xs font-bold flex items-center justify-center border border-blue-200">
                        {topic.order}
                      </span>
                      <h3 className="text-lg font-black text-[#172B4D]">
                        {topic.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-2xl">
                      {topic.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#64748B] pt-1">
                      <span className="flex items-center gap-1 font-semibold text-[#2563EB]">
                        <FileText className="w-3.5 h-3.5" />
                        <span>عدد الدروس: {topic.lessons.length}</span>
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-blue-600/20 active:scale-98"
                  >
                    <span>فتح الموضوع والدروس</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#D9EAF7] p-8 text-center text-[#64748B] text-sm">
              لا توجد موضوعات منشورة في هذا الفصل حالياً.
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="pt-4">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة إلى تفاصيل المقرر</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
