import Link from 'next/link';
import { ReactNode } from 'react';

interface CategoryCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  bgImage?: string;
}

export default function CategoryCard({
  href,
  icon,
  title,
  description,
  bgImage,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
        style={
          bgImage
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : {}
        }
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {/* Icon */}
          <div className="mb-4 text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-100 group-hover:text-white transition-colors duration-300 line-clamp-2">
            {description}
          </p>

          {/* Arrow Indicator */}
          <div className="mt-4 flex items-center gap-2 text-accent-light opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
            <span className="text-sm font-semibold">Explore</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
