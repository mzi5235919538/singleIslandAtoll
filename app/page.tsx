import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import CategoryCard from '@/components/CategoryCard';
import PlaceCard from '@/components/PlaceCard';
import GalleryGrid from '@/components/GalleryGrid';
import TestimonialCard from '@/components/TestimonialCard';
import { IMAGES } from '@/lib/images';

const HERO_SLIDES = [
  {
    id: 1,
    // TODO: Replace with real Fuvahmulah diving photo
    image: IMAGES.hero.slide1,
    title: 'Dive into Adventure',
    subtitle: 'Discover the Untamed Beauty of Tiger Shark Island',
  },
  {
    id: 2,
    // TODO: Replace with real Fuvahmulah beach photo
    image: IMAGES.hero.slide2,
    title: 'Experience Paradise',
    subtitle: 'World-Class Diving in Pristine Waters',
  },
  {
    id: 3,
    // TODO: Replace with real Fuvahmulah island view
    image: IMAGES.hero.slide3,
    title: 'Explore Fuvahmulah',
    subtitle: 'The Maldives\' Premier Diving Destination',
  },
  {
    id: 4,
    // TODO: Replace with real tourist/cultural photo
    image: IMAGES.hero.slide4,
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
    // TODO: Replace with real Tiger Point photo
    image: IMAGES.highlights.tigerPointReef,
    featured: 'Premium Diving, Tiger Sharks',
    href: '/place/tiger-point-reef',
  },
  {
    title: 'Vasho Veyo Beach',
    description: 'Pristine sandy beach with crystal clear waters perfect for relaxation',
    location: 'South Beach',
    category: 'Attractions',
    categoryIcon: '🏖️',
    // TODO: Replace with real Vasho Veyo Beach photo
    image: IMAGES.highlights.vashoVeyoBeach,
    featured: 'Beach, Swimming',
    href: '/place/vasho-veyo-beach',
  },
  {
    title: 'Hammerhead Point',
    description: 'Premier diving location famous for hammerhead shark encounters',
    location: 'East Reef',
    category: 'Diving',
    categoryIcon: '🤿',
    // TODO: Replace with real Hammerhead Point photo
    image: IMAGES.highlights.hammerheadPoint,
    featured: 'Hammerhead Sharks',
    href: '/place/hammerhead-point',
  },
  {
    title: 'Fuvahmulah Resort & Spa',
    description: 'Luxury 5-star resort with world-class amenities and spa services',
    location: 'Thinadhoo Beach',
    category: 'Stay',
    categoryIcon: '⭐',
    // TODO: Replace with real resort photo
    image: IMAGES.highlights.fuvahmulahResort,
    featured: 'Luxury, Spa',
    href: '/place/fuvahmulah-resort-spa',
  },
  {
    title: 'Reef Restaurant',
    description: 'Premium beachfront dining with fresh seafood and sunset views',
    location: 'Thinadhoo Beach',
    category: 'Dining',
    categoryIcon: '🍽️',
    // TODO: Replace with real restaurant photo
    image: IMAGES.highlights.reefRestaurant,
    featured: 'Fresh Seafood',
    href: '/place/reef-restaurant',
  },
  {
    title: 'Sunset Cruise',
    description: 'Romantic evening cruises with scenic views and photography opportunities',
    location: 'Main Beach',
    category: 'Activity',
    categoryIcon: '🚤',
    // TODO: Replace with real sunset/cruise photo
    image: IMAGES.highlights.sunsetCruise,
    featured: 'Sunset, Romance',
    href: '/place/sunset-cruise',
  },
];

const TESTIMONIALS = [
  {
    quote: 'The tiger shark diving experience was absolutely incredible! Professional guides and pristine waters.',
    author: 'John Smith',
    title: 'Adventure Enthusiast',
    rating: 5,
    // TODO: Replace with real user photo or avatar
    image: IMAGES.testimonials.johnSmith,
  },
  {
    quote: 'Fuvahmulah offers the most authentic island experience in the Maldives. Highly recommended!',
    author: 'Sarah Johnson',
    title: 'Travel Blogger',
    rating: 5,
    // TODO: Replace with real user photo or avatar
    image: IMAGES.testimonials.sarahJohnson,
  },
  {
    quote: 'The local hospitality and stunning natural beauty left us speechless. We\'ll definitely return!',
    author: 'Michael Chen',
    title: 'Photographer',
    rating: 5,
    // TODO: Replace with real user photo or avatar
    image: IMAGES.testimonials.michaelChen,
  },
  {
    quote: 'Best diving destination I\'ve ever visited. Saw tiger sharks, hammerheads, and so much more!',
    author: 'Emma Wilson',
    title: 'Certified Diver',
    rating: 5,
    // TODO: Replace with real user photo or avatar
    image: IMAGES.testimonials.emmaWilson,
  },
];

const GALLERY_IMAGES = [
  {
    id: '1',
    // TODO: Replace with real Fuvahmulah landscape photo
    src: IMAGES.gallery.landscapes[0],
    alt: 'Sunset Beach',
    title: 'Golden Sunset',
  },
  {
    id: '2',
    // TODO: Replace with real underwater photo
    src: IMAGES.gallery.underwater[0],
    alt: 'Coral Reef',
    title: 'Vibrant Reefs',
  },
  {
    id: '3',
    // TODO: Replace with real beach photo
    src: IMAGES.gallery.landscapes[1],
    alt: 'Beach Paradise',
    title: 'Paradise Found',
  },
  {
    id: '4',
    // TODO: Replace with real water/landscape photo
    src: IMAGES.gallery.landscapes[2],
    alt: 'Clear Waters',
    title: 'Crystal Clear',
  },
  {
    id: '5',
    // TODO: Replace with real underwater photo
    src: IMAGES.gallery.underwater[1],
    alt: 'Marine Life',
    title: 'Underwater World',
  },
  {
    id: '6',
    // TODO: Replace with real island photo
    src: IMAGES.gallery.landscapes[3],
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
