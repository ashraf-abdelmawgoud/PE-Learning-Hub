/**
 * HybridCoachCharacter.tsx
 * Professional Layered WebP Coach Character Rig (Phase 4.1B)
 * Designed for PE Interactive Learning Hub
 *
 * Built from the approved reference artwork:
 * - Layer 1: Body & Legs (coach_body_full.webp, 50.19 KiB)
 * - Layer 2: Head & Cap (coach_head_full.webp, 12.52 KiB) - Articulated neck pivot (540, 280)
 * - Layer 3: Arm & Clipboard (coach_arm_full.webp, 11.03 KiB) - Articulated shoulder pivot (425, 305)
 * - Subtle Gentle Motion: Vertical breathing & micro head-tilt, locked arm (0°)
 * - High-performance SVG image rendering with hardware-accelerated transforms
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
      {/* 1. Realistic Turf Contact Shadows beneath Feet (Coordinate space: 896 x 1200) */}
      <g opacity="0.45">
        <ellipse cx="550" cy="1122" rx="88" ry="22" fill="#071C12" />
        <ellipse cx="725" cy="1126" rx="92" ry="24" fill="#071C12" />
      </g>

      {/* 2. Entire Coach Body with Gentle Breathing Motion (4.5s cycle: -1.8px) */}
      <g
        style={{
          animation: isPaused ? 'none' : 'pe-coach-breathe 4.5s ease-in-out infinite',
        }}
      >
        {/* Layer 1: Body, Torso, Tracksuit Legs and Shoes */}
        <image
          href="/assets/poc/coach/coach_body_full.webp"
          x="0"
          y="0"
          width="896"
          height="1200"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Layer 2: Articulated Head & Visor Cap */}
        {/* Pivot Point at base of neck: x = 540, y = 280 */}
        <g
          transform="translate(540, 280)"
          style={{
            transformOrigin: '0px 0px',
            animation: isPaused ? 'none' : 'pe-coach-head-nod 5.2s ease-in-out infinite',
          }}
        >
          <image
            href="/assets/poc/coach/coach_head_full.webp"
            x="-540"
            y="-280"
            width="896"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* Layer 3: Pointing Arm & Tactical Clipboard */}
        {/* Pivot Point at shoulder joint: x = 425, y = 305 */}
        {/* In Scene 1: Locked in place at 0° as approved */}
        <g transform="translate(425, 305)">
          <image
            href="/assets/poc/coach/coach_arm_full.webp"
            x="-425"
            y="-305"
            width="896"
            height="1200"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </g>
    </g>
  );
};
