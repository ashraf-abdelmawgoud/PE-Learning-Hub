/**
 * LogoPreviewPage.tsx
 * Interactive Brand Identity & Logo Concepts Preview
 *
 * Highlights the Officially Approved Identity:
 * Concept B: مسار المضمار والقوس الأكاديمي (Athletic Track Arc & Chevron Crest)
 * Along with Concept A and Concept C for archival brand reference.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LogoConceptASymbol,
  LogoConceptCSymbol,
  ConceptFullLogo,
} from '../components/common/LogoConcepts';
import {
  PlatformLogoSymbol,
  PrimaryConceptBSymbol,
  MicroConceptBSymbol,
} from '../components/common/PlatformLogo';
import { CheckCircle2, ArrowRight, Layers, Award } from 'lucide-react';

interface ConceptInfo {
  id: 'A' | 'B' | 'C';
  title: string;
  subtitle: string;
  tagline: string;
  athleticPillar: string;
  academicPillar: string;
  progressPillar: string;
  details: string;
  isApproved?: boolean;
}

const CONCEPTS_DATA: ConceptInfo[] = [
  {
    id: 'B',
    title: 'النموذج ب: مسار المضمار والقوس الأكاديمي (المعتمد رسمياً)',
    subtitle: 'Athletic Track Arc & Chevron Crest (Official Approved Brand)',
    tagline: 'حارات المضمار الأولمبي تلتقي لتشكل درعاً جامعياً للعلوم الرياضية',
    athleticPillar: 'أقواس متحدة المركز تمثل حارات الجري ومضمار ألعاب القوى الأولمبي المتجهة للأعلى.',
    academicPillar: 'شكل درع كلاسيكي وكتاب مفتوح مدمج في قاعدة منصة التتويج يمثل أسس المعرفة.',
    progressPillar: 'نواة التميز الماسية في القمة ترمز لبلوغ خط النهاية وتحقيق الريادة والبطولة.',
    details:
      'تم اعتماد هذا النموذج رسمياً لهوية علوم الرياضة (OloomSport) بعد ترقيته بنظام هندسي متطور يضمن الوضوح التام في كافة المقاسات من 16px حتى 512px.',
    isApproved: true,
  },
  {
    id: 'A',
    title: 'النموذج أ: الكتاب الحركي والأجنحة الديناميكية',
    subtitle: 'Kinetic Book & Dynamic Wings',
    tagline: 'العلم الرياضي ينطلق من صفحات المعرفة نحو قمة الأداء الحركي',
    athleticPillar: 'أجنحة هوائية ثلاثية الطبقات ترمز للانطلاق والسرعة والوثب العالي.',
    academicPillar: 'قاعدة مفتوحة لكتاب أكاديمي تستند إليها كل طبقات الحركة.',
    progressPillar: 'شعلة النصر الماسية على قمة المحور الرأسي تعبر عن الارتقاء والتفوق الأكاديمي.',
    details: 'نموذج استكشافي سابق للتناظر الهندسي الصاعد.',
    isApproved: false,
  },
  {
    id: 'C',
    title: 'النموذج ج: شعلة المعرفة والحلقة البيوميكانيكية',
    subtitle: 'Biomechanical Loop & Academic Torch',
    tagline: 'التحليل الحركي والبحث العلمي يلتف حول شعلة المعرفة الجامعية',
    athleticPillar: 'مدار حركي ثلاثي الأبعاد يعكس التحليل البيوميكانيكي ودورة الحركة البشرية.',
    academicPillar: 'إطار سداسي هندسي يرمز للطابع العلمي والبحثي، مع قاعدة كتاب الشعلة.',
    progressPillar: 'شعلة معرفية متقدة منطلقة للأعلى ترمز للإلهام والريادة الرياضية.',
    details: 'نموذج استكشافي سابق يدمج التقنية الحركية مع الشعلة.',
    isApproved: false,
  },
];

export const LogoPreviewPage: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<'A' | 'B' | 'C'>('B');

  return (
    <div className="min-h-screen bg-[#071C12] text-[#F4FFF7] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#00C853] selection:text-[#071C12]" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Bar & Context */}
        <div className="border-b border-[#103D27] pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B20] text-[#39E66D] border border-[#103D27] text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-[#00C853]" />
              <span>الهوية البصرية الرسمية المعتمدة — علوم الرياضة (OloomSport)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4FFF7]">
              اعتماد وترقية الشعار الرسمي (Concept B: المضمار والقوس الأكاديمي)
            </h1>
            <p className="text-sm sm:text-base text-[#A3C2B0] max-w-2xl leading-relaxed">
              تم اعتماد النموذج (ب) رسمياً وترقيته بتباعد هندسي مثالي، وإزالة التفاصيل الدقيقة المشتتة، وإنتاج نموذج مصغر (Micro/Favicon) لضمان وضوح فائق عند المقاسات الصغيرة (16px - 24px).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#142B20] hover:bg-[#1B5E3A] text-[#F4FFF7] border border-[#103D27] text-sm font-bold transition-all"
            >
              <ArrowRight className="w-4 h-4 text-[#39E66D]" />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
        </div>

        {/* 1. Side-by-Side Large Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CONCEPTS_DATA.map((concept) => {
            const isSelected = selectedConcept === concept.id;
            return (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative flex flex-col justify-between ${
                  concept.isApproved
                    ? 'bg-[#0B2519] border-[#00C853] shadow-xl shadow-[#00C853]/15 ring-2 ring-[#00C853]'
                    : isSelected
                    ? 'bg-[#0B2519] border-[#1B5E3A] shadow-md ring-1 ring-[#1B5E3A]'
                    : 'bg-[#0B2519]/60 border-[#103D27] hover:border-[#1B5E3A] hover:bg-[#0B2519]'
                }`}
              >
                {/* Active / Approved Badge */}
                {concept.isApproved && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C853] text-[#071C12] text-xs font-black shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>النموذج المعتمد رسمياً</span>
                  </div>
                )}

                <div>
                  {/* Symbol Icon Box */}
                  <div className="flex items-center justify-center p-8 rounded-xl bg-[#071C12] border border-[#103D27] mb-6">
                    {concept.id === 'B' && <PlatformLogoSymbol size={100} />}
                    {concept.id === 'A' && <LogoConceptASymbol size={100} />}
                    {concept.id === 'C' && <LogoConceptCSymbol size={100} />}
                  </div>

                  {/* Concept Title & English Label */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-black text-[#F4FFF7]">
                      {concept.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#86efac]/80 font-sans tracking-wide">
                      {concept.subtitle}
                    </p>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-semibold text-[#39E66D] mb-5 pb-4 border-b border-[#103D27]/80">
                    "{concept.tagline}"
                  </p>

                  {/* Pillars Checklist */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="flex items-start gap-2 text-[#D4E9DC]">
                      <span className="w-2 h-2 rounded-full bg-[#00C853] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-[#F4FFF7] block">الحركة الرياضية:</strong>
                        <span className="text-[#A3C2B0]">{concept.athleticPillar}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-[#D4E9DC]">
                      <span className="w-2 h-2 rounded-full bg-[#39E66D] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-[#F4FFF7] block">المعرفة الأكاديمية:</strong>
                        <span className="text-[#A3C2B0]">{concept.academicPillar}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-[#D4E9DC]">
                      <span className="w-2 h-2 rounded-full bg-[#86efac] mt-1.5 shrink-0" />
                      <div>
                        <strong className="text-[#F4FFF7] block">الارتقاء العلمي:</strong>
                        <span className="text-[#A3C2B0]">{concept.progressPillar}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#103D27] text-xs text-[#709280]">
                  {concept.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Simulation & Multi-Scale Verification Lab */}
        <div className="rounded-2xl bg-[#0B2519] border border-[#103D27] p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#103D27] pb-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#F4FFF7] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#00C853]" />
                <span>معمل التدقيق والتحقق من التدرج الحجمي (Multi-Scale Usability)</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A3C2B0]">
                اختبار دقة الشعار المعتمد في الهيدر الفعلي (Navbar)، والخلفيات الداكنة والفاتحة، والأيقونة المفضلة (Favicon).
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="flex items-center gap-2 bg-[#071C12] p-1 rounded-xl border border-[#103D27]">
              {(['B', 'A', 'C'] as const).map((id) => (
                <button
                  key={id}
                  onClick={() => setSelectedConcept(id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedConcept === id
                      ? 'bg-[#00C853] text-[#071C12] shadow'
                      : 'text-[#A3C2B0] hover:text-[#F4FFF7]'
                  }`}
                >
                  النموذج {id} {id === 'B' ? '(المعتمد)' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Test 1: Header Simulator */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#A3C2B0] uppercase tracking-wider block">
              1. محاكاة الهيدر الفعلي للموقع (Header Simulation):
            </span>
            <div className="rounded-xl border border-[#103D27] bg-[#071C12] p-4 flex items-center justify-between shadow-inner">
              <ConceptFullLogo
                concept={selectedConcept}
                symbolSize={36}
                showSubtitle={false}
              />
              
              <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#A3C2B0]">
                <span className="text-[#39E66D]">الرئيسية</span>
                <span>المواد الدراسية</span>
                <span>عن المنصة</span>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-[#00C853] text-[#071C12] text-xs font-bold">
                استكشف المواد
              </div>
            </div>
          </div>

          {/* Test 2: Contrast Environments (Dark vs Light) */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#A3C2B0] uppercase tracking-wider block">
              2. التباين على خلفيات داكنة وفاتحة (Dark & Light Contrast):
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-[#071C12] border border-[#103D27] flex flex-col items-center justify-center gap-4">
                <span className="text-xs font-bold text-[#709280]">خلفية داكنة (Dark Emerald #071C12)</span>
                <ConceptFullLogo
                  concept={selectedConcept}
                  symbolSize={48}
                  showSubtitle={true}
                  textColor="text-[#F4FFF7]"
                />
              </div>

              <div className="p-6 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] flex flex-col items-center justify-center gap-4">
                <span className="text-xs font-bold text-[#486555]">خلفية فاتحة (Clean Light #F4FFF7)</span>
                <ConceptFullLogo
                  concept={selectedConcept}
                  symbolSize={48}
                  showSubtitle={true}
                  textColor="text-[#071C12]"
                  subtitleColor="text-[#103D27]"
                  bgFill="#071C12"
                  bgStroke="#103D27"
                />
              </div>
            </div>
          </div>

          {/* Test 3: Multi-Scale Usability for Concept B */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#A3C2B0] uppercase tracking-wider block">
              3. التدرج الحجمي والوضوح الدقيق للشعار المعتمد (16px, 24px, 32px, 48px, 64px):
            </span>
            <div className="p-6 rounded-xl bg-[#071C12] border border-[#103D27] flex flex-wrap items-center justify-around gap-6">
              
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <PrimaryConceptBSymbol size={64} />
                </div>
                <span className="text-[11px] text-[#A3C2B0]">64×64px (Primary)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <PrimaryConceptBSymbol size={48} />
                </div>
                <span className="text-[11px] text-[#A3C2B0]">48×48px (Primary)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <PrimaryConceptBSymbol size={36} />
                </div>
                <span className="text-[11px] text-[#A3C2B0]">36×36px (الهيدر)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <MicroConceptBSymbol size={32} />
                </div>
                <span className="text-[11px] text-[#39E66D] font-bold">32×32px (Micro)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <MicroConceptBSymbol size={24} />
                </div>
                <span className="text-[11px] text-[#39E66D] font-bold">24×24px (Micro)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <MicroConceptBSymbol size={16} />
                </div>
                <span className="text-[11px] text-[#00C853] font-bold">16×16px (Favicon)</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-lg bg-[#142B20] border border-[#103D27]">
                  <PrimaryConceptBSymbol size={32} variant="monochrome" className="text-[#39E66D]" />
                </div>
                <span className="text-[11px] text-[#A3C2B0]">أحادي (Monochrome)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
