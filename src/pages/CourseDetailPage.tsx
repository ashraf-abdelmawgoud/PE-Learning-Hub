import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COURSES_PLACEHOLDER_DATA } from '../data/coursesData';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  HelpCircle,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const course = COURSES_PLACEHOLDER_DATA.find((c) => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى قائمة المقررات الدراسية</span>
          </Link>
        </div>

        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shadow-md">
                0{course.orderNumber}
              </span>
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  {course.code}
                </span>
                <span className="text-xs text-slate-400 mr-2">
                  معرّف النظام المعماري
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              <Clock className="w-4 h-4" />
              <span>{course.statusLabel}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
            {course.title}
          </h1>

          <div className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl mb-5">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>المرجع الأكاديمي المستقبلي: {course.targetBookReference}</span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {course.description}
          </p>
        </div>

        {/* Academic Content Hold Notice */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-amber-900">
            <p className="font-bold">
              تنبيه الالتزام بضوابط المشروع:
            </p>
            <p className="text-amber-800 leading-relaxed">
              وفقاً لتوجيهات المرحلة الأولى، لا يحتوي هذا المقرر على أي عناوين فصول أو نصوص وهمية.
              الأقسام أدناه توضح البنية المعمارية البرمجية التي تم تجهيزها بالكامل لتلقي محتوى الكتاب في المرحلة القادمة فور اعتماده.
            </p>
          </div>
        </div>

        {/* Structural Blueprint Grid (Readiness for Phase 2) */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              الهيكل المعماري البرمجي الجاهز للمقرر
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Section 1: Interactive Lessons */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                1. نظام الوحدات والدروس التفاعلية
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                مبني لاستيعاب الفصول ككتل محتوى تفاعلية (Structured DOM Blocks) مع شروحات بصرية ورسوم بيانية، بعيداً عن ملفات PDF الثابتة.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>الواجهات البرمجية (Types & Stores) جاهزة</span>
                </span>
              </div>
            </div>

            {/* Section 2: Simulations & Animations */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                2. مختبر المحاكاة والأنيميشن الحركي
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                معدّ لاستقبال محاكيات علوم الرياضة (الميكانيكا الحيوية، مسارات القوة، معدلات النبض، وفسيولوجيا الجهد البدني).
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-teal-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>معمارية المحاكاة (Canvas/SVG) مهيأة</span>
                </span>
              </div>
            </div>

            {/* Section 3: Smart Quizzes */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                3. بنك الاختبارات والتقييم الذاتي
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                مهيأ لتقديم أسئلة اختيار من متعدد، وتسلسل مراحل الحركة الرياضية، ومطابقة المفاهيم مع تصحيح فوري وتغذية راجعة.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-cyan-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>بنية نماذج الأسئلة والتقييم مكتملة</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Next Step Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-right">
            <h3 className="text-lg font-bold text-white">
              جاهزية الانتقال للمرحلة القادمة
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              بمجرد تزويد المنصة بالكتاب الأكاديمي الخاص بهذا المقرر، سيتم تحويل المحتوى إلى دروس ومحاكاة واختبارات وفق هذه البنية.
            </p>
          </div>
          <Link
            to="/courses"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors"
          >
            استعراض بقية المقررات (7)
          </Link>
        </div>

      </div>
    </div>
  );
};
