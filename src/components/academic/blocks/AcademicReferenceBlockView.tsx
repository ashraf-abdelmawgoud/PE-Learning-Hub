import React from 'react';
import type { AcademicReferenceBlock } from '../../../types';
import { BookOpen, Bookmark } from 'lucide-react';

export const AcademicReferenceBlockView: React.FC<{ block: AcademicReferenceBlock }> = ({ block }) => {
  const { reference, citationText } = block;

  return (
    <div className="my-6 rounded-2xl bg-white border border-[#D9EAF7] p-5 shadow-2xs text-xs sm:text-sm">
      <div className="flex items-center gap-2 mb-2 text-[#2563EB] font-bold">
        <Bookmark className="w-4 h-4" />
        <span>توثيق مرجعي أكاديمي</span>
      </div>

      {citationText && (
        <blockquote className="italic text-[#172B4D] mb-3 border-r-2 border-[#2563EB] pr-3 py-1 font-medium bg-[#F8FCFF] rounded-l-lg">
          "{citationText}"
        </blockquote>
      )}

      <div className="bg-[#F4FAFF] p-3.5 rounded-xl border border-[#D9EAF7]/80 flex items-start gap-3">
        <BookOpen className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#334155]">
          <div className="font-bold text-[#172B4D]">
            {reference.bookTitle}
          </div>
          <div className="text-[#64748B] flex flex-wrap gap-x-3 gap-y-1">
            <span>المؤلف: {reference.author}</span>
            {reference.edition && <span>الطبعة: {reference.edition}</span>}
            {reference.chapter && <span>الفصل: {reference.chapter}</span>}
            {reference.pageRange && <span>الصفحات: {reference.pageRange}</span>}
          </div>
          {reference.notes && (
            <p className="text-[11px] text-[#64748B] pt-1">
              ملاحظة: {reference.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
