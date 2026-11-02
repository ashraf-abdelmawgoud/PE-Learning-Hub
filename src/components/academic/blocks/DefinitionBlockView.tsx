import React from 'react';
import type { DefinitionBlock } from '../../../types';
import { BookMarked } from 'lucide-react';

export const DefinitionBlockView: React.FC<{ block: DefinitionBlock }> = ({ block }) => {
  const { term, scientificTermEn, definition, academicContext } = block;

  return (
    <div className="my-6 rounded-2xl bg-white border-2 border-blue-100 p-5 sm:p-6 shadow-2xs relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1.5 inset-y-0 bg-[#2563EB]" />
      
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-200">
          <BookMarked className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-lg font-black text-[#172B4D]">
              {term}
            </h4>
            {scientificTermEn && (
              <span className="font-mono text-xs font-semibold text-[#0891B2] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200" dir="ltr">
                {scientificTermEn}
              </span>
            )}
            <span className="text-[11px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md">
              تعريف علمي معتمد
            </span>
          </div>
        </div>
      </div>

      <p className="text-base text-[#172B4D] leading-relaxed font-medium bg-[#F8FCFF] p-4 rounded-xl border border-[#D9EAF7]">
        {definition}
      </p>

      {academicContext && (
        <div className="mt-3 text-xs text-[#64748B] flex items-center gap-1.5">
          <span className="font-bold text-[#334155]">السياق الرياضي الأكاديمي:</span>
          <span>{academicContext}</span>
        </div>
      )}
    </div>
  );
};
