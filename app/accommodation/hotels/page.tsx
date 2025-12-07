import Link from 'next/link';
import { HiArrowRight, HiStar, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import AdSenseContainer from '@/components/AdSenseContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotels in Fuvahmulah - Best 3-5 Star Hotels & Resorts',
  description: 'Discover the best hotels and resorts in Fuvahmulah Single Island Atoll. Browse luxury accommodations with world-class amenities.',
};

interface Hotel {
  id: number;
  name: string;
  rating: number;
  type: '5-star' | '4-star' | '3-star';
  description: string;
  location: string;
  amenities: string[];
  contact: string;
  website?: string;
  image_emoji: string;
  price_range: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Fuvahmulah Resort & Spa',
    rating: 4.8,
    type: '5-star',
    description: 'Luxury beachfront resort offering world-class diving, spa services, and gourmet dining in an intimate island setting.',
    location: 'Thinadhoo, Fuvahmulah',
    amenities: ['Private Beach', 'Dive Center', 'Spa', 'Restaurant', 'Water Sports', 'WiFi'],
    contact: '+960 681-5000',
    website: 'https://www.fuvahmulahresort.mv',
    image_emoji: '🏝️',
    price_range: '$$$$$'
  },
  {
    id: 2,
    name: 'Island Paradise Hotel',
    rating: 4.6,
    type: '4-star',
    description: 'Modern beachfront hotel with ocean views, excellent restaurants, and easy access to dive sites and attractions.',
    location: 'Felidhoo, Fuvahmulah',
    amenities: ['Beachfront', 'Restaurant', 'Bar', 'Gym', 'Dive Shop', 'WiFi'],
    contact: '+960 681-6000',
    website: 'https://www.islandparadise.mv',
    image_emoji: '🌴',
    price_range: '$$$'
  },
  {
    id: 3,
    name: 'Coral Reef Hotel',
    rating: 4.5,
    type: '4-star',
    description: 'Comfortable beachside accommodation with spectacular reef views, perfect for divers and beach lovers.',
    location: 'Ukulhas, Fuvahmulah',
    amenities: ['Reef View', 'Snorkeling', 'Restaurant', 'Bar', 'WiFi', 'Laundry'],
    contact: '+960 681-7000',
    website: 'https://www.coralreefhotel.mv',
    image_emoji: '🐠',
    price_range: '$$$'
  },
  {
    id: 4,
    name: 'Tropical Ocean Hotel',
    rating: 4.4,
    type: '3-star',
    description: 'Budget-friendly beachfront hotel with comfortable rooms and good access to local attractions and diving.',
    location: 'Dhuvaafaru, Fuvahmulah',
    amenities: ['Oceanview', 'Restaurant', 'WiFi', 'Bicycle Rentals', 'Tour Desk'],
    contact: '+960 681-8000',
    website: 'https://www.tropicalocean.mv',
    image_emoji: '🌊',
    price_range: '$$'
  },
  {
    id: 5,
    name: 'Sunset Beach Hotel',
    rating: 4.3,
    type: '3-star',
    description: 'Charming hotel with a great sunset view terrace, local restaurant, and friendly staff who speak multiple languages.',
    location: 'Thinadhoo, Fuvahmulah',
    amenities: ['Sunset View', 'Local Restaurant', 'WiFi', 'Room Service', 'Tour Bookings'],
    contact: '+960 681-9000',
    website: 'https://www.sunsetbeachhotel.mv',
    image_emoji: '🌅',
    price_range: '$$'
  },
  {
    id: 6,
    name: 'Lagoon View Hotel',
    rating: 4.2,
    type: '3-star',
    description: 'Affordable accommodation with lagoon views, excellent for budget travelers seeking comfort and convenience.',
    location: 'Felidhoo, Fuvahmulah',
    amenities: ['Lagoon View', 'WiFi', 'Restaurant', 'Garden', 'Parking'],
    contact: '+960 681-5500',
    website: 'https://www.lagoonview.mv',
    image_emoji: '💎',
    price_range: '$$'
  },
];

export default function HotelsPage() {
  const fiveStarHotels = hotels.filter(h => h.type === '5-star');
  const fourStarHotels = hotels.filter(h => h.type === '4-star');
  const threeStarHotels = hotels.filter(h => h.type === '3-star');

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              🏨 Hotels & Resorts
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hotels in Fuvahmulah
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover luxury resorts, comfortable hotels, and great-value accommodations. Find your perfect stay on Single Island Atoll.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* 5-Star Hotels */}
      {fiveStarHotels.length > 0 && (
        <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
          <div className="section-container">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl font-bold text-gray-900">⭐⭐⭐⭐⭐ Luxury Resorts</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">Premium</span>
              </div>
              <p className="text-gray-600">Experience world-class luxury and exceptional service at our premium resorts.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fiveStarHotels.map((hotel) => (
                <div key={hotel.id} className="card-elevated overflow-hidden hover:shadow-xl-modern transition-shadow duration-300">
                  <div className="bg-linear-to-r from-blue-600 to-green-600 px-8 py-8 text-white">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-5xl mb-4">{hotel.image_emoji}</div>
                        <h3 className="text-3xl font-bold mb-2">{hotel.name}</h3>
                        <p className="text-blue-50 flex items-center gap-2">
                          📍 {hotel.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-2">
                          {[...Array(5)].map((_, i) => (
                            <HiStar key={i} size={20} className="text-yellow-300 fill-yellow-300" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">{hotel.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{hotel.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            ✓ {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <HiPhone size={18} className="text-blue-600" />
                        <span className="font-semibold text-gray-900">{hotel.contact}</span>
                      </div>
                      {hotel.website && (
                        <a
                          href={hotel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold group"
                        >
                          <HiGlobeAlt size={18} />
                          <span className="group-hover:underline">Visit Website</span>
                          <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdSenseContainer />

      {/* 4-Star Hotels */}
      {fourStarHotels.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="section-container">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl font-bold text-gray-900">⭐⭐⭐⭐ Upper Mid-Range Hotels</h2>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Comfort</span>
              </div>
              <p className="text-gray-600">Great value with excellent facilities and comfortable accommodations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {fourStarHotels.map((hotel) => (
                <div key={hotel.id} className="card-elevated overflow-hidden hover:shadow-xl-modern transition-shadow duration-300">
                  <div className="bg-linear-to-r from-green-600 to-blue-600 px-8 py-8 text-white">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="text-5xl mb-4">{hotel.image_emoji}</div>
                        <h3 className="text-3xl font-bold mb-2">{hotel.name}</h3>
                        <p className="text-green-50 flex items-center gap-2">
                          📍 {hotel.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-2">
                          {[...Array(4)].map((_, i) => (
                            <HiStar key={i} size={20} className="text-yellow-300 fill-yellow-300" />
                          ))}
                          <HiStar size={20} className="text-gray-300" />
                        </div>
                        <span className="text-sm font-semibold">{hotel.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{hotel.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            ✓ {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <HiPhone size={18} className="text-green-600" />
                        <span className="font-semibold text-gray-900">{hotel.contact}</span>
                      </div>
                      {hotel.website && (
                        <a
                          href={hotel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-green-600 hover:text-green-700 font-semibold group"
                        >
                          <HiGlobeAlt size={18} />
                          <span className="group-hover:underline">Visit Website</span>
                          <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdSenseContainer />

      {/* 3-Star Hotels */}
      {threeStarHotels.length > 0 && (
        <section className="section-spacing bg-linear-to-b from-white to-amber-50">
          <div className="section-container">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl font-bold text-gray-900">⭐⭐⭐ Budget-Friendly Hotels</h2>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">Value</span>
              </div>
              <p className="text-gray-600">Affordable, comfortable accommodations perfect for budget-conscious travelers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threeStarHotels.map((hotel) => (
                <div key={hotel.id} className="card-elevated overflow-hidden hover:shadow-xl-modern transition-shadow duration-300">
                  <div className="bg-linear-to-r from-amber-500 to-orange-500 px-6 py-6 text-white">
                    <div className="text-4xl mb-3">{hotel.image_emoji}</div>
                    <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
                    <p className="text-amber-50 text-sm flex items-center gap-2">
                      📍 {hotel.location}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(3)].map((_, i) => (
                        <HiStar key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <HiStar key={i + 3} size={18} className="text-gray-300" />
                      ))}
                      <span className="ml-2 text-sm font-semibold text-gray-900">{hotel.rating}/5</span>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{hotel.description}</p>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-900 mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                          <span key={idx} className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <p className="flex items-center gap-2 text-sm text-gray-900 font-semibold">
                        <HiPhone size={16} className="text-amber-600" />
                        {hotel.contact}
                      </p>
                      {hotel.website && (
                        <a
                          href={hotel.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-semibold group"
                        >
                          <HiGlobeAlt size={16} />
                          <span className="group-hover:underline">Website</span>
                          <HiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AdSenseContainer />

      {/* CTA Section */}
      <section className="section-spacing bg-linear-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Contact any of our hotels directly or reach out to our tourism team for personalized recommendations and special rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white flex items-center justify-center gap-2 group">
              Contact Us
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link href="/accommodation" className="btn-outline text-white border-white hover:bg-white/10 flex items-center justify-center gap-2">
              Back to Accommodation
              <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
