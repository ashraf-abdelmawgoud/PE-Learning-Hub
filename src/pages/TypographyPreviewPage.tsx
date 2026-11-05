/**
 * TypographyPreviewPage.tsx
 * Development-Only Arabic Hero Typography Comparison Preview for علوم الرياضة (OloomSport)
 *
 * This page allows comparing 6 distinctive Arabic typefaces for the homepage hero headline:
 * 1. Cairo (الخط المعتمد حالياً)
 * 2. Tajawal (تجوال)
 * 3. Alexandria (الإسكندرية)
 * 4. IBM Plex Sans Arabic (آي بي إم بليكس)
 * 5. Almarai (المراعي)
 * 6. Changa (تشانجا)
 *
 * Headline structure:
 * Line 1: "علوم الرياضة" — green (#32D978)
 * Line 2: "بأسلوب مختلف" — white (#FFFFFF)
 * Background: #08271B
 *
 * Note: Excluded from production builds via Vite dead-code elimination (DCE).
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Type,
  Smartphone,
  Monitor,
  LayoutGrid,
  Columns,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Info,
  BookOpen,
  Compass,
  ArrowLeft,
} from 'lucide-react';
import { LowPolyAthletesGraphic } from '../components/home/LowPolyAthletesGraphic';

interface FontOption {
  id: string;
  nameAr: string;
  nameEn: string;
  fontFamily: string;
  category: string;
  weights: number[];
  defaultWeight: number;
  characteristics: string;
  tone: string;
  pros: string[];
  lineHeightScale: string;
}

const FONT_OPTIONS: FontOption[] = [
  {
    id: 'cairo',
    nameAr: 'كايرو',
    nameEn: 'Cairo',
    fontFamily: "'Cairo', sans-serif",
    category: 'هندسي معاصر — الخط الحالي للمنصة',
    weights: [600, 700, 800, 900],
    defaultWeight: 900,
    characteristics: 'هندسي صريح، فتحات حروف متسعة، طاقة رياضية وانقرائية عالية جداً في العناوين والشاشات.',
    tone: 'رياضي، عصري، نشط، متناسق مع هوية المنصة الحالية.',
    pros: [
      'الخط الأساسي للمنصة — لا يتطلب تحميل أي ملفات إضافية.',
      'يدعم وزن Black (900) الصريح والفائق للفت الانتباه.',
      'محاذاة عمودية متوازنة وتناسق ممتاز مع الأرقام والرموز.',
    ],
    lineHeightScale: 'leading-tight',
  },
  {
    id: 'tajawal',
    nameAr: 'تجوال',
    nameEn: 'Tajawal',
    fontFamily: "'Tajawal', sans-serif",
    category: 'هندسي ناعم — انسيابي وشديد الوضوح',
    weights: [500, 700, 800, 900],
    defaultWeight: 800,
    characteristics: 'حواف مستديرة قليلاً مع انحناءات انسيابية دقيقة، يجمع بين البنية الهندسية والنعومة البصرية.',
    tone: 'تربوي، مريح للعين، ترحيبي، تقني خفيف.',
    pros: [
      'انقرائية مريحة جداً حتى في الخطوط الكبيرة.',
      'ارتفاع سقف الحروف (x-height) متقارب يمنح تماسكاً ممتازاً للسطرين.',
      'يدعم حتى وزن ExtraBold و Black.',
    ],
    lineHeightScale: 'leading-tight',
  },
  {
    id: 'alexandria',
    nameAr: 'الإسكندرية',
    nameEn: 'Alexandria',
    fontFamily: "'Alexandria', sans-serif",
    category: 'هندسي معماري — حاد ومتباعد الزوايا',
    weights: [600, 700, 800, 900],
    defaultWeight: 800,
    characteristics: 'مستوحى من الخط الكوفي المعاصر بخطوط حادة وزوايا قائمة متقنة، يمنح إحساساً معمارياً فائق القوة.',
    tone: 'فخم، معماري، حاد، يمنح شعوراً رصيناً بالإنجاز والبطولة.',
    pros: [
      'حضور بصري حاسم وشديد التميز لا يشبه المواقع التقليدية.',
      'نسب أفقية عريضة تملأ مساحة العنوان بثقة.',
      'تدرج أوزان ممتاز من Regular حتى Black.',
    ],
    lineHeightScale: 'leading-snug',
  },
  {
    id: 'ibm-plex-arabic',
    nameAr: 'آي بي إم بليكس',
    nameEn: 'IBM Plex Sans Arabic',
    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
    category: 'تقني وأكاديمي — دقة هندسية موجهة للبيئات العلمية',
    weights: [500, 600, 700],
    defaultWeight: 700,
    characteristics: 'تصميم هندسي صناعي مدروس لشركة IBM العالمية لتعزيز الطابع الأكاديمي والتقني الموثوق.',
    tone: 'أكاديمي، علمي موثوق، جامعي رصين، يعكس منهجية التعلم.',
    pros: [
      'أعلى مستوى من الرصانة والوقار الأكاديمي بين جميع الخيارات.',
      'تباين واضح بين الحروف وتوازن ممتاز في المسافات البينية.',
      'محبوب لدى المنصات العلمية والجامعية العالمية.',
    ],
    lineHeightScale: 'leading-normal',
  },
  {
    id: 'almarai',
    nameAr: 'المراعي',
    nameEn: 'Almarai',
    fontFamily: "'Almarai', sans-serif",
    category: 'رقمي معاصر — نظيف وعالي الانقرائية على شاشات الجوال',
    weights: [700, 800],
    defaultWeight: 800,
    characteristics: 'خط عربي حديث مطور خصيصاً للشاشات الرقمية المدمجة مع اهتمام فائق بحجم الأقواس واستدارة النهايات.',
    tone: 'رقمي، حديث، ودي، مريح لعين الطالب عند القراءة المستمرة.',
    pros: [
      'انسيابية استثنائية على شاشات الهواتف المحمولة.',
      'عدم تشابك الحروف حتى في المقاسات الأصغر.',
      'هندسة متوازنة دون أي حدة زائدة.',
    ],
    lineHeightScale: 'leading-tight',
  },
  {
    id: 'changa',
    nameAr: 'تشانجا',
    nameEn: 'Changa',
    fontFamily: "'Changa', sans-serif",
    category: 'رياضي ملصقي — عريض وجريء بنكهة الملاعب',
    weights: [600, 700, 800],
    defaultWeight: 800,
    characteristics: 'خط عريض ذو طابع بوستري قوي، خطوط مستقيمة عريضة ونهايات مربعة تذكر بملصقات الألعاب الأولمبية.',
    tone: 'رياضي حماسي، جريء، يذكر بلافتات الملاعب ومسابقات الجري.',
    pros: [
      'طابع رياضي بارز وصريح لا يقبل اللبس.',
      'كتلة لونية كثيفة تعطي وزناً بصرياً هائلاً للشعار والعنوان.',
      'ممتاز للشاشات الكبيرة والمطبوعات الدعائية.',
    ],
    lineHeightScale: 'leading-none',
  },
];

export const TypographyPreviewPage: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'all' | 'mobile' | 'desktop' | 'compare'>('all');
  const [selectedWeight, setSelectedWeight] = useState<number>(800);
  const [showIllustration, setShowIllustration] = useState<boolean>(true);
  const [activeCompareLeft, setActiveCompareLeft] = useState<string>('cairo');
  const [activeCompareRight, setActiveCompareRight] = useState<string>('alexandria');
  const [isFontReady, setIsFontReady] = useState<boolean>(() => {
    return typeof document !== 'undefined' && Boolean(document.getElementById('dev-typography-preview-fonts'));
  });

  // Dynamically load Google Fonts for the 5 comparative typefaces
  useEffect(() => {
    const linkId = 'dev-typography-preview-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Alexandria:wght@600;700;800;900&family=Almarai:wght@700;800&family=Changa:wght@600;700;800&family=IBM+Plex+Sans+Arabic:wght@600;700&family=Tajawal:wght@700;800;900&display=swap';
      
      link.onload = () => {
        setIsFontReady(true);
      };
      document.head.appendChild(link);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => setIsFontReady(true));
    }
  }, []);

  const headlineLine1 = 'علوم الرياضة';
  const headlineLine2 = 'بأسلوب مختلف';
  const supportingDescription =
    'دروس مبسطة، فيديوهات تعليمية، واختبارات تفاعلية تساعدك على الفهم والمراجعة.';

  return (
    <div className="min-h-screen bg-[#05140D] text-[#F4FFF7] pb-24 transition-colors font-sans" dir="rtl">
      
      {/* Top Development Bar */}
      <div className="bg-[#0A261A] border-b border-[#143D27] sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00C853]/15 text-[#32D978] flex items-center justify-center border border-[#00C853]/30">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm text-[#F4FFF7]">معمل معاينة الخطوط العربية</span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#00C853]/20 text-[#32D978] border border-[#00C853]/40">
                  بيئة تطوير محلية (DEV ONLY)
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isFontReady
                    ? 'bg-[#00C853]/15 text-[#32D978] border-[#00C853]/30'
                    : 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                }`}>
                  {isFontReady ? 'الخطوط محملة بنجاح' : 'جاري تحميل ملفات الخطوط...'}
                </span>
              </div>
              <p className="text-xs text-[#A3C2B0]">
                مقارنة بصرية بين 6 خطوط عربية لعنوان Hero Section قبل الاختيار والاعتماد
              </p>
            </div>
          </div>

          {/* Quick Navigation to live site */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A3C2B0] hover:text-[#32D978] transition-colors"
          >
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

        </div>
      </div>

      {/* Control Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="bg-[#08271B] border border-[#143D27] rounded-3xl p-5 sm:p-6 shadow-xl space-y-5">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#143D27]/80">
            <div>
              <h1 className="text-lg font-black text-[#F4FFF7] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#32D978]" />
                <span>لوحة التحكم في عرض المقارنة</span>
              </h1>
              <p className="text-xs text-[#A3C2B0] mt-1">
                اختر طريقة العرض والمقاس ونمط العرض لمقارنة تأثير الخطوط في ظروف واقعية
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex flex-wrap items-center gap-2 bg-[#051710] p-1.5 rounded-2xl border border-[#143D27]">
              <button
                type="button"
                onClick={() => setSelectedView('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedView === 'all'
                    ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                    : 'text-[#A3C2B0] hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>جميع الخطوط (شبكة كاملة)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedView('mobile')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedView === 'mobile'
                    ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                    : 'text-[#A3C2B0] hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>شاشة الجوال (375px)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedView('desktop')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedView === 'desktop'
                    ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                    : 'text-[#A3C2B0] hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>سطح المكتب (1440px)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedView('compare')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedView === 'compare'
                    ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                    : 'text-[#A3C2B0] hover:text-white'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>مقارنة ثنائية (1v1)</span>
              </button>
            </div>
          </div>

          {/* Sub Controls: Weight & Illustration Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            
            {/* Weight Switcher */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#A3C2B0]">وزن الخط (Font Weight):</span>
              <div className="inline-flex rounded-xl bg-[#051710] p-1 border border-[#143D27]">
                {[
                  { label: 'Bold (700)', value: 700 },
                  { label: 'ExtraBold (800)', value: 800 },
                  { label: 'Black (900)', value: 900 },
                ].map((w) => (
                  <button
                    key={w.value}
                    type="button"
                    onClick={() => setSelectedWeight(w.value)}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                      selectedWeight === w.value
                        ? 'bg-[#32D978] text-[#071C12]'
                        : 'text-[#A3C2B0] hover:text-white'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Illustration Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowIllustration(!showIllustration)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  showIllustration
                    ? 'bg-[#00C853]/15 border-[#00C853]/40 text-[#32D978]'
                    : 'bg-[#051710] border-[#143D27] text-[#A3C2B0]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showIllustration ? 'الرسم الرياضي مفعل' : 'إخفاء الرسم (تركيز نصي)'}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* VIEW 1: All Fonts Grid */}
        {selectedView === 'all' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-[#F4FFF7] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#32D978]" />
                  <span>استعراض الخطوط الستة كاملة</span>
                </h2>
                <p className="text-xs text-[#A3C2B0] mt-1">
                  نفس النص، ونفس الألوان، ونفس الخلفية (#08271B) لمعاينة متكافئة وعادلة 100%
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FONT_OPTIONS.map((font, idx) => (
                <div
                  key={font.id}
                  className="bg-[#08271B] border-2 border-[#143D27] hover:border-[#32D978]/50 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between space-y-6"
                >
                  {/* Subtle Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C853]/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Card Header: Font Name & Number */}
                  <div className="flex items-start justify-between gap-4 border-b border-[#143D27]/80 pb-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-[#32D978] text-[#071C12] font-black text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-black text-[#F4FFF7]">
                          خط {font.nameAr}
                          <span className="text-sm font-normal text-[#A3C2B0] mr-2">({font.nameEn})</span>
                        </h3>
                      </div>
                      <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#051710] text-[#32D978] border border-[#143D27]">
                        {font.category}
                      </span>
                    </div>

                    <div className="text-left font-mono text-[11px] text-[#A3C2B0]">
                      <div>font-family:</div>
                      <div className="text-white font-bold">{font.nameEn}</div>
                    </div>
                  </div>

                  {/* The Headline Card Rendering */}
                  <div className="relative z-10 space-y-4 text-center sm:text-right py-2">
                    
                    {/* The 2-Line Headline */}
                    <div
                      className={`text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight transition-all`}
                      style={{
                        fontFamily: font.fontFamily,
                        fontWeight: font.weights.includes(selectedWeight)
                          ? selectedWeight
                          : font.defaultWeight,
                      }}
                    >
                      <span className="block text-[#32D978]">
                        {headlineLine1}
                      </span>
                      <span className="block text-[#FFFFFF] mt-1 sm:mt-1.5">
                        {headlineLine2}
                      </span>
                    </div>

                    {/* Supporting Description */}
                    <p
                      className="text-sm sm:text-base text-[#D4E9DC]/90 leading-relaxed font-normal max-w-xl"
                      style={{ fontFamily: font.fontFamily }}
                    >
                      {supportingDescription}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs shadow-md"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        <BookOpen className="w-4 h-4 text-[#071C12]" />
                        <span>استكشف المواد</span>
                        <ArrowLeft className="w-3.5 h-3.5 text-[#071C12]" />
                      </button>

                      <button
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#142B20] text-[#F4FFF7] font-bold text-xs border border-[#00C853]/30"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        <Compass className="w-4 h-4 text-[#39E66D]" />
                        <span>كيف تتعلم؟</span>
                      </button>
                    </div>

                    {/* LowPoly Graphic Thumbnail in Card */}
                    {showIllustration && (
                      <div className="pt-4 flex justify-center">
                        <div className="max-w-[200px] opacity-90 transition-transform group-hover:scale-105">
                          <LowPolyAthletesGraphic />
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Font Evaluation & Analysis */}
                  <div className="relative z-10 pt-4 border-t border-[#143D27]/80 space-y-2 text-xs">
                    <div className="text-[#A3C2B0]">
                      <strong className="text-white">السمة البصرية:</strong> {font.characteristics}
                    </div>
                    <div className="text-[#A3C2B0]">
                      <strong className="text-white">الطابع والانطباع:</strong> {font.tone}
                    </div>
                    <div className="space-y-1 pt-1">
                      {font.pros.map((pro, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 text-[#D4E9DC]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#32D978] shrink-0" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Mobile 375px Comparison */}
        {selectedView === 'mobile' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#F4FFF7] flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#32D978]" />
                <span>محاكاة شاشات الجوال (375px Mobile Viewport)</span>
              </h2>
              <p className="text-xs text-[#A3C2B0] mt-1">
                معاينة الحجم الواقعي داخل إطار هاتف بعرض 375px لفحص عدم التفاف الكلمات وتناسق السطرين مع أزرار الإجراء
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {FONT_OPTIONS.map((font, idx) => (
                <div key={font.id} className="space-y-3 w-full max-w-[375px]">
                  
                  {/* Phone Frame Header */}
                  <div className="flex items-center justify-between text-xs px-2">
                    <span className="font-black text-[#32D978] flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-md bg-[#32D978]/20 text-[#32D978] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{font.nameAr} — {font.nameEn}</span>
                    </span>
                    <span className="text-[10px] text-[#A3C2B0]">375px × 680px</span>
                  </div>

                  {/* Mock Device Container */}
                  <div className="w-[375px] bg-[#08271B] border-4 border-[#143D27] rounded-[36px] p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[640px]">
                    
                    {/* Speaker notch */}
                    <div className="w-24 h-4 bg-[#051710] rounded-b-xl mx-auto mb-4 border-b border-[#143D27]" />

                    {/* Hero Content inside 375px */}
                    <div className="space-y-4 text-center">
                      
                      {/* Headline in 2 lines */}
                      <h3
                        className="text-[28px] sm:text-[32px] tracking-tight leading-tight"
                        style={{
                          fontFamily: font.fontFamily,
                          fontWeight: font.weights.includes(selectedWeight)
                            ? selectedWeight
                            : font.defaultWeight,
                        }}
                      >
                        <span className="block text-[#32D978]">{headlineLine1}</span>
                        <span className="block text-[#FFFFFF] mt-1">{headlineLine2}</span>
                      </h3>

                      {/* Supporting Description */}
                      <p
                        className="text-xs text-[#D4E9DC]/90 leading-relaxed font-normal px-2"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        {supportingDescription}
                      </p>

                      {/* Illustration inside phone */}
                      {showIllustration && (
                        <div className="py-2 flex justify-center">
                          <div className="w-[240px]">
                            <LowPolyAthletesGraphic />
                          </div>
                        </div>
                      )}

                      {/* Action Buttons stacked */}
                      <div className="space-y-2 pt-1 w-full">
                        <button
                          type="button"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs shadow-md"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          <BookOpen className="w-4 h-4 text-[#071C12]" />
                          <span>استكشف المواد</span>
                          <ArrowLeft className="w-3.5 h-3.5 text-[#071C12]" />
                        </button>

                        <button
                          type="button"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#142B20] text-[#F4FFF7] font-bold text-xs border border-[#00C853]/30"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          <Compass className="w-4 h-4 text-[#39E66D]" />
                          <span>كيف تتعلم؟</span>
                        </button>
                      </div>

                    </div>

                    {/* Bottom home bar */}
                    <div className="w-32 h-1 bg-[#143D27] rounded-full mx-auto mt-4" />

                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: Desktop 1440px Proportions */}
        {selectedView === 'desktop' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#F4FFF7] flex items-center gap-2">
                <Monitor className="w-5 h-5 text-[#32D978]" />
                <span>محاكاة سطح المكتب بنظام العمودين (Desktop 1440px Proportions)</span>
              </h2>
              <p className="text-xs text-[#A3C2B0] mt-1">
                معاينة كيفية استقرار العنوان بجانب الرسم التوضيحي بالعمودين المعتمدين للشاشات الكبيرة
              </p>
            </div>

            <div className="space-y-8">
              {FONT_OPTIONS.map((font, idx) => (
                <div
                  key={font.id}
                  className="bg-[#08271B] border-2 border-[#143D27] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#143D27]/80 pb-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-[#32D978] text-[#071C12] font-black text-sm flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h3 className="text-2xl font-black text-[#F4FFF7]">
                        خط {font.nameAr}
                        <span className="text-sm font-normal text-[#A3C2B0] mr-2">({font.nameEn})</span>
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#051710] text-[#32D978] border border-[#143D27]">
                        {font.category}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-[#A3C2B0]">
                      Desktop 60px — {font.nameEn}
                    </div>
                  </div>

                  {/* 2-Column Desktop Simulation */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Right Column: Typography (col-span-7) */}
                    <div className="lg:col-span-7 space-y-6 text-right">
                      <h4
                        className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
                        style={{
                          fontFamily: font.fontFamily,
                          fontWeight: font.weights.includes(selectedWeight)
                            ? selectedWeight
                            : font.defaultWeight,
                        }}
                      >
                        <span className="block text-[#32D978]">{headlineLine1}</span>
                        <span className="block text-[#FFFFFF] mt-2">{headlineLine2}</span>
                      </h4>

                      <p
                        className="text-base sm:text-lg text-[#D4E9DC]/90 leading-relaxed font-normal max-w-xl"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        {supportingDescription}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-sm shadow-lg shadow-[#00C853]/25"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          <BookOpen className="w-5 h-5 text-[#071C12]" />
                          <span>استكشف المواد</span>
                          <ArrowLeft className="w-4 h-4 text-[#071C12]" />
                        </button>

                        <button
                          type="button"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#142B20] text-[#F4FFF7] font-bold text-sm border border-[#00C853]/30 shadow-xs"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          <Compass className="w-4 h-4 text-[#39E66D]" />
                          <span>كيف تتعلم؟</span>
                        </button>
                      </div>
                    </div>

                    {/* Left Column: Illustration (col-span-5) */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-full max-w-sm">
                        <LowPolyAthletesGraphic />
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: Side-by-Side 1v1 Compare */}
        {selectedView === 'compare' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-[#F4FFF7] flex items-center gap-2">
                <Columns className="w-5 h-5 text-[#32D978]" />
                <span>مقارنة ثنائية مباشرة (1v1 Direct Comparison)</span>
              </h2>
              <p className="text-xs text-[#A3C2B0] mt-1">
                اختر خطين للمقارنة وجهاً لوجه وفحص الفروقات الدقيقة في الحروف والمسافات
              </p>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#08271B] p-5 rounded-3xl border border-[#143D27]">
              <div>
                <label className="block text-xs font-bold text-[#A3C2B0] mb-2">
                  الخط الأول (اليمين):
                </label>
                <select
                  value={activeCompareLeft}
                  onChange={(e) => setActiveCompareLeft(e.target.value)}
                  className="w-full bg-[#051710] border border-[#143D27] rounded-xl px-4 py-2.5 text-sm text-[#F4FFF7] font-bold focus:outline-hidden focus:border-[#32D978]"
                >
                  {FONT_OPTIONS.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nameAr} ({f.nameEn})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#A3C2B0] mb-2">
                  الخط الثاني (اليسار):
                </label>
                <select
                  value={activeCompareRight}
                  onChange={(e) => setActiveCompareRight(e.target.value)}
                  className="w-full bg-[#051710] border border-[#143D27] rounded-xl px-4 py-2.5 text-sm text-[#F4FFF7] font-bold focus:outline-hidden focus:border-[#32D978]"
                >
                  {FONT_OPTIONS.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.nameAr} ({f.nameEn})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Side-by-Side Cards */}
            {(() => {
              const fontL = FONT_OPTIONS.find((f) => f.id === activeCompareLeft) || FONT_OPTIONS[0];
              const fontR = FONT_OPTIONS.find((f) => f.id === activeCompareRight) || FONT_OPTIONS[2];

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[fontL, fontR].map((font, i) => (
                    <div
                      key={font.id + i}
                      className="bg-[#08271B] border-2 border-[#143D27] rounded-3xl p-8 shadow-2xl space-y-6"
                    >
                      <div className="border-b border-[#143D27] pb-3 flex items-center justify-between">
                        <span className="text-xl font-black text-[#32D978]">
                          {font.nameAr} ({font.nameEn})
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#051710] text-[#A3C2B0]">
                          {font.category}
                        </span>
                      </div>

                      <div
                        className="text-3xl sm:text-5xl tracking-tight leading-tight text-right"
                        style={{
                          fontFamily: font.fontFamily,
                          fontWeight: font.weights.includes(selectedWeight)
                            ? selectedWeight
                            : font.defaultWeight,
                        }}
                      >
                        <span className="block text-[#32D978]">{headlineLine1}</span>
                        <span className="block text-[#FFFFFF] mt-1.5">{headlineLine2}</span>
                      </div>

                      <p
                        className="text-sm text-[#D4E9DC]/90 leading-relaxed text-right"
                        style={{ fontFamily: font.fontFamily }}
                      >
                        {supportingDescription}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          className="px-5 py-2.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          استكشف المواد
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2.5 rounded-xl bg-[#142B20] text-white font-bold text-xs border border-[#00C853]/30"
                          style={{ fontFamily: font.fontFamily }}
                        >
                          كيف تتعلم؟
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#051710] border border-[#143D27] text-xs space-y-1.5 text-[#A3C2B0]">
                        <div><strong className="text-white">السمة:</strong> {font.characteristics}</div>
                        <div><strong className="text-white">الانطباع:</strong> {font.tone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        {/* Quick Comparison Summary Table (جدول ملخص مقارنة الخطوط) */}
        <div className="bg-[#08271B] border border-[#143D27] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-[#32D978]" />
            <h2 className="text-lg font-black text-[#F4FFF7]">
              جدول التحليل الفني الشامل للخطوط الستة
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs text-[#D4E9DC]">
              <thead className="bg-[#051710] text-[#A3C2B0] font-black border-b border-[#143D27]">
                <tr>
                  <th className="p-3 rounded-tr-xl">#</th>
                  <th className="p-3">اسم الخط</th>
                  <th className="p-3">التصنيف البصري</th>
                  <th className="p-3">الأوزان المدعومة</th>
                  <th className="p-3">الطابع العام والملاءمة</th>
                  <th className="p-3 rounded-tl-xl">معاينة مباشرة للكلمة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#143D27]/60">
                {FONT_OPTIONS.map((f, i) => (
                  <tr key={f.id} className="hover:bg-[#0A2D20]/50 transition-colors">
                    <td className="p-3 font-mono font-bold text-[#32D978]">{i + 1}</td>
                    <td className="p-3 font-bold text-white">
                      <div>{f.nameAr}</div>
                      <div className="text-[10px] text-[#A3C2B0]">{f.nameEn}</div>
                    </td>
                    <td className="p-3 text-[#A3C2B0]">{f.category}</td>
                    <td className="p-3 font-mono text-[11px]">{f.weights.join(', ')}</td>
                    <td className="p-3 text-[#D4E9DC]">{f.tone}</td>
                    <td className="p-3">
                      <span
                        className="text-base font-bold text-[#32D978]"
                        style={{ fontFamily: f.fontFamily }}
                      >
                        علوم الرياضة
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TypographyPreviewPage;
