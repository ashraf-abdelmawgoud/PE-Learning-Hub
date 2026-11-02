import React from 'react';
import type { ImageBlock } from '../../../types';
import { ImageIcon } from 'lucide-react';

export const ImageBlockView: React.FC<{ block: ImageBlock }> = ({ block }) => {
  const { src, alt, caption, credit } = block;

  return (
    <figure className="my-8 rounded-3xl bg-[#F8FCFF] border border-[#D9EAF7] p-4 sm:p-5 text-center overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden bg-white border border-[#D9EAF7]/60 flex items-center justify-center min-h-[220px]">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[420px] object-contain mx-auto"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-[#64748B]">
            <ImageIcon className="w-10 h-10 text-blue-300 mb-2" />
            <span className="text-xs font-semibold">{alt}</span>
          </div>
        )}
      </div>

      {(caption || credit) && (
        <figcaption className="mt-3 text-xs text-[#64748B] space-y-1">
          {caption && <span className="font-bold text-[#334155] block">{caption}</span>}
          {credit && <span className="text-[11px] text-[#64748B] block">المصدر الأكاديمي: {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};
