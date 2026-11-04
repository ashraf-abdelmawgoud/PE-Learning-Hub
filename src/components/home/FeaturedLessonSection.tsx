/**
 * FeaturedLessonSection.tsx
 * Featured Learning Content Section for PE Interactive Learning Hub Homepage
 *
 * Highlights the real, verified, published lesson from Course 1
 * without any fabricated statistics or fake metrics.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const FeaturedLessonSection: React.FC = () => {
  const lessonPath =
    '/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution/lessons/les-curriculum-evolution';
  const chapterPath =
    '/courses/course-1/chapters/chap-curriculum-intro';

  return (
    <section className="py-16 sm:py-24 bg-[#F4FFF7] border-b border-[#D4E9DC] transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
            <span>محتوى تعليمي حي معتمد (Live Academic Lesson)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#173D2B] tracking-tight">
            جرّب تجربة التعلم التفاعلية الآن
          </h2>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
            استكشف هذا الدرس الفعلي المعتمد لطلاب الفرقة الرابعة، وشاهد كيف تحولت نصوص الكتاب الجامعي
            إلى تجربة تعليمية بصرية متكاملة تجمع بين الشرح المنظم والأنيميشن والمواقف التطبيقية.
          </p>
        </div>

        {/* Featured Lesson Master Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-[#00C853] shadow-xl shadow-[#00C853]/10 overflow-hidden group">
          
          {/* Card Accent Top Bar */}
          <div className="h-2 bg-gradient-to-r from-[#103D27] via-[#00C853] to-[#39E66D]" />

          <div className="p-6 sm:p-9 space-y-6">
            
            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#071C12] bg-[#00C853] px-3 py-1 rounded-full shadow-2xs">
                  مناهج التربية الرياضية • الفرقة الرابعة
                </span>
                <span className="text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-full border border-[#D4E9DC]">
                  الفصل الأول: مقدمة وماهية المنهج
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] bg-[#E8F8EE] px-3 py-1 rounded-full border border-[#D4E9DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                <span>درس معتمد ومتاح للدراسة فوراً</span>
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-[#173D2B] mb-2 leading-tight">
                تطور مفهوم المنهج: من المفهوم التقليدي إلى المفهوم الحديث
              </h3>
              <p className="text-xs sm:text-sm text-[#059669] font-bold">
                في مناهج التربية الرياضية والأنشطة المدرسية
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#486555] leading-relaxed">
              شرح تفاعلي متكامل يوضح التحول الجوهري من النظرة التقليدية للمنهج كمقررات جامدة ومعلومات تُحفظ،
              إلى منظومة الخبرات الميدانية الحديثة التي تشرف عليها المدرسة لتحقيق النمو المتكامل للطالب
              بدنياً وعقلياً ونفسياً واجتماعياً.
            </p>

            {/* Academic Reference Citation Box */}
            <div className="bg-[#F4FFF7] rounded-2xl p-4 border border-[#D4E9DC] flex items-start gap-3">
              <FileText className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
              <div className="text-xs text-[#173D2B] space-y-1">
                <span className="font-bold block">التوثيق الأكاديمي المعتمد لهذا الدرس:</span>
                <p className="text-[#486555]">
                  كتاب <strong>«مناهج التربية الرياضية»</strong> — تأليف: <strong>أ.د. هاني الدسوقي إبراهيم</strong> (أستاذ المناهج وطرق التدريس)، الصفحات: <strong>ص 2 - 6</strong>.
                </p>
              </div>
            </div>

            {/* Tools Available Inside Lesson */}
            <div className="space-y-3 pt-2 border-t border-[#D4E9DC]">
              <span className="text-xs font-bold text-[#173D2B] block">
                الأدوات التعليمية التفاعلية المدمجة في هذا الدرس:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-bold text-[#173D2B]">
                <div className="p-3 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] flex items-center gap-2">
                  <span className="text-base">🎬</span>
                  <span className="truncate">أنيميشن 2D مبسط</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] flex items-center gap-2">
                  <span className="text-base">⚖️</span>
                  <span className="truncate">مقارنة بصرية شاملة</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] flex items-center gap-2">
                  <span className="text-base">🗺️</span>
                  <span className="truncate">خريطة مفاهيم تفاعلية</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] flex items-center gap-2">
                  <span className="text-base">🎯</span>
                  <span className="truncate">سيناريو اتخاذ قرار</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-4 border-t border-[#D4E9DC] flex flex-col sm:flex-row items-center justify-between gap-3.5">
              <Link
                to={lessonPath}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-md shadow-[#00C853]/20 hover:shadow-[#39E66D]/30 transition-all duration-200 active:scale-98"
              >
                <span>ابدأ دراسة هذا الدرس الآن</span>
                <ArrowLeft className="w-4 h-4 text-[#071C12]" />
              </Link>

              <Link
                to={chapterPath}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F4FFF7] hover:bg-[#E8F8EE] text-[#173D2B] font-bold text-xs sm:text-sm border border-[#D4E9DC] transition-colors"
              >
                <Layers className="w-4 h-4 text-[#00C853]" />
                <span>استعراض مركز الفصل الأول</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
