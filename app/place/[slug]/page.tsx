import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getListingBySlug, getRelatedListings } from '@/data/listings';
import RelatedListings from '@/components/RelatedListings';
import MapWrapper from '@/components/MapWrapper';
import { getLocationBySlug } from '@/data/mapLocations';
import { HiArrowRight, HiPhone, HiAtSymbol } from 'react-icons/hi';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const listing = getListingBySlug(params.slug);

  if (!listing) {
    return {
      title: 'Listing Not Found',
      description: 'The listing you are looking for does not exist.',
    };
  }

  return {
    title: `${listing.title} - Fuvahmulah`,
    description: listing.shortDescription,
    openGraph: {
      title: listing.title,
      description: listing.shortDescription,
      images: [listing.images[0]],
    },
  };
}

export default function PlaceDetailPage({ params }: PageProps) {
  const listing = getListingBySlug(params.slug);

  if (!listing) {
    notFound();
  }

  const relatedListings = getRelatedListings(listing.slug, 4);
  const categoryLabel = listing.category.charAt(0).toUpperCase() + listing.category.slice(1);
  
  // Get location data for map
  const locationData = getLocationBySlug(params.slug);
  const locationMarker = locationData
    ? [
        {
          position: [locationData.coordinates.lat, locationData.coordinates.lng] as [number, number],
          title: locationData.title,
          category: locationData.category,
          slug: locationData.slug,
          description: locationData.description,
        },
      ]
    : [];

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{listing.categoryIcon}</span>
              <span className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-semibold">
                {categoryLabel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              {listing.title}
            </h1>
            <div className="flex items-center gap-2 text-white text-lg">
              <span>📍</span>
              <span>{listing.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <Link
              href={`/${listing.category}s`}
              className="text-primary hover:underline capitalize"
            >
              {listing.category}s
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-600 font-medium">{listing.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-12">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Main Image */}
                  <div className="col-span-2 md:col-span-1">
                    <img
                      src={listing.images[0]}
                      alt={`${listing.title} - Image 1`}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Other Images */}
                  {listing.images.slice(1, 4).map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${listing.title} - Image ${idx + 2}`}
                      className="w-full h-64 md:h-40 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(listing.rating)
                            ? 'text-2xl'
                            : 'text-gray-300 text-2xl'
                        }
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-dark">
                      {listing.rating}
                    </div>
                    <div className="text-sm text-gray-600">
                      Based on {listing.reviews} reviews
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-text-dark mb-6">About</h2>
                <div className="prose prose-lg max-w-none">
                  {listing.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features/Amenities */}
              {listing.features.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-text-dark mb-6">
                    {listing.category === 'accommodation' ||
                    listing.category === 'dining'
                      ? 'Amenities & Features'
                      : 'What to Expect'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {listing.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                      >
                        <span className="text-primary text-xl mt-1 shrink-0">
                          ✓
                        </span>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Map */}
              {locationMarker.length > 0 && locationData && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-text-dark mb-6">Location on Map</h2>
                  <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 mb-4">
                    <MapWrapper markers={locationMarker} height="h-96" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.google.com/maps?q=${locationData.coordinates.lat},${locationData.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      📍 Get Directions
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-linear-to-br from-blue-50 to-teal-50 rounded-lg p-6 mb-6 border border-primary/20 sticky top-20">
                <h3 className="text-xl font-bold text-text-dark mb-6">
                  Contact & Information
                </h3>

                {/* Location */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    LOCATION
                  </p>
                  <p className="text-gray-800">{listing.location}</p>
                </div>

                {/* Phone */}
                {listing.contact.phone && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-semibold mb-2 flex items-center gap-2">
                      <HiPhone className="w-4 h-4" />
                      PHONE
                    </p>
                    <a
                      href={`tel:${listing.contact.phone}`}
                      className="text-primary font-semibold hover:underline"
                    >
                      {listing.contact.phone}
                    </a>
                  </div>
                )}

                {/* Email */}
                {listing.contact.email && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-semibold mb-2 flex items-center gap-2">
                      <HiAtSymbol className="w-4 h-4" />
                      EMAIL
                    </p>
                    <a
                      href={`mailto:${listing.contact.email}`}
                      className="text-primary font-semibold hover:underline break-all text-sm"
                    >
                      {listing.contact.email}
                    </a>
                  </div>
                )}

                {/* Website */}
                {listing.contact.website && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      WEBSITE
                    </p>
                    <a
                      href={`https://${listing.contact.website.replace(/^https?:\/\//, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline text-sm break-all"
                    >
                      {listing.contact.website}
                    </a>
                  </div>
                )}

                {/* Hours */}
                {listing.hours && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      HOURS
                    </p>
                    <p className="text-gray-800 text-sm">{listing.hours}</p>
                  </div>
                )}

                {/* Price Range */}
                {listing.priceRange && (
                  <div className="mb-8 pb-8 border-b border-primary/20">
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      PRICE RANGE
                    </p>
                    <p className="text-primary font-bold text-lg">
                      {listing.priceRange}
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  {listing.contact.phone && (
                    <a
                      href={`tel:${listing.contact.phone}`}
                      className="block w-full text-center px-4 py-3 bg-linear-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                      Call Now
                    </a>
                  )}
                  {listing.contact.email && (
                    <a
                      href={`mailto:${listing.contact.email}`}
                      className="block w-full text-center px-4 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Send Email
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-white border-2 border-gray-300 text-text-dark font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-text-dark mb-4">Share</h3>
                <div className="space-y-2">
                  <a
                    href={`https://facebook.com/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Listings */}
      {relatedListings.length > 0 && (
        <RelatedListings
          listings={relatedListings}
          title={`More ${listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}`}
        />
      )}

      {/* CTA Section */}
      <section className="section-spacing bg-linear-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience?
            </h2>
            <p className="text-xl text-blue-50 mb-10">
              Get in touch with us to book or learn more about this amazing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {listing.contact.phone ? (
                <a
                  href={`tel:${listing.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition"
                >
                  Call Now
                  <HiPhone className="w-5 h-5" />
                </a>
              ) : null}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition"
              >
                Get Information
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
