import React from 'react';
import { Activity, Search, Globe2, BookOpen } from 'lucide-react';

interface SubjectIconProps {
  title: string;
  className?: string;
}

/**
 * Tennis / Racket Sport Vector Icon
 */
export const RacketIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Racket Head */}
    <ellipse cx="14.5" cy="9.5" rx="6.5" ry="5.5" transform="rotate(-45 14.5 9.5)" />
    {/* Racket Strings */}
    <line x1="12" y1="7" x2="17" y2="12" strokeWidth="1.2" opacity="0.7" />
    <line x1="14" y1="5" x2="19" y2="10" strokeWidth="1.2" opacity="0.7" />
    <line x1="10" y1="9" x2="15" y2="14" strokeWidth="1.2" opacity="0.7" />
    <line x1="12" y1="12" x2="17" y2="7" strokeWidth="1.2" opacity="0.7" />
    {/* Shaft & Handle */}
    <path d="m9.5 14.5-5 5a1.5 1.5 0 0 0 2.12 2.12l5-5" />
    <line x1="8" y1="16" x2="10.5" y2="13.5" strokeWidth="2.5" />
  </svg>
);

/**
 * Athletic Running Track / Sprint Lanes Vector Icon
 */
export const TrackIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Stadium / Track Curved Lanes */}
    <path d="M4 17h10a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4H4" />
    <path d="M4 21h10a8 8 0 0 0 8-8v0a8 8 0 0 0-8-8H4" />
    <path d="M4 13h10" strokeDasharray="2 2" strokeWidth="1.5" />
    {/* Finish Line Indicator */}
    <line x1="4" y1="3" x2="4" y2="22" strokeWidth="2.5" />
  </svg>
);

export const SubjectIcon: React.FC<SubjectIconProps> = ({ title, className = 'w-6 h-6' }) => {
  const norm = title.trim();

  if (norm.includes('التعليم الحركي')) {
    return <Activity className={className} aria-hidden="true" />;
  }
  if (norm.includes('البحث العلمي')) {
    return <Search className={className} aria-hidden="true" />;
  }
  if (norm.includes('التربية المقارنة') || norm.includes('نظم التعليم')) {
    return <Globe2 className={className} aria-hidden="true" />;
  }
  if (norm.includes('مناهج')) {
    return <BookOpen className={className} aria-hidden="true" />;
  }
  if (norm.includes('المضرب')) {
    return <RacketIcon className={className} />;
  }
  if (norm.includes('المضمار')) {
    return <TrackIcon className={className} />;
  }

  return <BookOpen className={className} aria-hidden="true" />;
};
