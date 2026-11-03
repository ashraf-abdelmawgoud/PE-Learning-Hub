/**
 * HeroSection.tsx
 * Premium Hero Section for PE Interactive Learning Hub
 *
 * Designed specifically for university students in Physical Education & Sports Sciences.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, GraduationCap, Compass, ShieldCheck } from 'lucide-react';
import { SportsAcademicHeroGraphic } from './SportsAcademicHeroGraphic';

export const HeroSection: React.FC = () => {
  const scrollToLearningExperience = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#071C12] via-[#0B2519] to-[#071C12] text-[#F4FFF7] transition-colors" dir="rtl">
      
      {/* Subtle Atmospheric Sport Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#39E66D]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column in RTL: Academic Headline & Student Educational Focus */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Academic Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-[#142B20] border border-[#00C853]/40 text-[#39E66D] text-xs font-bold shadow-xs max-w-full text-center">
              <GraduationCap className="w-4 h-4 text-[#00C853] shrink-0" />
              <span className="leading-tight">منصة أكاديمية تفاعلية لطلاب علوم الرياضة</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4FFF7] tracking-tight leading-tight sm:leading-tight">
              مقررات التربية الرياضية...
              <span className="block mt-2 bg-gradient-to-r from-[#00C853] via-[#39E66D] to-[#34D399] bg-clip-text text-transparent">
                بطريقة أسهل للفهم والتعلّم
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#D4E9DC]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              منصة تعليمية تفاعلية مجانية لطلاب كليات التربية الرياضية وعلوم الرياضة،
              تجمع بين الشرح المبسط والفيديوهات التعليمية والاختبارات لمساعدتك على فهم
              مقرراتك ومراجعتها.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-lg shadow-[#00C853]/25 hover:shadow-[#39E66D]/35 transition-all duration-200 active:scale-98"
              >
                <BookOpen className="w-5 h-5 text-[#071C12]" />
                <span>استكشف المقررات</span>
                <ArrowLeft className="w-4 h-4 text-[#071C12]" />
              </Link>

              <button
                type="button"
                onClick={scrollToLearningExperience}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#142B20] hover:bg-[#103D27] text-[#F4FFF7] font-bold text-sm sm:text-base border border-[#00C853]/30 shadow-xs transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#39E66D]" />
                <span>كيف تتعلم معنا؟</span>
              </button>
            </div>

            {/* Core Educational Pillars */}
            <div className="pt-6 border-t border-[#143D27] flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-[#D4E9DC] font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00C853] shrink-0 shadow-xs shadow-[#00C853]" />
                <span>شرح مبسط ومباشر</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#39E66D] shrink-0 shadow-xs shadow-[#39E66D]" />
                <span>أمثلة تطبيقية ميدانية</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34D399] shrink-0 shadow-xs shadow-[#34D399]" />
                <span>أنشطة واختبارات لترسيخ الفهم</span>
              </div>
            </div>

            {/* Free Academic Access Notice */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#86efac]/80 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#00C853] shrink-0" />
              <span>محتوى أكاديمي مجاني ومفتوح 100% لجميع طلاب علوم الرياضة</span>
            </div>

          </div>

          {/* Left Column in RTL: Sports-Academic Hero Graphic */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <SportsAcademicHeroGraphic />
          </div>

        </div>

      </div>
    </section>
  );
};
