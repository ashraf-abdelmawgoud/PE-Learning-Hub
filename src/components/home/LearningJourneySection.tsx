import React from 'react';
import { Eye, Activity, HelpCircle, TrendingUp, AlertCircle, ArrowLeft } from 'lucide-react';

export const LearningJourneySection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'شرح بصري تفاعلي',
      concept: 'الفهم المفهومي',
      description:
        'تفكيك المفاهيم الأكاديمية المعقدة (التشريح، وظائف الأعضاء، النظريات الرياضية) إلى شروحات بصرية ورسوم بيانية قابلة للتفاعل والاستكشاف.',
      icon: Eye,
      color: 'from-emerald-500 to-teal-600',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      number: '02',
      title: 'نشاط تطبيقي ومحاكاة',
      concept: 'التطبيق والتحليل',
      description:
        'مختبر افتراضي للمحاكاة الحركية والفيزيولوجية يتيح التحكم في زوايا المفاصل، مقاومات القوة، ومعدلات النبض لمعاينة الأثر الحركي فورياً.',
      icon: Activity,
      color: 'from-teal-500 to-cyan-600',
      tagColor: 'bg-teal-50 text-teal-800 border-teal-200',
    },
    {
      number: '03',
      title: 'تقييم واختبار ذاتي',
      concept: 'القياس والتثبيت',
      description:
        'بنوك أسئلة ذكية تشمل تسلسل مراحل الحركة، مطابقة العضلات، وتحليل المواقف الرياضية لتقديم تصحيح فوري وتوضيح الإجابات الصحيحة.',
      icon: HelpCircle,
      color: 'from-cyan-500 to-blue-600',
      tagColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    },
    {
      number: '04',
      title: 'متابعة التقدم والإتقان',
      concept: 'التقييم المستمر',
      description:
        'مؤشرات واضحة لمدى إتقان الطالب لكل وحدة دراسية ومفردة علمية، لضمان الجاهزية الكاملة للاختبارات الأكاديمية والتطبيق العملي.',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200',
    },
  ];

  return (
    <section id="learning-journey" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
            مسار الطالب الأكاديمي
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            رحلة التعلم التفاعلية في علوم الرياضة
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            صُمم نموذج التعلم لنقل الطالب من التلقين السلبي إلى الاستيعاب التفاعلي والتحليلي
            من خلال أربع محطات متكاملة.
          </p>
        </div>

        {/* Honest Transparency Notice */}
        <div className="mb-12 max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold block">
              توضيح شفافية مراحل التطوير:
            </span>
            <p className="text-amber-800">
              هذه المحطات الأربع تمثل الإطار المعماري المعتمد لرحلة التعلم على المنصة.
              أدوات الشروحات المتقدمة والمحاكاة والاختبارات لم تُفعّل بعد، وسيتم إطلاقها تدريجياً
              مع إدراج محتوى الكتب الأكاديمية الرسمية في المراحل اللاحقة.
            </p>
          </div>
        </div>

        {/* Steps Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Top Bar: Number & Concept */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-black text-slate-400 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs group-hover:text-emerald-700 transition-colors">
                      خطوة {step.number}
                    </span>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${step.tagColor}`}>
                      {step.concept}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer status indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="text-[11px]">مخطط للمراحل القادمة</span>
                  {idx < steps.length - 1 && (
                    <ArrowLeft className="w-4 h-4 text-slate-300 hidden lg:block group-hover:text-emerald-500 group-hover:translate-x-[-2px] transition-all" />
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
