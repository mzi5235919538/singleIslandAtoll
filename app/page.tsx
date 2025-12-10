import Link from 'next/link';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import VideoEmbed from '@/components/VideoEmbed';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        {/* Fixed Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Single Atoll
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover the underwater world with professional diving experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-transparent hover:bg-transparent text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-transparent hover:border-white cursor-pointer">
                Explore Services
              </button>
              <button className="bg-transparent hover:bg-transparent text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-transparent hover:border-white cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Background Image Carousel */}
        <div className="relative h-screen">
          <div className="absolute inset-0 overflow-hidden">
            {/* Image backgrounds */}
            <div className="flex h-full">
              {[
                'https://images.unsplash.com/photo-1542641734-3b824eaabad0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8NHx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
                'https://images.unsplash.com/photo-1632056634558-a6c836149e54?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8M3x8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
                'https://images.unsplash.com/photo-1711238549189-e562f1dec35e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8OXx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
                'https://images.unsplash.com/photo-1561659569-c2a51a7237f4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8MTZ8fEZ1dmFobXVsYWh8ZW58MHx8fHwxNzY1MzkyOTQ1fDA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
              ].map((image, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }} />
                  <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50" />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-30 cursor-pointer backdrop-blur-sm border border-white/20">
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-30 cursor-pointer backdrop-blur-sm border border-white/20">
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {[0, 1, 2, 3].map((index) => (
              <button key={index} className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === 0 ? 'bg-white scale-110' : 'bg-white/40'}`} />
            ))}
          </div>

          {/* Quick Access Cards */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-4 z-30">
            <button className="bg-transparent hover:bg-transparent text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-transparent hover:border-white cursor-pointer">
              View Packages
            </button>
            <button className="bg-transparent hover:bg-transparent text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-transparent hover:border-white cursor-pointer">
              Diving Courses
            </button>
            <button className="bg-transparent hover:bg-transparent text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-transparent hover:border-white cursor-pointer">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Video */}
            <div className="animate-slideInLeft order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden shadow-xl-modern border border-gray-100">
                <VideoEmbed
                  provider="youtube"
                  videoId="dvqMvd3DaMY"
                  title="Single Atoll Maldives - Complete Travel Guide"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="animate-slideInRight space-y-6">
              <div>
                <h2 className="section-title text-left mb-4 text-primary font-bold">Watch Single Atoll in 4K</h2>
                <p className="text-xl text-text-dark font-medium">Experience the raw beauty of our island paradise through stunning cinematic footage.</p>
              </div>

              <p className="text-text-dark leading-relaxed font-medium">
                Discover the pristine beaches, vibrant coral reefs, and authentic island culture that make Single Atoll truly special. Our comprehensive travel guide showcases everything from world-class diving spots to hidden local gems.
              </p>

              <ul className="space-y-3">
                {[
                  'Crystal clear turquoise waters',
                  'Breathtaking sunset views',
                  'Diverse marine life and coral gardens',
                  'Authentic local experiences',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-success bg-opacity-20 flex items-center justify-center">
                      <span className="text-success font-bold text-sm">✓</span>
                    </span>
                    <span className="text-text-dark font-medium">{item}</span>
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
            <h2 className="section-title mb-4 text-text-dark">About Single Atoll</h2>
            <p className="section-subtitle">The Jewel of Single Island Atoll, Maldives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏝️',
                title: 'Your Paradise Awaits',
                description:
                  'Single Island Atoll is the southernmost atoll in the Maldives. With pristine beaches, world-class dive sites, and authentic island culture, it offers an unforgettable tropical experience.',
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
                <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-dark leading-relaxed">{item.description}</p>
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
            <h2 className="section-title mb-4 text-text-dark">Plan Your Perfect Adventure</h2>
            <p className="section-subtitle">
              Everything you need to explore, stay, dine, and experience Single Atoll
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
