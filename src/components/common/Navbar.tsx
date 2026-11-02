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
    <header className="sticky top-0 z-50 bg-[#071C12]/95 backdrop-blur-md border-b border-[#103D27] shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00C853] rounded-2xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#103D27] to-[#00C853] flex items-center justify-center text-[#071C12] shadow-md shadow-[#00C853]/25 group-hover:scale-105 group-hover:shadow-[#39E66D]/35 transition-all duration-200">
              <Activity className="w-6 h-6 stroke-[2.7] group-hover:rotate-6 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#F4FFF7] group-hover:text-[#39E66D] transition-colors">
                  منصة علوم الرياضة
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#142B20] text-[#39E66D] border border-[#00C853]/30">
                  SPORT ENERGY
                </span>
              </div>
              <span className="text-xs font-semibold text-[#6C8577] tracking-wide font-sans">
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
                      ? 'bg-[#142B20] text-[#39E66D] shadow-xs border border-[#00C853]/40 font-black'
                      : 'text-[#D4E9DC] hover:text-[#39E66D] hover:bg-[#103D27]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Academic Badge & Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F4FFF7] bg-[#103D27] px-3.5 py-1.5 rounded-full border border-[#142B20]">
              <GraduationCap className="w-4 h-4 text-[#00C853]" />
              <span>كلية علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] text-sm font-black shadow-sm shadow-[#00C853]/25 transition-all duration-200 hover:shadow-md hover:shadow-[#39E66D]/35 active:scale-98"
            >
              <BookOpen className="w-4 h-4 text-[#071C12]" />
              <span>المقررات الدراسية (7)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-[#F4FFF7] hover:text-[#39E66D] hover:bg-[#103D27] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00C853] border border-[#103D27]"
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
          className="md:hidden border-b border-[#103D27] bg-[#071C12]/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl"
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
                      ? 'bg-[#142B20] text-[#39E66D] border border-[#00C853]/40 font-black'
                      : 'text-[#D4E9DC] hover:bg-[#103D27]/60 hover:text-[#39E66D]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#103D27] flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4E9DC] bg-[#142B20] p-3 rounded-xl border border-[#103D27]">
              <Sparkles className="w-4 h-4 text-[#39E66D] shrink-0" />
              <span>منصة تعليمية تفاعلية مفتوحة - لطلاب علوم الرياضة</span>
            </div>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-[#00C853] text-[#071C12] font-black text-sm shadow-sm hover:bg-[#39E66D] active:scale-98 transition-all"
            >
              استعراض المقررات السبعة
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
