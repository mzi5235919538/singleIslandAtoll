import Link from 'next/link';
import { HiArrowLeft, HiHeart, HiStar, HiSparkles, HiTrendingUp } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Single Atoll - Our Mission & Vision',
  description: 'Learn about Single Atoll mission to provide the most authentic, comprehensive guide to island living and diving in the Maldives.',
};

export default function About() {
  const values = [
    {
      icon: HiHeart,
      title: 'Authenticity',
      description: 'We showcase real local experiences, not corporate resorts. Every listing is carefully curated for genuine island living.',
    },
    {
      icon: HiStar,
      title: 'Quality',
      description: 'High-resolution photography and in-depth descriptions help you make informed decisions about where to stay and what to do.',
    },
    {
      icon: HiSparkles,
      title: 'Expertise',
      description: 'Our team understands island tourism. We provide local insights, travel tips, and practical guides for maximum enjoyment.',
    },
    {
      icon: HiTrendingUp,
      title: 'Reliability',
      description: 'We partner only with verified, quality service providers. Your trust is our most valuable asset.',
    },
  ];

  const features = [
    'Comprehensive accommodations directory with 20+ verified guest houses',
    'Detailed dive site guides with underwater photography and experience levels',
    'Local restaurant and dining recommendations with price breakdowns',
    'Activity centers and water sports operators with booking information',
    'Real traveler insights and practical travel guides',
    'Direct inquiry system connecting you with service providers',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About Single Atoll
            </h1>
            <p className="text-xl text-blue-50 mb-6 leading-relaxed">
              We&apos;re on a mission to be the definitive resource for travelers seeking authentic island experiences and world-class diving in the Maldives.
            </p>
            <p className="text-lg text-blue-100">
              Single Atoll is your trusted hub connecting travelers with verified local accommodations, dive centers, and authentic experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Single Atoll was created to solve a real problem: travelers and divers couldn&apos;t find comprehensive, authentic information about island accommodations and diving opportunities in one place.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instead of scattered information across multiple websites, we built a centralized hub that brings together verified accommodations, dive operators, restaurants, and local expertise—all on one platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our focus is on quality over quantity. Every listing is carefully vetted. Every photo is high-resolution. Every description is detailed and honest.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that travelers deserve accurate, helpful information to make the best decisions about their island experience.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Our Focus</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">Authentic Island Living</p>
                  <p className="text-gray-700 mt-2">Beyond resorts. Real local experiences.</p>
                </div>
                <div className="border-t border-blue-200 pt-6">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Service Area</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">Single Atoll, Maldives</p>
                  <p className="text-gray-700 mt-2">A diving paradise with world-class sites and local hospitality.</p>
                </div>
                <div className="border-t border-blue-200 pt-6">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Coverage</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2\">20+ Accommodations</p>
                  <p className="text-gray-700 mt-2\">Plus dive centers, restaurants, and activities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section-spacing bg-gray-50">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide the most comprehensive, authentic, and reliable guide to accommodations, diving, and authentic experiences in the Maldives—making island discovery easy, transparent, and unforgettable.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted, go-to resource for travelers seeking authentic island living and world-class diving in the Maldives—where quality information and verified partners create unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="section-title text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-linear-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-spacing bg-gray-50">
        <div className="section-container max-w-4xl">
          <h2 className="section-title mb-12">What We Offer</h2>
          <div className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="section-title text-center mb-12">Why Choose Single Atoll?</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Quality</h3>
              <p className="text-gray-700">
                We don&apos;t list every accommodation—we list the best. Our team personally vets every property to ensure quality standards.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Content</h3>
              <p className="text-gray-700">
                High-resolution photography, detailed descriptions, practical travel guides, and authentic reviews help you make confident decisions.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Connections</h3>
              <p className="text-gray-700">
                Our direct inquiry system connects you instantly with accommodations and service providers—no third-party booking fees or intermediaries.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-700">
                Our team understands island tourism intimately. We provide insider tips, local insights, and practical knowledge to enhance your experience.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent & Honest</h3>
              <p className="text-gray-700">
                No hidden commissions affecting our recommendations. Every review and rating is honest and independent. Your trust is everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg-modern">
        <div className="section-container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Island Experience?</h2>
          <p className="text-xl text-blue-50 mb-8 leading-relaxed">
            Browse our accommodations, dive sites, and dining guides. Submit an inquiry to connect directly with service providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-white inline-flex items-center justify-center gap-2 font-semibold">
              Explore Now
              <HiArrowLeft size={20} className="rotate-180" />
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white rounded-lg font-semibold transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline">
          <HiArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </>
  );
}
