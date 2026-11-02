import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, GraduationCap, ShieldCheck, Zap, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#334155] border-t border-[#D9EAF7] mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#14B8A6] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Activity className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-[#172B4D] tracking-tight">
                  منصة علوم الرياضة التفاعلية
                </span>
                <p className="text-xs text-[#2563EB] font-bold">
                  PE Interactive Learning Hub — Ocean Energy
                </p>
              </div>
            </div>

            <p className="text-sm text-[#334155] leading-relaxed max-w-md">
              منصة تعليمية أكاديمية مصممة خصيصاً لطلاب كلية علوم الرياضة والتربية البدنية،
              تعتمد أسلوب الفهم الحركي والتفاعلي كبديل حديث للقراءة الورقية وملفات PDF الجامدة،
              ومهيأة لاستيعاب المقررات الأكاديمية السبعة.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#F4FAFF] text-[#2563EB] border border-[#D9EAF7] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                مفتوح ومجاني 100%
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#F4FAFF] text-[#0891B2] border border-[#D9EAF7] font-bold">
                <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
                جاهز لـ Cloudflare Pages
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#172B4D]">
              روابط المنصة
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="text-[#334155] hover:text-[#2563EB] transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#334155] hover:text-[#2563EB] transition-colors">
                  المقررات الدراسية (7)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#334155] hover:text-[#2563EB] transition-colors">
                  عن المنصة والأهداف
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#172B4D]">
              الجانب الأكاديمي
            </h4>
            <div className="space-y-2.5 text-sm text-[#334155]">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="font-bold text-[#172B4D]">موجّه لطلاب كلية علوم الرياضة</span>
              </div>
              <p className="text-xs leading-relaxed text-[#64748B] bg-[#F8FCFF] p-3.5 rounded-xl border border-[#D9EAF7]">
                تنبيه: محتوى المقررات والكتب السبعة قيد التجهيز الأكاديمي، وسيتم طرحه تدريجياً فور اعتماده رسمياً.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D9EAF7] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            جميع الحقوق محفوظة &copy; {currentYear} - منصة PE Interactive Learning Hub
          </p>
          <div className="flex items-center gap-2 font-medium">
            <span>صُممت لخدمة التعليم الرياضي والتطبيقي</span>
            <Heart className="w-3.5 h-3.5 text-[#EF4444] fill-[#EF4444]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
