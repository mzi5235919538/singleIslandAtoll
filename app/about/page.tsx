import { HiArrowRight, HiHeart, HiStar, HiSparkles, HiTrendingUp } from 'react-icons/hi';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';
import AdSenseContainer from '@/components/AdSenseContainer';

export const metadata: Metadata = {
  title: 'About Fuvahmulah - Our Mission & Vision | Tiger Shark Diving Destination',
  description: 'Discover our mission to provide the most comprehensive guide to world-class diving, authentic island experiences, and premium accommodations in Fuvahmulah.',
  keywords: 'About Fuvahmulah, tiger shark diving, island tourism, maldives travel guide',
};

export default function About() {
  const values = [
    {
      icon: '❤️',
      title: 'Authenticity',
      description: 'We showcase real local experiences, genuine hospitality, and authentic island living—not corporate tourist traps.',
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'High-resolution photography, detailed descriptions, and verified providers ensure you get the best of Fuvahmulah.',
    },
    {
      icon: '✨',
      title: 'Expert Knowledge',
      description: 'Our team understands tiger shark diving, island tourism, and local culture intimately for unmatched insights.',
    },
    {
      icon: '📈',
      title: 'Reliability',
      description: 'We partner only with certified, quality-verified businesses. Your safety and satisfaction are our priorities.',
    },
  ];

  const features = [
    'World-class tiger shark diving guides with 95% success rates',
    'Comprehensive accommodation directory (resorts, hotels, guest houses)',
    'Detailed activity center recommendations with booking information',
    'Authentic restaurant and dining guides with local specialties',
    'Marine life encyclopedia with photography and behavior guides',
    'Practical travel planning guides and insider tips',
    'Direct connections to verified service providers',
    'Safety certifications and trust badges verification',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative section-container py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              About Fuvahmulah
            </h1>
            <p className="text-2xl text-blue-50 mb-6 leading-relaxed font-light">
              Your definitive guide to the world&apos;s premier tiger shark diving destination and authentic island experiences.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              We are committed to connecting travelers with verified, world-class diving experiences, luxury accommodations, and genuine Maldivian hospitality.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Our Story Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft order-last lg:order-first">
              <h2 className="text-4xl font-bold text-text-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-text-dark leading-relaxed">
                <p>
                  Fuvahmulah was created to solve a real problem: travelers couldn&apos;t find comprehensive, verified information about tiger shark diving, accommodations, and authentic experiences in one trusted source.
                </p>
                <p>
                  We saw travelers scattered across multiple websites, reading inconsistent reviews, uncertain about dive operators, and missing the true magic of the island. We decided to build something better.
                </p>
                <p>
                  Our platform brings together verified dive operators, premium accommodations, authentic dining experiences, and local expertise—all curated with personal knowledge and professional standards.
                </p>
                <p className="font-semibold text-primary">
                  Every listing is personally vetted. Every photo is high-resolution. Every description is honest and detailed. That&apos;s our promise.
                </p>
              </div>
            </div>
            <div className="animate-slideInRight">
              <div className="card-elevated p-12 bg-linear-to-br from-blue-50 to-accent/5">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our Focus</p>
                    <p className="text-4xl font-bold text-text-dark mt-2">Tiger Shark Diving</p>
                    <p className="text-text-light mt-2">World&apos;s highest success rates for encounters</p>
                  </div>
                  <div className="border-t border-primary/10 pt-8">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Location</p>
                    <p className="text-3xl font-bold text-text-dark mt-2">Fuvahmulah, Maldives</p>
                    <p className="text-text-light mt-2">The southernmost atoll, a diving paradise</p>
                  </div>
                  <div className="border-t border-primary/10 pt-8">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">Coverage</p>
                    <p className="text-3xl font-bold text-text-dark mt-2">50+ Verified Partners</p>
                    <p className="text-text-light mt-2">Diving, hotels, restaurants, and activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Mission & Vision */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="What drives us every single day"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated p-10 border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Mission</h3>
              <p className="text-text-light leading-relaxed text-lg">
                To provide the world&apos;s most comprehensive, authentic, and reliable guide to tiger shark diving, premium accommodations, and genuine island experiences in Fuvahmulah—making travel discovery transparent, easy, and unforgettable.
              </p>
            </div>
            <div className="card-elevated p-10 border-t-4 border-accent">
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
              <p className="text-text-light leading-relaxed text-lg">
                To become the most trusted, go-to resource for divers and travelers worldwide—where expert knowledge, verified partners, and authentic local insights create life-changing island experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Core Values Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles guiding every decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card-elevated p-8 text-center hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{value.title}</h3>
                <p className="text-text-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* What We Offer */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <SectionHeading
            title="What We Offer"
            subtitle="Everything you need for the perfect Fuvahmulah experience"
          />

          <div className="bg-white rounded-2xl shadow-lg-modern border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-text-dark font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Why Choose Us */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-4xl">
          <SectionHeading
            title="Why Choose Us?"
            subtitle="What sets Fuvahmulah apart"
            centered
          />

          <div className="space-y-6">
            <div className="card-elevated p-8 border-l-4 border-primary flex gap-6">
              <div className="text-4xl shrink-0">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Curated Excellence</h3>
                <p className="text-text-dark leading-relaxed">
                  We don&apos;t list every dive operator—we partner with the certified best. Every recommendation is personally vetted and verified for safety, quality, and expertise.
                </p>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-accent flex gap-6">
              <div className="text-4xl shrink-0">📸</div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Professional Content</h3>
                <p className="text-text-dark leading-relaxed">
                  High-resolution underwater photography, detailed descriptions, honest reviews, and practical guides help you make confident decisions about your adventure.
                </p>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-success flex gap-6">
              <div className="text-4xl shrink-0">🤝</div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Direct Connections</h3>
                <p className="text-text-dark leading-relaxed">
                  Our inquiry system connects you instantly with dive operators, hotels, and restaurants—no intermediaries, no hidden fees, no unnecessary markups.
                </p>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-purple-500 flex gap-6">
              <div className="text-4xl shrink-0">🧠</div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Local Expertise</h3>
                <p className="text-text-dark leading-relaxed">
                  Our team understands tiger shark diving intimately. We provide insider knowledge, marine life guides, practical tips, and cultural insights that guidebooks miss.
                </p>
              </div>
            </div>

            <div className="card-elevated p-8 border-l-4 border-orange-500 flex gap-6">
              <div className="text-4xl shrink-0">✨</div>
              <div>
                <h3 className="text-xl font-bold text-text-dark mb-2">Transparent & Honest</h3>
                <p className="text-text-dark leading-relaxed">
                  No hidden agendas, no paid biased rankings, no undisclosed sponsorships. Your trust is our most valuable asset. Every review is genuine and independent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Team Section */}
      <section className="section-spacing bg-linear-to-b from-blue-50 to-white">
        <div className="section-container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Passionate divers, tourism experts, and island enthusiasts"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">🤿</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Certified Divers</h3>
              <p className="text-text-light text-sm">With years of tiger shark diving experience and marine biology knowledge</p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Travel Experts</h3>
              <p className="text-text-light text-sm">Understanding island tourism, local culture, and traveler needs deeply</p>
            </div>
            <div className="card-elevated p-8 text-center">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">Tech Professionals</h3>
              <p className="text-text-light text-sm">Building an intuitive platform that connects travelers with dreams</p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Call to Action */}
      <section className="section-spacing bg-gradient-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Discover Paradise?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Whether you&apos;re seeking thrilling tiger shark dives, luxury accommodations, or authentic island experiences, we&apos;re here to help you plan the perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition shadow-lg-modern"
            >
              Start Exploring
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
      </section>

      <AdSenseContainer />
    </>
  );
}
