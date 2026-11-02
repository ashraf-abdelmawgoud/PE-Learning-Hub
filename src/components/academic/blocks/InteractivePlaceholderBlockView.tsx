import React from 'react';
import type { InteractivePlaceholderBlock } from '../../../types';
import { Activity, HelpCircle, Eye, Box, Calculator, Sparkles } from 'lucide-react';

export const InteractivePlaceholderBlockView: React.FC<{ block: InteractivePlaceholderBlock }> = ({
  block,
}) => {
  const { placeholderType, title, description, expectedFeature } = block;

  const getIcon = () => {
    switch (placeholderType) {
      case 'simulation':
        return <Activity className="w-6 h-6 text-[#2563EB]" />;
      case 'quiz':
        return <HelpCircle className="w-6 h-6 text-[#14B8A6]" />;
      case 'diagram':
        return <Eye className="w-6 h-6 text-[#06B6D4]" />;
      case '3d_model':
        return <Box className="w-6 h-6 text-[#6366F1]" />;
      case 'calculator':
        return <Calculator className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  const getBadgeLabel = () => {
    switch (placeholderType) {
      case 'simulation':
        return 'مختبر محاكاة حركية';
      case 'quiz':
        return 'نشاط تقييمي تفاعلي';
      case 'diagram':
        return 'رسم بياني تفاعلي';
      case '3d_model':
        return 'نموذج تشريحي تفاعلي';
      case 'calculator':
        return 'حاسبة فسيولوجية';
      default:
        return 'كتلة تفاعلية';
    }
  };

  return (
    <div className="my-8 rounded-3xl bg-gradient-to-br from-[#F4FAFF] via-white to-blue-50/30 border-2 border-dashed border-blue-200 p-6 sm:p-7 text-center">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-4 shadow-2xs">
        {getIcon()}
      </div>

      <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100/70 text-[#2563EB] mb-2">
        {getBadgeLabel()}
      </span>

      <h4 className="text-lg font-black text-[#172B4D] mb-2">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-lg mx-auto mb-4">
        {description}
      </p>

      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0891B2] bg-cyan-50 px-3.5 py-1.5 rounded-xl border border-cyan-200">
        <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
        <span>الوظيفة المستهدفة: {expectedFeature} (بنية مهيأة للإطلاق الأكاديمي)</span>
      </div>
    </div>
  );
};
