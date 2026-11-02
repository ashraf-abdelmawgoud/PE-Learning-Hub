import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, GraduationCap, ShieldCheck, Zap, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071C12] text-[#D4E9DC] border-t border-[#103D27] mt-16 sm:mt-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#103D27] to-[#00C853] flex items-center justify-center text-[#071C12] shadow-md shadow-[#00C853]/20">
                <Activity className="w-5 h-5 stroke-[2.7]" />
              </div>
              <div>
                <span className="text-xl font-black text-[#F4FFF7] tracking-tight">
                  منصة علوم الرياضة التفاعلية
                </span>
                <p className="text-xs text-[#39E66D] font-bold">
                  PE Interactive Learning Hub — Sport Energy
                </p>
              </div>
            </div>

            <p className="text-sm text-[#D4E9DC]/80 leading-relaxed max-w-md">
              منصة تعليمية أكاديمية مصممة خصيصاً لطلاب كلية علوم الرياضة والتربية البدنية،
              تعتمد أسلوب الفهم الحركي والتفاعلي كبديل حديث للقراءة الورقية وملفات PDF الجامدة،
              ومهيأة لاستيعاب المقررات الأكاديمية السبعة.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#142B20] text-[#39E66D] border border-[#103D27] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00C853]" />
                مفتوح ومجاني 100%
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#142B20] text-[#D4E9DC] border border-[#103D27] font-bold">
                <Zap className="w-3.5 h-3.5 text-[#39E66D]" />
                جاهز لـ Cloudflare Pages
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F4FFF7]">
              روابط المنصة
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  المقررات الدراسية (7)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  عن المنصة والأهداف
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F4FFF7]">
              الجانب الأكاديمي
            </h4>
            <div className="space-y-2.5 text-sm text-[#D4E9DC]">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
                <span className="font-bold text-[#F4FFF7]">موجّه لطلاب كلية علوم الرياضة</span>
              </div>
              <p className="text-xs leading-relaxed text-[#D4E9DC]/75 bg-[#142B20] p-3.5 rounded-xl border border-[#103D27]">
                تنبيه: محتوى المقررات والكتب السبعة قيد التجهيز الأكاديمي، وتتوفر تجارب تفاعلية حية معتمدة تدريجياً.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#103D27] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C8577]">
          <p>
            جميع الحقوق محفوظة &copy; {currentYear} - منصة PE Interactive Learning Hub
          </p>
          <div className="flex items-center gap-2 font-medium text-[#D4E9DC]/80">
            <span>صُممت لخدمة التعليم الرياضي والتطبيقي</span>
            <Heart className="w-3.5 h-3.5 text-[#00C853] fill-[#00C853]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
