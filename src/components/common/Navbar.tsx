import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, BookOpen, GraduationCap, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/courses', label: 'المقررات الدراسية (7)' },
    { path: '/about', label: 'عن المنصة والأهداف' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex items-center justify-center text-emerald-400 shadow-md group-hover:scale-105 group-hover:text-emerald-300 transition-all duration-200 border border-slate-700/60">
              <Activity className="w-6 h-6 stroke-[2.5] group-hover:rotate-6 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  منصة علوم الرياضة
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  تفاعلية
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500 tracking-wide font-sans">
                PE Interactive Learning Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="شريط التنقل الرئيسي">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    active
                      ? 'bg-emerald-50 text-emerald-800 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Academic Badge & Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100/80 px-3.5 py-1.5 rounded-full border border-slate-200/70">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>كلية علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-black shadow-sm shadow-emerald-600/30 transition-all duration-200 hover:shadow-md hover:shadow-emerald-600/40 active:scale-98"
            >
              <BookOpen className="w-4 h-4" />
              <span>المقررات الدراسية</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={isOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    active
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-3 rounded-xl">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>منصة تعليمية مفتوحة المصدر - لطلاب علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-emerald-600 text-white font-black text-sm shadow-sm hover:bg-emerald-700 active:scale-98 transition-all"
            >
              استعراض المقررات السبعة
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
