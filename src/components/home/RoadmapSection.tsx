import React from 'react';
import { CheckCircle2, Clock, Sparkles, ShieldCheck, Palette } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <div className="space-y-8 pt-6">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/70">
          خطة العمل والشفافية البرمجية
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#172B4D]">
          خارطة الطريق المنهجية لتطوير المنصة
        </h2>
        <p className="text-[#334155] text-sm leading-relaxed">
          تطوير تدريجي منضبط يضمن استقرار البنية الهندسية قبل الانتقال لإدراج المحتوى الأكاديمي.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Phase 1 */}
        <div className="relative rounded-3xl p-6 bg-white border border-[#D9EAF7] shadow-2xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#10B981] text-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>المرحلة 1</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#10B981]">
                مكتملة
              </span>
            </div>

            <h3 className="text-base font-black text-[#172B4D]">
              التأسيس التقني والهيكل المعماري
            </h3>

            <ul className="space-y-2 text-xs text-[#334155] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>بناء بيئة العمل بـ React 19 + TypeScript + Vite.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>دعم اللغة العربية و RTL بالكامل بخط Cairo.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>إنشاء 7 بطاقات برمجية دون اختراع أسماء وهمية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>تأصيل العمل بدون Backend أو تسجيل حسابات.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D9EAF7] text-[11px] font-bold text-[#10B981] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>تم التحقق والاختبار بنجاح</span>
          </div>
        </div>

        {/* Phase 2: Current Ocean Energy Phase */}
        <div className="relative rounded-3xl p-6 bg-[#F8FCFF] border-2 border-[#2563EB]/40 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white">
                <Palette className="w-3.5 h-3.5" />
                <span>المرحلة 2</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#2563EB]">
                المرحلة الحالية
              </span>
            </div>

            <h3 className="text-base font-black text-[#172B4D]">
              الهوية البصرية — Ocean Energy
            </h3>

            <ul className="space-y-2 text-xs text-[#334155] pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>تطبيق لوحة ألوان Ocean Energy المريحة للعين.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>رسم رياضي تفاعلي بـ SVG خفيف دون 3D ثقيل.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>قسم رحلة التعلم بـ 4 محطات بصرية واضحة.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>دعم تفضيلات تقليل الحركة (prefers-reduced-motion).</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D9EAF7] text-[11px] font-bold text-[#2563EB] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>جاهزة للمعاينة والاعتماد</span>
          </div>
        </div>

        {/* Phase 3: Upcoming Future Phase */}
        <div className="relative rounded-3xl p-6 bg-white border border-[#D9EAF7] shadow-2xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#64748B] border border-slate-200">
                <Clock className="w-3.5 h-3.5" />
                <span>المرحلة 3</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-[#64748B]">
                مستقبلية
              </span>
            </div>

            <h3 className="text-base font-black text-[#172B4D]">
              المحتوى الأكاديمي والتفاعلية
            </h3>

            <ul className="space-y-2 text-xs text-[#64748B] pt-1">
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>إدراج وتسمية المقررات وفق كتب الكلية الرسمية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>بناء الشروحات التفاعلية ومحاكاة الحركة.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>تفعيل بنوك الاختبارات والتقييم الذاتي.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>النشر الفعلي على نطاق Cloudflare Pages المباشر.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-[#D9EAF7] text-[11px] font-bold text-[#64748B] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>بانتظار موافقتكم والكتب</span>
          </div>
        </div>

      </div>

    </div>
  );
};
