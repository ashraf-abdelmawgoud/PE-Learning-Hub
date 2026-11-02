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
      className="py-3 px-4 bg-white rounded-2xl border border-[#D4E9DC] shadow-2xs overflow-x-auto transition-colors"
    >
      <ol className="flex items-center gap-2 text-xs sm:text-sm flex-nowrap whitespace-nowrap min-w-max">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[#6C8577] hover:text-[#00A844] font-semibold transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#00C853]" />
            <span>الرئيسية</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronLeft className="w-3.5 h-3.5 text-[#6C8577] shrink-0" />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="text-[#6C8577] hover:text-[#00A844] font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-black ${
                    isLast ? 'text-[#173D2B]' : 'text-[#486555]'
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
