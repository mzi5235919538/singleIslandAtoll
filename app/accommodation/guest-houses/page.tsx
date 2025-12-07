import Link from 'next/link';
import { HiArrowRight, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import AdSenseContainer from '@/components/AdSenseContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest Houses in Fuvahmulah - Affordable Local Accommodations',
  description: 'Stay at authentic guest houses in Fuvahmulah. Experience local hospitality with comfortable, budget-friendly accommodations.',
};

interface GuestHouse {
  id: number;
  name: string;
  owner: string;
  description: string;
  location: string;
  amenities: string[];
  contact: string;
  website?: string;
  image_emoji: string;
  rooms: number;
  price_per_night: string;
}

const guestHouses: GuestHouse[] = [
  {
    id: 1,
    name: "Ali's Guest House",
    owner: 'Ali Hassan',
    description: 'Cozy, family-run guest house with authentic local hospitality. Perfect for travelers seeking a genuine Maldivian experience.',
    location: 'Thinadhoo, Fuvahmulah',
    amenities: ['WiFi', 'Fan AC', 'Shared Kitchen', 'Garden', 'Bicycle Rentals'],
    contact: '+960 789-0001',
    website: 'https://alisguesthouse.mv',
    image_emoji: '🏡',
    rooms: 5,
    price_per_night: '$40-60'
  },
  {
    id: 2,
    name: "Reef View Guest House",
    owner: 'Fatima Ahmed',
    description: 'Oceanfront guest house with stunning reef views. Great location for snorkeling enthusiasts and budget travelers.',
    location: 'Felidhoo, Fuvahmulah',
    amenities: ['Oceanview', 'WiFi', 'Shared Kitchen', 'Laundry', 'Snorkeling Gear'],
    contact: '+960 789-0002',
    website: 'https://reefviewgh.mv',
    image_emoji: '🌊',
    rooms: 6,
    price_per_night: '$35-55'
  },
  {
    id: 3,
    name: "Island Home Guest House",
    owner: 'Mohamed Ibrahim',
    description: 'Comfortable and clean accommodations with friendly staff. Central location near shops, restaurants, and dive centers.',
    location: 'Ukulhas, Fuvahmulah',
    amenities: ['WiFi', 'Fan AC', 'Room Service', 'Restaurant', 'Tour Bookings'],
    contact: '+960 789-0003',
    website: 'https://islandhomegh.mv',
    image_emoji: '🏠',
    rooms: 8,
    price_per_night: '$45-65'
  },
  {
    id: 4,
    name: "Beach Breeze Guest House",
    owner: 'Zainab Hassan',
    description: 'Charming beachfront guest house with relaxing atmosphere. Local restaurant serving fresh seafood daily.',
    location: 'Dhuvaafaru, Fuvahmulah',
    amenities: ['Beachfront', 'WiFi', 'Restaurant', 'Laundry', 'Bike Rentals'],
    contact: '+960 789-0004',
    website: 'https://beachbreezegh.mv',
    image_emoji: '🏖️',
    rooms: 4,
    price_per_night: '$30-50'
  },
  {
    id: 5,
    name: "Tropical Paradise Guest House",
    owner: 'Ahmed Rashid',
    description: 'Budget-friendly accommodation with clean rooms and helpful staff. Ideal location for exploring the island.',
    location: 'Thinadhoo, Fuvahmulah',
    amenities: ['Fan AC', 'WiFi', 'Shared Kitchen', 'Garden', 'Common Area'],
    contact: '+960 789-0005',
    website: 'https://tropicalparadisegh.mv',
    image_emoji: '🌴',
    rooms: 7,
    price_per_night: '$25-45'
  },
  {
    id: 6,
    name: "Sunset Cove Guest House",
    owner: 'Mariam Ali',
    description: 'Peaceful guest house with sunset views from the terrace. Perfect for couples and solo travelers seeking tranquility.',
    location: 'Felidhoo, Fuvahmulah',
    amenities: ['Sunset View', 'WiFi', 'Terrace', 'Laundry', 'Common Kitchen'],
    contact: '+960 789-0006',
    website: 'https://sunsetcovegh.mv',
    image_emoji: '🌅',
    rooms: 5,
    price_per_night: '$35-55'
  },
  {
    id: 7,
    name: "Local Connect Guest House",
    owner: 'Hassan Omar',
    description: 'Excellent base for cultural immersion with staff who organize local tours and fishing trips.',
    location: 'Ukulhas, Fuvahmulah',
    amenities: ['WiFi', 'Local Tours', 'Kitchen Access', 'Laundry', 'Common Lounge'],
    contact: '+960 789-0007',
    website: 'https://localconnectgh.mv',
    image_emoji: '🗺️',
    rooms: 6,
    price_per_night: '$30-50'
  },
  {
    id: 8,
    name: "Peaceful Haven Guest House",
    owner: 'Aisha Mohammed',
    description: 'Quiet retreat in the heart of the island with spacious rooms and excellent home-cooked meals available.',
    location: 'Dhuvaafaru, Fuvahmulah',
    amenities: ['Quiet Location', 'Home Cooking', 'WiFi', 'Room Service', 'Laundry'],
    contact: '+960 789-0008',
    website: 'https://peacefulhavengh.mv',
    image_emoji: '🏘️',
    rooms: 4,
    price_per_night: '$35-50'
  },
];

export default function GuestHousesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-6">
              🏡 Local Guest Houses
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Guest Houses in Fuvahmulah
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience authentic local hospitality at affordable prices. Our guest houses offer a genuine taste of island life.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Introduction */}
      <section className="section-spacing bg-linear-to-b from-green-50 to-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-elevated p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Affordable Prices</h3>
              <p className="text-gray-600">Budget-friendly accommodation without compromising on comfort and cleanliness.</p>
            </div>
            <div className="card-elevated p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Hospitality</h3>
              <p className="text-gray-600">Experience genuine Maldivian hospitality and connect with local culture and traditions.</p>
            </div>
            <div className="card-elevated p-8">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Great Locations</h3>
              <p className="text-gray-600">Centrally located near beaches, restaurants, dive centers, and local attractions.</p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Guest Houses Listing */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Guest Houses</h2>
            <p className="text-lg text-gray-600">Browse all {guestHouses.length} guest houses and find your perfect local accommodation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guestHouses.map((gh) => (
              <div key={gh.id} className="card-elevated overflow-hidden hover:shadow-xl-modern transition-shadow duration-300">
                <div className="bg-linear-to-r from-green-500 to-teal-500 px-8 py-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-5xl mb-3">{gh.image_emoji}</div>
                      <h3 className="text-2xl font-bold mb-1">{gh.name}</h3>
                      <p className="text-green-50 text-sm">Managed by {gh.owner}</p>
                    </div>
                    <div className="text-right bg-white/20 px-4 py-2 rounded-lg">
                      <p className="text-2xl font-bold">{gh.price_per_night}</p>
                      <p className="text-xs text-green-100">/night</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{gh.description}</p>

                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🚪</span>
                      <div>
                        <p className="text-xs text-gray-600">Rooms</p>
                        <p className="text-lg font-bold text-gray-900">{gh.rooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="text-xs text-gray-600">Location</p>
                        <p className="text-sm font-bold text-gray-900">{gh.location.split(',')[0]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {gh.amenities.map((amenity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-3">
                    <a href={`tel:${gh.contact}`} className="flex items-center gap-3 text-green-600 hover:text-green-700 font-semibold group">
                      <HiPhone size={18} />
                      <span className="group-hover:underline">{gh.contact}</span>
                    </a>
                    {gh.website && (
                      <a
                        href={gh.website}
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

      <AdSenseContainer />

      {/* Booking Tips */}
      <section className="section-spacing bg-linear-to-b from-white to-teal-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Booking Tips</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Tips for booking your guest house stay in Fuvahmulah
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📞 Book Early</h3>
              <p className="text-gray-600">Guest houses have limited rooms. Contact directly for availability, especially during peak season.</p>
            </div>
            <div className="card-elevated p-8 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💬 Communicate Preferences</h3>
              <p className="text-gray-600">Let hosts know your arrival time, meal preferences, and any special requests for a personalized experience.</p>
            </div>
            <div className="card-elevated p-8 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✈️ Arrange Transport</h3>
              <p className="text-gray-600">Most guest houses can help arrange airport pickup. Confirm transportation when you book.</p>
            </div>
            <div className="card-elevated p-8 border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💳 Payment Methods</h3>
              <p className="text-gray-600">Confirm payment methods in advance. Some places prefer cash or bank transfers.</p>
            </div>
            <div className="card-elevated p-8 border-l-4 border-green-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Meal Options</h3>
              <p className="text-gray-600">Ask about meal packages. Many guest houses offer affordable breakfast or full-board options.</p>
            </div>
            <div className="card-elevated p-8 border-l-4 border-teal-400">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Local Activities</h3>
              <p className="text-gray-600">Hosts can help arrange diving, fishing, snorkeling, and tours at discounted local rates.</p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* CTA Section */}
      <section className="section-spacing bg-linear-to-r from-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience Local Hospitality?</h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Pick a guest house, contact the owner directly, and prepare for an authentic Maldivian island experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white flex items-center justify-center gap-2 group">
              Need Help?
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
