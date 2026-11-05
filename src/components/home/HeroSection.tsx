/**
 * HeroSection.tsx
 * Clean, Elegant Hero Section for PE Interactive Learning Hub
 *
 * Layout:
 * - Right (Desktop RTL): Headline, Short Description, Primary & Secondary CTAs
 * - Left (Desktop RTL): Colorful Low-Poly Geometric Athletes Illustration
 * - Mobile: Headline & CTAs prominent above-the-fold, illustration proportional below
 */

import React from 'react';
import { BookOpen, Compass, ArrowLeft } from 'lucide-react';
import { LowPolyAthletesGraphic } from './LowPolyAthletesGraphic';

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
    <section className="relative overflow-hidden pt-8 pb-12 sm:pb-14 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#071C12] via-[#0B2519] to-[#071C12] text-[#F4FFF7] transition-colors" dir="rtl">
      
      {/* Subtle Atmospheric Sport Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#39E66D]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Container: Flex Column on Mobile (with reordered children), 12-col Grid on Desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-14 items-center">
          
          {/* Typography & CTAs Container:
              On Mobile: display: contents makes Headline, Description, and CTAs direct flex items
              On Desktop: lg:flex lg:flex-col lg:col-span-7 creates the right-column layout in RTL */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7 lg:space-y-6 text-center lg:text-right">
            
            {/* 1. Main Headline (order-1 on mobile) - Single continuous semantic H1 with inline spans (Cairo Bold 700) */}
            <h1 className="order-1 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight sm:leading-tight">
              <span className="text-[#32D978]">علوم الرياضة</span>{' '}
              <span className="text-[#FFFFFF]">بأسلوب مختلف</span>
            </h1>

            {/* 2. Short Supporting Description (order-2 on mobile) */}
            <p className="order-2 text-base sm:text-lg text-[#D4E9DC]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              دروس مبسطة، فيديوهات تعليمية، واختبارات تفاعلية تساعدك على الفهم والمراجعة.
            </p>

            {/* 4 & 5. Action Buttons (order-4 on mobile: 4. Primary CTA, 5. Secondary CTA) */}
            <div className="order-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1 sm:pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-lg shadow-[#00C853]/25 hover:shadow-[#39E66D]/35 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#071C12]" />
                <span>استكشف المواد</span>
                <ArrowLeft className="w-4 h-4 text-[#071C12]" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-[#142B20] hover:bg-[#103D27] text-[#F4FFF7] font-bold text-sm sm:text-base border border-[#00C853]/30 shadow-xs transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#39E66D]" />
                <span>كيف تتعلم؟</span>
              </button>
            </div>

          </div>

          {/* 3. Approved LowPolyAthletesGraphic (order-3 on mobile, between description and CTAs) */}
          <div className="order-3 lg:order-none lg:col-span-5 flex justify-center w-full my-2 sm:my-3 lg:my-0">
            <LowPolyAthletesGraphic />
          </div>

        </div>

      </div>

    </section>
  );
};
