'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

interface MegaMenuItem {
  icon: string;
  title: string;
  description: string;
  href: string;
}

interface MegaMenuProps {
  items: MegaMenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ items, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full mt-0 w-[600px] max-w-[90vw] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 animate-fadeInDown">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm font-bold text-text-light uppercase tracking-wide">Things To Do</h3>
      </div>

      {/* Grid Content */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
            >
              {/* Icon */}
              <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="font-bold text-text-dark text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-text-muted group-hover:text-text-light transition-colors duration-300">
                {item.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-primary text-xs font-semibold">
                Explore
                <HiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 bg-blue-50 rounded-b-xl flex items-center justify-between">
        <p className="text-xs text-text-muted">Browse all activities and adventures</p>
        <Link
          href="/activities"
          onClick={onClose}
          className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          See All
          <HiArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
