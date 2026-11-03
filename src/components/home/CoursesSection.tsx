/**
 * CoursesSection.tsx
 * Courses Discovery Section for PE Interactive Learning Hub Homepage
 *
 * Displays the 7 official academic courses with accurate data,
 * clear differentiation of ready vs upcoming content, and zero fake claims.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../data/academic/selectors';
import {
  BookOpen,
  ArrowLeft,
  Sparkles,
  AlertCircle,
  FileText,
} from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const courses = getAllCourses(false);

  return (
    <section id="courses-section" className="py-16 sm:py-24 bg-white border-y border-[#D4E9DC] transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
              <BookOpen className="w-3.5 h-3.5 text-[#00C853]" />
              <span>المقررات الأكاديمية السبعة (PE Academic Courses)</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black text-[#173D2B] tracking-tight">
              مقررات كلية علوم الرياضة
            </h2>
            
            <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
              تصفح المقررات الدراسية السبعة للكلية؛ مع تمييز فوري وواضح بين المحتوى المعتمد المتاح للدراسة
              الفورية، والمقررات التي يجري تجهيز كتبها الأكاديمية الرسمية.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F4FFF7] hover:bg-[#E8F8EE] text-[#173D2B] font-bold text-sm border border-[#D4E9DC] hover:border-[#00C853] shadow-xs transition-colors shrink-0"
          >
            <span>دليل المقررات بالكامل</span>
            <ArrowLeft className="w-4 h-4 text-[#00C853]" />
          </Link>
        </div>

        {/* Academic Transparency Note */}
        <div className="mb-10 bg-[#F4FFF7] border border-[#D4E9DC] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#00A844] shrink-0 mt-0.5" />
          <div className="text-sm text-[#173D2B] space-y-1">
            <span className="font-black block text-sm">
              حالة المحتوى الأكاديمي للمقررات:
            </span>
            <p className="text-[#486555] text-xs sm:text-sm leading-relaxed">
              <strong>المقرر الأول (مناهج التربية الرياضية):</strong> يتضمن تجربة فصل حقيقي معتمد وموثق ص 2 - 6 بأدوات بصرية تفاعلية وسيناريو مهني.
              أما <strong>المقررات من 2 إلى 7</strong> فهي هياكل أكاديمية جاهزة بانتظار استلام واعتماد كتبها الجامعية تدريجياً دون اختراع أي مفردات وهمية.
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {courses.map((course) => {
            const isReady = course.chapters && course.chapters.length > 0;

            return (
              <div
                key={course.id}
                className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isReady
                    ? 'bg-gradient-to-b from-[#F4FFF7] to-white border-2 border-[#00C853] shadow-lg shadow-[#00C853]/10 hover:shadow-xl hover:shadow-[#00C853]/20'
                    : 'bg-white border border-[#D4E9DC] hover:border-[#00C853]/60 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Top Accent Strip */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 rounded-t-3xl transition-all ${
                    isReady
                      ? 'bg-gradient-to-r from-[#00C853] via-[#39E66D] to-[#059669]'
                      : 'bg-[#CBD5E1]'
                  }`}
                />

                {/* Card Top Information */}
                <div>
                  {/* Order & Status Badges */}
                  <div className="flex items-center justify-between gap-3 mb-4 pt-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-9 h-9 rounded-xl font-mono font-black text-xs flex items-center justify-center border shadow-2xs ${
                          isReady
                            ? 'bg-[#103D27] text-[#39E66D] border-[#00C853]/40'
                            : 'bg-[#F1F5F9] text-[#475569] border-[#CBD5E1]'
                        }`}
                      >
                        0{course.orderNumber}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#486555] bg-[#F4FFF7] px-2.5 py-1 rounded-lg border border-[#D4E9DC]">
                        {course.code}
                      </span>
                    </div>

                    {isReady ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-black px-3 py-1 rounded-full bg-[#E8F8EE] text-[#059669] border border-[#00C853]/40 shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
                        <span>معاينة معتمدة (الفصل 1)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        <span>قيد تجهيز الكتاب</span>
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-black text-[#173D2B] mb-2 leading-snug group-hover:text-[#00A844] transition-colors">
                    {course.title}
                  </h3>

                  {/* Academic Reference */}
                  <div className="inline-flex items-start gap-1.5 text-xs text-[#173D2B] bg-[#E8F8EE]/70 border border-[#D4E9DC] rounded-xl p-2.5 mb-3.5 w-full">
                    <FileText className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                    <span className="leading-relaxed line-clamp-2">
                      {course.targetBookReference}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#486555] leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Pedagogical Feature Tags */}
                  {isReady ? (
                    <div className="space-y-2 pt-3 border-t border-[#D4E9DC]/70 mb-5">
                      <div className="text-[11px] font-black text-[#059669] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
                        <span>محتوى تعليمي حي متوفر الآن:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-[#173D2B]">
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D4E9DC] shadow-2xs">
                          📖 12 كتلة محتوى أكاديمي
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D4E9DC] shadow-2xs">
                          ⚡ 4 أدوات بصرية ذكية
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-[#D4E9DC] shadow-2xs">
                          🎯 سيناريو اتخاذ قرار
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-3 border-t border-[#D4E9DC]/70 mb-5">
                      <div className="text-[11px] font-bold text-[#6C8577]">
                        التجهيزات المخططة فور اعتماد الكتاب:
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-[#486555]">
                        <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                          شروحات أكاديمية
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                          أنشطة تطبيقية
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0]">
                          تقويم ذاتي
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#D4E9DC]/70 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#6C8577]">
                    {isReady ? 'فصول معتمدة' : 'بانتظار الكتاب الجامعي'}
                  </span>

                  <Link
                    to={`/courses/${course.id}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-black px-4 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-2xs ${
                      isReady
                        ? 'bg-[#00C853] hover:bg-[#39E66D] text-[#071C12] shadow-sm shadow-[#00C853]/20'
                        : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#173D2B]'
                    }`}
                  >
                    <span>{isReady ? 'ابدأ دراسة المقرر' : 'استعراض الهيكل'}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
