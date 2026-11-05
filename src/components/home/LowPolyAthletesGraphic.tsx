/**
 * LowPolyAthletesGraphic.tsx
 * Premium Low-Poly Geometric Sports Illustration Component
 *
 * Inspired directly by the user's reference:
 * - 5 dynamic athletes in vibrant geometric polygon style:
 *   (Golden champion, ruby red sprinter, sapphire blue fencer, emerald green racket player, warm orange volleyball player)
 * - Transparent alpha channel seamlessly blending onto the dark green hero background (#071C12 / #0B2519)
 * - Zero artificial containers, zero technical panels, zero explanatory clutter
 * - High-density responsive web rendering with WebP optimization (94 KiB)
 */

import React from 'react';

export const LowPolyAthletesGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[330px] xs:max-w-[350px] sm:max-w-md lg:max-w-lg mx-auto flex items-center justify-center select-none ${className}`} dir="rtl">
      
      {/* Subtle Atmospheric Sport Glow behind athletes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-[#00C853]/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

      {/* The Low-Poly Athletes Illustration */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <img
          src="/assets/hero/athletes_lowpoly_transparent.webp"
          alt="رسوم هندسية ثلاثية الأبعاد لرياضيين في وضعيات حركية متنوعة (عدو، مضرب، مبارزة، طائرة، وتتويج)"
          width="874"
          height="830"
          className="w-full h-auto max-h-[320px] sm:max-h-[440px] lg:max-h-[520px] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.02]"
          loading="eager"
          // @ts-expect-error - modern HTML attribute for hero LCP image
          fetchpriority="high"
        />
      </div>

    </div>
  );
};

