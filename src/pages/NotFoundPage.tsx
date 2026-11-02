import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center py-16 px-4 bg-[#F4FFF7] transition-colors">
      <div className="text-center max-w-md mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#D4E9DC] shadow-xs">
        <div className="w-16 h-16 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC] shadow-2xs">
          <Activity className="w-8 h-8 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <span className="text-6xl font-black text-[#173D2B] font-mono">404</span>
          <h1 className="text-2xl font-black text-[#173D2B]">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-[#486555] leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو استعراض المقررات.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm shadow-sm transition-colors"
          >
            <Home className="w-4 h-4 text-[#071C12]" />
            <span>الصفحة الرئيسية</span>
          </Link>
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-[#D4E9DC] text-[#173D2B] font-bold text-sm hover:bg-[#E8F8EE] transition-colors"
          >
            <span>المقررات الدراسية</span>
            <ArrowLeft className="w-4 h-4 text-[#00C853]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
