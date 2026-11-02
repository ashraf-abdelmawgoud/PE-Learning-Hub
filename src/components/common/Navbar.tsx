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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D9EAF7] shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-2xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#06B6D4] to-[#14B8A6] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:shadow-blue-500/30 transition-all duration-200">
              <Activity className="w-6 h-6 stroke-[2.5] group-hover:rotate-6 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#172B4D] group-hover:text-[#2563EB] transition-colors">
                  منصة علوم الرياضة
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/70">
                  تفاعلية
                </span>
              </div>
              <span className="text-xs font-semibold text-[#64748B] tracking-wide font-sans">
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
                      ? 'bg-blue-50 text-[#2563EB] shadow-2xs border border-blue-200/60 font-black'
                      : 'text-[#334155] hover:text-[#2563EB] hover:bg-blue-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Academic Badge & Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#172B4D] bg-[#F4FAFF] px-3.5 py-1.5 rounded-full border border-[#D9EAF7]">
              <GraduationCap className="w-4 h-4 text-[#2563EB]" />
              <span>كلية علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-black shadow-sm shadow-blue-600/25 transition-all duration-200 hover:shadow-md hover:shadow-blue-600/35 active:scale-98"
            >
              <BookOpen className="w-4 h-4" />
              <span>المقررات الدراسية (7)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-[#172B4D] hover:text-[#2563EB] hover:bg-blue-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] border border-[#D9EAF7]"
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
          className="md:hidden border-b border-[#D9EAF7] bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg"
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
                      ? 'bg-blue-50 text-[#2563EB] border border-blue-200/60 font-black'
                      : 'text-[#334155] hover:bg-blue-50/50 hover:text-[#2563EB]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D9EAF7] flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] bg-[#F4FAFF] p-3 rounded-xl border border-[#D9EAF7]">
              <Sparkles className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>منصة تعليمية مفتوحة المصدر - لطلاب علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-[#2563EB] text-white font-black text-sm shadow-sm hover:bg-blue-700 active:scale-98 transition-all"
            >
              استعراض المقررات السبعة
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
