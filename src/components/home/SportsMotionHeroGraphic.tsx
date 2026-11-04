/**
 * SportsMotionHeroGraphic.tsx
 * Elegant Sports & Movement Visual Composition for PE Interactive Learning Hub Hero
 *
 * Communicates: Sports + Education + Movement
 * - Stylized running athlete silhouette in forward dynamic stride
 * - Subtle stadium athletics track curves
 * - Integrated educational trajectory cues (academic graduation cap & open book)
 * - Light kinetic speed lines in Sport Energy emerald tones
 * - 100% lightweight pure vector SVG + Tailwind (Zero external image dependencies)
 */

import React from 'react';

export const SportsMotionHeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none" dir="rtl">
      
      {/* Background Soft Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00C853]/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      {/* Main Athletic Composition Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0E2F20]/90 to-[#071C12]/95 border-2 border-[#1B5E3A]/80 shadow-2xl shadow-[#00C853]/10 overflow-hidden backdrop-blur-md p-4 sm:p-6">
        
        {/* Vector SVG Stage */}
        <svg
          viewBox="0 0 500 360"
          className="w-full h-auto drop-shadow-lg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="رسم توضيحي حركي يعبر عن علوم الرياضة والحركة والتعليم"
        >
          <defs>
            {/* Athletic Gradients */}
            <linearGradient id="runnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#39E66D" />
              <stop offset="50%" stopColor="#00C853" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <linearGradient id="trackGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#071C12" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00C853" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#39E66D" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="motionArcGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00C853" stopOpacity="0.05" />
              <stop offset="70%" stopColor="#39E66D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F4FFF7" stopOpacity="0.95" />
            </linearGradient>

            <radialGradient id="runnerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00C853" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00C853" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Field Light */}
          <circle cx="260" cy="170" r="130" fill="url(#runnerGlow)" />

          {/* 1. Athletics Running Track Curves (Curved Stadium Lanes) */}
          <g opacity="0.85">
            {/* Lane 1 Outer */}
            <path
              d="M 20 310 C 120 320, 240 280, 360 220 C 420 190, 460 140, 480 80"
              stroke="url(#trackGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Lane 2 Mid Divider (Dashed) */}
            <path
              d="M 35 325 C 135 335, 255 295, 375 235 C 435 205, 475 155, 492 95"
              stroke="#00C853"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Lane 3 Inner */}
            <path
              d="M 50 340 C 150 350, 270 310, 390 250 C 450 220, 490 170, 505 110"
              stroke="#1B5E3A"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
          </g>

          {/* 2. Educational & Motion Trajectory Arc */}
          <path
            d="M 60 250 Q 200 90 410 110"
            stroke="url(#motionArcGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />

          {/* 3. Dynamic Velocity Speed Lines */}
          <g stroke="#39E66D" strokeLinecap="round" opacity="0.65">
            <line x1="140" y1="130" x2="200" y2="130" strokeWidth="2" strokeDasharray="12 8" />
            <line x1="120" y1="160" x2="190" y2="160" strokeWidth="2.5" strokeDasharray="16 10" />
            <line x1="150" y1="190" x2="210" y2="190" strokeWidth="1.5" strokeDasharray="8 6" />
            <line x1="180" y1="225" x2="230" y2="225" strokeWidth="2" strokeDasharray="10 8" />
          </g>

          {/* 4. Stylized Athletic Runner Silhouette (Forward Sprint Movement) */}
          <g transform="translate(195, 65)">
            
            {/* Head & Athletic Cap/Visor */}
            <circle cx="115" cy="35" r="15" fill="url(#runnerGrad)" />
            {/* Dynamic Visor / Gaze Forward */}
            <path
              d="M 125 31 L 138 33 L 126 38 Z"
              fill="#F4FFF7"
              opacity="0.9"
            />

            {/* Torso (Athletic Lean Forward) */}
            <path
              d="M 105 52 L 122 55 C 124 75, 115 105, 96 128 L 82 122 C 95 98, 102 75, 105 52 Z"
              fill="url(#runnerGrad)"
            />

            {/* Trailing Arm (Backward Drive) */}
            <path
              d="M 103 62 L 68 85 L 42 75"
              stroke="url(#runnerGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="42" cy="75" r="5" fill="#39E66D" />

            {/* Lead Arm (Forward Pump Drive) */}
            <path
              d="M 118 64 L 145 78 L 158 58"
              stroke="url(#runnerGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="158" cy="58" r="5" fill="#F4FFF7" />

            {/* Lead Leg (High Knee Drive Forward) */}
            <path
              d="M 94 124 L 126 142 L 112 195"
              stroke="url(#runnerGrad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Lead Running Shoe */}
            <path
              d="M 112 195 L 124 205 L 135 203"
              stroke="#F4FFF7"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Trailing Leg (Powerful Push-Off Extension) */}
            <path
              d="M 85 125 L 52 165 L 18 200"
              stroke="url(#runnerGrad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Trailing Running Shoe */}
            <path
              d="M 18 200 L 8 206 L 5 215"
              stroke="#39E66D"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          {/* 5. Minimal Educational Symbols along Trajectory */}
          
          {/* Symbol A: Graduation Cap Symbol (Education / Academic Foundation) */}
          <g transform="translate(85, 230)">
            <circle cx="0" cy="0" r="22" fill="#071C12" stroke="#00C853" strokeWidth="2" />
            {/* Academic Cap Icon Path */}
            <path
              d="M -11 -2 L 0 -7 L 11 -2 L 0 3 Z"
              fill="#39E66D"
            />
            <path
              d="M -7 0 L -7 5 Q 0 8 7 5 L 7 0"
              stroke="#39E66D"
              strokeWidth="1.6"
              fill="none"
            />
            <line x1="8" y1="-0.5" x2="10" y2="6" stroke="#00C853" strokeWidth="1.5" />
          </g>

          {/* Symbol B: Open Book / Knowledge Symbol (Sports Curriculum) */}
          <g transform="translate(415, 115)">
            <circle cx="0" cy="0" r="24" fill="#071C12" stroke="#39E66D" strokeWidth="2" />
            <circle cx="0" cy="0" r="18" fill="#103D27" opacity="0.6" />
            {/* Book Icon Path */}
            <path
              d="M -7 -4 C -4 -5, -1 -5, 0 -3 C 1 -5, 4 -5, 7 -4 L 7 5 C 4 4, 1 4, 0 6 C -1 4, -4 4, -7 5 Z"
              stroke="#F4FFF7"
              strokeWidth="1.8"
              fill="none"
              strokeLinejoin="round"
            />
            <line x1="0" y1="-3" x2="0" y2="6" stroke="#00C853" strokeWidth="1.5" />
          </g>

          {/* Finish / Growth Sparkle Node */}
          <g transform="translate(450, 85)">
            <circle cx="0" cy="0" r="4" fill="#39E66D" />
            <line x1="-8" y1="0" x2="8" y2="0" stroke="#F4FFF7" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#F4FFF7" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Ground Contact Pulse Accent */}
          <ellipse cx="215" cy="275" rx="28" ry="4" fill="#00C853" opacity="0.3" />
        </svg>

        {/* Clean, Sports-Educational Micro-Cues Footer */}
        <div className="mt-3 pt-3 border-t border-[#143D27] flex items-center justify-between text-xs text-[#D4E9DC] font-semibold">
          <span className="flex items-center gap-1.5 text-[#39E66D]">
            <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            <span>حركة ورياضة</span>
          </span>
          <span className="text-[#86efac]/80 font-mono text-[11px]">
            SPORT SCIENCES • PE HUB
          </span>
          <span className="flex items-center gap-1.5 text-[#39E66D]">
            <span>شرح وبحث وتطبيق</span>
            <span className="w-2 h-2 rounded-full bg-[#39E66D]" />
          </span>
        </div>

      </div>

    </div>
  );
};

