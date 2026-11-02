import React from 'react';
import type { AcademicReferenceBlock } from '../../../types';
import { BookOpen, Bookmark } from 'lucide-react';

export const AcademicReferenceBlockView: React.FC<{ block: AcademicReferenceBlock }> = ({ block }) => {
  const { reference, citationText } = block;

  return (
    <div className="my-6 rounded-2xl bg-white border border-[#D4E9DC] p-5 shadow-2xs text-xs sm:text-sm transition-colors">
      <div className="flex items-center gap-2 mb-2 text-[#173D2B] font-bold">
        <Bookmark className="w-4 h-4 text-[#00C853]" />
        <span>توثيق مرجعي أكاديمي</span>
      </div>

      {citationText && (
        <blockquote className="italic text-[#173D2B] mb-3 border-r-2 border-[#00C853] pr-3 py-1 font-medium bg-[#F4FFF7] rounded-l-lg">
          "{citationText}"
        </blockquote>
      )}

      <div className="bg-[#F4FFF7] p-3.5 rounded-xl border border-[#D4E9DC]/80 flex items-start gap-3">
        <BookOpen className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#486555]">
          <div className="font-bold text-[#173D2B]">
            {reference.bookTitle}
          </div>
          <div className="text-[#6C8577] flex flex-wrap gap-x-3 gap-y-1">
            <span>المؤلف: {reference.author}</span>
            {reference.edition && <span>الطبعة: {reference.edition}</span>}
            {reference.chapter && <span>الفصل: {reference.chapter}</span>}
            {reference.pageRange && <span>الصفحات: {reference.pageRange}</span>}
          </div>
          {reference.notes && (
            <p className="text-[11px] text-[#6C8577] pt-1">
              ملاحظة: {reference.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
