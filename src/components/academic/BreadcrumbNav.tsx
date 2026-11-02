import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import type { BreadcrumbItem } from '../../types';

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  return (
    <nav
      aria-label="مسار التنقل الأكاديمي"
      className="py-3 px-4 bg-white rounded-2xl border border-[#D9EAF7] shadow-2xs overflow-x-auto"
    >
      <ol className="flex items-center gap-2 text-xs sm:text-sm flex-nowrap whitespace-nowrap min-w-max">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[#64748B] hover:text-[#2563EB] font-semibold transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>الرئيسية</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronLeft className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="text-[#64748B] hover:text-[#2563EB] font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-black ${
                    isLast ? 'text-[#2563EB]' : 'text-[#172B4D]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

