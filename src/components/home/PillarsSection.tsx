import React from 'react';
import { Activity, Cpu, HelpCircle, Smartphone, Zap, Eye } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: Activity,
      title: 'محاكاة حركية وفيزيولوجية',
      description:
        'بنية معمارية معدّة لدعم المحاكاة التفاعلية (Biomechanics & Physiology)، مثل زوايا المفاصل، ومسارات الحركة، وأنظمة إنتاج الطاقة، والنبض الرياضي.',
      badge: 'جاهز بالبنية البرمجية',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: Eye,
      title: 'شروحات بصرية تفاعلية',
      description:
        'تجاوز أسلوب القراءة الكلاسيكي وملفات PDF؛ يعتمد المحتوى المستقبلي على وحدات DOM تفاعلية ورسوم توضيحية رقمية قابلة للتحكم والاستكشاف.',
      badge: 'بدون ملفات PDF',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50 text-teal-700',
    },
    {
      icon: HelpCircle,
      title: 'اختبارات تقييمية فورية',
      description:
        'نظام تقييم ذكي لكل مقرر، يتيح أسئلة الاختيار من متعدد، تحليل التسلسل الحركي، ومطابقة العضلات والمفاهيم الرياضية مع تفسير فوري للنتائج.',
      badge: 'أنماط أسئلة متعددة',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50 text-cyan-700',
    },
    {
      icon: Smartphone,
      title: 'مرونة تامة وتوافق شامل',
      description:
        'واجهة عربية أصيلة بدعم كامل للـ RTL، متجاوبة بسلاسة تامة مع مختلف الشاشات؛ سواء الهواتف الذكية أو الأجهزة اللوحية أو الحواسيب المكتبية.',
      badge: 'Responsive & Mobile First',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Zap,
      title: 'سرعة فائقة وخفة في التحميل',
      description:
        'مبني باستخدام أحدث حزم Vite و React 19، ليقدم تجربة تصفح فورية بدون تأخير، ومهيأ بالكامل للنشر السحابي المستقر عبر Cloudflare Pages.',
      badge: 'Cloudflare Pages Ready',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 text-amber-700',
    },
    {
      icon: Cpu,
      title: 'هيكل منظم للمقررات السبعة',
      description:
        'تصميم برمجي معياري نظيف يقسم المنصة إلى 7 مقررات أكاديمية مستقلة، بما يضمن سهولة إدراج مفردات كل كتاب أكاديمي فور اعتماده.',
      badge: '7 مقررات محددة الهيكل',
      color: 'from-slate-700 to-slate-900',
      bgColor: 'bg-slate-100 text-slate-800',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            ركائز المنصة التفاعلية
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            لماذا صُممت هذه المنصة لطلاب علوم الرياضة؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            تتطلب علوم التربية البدنية والرياضة فهماً حركياً وفيزيولوجياً ديناميكياً لا توفره الصفحات الورقية الجامدة.
            تم بناء هذه المنصة لربط النظرية بالتطبيق التفاعلي الرقمي.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 sm:p-7 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pillar.bgColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
