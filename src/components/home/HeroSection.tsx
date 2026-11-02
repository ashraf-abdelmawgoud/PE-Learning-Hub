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
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F4FAFF] via-white to-[#F4FAFF]">
      {/* Subtle Atmospheric Energy Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column in RTL: Academic Headline & Student Educational Focus */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Academic Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2563EB] text-xs sm:text-sm font-bold shadow-2xs">
              <GraduationCap className="w-4 h-4 text-[#2563EB]" />
              <span>كلية علوم الرياضة والتربية البدنية</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#172B4D] tracking-tight leading-tight sm:leading-tight">
              تعلّم علوم الرياضة
              <span className="block mt-2 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#14B8A6] bg-clip-text text-transparent">
                بفهم حركي وعلمي متكامل
              </span>
            </h1>

            {/* Subtitle - Student Focus */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              منصة أكاديمية تفاعلية صُممت خصيصاً لدعم طلاب التربية البدنية؛ تربط
              المفاهيم النظرية في مقرراتك الأكاديمية بالتحليل الحركي، وفسيولوجيا الجهد،
              والتطبيق الميداني بتجربة بصرية مريحة للعين وممتعة.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 active:scale-98"
              >
                <BookOpen className="w-5 h-5" />
                <span>استكشاف المقررات الدراسية (7)</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={scrollToJourney}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50/60 text-[#172B4D] font-bold text-sm sm:text-base border border-[#D9EAF7] shadow-2xs transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#06B6D4]" />
                <span>كيف تبدأ رحلة التعلم؟</span>
              </button>
            </div>

            {/* Core Educational Benefits Highlights */}
            <div className="pt-6 border-t border-[#D9EAF7] flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-xs sm:text-sm text-[#334155] font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <span>فهم الميكانيكا الحيوية والمسار الحركي</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                <span>استيعاب فسيولوجيا الجهد وأنظمة الطاقة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]" />
                <span>اختبارات تقييمية لترسيخ المفاهيم</span>
              </div>
            </div>

            {/* Free and Accessible Badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>محتوى أكاديمي مجاني ومفتوح لجميع الطلاب بدون اشتراكات أو تعقيدات تسجيل</span>
            </div>

          </div>

          {/* Left Column in RTL: Interactive Sports Biomechanical Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <SportsBiomechanicalGraphic />
          </div>

        </div>

      </div>
    </section>
  );
};
