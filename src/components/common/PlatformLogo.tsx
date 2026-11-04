import React from 'react';

interface PlatformLogoProps {
  className?: string;
  showSubtitle?: boolean;
  symbolOnly?: boolean;
  textColor?: string;
  symbolSize?: number;
}

/**
 * Geometric Sports-Education Logo Symbol
 *
 * Seamlessly integrates:
 * - Academic foundation (open book / knowledge crest)
 * - Athletic dynamic wings (running leap & movement)
 * - Kinetic wisdom spark (athletic figure in forward motion)
 *
 * 100% scalable vector, razor sharp from 16px to 512px.
 */
export const PlatformLogoSymbol: React.FC<{
  size?: number;
  className?: string;
  variant?: 'color' | 'monochrome';
}> = ({ size = 36, className = '', variant = 'color' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="شعار منصة علوم الرياضة"
    >
      <defs>
        <linearGradient id="logoPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39E66D" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
        <linearGradient id="logoSecondaryGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="logoCoreGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#103D27" />
          <stop offset="100%" stopColor="#00C853" />
        </linearGradient>
      </defs>

      {/* Rounded Container / Shield Base */}
      <rect
        width="40"
        height="40"
        rx="11"
        fill="#0B2519"
        stroke="#1B5E3A"
        strokeWidth="1.2"
      />

      {/* Dynamic Academic & Athletic Symbol */}
      <g transform="translate(20, 20)">
        
        {/* Athletic Kinetic Head / Wisdom Node */}
        <circle
          cx="0"
          cy="-9"
          r="3.2"
          fill={variant === 'color' ? '#F4FFF7' : 'currentColor'}
        />

        {/* Dynamic Athletic Wings / Uplifting Movement Arcs */}
        {/* Right Wing (RTL Forward Drive) */}
        <path
          d="M 1.5 -5 C 6 -6, 12 -3, 13 4 C 11 3, 7 0, 1.5 1 Z"
          fill={variant === 'color' ? 'url(#logoPrimaryGrad)' : 'currentColor'}
        />
        {/* Left Wing (Symmetrical Lift) */}
        <path
          d="M -1.5 -5 C -6 -6, -12 -3, -13 4 C -11 3, -7 0, -1.5 1 Z"
          fill={variant === 'color' ? 'url(#logoSecondaryGrad)' : 'currentColor'}
        />

        {/* Academic Open Book Base (Knowledge Pages in Motion) */}
        {/* Right Page */}
        <path
          d="M 1.5 4 C 6 2.5, 10.5 4, 11 9 C 8 8, 4 6.8, 1.5 7.5 Z"
          fill={variant === 'color' ? 'url(#logoPrimaryGrad)' : 'currentColor'}
          opacity="0.9"
        />
        {/* Left Page */}
        <path
          d="M -1.5 4 C -6 2.5, -10.5 4, -11 9 C -8 8, -4 6.8, -1.5 7.5 Z"
          fill={variant === 'color' ? 'url(#logoSecondaryGrad)' : 'currentColor'}
          opacity="0.9"
        />

        {/* Central Kinetic Spine / Athletic Core */}
        <path
          d="M 0 -4 L 0 10.5"
          stroke={variant === 'color' ? '#F4FFF7' : 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />

      </g>
    </svg>
  );
};

/**
 * Full Platform Logo with Refined Cairo Typography
 */
export const PlatformLogo: React.FC<PlatformLogoProps> = ({
  className = '',
  showSubtitle = true,
  symbolOnly = false,
  textColor = 'text-[#F4FFF7]',
  symbolSize = 38,
}) => {
  if (symbolOnly) {
    return <PlatformLogoSymbol size={symbolSize} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} dir="rtl">
      <PlatformLogoSymbol size={symbolSize} />
      <div className="flex flex-col min-w-0">
        <span className={`text-base sm:text-lg font-black tracking-tight leading-none ${textColor}`}>
          منصة علوم الرياضة
        </span>
        {showSubtitle && (
          <span className="text-[11px] font-semibold text-[#86efac]/80 tracking-wide font-sans mt-1">
            PE Interactive Learning Hub
          </span>
        )}
      </div>
    </div>
  );
};

