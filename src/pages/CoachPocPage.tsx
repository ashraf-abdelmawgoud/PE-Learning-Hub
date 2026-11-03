import React from 'react';
import { CoachRigPoc } from '../components/academic/visual/poc/CoachRigPoc';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen } from 'lucide-react';

export const CoachPocPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#00C853] mb-6 font-semibold">
        <Link to="/" className="hover:underline">الرئيسية</Link>
        <span>/</span>
        <Link to="/curriculum-animation" className="hover:underline">رحلة المنهج</Link>
        <span>/</span>
        <span className="text-gray-500">معاينة شخصية المعلم (PoC)</span>
      </div>

      {/* Intro Header */}
      <div className="mb-8 bg-white p-6 rounded-2xl border border-[#00C853]/20 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00C853] mb-2">
          <Sparkles className="w-4 h-4" />
          <span>المرحلة 4.1 — الفلسفة المعتمدة: Stylized Static Scene with Gentle Motion</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-[#071C12] mb-3">
          معاينة وتدقيق حركة المعلم الهادئة (Gentle Motion Coach)
        </h1>
        <p className="text-sm text-[#486555] leading-relaxed max-w-3xl">
          تم تحديث الحركة وتثبيت المفاصل وفق الفلسفة الجديدة: التركيز على جمال الرسم الأصلي وراحة العين وخدمة الشرح الأكاديمي، مع تقليل الحركة إلى الحد الأدنى (تنفس هادئ للجسم، ميل بسيط جداً للرأس، وتثبيت مفصل الكتف بنسبة 100% لمنع أي تشوه بصري).
        </p>
      </div>

      {/* The Rig Component */}
      <CoachRigPoc className="mb-10" />

      {/* Comparative Evidence & Verification */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-[#071C12] mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#00C853]" />
          <span>المقارنة والتدقيق الفني للحالة الابتدائية وحالة الترحيب</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 text-center">
            <h4 className="text-sm font-bold text-[#071C12] mb-2">الحالة الابتدائية (Neutral State - 0°)</h4>
            <img
              src="/assets/poc/coach/coach_body_full.webp"
              alt="Coach Body Base"
              className="w-full max-w-[260px] mx-auto rounded-lg shadow-sm border border-gray-300 mb-2"
            />
            <p className="text-xs text-gray-600">
              طبقة الجذع المفرغة مع إغلاق تجويف الكتف بقطعة قماش خضراء متطابقة وفتح ياقة القميص لاستقبال العنق.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 text-center">
            <h4 className="text-sm font-bold text-[#071C12] mb-2">الذراع المشيرة مع كبسولة المفصل المستديرة</h4>
            <img
              src="/assets/poc/coach/coach_arm_full.webp"
              alt="Coach Arm"
              className="w-full max-w-[260px] mx-auto rounded-lg shadow-sm border border-gray-300 mb-2"
            />
            <p className="text-xs text-gray-600">
              الذراع مفصولة مع كبسولة دائرية عند مفصل الكتف لمنع أي فجوات هندسية أثناء الحركة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
