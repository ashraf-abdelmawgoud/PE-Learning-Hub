import React from 'react';
import type { HeadingBlock } from '../../../types';

export const HeadingBlockView: React.FC<{ block: HeadingBlock }> = ({ block }) => {
  const { level, text, subtitle } = block;

  const renderHeading = () => {
    switch (level) {
      case 1:
        return (
          <h2 className="text-2xl sm:text-3xl font-black text-[#172B4D] tracking-tight mt-8 mb-3">
            {text}
          </h2>
        );
      case 2:
        return (
          <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D] mt-6 mb-2">
            {text}
          </h3>
        );
      case 3:
        return (
          <h4 className="text-lg sm:text-xl font-bold text-[#172B4D] mt-5 mb-2">
            {text}
          </h4>
        );
      case 4:
      default:
        return (
          <h5 className="text-base sm:text-lg font-bold text-[#172B4D] mt-4 mb-1">
            {text}
          </h5>
        );
    }
  };

  return (
    <div className="pt-2">
      {renderHeading()}
      {subtitle && (
        <p className="text-sm font-semibold text-[#64748B] mb-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
