/**
 * HowItWorksSection.tsx
 * Learning Experience Section for PE Interactive Learning Hub Homepage
 *
 * Details the real 4-step student learning journey:
 * 1. اختر مقررك.
 * 2. شاهد شرح الموضوع.
 * 3. اقرأ المحتوى الأكاديمي المبسط.
 * 4. اختبر فهمك.
 */

import React from 'react';
import {
  BookOpen,
  Video,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Compass,
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '٠١',
      title: 'اختر مقررك',
      badge: 'الخطوة الأولى',
      description:
        'تصفح المواد الدراسية الست المعتمدة لكلية علوم الرياضة، وحدد المادة الأكاديمية التي ترغب في دراستها أو مراجعتها.',
      icon: BookOpen,
      iconGradient: 'from-[#103D27] to-[#00C853]',
      detailText: 'تصفح فوري ومباشر دون حواجز تسجيل',
    },
    {
      number: '٠٢',
      title: 'شاهد شرح الموضوع',
      badge: 'الخطوة الثانية',
      description:
        'استوعب المفاهيم والأفكار الأساسية من خلال الشروحات المرئية والأنيميشن التفاعلي الذي يوضح حركة اللاعب والموقف التدريبي.',
      icon: Video,
      iconGradient: 'from-[#059669] to-[#39E66D]',
      detailText: 'فهم بصري حركي يرسخ الفكرة بسرعة',
    },
    {
      number: '٠٣',
      title: 'اقرأ المحتوى الأكاديمي المبسط',
      badge: 'الخطوة الثالثة',
      description:
        'تعمق في الشرح النظري المنظم والمقسم إلى كتل معرفية واضحة وموثقة بنصوص المرجع الأصلي، مع أمثلة واقعية من حصة وملاعب التربية الرياضية.',
      icon: FileText,
      iconGradient: 'from-[#0A291A] to-[#103D27]',
      detailText: 'توثيق أكاديمي صارم بالصفحات والمراجع',
    },
    {
      number: '٠٤',
      title: 'اختبر فهمك',
      badge: 'الخطوة الرابعة',
      description:
        'ثبّت معلوماتك وقِس استيعابك عبر الأنشطة التفاعلية، ومواقف اتخاذ القرار الميدانية، والأسئلة التقويمية ذات التغذية الراجعة الفورية.',
      icon: CheckCircle2,
      iconGradient: 'from-[#00A844] to-[#00C853]',
      detailText: 'تقويم ذاتي فوري مع تفسير علمي',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#F4FFF7] border-b border-[#D4E9DC] scroll-mt-20 transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <Compass className="w-3.5 h-3.5 text-[#00C853]" />
            <span>تجربة التعلم والمراجعة (Learning Journey)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#173D2B] tracking-tight">
            كيف تتعلم وتراجع مقرراتك معنا؟
          </h2>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
            صُممت تجربة التعلم على المنصة لتمنحك مساراً سلساً ومترابطاً من أربع خطوات عملية،
            تنقلك من استكشاف المقرر إلى الاستيعاب التفاعلي والتطبيق الميداني والتقويم.
          </p>
        </div>

        {/* Steps Grid with Visual Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-[#D4E9DC] hover:border-[#00C853] hover:shadow-xl hover:shadow-[#00C853]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-black text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC] shadow-2xs">
                      خطوة {step.number}
                    </span>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F4FFF7] text-[#059669] border border-[#D4E9DC]">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.iconGradient} text-white flex items-center justify-center shadow-md shadow-[#00C853]/15 mb-5 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-[#173D2B] mb-2.5 group-hover:text-[#00A844] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#486555] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Footer Detail Notice */}
                <div className="pt-4 border-t border-[#D4E9DC] flex items-center justify-between text-xs font-semibold text-[#173D2B]">
                  <span className="text-[11px] font-bold text-[#059669] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                    <span>{step.detailText}</span>
                  </span>

                  {idx < steps.length - 1 && (
                    <ArrowLeft className="w-4 h-4 text-[#00C853] hidden lg:block group-hover:translate-x-[-4px] transition-transform" />
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
