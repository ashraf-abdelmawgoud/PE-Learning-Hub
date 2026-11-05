/**
 * HeroAmbientDecorations.tsx
 * Floating Sports Equipment Icons for OloomSport Homepage Hero
 *
 * Design Principles:
 * - Natural, organic distribution across available negative space (upper, middle, lower).
 * - Avoids clustering in corners or along rigid outer edges.
 * - Varied, harmonious icon sizes with frosted athletic container styling.
 * - Responsive density:
 *   - Mobile (< sm): 4 compact, delicate icons staggered safely around the centered headline.
 *   - Tablet (sm–lg): 6 icons distributed across upper, middle flanks, and lower areas.
 *   - Desktop (lg+): 8 icons framing the hero organically across upper, central valley, and lower areas.
 * - Natural multi-point floating trajectories (13s–18s cycles, 7–10px travel, subtle rotation).
 * - Guaranteed zero collision with headline, description, CTAs, or the stationary Low-Poly illustration.
 * - Full motion accessibility: completely stationary under prefers-reduced-motion.
 * - Non-interactive: pointer-events-none, aria-hidden="true".
 */

import React from 'react';

export const HeroAmbientDecorations: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Whistle (صافرة تدريب)
          - Mobile: High Upper-Left (top-2 left-2.5)
          - Tablet: Upper-Left (sm:top-4 sm:left-6)
          - Desktop: Upper-Left Shoulder (lg:top-2 lg:left-6) */}
      <div className="absolute top-2 sm:top-4 lg:top-2 left-2.5 sm:left-6 lg:left-6 animate-sports-float-a">
        <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 lg:w-9 lg:h-9 rounded-xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5">
            <path d="M11 6a4 4 0 0 1 4 4v2h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-7a4 4 0 1 1 0-8h2" />
            <circle cx="8" cy="15" r="1.5" fill="currentColor" fillOpacity="0.3" />
            <path d="M12 6V4a1 1 0 0 0-1-1H8" />
          </svg>
        </div>
      </div>

      {/* 2. Tennis Racket (مضرب تنس)
          - Mobile: Mid-Left Headline Flank (top-9 left-4)
          - Tablet: Mid-Left Flank (sm:top-[48%] sm:left-4)
          - Desktop: Upper-Center Valley (lg:top-[9%] lg:right-[48%]) */}
      <div className="absolute top-9 sm:top-[48%] lg:top-[9%] left-4 sm:left-4 lg:left-auto lg:right-[48%] animate-sports-float-b">
        <div className="w-6 h-6 sm:w-8.5 sm:h-8.5 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-[#0B2519]/55 border border-[#00C853]/20 shadow-xs flex items-center justify-center text-[#00C853]/80 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5">
            <ellipse cx="14.5" cy="9.5" rx="5.5" ry="5.5" transform="rotate(-45 14.5 9.5)" />
            <path d="M10.6 13.4L4.5 19.5a1.41 1.41 0 0 0 2 2l6.1-6.1" />
            <line x1="12" y1="7" x2="17" y2="12" />
            <line x1="14" y1="5" x2="19" y2="10" />
            <line x1="10" y1="9" x2="15" y2="14" />
          </svg>
        </div>
      </div>

      {/* 3. Basketball (كرة سلة)
          - Mobile: High Upper-Right (top-2.5 right-2.5)
          - Tablet: Upper-Right (sm:top-5 sm:right-6)
          - Desktop: Upper-Right Atmospheric (lg:top-[6%] lg:right-[8%]) */}
      <div className="absolute top-2.5 sm:top-5 lg:top-[6%] right-2.5 sm:right-6 lg:right-[8%] animate-sports-float-c">
        <div className="w-7.5 h-7.5 sm:w-9.5 sm:h-9.5 lg:w-11 lg:h-11 rounded-xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5">
            <circle cx="12" cy="12" r="9.5" />
            <line x1="2.5" y1="12" x2="21.5" y2="12" />
            <line x1="12" y1="2.5" x2="12" y2="21.5" />
            <path d="M5.5 5.5c4 4 4 9 0 13" />
            <path d="M18.5 5.5c-4 4-4 9 0 13" />
          </svg>
        </div>
      </div>

      {/* 4. Badminton Shuttlecock (ريشة طائرة)
          - Mobile: Mid-Right Headline Flank (top-9.5 right-4)
          - Tablet: Hidden to maintain clean side flanks (sm:hidden)
          - Desktop: Mid-High Right (lg:block lg:top-[12%] lg:right-[28%]) */}
      <div className="absolute top-9.5 sm:hidden lg:block lg:top-[12%] right-4 sm:right-auto lg:right-[28%] animate-sports-float-d">
        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5">
            <path d="M9 18a3 3 0 0 0 6 0v-1H9v1z" fill="currentColor" fillOpacity="0.3" />
            <path d="M9 17L6 7h12l-3 10" />
            <path d="M6 7l6 10" />
            <path d="M18 7l-6 10" />
            <path d="M7 11h10" />
            <path d="M8 14h8" />
          </svg>
        </div>
      </div>

      {/* 5. Stopwatch / Timer (ساعة توقيت ميدانية)
          - Mobile: Hidden
          - Tablet: Mid-Right Flank (sm:block sm:top-[42%] sm:right-4)
          - Desktop: Mid-Low Center (lg:top-auto lg:bottom-[18%] lg:right-[52%]) */}
      <div className="absolute hidden sm:block sm:top-[42%] lg:top-auto lg:bottom-[18%] sm:right-4 lg:right-[52%] animate-sports-float-e">
        <div className="w-8.5 h-8.5 lg:w-9.5 lg:h-9.5 rounded-xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 1.5" />
            <path d="M12 5V2" />
            <path d="M10 2h4" />
            <path d="M18 7l1.5-1.5" />
          </svg>
        </div>
      </div>

      {/* 6. Training Cone (قمع تدريبي)
          - Mobile & Tablet: Hidden
          - Desktop: Lower Mid-Right (lg:block lg:bottom-[9%] lg:right-[26%]) */}
      <div className="absolute hidden lg:block lg:bottom-[9%] lg:right-[26%] animate-sports-float-f">
        <div className="w-9 h-9 rounded-xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
            <path d="M4 20h16" />
            <path d="M7.5 20L11.2 5.5a1 1 0 0 1 1.6 0L16.5 20" />
            <path d="M9 14h6" />
            <path d="M10.2 9.5h3.6" />
          </svg>
        </div>
      </div>

      {/* 7. Dumbbell (أثقال / دامبل)
          - Mobile: Hidden
          - Tablet: Lower-Left (sm:block sm:bottom-5 sm:left-6)
          - Desktop: Lower-Left (lg:bottom-3 lg:left-6) */}
      <div className="absolute hidden sm:block sm:bottom-5 lg:bottom-3 left-6 animate-sports-float-b">
        <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 lg:w-10 lg:h-10 rounded-xl bg-[#0B2519]/55 border border-[#00C853]/20 shadow-xs flex items-center justify-center text-[#00C853]/80 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 sm:w-5 sm:h-5">
            <path d="M6 5v14" />
            <path d="M18 5v14" />
            <path d="M3 8v8" />
            <path d="M21 8v8" />
            <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* 8. Soccer Ball / Football (كرة قدم)
          - Mobile: Hidden
          - Tablet: Lower-Right (sm:block sm:bottom-6 sm:right-6)
          - Desktop: Lower Far-Right (lg:bottom-[13%] lg:right-[8%]) */}
      <div className="absolute hidden sm:block sm:bottom-6 lg:bottom-[13%] right-6 lg:right-[8%] animate-sports-float-a">
        <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 lg:w-11 lg:h-11 rounded-xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-5.5 lg:h-5.5">
            <circle cx="12" cy="12" r="9.5" />
            <polygon points="12,7.5 15.5,10 14,14 10,14 8.5,10" fill="currentColor" fillOpacity="0.25" />
            <line x1="12" y1="7.5" x2="12" y2="2.5" />
            <line x1="15.5" y1="10" x2="20" y2="8" />
            <line x1="14" y1="14" x2="18" y2="18" />
            <line x1="10" y1="14" x2="6" y2="18" />
            <line x1="8.5" y1="10" x2="4" y2="8" />
          </svg>
        </div>
      </div>
    </div>
  );
};
