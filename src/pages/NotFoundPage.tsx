import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center py-16 px-4 bg-[#F4FAFF]">
      <div className="text-center max-w-md mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#D9EAF7] shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto border border-blue-200/60 shadow-2xs">
          <Activity className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-6xl font-black text-[#2563EB] font-mono">404</span>
          <h1 className="text-2xl font-black text-[#172B4D]">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm text-[#64748B] leading-relaxed">
            عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو استعراض المقررات.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#2563EB] text-white font-black text-sm shadow-sm hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>الصفحة الرئيسية</span>
          </Link>
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-[#D9EAF7] text-[#172B4D] font-bold text-sm hover:bg-blue-50/50 transition-colors"
          >
            <span>المقررات الدراسية</span>
            <ArrowLeft className="w-4 h-4 text-[#2563EB]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
