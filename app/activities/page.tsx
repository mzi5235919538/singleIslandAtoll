import Link from 'next/link';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import VideoEmbed from '@/components/VideoEmbed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activity Centers in Single Atoll - Diving, Snorkeling & Water Sports',
  description: 'Explore thrilling activities at our activity centers including diving, snorkeling, water sports, and cultural tours.',
};

export default function Activities() {
  return (
    <>
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-6">
              🏄 Adventure Awaits
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6 leading-tight">
              Activity Centers
            </h1>
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Experience thrilling water sports and island adventures. From diving and snorkeling to fishing and island tours, create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Explore Activity Centers</button>
              <button className="btn-outline">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <h2 className="section-title text-text-dark">Water Activity Centers</h2>
        <p className="section-subtitle">Professional Operators & Guides</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlaceCard
            icon="🤿"
            title="Scuba Diving"
            description="Explore vibrant coral reefs with certified dive centers. Courses available for beginners to advanced divers."
            featured="PADI certified, Guided dives"
            href="/contact"
            buttonText="Book Dive"
          />

          <PlaceCard
            icon="🏊"
            title="Snorkeling"
            description="Discover marine life in shallow reefs. Equipment provided, no certification needed. Perfect for all ages."
            featured="Coral gardens, Marine life"
            href="/contact"
            buttonText="Book Tour"
          />

          <PlaceCard
            icon="🎣"
            title="Fishing"
            description="Big game fishing or traditional line fishing. Experienced guides and well-equipped boats available."
            featured="Sport & local fishing"
            href="/contact"
            buttonText="Arrange Trip"
          />
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container bg-gray-50">
        <h2 className="section-title text-text-dark">Dive Centers & Operators</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🤿 Fuvahmulah Dive Centre</h3>
            <p className="text-text-light mb-4">
              PADI 5-Star certified dive center with experienced instructors. Offers courses from Open Water to Divemaster.
            </p>
            <ul className="text-sm text-text-light space-y-2 mb-6">
              <li>✓ Professional PADI instructors</li>
              <li>✓ High-quality equipment</li>
              <li>✓ Small group sizes (max 6)</li>
              <li>✓ Safety-first approach</li>
              <li>✓ Competitive pricing</li>
            </ul>
            <a href="tel:+9601234575" className="btn-primary btn-small">Contact</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🤿 Reef Masters Diving</h3>
            <p className="text-text-light mb-4">
              Specializing in specialized dives like deep dives, wreck dives, and night dives. Experienced guides for all levels.
            </p>
            <ul className="text-sm text-text-light space-y-2 mb-6">
              <li>✓ Specialized dive programs</li>
              <li>✓ Advanced training</li>
              <li>✓ Experienced team</li>
              <li>✓ Flexible schedules</li>
              <li>✓ Premium equipment</li>
            </ul>
            <a href="tel:+9601234576" className="btn-primary btn-small">Contact</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🏊 Snorkel Adventures</h3>
            <p className="text-text-light mb-4">
              Perfect snorkeling tours with knowledgeable guides. Equipment included. Suitable for families and non-swimmers.
            </p>
            <ul className="text-sm text-text-light space-y-2 mb-6">
              <li>✓ All equipment provided</li>
              <li>✓ Family-friendly</li>
              <li>✓ Expert marine guides</li>
              <li>✓ Safety vests available</li>
              <li>✓ Affordable rates</li>
            </ul>
            <a href="tel:+9601234577" className="btn-primary btn-small">Contact</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🎣 Local Fishing Charters</h3>
            <p className="text-text-light mb-4">
              Traditional and sport fishing with local experienced fishermen. Learn traditional fishing methods.
            </p>
            <ul className="text-sm text-text-light space-y-2 mb-6">
              <li>✓ Traditional fishing</li>
              <li>✓ Big game fishing</li>
              <li>✓ Local expertise</li>
              <li>✓ Fresh catch meals</li>
              <li>✓ Flexible bookings</li>
            </ul>
            <a href="tel:+9601234578" className="btn-primary btn-small">Contact</a>
          </div>
        </div>
      </section>

      {/* Diving Video Section */}
      <section className="section-container bg-gray-50">
        <h2 className="section-title text-text-dark">Experience Diving in Single Atoll</h2>
        <p className="section-subtitle">4K Underwater Adventures</p>
        <div className="max-w-4xl mx-auto">
          <VideoEmbed
            provider="youtube"
            videoId="X8Z8_MG_d5g"
            title="Diving in Fuvahmulah - Coral Reefs and Marine Life"
          />
        </div>
        <p className="text-center mt-4 text-text-light text-sm">
          Watch incredible underwater footage of vibrant coral reefs, tropical fish, manta rays, and more!
        </p>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <h2 className="section-title text-text-dark">Activity Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="info-box">
            <h4 className="text-text-dark">🤿 Diving Information</h4>
            <ul className="text-text-light space-y-2">
              <li><strong>Certification:</strong> PADI or equivalent required for most dives</li>
              <li><strong>Cost:</strong> $50-150 per dive</li>
              <li><strong>Training:</strong> $300-400 for certification courses</li>
              <li><strong>Conditions:</strong> Best Nov-Mar, year-round possibility</li>
              <li><strong>Depth:</strong> 10-40 meters at most sites</li>
            </ul>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">🏊 Snorkeling Information</h4>
            <ul className="text-text-light space-y-2">
              <li><strong>Certification:</strong> None required</li>
              <li><strong>Cost:</strong> $20-50 per tour</li>
              <li><strong>Duration:</strong> 2-4 hours</li>
              <li><strong>Equipment:</strong> Usually provided</li>
              <li><strong>Age:</strong> Children welcome with supervision</li>
            </ul>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">🎣 Fishing Information</h4>
            <ul className="text-text-light space-y-2">
              <li><strong>Types:</strong> Sport and traditional fishing</li>
              <li><strong>Cost:</strong> $100-300 per trip</li>
              <li><strong>Duration:</strong> 4-8 hours</li>
              <li><strong>Equipment:</strong> Provided by operators</li>
              <li><strong>Season:</strong> Year-round, peak Oct-May</li>
            </ul>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">🚤 Other Activities</h4>
            <ul className="text-text-light space-y-2">
              <li><strong>Island Tours:</strong> $30-80 per person</li>
              <li><strong>Sunset Cruises:</strong> $40-100 per person</li>
              <li><strong>Water Sports:</strong> $50-150 per activity</li>
              <li><strong>Boat Rentals:</strong> $200-500 per day</li>
            </ul>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container bg-gray-50">
        <h2 className="section-title text-text-dark">Booking & Safety Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-base p-6">
            <h3 className="text-xl font-bold text-primary mb-4">📋 Before Booking</h3>
            <ul className="text-sm text-text-light space-y-2">
              <li>✓ Check operator credentials</li>
              <li>✓ Read reviews</li>
              <li>✓ Confirm group sizes</li>
              <li>✓ Ask about safety protocols</li>
              <li>✓ Get travel insurance</li>
            </ul>
          </div>

          <div className="card-base p-6">
            <h3 className="text-xl font-bold text-primary mb-4">🏥 Health & Safety</h3>
            <ul className="text-sm text-text-light space-y-2">
              <li>✓ Medical screening for diving</li>
              <li>✓ Wear sun protection</li>
              <li>✓ Stay hydrated</li>
              <li>✓ Follow guide instructions</li>
              <li>✓ Know your limits</li>
            </ul>
          </div>

          <div className="card-base p-6">
            <h3 className="text-xl font-bold text-primary mb-4">🌊 Water Conditions</h3>
            <ul className="text-sm text-text-light space-y-2">
              <li>✓ Check weather forecast</li>
              <li>✓ Respect marine life</li>
              <li>✓ Use reef-safe sunscreen</li>
              <li>✓ Don&apos;t touch corals</li>
              <li>✓ Take photos responsibly</li>
            </ul>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <div className="gradient-primary text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for an Adventure?</h2>
          <p className="text-xl mb-8">Book your activities today with professional and experienced operators.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition">
            Book Activities
          </Link>
        </div>
      </section>

      <AdSenseContainer />
    </>
  );
}
