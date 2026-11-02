import React from 'react';
import { CheckCircle2, Clock, Sparkles, ShieldCheck } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
            خطة العمل المنهجية
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            مراحل تطوير منصة PE Interactive Learning Hub
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            تطوير تدريجي ومنضبط يضمن دقة المحتوى الأكاديمي واستقرار البنية التقنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Phase 1: Completed Current Phase */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-emerald-50/50 border-2 border-emerald-500/40 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>المرحلة الأولى (المرحلة الحالية)</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  مكتملة وجاهزة
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900">
                التأسيس التقني والهيكل المعماري للمنصة
              </h3>

              <ul className="space-y-3 text-sm text-slate-700 pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>بناء المشروع باستخدام React + TypeScript + Vite بأعلى أداء.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>دعم كامل وتأصيل للغة العربية واتجاه اليمين لليسار (RTL) بخط Cairo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>واجهة رئيسية احترافية ومخصصة لمجال التربية البدنية وعلوم الرياضة.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>تجهيز 7 بطاقات مؤقتة للمقررات دون اختراع أسماء أو محتوى وهمي.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>تأكيد التوافق مع الهواتف والحواسب وجاهزية النشر على Cloudflare Pages.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200/60 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>جاهز للاختبار والمراجعة من قبلكم</span>
            </div>
          </div>

          {/* Phase 2: Upcoming Phase (Awaiting approval & Books) */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-800">
                  <Clock className="w-3.5 h-3.5" />
                  <span>المرحلة القادمة</span>
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  تتطلب موافقتكم وتزويد الكتب
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900">
                إدراج المحتوى الأكاديمي والتفاعلية
              </h3>

              <ul className="space-y-3 text-sm text-slate-600 pt-2">
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>تسمية وتوصيف المقررات السبعة بناءً على كتب الكلية الرسمية.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>تحويل الفصول والمفاهيم العلمية إلى وحدات ودروس تفاعلية غنية.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>بناء محاكيات حركية (Biomechanics) ورسوم أنيميشن للفسيولوجيا والتشريح.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>إدراج بنك الأسئلة والاختبارات التقييمية لكل مقرر دراسي.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>النشر الفعلي على نطاق Cloudflare Pages المباشر.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>لن يتم البدء بها إلا بعد اعتماد المرحلة الحالية</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
