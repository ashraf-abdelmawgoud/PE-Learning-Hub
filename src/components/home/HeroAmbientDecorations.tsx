/**
 * HeroAmbientDecorations.tsx
 * Subtle Ambient Sports Animation System for OloomSport Homepage Hero
 *
 * Design Principles:
 * - Minimalist, elegant athletic line symbols (Whistle, Sports Ball, Racket, Stopwatch, Training Cone)
 * - Muted emerald/mint color palette (low opacity, non-distracting)
 * - Slow, gentle, non-synchronized floating trajectories (9–16s cycle, 7–11px travel)
 * - Safe placement: zero overlap with headline, paragraph, buttons, or Low-Poly artwork
 * - Responsive density: 5 elements on desktop, 2 non-intrusive elements on mobile
 * - Full motion accessibility: completely stationary under prefers-reduced-motion
 * - Non-interactive: pointer-events-none, aria-hidden="true"
 */

import React from 'react';
import { Timer } from 'lucide-react';

export const HeroAmbientDecorations: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Whistle Icon — Top-left corner (Visible on Mobile & Desktop, well above content) */}
      <div className="absolute top-2 sm:top-4 lg:top-5 left-3 sm:left-6 lg:left-10 animate-ambient-float-b text-[#39E66D]/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-7 sm:h-7"
        >
          <path d="M11 6a4 4 0 0 1 4 4v2h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-7a4 4 0 1 1 0-8h2" />
          <circle cx="8" cy="15" r="1.5" />
          <path d="M12 6V4a1 1 0 0 0-1-1H8" />
        </svg>
      </div>

      {/* 2. Sports Ball Outline — Top-right corner (Desktop/Tablet only, above headline) */}
      <div className="absolute top-2 sm:top-4 lg:top-5 right-4 sm:right-8 lg:right-12 hidden sm:block animate-ambient-float-a text-[#32D978]/25">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a13 13 0 0 1 0 18" />
          <path d="M3 12a13 13 0 0 1 18 0" />
        </svg>
      </div>

      {/* 3. Badminton / Tennis Racket — Upper-center inter-column gap (Desktop only, 2-column layout) */}
      <div className="absolute top-5 lg:top-6 left-[46%] -translate-x-1/2 hidden lg:block animate-ambient-float-c text-[#39E66D]/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <ellipse cx="14.5" cy="9.5" rx="5.5" ry="5.5" transform="rotate(-45 14.5 9.5)" />
          <path d="M10.6 13.4L4.5 19.5a1.41 1.41 0 0 0 2 2l6.1-6.1" />
          <path d="M12 7l5 5" />
          <path d="M14 5l5 5" />
        </svg>
      </div>

      {/* 4. Athletic Timer / Stopwatch — Bottom-left corner (Desktop/Tablet only, well below artwork) */}
      <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-4 sm:left-6 lg:left-10 hidden sm:block animate-ambient-float-b text-[#32D978]/20">
        <Timer className="w-5 h-5 sm:w-7 sm:h-7 stroke-[1.5]" />
      </div>

      {/* 5. Training Cone — Bottom-right corner (Visible on Mobile & Desktop, well below buttons) */}
      <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-3 sm:right-6 lg:right-10 animate-ambient-float-a text-[#00C853]/25">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-7 sm:h-7"
        >
          <path d="M4 20h16" />
          <path d="M7.5 20L11.2 5.5a1 1 0 0 1 1.6 0L16.5 20" />
          <path d="M9 14h6" />
          <path d="M10.2 9.5h3.6" />
        </svg>
      </div>
    </div>
  );
};
