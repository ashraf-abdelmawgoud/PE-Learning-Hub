import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById, getChaptersByCourse, getAcademicBreadcrumbs } from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { NotFoundPage } from './NotFoundPage';
import { isDevSandboxAllowed } from '../utils/devRouteGuard';
import {
  BookOpen,
  BookmarkCheck,
  AlertTriangle,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  FolderOpen,
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  if (!courseId) {
    return <Navigate to="/courses" replace />;
  }

  const course = getCourseById(courseId);

  // In production, unlisted courses or dev fixtures render 404
  if (!course || (course.isDevSandbox && !isDevSandboxAllowed())) {
    return <NotFoundPage />;
  }

  const chapters = getChaptersByCourse(course.id);
  const breadcrumbs = getAcademicBreadcrumbs({ courseId: course.id });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Banner if Dev Sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (معمل كتل المحتوى)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Development Showcase
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا المقرر مخصص للمعاينة التقنية واختبار نظام كتل المحتوى والعلاقات الهرمية، ومعزول تماماً عن المواد الرسمية.
              </p>
            </div>
          </div>
        )}

        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#103D27] via-[#00C853] to-[#39E66D]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] font-black text-lg flex items-center justify-center border border-[#D4E9DC] shadow-2xs">
                {course.orderNumber > 0 ? `0${course.orderNumber}` : 'DEV'}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-2.5 py-1 rounded-lg">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold text-[#059669] bg-[#E8F8EE] border border-[#00C853]/30 px-2.5 py-1 rounded-lg">
                    {course.academicYear || 'الفرقة الرابعة'}
                  </span>
                </div>
                <span className="text-xs text-[#6C8577] mr-1 block mt-1">
                  المعرف الأكاديمي
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80">
              <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>{course.statusLabel}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3">
            {course.title}
          </h1>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] bg-[#E8F8EE] border border-[#D4E9DC] px-3.5 py-1.5 rounded-xl mb-5">
            <BookOpen className="w-4 h-4 text-[#00C853]" />
            <span>المرجع الأكاديمي: {course.targetBookReference}</span>
          </div>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        {/* Chapters Section */}
        {chapters.length > 0 ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#00C853]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#173D2B]">
                  الفصول الدراسية المتاحة ({chapters.length})
                </h2>
              </div>
              <span className="text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-full border border-[#D4E9DC]">
                {course.id === 'course-7'
                  ? 'قيد إعداد المحتوى'
                  : course.id === 'course-2'
                  ? 'قيد التجهيز'
                  : 'محتوى منشور'}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-xs hover:border-[#00C853] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-2 py-0.5 rounded-md">
                        {chapter.title.startsWith('الموضوع') ? `موضوع ${chapter.order}` : `فصل ${chapter.order}`}
                      </span>
                      <h3 className="text-lg font-black text-[#173D2B]">
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#486555] leading-relaxed max-w-2xl">
                      {chapter.description}
                    </p>
                    <div className="text-xs font-semibold text-[#6C8577] pt-1">
                      {chapter.topics.length > 0
                        ? `عدد الموضوعات: ${chapter.topics.length} موضوع دراسي`
                        : 'موضوعات الفصل قيد إعداد المحتوى الأكاديمي'}
                    </div>
                  </div>

                  <Link
                    to={`/courses/${course.id}/chapters/${chapter.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-[#00C853]/20 active:scale-98"
                  >
                    <span>استعراض موضوعات الفصل</span>
                    <ArrowLeft className="w-4 h-4 text-[#071C12]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Respectful Empty State for Official Courses (Pending Content) */
          <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 text-center space-y-4 shadow-2xs">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-lg font-black text-[#173D2B]">
                فصول هذا المقرر قيد التجهيز الأكاديمي
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                سيتم إضافة موضوعات المقرر وملخصاته واختباراته بعد مراجعة كتاب المقرر.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-4 py-2 rounded-xl border border-[#D4E9DC]">
                حالة المحتوى: {course.statusLabel}
              </span>
              <span className="text-xs font-bold text-[#059669] bg-[#E8F8EE] px-4 py-2 rounded-xl border border-[#00C853]/30">
                المرحلة الأكاديمية: {course.academicYear || 'الفرقة الرابعة'}
              </span>
            </div>
          </div>
        )}

        {/* Action Link back */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>العودة إلى دليل المواد الدراسية</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
