import React from 'react';
import { CheckCircle2, Clock, Sparkles, ShieldCheck, Palette } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <div className="space-y-8 pt-6">
      
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
          خطة العمل والشفافية البرمجية
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          خارطة الطريق المنهجية لتطوير المنصة
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          تطوير تدريجي منضبط يضمن استقرار البنية الهندسية قبل الانتقال لإدراج المحتوى الأكاديمي.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Phase 1 */}
        <div className="relative rounded-3xl p-6 bg-emerald-50/40 border border-emerald-500/30 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-600 text-white">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>المرحلة 1</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-emerald-800">
                مكتملة
              </span>
            </div>

            <h3 className="text-base font-black text-slate-900">
              التأسيس التقني والهيكل المعماري
            </h3>

            <ul className="space-y-2 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>بناء بيئة العمل بـ React 19 + TypeScript + Vite.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>دعم اللغة العربية و RTL بالكامل بخط Cairo.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>إنشاء 7 بطاقات برمجية دون اختراع أسماء وهمية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>تأصيل العمل بدون Backend أو تسجيل حسابات.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-emerald-200/50 text-[11px] font-bold text-emerald-800 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>تم التحقق والاختبار</span>
          </div>
        </div>

        {/* Phase 2: Current Phase */}
        <div className="relative rounded-3xl p-6 bg-cyan-50/40 border-2 border-cyan-500/40 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-600 text-white">
                <Palette className="w-3.5 h-3.5" />
                <span>المرحلة 2</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-cyan-800">
                المرحلة الحالية
              </span>
            </div>

            <h3 className="text-base font-black text-slate-900">
              الهوية البصرية وتجربة المستخدم
            </h3>

            <ul className="space-y-2 text-xs text-slate-700 pt-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>رسم رياضي تفاعلي خفيف بـ SVG دون 3D ثقيل.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>توضيح مسار رحلة التعلم التفاعلية للطلاب.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>تخفيف النصوص التقنية وتكثيف الفوائد الرياضية.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <span>دعم تفضيلات تقليل الحركة (prefers-reduced-motion).</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-3 border-t border-cyan-200/50 text-[11px] font-bold text-cyan-800 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>قيد المعاينة والاعتماد</span>
          </div>
        </div>

        {/* Phase 3: Upcoming Future Phase */}
        <div className="relative rounded-3xl p-6 bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                <Clock className="w-3.5 h-3.5" />
                <span>المرحلة 3</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-500">
                مستقبلية
              </span>
            </div>

            <h3 className="text-base font-black text-slate-900">
              المحتوى الأكاديمي والتفاعلية
            </h3>

            <ul className="space-y-2 text-xs text-slate-600 pt-1">
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

          <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>بانتظار موافقتكم والكتب</span>
          </div>
        </div>

      </div>

    </div>
  );
};
