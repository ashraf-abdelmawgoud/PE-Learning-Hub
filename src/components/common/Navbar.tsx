/**
 * Navbar.tsx
 * Clean, Minimal, Premium Header for PE Interactive Learning Hub
 *
 * RTL Layout:
 * - Right: Platform Logo + Platform Name (منصة علوم الرياضة)
 * - Center: 3 Navigation Links (الرئيسية, المواد الدراسية, عن المنصة)
 * - Left: 1 Primary CTA (استكشف المواد)
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { PlatformLogo } from './PlatformLogo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/courses', label: 'المواد الدراسية' },
    { path: '/about', label: 'عن المنصة' },
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

  const handleCtaClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      const el = document.getElementById('courses-section');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#071C12]/92 backdrop-blur-md border-b border-[#143D27]/80 transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Right (RTL): Platform Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00C853] rounded-xl p-1 group"
            aria-label="الصفحة الرئيسية لمنصة علوم الرياضة"
          >
            <PlatformLogo showSubtitle={false} symbolSize={34} />
          </Link>

          {/* Center (Desktop): Exactly Three Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="شريط التنقل الرئيسي">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-bold transition-colors ${
                    active
                      ? 'text-[#39E66D] font-black bg-[#142B20]/80'
                      : 'text-[#D4E9DC]/90 hover:text-[#39E66D] hover:bg-[#103D27]/40'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Left (Desktop): One Focused Primary CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/courses"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] text-xs font-black shadow-xs shadow-[#00C853]/25 transition-all duration-200 hover:shadow-md hover:shadow-[#39E66D]/30 active:scale-98"
            >
              <span>استكشف المواد</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#071C12]" />
            </Link>
          </div>

          {/* Mobile: Clean Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-[#F4FFF7] hover:text-[#39E66D] hover:bg-[#103D27]/60 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00C853] border border-[#143D27]"
              aria-label={isOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-[#143D27] bg-[#071C12]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                    active
                      ? 'bg-[#142B20] text-[#39E66D] font-black'
                      : 'text-[#D4E9DC] hover:bg-[#103D27]/60 hover:text-[#39E66D]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#143D27]">
            <Link
              to="/courses"
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00C853] text-[#071C12] font-black text-sm shadow-sm hover:bg-[#39E66D] active:scale-98 transition-all"
            >
              <span>استكشف المواد</span>
              <ArrowLeft className="w-4 h-4 text-[#071C12]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
