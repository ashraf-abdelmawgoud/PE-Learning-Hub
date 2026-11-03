/**
 * DecisionScenarioView.tsx
 * Type 4: Decision-Based Learning (المواقف التعليمية القائمة على اتخاذ القرار)
 * Phase 4.2 — Smart Educational Visual System
 *
 * Core Features:
 * - Content-First: Applied problem-solving scenarios for physical education pedagogy.
 * - Explicit pedagogical foundation from textbook.
 * - Clear disclaimer distinguishing virtual scenarios from verbatim textbook quotations.
 * - Meaningful feedback, consequence analysis, and retry mechanics.
 * - Fully accessible, Cairo typography, RTL support.
 */

import React, { useState } from 'react';
import type { DecisionScenarioBlock, DecisionScenarioOption } from '../../../types';
import {
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
  UserCheck,
  ShieldAlert,
} from 'lucide-react';

interface DecisionScenarioViewProps {
  block: DecisionScenarioBlock;
}

export const DecisionScenarioView: React.FC<DecisionScenarioViewProps> = ({ block }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const selectedOption: DecisionScenarioOption | undefined = block.options.find(
    (opt) => opt.id === selectedOptionId
  );

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleReset = () => {
    setSelectedOptionId(null);
  };

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-all text-right"
      dir="rtl"
      aria-labelledby={`decision-title-${block.id}`}
    >
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC] shadow-xs">
            <UserCheck className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#00A844] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]">
                موقف تعليمي تطبيقي (Decision-Based Learning)
              </span>
              {block.academicCitation && (
                <span className="text-[11px] font-semibold text-[#6C8577] hidden sm:inline">
                  {block.academicCitation}
                </span>
              )}
            </div>
            <h3
              id={`decision-title-${block.id}`}
              className="text-base sm:text-lg font-black text-[#173D2B] mt-0.5"
            >
              {block.title}
            </h3>
          </div>
        </div>

        {/* Virtual Simulation Disclaimer Badge */}
        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
          <span>سيناريو تطبيقي افتراضي</span>
        </span>
      </div>

      {/* 2. Target Role & Academic Foundation Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-xs">
        {block.targetRole && (
          <div className="bg-[#F4FFF7] p-3.5 rounded-2xl border border-[#D4E9DC] flex items-center gap-2">
            <span className="font-black text-[#103D27] shrink-0">دورك في الموقف:</span>
            <span className="text-[#173D2B] font-bold">{block.targetRole}</span>
          </div>
        )}

        <div className="bg-[#E8F8EE]/70 p-3.5 rounded-2xl border border-[#D4E9DC] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#00C853] shrink-0" />
          <div className="truncate">
            <span className="font-black text-[#103D27] ml-1">الضابط الأكاديمي:</span>
            <span className="text-[#173D2B]">{block.academicFoundation}</span>
          </div>
        </div>
      </div>

      {/* 3. The Practical Situation Context Box */}
      <div className="bg-[#0B2519] text-[#F4FFF7] rounded-3xl p-5 sm:p-6 mb-6 shadow-sm border border-[#143D27] space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#39E66D]">
          <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
          <span>وصف الموقف التعليمي الميداني:</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed font-bold">
          {block.contextSituation}
        </p>
      </div>

      {/* 4. Options List */}
      <div className="space-y-3 mb-6">
        <span className="text-xs font-black text-[#173D2B] block">
          بناءً على فهمك لمنظومة المنهج، اختر القرار التربوي الأنسب:
        </span>

        <div className="grid grid-cols-1 gap-3">
          {block.options.map((option, idx) => {
            const isSelected = option.id === selectedOptionId;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option.id)}
                className={`p-4 rounded-2xl border text-right transition-all cursor-pointer flex items-start gap-3 relative ${
                  isSelected
                    ? option.isOptimal
                      ? 'bg-[#E8F8EE] border-[#00C853] ring-2 ring-[#00C853]/40 shadow-sm'
                      : 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-400/40 shadow-sm'
                    : 'bg-white border-[#D4E9DC] hover:border-[#00C853] hover:bg-[#F4FFF7]'
                }`}
              >
                {/* Option Letter / Index */}
                <span
                  className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 mt-0.5 font-mono ${
                    isSelected
                      ? option.isOptimal
                        ? 'bg-[#00C853] text-[#071C12]'
                        : 'bg-amber-500 text-white'
                      : 'bg-[#E8F8EE] text-[#173D2B]'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>

                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-bold text-[#173D2B] leading-relaxed">
                      {option.text}
                    </p>
                    {option.consequenceBadge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#6C8577] border border-[#D4E9DC]">
                        {option.consequenceBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Selected Check / Arrow */}
                {isSelected && (
                  <span className="shrink-0 mt-1">
                    {option.isOptimal ? (
                      <CheckCircle2 className="w-5 h-5 text-[#00C853]" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                    )}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Consequence & Pedagogical Feedback Panel (Revealed on Selection) */}
      {selectedOption && (
        <div
          className={`rounded-3xl p-5 sm:p-7 border space-y-4 transition-all duration-300 ${
            selectedOption.isOptimal
              ? 'bg-[#E8F8EE] border-[#00C853]/60'
              : 'bg-amber-50 border-amber-300'
          }`}
        >
          {/* Status Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {selectedOption.isOptimal ? (
                <div className="w-7 h-7 rounded-xl bg-[#00C853] text-[#071C12] flex items-center justify-center font-black">
                  ✓
                </div>
              ) : (
                <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black">
                  !
                </div>
              )}
              <h4
                className={`text-sm sm:text-base font-black ${
                  selectedOption.isOptimal ? 'text-[#103D27]' : 'text-amber-950'
                }`}
              >
                {selectedOption.feedbackTitle}
              </h4>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-[#D4E9DC] hover:bg-[#F4FFF7] text-[#173D2B] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#00C853]" />
              <span>تجربة قرار آخر</span>
            </button>
          </div>

          {/* Feedback Body */}
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              selectedOption.isOptimal ? 'text-[#173D2B]' : 'text-amber-900'
            }`}
          >
            {selectedOption.feedbackText}
          </p>

          {/* Academic Justification */}
          <div className="bg-white rounded-2xl p-4 border border-[#D4E9DC] space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-black text-[#103D27]">
              <Sparkles className="w-4 h-4 text-[#00C853]" />
              <span>التفسير والتحليل الأكاديمي (الأساس التربوي):</span>
            </div>
            <p className="text-xs text-[#486555] leading-relaxed">
              {selectedOption.pedagogicalJustification}
            </p>
          </div>

          {/* Practical field takeaway (if available) */}
          {selectedOption.fieldExample && (
            <p className="text-xs text-[#059669] font-bold">
              💡 ملحوظة ميدانية: {selectedOption.fieldExample}
            </p>
          )}
        </div>
      )}
    </figure>
  );
};
