'use client';

import Link from 'next/link';
import { Listing } from '@/data/listings';
import { HiArrowRight } from 'react-icons/hi';

interface RelatedListingsProps {
  listings: Listing[];
  title?: string;
}

export default function RelatedListings({
  listings,
  title = 'Related Listings',
}: RelatedListingsProps) {
  if (listings.length === 0) return null;

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            Explore more {listings[0].category} experiences in Fuvahmulah
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Link
              key={listing.slug}
              href={`/place/${listing.slug}`}
              className="group"
            >
              <div className="card-elevated overflow-hidden h-full flex flex-col hover:shadow-xl-modern transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-linear-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md-modern">
                    <span>{listing.categoryIcon}</span>
                    <span className="hidden sm:inline">{listing.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col grow">
                  <h3 className="font-bold text-lg text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 grow">
                    {listing.shortDescription}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span>📍</span>
                    <span className="line-clamp-1">{listing.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(listing.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {listing.rating} ({listing.reviews})
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 group-hover:border-primary transition-colors">
                    <span className="text-sm font-semibold text-primary">
                      View Details
                    </span>
                    <HiArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show more link */}
        {listings.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href={`/attractions?type=${listings[0].category}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg-modern transform hover:scale-105 transition-all duration-300"
            >
              Explore All {listings[0].category}
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
