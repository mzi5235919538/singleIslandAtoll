'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { useBookingModal } from './BookingModalProvider';

interface ListingCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryIcon: string;
  location: string;
  href: string;
  rating?: number;
  reviews?: number;
}

export default function ListingCard({
  title,
  description,
  image,
  category,
  categoryIcon,
  location,
  href,
  rating,
  reviews,
}: ListingCardProps) {
  const { openBookingModal } = useBookingModal();

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openBookingModal(title);
  };

  return (
    <div className="group h-full">
      <Link href={href}>
        <div className="card-elevated overflow-hidden hover:shadow-xl-modern transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative overflow-hidden bg-linear-to-br from-blue-100 to-teal-100 aspect-square md:aspect-9/8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Category Badge - Top Right */}
            <div className="absolute top-3 right-3 bg-linear-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 shadow-md-modern">
              <span className="text-base">{categoryIcon}</span>
              <span>{category}</span>
            </div>

            {/* Location Tag - Bottom Left */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-md-modern">
              📍 {location}
            </div>

            {/* View Details Button - Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent hover:text-white">
                View Details
                <HiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6 flex flex-col grow">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
              {title}
            </h3>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-2 mb-4 grow">
              {description}
            </p>

            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-2 text-sm mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(rating) ? '⭐' : '☆'} />
                  ))}
                </div>
                <span className="text-gray-600">
                  {rating.toFixed(1)} {reviews && `(${reviews} reviews)`}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Book Now Button - Outside Link */}
      <button
        onClick={handleBookingClick}
        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 min-h-10"
      >
        Book Now
      </button>
    </div>
  );
}
