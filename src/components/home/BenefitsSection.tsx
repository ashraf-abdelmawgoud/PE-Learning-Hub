import React from 'react';
import { Target, Dumbbell, Award, Flame, CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'الربط المباشر بين النظرية والميدان',
      description:
        'تحويل المعادلات الفيزيائية وقوانين الحركة المعقدة إلى شروحات بصرية تفاعلية تنعكس على أدائك في الملعب والمضمار والصالة الرياضية.',
      highlight: 'تطبيق عملي فوري',
      gradient: 'from-[#103D27] to-[#00C853]',
      badgeColor: 'bg-[#E8F8EE] text-[#173D2B] border-[#D4E9DC]',
    },
    {
      icon: Dumbbell,
      title: 'تحليل دقيق لتشريح المهارات الحركية',
      description:
        'استيعاب دور المجموعات العضلية العاملة والمساعدة والمثبتة لكل مهارة بدلاً من الحفظ الصامت للجداول الورقية.',
      highlight: 'تشريح حركي واضح',
      gradient: 'from-[#071C12] to-[#103D27]',
      badgeColor: 'bg-[#E8F8EE] text-[#173D2B] border-[#D4E9DC]',
    },
    {
      icon: Flame,
      title: 'تبسيط فسيولوجيا الجهد والنبض',
      description:
        'تتبع استجابات القلب، ومناطق التدريب الهوائي واللاهوائي، وتراكم اللاكتات بنماذج بصرية ديناميكية ممتعة ومريحة للعين.',
      highlight: 'أنظمة الطاقة والجهد',
      gradient: 'from-[#103D27] to-[#059669]',
      badgeColor: 'bg-[#E8F8EE] text-[#173D2B] border-[#D4E9DC]',
    },
    {
      icon: Award,
      title: 'تعزيز التفوق في الامتحانات والتدريب',
      description:
        'بناء قاعدة معرفية راسخة تسهم في تحسين تحصيلك الأكاديمي وتأهيلك العملي كمدرب أو معلم تربية بدنية محترف.',
      highlight: 'جاهزية أكاديمية وتطبيقية',
      gradient: 'from-[#059669] to-[#00C853]',
      badgeColor: 'bg-[#E8F8EE] text-[#173D2B] border-[#D4E9DC]',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#D4E9DC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            أثر المنصة على مسيرتك الأكاديمية
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#173D2B] tracking-tight">
            كيف تساند هذه المنصة طالب علوم الرياضة؟
          </h2>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
            التعليم الرياضي يحتاج إلى رؤية ديناميكية للحركة والجهد البدني؛ هذه المنصة صُممت لتضع
            الأدوات التفاعلية في متناول يدك لدراسة أعمق وأبسط.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4FFF7] rounded-3xl p-6 sm:p-8 border border-[#D4E9DC] hover:border-[#00C853] hover:shadow-xl hover:shadow-[#00C853]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md shadow-[#00C853]/15 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#173D2B] mb-3 group-hover:text-[#00A844] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#486555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4E9DC] flex items-center gap-2 text-xs font-bold text-[#173D2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>ميزة تعليمية تفاعلية موجهة لطلاب الكلية</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
