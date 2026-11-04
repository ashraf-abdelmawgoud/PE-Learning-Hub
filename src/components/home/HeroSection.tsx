/**
 * HeroSection.tsx
 * Clean, Elegant Hero Section for PE Interactive Learning Hub
 *
 * Designed with minimal text, strong sports-education identity,
 * and high Arabic readability for sports science students.
 */

import React from 'react';
import { BookOpen, Compass, ArrowLeft } from 'lucide-react';
import { SportsMotionHeroGraphic } from './SportsMotionHeroGraphic';

export const HeroSection: React.FC = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-18 lg:pb-22 bg-gradient-to-b from-[#071C12] via-[#0B2519] to-[#071C12] text-[#F4FFF7] transition-colors" dir="rtl">
      
      {/* Subtle Atmospheric Sport Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#39E66D]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid: Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column in RTL: Clean Typography & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F4FFF7] tracking-tight leading-tight sm:leading-tight">
              تعلّم مواد علوم الرياضة
              <span className="block mt-2 bg-gradient-to-r from-[#00C853] via-[#39E66D] to-[#34D399] bg-clip-text text-transparent">
                بطريقة أبسط وأوضح
              </span>
            </h1>

            {/* Short Supporting Description */}
            <p className="text-base sm:text-lg text-[#D4E9DC]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              منصة تعليمية تفاعلية لطلاب علوم الرياضة، تجمع بين الشرح المبسط والفيديوهات التعليمية
              والاختبارات لمساعدتك على الفهم والمراجعة.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={scrollToCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-lg shadow-[#00C853]/25 hover:shadow-[#39E66D]/35 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#071C12]" />
                <span>استكشف المواد</span>
                <ArrowLeft className="w-4 h-4 text-[#071C12]" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#142B20] hover:bg-[#103D27] text-[#F4FFF7] font-bold text-sm sm:text-base border border-[#00C853]/30 shadow-xs transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#39E66D]" />
                <span>كيف تتعلم؟</span>
              </button>
            </div>

          </div>

          {/* Left Column in RTL: Pure Vector Sports Motion Graphic */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <SportsMotionHeroGraphic />
          </div>

        </div>

      </div>

    </section>
  );
};
