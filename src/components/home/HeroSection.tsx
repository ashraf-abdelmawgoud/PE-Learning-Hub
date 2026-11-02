import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>المرحلة الأولى: إطلاق البنية التفاعلية والهيكل البرمجي</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight">
            المنصة التفاعلية لطلاب
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              كلية علوم الرياضة والتربية البدنية
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            بيئة تعليمية رقمية حديثة، مصممة لاستيعاب <strong className="text-slate-800 font-bold">7 كتب ومقررات أكاديمية</strong>،
            مع تجهيز كامل للشروحات التفاعلية، المحاكاة الحركية، والاختبارات الذكية دون الاعتماد على ملفات PDF التقليدية.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>استعراض المقررات الدراسية السبعة</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-200 shadow-xs transition-colors"
            >
              <Layers className="w-5 h-5 text-slate-500" />
              <span>أهداف ورؤية المنصة</span>
            </Link>
          </div>

          {/* Feature Highlights List */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>دعم كامل للغة العربية (RTL)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>مهيأ للنشر على Cloudflare Pages</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>متوافق 100% مع الهاتف والحاسوب</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>بدون أي متطلبات خادم أو تسجيل دخول</span>
            </div>
          </div>
        </div>

        {/* Highlight Stats Dashboard Card */}
        <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-700/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">07</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300">مقررات أكاديمية</div>
              <div className="text-[11px] text-slate-400">بانتظار الكتب المعتمدة</div>
            </div>

            <div className="space-y-1 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">100%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300">محتوى تفاعلي ويب</div>
              <div className="text-[11px] text-slate-400">بدون ملفات PDF جامدة</div>
            </div>

            <div className="space-y-1 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-3xl sm:text-4xl font-black text-teal-400 font-mono">DOM+SVG</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300">محاكاة وأنيميشن</div>
              <div className="text-[11px] text-slate-400">بنية جاهزة للنماذج الحركية</div>
            </div>

            <div className="space-y-1 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">0$</div>
              <div className="text-xs sm:text-sm font-bold text-slate-300">مفتوح ومجاني</div>
              <div className="text-[11px] text-slate-400">بدون اشتراكات أو قيود</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
