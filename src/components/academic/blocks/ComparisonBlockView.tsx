import React from 'react';
import type { ComparisonBlock } from '../../../types';
import { ArrowLeftRight } from 'lucide-react';

export const ComparisonBlockView: React.FC<{ block: ComparisonBlock }> = ({ block }) => {
  const { title = 'مقارنة وتحليل الفروق', headers, rows } = block;

  return (
    <div className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-colors">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]">
          <ArrowLeftRight className="w-4 h-4" />
        </div>
        <h4 className="text-lg font-black text-[#173D2B]">
          {title}
        </h4>
      </div>

      {/* Responsive Table for Desktop/Tablet */}
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b-2 border-[#D4E9DC] bg-[#E8F8EE]">
              <th className="py-3 px-4 text-xs font-bold text-[#6C8577] w-1/3">
                وجه المقارنة
              </th>
              <th className="py-3 px-4 text-sm font-black text-[#173D2B] w-1/3">
                {headers[0]}
              </th>
              <th className="py-3 px-4 text-sm font-black text-[#059669] w-1/3">
                {headers[1]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#D4E9DC]/60 text-sm">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F4FFF7] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#173D2B] bg-[#F4FFF7]/50">
                  {row.feature}
                </td>
                <td className="py-3.5 px-4 text-[#486555] leading-relaxed">
                  {row.itemA}
                </td>
                <td className="py-3.5 px-4 text-[#486555] leading-relaxed">
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
