import React from 'react';
import { Target, Dumbbell, Award, Flame, CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'الربط المباشر بين النظرية والميدان',
      description:
        'تحويل المعادلات الفيزيائية وقوانين الحركة المعقدة إلى تجارب بصرية يراها الطالب تنعكس في الأداء داخل الملعب والمضمار والمسبح.',
      highlight: 'تطبيق عملي فوري',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      icon: Dumbbell,
      title: 'تحليل دقيق لتشريح المهارات الحركية',
      description:
        'استيعاب دور المجموعات العضلية العاملة والمساعدة والمثبتة لكل حركة رياضية بدلاً من حفظ الجداول الصامتة.',
      highlight: 'تشريح حركي تفاعلي',
      color: 'from-teal-600 to-cyan-700',
    },
    {
      icon: Flame,
      title: 'تبسيط فسيولوجيا الجهد البدني والنبض',
      description:
        'تتبع أنظمة إنتاج الطاقة (الهوائية واللاهوائية)، ومعدلات نبض القلب، وتراكم حامض اللاكتيك بمحاكاة واضحة ومبسطة.',
      highlight: 'أنظمة الطاقة والجهد',
      color: 'from-cyan-600 to-blue-700',
    },
    {
      icon: Award,
      title: 'تعزيز التفوق في الامتحانات والتطبيق الميداني',
      description:
        'بناء قاعدة علمية راسخة لطلاب الكلية تسهم في رفع درجاتهم في المقررات وتأهيلهم كمدربين ومعلمين أكفاء.',
      highlight: 'جاهزية أكاديمية وتدريبية',
      color: 'from-blue-600 to-indigo-700',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            أثر المنصة على مسيرتك الأكاديمية
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            كيف تساند هذه المنصة طالب علوم الرياضة؟
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ميزة تعليمية موجهة لطلاب كلية علوم الرياضة</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
