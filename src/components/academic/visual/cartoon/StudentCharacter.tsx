/**
 * StudentCharacter.tsx
 * Premium 2D Educational Cartoon Character: Students of Physical Education
 * Designed for PE Interactive Learning Hub (Phase 4.1A)
 *
 * Variants:
 * 1. 'thinker' (Tariq / طارق):
 *    - Curiously contemplates the question.
 *    - Head tilted towards inquiry, hand raised thoughtfully to chin.
 *    - Educational curiosity spark / idea bulb appears with subtle glow.
 * 2. 'athlete' (Ziad / زياد):
 *    - Athletic stance with textured soccer ball under foot/hip.
 *    - Listening attentively, turning head towards coach.
 * 3. 'peer' (Salma / سلمى):
 *    - Engaged peer in tracksuit, warm posture, nodding gently in agreement.
 */

import React from 'react';

export interface StudentCharacterProps {
  x: number;
  y: number;
  scale?: number;
  variant: 'thinker' | 'athlete' | 'peer';
  isPaused?: boolean;
  className?: string;
}

export const StudentCharacter: React.FC<StudentCharacterProps> = ({
  x,
  y,
  scale = 1,
  variant,
  isPaused = false,
  className = '',
}) => {
  return (
    <g
      transform={`translate(${x}, ${y}) scale(${scale})`}
      className={`select-none ${className}`}
    >
      {/* 1. Diffused Contact Shadow on Turf */}
      <ellipse cx="38" cy="168" rx="32" ry="9" fill="#071C12" opacity="0.4" />

      {/* =========================================================================
          VARIANT 1: 'thinker' (Tariq - Ponders the core question)
         ========================================================================= */}
      {variant === 'thinker' && (
        <g>
          {/* Animated Curiosity / Thinking Spark Bulb above Tariq's Head */}
          <g
            transform="translate(36, -18)"
            style={{
              animation: isPaused ? 'none' : 'pe-curiosity-glow 2.8s ease-in-out infinite',
            }}
          >
            {/* Soft Glow Halo */}
            <circle cx="10" cy="10" r="14" fill="#FDE047" opacity="0.25" />
            {/* Educational Lightbulb Icon */}
            <path
              d="M 6 10 C 6 6 8 3 10 3 C 12 3 14 6 14 10 C 14 12 12 13 12 15 L 8 15 C 8 13 6 12 6 10 Z"
              fill="#FACC15"
              stroke="#CA8A04"
              strokeWidth="1"
            />
            {/* Bulb Base & Filament */}
            <rect x="8" y="15" width="4" height="2" fill="#94A3B8" />
            <path d="M 9 17 L 11 17" stroke="#64748B" strokeWidth="1" />
            {/* Radiating Curiosity Rays */}
            <line x1="10" y1="-2" x2="10" y2="1" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="4" x2="3" y2="6" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="4" x2="17" y2="6" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Legs & Sports Socks */}
          {/* Left Leg */}
          <path d="M 26 100 L 24 150 L 34 150 L 36 100 Z" fill="#FED7AA" />
          {/* White Athletic Sock with Emerald Stripe */}
          <rect x="23" y="134" width="11" height="18" fill="#FFFFFF" rx="1" />
          <line x1="23" y1="138" x2="34" y2="138" stroke="#00C853" strokeWidth="2" />

          {/* Right Leg */}
          <path d="M 42 100 L 44 150 L 54 150 L 52 100 Z" fill="#FED7AA" />
          <rect x="43" y="134" width="11" height="18" fill="#FFFFFF" rx="1" />
          <line x1="43" y1="138" x2="54" y2="138" stroke="#00C853" strokeWidth="2" />

          {/* Athletic Running Sneakers */}
          <g transform="translate(17, 148)">
            <path d="M 4 8 C 4 8 10 13 22 12 C 24 12 25 10 24 8 L 8 7 Z" fill="#071C12" />
            <path d="M 6 7 C 6 7 12 11 22 10 L 20 5 L 8 5 Z" fill="#FFFFFF" />
            <path d="M 8 5 C 8 2 11 0 14 0 L 18 2 L 18 6 Z" fill="#00C853" />
          </g>
          <g transform="translate(39, 148)">
            <path d="M 4 8 C 4 8 10 13 22 12 C 24 12 25 10 24 8 L 8 7 Z" fill="#071C12" />
            <path d="M 6 7 C 6 7 12 11 22 10 L 20 5 L 8 5 Z" fill="#FFFFFF" />
            <path d="M 8 5 C 8 2 11 0 14 0 L 18 2 L 18 6 Z" fill="#00C853" />
          </g>

          {/* Athletic Shorts (Sporty navy with emerald trim) */}
          <path
            d="M 20 72 L 56 72 L 54 104 L 41 104 L 38 88 L 35 104 L 22 104 Z"
            fill="#0F172A"
            stroke="#1E293B"
            strokeWidth="1"
          />
          <line x1="22" y1="102" x2="35" y2="102" stroke="#00C853" strokeWidth="2" />
          <line x1="41" y1="102" x2="54" y2="102" stroke="#00C853" strokeWidth="2" />

          {/* Jersey Torso (Emerald & White Athletic Jersey) */}
          <path
            d="M 21 38 C 24 35 32 34 38 34 C 44 34 52 35 55 38 L 56 74 L 20 74 Z"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Emerald Center Sash */}
          <path d="M 28 34 L 48 34 L 46 74 L 30 74 Z" fill="#00C853" />
          {/* Jersey Number '4' */}
          <text x="38" y="58" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
            4
          </text>

          {/* Left Arm (Relaxed at side) */}
          <path d="M 22 38 C 16 46 14 60 17 72" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
          <rect x="19" y="38" width="5" height="12" rx="2" fill="#00C853" />

          {/* Right Arm: Raised to Chin in Thinking Pose */}
          <g
            style={{
              transformOrigin: '54px 38px',
              animation: isPaused ? 'none' : 'pe-tariq-think 3.5s ease-in-out infinite',
            }}
          >
            <path
              d="M 54 38 C 62 48 64 56 56 60 C 50 63 46 54 44 42"
              stroke="#FED7AA"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Jersey Sleeve */}
            <rect x="52" y="38" width="6" height="12" rx="2" fill="#00C853" />
            {/* Thinking Hand touching chin */}
            <circle cx="44" cy="40" r="4.5" fill="#FED7AA" />
            <path d="M 44 40 C 42 37 44 34 46 32" stroke="#FED7AA" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Tariq's Head (Curiously Tilted towards the Question) */}
          <g
            transform="translate(26, 6)"
            style={{
              transformOrigin: '12px 24px',
              animation: isPaused ? 'none' : 'pe-head-inquiry 3.5s ease-in-out infinite',
            }}
          >
            {/* Neck */}
            <rect x="9" y="20" width="6" height="8" fill="#FED7AA" />

            {/* Face Contour */}
            <path
              d="M 2 12 C 2 24 6 28 12 28 C 18 28 22 24 22 12 C 22 4 18 0 12 0 C 6 0 2 4 2 12 Z"
              fill="#FED7AA"
            />

            {/* Stylized Modern Hair (Textured crop) */}
            <path
              d="M 1 10 C 0 4 4 -2 12 -2 C 20 -2 24 4 23 10 C 21 5 18 2 12 2 C 6 2 3 5 1 10 Z"
              fill="#1E293B"
            />

            {/* Curious Big Eyes looking upwards at the question */}
            <ellipse cx="8" cy="11" rx="3" ry="3.5" fill="#FFFFFF" />
            <circle cx="9" cy="10" r="2" fill="#0F172A" />
            <circle cx="9.6" cy="9.4" r="0.7" fill="#FFFFFF" />

            <ellipse cx="16" cy="11" rx="3" ry="3.5" fill="#FFFFFF" />
            <circle cx="17" cy="10" r="2" fill="#0F172A" />
            <circle cx="17.6" cy="9.4" r="0.7" fill="#FFFFFF" />

            {/* Inquisitive Eyebrow (One raised higher) */}
            <path d="M 6 6 Q 9 4 11 6" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 14 5 Q 17 2 20 4" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Pensive mouth (slightly open/curved in thought) */}
            <circle cx="13" cy="20" r="2" fill="#9A3412" />
          </g>
        </g>
      )}

      {/* =========================================================================
          VARIANT 2: 'athlete' (Ziad - Standing with Soccer Ball)
         ========================================================================= */}
      {variant === 'athlete' && (
        <g>
          {/* Classic Soccer Ball resting at foot */}
          <g transform="translate(48, 140)">
            <circle cx="14" cy="14" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="14,6 20,10 18,17 10,17 8,10" fill="#0F172A" />
            <polygon points="14,22 19,19 18,14 10,14 9,19" fill="#0F172A" />
          </g>

          {/* Legs & Sports Socks */}
          <path d="M 22 100 L 20 152 L 30 152 L 32 100 Z" fill="#FED7AA" />
          <rect x="19" y="136" width="11" height="16" fill="#FFFFFF" rx="1" />
          <line x1="19" y1="140" x2="30" y2="140" stroke="#0284C7" strokeWidth="2" />

          {/* Right Leg Resting Foot on Ball */}
          <path d="M 38 100 L 46 138 L 56 138 L 48 100 Z" fill="#FED7AA" />
          <rect x="46" y="124" width="11" height="15" fill="#FFFFFF" rx="1" />
          <line x1="46" y1="128" x2="57" y2="128" stroke="#0284C7" strokeWidth="2" />

          {/* Blue Sneakers */}
          <g transform="translate(14, 150)">
            <path d="M 4 8 C 4 8 10 12 22 11 L 20 6 L 8 6 Z" fill="#0284C7" />
            <path d="M 4 9 L 22 9 L 22 11 L 4 11 Z" fill="#071C12" />
          </g>
          <g transform="translate(44, 134) rotate(-15)">
            <path d="M 4 8 C 4 8 10 12 22 11 L 20 6 L 8 6 Z" fill="#0284C7" />
            <path d="M 4 9 L 22 9 L 22 11 L 4 11 Z" fill="#071C12" />
          </g>

          {/* Athletic Shorts (Cyan/Blue Sport Shorts) */}
          <path
            d="M 18 72 L 52 72 L 50 102 L 38 102 L 35 88 L 32 102 L 20 102 Z"
            fill="#1E3A8A"
            stroke="#172554"
            strokeWidth="1"
          />

          {/* Athletic Blue Jersey */}
          <path
            d="M 19 38 C 22 35 29 34 35 34 C 41 34 48 35 51 38 L 52 74 L 18 74 Z"
            fill="#E0F2FE"
            stroke="#0284C7"
            strokeWidth="1.5"
          />
          <path d="M 26 34 L 44 34 L 42 74 L 28 74 Z" fill="#0284C7" />

          {/* Arms (Resting confidently on hips) */}
          <path d="M 20 40 L 10 55 L 18 64" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
          <path d="M 50 40 L 60 55 L 52 64" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />

          {/* Ziad's Head (Listening with engaged smile) */}
          <g transform="translate(23, 8)">
            <rect x="8" y="18" width="6" height="8" fill="#FED7AA" />
            <circle cx="11" cy="11" r="11" fill="#FED7AA" />
            {/* Hair */}
            <path d="M 1 10 C 1 2 6 -2 12 -2 C 18 -2 22 2 22 10 C 20 4 17 2 11 2 C 5 2 2 5 1 10 Z" fill="#0F172A" />
            {/* Eyes */}
            <circle cx="8" cy="11" r="2" fill="#0F172A" />
            <circle cx="8.5" cy="10.5" r="0.6" fill="#FFFFFF" />
            <circle cx="15" cy="11" r="2" fill="#0F172A" />
            <circle cx="15.5" cy="10.5" r="0.6" fill="#FFFFFF" />
            {/* Friendly smile */}
            <path d="M 8 16 Q 12 19 16 16" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        </g>
      )}

      {/* =========================================================================
          VARIANT 3: 'peer' (Salma - Attentive Engaged Peer)
         ========================================================================= */}
      {variant === 'peer' && (
        <g>
          {/* Legs */}
          <path d="M 22 100 L 22 152 L 32 152 L 32 100 Z" fill="#103D27" />
          <path d="M 38 100 L 38 152 L 48 152 L 48 100 Z" fill="#103D27" />
          {/* White sneakers with pink/green trim */}
          <rect x="18" y="150" width="16" height="6" rx="2" fill="#FFFFFF" stroke="#00C853" strokeWidth="1" />
          <rect x="36" y="150" width="16" height="6" rx="2" fill="#FFFFFF" stroke="#00C853" strokeWidth="1" />

          {/* Sport Energy Tracksuit Jacket */}
          <path
            d="M 19 38 C 22 35 29 34 35 34 C 41 34 48 35 51 38 L 52 102 L 18 102 Z"
            fill="#103D27"
            stroke="#071C12"
            strokeWidth="1.2"
          />
          {/* White Center Stripe */}
          <line x1="35" y1="36" x2="35" y2="102" stroke="#39E66D" strokeWidth="2.5" />

          {/* Arms crossed or holding notebook */}
          <path d="M 20 42 L 35 58 L 50 42" stroke="#FED7AA" strokeWidth="6" strokeLinecap="round" />
          <rect x="25" y="52" width="18" height="14" rx="2" fill="#F4FFF7" stroke="#00C853" strokeWidth="1" />

          {/* Head with Sport Ponytail */}
          <g
            transform="translate(23, 8)"
            style={{
              transformOrigin: '11px 18px',
              animation: isPaused ? 'none' : 'pe-peer-nod 3s ease-in-out infinite',
            }}
          >
            <rect x="8" y="18" width="6" height="8" fill="#FED7AA" />
            <circle cx="11" cy="11" r="11" fill="#FED7AA" />
            {/* Hair with Ponytail */}
            <path d="M 1 10 C 1 1 6 -2 12 -2 C 18 -2 22 1 22 10 C 20 4 17 2 11 2 C 5 2 2 5 1 10 Z" fill="#78350F" />
            <path d="M 2 8 C -4 4 -6 12 -4 18 C -3 15 -1 11 2 8 Z" fill="#78350F" />
            {/* Eyes */}
            <circle cx="9" cy="11" r="2" fill="#0F172A" />
            <circle cx="9.5" cy="10.5" r="0.6" fill="#FFFFFF" />
            <circle cx="16" cy="11" r="2" fill="#0F172A" />
            <circle cx="16.5" cy="10.5" r="0.6" fill="#FFFFFF" />
            {/* Smile */}
            <path d="M 9 16 Q 13 18 17 16" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        </g>
      )}
    </g>
  );
};
