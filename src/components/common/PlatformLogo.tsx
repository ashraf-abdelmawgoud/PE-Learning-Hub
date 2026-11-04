/**
 * PlatformLogo.tsx
 * Official Brand Identity for علوم الرياضة (OloomSport)
 *
 * Concept B — Athletic Track Arc & Chevron Crest (Refined & Scalable)
 *
 * Key Design Elements:
 * 1. Athletic Track Arc: Curved stadium track lanes in dynamic forward motion.
 * 2. Academic Crest: Collegiate chevron shield symbolizing scientific excellence.
 * 3. Knowledge Base: Academic open book foundation supporting athletic performance.
 * 4. Apex Achievement Node: Single crisp star/focal point representing victory and academic honors.
 *
 * Scalability Architecture:
 * - Primary Refined Symbol: For sizes > 24px (32px, 36px, 48px, 64px, 128px...)
 * - Micro Symbol: Specifically optimized for <= 24px (16px favicon, 24px compact UI)
 *   with bolder strokes (7px) and simplified geometry to eliminate sub-pixel blur.
 * - Supports Color, Monochrome, Dark, and Light background variants.
 */

import React from 'react';

export interface PlatformLogoSymbolProps {
  size?: number;
  className?: string;
  variant?: 'color' | 'monochrome';
  mode?: 'auto' | 'primary' | 'micro';
  showBackground?: boolean;
  bgFill?: string;
  bgStroke?: string;
}

export interface PlatformLogoProps extends PlatformLogoSymbolProps {
  showSubtitle?: boolean;
  symbolOnly?: boolean;
  textColor?: string;
  subtitleColor?: string;
  symbolSize?: number;
}

/**
 * 1. Primary Refined Concept B Symbol (for sizes > 24px)
 * Generous breathing space, consistent 4.5px track strokes, single apex star,
 * zero visual clutter, perfectly separated open book foundation.
 */
export const PrimaryConceptBSymbol: React.FC<{
  size: number;
  className?: string;
  variant?: 'color' | 'monochrome';
  showBackground?: boolean;
  bgFill?: string;
  bgStroke?: string;
}> = ({
  size,
  className = '',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#164E2E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="شعار علوم الرياضة"
    >
      <defs>
        <linearGradient id="trackArcGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#39E66D" />
        </linearGradient>
        <linearGradient id="trackArcGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#00E676" />
        </linearGradient>
        <linearGradient id="bookPageR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39E66D" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
        <linearGradient id="bookPageL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="apexSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#69F0AE" />
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

      <g id="official-logo-mark">
        {/* Collegiate Shield Contour (Framing) */}
        <path
          d="M 50 11 L 83 28 C 83 57, 69 75, 50 86 C 31 75, 17 57, 17 28 Z"
          fill="none"
          stroke={variant === 'color' ? '#1B5E3A' : 'currentColor'}
          strokeWidth="2.2"
          strokeLinejoin="round"
          opacity={variant === 'color' ? 0.8 : 0.4}
        />

        {/* Stadium Running Track Curve 1 (Outer Dynamic Lane) */}
        <path
          d="M 25 54 C 27 36, 37 23, 50 17 C 63 23, 73 36, 75 54"
          fill="none"
          stroke={variant === 'color' ? 'url(#trackArcGrad1)' : 'currentColor'}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Stadium Running Track Curve 2 (Inner Dynamic Lane - 12px Breathing Gap) */}
        <path
          d="M 32 61 C 35 47, 42 36, 50 31 C 58 36, 65 47, 68 61"
          fill="none"
          stroke={variant === 'color' ? 'url(#trackArcGrad2)' : 'currentColor'}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Academic Open Book Foundation at Podium Base */}
        {/* Left Book Page */}
        <path
          d="M 50 81 L 32 72 C 38 62, 44 61, 50 65 Z"
          fill={variant === 'color' ? 'url(#bookPageL)' : 'currentColor'}
          opacity={variant === 'color' ? 0.95 : 0.8}
        />
        {/* Right Book Page */}
        <path
          d="M 50 81 L 68 72 C 62 62, 56 61, 50 65 Z"
          fill={variant === 'color' ? 'url(#bookPageR)' : 'currentColor'}
          opacity={variant === 'color' ? 1 : 0.9}
        />

        {/* Single Apex Achievement Spark (Victory & Academic Honors) */}
        <circle
          cx="50"
          cy="18"
          r="4.2"
          fill={variant === 'color' ? 'url(#apexSparkGrad)' : 'currentColor'}
        />
      </g>
    </svg>
  );
};

/**
 * 2. Micro Concept B Symbol (specifically optimized for <= 24px and Favicons)
 * Increased stroke weight (7px), simplified geometry, maximum contrast and legibility,
 * zero sub-pixel blurring while strictly maintaining the same Concept B identity.
 */
export const MicroConceptBSymbol: React.FC<{
  size: number;
  className?: string;
  variant?: 'color' | 'monochrome';
  showBackground?: boolean;
  bgFill?: string;
  bgStroke?: string;
}> = ({
  size,
  className = '',
  variant = 'color',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#164E2E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="شعار علوم الرياضة — أيقونة مصغرة"
    >
      <defs>
        <linearGradient id="microTrackGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C853" />
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
          strokeWidth="3"
        />
      )}

      <g id="official-logo-micro">
        {/* Collegiate Shield Contour */}
        <path
          d="M 50 10 L 84 28 C 84 58, 69 76, 50 88 C 31 76, 16 58, 16 28 Z"
          fill="none"
          stroke={variant === 'color' ? '#1B5E3A' : 'currentColor'}
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Bold Athletic Track Arc & Chevron */}
        <path
          d="M 24 55 C 27 34, 38 21, 50 16 C 62 21, 73 34, 76 55"
          fill="none"
          stroke={variant === 'color' ? 'url(#microTrackGrad)' : 'currentColor'}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Bold Open Book Foundation Base */}
        <path
          d="M 50 82 L 28 71 C 36 58, 44 58, 50 63 Z"
          fill={variant === 'color' ? '#00E676' : 'currentColor'}
        />
        <path
          d="M 50 82 L 72 71 C 64 58, 56 58, 50 63 Z"
          fill={variant === 'color' ? '#00C853' : 'currentColor'}
        />

        {/* Apex Achievement Star Node */}
        <circle
          cx="50"
          cy="18"
          r="5.5"
          fill={variant === 'color' ? '#F4FFF7' : 'currentColor'}
        />
      </g>
    </svg>
  );
};

/**
 * 3. Unified Adaptive Logo Symbol
 * Automatically selects Micro variant when size <= 24px, and Primary when size > 24px.
 */
export const PlatformLogoSymbol: React.FC<PlatformLogoSymbolProps> = ({
  size = 36,
  className = '',
  variant = 'color',
  mode = 'auto',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#164E2E',
}) => {
  const isMicro = mode === 'micro' || (mode === 'auto' && size <= 24);

  if (isMicro) {
    return (
      <MicroConceptBSymbol
        size={size}
        className={className}
        variant={variant}
        showBackground={showBackground}
        bgFill={bgFill}
        bgStroke={bgStroke}
      />
    );
  }

  return (
    <PrimaryConceptBSymbol
      size={size}
      className={className}
      variant={variant}
      showBackground={showBackground}
      bgFill={bgFill}
      bgStroke={bgStroke}
    />
  );
};

/**
 * 4. Full Platform Logo with Refined Cairo Wordmark
 */
export const PlatformLogo: React.FC<PlatformLogoProps> = ({
  className = '',
  showSubtitle = false,
  symbolOnly = false,
  textColor = 'text-[#F4FFF7]',
  subtitleColor = 'text-[#86efac]/80',
  symbolSize = 36,
  variant = 'color',
  mode = 'auto',
  showBackground = true,
  bgFill = '#071C12',
  bgStroke = '#164E2E',
}) => {
  if (symbolOnly) {
    return (
      <PlatformLogoSymbol
        size={symbolSize}
        className={className}
        variant={variant}
        mode={mode}
        showBackground={showBackground}
        bgFill={bgFill}
        bgStroke={bgStroke}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} dir="rtl">
      <PlatformLogoSymbol
        size={symbolSize}
        variant={variant}
        mode={mode}
        showBackground={showBackground}
        bgFill={bgFill}
        bgStroke={bgStroke}
      />
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
