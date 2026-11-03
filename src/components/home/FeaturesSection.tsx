/**
 * FeaturesSection.tsx
 * Platform Features Section for PE Interactive Learning Hub Homepage
 *
 * Highlights the platform's actual academic value:
 * 1. شرح أكاديمي منظم.
 * 2. فيديوهات تعليمية.
 * 3. أمثلة تطبيقية من التربية الرياضية.
 * 4. أنشطة واختبارات تفاعلية.
 */

import React from 'react';
import {
  Layers,
  Video,
  CheckCircle2,
  Sparkles,
  Dumbbell,
  Target,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: 'شرح أكاديمي منظم',
      highlightBadge: 'تنظيم بيداغوجي دقيق',
      description:
        'تفكيك موضوعات المقررات إلى كتل معرفية واضحة ومحددة، تسهل الاستيعاب والمراجعة المركزة بعيداً عن تشتت الملازم والملفات العشوائية.',
      practicalBenefit: 'محتوى مهيكل ومرتب يسهل استرجاعه وقت الامتحانات.',
      iconGradient: 'from-[#071C12] to-[#103D27]',
    },
    {
      icon: Video,
      title: 'فيديوهات وشروحات مرئية',
      highlightBadge: 'فهم حركي وبصري',
      description:
        'شروحات بصرية تفاعلية ورسوم متحركة تبسط المفاهيم الحركية والتكتيكية، وتجعل استيعاب المسارات التدريبية سريعاً وراسخاً في الذهن.',
      practicalBenefit: 'تحويل المفاهيم الصامتة إلى نماذج حركية مرئية وممتعة.',
      iconGradient: 'from-[#103D27] to-[#00C853]',
    },
    {
      icon: Dumbbell,
      title: 'أمثلة تطبيقية من التربية الرياضية',
      highlightBadge: 'ربط النظرية بالميدان',
      description:
        'ربط كل مفهوم نظري بمواقف تدريس وتدريب حقيقية من حصة التربية الرياضية والملاعب المدرسية، لإعدادك كمعلم ومدرب محترف.',
      practicalBenefit: 'أمثلة واقعية تنعكس مباشرة على أدائك العملي في الملعب.',
      iconGradient: 'from-[#00A844] to-[#39E66D]',
    },
    {
      icon: CheckCircle2,
      title: 'أنشطة واختبارات تفاعلية',
      highlightBadge: 'تقويم ذاتي فوري',
      description:
        'تدريبات ترتيب خطوات المهارات وسيناريوهات اتخاذ القرار المهني، مع تصحيح وتبرير علمي فوري يدعم فهمك ويثبت معلوماتك.',
      practicalBenefit: 'تغذية راجعة علمية توضح لماذا هذا البديل هو الأنسب تربوياً.',
      iconGradient: 'from-[#0A291A] to-[#059669]',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#D4E9DC] transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
            <span>مميزات المنصة الأكاديمية (Core Value)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#173D2B] tracking-tight">
            ما الذي تقدمه المنصة لطلاب علوم الرياضة؟
          </h2>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
            صُممت كل ميزة على المنصة لتخدم احتياجاً أكاديمياً وتطبيقياً حقيقياً لطلاب الكلية،
            لتجمع لك بين دقة الكتاب الجامعي، وسهولة العرض المرئي، والتطبيق الميداني.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4FFF7] rounded-3xl p-6 sm:p-8 border border-[#D4E9DC] hover:border-[#00C853] hover:shadow-xl hover:shadow-[#00C853]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.iconGradient} text-white flex items-center justify-center shadow-md shadow-[#00C853]/15 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#059669] border border-[#D4E9DC] shadow-2xs">
                      {feat.highlightBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-[#173D2B] mb-3 group-hover:text-[#00A844] transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#486555] leading-relaxed mb-4">
                    {feat.description}
                  </p>
                </div>

                {/* Practical Benefit Footer */}
                <div className="mt-4 pt-4 border-t border-[#D4E9DC] flex items-start gap-2 text-xs font-bold text-[#173D2B]">
                  <Target className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                  <span className="text-[#059669] leading-relaxed">{feat.practicalBenefit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
