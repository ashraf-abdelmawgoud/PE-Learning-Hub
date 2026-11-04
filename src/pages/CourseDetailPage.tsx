import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCourseById, getChaptersByCourse, getAcademicBreadcrumbs } from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import {
  BookOpen,
  BookmarkCheck,
  Layers,
  HelpCircle,
  Activity,
  CheckCircle2,
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

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const chapters = getChaptersByCourse(course.id);
  const breadcrumbs = getAcademicBreadcrumbs({ courseId: course.id });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Pilot Academic Preview Banner for Course 1 */}
        {course.id === 'course-1' && (
          <div className="bg-[#E8F8EE] border-2 border-[#00C853]/40 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#D4E9DC] text-[#173D2B] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-[#00C853]" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-[#173D2B]">
              <div className="flex items-center gap-2">
                <span className="font-black text-[#173D2B] text-base">
                  معاينة أكاديمية تجريبية حقيقية (الفصل الأول)
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#D4E9DC] text-[#173D2B]">
                  كتاب مناهج التربية الرياضية
                </span>
              </div>
              <p className="text-[#486555] leading-relaxed">
                يتضمن هذا المقرر فصلاً تجريبياً أولاً مستخلصاً مباشرة من كتاب مناهج التربية الرياضية (أ.د. هاني الدسوقي إبراهيم — الفرقة الرابعة)، مع الحفاظ على بقية فصول المقرر بحالة قيد الإعداد الأكاديمي.
              </p>
            </div>
          </div>
        )}

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
                هذا المقرر مخصص للمعاينة التقنية واختبار نظام كتل المحتوى والعلاقات الهرمية. ليس مادة أكاديمية معتمدة ومعزول تماماً عن المواد الست الرسمية.
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
                <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-2.5 py-1 rounded-lg">
                  {course.code}
                </span>
                <span className="text-xs text-[#6C8577] mr-2">
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
                محتوى منشور
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
                        فصل {chapter.order}
                      </span>
                      <h3 className="text-lg font-black text-[#173D2B]">
                        {chapter.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#486555] leading-relaxed max-w-2xl">
                      {chapter.description}
                    </p>
                    <div className="text-xs font-semibold text-[#6C8577] pt-1">
                      عدد الموضوعات: {chapter.topics.length} موضوع دراسي
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
            <div className="space-y-1.5 max-w-lg mx-auto">
              <h3 className="text-lg font-black text-[#173D2B]">
                فصول هذا المقرر قيد التجهيز الأكاديمي
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                لم يتم إدراج فصول هذا المقرر حتى الآن التزاماً بعدم اختراع أي بيانات أكاديمية وهمية.
                سيتم إدراج الفصول والموضوعات والدروس وفق المنهج المعتمد فور تزويد المنصة بالكتاب المقابل.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] inline-block px-4 py-2 rounded-xl border border-[#D4E9DC]">
              عدد الفصول المنشورة حالياً: 0 فصل
            </div>
          </div>
        )}

        {/* Structural Blueprint Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00C853]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#173D2B]">
              الهيكل المعماري البرمجي الجاهز للمقرر
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-2xs space-y-4 hover:border-[#00C853] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC]">
                <Layers className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-black text-[#173D2B]">
                1. نظام الفصول والدروس
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                مبني بنظام الكتل الأكاديمية (LessonRenderer) لتحويل مفردات الكتاب إلى دروس رقمية تفاعلية غنية.
              </p>
              <div className="pt-2 border-t border-[#D4E9DC]/70">
                <span className="text-xs font-bold text-[#173D2B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>محرك الكتل الأكاديمية مهيأ بالكامل</span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-2xs space-y-4 hover:border-[#00C853] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC]">
                <Activity className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-black text-[#173D2B]">
                2. مختبر المحاكاة والأنيميشن
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                معدّ لاستقبال محاكيات علوم الرياضة (الميكانيكا الحيوية، مسارات القوة، معدلات النبض، وفسيولوجيا الجهد البدني).
              </p>
              <div className="pt-2 border-t border-[#D4E9DC]/70">
                <span className="text-xs font-bold text-[#173D2B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>بنية المحاكاة مهيأة</span>
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-2xs space-y-4 hover:border-[#00C853] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC]">
                <HelpCircle className="w-6 h-6 text-[#00C853]" />
              </div>
              <h3 className="text-lg font-black text-[#173D2B]">
                3. بنك الاختبارات والتقييم
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                مهيأ لتقديم أسئلة اختيار من متعدد، وتسلسل مراحل الحركة الرياضية، ومطابقة المفاهيم مع تصحيح وتغذية راجعة فورية.
              </p>
              <div className="pt-2 border-t border-[#D4E9DC]/70">
                <span className="text-xs font-bold text-[#173D2B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>نماذج التقييم مكتملة البنية</span>
                </span>
              </div>
            </div>

          </div>
        </div>

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
