import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COURSES_PLACEHOLDER_DATA } from '../data/coursesData';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  HelpCircle,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const currentIndex = COURSES_PLACEHOLDER_DATA.findIndex((c) => c.id === courseId);
  const course = currentIndex !== -1 ? COURSES_PLACEHOLDER_DATA[currentIndex] : null;

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const prevCourse = currentIndex > 0 ? COURSES_PLACEHOLDER_DATA[currentIndex - 1] : null;
  const nextCourse =
    currentIndex < COURSES_PLACEHOLDER_DATA.length - 1
      ? COURSES_PLACEHOLDER_DATA[currentIndex + 1]
      : null;

  return (
    <div className="py-12 sm:py-16 bg-[#F4FAFF] min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Breadcrumb & Back Link */}
        <div className="flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#334155] hover:text-[#2563EB] transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-[#2563EB]" />
            <span>العودة إلى قائمة المقررات الدراسية</span>
          </Link>

          <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            مقرر {course.orderNumber} من {COURSES_PLACEHOLDER_DATA.length}
          </span>
        </div>

        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#14B8A6]" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] font-black text-lg flex items-center justify-center border border-blue-200/60 shadow-2xs">
                0{course.orderNumber}
              </span>
              <div>
                <span className="font-mono text-xs font-bold text-[#2563EB] bg-[#F4FAFF] border border-[#D9EAF7] px-2.5 py-1 rounded-lg">
                  {course.code}
                </span>
                <span className="text-xs text-[#64748B] mr-2">
                  معرّف النظام المعماري
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{course.statusLabel}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#172B4D] mb-3">
            {course.title}
          </h1>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0891B2] bg-cyan-50/70 border border-cyan-200/70 px-3.5 py-1.5 rounded-xl mb-5">
            <BookOpen className="w-4 h-4 text-[#06B6D4]" />
            <span>المرجع الأكاديمي المستقبلي: {course.targetBookReference}</span>
          </div>

          <p className="text-[#334155] text-sm sm:text-base leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        {/* Academic Content Hold Notice */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3.5 shadow-2xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-amber-900">
            <p className="font-bold">
              تنبيه الالتزام بضوابط المشروع:
            </p>
            <p className="text-amber-800 leading-relaxed">
              وفقاً لتوجيهات المرحلة الحالية، لا يحتوي هذا المقرر على أي عناوين فصول أو نصوص وهمية.
              الأقسام أدناه توضح البنية المعمارية البرمجية التي تم تجهيزها بالكامل لتلقي محتوى الكتاب في المراحل القادمة فور اعتماده.
            </p>
          </div>
        </div>

        {/* Structural Blueprint Grid (Ocean Energy Palette) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#2563EB]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#172B4D]">
              الهيكل المعماري البرمجي الجاهز للمقرر
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Section 1: Interactive Lessons (Primary Blue) */}
            <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 shadow-2xs space-y-4 hover:border-[#2563EB]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200/60">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#172B4D]">
                1. نظام الوحدات والدروس
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                مبني لاستيعاب الفصول كشروحات تفاعلية ونماذج بصرية ديناميكية تدريجية بعيداً عن ملفات PDF الثابتة.
              </p>
              <div className="pt-2 border-t border-[#D9EAF7]/70">
                <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>الواجهات البرمجية جاهزة</span>
                </span>
              </div>
            </div>

            {/* Section 2: Simulations & Animations (Cyan Accent) */}
            <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 shadow-2xs space-y-4 hover:border-[#06B6D4]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0891B2] flex items-center justify-center border border-cyan-200/60">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#172B4D]">
                2. مختبر المحاكاة والأنيميشن
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                معدّ لاستقبال محاكيات علوم الرياضة (الميكانيكا الحيوية، مسارات القوة، معدلات النبض، وفسيولوجيا الجهد البدني).
              </p>
              <div className="pt-2 border-t border-[#D9EAF7]/70">
                <span className="text-xs font-bold text-[#0891B2] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>بنية المحاكاة مهيأة</span>
                </span>
              </div>
            </div>

            {/* Section 3: Smart Quizzes (Teal Accent) */}
            <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 shadow-2xs space-y-4 hover:border-[#14B8A6]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D9488] flex items-center justify-center border border-teal-200/60">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#172B4D]">
                3. بنك الاختبارات والتقييم
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                مهيأ لتقديم أسئلة اختيار من متعدد، وتسلسل مراحل الحركة الرياضية، ومطابقة المفاهيم مع تصحيح وتغذية راجعة فورية.
              </p>
              <div className="pt-2 border-t border-[#D9EAF7]/70">
                <span className="text-xs font-bold text-[#0D9488] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>نماذج التقييم مكتملة البنية</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Previous & Next Course Navigation */}
        <div className="pt-4 border-t border-[#D9EAF7]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevCourse ? (
              <Link
                to={`/courses/${prevCourse.id}`}
                className="group flex items-center justify-between p-4.5 rounded-3xl bg-white border border-[#D9EAF7] hover:border-[#2563EB]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 group-hover:bg-[#2563EB] group-hover:text-white text-[#2563EB] flex items-center justify-center transition-colors shadow-2xs">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] block">المقرر السابق</span>
                    <span className="text-sm font-black text-[#172B4D] group-hover:text-[#2563EB] transition-colors">
                      {prevCourse.title}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#64748B] bg-[#F4FAFF] px-2.5 py-1 rounded-lg border border-[#D9EAF7]">
                  {prevCourse.code}
                </span>
              </Link>
            ) : (
              <div className="p-4.5 rounded-3xl bg-[#F8FCFF] border border-[#D9EAF7]/60 text-[#64748B] text-xs flex items-center justify-center">
                هذا هو المقرر الأول في القائمة
              </div>
            )}

            {nextCourse ? (
              <Link
                to={`/courses/${nextCourse.id}`}
                className="group flex items-center justify-between p-4.5 rounded-3xl bg-white border border-[#D9EAF7] hover:border-[#2563EB]/40 hover:shadow-md transition-all text-left"
              >
                <span className="font-mono text-xs font-bold text-[#64748B] bg-[#F4FAFF] px-2.5 py-1 rounded-lg border border-[#D9EAF7] order-last sm:order-first">
                  {nextCourse.code}
                </span>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#64748B] block">المقرر التالي</span>
                    <span className="text-sm font-black text-[#172B4D] group-hover:text-[#2563EB] transition-colors">
                      {nextCourse.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 group-hover:bg-[#2563EB] group-hover:text-white text-[#2563EB] flex items-center justify-center transition-colors shadow-2xs">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-4.5 rounded-3xl bg-[#F8FCFF] border border-[#D9EAF7]/60 text-[#64748B] text-xs flex items-center justify-center">
                هذا هو المقرر الأخير في القائمة
              </div>
            )}
          </div>
        </div>

        {/* Bottom Hub Callout - Light Theme Ocean Energy */}
        <div className="bg-white rounded-3xl border border-[#D9EAF7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-right">
            <h3 className="text-lg font-black text-[#172B4D]">
              جاهزية الانتقال للمراحل القادمة
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] max-w-xl leading-relaxed">
              بمجرد تزويد المنصة بالكتاب الأكاديمي المعتمد الخاص بهذا المقرر، سيتم تحويل المحتوى إلى دروس ومحاكاة واختبارات وفق هذه البنية.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-blue-600/20 active:scale-98"
          >
            <BookOpen className="w-4 h-4" />
            <span>عرض جميع المقررات السبعة</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
