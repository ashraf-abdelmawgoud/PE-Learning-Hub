/**
 * LogoConcepts.tsx
 * Three Distinct Brand Identity Concepts for علوم الرياضة (OloomSport)
 *
 * Designed specifically for Physical Education & Sports Sciences:
 * - Concept A: الكتاب الحركي والأجنحة الديناميكية (Kinetic Book & Wing)
 * - Concept B: مسار المضمار والقوس الأكاديمي (Athletic Track Arc & Chevron Crest)
 * - Concept C: شعلة المعرفة والحلقة البيوميكانيكية (Biomechanical Loop & Academic Torch)
 *
 * Scalable vector rendering from 16px to 512px.
 */

import React from 'react';
import { PlatformLogoSymbol } from './PlatformLogo';

export interface LogoSymbolProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'monochrome';
  showBackground?: boolean;
  bgFill?: string;
  bgStroke?: string;
}

export interface LogoWithTextProps extends LogoSymbolProps {
  showSubtitle?: boolean;
  textColor?: string;
  subtitleColor?: string;
}

/* =========================================================================
   CONCEPT A: الكتاب الحركي والأجنحة الديناميكية (Kinetic Book & Wing)
   Philosophy: Academic open book transforming into ascending athletic wings
   ========================================================================= */
export const LogoConceptASymbol: React.FC<LogoSymbolProps> = ({
  size = 40,
  className = '',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#1B5E3A',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="شعار علوم الرياضة — النموذج أ (الكتاب الحركي)"
    >
      <defs>
        <linearGradient id="conceptA_wingR" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#39E66D" />
        </linearGradient>
        <linearGradient id="conceptA_wingL" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#00E676" />
        </linearGradient>
        <linearGradient id="conceptA_flame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="70%" stopColor="#39E66D" />
          <stop offset="100%" stopColor="#F4FFF7" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Container */}
      {showBackground && (
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="26"
          fill={bgFill}
          stroke={bgStroke}
          strokeWidth="2.5"
        />
      )}

      <g id="conceptA-mark">
        {/* Layer 1: Open Book Base of Knowledge (curved academic pages) */}
        {/* Right Page */}
        <path
          d="M 50 80 C 60 76, 73 78, 83 83 C 81 72, 70 67, 50 71 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingR)' : 'currentColor'}
          opacity="0.95"
        />
        {/* Left Page */}
        <path
          d="M 50 80 C 40 76, 27 78, 17 83 C 19 72, 30 67, 50 71 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingL)' : 'currentColor'}
          opacity="0.85"
        />

        {/* Layer 2: Lower Athletic Wing (Forward Propulsion) */}
        {/* Right Lower Feather */}
        <path
          d="M 52 67 C 64 61, 76 56, 85 47 C 80 43, 67 49, 52 56 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingR)' : 'currentColor'}
        />
        {/* Left Lower Feather */}
        <path
          d="M 48 67 C 36 61, 24 56, 15 47 C 20 43, 33 49, 48 56 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingL)' : 'currentColor'}
          opacity="0.9"
        />

        {/* Layer 3: Middle Dynamic Wing (High-speed Acceleration) */}
        {/* Right Mid Feather */}
        <path
          d="M 52 53 C 65 46, 79 38, 88 24 C 81 22, 68 33, 52 43 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingR)' : 'currentColor'}
        />
        {/* Left Mid Feather */}
        <path
          d="M 48 53 C 35 46, 21 38, 12 24 C 19 22, 32 33, 48 43 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingL)' : 'currentColor'}
          opacity="0.9"
        />

        {/* Layer 4: Upper Wingtip (Aerodynamic Soar) */}
        {/* Right Soaring Tip */}
        <path
          d="M 52 39 C 62 30, 73 19, 79 11 C 72 10, 61 20, 52 30 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingR)' : 'currentColor'}
        />
        {/* Left Soaring Tip */}
        <path
          d="M 48 39 C 38 30, 27 19, 21 11 C 28 10, 39 20, 48 30 Z"
          fill={variant === 'color' ? 'url(#conceptA_wingL)' : 'currentColor'}
          opacity="0.9"
        />

        {/* Central Core: Academic Torch Flame / Victory Diamond */}
        <path
          d="M 50 11 L 56 24 L 50 20 L 44 24 Z"
          fill={variant === 'color' ? 'url(#conceptA_flame)' : 'currentColor'}
        />

        {/* Central Spine Axis of Symmetry */}
        <line
          x1="50"
          y1="22"
          x2="50"
          y2="80"
          stroke={variant === 'color' ? '#F4FFF7' : 'currentColor'}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.95"
        />
      </g>
    </svg>
  );
};

/* =========================================================================
   CONCEPT B: مسار المضمار والقوس الأكاديمي (Athletic Track Arc & Chevron Crest)
   [OFFICIALLY SELECTED BRAND IDENTITY] - Refined & Scalable
   ========================================================================= */
export const LogoConceptBSymbol: React.FC<LogoSymbolProps> = ({
  size = 40,
  className = '',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#164E2E',
}) => {
  return (
    <PlatformLogoSymbol
      size={size}
      className={className}
      variant={variant}
      showBackground={showBackground}
      bgFill={bgFill}
      bgStroke={bgStroke}
    />
  );
};

/* =========================================================================
   CONCEPT C: شعلة المعرفة والحلقة البيوميكانيكية (Biomechanical Loop & Academic Torch)
   Philosophy: Hexagonal science emblem uniting human kinetic vortex with Olympic torch
   ========================================================================= */
export const LogoConceptCSymbol: React.FC<LogoSymbolProps> = ({
  size = 40,
  className = '',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#1B5E3A',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="شعار علوم الرياضة — النموذج ج (الشعلة البيوميكانيكية)"
    >
      <defs>
        <linearGradient id="conceptC_hex" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B5E3A" />
          <stop offset="100%" stopColor="#0B2519" />
        </linearGradient>
        <linearGradient id="conceptC_flame1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#39E66D" />
        </linearGradient>
        <linearGradient id="conceptC_flameCenter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="50%" stopColor="#39E66D" />
          <stop offset="100%" stopColor="#F4FFF7" />
        </linearGradient>
        <linearGradient id="conceptC_orbit" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#39E66D" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Container */}
      {showBackground && (
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="26"
          fill={bgFill}
          stroke={bgStroke}
          strokeWidth="2.5"
        />
      )}

      <g id="conceptC-mark">
        {/* Geometric Hexagon Border (Scientific Sports Research) */}
        <polygon
          points="50,12 84,30 84,70 50,88 16,70 16,30"
          fill="none"
          stroke={variant === 'color' ? '#1B5E3A' : 'currentColor'}
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* Biomechanical Kinetic Orbit (Back Dash) */}
        <path
          d="M 23 44 C 28 32, 52 28, 75 40"
          fill="none"
          stroke={variant === 'color' ? '#047857' : 'currentColor'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.8"
        />

        {/* The Academic Open Book Torch Base */}
        <path
          d="M 50 80 L 35 72 C 40 66, 46 65, 50 68 Z"
          fill={variant === 'color' ? '#00C853' : 'currentColor'}
        />
        <path
          d="M 50 80 L 65 72 C 60 66, 54 65, 50 68 Z"
          fill={variant === 'color' ? '#059669' : 'currentColor'}
        />

        {/* The Olympic Torch Stem */}
        <path
          d="M 47 68 L 46 54 L 54 54 L 53 68 Z"
          fill={variant === 'color' ? '#142B20' : 'currentColor'}
          stroke={variant === 'color' ? '#39E66D' : 'currentColor'}
          strokeWidth="1.2"
        />

        {/* The Multi-Faceted Olympic Academic Flame */}
        {/* Right Flame Leaf */}
        <path
          d="M 50 54 C 58 47, 63 36, 59 25 C 53 34, 51 42, 50 54 Z"
          fill={variant === 'color' ? 'url(#conceptC_flame1)' : 'currentColor'}
        />
        {/* Left Flame Leaf */}
        <path
          d="M 50 54 C 42 47, 37 36, 41 25 C 47 34, 49 42, 50 54 Z"
          fill={variant === 'color' ? '#00E676' : 'currentColor'}
          opacity="0.9"
        />
        {/* Soaring Center Flame of Wisdom */}
        <path
          d="M 50 53 C 54 41, 55 27, 50 16 C 45 27, 46 41, 50 53 Z"
          fill={variant === 'color' ? 'url(#conceptC_flameCenter)' : 'currentColor'}
        />

        {/* Biomechanical Kinetic Orbit (Front Sweep Ribbon) */}
        <path
          d="M 20 54 C 26 70, 68 74, 82 50"
          fill="none"
          stroke={variant === 'color' ? 'url(#conceptC_orbit)' : 'currentColor'}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Kinetic Energy Particle */}
        <circle
          cx="82"
          cy="50"
          r="3.5"
          fill={variant === 'color' ? '#F4FFF7' : 'currentColor'}
        />
      </g>
    </svg>
  );
};

/* =========================================================================
   Full Logo Display Component (Symbol + Arabic Typography)
   ========================================================================= */

interface FullLogoProps {
  concept: 'A' | 'B' | 'C';
  symbolSize?: number;
  showSubtitle?: boolean;
  textColor?: string;
  subtitleColor?: string;
  variant?: 'color' | 'monochrome';
  showBackground?: boolean;
  bgFill?: string;
  bgStroke?: string;
  className?: string;
}

export const ConceptFullLogo: React.FC<FullLogoProps> = ({
  concept,
  symbolSize = 38,
  showSubtitle = true,
  textColor = 'text-[#F4FFF7]',
  subtitleColor = 'text-[#86efac]/80',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#1B5E3A',
  className = '',
}) => {
  const renderSymbol = () => {
    switch (concept) {
      case 'A':
        return (
          <LogoConceptASymbol
            size={symbolSize}
            variant={variant}
            showBackground={showBackground}
            bgFill={bgFill}
            bgStroke={bgStroke}
          />
        );
      case 'B':
        return (
          <LogoConceptBSymbol
            size={symbolSize}
            variant={variant}
            showBackground={showBackground}
            bgFill={bgFill}
            bgStroke={bgStroke}
          />
        );
      case 'C':
        return (
          <LogoConceptCSymbol
            size={symbolSize}
            variant={variant}
            showBackground={showBackground}
            bgFill={bgFill}
            bgStroke={bgStroke}
          />
        );
    }
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} dir="rtl">
      {renderSymbol()}
      <div className="flex flex-col min-w-0">
        <span className={`text-base sm:text-lg font-black tracking-tight leading-none ${textColor}`}>
          علوم الرياضة
        </span>
        {showSubtitle && (
          <span className={`text-[11px] font-semibold tracking-wide font-sans mt-1 ${subtitleColor}`}>
            OloomSport
          </span>
        )}
      </div>
    </div>
  );
};
