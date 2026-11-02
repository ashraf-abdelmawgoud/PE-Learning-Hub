import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, GraduationCap, ShieldCheck, Zap, Heart } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Activity className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  منصة علوم الرياضة التفاعلية
                </span>
                <p className="text-xs text-emerald-400 font-medium">
                  Physical Education Interactive Learning Hub
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              منصة أكاديمية تفاعلية مصممة خصيصاً لطلاب كلية علوم الرياضة والتربية البدنية.
              تهدف المنصة إلى تقديم بيئة تعليمية غنية تعتمد على المحاكاة البصرية والشروحات
              التفاعلية بدلاً من الملفات الجامدة، ومصممة للتكامل مع المقررات الأكاديمية السبعة.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                مفتوح المصدر ومجاني
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                سريع ومتوافق مع Cloudflare Pages
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              روابط المنصة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-emerald-400 transition-colors">
                  المقررات الدراسية (7)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  عن المنصة والأهداف
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              الجانب الأكاديمي
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>موجّه إلى: طلاب وباحثي كلية علوم الرياضة</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 bg-slate-800/60 p-3 rounded-lg border border-slate-800">
                تنبيه: محتوى المقررات والكتب السبعة قيد التجهيز الأكاديمي، وسيتم طرحه تدريجياً وفق خطة المنهج المعتمد.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            جميع الحقوق محفوظة &copy; {currentYear} - منصة PE Interactive Learning Hub
          </p>
          <div className="flex items-center gap-2">
            <span>صُممت لخدمة التعليم الرياضي والأكاديمي</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
