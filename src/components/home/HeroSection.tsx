import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, GraduationCap, Compass, ShieldCheck } from 'lucide-react';
import { SportsBiomechanicalGraphic } from './SportsBiomechanicalGraphic';

export const HeroSection: React.FC = () => {
  const scrollToJourney = () => {
    const el = document.getElementById('learning-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Right in RTL): Academic Headline & Student Focus */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Top Academic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold shadow-xs">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>كلية علوم الرياضة والتربية البدنية</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight">
              تعلّم علوم الرياضة
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                بفهم حركي وعلمي متكامل
              </span>
            </h1>

            {/* Subtitle - Student Educational Focus */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              منصة أكاديمية تفاعلية صُممت خصيصاً لدعم طلاب التربية البدنية، لتربط
              المفاهيم النظرية في مقرراتك الأكاديمية بالتحليل الحركي، وفسيولوجيا الجهد،
              والتطبيق الميداني بصورة مرئية ممتعة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-98"
              >
                <BookOpen className="w-5 h-5" />
                <span>استكشاف المقررات الدراسية (7)</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={scrollToJourney}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>كيف تبدأ رحلة التعلم؟</span>
              </button>
            </div>

            {/* Core Educational Benefits Highlights */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>فهم الميكانيكا الحيوية والمسار الحركي</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>استيعاب فسيولوجيا الجهد وأنظمة الطاقة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>اختبارات تقييمية لترسيخ المفاهيم</span>
              </div>
            </div>

            {/* Free and Accessible Badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>محتوى أكاديمي مفتوح ومجاني لجميع الطلاب دون أي رسوم أو قيود</span>
            </div>

          </div>

          {/* Right Column: Interactive Sports Science SVG Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <SportsBiomechanicalGraphic />
          </div>

        </div>

      </div>
    </section>
  );
};
