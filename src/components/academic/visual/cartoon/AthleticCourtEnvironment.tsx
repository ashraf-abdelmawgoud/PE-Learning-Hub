/**
 * AthleticCourtEnvironment.tsx
 * Premium 2D Educational Cartoon Environment: The School Sports Court (الملعب الرياضي المدرسي)
 * Designed for PE Interactive Learning Hub (Phase 4.1A)
 *
 * Depth Layers:
 * 1. Morning Sky Gradient with stylized soft drifting clouds.
 * 2. Modern sports campus facade & lush perimeter trees with atmospheric perspective.
 * 3. Terracotta running track curve with crisp white lane lines.
 * 4. High-contrast athletic turf pitch with painted markings.
 * 5. Modern athletic equipment (fluorescent training cones, ball rack, agility ladder).
 */

import React from 'react';

export interface AthleticCourtEnvironmentProps {
  idPrefix: string;
}

export const AthleticCourtEnvironment: React.FC<AthleticCourtEnvironmentProps> = ({ idPrefix }) => {
  return (
    <g className="select-none">
      <defs>
        {/* Morning Athletic Sky Gradient */}
        <linearGradient id={`${idPrefix}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="55%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>

        {/* Emerald Turf Gradient */}
        <linearGradient id={`${idPrefix}-pitch`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B5E20" />
          <stop offset="45%" stopColor="#144A18" />
          <stop offset="100%" stopColor="#0B2F11" />
        </linearGradient>

        {/* Terracotta Track Gradient */}
        <linearGradient id={`${idPrefix}-track`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#831843" />
        </linearGradient>

        {/* Soft Shadow Filter */}
        <filter id={`${idPrefix}-soft-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* LAYER 1: Morning Sky & Sun */}
      <rect x="0" y="0" width="1000" height="240" fill={`url(#${idPrefix}-sky)`} />
      <circle cx="900" cy="55" r="34" fill="#FEF08A" opacity="0.9" />
      <circle cx="900" cy="55" r="46" fill="#FEF9C3" opacity="0.35" />

      {/* Drifting Cartoon Clouds */}
      <g opacity="0.8">
        <path d="M 90 60 Q 115 35 150 48 Q 185 30 220 52 Q 255 60 265 80 L 80 80 Z" fill="#FFFFFF" />
        <path d="M 520 70 Q 545 45 580 60 Q 615 45 645 65 Q 670 70 680 90 L 500 90 Z" fill="#FFFFFF" opacity="0.85" />
      </g>

      {/* LAYER 2: School Sports Campus Architecture & Lush Trees */}
      {/* Distant Lush Trees with Soft Color Depth */}
      <g fill="#166534" opacity="0.85">
        <polygon points="40,210 70,145 100,210" />
        <polygon points="80,210 110,135 140,210" />
        <polygon points="120,210 150,150 180,210" />
        <polygon points="820,210 850,140 880,210" />
        <polygon points="860,210 890,148 920,210" />
        <polygon points="900,210 930,135 960,210" />
      </g>

      {/* Modern School Athletic Pavilion Facade */}
      <rect x="230" y="110" width="540" height="95" fill="#E2E8F0" rx="4" />
      <rect x="210" y="100" width="580" height="14" fill="#334155" rx="3" />
      
      {/* Architectural Entrance Pediment & School Shield */}
      <polygon points="500,60 410,102 590,102" fill="#1E293B" />
      <circle cx="500" cy="86" r="14" fill="#00C853" stroke="#FFFFFF" strokeWidth="2" />
      {/* Gold Laurel Icon inside Shield */}
      <path d="M 495 91 L 500 80 L 505 91 Z" fill="#FFFFFF" />

      {/* Campus Windows Array */}
      {[250, 305, 360, 610, 665, 720].map((wx, i) => (
        <g key={i}>
          <rect x={wx} y="125" width="34" height="34" fill="#93C5FD" rx="3" stroke="#475569" strokeWidth="1.5" />
          <line x1={wx + 17} y1="125" x2={wx + 17} y2="159" stroke="#475569" strokeWidth="1" />
          <line x1={wx} y1="142" x2={wx + 34} y2="142" stroke="#475569" strokeWidth="1" />
        </g>
      ))}

      {/* LAYER 3: Athletic Running Track Curve */}
      <rect x="0" y="205" width="1000" height="55" fill={`url(#${idPrefix}-track)`} />
      <line x1="0" y1="223" x2="1000" y2="223" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.85" />
      <line x1="0" y1="241" x2="1000" y2="241" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.85" />

      {/* LAYER 4: The School Sports Turf (الملعب العشبي) */}
      <rect x="0" y="260" width="1000" height="280" fill={`url(#${idPrefix}-pitch)`} />
      {/* Crisp White Court Boundary Markings */}
      <rect x="30" y="280" width="940" height="240" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.75" rx="8" />
      <line x1="500" y1="280" x2="500" y2="520" stroke="#FFFFFF" strokeWidth="3" opacity="0.75" />
      <circle cx="500" cy="400" r="68" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.75" />
      <circle cx="500" cy="400" r="5" fill="#FFFFFF" opacity="0.75" />

      {/* LAYER 5: Foreground Modern Sports Equipment */}
      {/* Set of 3 Fluorescent Cones with Realistic Drop Shadows */}
      <g transform="translate(85, 410)">
        {/* Drop shadows on grass */}
        <ellipse cx="15" cy="32" rx="14" ry="4" fill="#071C12" opacity="0.4" />
        <ellipse cx="55" cy="32" rx="14" ry="4" fill="#071C12" opacity="0.4" />
        <ellipse cx="95" cy="32" rx="14" ry="4" fill="#071C12" opacity="0.4" />

        {/* Cone 1 */}
        <polygon points="0,30 15,0 30,30" fill="#EA580C" />
        <rect x="-3" y="28" width="36" height="5" fill="#C2410C" rx="2" />
        <path d="M 8 16 L 22 16" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />

        {/* Cone 2 */}
        <polygon points="40,30 55,0 70,30" fill="#F97316" />
        <rect x="37" y="28" width="36" height="5" fill="#EA580C" rx="2" />
        <path d="M 48 16 L 62 16" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />

        {/* Cone 3 */}
        <polygon points="80,30 95,0 110,30" fill="#EA580C" />
        <rect x="77" y="28" width="36" height="5" fill="#C2410C" rx="2" />
        <path d="M 88 16 L 102 16" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
      </g>

      {/* Agility Ladder on the Turf */}
      <g transform="translate(820, 420) rotate(-10)" opacity="0.75">
        <line x1="0" y1="0" x2="110" y2="0" stroke="#FDE047" strokeWidth="2" />
        <line x1="0" y1="20" x2="110" y2="20" stroke="#FDE047" strokeWidth="2" />
        {[0, 22, 44, 66, 88, 110].map((rx) => (
          <line key={rx} x1={rx} y1="0" x2={rx} y2="20" stroke="#FDE047" strokeWidth="2.5" />
        ))}
      </g>
    </g>
  );
};
