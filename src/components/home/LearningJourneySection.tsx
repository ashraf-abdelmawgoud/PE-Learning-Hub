import React from 'react';
import { Eye, Activity, HelpCircle, TrendingUp, AlertCircle, ArrowLeft } from 'lucide-react';

export const LearningJourneySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'شرح بصري تفاعلي',
      concept: 'الفهم المفهومي',
      description:
        'تفكيك المفاهيم الرياضية المعقدة والتشريح إلى نماذج مرئية متحركة ورسوم بيانية تستكشفها خطوة بخطوة بدلاً من القراءة التقليدية الصامتة.',
      icon: Eye,
      gradient: 'from-[#2563EB] to-blue-700',
      tagColor: 'bg-blue-50 text-[#2563EB] border-blue-200/70',
    },
    {
      number: '02',
      title: 'نشاط تطبيقي ومحاكاة',
      concept: 'التطبيق والتحليل',
      description:
        'مختبر افتراضي تفاعلي يتيح لك تعديل زوايا المفاصل، وأحمال الجهد، ومعدلات النبض لمعاينة الأثر الحركي والبيوميكانيكي فورياً.',
      icon: Activity,
      gradient: 'from-[#06B6D4] to-cyan-700',
      tagColor: 'bg-cyan-50 text-[#0891B2] border-cyan-200/70',
    },
    {
      number: '03',
      title: 'اختبار تقييمي فوري',
      concept: 'القياس والتثبيت',
      description:
        'بنوك أسئلة ذكية تشمل تسلسل مراحل الحركة، ومطابقة العضلات والمفاهيم الرياضية، مع تصحيح فوري وتغذية راجعة علمية تدعم فهمك.',
      icon: HelpCircle,
      gradient: 'from-[#14B8A6] to-teal-700',
      tagColor: 'bg-teal-50 text-[#0D9488] border-teal-200/70',
    },
    {
      number: '04',
      title: 'متابعة التقدم والإتقان',
      concept: 'التقييم المستمر',
      description:
        'مؤشرات رقمية واضحة تبيّن مدى إتقانك لكل وحدة دراسية ومفردة علمية لضمان الجاهزية الكاملة للاختبارات الأكاديمية والتطبيق العملي.',
      icon: TrendingUp,
      gradient: 'from-blue-600 to-indigo-700',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/70',
    },
  ];

  return (
    <section id="learning-journey" className="py-16 sm:py-24 bg-[#F4FAFF] border-b border-[#D9EAF7] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-cyan-50 text-[#0891B2] border border-cyan-200/70 uppercase tracking-wider">
            مسار الطالب الأكاديمي
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#172B4D] tracking-tight">
            رحلة التعلم التفاعلية في علوم الرياضة
          </h2>

          <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
            صُمم نموذج التعلم لنقل الطالب من التلقين السلبي إلى الاستيعاب التفاعلي والتحليلي
            من خلال أربع محطات متكاملة ومترابطة.
          </p>
        </div>

        {/* Honest Transparency Notice */}
        <div className="mb-12 max-w-4xl mx-auto bg-amber-50/90 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold block">
              توضيح منهجية مراحل التطوير:
            </span>
            <p className="text-amber-800">
              تمثل هذه المحطات الأربع الإطار البصري والمعماري المعتمد لرحلة التعلم على المنصة (بنية جاهزة).
              سيتم إطلاق وتفعيل الأدوات التفاعلية لكل خطوة تباعاً فور تزويد المنصة بمحتوى الكتب الأكاديمية الرسمية في المراحل القادمة.
            </p>
          </div>
        </div>

        {/* Steps Grid with Visual Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white hover:bg-[#F8FCFF] rounded-3xl p-6 sm:p-7 border border-[#D9EAF7] hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-black text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/50 shadow-2xs">
                      محطة {step.number}
                    </span>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${step.tagColor}`}>
                      {step.concept}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-md shadow-blue-900/10 mb-5 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#172B4D] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer status indicator */}
                <div className="mt-6 pt-4 border-t border-[#D9EAF7]/80 flex items-center justify-between text-xs font-semibold text-[#64748B]">
                  <span className="text-[11px] text-[#2563EB] font-bold">بنية جاهزة للمحتوى</span>
                  {idx < steps.length - 1 && (
                    <ArrowLeft className="w-4 h-4 text-[#06B6D4] hidden lg:block group-hover:translate-x-[-3px] transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
