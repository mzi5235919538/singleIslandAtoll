import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import CategoryCard from '@/components/CategoryCard';
import PlaceCard from '@/components/PlaceCard';
import GalleryGrid from '@/components/GalleryGrid';
import TestimonialCard from '@/components/TestimonialCard';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542641734-3b824eaabad0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8NHx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Dive into Adventure',
    subtitle: 'Discover the Untamed Beauty of Tiger Shark Island',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1632056634558-a6c836149e54?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8M3x8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Experience Paradise',
    subtitle: 'World-Class Diving in Pristine Waters',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1711238549189-e562f1dec35e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8OXx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Explore Fuvahmulah',
    subtitle: 'The Maldives\' Premier Diving Destination',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1561659569-c2a51a7237f4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8MTZ8fEZ1dmFobXVsYWh8ZW58MHx8fHwxNzY1MzkyOTQ1fDA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Create Memories',
    subtitle: 'Unforgettable Island Experiences Await',
  },
];

const CATEGORY_CARDS = [
  {
    title: 'DO',
    description: 'Diving, Surfing, Fishing & Sightseeing Adventures',
    icon: '🤿',
    href: '/activities',
  },
  {
    title: 'STAY',
    description: 'Premium Accommodations & Guesthouses',
    icon: '🏨',
    href: '/accommodation',
  },
  {
    title: 'EAT',
    description: 'Local Cuisine & Fine Dining Experiences',
    icon: '🍽️',
    href: '/dining',
  },
];

const HIGHLIGHTS = [
  {
    title: 'Tiger Point Reef',
    description: 'Experience thrilling tiger shark encounters at this iconic diving spot',
    location: 'North Reef',
    category: 'Diving',
    categoryIcon: '🤿',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    featured: 'Premium Diving, Tiger Sharks',
    href: '/attractions',
  },
  {
    title: 'Vasho Veyo Beach',
    description: 'Pristine sandy beach with crystal clear waters perfect for relaxation',
    location: 'South Beach',
    category: 'Attractions',
    categoryIcon: '🏖️',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    featured: 'Beach, Swimming',
    href: '/attractions',
  },
  {
    title: 'Local Market',
    description: 'Authentic island culture and traditional crafts at the vibrant local market',
    location: 'City Center',
    category: 'Culture',
    categoryIcon: '🎨',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=300&fit=crop',
    featured: 'Local Products',
    href: '/attractions',
  },
  {
    title: 'Freshwater Lake',
    description: 'Unique freshwater lagoons surrounded by lush tropical vegetation',
    location: 'Central Island',
    category: 'Nature',
    categoryIcon: '💧',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    featured: 'Hiking, Nature',
    href: '/attractions',
  },
  {
    title: 'Oceanic Restaurant',
    description: 'World-class dining with fresh seafood and ocean views',
    location: 'City Center',
    category: 'Dining',
    categoryIcon: '🍽️',
    image: 'https://images.unsplash.com/photo-1504674900967-a8f32de4a890?w=400&h=300&fit=crop',
    featured: 'Fresh Seafood',
    href: '/dining',
  },
  {
    title: 'Coral Garden Resort',
    description: 'Luxury accommodation with premium diving packages and spa services',
    location: 'Beachfront',
    category: 'Stay',
    categoryIcon: '🏝️',
    image: 'https://images.unsplash.com/photo-1551921756-5fefe8c9ef14?w=400&h=300&fit=crop',
    featured: 'Luxury, Diving',
    href: '/accommodation',
  },
];

const TESTIMONIALS = [
  {
    quote: 'The tiger shark diving experience was absolutely incredible! Professional guides and pristine waters.',
    author: 'John Smith',
    title: 'Adventure Enthusiast',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    quote: 'Fuvahmulah offers the most authentic island experience in the Maldives. Highly recommended!',
    author: 'Sarah Johnson',
    title: 'Travel Blogger',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: 'The local hospitality and stunning natural beauty left us speechless. We\'ll definitely return!',
    author: 'Michael Chen',
    title: 'Photographer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    quote: 'Best diving destination I\'ve ever visited. Saw tiger sharks, hammerheads, and so much more!',
    author: 'Emma Wilson',
    title: 'Certified Diver',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const GALLERY_IMAGES = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop',
    alt: 'Sunset Beach',
    title: 'Golden Sunset',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=500&h=500&fit=crop',
    alt: 'Coral Reef',
    title: 'Vibrant Reefs',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=500&fit=crop',
    alt: 'Beach Paradise',
    title: 'Paradise Found',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    alt: 'Clear Waters',
    title: 'Crystal Clear',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=500&fit=crop',
    alt: 'Marine Life',
    title: 'Underwater World',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1491250967868-94e055118857?w=500&h=500&fit=crop',
    alt: 'Island Living',
    title: 'Island Bliss',
  },
];

export const metadata = {
  title: 'Fuvahmulah - Tiger Shark Diving & Island Travel Guide',
  description:
    'Discover Fuvahmulah, the Maldives\' premier tiger shark diving destination. Find accommodations, dining, activities, and travel guides for your island adventure.',
  keywords:
    'Fuvahmulah, tiger shark diving, Maldives, travel guide, accommodations, diving packages',
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Full-Screen Hero Carousel */}
      <HeroCarousel slides={HERO_SLIDES} />

      {/* Explore By Category Section */}
      <section className="section-spacing bg-linear-to-b from-white to-blue-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Explore by Interest</h2>
            <p className="section-subtitle">
              Discover everything Fuvahmulah has to offer from thrilling adventures to relaxing retreats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {CATEGORY_CARDS.map((card) => (
              <CategoryCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Highlights in Fuvahmulah</h2>
            <p className="section-subtitle">
              Explore the island\'s best destinations, from pristine beaches to world-class dining and luxury accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {HIGHLIGHTS.map((place, idx) => (
              <PlaceCard key={idx} {...place} buttonText="Discover" />
            ))}
          </div>
        </div>
      </section>

      {/* Captured Moments Gallery */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Captured Moments</h2>
            <p className="section-subtitle">
              Experience the beauty of Fuvahmulah through our lens and guest photos
            </p>
          </div>

          <GalleryGrid images={GALLERY_IMAGES} columns={3} />

          <div className="text-center mt-12">
            <Link href="/attractions" className="btn-primary inline-flex items-center gap-2">
              View Full Gallery
              <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">What Guests Say</h2>
            <p className="section-subtitle">
              Real experiences from travelers who discovered the magic of Fuvahmulah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing bg-linear-to-r from-primary to-accent">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Fuvahmulah Adventure?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Book your diving packages, accommodations, and island experiences today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white"
            >
              Book Now
              <HiArrowRight size={18} />
            </Link>
            <Link
              href="/accommodation"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Explore Stays
              <HiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Hero Carousel Component
function HeroCarousel({ slides }: { slides: typeof HERO_SLIDES }) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />

            {/* Hero Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fadeInUp">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-semibold">Scroll to Explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
