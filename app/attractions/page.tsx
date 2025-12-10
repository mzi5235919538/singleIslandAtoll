import Link from 'next/link';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import VideoEmbed from '@/components/VideoEmbed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Attractions in Single Atoll - Island Guide',
  description: 'Discover top attractions in Single Atoll including Thinadhoo Beach, Ukulhas, Felidhoo Lagoon, and more',
};

export default function Attractions() {
  return (
    <>
      {/* Hero - Modern */}
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-6">
              🗣 Explore & Discover
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6 leading-tight">
              Attractions in Single Atoll
            </h1>
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Discover the natural wonders and pristine beauty of Single Island Atoll. From stunning beaches to vibrant coral gardens, explore unforgettable destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Start Exploring</button>
              <button className="btn-outline">View Gallery</button>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Main Attractions */}
      <section className="section-container">
        <h2 className="section-title text-text-dark">Top Attractions</h2>
        <p className="section-subtitle">Must-Visit Destinations in Single Atoll</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlaceCard
            icon="🏖️"
            title="Thinadhoo Beach"
            description="The main beach of Fuvahmulah with pristine white sand and crystal-clear turquoise waters. Perfect for swimming and relaxation."
            featured="Swimming, Photography, Water Sports"
            href="/contact"
            buttonText="Get Info"
          />

          <PlaceCard
            icon="🏝️"
            title="Ukulhas Island"
            description="A picturesque island with a thriving local community. Known for authentic Maldivian culture and traditional fishing."
            featured="Cultural Exploration, Island Hopping"
            href="/contact"
            buttonText="Book Tour"
          />

          <PlaceCard
            icon="🌊"
            title="Felidhoo Lagoon"
            description="A stunning lagoon surrounded by vibrant coral gardens and marine life. Excellent for snorkeling."
            featured="Snorkeling, Photography, Marine Life"
            href="/contact"
            buttonText="Snorkel Trips"
          />

          <PlaceCard
            icon="🦈"
            title="Shark Point"
            description="An exciting dive site known for encounters with nurse sharks and reef sharks. A thrilling experience for certified divers."
            featured="Diving, Adventure, Pelagics"
            href="/contact"
            buttonText="Dive Centers"
          />

          <PlaceCard
            icon="🛍️"
            title="Local Market"
            description="Experience authentic island life. Shop for fresh seafood, traditional crafts, and souvenirs while interacting with locals."
            featured="Shopping, Culture, Local Food"
            href="/dining"
            buttonText="Local Food"
          />

          <PlaceCard
            icon="🪸"
            title="Coral Gardens"
            description="Spectacular underwater coral formations teeming with colorful fish and marine species. Perfect for snorkeling and photography."
            featured="Snorkeling, Diving, Photography"
            href="/activities"
            buttonText="Book Tour"
          />
        </div>
      </section>

      {/* Island Tour Video - Modern */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title text-text-dark mb-4">Single Atoll Island Tour</h2>
            <p className="section-subtitle">Virtual guide to our beautiful attractions</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <VideoEmbed
              provider="youtube"
              videoId="aqz-KE-bpKQ"
              title="Fuvahmulah Island Tour - Complete Guide"
            />
          </div>
          <p className="text-center mt-8 text-text-light text-base">
            Take a visual journey through Single Atoll's most beautiful attractions, beaches, and natural wonders.
          </p>
        </div>
      </section>

      <AdSenseContainer />

      {/* Nature & Wildlife - Modern */}
      <section className="section-spacing bg-linear-to-b from-white to-blue-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title text-text-dark mb-4">Nature & Wildlife</h2>
            <p className="section-subtitle">Experience Single Atoll's pristine ecosystem and incredible biodiversity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-elevated p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🐢 Sea Turtles</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Single Atoll is known for sea turtle populations. You may encounter these gentle creatures while snorkeling or diving during certain seasons.
              </p>
              <p className="text-sm text-primary font-semibold">✓ Best Season: March - November</p>
            </div>

            <div className="card-elevated p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🐠 Tropical Fish</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Vibrant schools of tropical fish in stunning colors. Parrotfish, angelfish, butterflyfish, and endemic species inhabit the reefs.
              </p>
              <p className="text-sm text-accent font-semibold">✓ Best For: Snorkeling & Diving</p>
            </div>

            <div className="card-elevated p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🦑 Manta Rays & Mobulas</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Encounter graceful manta rays gliding through the lagoon. These magnificent creatures are a highlight during specific seasons.
              </p>
              <p className="text-sm text-amber-600 font-semibold">✓ Peak Season: March - May</p>
            </div>

            <div className="card-elevated p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🐠 Groupers & Snappers</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Large game fish including groupers and snappers are common around the reefs. Popular with anglers and diving photographers.
              </p>
              <p className="text-sm text-primary font-semibold">✓ Best For: Fishing & Diving</p>
            </div>

            <div className="card-elevated p-8 border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🐚 Coral & Mollusks</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Pristine coral formations hosting diverse mollusk species. Giant clams and colorful shells are part of this delicate ecosystem.
              </p>
              <p className="text-sm text-teal-600 font-semibold">✓ Conservation: Protected Species</p>
            </div>

            <div className="card-elevated p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-text-dark mb-3">🌅 Bird Watching</h3>
              <p className="text-text-light mb-4 leading-relaxed">
                Single Atoll attracts various seabirds. Spot frigatebirds, herons, and other species along the beaches.
              </p>
              <p className="text-sm text-orange-600 font-semibold">✓ Best Time: Early Morning & Dusk</p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Call to Action - Modern */}
      <section className="section-spacing bg-linear-to-r from-primary to-accent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Explore Single Atoll?
            </h2>
            <p className="text-xl text-blue-50 mb-10">
              Book your accommodation and plan your attractions tour with our trusted partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/accommodation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition"
              >
                Book Accommodation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transform hover:scale-105 transition"
              >
                Get Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />
    </>
  );
}
