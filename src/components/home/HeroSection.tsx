/**
 * HeroSection.tsx
 * Refined Premium Hero Section for OloomSport (PE Interactive Learning Hub)
 *
 * HOME-REFINEMENT-02:
 * - Natural, fluid Bezier curved swoosh under the headline matching reference design
 * - Organic, non-linear atmospheric Bezier curves in upper and background sections
 * - Deep, sweeping bottom wave seamlessly fusing with the stats bar (zero double lines, zero clipping)
 * - Primary CTA «استكشف المواد» links directly to dedicated `/courses` route
 * - Responsive RTL layout for desktop, tablet, and mobile with zero horizontal overflow
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Compass,
  ArrowLeft,
  PlayCircle,
  ClipboardCheck,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { LowPolyAthletesGraphic } from './LowPolyAthletesGraphic';

export const HeroSection: React.FC = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative overflow-hidden pt-8 pb-0 sm:pt-12 lg:pt-16 bg-gradient-to-b from-[#04150C] via-[#082215] to-[#04150C] text-[#F4FFF7] transition-colors"
      dir="rtl"
    >
      {/* Subtle Top & Ambient Curved Wave Accents (Natural Bezier, never straight horizontal lines) */}
      <div className="absolute top-0 inset-x-0 h-44 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full text-[#00C853] opacity-10"
          viewBox="0 0 1440 180"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -80,35 C 320,130 700,-15 1100,75 C 1300,120 1460,35 1560,65"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M -40,75 C 380,170 780,25 1180,115 C 1360,160 1500,85 1600,100"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* Decorative Subtle Dot Patterns on Edges */}
      <div
        className="absolute top-12 right-2 sm:right-6 w-32 sm:w-48 h-56 opacity-15 pointer-events-none bg-[radial-gradient(#00C853_1.5px,transparent_1.5px)] [background-size:14px_14px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-2 sm:left-6 w-32 sm:w-48 h-56 opacity-15 pointer-events-none bg-[radial-gradient(#00C853_1.5px,transparent_1.5px)] [background-size:14px_14px]"
        aria-hidden="true"
      />

      {/* Atmospheric Sport Ambient Glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none hidden sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#39E66D]/10 rounded-full blur-3xl pointer-events-none hidden sm:block"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Right Column (Desktop RTL): Typography, Features & CTAs */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right lg:col-span-7 space-y-5 sm:space-y-6 w-full">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-black text-white leading-[1.25] sm:leading-[1.22] tracking-tight">
              <span>تعلّم </span>
              <span className="text-[#00C853] drop-shadow-[0_2px_12px_rgba(0,200,83,0.35)]">
                عُلوم الرياضة
              </span>
              <br />
              <span>بطريقة حديثة ومبسطة</span>
            </h1>

            {/* Fluid Tapered Bezier Swoosh under headline matching approved design */}
            <div className="flex justify-center lg:justify-start w-full -mt-1 sm:-mt-2">
              <svg
                className="w-48 sm:w-64 lg:w-72 h-4 sm:h-5 text-[#00C853] opacity-95"
                viewBox="0 0 280 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 6,14 C 75,2 195,2 274,13 C 190,4 85,4 6,14 Z"
                  fill="url(#title-swoosh-grad)"
                />
                <defs>
                  <linearGradient id="title-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#39E66D" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#00C853" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00E676" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Academic Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#D4E9DC]/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              دروس أكاديمية، مبسطة، فيديوهات شرح، واختبارات تفاعلية تساعدك على الفهم والمراجعة خطوة بخطوة.
            </p>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-xl mx-auto lg:mx-0 pt-1">
              
              {/* Card 1: ملخصات معتمدة */}
              <div className="bg-[#092215]/80 hover:bg-[#0D2E1D]/90 border border-[#00C853]/25 hover:border-[#00C853]/50 rounded-2xl p-2.5 sm:p-3.5 text-center transition-all duration-200 flex flex-col items-center justify-center backdrop-blur-xs shadow-xs hover:shadow-md hover:shadow-[#00C853]/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00C853]/15 flex items-center justify-center text-[#00C853] mb-1.5 sm:mb-2 border border-[#00C853]/25">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-white mb-0.5 whitespace-nowrap">
                  ملخصات معتمدة
                </span>
                <span className="text-[9px] sm:text-xs text-[#A3C7B2] font-normal leading-tight">
                  منظمة وسهلة المراجعة
                </span>
              </div>

              {/* Card 2: فيديوهات شرح */}
              <div className="bg-[#092215]/80 hover:bg-[#0D2E1D]/90 border border-[#00C853]/25 hover:border-[#00C853]/50 rounded-2xl p-2.5 sm:p-3.5 text-center transition-all duration-200 flex flex-col items-center justify-center backdrop-blur-xs shadow-xs hover:shadow-md hover:shadow-[#00C853]/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00C853]/15 flex items-center justify-center text-[#00C853] mb-1.5 sm:mb-2 border border-[#00C853]/25">
                  <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-white mb-0.5 whitespace-nowrap">
                  فيديوهات شرح
                </span>
                <span className="text-[9px] sm:text-xs text-[#A3C7B2] font-normal leading-tight">
                  بجودة عالية
                </span>
              </div>

              {/* Card 3: اختبارات تفاعلية */}
              <div className="bg-[#092215]/80 hover:bg-[#0D2E1D]/90 border border-[#00C853]/25 hover:border-[#00C853]/50 rounded-2xl p-2.5 sm:p-3.5 text-center transition-all duration-200 flex flex-col items-center justify-center backdrop-blur-xs shadow-xs hover:shadow-md hover:shadow-[#00C853]/10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00C853]/15 flex items-center justify-center text-[#00C853] mb-1.5 sm:mb-2 border border-[#00C853]/25">
                  <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <span className="text-[11px] sm:text-sm font-bold text-white mb-0.5 whitespace-nowrap">
                  اختبارات تفاعلية
                </span>
                <span className="text-[9px] sm:text-xs text-[#A3C7B2] font-normal leading-tight">
                  لتقييم مستواك
                </span>
              </div>

            </div>

            {/* Action Buttons: Primary links to /courses; Secondary scrolls to #how-it-works */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-1 w-full sm:w-auto">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-lg shadow-[#00C853]/30 hover:shadow-[#39E66D]/40 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#071C12]" />
                <span>استكشف المواد</span>
                <ArrowLeft className="w-4 h-4 text-[#071C12]" />
              </Link>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B2519]/80 hover:bg-[#123825] text-[#F4FFF7] font-bold text-sm sm:text-base border border-[#00C853]/35 shadow-xs transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#39E66D]" />
                <span>كيف تتعلم؟</span>
              </button>
            </div>

          </div>

          {/* Left Column (Desktop RTL): Approved Low-Poly Geometric Athletes Graphic */}
          <div className="lg:col-span-5 flex justify-center w-full my-4 lg:my-0">
            <LowPolyAthletesGraphic />
          </div>

        </div>
      </div>

      {/* Seamless Organic Bottom Wave Transition into Stats (Zero double lines, deep natural Bezier curve) */}
      <div className="relative w-full overflow-hidden leading-none mt-10 sm:mt-14 lg:mt-16 -mb-[1px]">
        <svg
          className="w-full h-14 sm:h-20 lg:h-24 block text-[#05180E]"
          viewBox="0 0 1440 96"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Wave fill fusing directly into the stats bar */}
          <path
            d="M 0,48 C 340,96 660,8 1020,52 C 1220,78 1360,28 1440,42 L 1440,96 L 0,96 Z"
            fill="currentColor"
          />
          {/* Luminous emerald crest stroke along the natural wave contour */}
          <path
            d="M 0,48 C 340,96 660,8 1020,52 C 1220,78 1360,28 1440,42"
            stroke="url(#bottom-wave-crest)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="bottom-wave-crest" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C853" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#39E66D" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#00C853" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00E676" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Stats Bar (Integrated & Continuous with the Wave, NO border-t, unified background) */}
      <div className="bg-[#05180E] pb-6 sm:pb-8 pt-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-x-reverse divide-[#00C853]/20 text-center items-center">
            
            {/* Stat 1: مادة متكاملة (Right in RTL) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-1 sm:px-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00C853]/15 text-[#39E66D] flex items-center justify-center border border-[#00C853]/25 shrink-0">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-center sm:text-right">
                <div className="text-sm sm:text-lg lg:text-xl font-black text-white">
                  مادة متكاملة
                </div>
                <div className="text-[10px] sm:text-xs text-[#A3C7B2]">
                  في علوم الرياضة
                </div>
              </div>
            </div>

            {/* Stat 2: 12 موضوعاً دراسياً (Center in RTL) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-1 sm:px-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00C853]/15 text-[#39E66D] flex items-center justify-center border border-[#00C853]/25 shrink-0">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-center sm:text-right">
                <div className="text-sm sm:text-lg lg:text-xl font-black text-white">
                  12
                </div>
                <div className="text-[10px] sm:text-xs text-[#A3C7B2]">
                  موضوعاً دراسياً
                </div>
              </div>
            </div>

            {/* Stat 3: +50 سؤال مراجعة (Left in RTL) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-1 sm:px-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00C853]/15 text-[#39E66D] flex items-center justify-center border border-[#00C853]/25 shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-center sm:text-right">
                <div className="text-sm sm:text-lg lg:text-xl font-black text-white">
                  +50
                </div>
                <div className="text-[10px] sm:text-xs text-[#A3C7B2]">
                  سؤال مراجعة
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
