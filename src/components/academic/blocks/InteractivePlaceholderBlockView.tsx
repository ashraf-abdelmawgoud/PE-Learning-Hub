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
        return <Activity className="w-6 h-6 text-[#00C853]" />;
      case 'quiz':
        return <HelpCircle className="w-6 h-6 text-[#059669]" />;
      case 'diagram':
        return <Eye className="w-6 h-6 text-[#39E66D]" />;
      case '3d_model':
        return <Box className="w-6 h-6 text-[#173D2B]" />;
      case 'calculator':
        return <Calculator className="w-6 h-6 text-[#D97706]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00C853]" />;
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
    <div className="my-8 rounded-3xl bg-gradient-to-br from-[#F4FFF7] via-white to-[#E8F8EE]/60 border-2 border-dashed border-[#00C853]/40 p-6 sm:p-7 text-center transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-[#E8F8EE] border border-[#D4E9DC] flex items-center justify-center mx-auto mb-4 shadow-2xs">
        {getIcon()}
      </div>

      <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC] mb-2">
        {getBadgeLabel()}
      </span>

      <h4 className="text-lg font-black text-[#173D2B] mb-2">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-[#486555] leading-relaxed max-w-lg mx-auto mb-4">
        {description}
      </p>

      <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#173D2B] bg-[#E8F8EE] px-3.5 py-1.5 rounded-xl border border-[#D4E9DC]">
        <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
        <span>الوظيفة المستهدفة: {expectedFeature} (بنية مهيأة للإطلاق الأكاديمي)</span>
      </div>
    </div>
  );
};
