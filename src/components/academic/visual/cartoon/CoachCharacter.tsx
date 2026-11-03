/**
 * CoachCharacter.tsx
 * Premium 2D Educational Cartoon Character: PE Teacher / Coach (كابتن المعلم)
 * Designed for the PE Interactive Learning Hub (Phase 4.1A)
 *
 * Features:
 * - Natural cartoon anatomy: articulated neck, shoulders, curved limbs, athletic jacket folds.
 * - Expressive facial features: smiling mouth, warm cartoon eyes with specular highlights, athletic cap.
 * - Sport Energy palette: #071C12, #103D27, #00C853, #39E66D accents.
 * - Dynamic whistle on braided lanyard with physical sway keyframes.
 * - Tactical clipboard under left arm with court schematics.
 * - Modular pose support ('welcome' for Scene 1, 'pointing' for Scene 2, 'coaching' for Scene 3).
 * - Ultra-lightweight pure SVG vector art (zero external bitmaps).
 */

import React from 'react';

export interface CoachCharacterProps {
  x: number;
  y: number;
  scale?: number;
  pose?: 'welcome' | 'pointing' | 'coaching';
  pointerAngle?: number;
  isPaused?: boolean;
  className?: string;
}

export const CoachCharacter: React.FC<CoachCharacterProps> = ({
  x,
  y,
  scale = 1,
  pose = 'welcome',
  pointerAngle = 0,
  isPaused = false,
  className = '',
}) => {
  return (
    <g
      transform={`translate(${x}, ${y}) scale(${scale})`}
      className={`select-none ${className}`}
    >
      {/* 1. Ground Contact Shadow (Soft diffused ellipse on turf) */}
      <ellipse cx="50" cy="192" rx="42" ry="11" fill="#071C12" opacity="0.45" />

      {/* 2. Tracksuit Legs & Athletic Trousers */}
      {/* Left Leg */}
      <g>
        <path
          d="M 33 115 C 32 135 30 160 28 178 L 41 178 C 43 160 45 135 46 115 Z"
          fill="#071C12"
        />
        {/* Emerald Side Piping */}
        <path
          d="M 34 116 C 33 135 31 160 29 177"
          stroke="#00C853"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />
      </g>

      {/* Right Leg */}
      <g>
        <path
          d="M 54 115 C 55 135 57 160 59 178 L 72 178 C 70 160 68 135 67 115 Z"
          fill="#071C12"
        />
        {/* Emerald Side Piping */}
        <path
          d="M 71 116 C 69 135 67 160 65 177"
          stroke="#00C853"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />
      </g>

      {/* 3. Athletic Running Sneakers */}
      {/* Left Sneaker */}
      <g transform="translate(18, 172)">
        {/* Sole Tread */}
        <path
          d="M 6 12 C 6 12 14 17 27 16 C 30 16 31 13 30 10 L 10 9 C 8 9 6 10 6 12 Z"
          fill="#103D27"
        />
        {/* White Midsole Cushion */}
        <path
          d="M 8 10 C 8 10 16 14 28 13 C 29 11 28 8 26 8 L 10 7 C 8 7 8 8 8 10 Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="0.5"
        />
        {/* Sneaker Upper Body (Emerald Green) */}
        <path
          d="M 10 7 C 10 3 13 0 17 0 L 22 2 C 26 5 27 7 26 8 L 8 9 Z"
          fill="#00C853"
        />
        {/* White Toe Cap & Curved Laces */}
        <path d="M 22 3 L 26 8" stroke="#FFFFFF" strokeWidth="1" />
        <path d="M 19 2 L 23 6" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="21" cy="4" r="1" fill="#39E66D" />
      </g>

      {/* Right Sneaker */}
      <g transform="translate(52, 172)">
        {/* Sole Tread */}
        <path
          d="M 6 12 C 6 12 14 17 27 16 C 30 16 31 13 30 10 L 10 9 C 8 9 6 10 6 12 Z"
          fill="#103D27"
        />
        {/* White Midsole */}
        <path
          d="M 8 10 C 8 10 16 14 28 13 C 29 11 28 8 26 8 L 10 7 C 8 7 8 8 8 10 Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="0.5"
        />
        {/* Sneaker Upper */}
        <path
          d="M 10 7 C 10 3 13 0 17 0 L 22 2 C 26 5 27 7 26 8 L 8 9 Z"
          fill="#00C853"
        />
        <path d="M 22 3 L 26 8" stroke="#FFFFFF" strokeWidth="1" />
        <path d="M 19 2 L 23 6" stroke="#FFFFFF" strokeWidth="1" />
        <circle cx="21" cy="4" r="1" fill="#39E66D" />
      </g>

      {/* 4. Torso with Athletic Tracksuit Jacket (Curved seams, zipper, gradient) */}
      <g>
        {/* Jacket Body */}
        <path
          d="M 24 50 C 26 44 38 42 50 42 C 62 42 74 44 76 50 C 74 72 72 98 70 118 C 58 120 42 120 30 118 C 28 98 26 72 24 50 Z"
          fill="#103D27"
          stroke="#071C12"
          strokeWidth="1.5"
        />
        {/* Side Ventilation Panels */}
        <path
          d="M 25 54 C 27 75 29 98 31 116 L 36 116 C 34 98 32 75 30 54 Z"
          fill="#071C12"
          opacity="0.6"
        />
        <path
          d="M 75 54 C 73 75 71 98 69 116 L 64 116 C 66 98 68 75 70 54 Z"
          fill="#071C12"
          opacity="0.6"
        />
        {/* Center Zipper Line */}
        <line x1="50" y1="44" x2="50" y2="118" stroke="#39E66D" strokeWidth="2.5" />
        <rect x="48.5" y="52" width="3" height="6" rx="1.5" fill="#FFFFFF" />

        {/* Coach Athletic Crest Badge on Left Chest */}
        <g transform="translate(34, 58)">
          <path d="M 0 0 L 10 0 C 10 7 5 10 5 10 C 5 10 0 7 0 0 Z" fill="#00C853" stroke="#FFFFFF" strokeWidth="0.8" />
          <polygon points="5,2 7,6 2,4" fill="#FFFFFF" />
        </g>
      </g>

      {/* 5. Left Arm with Tactical Clipboard */}
      <g>
        {/* Left Shoulder & Upper Arm */}
        <path
          d="M 25 48 C 18 58 12 72 15 85 C 17 92 24 94 28 88 C 30 80 29 65 30 52 Z"
          fill="#103D27"
          stroke="#071C12"
          strokeWidth="1"
        />
        {/* Wristband */}
        <rect x="15" y="84" width="10" height="4" rx="1.5" fill="#00C853" />
        {/* Hand holding clipboard */}
        <circle cx="20" cy="91" r="5" fill="#FED7AA" />

        {/* Tactical Clipboard */}
        <g transform="translate(8, 70) rotate(-12)">
          {/* Board */}
          <rect x="0" y="0" width="22" height="30" rx="3" fill="#334155" stroke="#1E293B" strokeWidth="1" />
          {/* Clip */}
          <rect x="7" y="-2" width="8" height="4" rx="1.5" fill="#CBD5E1" />
          {/* Paper with Court Tactics */}
          <rect x="2" y="3" width="18" height="24" rx="1.5" fill="#FFFFFF" />
          <rect x="4" y="6" width="14" height="18" fill="none" stroke="#00C853" strokeWidth="0.8" />
          <circle cx="11" cy="15" r="3" fill="none" stroke="#00C853" strokeWidth="0.8" />
          <line x1="4" y1="15" x2="18" y2="15" stroke="#00C853" strokeWidth="0.8" />
        </g>
      </g>

      {/* 6. Whistle & Braided Lanyard with Physical Sway Motion */}
      <g
        style={{
          transformOrigin: '50px 44px',
          animation: isPaused ? 'none' : 'pe-whistle-sway 2.8s ease-in-out infinite',
        }}
      >
        {/* Golden Braided Lanyard */}
        <path
          d="M 43 44 C 43 62 48 78 50 82 C 52 78 57 62 57 44"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Metallic Ring */}
        <circle cx="50" cy="82" r="2.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="0.8" />
        {/* Yellow Athletic Whistle */}
        <path
          d="M 48 84 L 54 84 C 55 84 56 86 55 88 L 52 92 C 50 92 48 91 48 89 Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="0.8"
        />
        <circle cx="53" cy="86" r="1" fill="#78350F" />
      </g>

      {/* 7. Right Arm (Animated based on pose: welcome / pointing / coaching) */}
      {pose === 'welcome' && (
        <g
          style={{
            transformOrigin: '74px 48px',
            animation: isPaused ? 'none' : 'pe-teacher-wave 4.5s ease-in-out infinite',
          }}
        >
          {/* Upper Arm */}
          <path
            d="M 74 48 C 84 58 96 68 105 60 C 108 56 102 48 94 44 C 86 42 78 44 74 48 Z"
            fill="#103D27"
            stroke="#071C12"
            strokeWidth="1"
          />
          {/* Forearm extending towards students and question */}
          <path
            d="M 98 56 C 108 50 118 42 122 36 C 124 33 120 30 115 32 C 108 36 102 44 98 52 Z"
            fill="#103D27"
          />
          {/* Emerald Wristband */}
          <rect x="114" y="32" width="5" height="7" rx="1.5" fill="#00C853" transform="rotate(-30 114 32)" />
          {/* Cartoon Hand with Welcoming Open Palm */}
          <g transform="translate(118, 25)">
            {/* Palm */}
            <circle cx="5" cy="5" r="5" fill="#FED7AA" />
            {/* Extended Index Finger */}
            <path d="M 6 3 C 8 0 12 -2 14 -1 C 15 1 12 4 9 5 Z" fill="#FED7AA" />
            {/* Curved Fingers */}
            <circle cx="9" cy="4" r="2.5" fill="#FED7AA" />
            <circle cx="8" cy="7" r="2.5" fill="#FED7AA" />
            <circle cx="5" cy="9" r="2.5" fill="#FED7AA" />
          </g>
        </g>
      )}

      {pose === 'pointing' && (
        <g
          style={{
            transformOrigin: '74px 48px',
            transform: `rotate(${pointerAngle}deg)`,
            transition: 'transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <path d="M 74 48 L 102 58 L 138 52" stroke="#103D27" strokeWidth="11" strokeLinecap="round" />
          <line x1="138" y1="52" x2="202" y2="38" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          <circle cx="202" cy="38" r="5" fill="#F59E0B" />
        </g>
      )}

      {pose === 'coaching' && (
        <g
          style={{
            transformOrigin: '74px 48px',
            animation: isPaused ? 'none' : 'pe-coach-prompt 2.8s ease-in-out infinite',
          }}
        >
          <path d="M 74 48 C 84 40 98 36 106 46 C 108 52 100 58 92 58 Z" fill="#103D27" />
          <circle cx="106" cy="46" r="5.5" fill="#FED7AA" />
        </g>
      )}

      {/* 8. Coach Head, Face & Athletic Visor Cap */}
      <g>
        {/* Muscular Neck */}
        <path d="M 44 38 L 44 48 L 56 48 L 56 38 Z" fill="#FBCFE8" />

        {/* Head Contour (Strong athletic jaw) */}
        <path
          d="M 36 28 C 36 40 40 46 50 46 C 60 46 64 40 64 28 C 64 16 60 12 50 12 C 40 12 36 16 36 28 Z"
          fill="#FED7AA"
        />

        {/* Ears */}
        <circle cx="36" cy="28" r="3.5" fill="#FED7AA" />
        <circle cx="64" cy="28" r="3.5" fill="#FED7AA" />

        {/* Friendly Expressive Eyes (Sclera + Pupil + Specular Reflection) */}
        {/* Left Eye */}
        <g transform="translate(43, 22)">
          <ellipse cx="4" cy="4" rx="3.5" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.8" />
          <circle cx="4.5" cy="4" r="2.2" fill="#0F172A" />
          <circle cx="5.2" cy="3.2" r="0.8" fill="#FFFFFF" />
        </g>
        {/* Right Eye */}
        <g transform="translate(53, 22)">
          <ellipse cx="4" cy="4" rx="3.5" ry="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.8" />
          <circle cx="4.5" cy="4" r="2.2" fill="#0F172A" />
          <circle cx="5.2" cy="3.2" r="0.8" fill="#FFFFFF" />
        </g>

        {/* Expressive Arched Eyebrows */}
        <path d="M 45 20 Q 48 18 52 20" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 55 20 Q 59 18 63 20" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Athletic Smile & Warm Expression */}
        <path
          d="M 46 34 Q 52 40 58 34"
          stroke="#9A3412"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cheek dimple line */}
        <path d="M 59 33 Q 60 35 59 36" stroke="#EA580C" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Athletic Cap & Curved Visor */}
        {/* Cap Dome */}
        <path
          d="M 35 20 C 35 9 42 6 50 6 C 58 6 65 9 65 20 Z"
          fill="#00C853"
        />
        {/* Cap Crest Logo */}
        <circle cx="50" cy="13" r="3" fill="#FFFFFF" />
        <circle cx="50" cy="13" r="1.5" fill="#103D27" />

        {/* Curved Visor Shade in Front */}
        <path
          d="M 44 19 Q 58 14 74 19 Q 60 23 44 19 Z"
          fill="#103D27"
          stroke="#00C853"
          strokeWidth="0.8"
        />
      </g>
    </g>
  );
};
