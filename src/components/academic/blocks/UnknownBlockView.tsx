import React from 'react';
import type { ContentBlock } from '../../../types';
import { AlertCircle } from 'lucide-react';

export const UnknownBlockView: React.FC<{ block: ContentBlock }> = ({ block }) => {
  return (
    <div className="my-4 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-[#64748B] flex items-center gap-3">
      <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
      <div>
        <span className="font-bold block text-[#334155]">
          كتلة محتوى من نوع غير معروف أو مستقبلي: {(block as any).type || 'unknown'}
        </span>
        <span className="text-[11px]">
          تم تجاوز عرض هذه الكتلة بنجاح لضمان استقرار الصفحة دون توقف.
        </span>
      </div>
    </div>
  );
};
