import Link from 'next/link';
import { HiArrowRight, HiPhone, HiGlobeAlt } from 'react-icons/hi';
import AdSenseContainer from '@/components/AdSenseContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inns & Small Hotels in Single Atoll - Cozy Island Accommodation',
  description: 'Discover charming inns and small hotels in Single Atoll. Personal service and intimate island atmosphere.',
};

interface Inn {
  id: number;
  name: string;
  owner: string;
  description: string;
  location: string;
  type: 'Inn' | 'Small Hotel' | 'Boutique Guesthouse';
  amenities: string[];
  contact: string;
  website?: string;
  image_emoji: string;
  rooms: number;
  price_per_night: string;
  specialty?: string;
}

const inns: Inn[] = [
  {
    id: 1,
    name: "Island Breeze Inn",
    owner: 'Nasrin Hassan',
    description: 'Charming beachfront inn with sea-view rooms and personalized service. Perfect for romantic getaways and beach lovers.',
    location: 'Thinadhoo, Single Atoll',
    type: 'Inn',
    amenities: ['Sea View', 'Restaurant', 'WiFi', 'Laundry', 'Romantic Ambiance'],
    contact: '+960 789-1001',
    website: 'https://islandbreezeinn.mv',
    image_emoji: '🌴',
    rooms: 8,
    price_per_night: '$55-75',
    specialty: 'Romantic Escapes'
  },
  {
    id: 2,
    name: "Fisherman's Haven Inn",
    owner: 'Ali Rashid',
    description: 'Traditional-style inn with authentic local charm. Home-cooked meals and friendly atmosphere perfect for cultural immersion.',
    location: 'Felidhoo, Single Atoll',
    type: 'Inn',
    amenities: ['Local Cuisine', 'WiFi', 'Fishing Trips', 'Traditional Decor', 'Community Dining'],
    contact: '+960 789-1002',
    website: 'https://fishermanshaven.mv',
    image_emoji: '🎣',
    rooms: 6,
    price_per_night: '$45-60',
    specialty: 'Fishing & Culture'
  },
  {
    id: 3,
    name: "Coral Cove Boutique Inn",
    owner: 'Maldha Ahmed',
    description: 'Intimate boutique inn with hand-decorated rooms. Each room tells a story of island life and local heritage.',
    location: 'Ukulhas, Single Atoll',
    type: 'Boutique Guesthouse',
    amenities: ['Boutique Rooms', 'WiFi', 'Art Gallery', 'Spa Services', 'Personalized Tours'],
    contact: '+960 789-1003',
    website: 'https://coralcoveboutique.mv',
    image_emoji: '🎨',
    rooms: 5,
    price_per_night: '$60-80',
    specialty: 'Artistic & Cultural'
  },
  {
    id: 4,
    name: "Sunset Harbor Inn",
    owner: 'Ibrahim Mohammed',
    description: 'Waterfront inn with sunset views and relaxed island vibe. Great for families and small groups looking for comfort.',
    location: 'Dhuvaafaru, Single Atoll',
    type: 'Inn',
    amenities: ['Sunset View', 'Family Suites', 'WiFi', 'Playground', 'Restaurant'],
    contact: '+960 789-1004',
    website: 'https://sunsetharbor.mv',
    image_emoji: '🌅',
    rooms: 10,
    price_per_night: '$50-70',
    specialty: 'Family-Friendly'
  },
  {
    id: 5,
    name: "Dive Master's Inn",
    owner: 'Rasheed Hassan',
    description: 'Specialized accommodation for diving enthusiasts. Direct access to dive center and expert diving guides on staff.',
    location: 'Thinadhoo, Single Atoll',
    type: 'Small Hotel',
    amenities: ['Dive Center', 'Gear Storage', 'Dive Briefings', 'WiFi', 'Dive Buddies Network'],
    contact: '+960 789-1005',
    website: 'https://divemasterinn.mv',
    image_emoji: '🤿',
    rooms: 12,
    price_per_night: '$55-75',
    specialty: 'Diving Paradise'
  },
  {
    id: 6,
    name: "Lagoon Breeze Inn",
    owner: 'Zainab Ali',
    description: 'Peaceful lagoon-view inn with tranquil gardens. Ideal for those seeking relaxation and natural beauty.',
    location: 'Felidhoo, Single Atoll',
    type: 'Inn',
    amenities: ['Lagoon View', 'Garden', 'WiFi', 'Meditation Space', 'Yoga Classes'],
    contact: '+960 789-1006',
    website: 'https://lagoonbreezeinn.mv',
    image_emoji: '🧘',
    rooms: 7,
    price_per_night: '$50-65',
    specialty: 'Wellness & Relaxation'
  },
  {
    id: 7,
    name: "Heritage Inn Single Atoll",
    owner: 'Amir Hassan',
    description: 'Historic small hotel preserving island heritage. Museum-quality decor with stories of Single Atoll woven throughout.',
    location: 'Ukulhas, Single Atoll',
    type: 'Small Hotel',
    amenities: ['Heritage Decor', 'Museum Tours', 'WiFi', 'Cultural Events', 'Local Guides'],
    contact: '+960 789-1007',
    website: 'https://heritageinn.mv',
    image_emoji: '🏛️',
    rooms: 9,
    price_per_night: '$55-70',
    specialty: 'Cultural Heritage'
  },
  {
    id: 8,
    name: "Manta Reef Inn",
    owner: 'Lamya Ahmed',
    description: 'Eco-friendly inn dedicated to marine conservation. Snorkeling packages and educational programs about reef protection.',
    location: 'Dhuvaafaru, Single Atoll',
    type: 'Boutique Guesthouse',
    amenities: ['Eco-Friendly', 'Snorkeling', 'Marine Education', 'WiFi', 'Conservation Tours'],
    contact: '+960 789-1008',
    website: 'https://mantareefinn.mv',
    image_emoji: '🐠',
    rooms: 6,
    price_per_night: '$50-70',
    specialty: 'Eco-Tourism'
  },
];

export default function InnsPage() {
  const groupedByType = {
    'Inn': inns.filter(i => i.type === 'Inn'),
    'Small Hotel': inns.filter(i => i.type === 'Small Hotel'),
    'Boutique Guesthouse': inns.filter(i => i.type === 'Boutique Guesthouse'),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">
              🏨 Inns & Boutique Hotels
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Charming Inns & Small Hotels
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience the charm and personal service of Single Atoll&apos;s intimate accommodations. Each inn has its own unique character and specialty.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Why Choose Small Hotels */}
      <section className="section-spacing bg-linear-to-b from-purple-50 to-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-sm text-gray-600">Dedicated staff who know your preferences and go the extra mile.</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Specializations</h3>
              <p className="text-sm text-gray-600">Each inn focuses on a unique theme - diving, culture, wellness, etc.</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unique Character</h3>
              <p className="text-sm text-gray-600">Hand-decorated rooms with authentic island style and personality.</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Great Value</h3>
              <p className="text-sm text-gray-600">Quality accommodations with competitive rates and local expertise.</p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Inns by Type */}
      {Object.entries(groupedByType).map(([typeKey, typeInns]) => 
        typeInns.length > 0 && (
          <section key={typeKey} className="section-spacing bg-white">
            <div className="section-container">
              <h2 className="text-4xl font-bold text-gray-900 mb-2 capitalize">{typeKey}s</h2>
              <p className="text-gray-600 mb-12">
                {typeKey === 'Inn' && 'Charming intimate accommodations with local character'}
                {typeKey === 'Small Hotel' && 'Family-run hotels with excellent service and unique offerings'}
                {typeKey === 'Boutique Guesthouse' && 'Exclusive artistic and specialized accommodations'}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {typeInns.map((inn) => (
                  <div key={inn.id} className="card-elevated overflow-hidden hover:shadow-xl-modern transition-shadow duration-300">
                    {/* Header */}
                    <div className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-6 text-white">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="text-5xl">{inn.image_emoji}</div>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-white uppercase">{inn.type}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{inn.name}</h3>
                      <p className="text-purple-100 text-sm">Owned by {inn.owner}</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {inn.specialty && (
                        <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                          ✨ {inn.specialty}
                        </div>
                      )}

                      <p className="text-gray-700 mb-6 leading-relaxed">{inn.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{inn.rooms}</div>
                          <p className="text-xs text-gray-600">Rooms</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{inn.price_per_night.split('-')[0]}</div>
                          <p className="text-xs text-gray-600">From</p>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">⭐</div>
                          <p className="text-xs text-gray-600">Special</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">What to Expect</h4>
                        <div className="flex flex-wrap gap-2">
                          {inn.amenities.map((amenity, idx) => (
                            <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 space-y-3">
                        <a 
                          href={`tel:${inn.contact}`} 
                          className="flex items-center gap-3 text-purple-600 hover:text-purple-700 font-semibold group"
                        >
                          <HiPhone size={18} />
                          <span className="group-hover:underline">{inn.contact}</span>
                        </a>
                        {inn.website && (
                          <a
                            href={inn.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-purple-600 hover:text-purple-700 font-semibold group"
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
        )
      )}

      <AdSenseContainer />

      {/* Specialties Grid */}
      <section className="section-spacing bg-linear-to-b from-white to-pink-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Inn Specialties</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Choose an inn that matches your travel style and interests
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from(new Set(inns.map(i => i.specialty))).map((specialty, idx) => (
              <div key={idx} className="card-elevated p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{specialty}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {specialty === 'Romantic Escapes' && 'Perfect for couples seeking intimate getaways with ocean views and personalized service.'}
                  {specialty === 'Fishing & Culture' && 'Immerse yourself in local traditions, fishing expeditions, and authentic island lifestyle.'}
                  {specialty === 'Artistic & Cultural' && 'Stay in hand-decorated rooms and experience local art, heritage, and cultural programs.'}
                  {specialty === 'Family-Friendly' && 'Comfortable suites and activities for the whole family with safety and fun in mind.'}
                  {specialty === 'Diving Paradise' && 'Expert diving center on-site with professional guides and specialized diving packages.'}
                  {specialty === 'Wellness & Relaxation' && 'Peaceful environment with yoga, meditation, and wellness programs for rejuvenation.'}
                  {specialty === 'Cultural Heritage' && 'Learn island history and traditions through museum tours and cultural events.'}
                  {specialty === 'Eco-Tourism' && 'Sustainable accommodation with marine conservation initiatives and educational programs.'}
                </p>
                <div className="text-2xl">{
                  specialty === 'Romantic Escapes' ? '💕' :
                  specialty === 'Fishing & Culture' ? '🎣' :
                  specialty === 'Artistic & Cultural' ? '🎨' :
                  specialty === 'Family-Friendly' ? '👨‍👩‍👧‍👦' :
                  specialty === 'Diving Paradise' ? '🤿' :
                  specialty === 'Wellness & Relaxation' ? '🧘' :
                  specialty === 'Cultural Heritage' ? '🏛️' :
                  specialty === 'Eco-Tourism' ? '🌿' : '✨'
                }</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* CTA Section */}
      <section className="section-spacing bg-linear-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Perfect Inn</h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Each inn offers something special. Contact them directly to discuss your preferences and book your unique island experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white flex items-center justify-center gap-2 group">
              Contact Our Team
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
