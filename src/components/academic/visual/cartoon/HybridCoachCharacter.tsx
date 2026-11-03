/**
 * HybridCoachCharacter.tsx
 * Professional Unified WebP Coach Character (Phase 4.1 / 4.2 Revision)
 * Designed for PE Interactive Learning Hub
 *
 * Core Fixes:
 * 1. Single unified graphic (coach_unified.webp): Head, neck, body, tracksuit,
 *    tactical clipboard, and pointing arm are ONE seamless piece.
 * 2. ZERO risk of head detachment or joint gaps — anatomically 100% intact.
 * 3. Minimal gentle breathing motion (-1.5px vertical micro-float) moving
 *    the entire character in unison, or fully static when paused.
 * 4. High visual fidelity matching approved reference artwork.
 */

import React from 'react';

export interface HybridCoachCharacterProps {
  x?: number;
  y?: number;
  scale?: number;
  isPaused?: boolean;
  className?: string;
}

export const HybridCoachCharacter: React.FC<HybridCoachCharacterProps> = ({
  x = 635,
  y = 135,
  scale = 0.325,
  isPaused = false,
  className = '',
}) => {
  return (
    <g
      id="hybrid-coach-character"
      transform={`translate(${x}, ${y}) scale(${scale})`}
      className={`select-none pointer-events-none ${className}`}
    >
      {/* 1. Realistic Turf Contact Shadows beneath Feet (896x1200 space) */}
      <g opacity="0.45">
        <ellipse cx="550" cy="1122" rx="88" ry="22" fill="#071C12" />
        <ellipse cx="725" cy="1126" rx="92" ry="24" fill="#071C12" />
      </g>

      {/* 2. Entire Coach Body: 100% Unified, Pristine, Anatomically Solid */}
      {/* Minimal Gentle Breathing Motion (4.5s cycle: -1.5px float, all anatomy moves in unison) */}
      <g
        style={{
          animation: isPaused ? 'none' : 'pe-coach-breathe 4.5s ease-in-out infinite',
        }}
      >
        <image
          href="/assets/poc/coach/coach_unified.webp"
          x="0"
          y="0"
          width="896"
          height="1200"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </g>
  );
};
