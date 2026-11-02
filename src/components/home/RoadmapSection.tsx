import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, Palette, Layers, Eye } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <div className="space-y-8 pt-6 transition-colors">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
          خطة العمل والشفافية البرمجية
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#173D2B]">
          خارطة الطريق المنهجية لتطوير المنصة
        </h2>
        <p className="text-[#486555] text-sm leading-relaxed">
          تطوير تدريجي منضبط يضمن استقرار البنية الهندسية وتكامل المحركات التعليمية والهوية البصرية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Phase 1 */}
        <div className="relative rounded-3xl p-6 bg-white border border-[#D4E9DC] shadow-2xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#059669] text-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>المرحلة 1</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#059669]">
                مكتملة
              </span>
            </div>

            <h3 className="text-base font-black text-[#173D2B]">
              التأسيس التقني والهيكل المعماري
            </h3>

            <ul className="space-y-2 text-xs text-[#486555] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>بناء بيئة العمل بـ React 19 + TypeScript + Vite.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>دعم كامل للغة العربية و RTL بخط Cairo.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>إنشاء 7 بطاقات برمجية معمارية دون افتعال أسماء.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>جاهزية Jamstack بدون خوادم أو تسجيل دخول.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D4E9DC] text-[11px] font-bold text-[#059669] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>تم التحقق والاختبار بنجاح</span>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative rounded-3xl p-6 bg-white border border-[#D4E9DC] shadow-2xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#059669] text-white">
                <Layers className="w-3.5 h-3.5" />
                <span>المرحلة 3</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#059669]">
                مكتملة
              </span>
            </div>

            <h3 className="text-base font-black text-[#173D2B]">
              المحرك الأكاديمي (Content Engine)
            </h3>

            <ul className="space-y-2 text-xs text-[#486555] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>نظام كتل المحتوى العشرة (LessonRenderer).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>بنية هرمية: مقرر &larr; فصل &larr; موضوع &larr; درس.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>عزل كامل للمختبر التجريبي عن المقررات الرسمية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>التحقق البرمجي التلقائي الصارم من سلامة البيانات.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D4E9DC] text-[11px] font-bold text-[#059669] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>معتمد بنسبة نجاح 100%</span>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="relative rounded-3xl p-6 bg-white border border-[#D4E9DC] shadow-2xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#059669] text-white">
                <Eye className="w-3.5 h-3.5" />
                <span>المرحلة 4</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#059669]">
                مكتملة
              </span>
            </div>

            <h3 className="text-base font-black text-[#173D2B]">
              المحرك البصري والدرس التطبيقي
            </h3>

            <ul className="space-y-2 text-xs text-[#486555] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>6 محركات بصرية تفاعلية خفيفة الوزن بـ SVG و CSS.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>تطبيق درس حقيقي من كتاب مناهج التربية الرياضية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>مرجع رسمي: أ.د. هاني الدسوقي إبراهيم (ص 2–5).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                <span>159 اختباراً مؤتمتاً ناجحاً بنسبة 100%.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D4E9DC] text-[11px] font-bold text-[#059669] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>درس حقيقي مطبق بنجاح</span>
          </div>
        </div>

        {/* Phase 2: Sport Energy UI/UX */}
        <div className="relative rounded-3xl p-6 bg-[#E8F8EE] border-2 border-[#00C853] shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#103D27] text-[#39E66D]">
                <Palette className="w-3.5 h-3.5 text-[#00C853]" />
                <span>المرحلة 2</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#103D27]">
                منفذة حالياً
              </span>
            </div>

            <h3 className="text-base font-black text-[#173D2B]">
              هوية SPORT ENERGY البصرية
            </h3>

            <ul className="space-y-2 text-xs text-[#173D2B] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                <span>لوحة ألوان Sport Energy الرياضية عالية التباين.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                <span>هيدر وفوتر داكنان بطابع رياضي مهيب وناصع.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                <span>رسم تفاعلي للميكانيكا الحيوية مع نبضات الجهد.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                <span>صفحات قراءة هادئة ومريحة متوافقة مع WCAG AA.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D4E9DC] text-[11px] font-bold text-[#103D27] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
            <span>جاهزة للمراجعة والاعتماد</span>
          </div>
        </div>

      </div>

    </div>
  );
};
