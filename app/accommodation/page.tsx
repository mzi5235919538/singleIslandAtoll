import Link from 'next/link';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accommodation in Fuvahmulah - Hotels, Resorts & Guest Houses',
  description: 'Find the best accommodation options in Fuvahmulah including luxury resorts, hotels, and guest houses for all budgets',
};

export default function Accommodation() {
  return (
    <>
      {/* Hero - Modern */}
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              🛏️ Comfortable Stays
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Where to Stay in Fuvahmulah
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Find your perfect accommodation from luxury resorts to cozy guest houses. All options offer warm hospitality and unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Explore Options</button>
              <button className="btn-outline">View Rates</button>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Accommodation Types */}
      <section className="section-container">
        <h2 className="section-title">Accommodation Options</h2>
        <p className="section-subtitle">Choose From a Variety of Options to Suit Your Budget and Preferences</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlaceCard
            icon="🏨"
            title="Hotels"
            description="Luxury resorts and comfortable hotels with excellent amenities. Browse all hotels from 3-star to 5-star properties."
            featured="Browse by rating, Direct contact info"
            href="/accommodation/hotels"
            buttonText="View All Hotels"
          />

          <PlaceCard
            icon="🏡"
            title="Guest Houses"
            description="Affordable and authentic accommodations perfect for budget travelers. Experience genuine Maldivian hospitality."
            featured="Budget-friendly, Local experience"
            href="/accommodation/guest-houses"
            buttonText="View All Guest Houses"
          />

          <PlaceCard
            icon="⭐"
            title="Inns & Boutique Hotels"
            description="Charming inns with unique character and personal service. Each with its own specialty - diving, culture, wellness, etc."
            featured="Personalized service, Unique themes"
            href="/accommodation/inns"
            buttonText="View All Inns"
          />
        </div>
      </section>

      <AdSenseContainer />

      {/* Featured Properties - Modern */}
      <section className="section-spacing bg-linear-to-b from-white to-blue-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Properties</h2>
            <p className="section-subtitle">Popular accommodation options in Fuvahmulah</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏨 Fuvahmulah Resort & Spa</h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">Luxury 5-Star Resort</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A luxury resort offering world-class amenities, spa services, and fine dining. Located on the pristine Thinadhoo Beach.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>50+ Deluxe Rooms & Villas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>All-Inclusive Packages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600">✓</span>
                  <span>Spa & Wellness Center</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="tel:+9601234567" className="btn-primary text-sm px-4 py-2">Call Now</a>
                <a href="mailto:info@fuvahmulahresort.com" className="btn-outline text-sm px-4 py-2">Email</a>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏨 Island Paradise Hotel</h3>
              <p className="text-sm text-green-600 font-semibold mb-4">Boutique 3-Star Hotel</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mid-range hotel with excellent service, local cuisine, and cultural experiences. Perfect for authentic island living.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>30 Comfortable Rooms</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Restaurant & Café</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>Tour Arrangements</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="tel:+9601234568" className="btn-primary text-sm px-4 py-2">Call Now</a>
                <a href="mailto:info@islandparadise.mv" className="btn-outline text-sm px-4 py-2">Email</a>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏠 Cozy Guest House</h3>
              <p className="text-sm text-amber-600 font-semibold mb-4">Budget-Friendly Guesthouse</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Budget-friendly accommodation with warm hospitality. A home away from home for budget-conscious travelers.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600">✓</span>
                  <span>20 Clean & Basic Rooms</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600">✓</span>
                  <span>Shared Kitchen & Dining</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-amber-600">✓</span>
                  <span>Very Affordable Rates</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="tel:+9601234569" className="btn-primary text-sm px-4 py-2">Call Now</a>
                <a href="mailto:cozy@guesthouses.mv" className="btn-outline text-sm px-4 py-2">Email</a>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🏝️ Beachfront Bungalows</h3>
              <p className="text-sm text-purple-600 font-semibold mb-4">Romantic Beachfront</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Private beachfront bungalows with direct beach access. Ideal for couples and honeymooners seeking privacy and romance.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>15 Private Bungalows</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>Direct Beach Access</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-purple-600">✓</span>
                  <span>Sunset Views & Romance</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="tel:+9601234570" className="btn-primary text-sm px-4 py-2">Call Now</a>
                <a href="mailto:info@beachfrontbungalows.mv" className="btn-outline text-sm px-4 py-2">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Amenities & Services */}
      <section className="section-container">
        <h2 className="section-title">Amenities & Services</h2>
        <p className="section-subtitle">What to Expect at Our Recommended Accommodations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="info-box">
            <h4>🍽️ Dining & Cuisine</h4>
            <p>
              Most accommodations offer in-house restaurants serving authentic Maldivian and international cuisine. 
              Local cafes provide affordable meals and refreshing beverages.
            </p>
          </div>

          <div className="info-box">
            <h4>🚗 Transportation</h4>
            <p>
              Hotels can arrange boat transfers to attractions and activity centers. Local transport is affordable and readily available.
            </p>
          </div>

          <div className="info-box">
            <h4>🏊 Recreation</h4>
            <p>
              Many accommodations offer water sports, spa services, and cultural programs. Beach access is standard at most properties.
            </p>
          </div>

          <div className="info-box">
            <h4>📱 Connectivity</h4>
            <p>
              WiFi is available at most properties. Mobile networks provide good coverage throughout the island for reliable communication.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Tips - Modern */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Booking Tips</h2>
            <p className="section-subtitle">Everything you need to know before booking</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📅 Best Time to Book</h3>
              <p className="text-gray-700 leading-relaxed">
                Book 2-3 months in advance during peak season (Nov-Mar). Shoulder season offers better rates with good weather conditions.
              </p>
            </div>

            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">💰 Budget Planning</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Guest houses:</strong> $30-60/night | <strong>Hotels:</strong> $80-150/night | <strong>Resorts:</strong> $200+/night
              </p>
            </div>

            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🛠️ Special Requests</h3>
              <p className="text-gray-700 leading-relaxed">
                Most properties accommodate special requests for honeymoons, celebrations, or dietary needs. Contact ahead for arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* CTA - Modern */}
      <section className="section-spacing bg-linear-to-r from-blue-600 to-green-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl text-blue-50 mb-10">
              Contact our partners directly or reach out for personalized accommodation recommendations.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition">
              Get Help Booking
            </Link>
          </div>
        </div>
      </section>

      <AdSenseContainer />
    </>
  );
}
