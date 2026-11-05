/**
 * HeroAmbientDecorations.tsx
 * Floating Sports Equipment Icons for OloomSport Homepage Hero
 *
 * Design Principles:
 * - Clean, elegant, lightweight sports equipment icons:
 *   (Soccer ball, Basketball, Shuttlecock, Tennis racket, Whistle, Stopwatch, Dumbbell, Training cone)
 * - Muted frosted athletic badges with emerald/mint accents
 * - Slow, gentle, non-synchronized floating trajectories (11–16s cycle, 8–10px travel)
 * - Safe perimeter placement: framed along the hero's top and bottom margins, guaranteed zero overlap
 * - Responsive density:
 *   - Mobile: 2 compact icons strictly in upper corners (above headline)
 *   - Tablet: 4 icons in the four outer corners
 *   - Desktop: 8 icons framing the hero space above and below
 * - Full motion accessibility: completely stationary under prefers-reduced-motion
 * - Non-interactive: pointer-events-none, aria-hidden="true"
 */

import React from 'react';

export const HeroAmbientDecorations: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ================= TOP PERIMETER BAND ================= */}

      {/* 1. Whistle (صافرة تدريب) — Top-left corner (Mobile, Tablet, Desktop) */}
      <div className="absolute top-2 sm:top-2.5 lg:top-1.5 left-3 sm:left-5 lg:left-6 animate-sports-float-b">
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M11 6a4 4 0 0 1 4 4v2h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-7a4 4 0 1 1 0-8h2" />
            <circle cx="8" cy="15" r="1.5" fill="currentColor" fillOpacity="0.3" />
            <path d="M12 6V4a1 1 0 0 0-1-1H8" />
          </svg>
        </div>
      </div>

      {/* 2. Tennis Racket (مضرب تنس) — Top-center-right (Desktop only, framed safely above text) */}
      <div className="absolute top-2.5 sm:top-3 lg:top-2.5 right-[44%] hidden lg:block animate-sports-float-d">
        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#00C853]/20 shadow-xs flex items-center justify-center text-[#00C853]/80 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <ellipse cx="14.5" cy="9.5" rx="5.5" ry="5.5" transform="rotate(-45 14.5 9.5)" />
            <path d="M10.6 13.4L4.5 19.5a1.41 1.41 0 0 0 2 2l6.1-6.1" />
            <line x1="12" y1="7" x2="17" y2="12" />
            <line x1="14" y1="5" x2="19" y2="10" />
            <line x1="10" y1="9" x2="15" y2="14" />
          </svg>
        </div>
      </div>

      {/* 3. Badminton Shuttlecock (ريشة طائرة) — Top-right-mid (Desktop only, framed safely above headline) */}
      <div className="absolute top-2.5 sm:top-3 lg:top-2.5 right-[22%] hidden lg:block animate-sports-float-a">
        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M9 18a3 3 0 0 0 6 0v-1H9v1z" fill="currentColor" fillOpacity="0.3" />
            <path d="M9 17L6 7h12l-3 10" />
            <path d="M6 7l6 10" />
            <path d="M18 7l-6 10" />
            <path d="M7 11h10" />
            <path d="M8 14h8" />
          </svg>
        </div>
      </div>

      {/* 4. Basketball (كرة سلة) — Top-right corner (Mobile, Tablet, Desktop) */}
      <div className="absolute top-2 sm:top-2.5 lg:top-2.5 right-3 sm:right-5 lg:right-8 animate-sports-float-c">
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <circle cx="12" cy="12" r="9.5" />
            <line x1="2.5" y1="12" x2="21.5" y2="12" />
            <line x1="12" y1="2.5" x2="12" y2="21.5" />
            <path d="M5.5 5.5c4 4 4 9 0 13" />
            <path d="M18.5 5.5c-4 4-4 9 0 13" />
          </svg>
        </div>
      </div>

      {/* ================= BOTTOM PERIMETER BAND ================= */}

      {/* 5. Stopwatch / Timer (ساعة توقيت ميدانية) — Bottom-left corner (Tablet & Desktop) */}
      <div className="absolute bottom-2 sm:bottom-2.5 lg:bottom-1.5 left-3 sm:left-5 lg:left-6 hidden sm:block animate-sports-float-d">
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-9 lg:h-9 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 1.5" />
            <path d="M12 5V2" />
            <path d="M10 2h4" />
            <path d="M18 7l1.5-1.5" />
          </svg>
        </div>
      </div>

      {/* 6. Training Cone (قمع تدريبي) — Bottom-center-right (Desktop only, framed safely below buttons) */}
      <div className="absolute bottom-2.5 sm:bottom-3 lg:bottom-2.5 right-[44%] hidden lg:block animate-sports-float-b">
        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#39E66D]/20 shadow-xs flex items-center justify-center text-[#39E66D]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 20h16" />
            <path d="M7.5 20L11.2 5.5a1 1 0 0 1 1.6 0L16.5 20" />
            <path d="M9 14h6" />
            <path d="M10.2 9.5h3.6" />
          </svg>
        </div>
      </div>

      {/* 7. Dumbbell (أثقال / دامبل) — Bottom-right-mid (Desktop only, framed safely below buttons) */}
      <div className="absolute bottom-2.5 sm:bottom-3 lg:bottom-2.5 right-[22%] hidden lg:block animate-sports-float-c">
        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#00C853]/20 shadow-xs flex items-center justify-center text-[#00C853]/80 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M6 5v14" />
            <path d="M18 5v14" />
            <path d="M3 8v8" />
            <path d="M21 8v8" />
            <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* 8. Soccer Ball / Football (كرة قدم) — Bottom-right corner (Tablet & Desktop) */}
      <div className="absolute bottom-2 sm:bottom-2.5 lg:bottom-2.5 right-3 sm:right-5 lg:right-8 hidden sm:block animate-sports-float-a">
        <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl sm:rounded-2xl bg-[#0B2519]/55 border border-[#32D978]/20 shadow-xs flex items-center justify-center text-[#32D978]/75 backdrop-blur-[2px]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
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
