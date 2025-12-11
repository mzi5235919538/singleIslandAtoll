import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { ReactNode } from 'react';

interface PlaceCardProps {
  image?: string;
  icon?: string | ReactNode;
  title: string;
  description: string;
  featured?: string;
  href: string;
  buttonText?: string;
  category?: string;
  categoryIcon?: ReactNode;
  location?: string;
  featured_count?: number;
}

export default function PlaceCard({
  image,
  icon,
  title,
  description,
  featured,
  href,
  buttonText = 'Learn More',
  category,
  categoryIcon,
  location,
  featured_count = 0,
}: PlaceCardProps) {
  return (
    <div className="group card-elevated h-full flex flex-col overflow-hidden hover:shadow-xl-modern transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      {image ? (
        <div className="relative h-48 md:h-56 overflow-hidden bg-linear-to-br from-blue-100 to-teal-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Category Badge - Top Right */}
          {category && (
            <div className="absolute top-3 right-3 bg-linear-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 shadow-md-modern">
              {categoryIcon && <span className="text-lg">{categoryIcon}</span>}
              <span>{category}</span>
            </div>
          )}

          {/* Location Tag - Bottom Left */}
          {location && (
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-md-modern">
              📍 {location}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-linear-to-br from-blue-50 to-teal-50 px-6 py-6 border-b border-gray-100 min-h-24">
          {icon && (
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">
              {icon}
            </span>
          )}
        </div>
      )}

      {/* Content Container */}
      <div className="p-6 grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base line-clamp-2 grow">
          {description}
        </p>

        {/* Features */}
        {featured && (
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.split(',').slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-1 rounded-full bg-linear-to-r from-blue-100 to-teal-100 text-primary text-xs font-medium"
              >
                ✓ {item.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <Link
          href={href}
          className="btn-primary w-full flex items-center justify-center gap-2 group/btn mt-auto"
        >
          {buttonText}
          <HiArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
