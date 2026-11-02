import React from 'react';
import type { ListBlock } from '../../../types';
import { CheckCircle2 } from 'lucide-react';

export const ListBlockView: React.FC<{ block: ListBlock }> = ({ block }) => {
  const { style, title, items } = block;

  return (
    <div className="my-5 bg-[#F8FCFF] rounded-2xl p-5 sm:p-6 border border-[#D9EAF7]">
      {title && (
        <h5 className="text-base font-bold text-[#172B4D] mb-3">
          {title}
        </h5>
      )}
      {style === 'ordered' ? (
        <ol className="space-y-2.5 list-none counter-reset">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#334155]">
              <span className="w-6 h-6 rounded-lg bg-blue-100/70 text-[#2563EB] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-2.5">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#334155]">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

