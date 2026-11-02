import React from 'react';
import type { ParagraphBlock } from '../../../types';

export const ParagraphBlockView: React.FC<{ block: ParagraphBlock }> = ({ block }) => {
  const { text, lead } = block;

  return (
    <p
      className={`leading-relaxed text-[#486555] mb-4 transition-colors ${
        lead ? 'text-lg sm:text-xl font-medium text-[#173D2B] leading-loose' : 'text-base'
      }`}
    >
      {text}
    </p>
  );
};
