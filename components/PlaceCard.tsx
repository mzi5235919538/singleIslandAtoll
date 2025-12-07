import Link from 'next/link';
import { HiArrowRight, HiStar } from 'react-icons/hi';

interface PlaceCardProps {
  icon: string;
  title: string;
  description: string;
  featured: string;
  href: string;
  buttonText: string;
  featured_count?: number;
}

export default function PlaceCard({
  icon,
  title,
  description,
  featured,
  href,
  buttonText,
  featured_count = 0,
}: PlaceCardProps) {
  return (
    <div className="group card-elevated h-full flex flex-col">
      {/* Header with Icon and Title */}
      <div className="bg-linear-to-br from-blue-50 to-green-50 px-6 py-6 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
          {featured_count > 0 && (
            <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
              <HiStar size={16} className="text-yellow-600" />
              <span className="text-xs font-semibold text-yellow-800">{featured_count}</span>
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 grow">
        <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {featured.split(',').map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
            >
              ✓ {item.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with Button */}
      <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-auto">
        <Link
          href={href}
          className="btn-primary w-full flex items-center justify-center gap-2 group/btn"
        >
          {buttonText}
          <HiArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
