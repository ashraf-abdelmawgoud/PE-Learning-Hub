import React from 'react';
import type { DefinitionBlock } from '../../../types';
import { BookMarked } from 'lucide-react';

export const DefinitionBlockView: React.FC<{ block: DefinitionBlock }> = ({ block }) => {
  const { term, scientificTermEn, definition, academicContext } = block;

  return (
    <div className="my-6 rounded-2xl bg-white border-2 border-[#D4E9DC] p-5 sm:p-6 shadow-2xs relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 w-1.5 inset-y-0 bg-[#00C853]" />
      
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC]">
          <BookMarked className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-lg font-black text-[#173D2B]">
              {term}
            </h4>
            {scientificTermEn && (
              <span className="font-mono text-xs font-semibold text-[#173D2B] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]" dir="ltr">
                {scientificTermEn}
              </span>
            )}
            <span className="text-[11px] font-bold text-[#173D2B] bg-[#E8F8EE] px-2 py-0.5 rounded-md">
              تعريف علمي معتمد
            </span>
          </div>
        </div>
      </div>

      <p className="text-base text-[#173D2B] leading-relaxed font-medium bg-[#F4FFF7] p-4 rounded-xl border border-[#D4E9DC]">
        {definition}
      </p>

      {academicContext && (
        <div className="mt-3 text-xs text-[#6C8577] flex items-center gap-1.5">
          <span className="font-bold text-[#173D2B]">السياق الرياضي الأكاديمي:</span>
          <span>{academicContext}</span>
        </div>
      )}
    </div>
  );
};
