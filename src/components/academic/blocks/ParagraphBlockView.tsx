import React from 'react';
import type { ParagraphBlock } from '../../../types';

export const ParagraphBlockView: React.FC<{ block: ParagraphBlock }> = ({ block }) => {
  const { text, lead } = block;

  return (
    <p
      className={`leading-relaxed text-[#334155] mb-4 ${
        lead ? 'text-lg sm:text-xl font-medium text-[#172B4D] leading-loose' : 'text-base'
      }`}
    >
      {text}
    </p>
  );
};
