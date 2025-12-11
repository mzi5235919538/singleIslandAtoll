'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import AdSenseContainer from '@/components/AdSenseContainer';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import GalleryGrid from '@/components/GalleryGrid';

const HERO_CAROUSEL = [
  {
    image: 'https://images.unsplash.com/photo-1542641734-3b824eaabad0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8NHx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Discover Paradise',
    subtitle: 'Experience the untamed beauty of Tiger Shark Island',
  },
  {
    image: 'https://images.unsplash.com/photo-1632056634558-a6c836149e54?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8M3x8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'World-Class Diving',
    subtitle: 'Encounter legendary tiger sharks and marine life',
  },
  {
    image: 'https://images.unsplash.com/photo-1711238549189-e562f1dec35e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8OXx8RnV2YWhtdWxhaHxlbnwwfHx8fDE3NjUzOTI5NDV8MA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Crystal Waters',
    subtitle: 'Pristine beaches and turquoise lagoons await',
  },
  {
    image: 'https://images.unsplash.com/photo-1561659569-c2a51a7237f4?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMDk3fDB8MXxzZWFyY2h8MTZ8fEZ1dmFobXVsYWh8ZW58MHx8fHwxNzY1MzkyOTQ1fDA&ixlib=rb-4.1.0&q=85&w=1920&h=1080&fit=crop',
    title: 'Adventure Awaits',
    subtitle: 'Plan your unforgettable tropical vacation',
  },
];

const GALLERY_IMAGES = [
  { id: '1', src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop', alt: 'Sunset Beach', title: 'Golden Sunset' },
  { id: '2', src: 'https://images.unsplash.com/photo-1557525259-f5b2c6b1acb6?w=500&h=500&fit=crop', alt: 'Coral Reef', title: 'Vibrant Reefs' },
  { id: '3', src: 'https://images.unsplash.com/photo-1549144149-6c86dc41eec5?w=500&h=500&fit=crop', alt: 'Beach Paradise', title: 'Paradise Found' },
  { id: '4', src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop', alt: 'Clear Waters', title: 'Crystal Clear' },
  { id: '5', src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&h=500&fit=crop', alt: 'Marine Life', title: 'Underwater World' },
  { id: '6', src: 'https://images.unsplash.com/photo-1486299267070-83823e5ca538?w=500&h=500&fit=crop', alt: 'Island Living', title: 'Island Bliss' },
];

const TESTIMONIALS = [
  {
    quote: 'An absolutely unforgettable experience! The tiger shark diving was thrilling and safe. The guides were professional and the whole team made us feel welcome.',
    author: 'James Mitchell',
    title: 'Adventure Traveler',
    rating: 5,
  },
  {
    quote: 'Best vacation of my life. Fuvahmulah is truly a hidden gem. Everything was perfectly organized, from accommodation to meals to activities.',
    author: 'Sarah Johnson',
    title: 'Family Travel Blogger',
    rating: 5,
  },
  {
    quote: 'The combination of world-class diving, authentic culture, and genuine hospitality makes this place special. Highly recommended!',
    author: 'Michael Chen',
    title: 'Diving Instructor',
    rating: 5,
  },
  {
    quote: 'Professional service, stunning natural beauty, and unforgettable marine encounters. This is exactly what paradise should feel like.',
    author: 'Emma Rodriguez',
    title: 'Marine Biologist',
    rating: 5,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_CAROUSEL.length) % HERO_CAROUSEL.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL.length);
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Backgrounds */}
        {HERO_CAROUSEL.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {HERO_CAROUSEL[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
              {HERO_CAROUSEL[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/accommodation" text="Book Now" variant="primary" size="large" />
              <CTAButton href="/attractions" text="Explore" variant="outline" size="large" />
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm border border-white/20"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-30 backdrop-blur-sm border border-white/20"
          aria-label="Next slide"
        >
          <HiChevronRight className="h-8 w-8" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {HERO_CAROUSEL.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-110 w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <AdSenseContainer />

      {/* Featured Offerings Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <SectionHeading
            title="Explore Fuvahmulah"
            subtitle="Everything you need for an unforgettable tropical adventure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🏨"
              title="Accommodation"
              description="Luxury resorts, boutique hotels, and comfortable guest houses for every budget and preference."
              href="/accommodation"
            />
            <FeatureCard
              icon="🤿"
              title="Diving & Activities"
              description="World-class diving sites, snorkeling, fishing, and thrilling water sports with professional guides."
              href="/activities"
            />
            <FeatureCard
              icon="🍽️"
              title="Dining"
              description="Authentic Maldivian cuisine and international dishes at excellent restaurants and cafes."
              href="/dining"
            />
            <FeatureCard
              icon="🏝️"
              title="Attractions"
              description="Natural wonders, historical sites, and iconic landmarks that make Fuvahmulah truly special."
              href="/attractions"
            />
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Why Choose Fuvahmulah Section */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <SectionHeading
            title="Why Choose Fuvahmulah?"
            subtitle="The premier destination for authentic island experiences and world-class diving"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">🐯</div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Tiger Shark Diving</h3>
              <p className="text-text-light leading-relaxed">
                Experience legendary tiger shark encounters in the world&apos;s premier diving destination with the highest success rates.
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Pristine Waters</h3>
              <p className="text-text-light leading-relaxed">
                Crystal-clear turquoise lagoons, vibrant coral reefs, and diverse marine life make diving unforgettable.
              </p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">Local Culture</h3>
              <p className="text-text-light leading-relaxed">
                Experience authentic Maldivian hospitality, tradition, and genuine island living with warm locals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Gallery Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <SectionHeading
            title="Captured Moments"
            subtitle="Witness the breathtaking beauty of Fuvahmulah through our lens"
          />
          <GalleryGrid images={GALLERY_IMAGES} columns={3} />
          <div className="text-center mt-12">
            <Link href="/attractions" className="btn-primary inline-flex items-center gap-2">
              View Full Gallery
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Testimonials Section */}
      <section className="section-spacing bg-linear-to-b from-white to-blue-50">
        <div className="section-container">
          <SectionHeading
            title="What Guests Say"
            subtitle="Real experiences from real travelers who discovered paradise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Travel Tips Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <SectionHeading
            title="Travel Planning"
            subtitle="Essential information for planning your perfect Fuvahmulah getaway"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-elevated p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                <span className="text-3xl">☀️</span> Best Time to Visit
              </h3>
              <div className="space-y-3 text-text-light">
                <p><span className="font-semibold text-text-dark">Dry Season (Nov-Apr):</span> Perfect weather for diving and beach activities</p>
                <p><span className="font-semibold text-text-dark">Monsoon (May-Oct):</span> Budget-friendly with fewer crowds and lush landscapes</p>
                <p className="pt-2 text-sm">Average temperature: 26-30°C (79-86°F) year-round</p>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                <span className="text-3xl">📋</span> Travel Requirements
              </h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Valid passport (minimum 6 months validity)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Visa: 30 days free visa on arrival for most nationalities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Currency: Maldivian Rufiyaa (MVR) / USD widely accepted</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated p-8 border-l-4 border-accent-light">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                <span className="text-3xl">✈️</span> Getting There
              </h3>
              <p className="text-text-light mb-3">
                Fuvahmulah is easily accessible by domestic flight from Malé International Airport (IBR) to Fuvahmulah Airport (GAN).
              </p>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• Flight time: Approximately 1 hour</li>
                <li>• Distance from Malé: 270 km (170 miles)</li>
                <li>• Airport transfers available upon request</li>
              </ul>
            </div>

            <div className="card-elevated p-8 border-l-4 border-primary-light">
              <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center gap-2">
                <span className="text-3xl">🎒</span> What to Bring
              </h3>
              <ul className="space-y-2 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Reef-safe sunscreen and sun protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Dive certification card (if certified)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Light, breathable clothing and beach wear</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span>Underwater camera for capturing memories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* FAQ Section */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about visiting Fuvahmulah"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'Is Fuvahmulah good for diving?',
                a: 'Absolutely! Fuvahmulah is renowned as one of the world\'s premier diving destinations, especially for tiger shark encounters with success rates up to 95%.',
              },
              {
                q: 'What marine life can I see?',
                a: 'Tiger sharks, hammerheads, thresher sharks, whale sharks, manta rays, and countless colorful reef fish and coral species.',
              },
              {
                q: 'Is it safe for beginners?',
                a: 'Yes! We offer diving courses for all levels, and snorkeling is perfect for non-divers. All activities are supervised by certified professionals.',
              },
              {
                q: 'What\'s the accommodation like?',
                a: 'From luxury resorts to cozy guest houses, there are options for all budgets. Most offer world-class amenities and authentic island experiences.',
              },
              {
                q: 'What\'s the best season?',
                a: 'November to April offers the best weather for diving. May to October is budget-friendly with occasional rain but fewer tourists.',
              },
              {
                q: 'How do I get there?',
                a: 'Fly into Malé International Airport, then take a 1-hour domestic flight to Fuvahmulah. We can arrange airport transfers.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-elevated p-6">
                <h3 className="text-lg font-bold text-text-dark mb-3 flex items-start gap-2">
                  <span className="text-primary mt-1">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-text-light ml-6 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-light mb-4">Can&apos;t find the answer you&apos;re looking for?</p>
            <CTAButton href="/contact" text="Contact Our Team" variant="primary" />
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Final CTA Section */}
      <section className="section-spacing bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Discover Paradise?
            </h2>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed">
              Plan your unforgettable tropical adventure to Fuvahmulah. Experience world-class diving, pristine beaches, and authentic island culture. Book your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/accommodation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition shadow-lg-modern"
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

      <AdSenseContainer />
    </>
  );
}
