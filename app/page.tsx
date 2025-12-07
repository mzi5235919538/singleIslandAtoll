import Link from 'next/link';
import { HiArrowRight, HiCheckCircle, HiStar } from 'react-icons/hi';
import HeroCarouselWithImages from '@/components/HeroCarouselWithImages';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import VideoEmbed from '@/components/VideoEmbed';

export default function Home() {
  return (
    <>
      {/* Modern Hero Section with Overlay */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-100 to-green-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-green-100 to-blue-100 rounded-full opacity-40 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <HiStar className="text-yellow-500" size={16} />
                <span className="text-sm font-semibold text-blue-700">Welcome to Paradise</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Discover <span className="gradient-text">Fuvahmulah</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Single Island Atoll, Maldives - Where pristine beaches meet vibrant culture. Experience world-class diving, authentic island life, and unforgettable moments.
              </p>

              {/* Features */}
              <div className="space-y-3 pt-4">
                {['World-class diving spots', 'Pristine white-sand beaches', 'Authentic Maldivian culture'].map(
                  (feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <HiCheckCircle className="text-green-500 shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link href="/accommodation" className="btn-primary flex items-center justify-center gap-2 group">
                  Start Your Journey
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link href="/attractions" className="btn-outline flex items-center justify-center gap-2">
                  Explore
                  <HiArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="animate-slideInRight hidden lg:block">
              <HeroCarouselWithImages />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Carousel */}
      <section className="lg:hidden section-container">
        <HeroCarouselWithImages />
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Video */}
            <div className="animate-slideInLeft order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-xl-modern">
                <VideoEmbed
                  provider="youtube"
                  videoId="2ySUlrHwPOQ"
                  title="Fuvahmulah Maldives - Complete Travel Guide"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="animate-slideInRight space-y-6">
              <div>
                <h2 className="section-title text-left mb-4">Watch Fuvahmulah in 4K</h2>
                <p className="text-xl text-gray-600">Experience the raw beauty of our island paradise through stunning cinematic footage.</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Discover the pristine beaches, vibrant coral reefs, and authentic island culture that make Fuvahmulah truly special. Our comprehensive travel guide showcases everything from world-class diving spots to hidden local gems.
              </p>

              <ul className="space-y-3">
                {[
                  'Crystal clear turquoise waters',
                  'Breathtaking sunset views',
                  'Diverse marine life and coral gardens',
                  'Authentic local experiences',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link href="/attractions" className="btn-primary flex items-center gap-2 w-fit">
                  Explore More
                  <HiArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* About Section - Modern */}
      <section className="section-spacing bg-linear-to-b from-white to-blue-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">About Fuvahmulah</h2>
            <p className="section-subtitle">The Jewel of Single Island Atoll, Maldives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏝️',
                title: 'Your Paradise Awaits',
                description:
                  'Fuvahmulah, also known as Single Island Atoll, is the southernmost atoll in the Maldives. With pristine beaches, world-class dive sites, and authentic island culture, it offers an unforgettable tropical experience.',
              },
              {
                icon: '📍',
                title: 'Prime Location',
                description:
                  'Located just 270 km from Malé and easily accessible by domestic flights. The atoll features stunning lagoons and vibrant coral reefs perfect for all diving and snorkeling levels.',
              },
              {
                icon: '✨',
                title: 'Why Choose Us',
                description:
                  'Pristine beaches with crystal-clear waters, world-class diving opportunities, authentic Maldivian hospitality, and excellent value compared to other Maldives destinations.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-elevated p-8 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Container 2 */}
      <AdSenseContainer />

      {/* Quick Links Section - Modern */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Plan Your Perfect Adventure</h2>
            <p className="section-subtitle">
              Everything you need to explore, stay, dine, and experience Fuvahmulah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PlaceCard
              icon="🏜️"
              title="Attractions"
              description="Explore natural wonders, historical sites, and iconic landmarks that make Fuvahmulah truly special."
              featured="Thinadhoo Beach, Ukulhas, Felidhoo"
              href="/attractions"
              buttonText="Discover"
            />

          <PlaceCard
            icon="🏨"
            title="Accommodation"
            description="Choose from luxury resorts, boutique hotels, and comfortable guest houses to suit your budget."
            featured="Resorts, Hotels, Guest Houses"
            href="/accommodation"
            buttonText="Browse Stays"
          />

          <PlaceCard
            icon="🍽️"
            title="Dining"
            description="Savor authentic Maldivian cuisine and international dishes at excellent restaurants and cafes."
            featured="Local, Asian, Western"
            href="/dining"
            buttonText="View Restaurants"
          />

          <PlaceCard
            icon="🤿"
            title="Activity Centers"
            description="Dive, snorkel, fish, or explore - discover thrilling adventures at our professional activity centers."
            featured="Diving, Snorkeling, Water Sports"
            href="/activities"
            buttonText="Explore Activity Centers"
          />

          <PlaceCard
            icon="🌍"
            title="Travel Tips"
            description="Get helpful information about visas, weather, currency, and best times to visit."
            featured="Practical Travel Guide"
            href="/contact"
            buttonText="Get Help"
          />

          <PlaceCard
            icon="📞"
            title="Contact Us"
            description="Have questions? Get in touch with our tourism experts for personalized recommendations."
            featured="24/7 Support"
            href="/contact"
            buttonText="Contact Us"
          />
        </div>
        </div>
      </section>

      {/* AdSense Container 3 */}
      <AdSenseContainer />

      {/* Best Time to Visit - Modern */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Best Time to Visit</h2>
            <p className="section-subtitle">Plan your perfect getaway based on weather and season</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">☀️</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dry Season (Nov-Apr)</h3>
                  <p className="text-sm text-blue-600 font-semibold">Best Weather</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sunny skies and calm seas make this the ideal time for water sports, diving, and beach activities. Temperatures are warm but comfortable.
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Perfect for diving & snorkeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Ideal beach and water conditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Clear waters for photography</span>
                </div>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">🌊</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Monsoon (May-Oct)</h3>
                  <p className="text-sm text-green-600 font-semibold">Budget Friendly</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lower prices and fewer tourists make this season perfect for budget travelers. Green landscapes and occasional tropical showers create a lush environment.
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Discounted accommodation rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Fewer crowds & more privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Lush green islands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Container 3 */}
      <AdSenseContainer />

      {/* Call to Action - Modern */}
      <section className="section-spacing bg-linear-to-r from-blue-600 to-green-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Discover Paradise?
            </h2>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed">
              Plan your unforgettable tropical vacation and experience the magic of Fuvahmulah. Book your adventure today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/accommodation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition shadow-lg-modern"
              >
                Start Planning
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition"
              >
                Contact Us
                <HiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Container 4 */}
      <AdSenseContainer />
    </>
  );
}
