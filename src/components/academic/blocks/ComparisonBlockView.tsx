import React from 'react';
import type { ComparisonBlock } from '../../../types';
import { ArrowLeftRight } from 'lucide-react';

export const ComparisonBlockView: React.FC<{ block: ComparisonBlock }> = ({ block }) => {
  const { title = 'مقارنة وتحليل الفروق', headers, rows } = block;

  return (
    <div className="my-8 rounded-3xl bg-white border border-[#D9EAF7] p-5 sm:p-7 shadow-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-cyan-100 text-[#0891B2] flex items-center justify-center">
          <ArrowLeftRight className="w-4 h-4" />
        </div>
        <h4 className="text-lg font-black text-[#172B4D]">
          {title}
        </h4>
      </div>

      {/* Responsive Table for Desktop/Tablet */}
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b-2 border-[#D9EAF7] bg-[#F4FAFF]">
              <th className="py-3 px-4 text-xs font-bold text-[#64748B] w-1/3">
                وجه المقارنة
              </th>
              <th className="py-3 px-4 text-sm font-black text-[#2563EB] w-1/3">
                {headers[0]}
              </th>
              <th className="py-3 px-4 text-sm font-black text-[#0891B2] w-1/3">
                {headers[1]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D9EAF7]/60 text-sm">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F8FCFF] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#172B4D] bg-[#F8FCFF]/50">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 text-[#334155] leading-relaxed">
                  {row.itemA}
                </td>
                <td className="py-3.5 px-4 text-[#334155] leading-relaxed">
                  {row.itemB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
