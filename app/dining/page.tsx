import Link from 'next/link';
import AdSenseContainer from '@/components/AdSenseContainer';
import PlaceCard from '@/components/PlaceCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dining in Single Atoll - Restaurants, Cafes & Local Food',
  description: 'Discover the best restaurants, cafes, and dining options in Single Atoll. Enjoy authentic Maldivian cuisine and international dishes.',
};

export default function Dining() {
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
              🝴 Culinary Delights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-text-dark mb-6 leading-tight">
              Dining in Single Atoll
            </h1>
            <p className="text-xl text-text-light leading-relaxed mb-8">
              Savor authentic Maldivian cuisine and international dishes. From fresh seafood to local specialties, discover culinary adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Explore Restaurants</button>
              <button className="btn-outline">View Menus</button>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <h2 className="section-title text-text-dark">Restaurants & Cafes</h2>
        <p className="section-subtitle">Culinary Experiences in Single Atoll</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlaceCard
            icon="🍽️"
            title="Traditional Maldivian Cuisine"
            description="Experience authentic Maldivian dishes featuring fresh seafood, coconut, and aromatic spices. Try the famous Garudhiya and Mas Huni."
            featured="Seafood specialties, Local recipes"
            href="/contact"
            buttonText="Find Restaurants"
          />

          <PlaceCard
            icon="🍤"
            title="Seafood Restaurants"
            description="Fresh-caught fish, lobster, and seafood prepared in various styles. Directly sourced from local fishermen daily."
            featured="Grilled, fried, curried options"
            href="/contact"
            buttonText="Explore"
          />

          <PlaceCard
            icon="☕"
            title="Cafes & Coffee Shops"
            description="Cozy cafes serving coffee, tea, and light snacks. Perfect for morning relaxation or afternoon beverages."
            featured="Local & international drinks"
            href="/contact"
            buttonText="Visit Now"
          />

          <PlaceCard
            icon="🥘"
            title="Asian Cuisine"
            description="Thai, Indian, and Asian dishes available at selected restaurants. Catering to international tastes."
            featured="Thai, Indian, Sri Lankan"
            href="/contact"
            buttonText="Discover"
          />

          <PlaceCard
            icon="🍕"
            title="International Food"
            description="Italian, Western, and other international cuisines. Available at resort restaurants and some local eateries."
            featured="Pizza, pasta, Western dishes"
            href="/contact"
            buttonText="Browse"
          />

          <PlaceCard
            icon="🥗"
            title="Vegetarian & Healthy Options"
            description="Vegetarian meals and healthy dining choices available at most restaurants. Fresh fruits and vegetables."
            featured="Salads, vegetable dishes, fruits"
            href="/contact"
            buttonText="View Menu"
          />
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container bg-gray-50">
        <h2 className="section-title text-text-dark">Featured Dining Establishments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🍽️ Reef Restaurant</h3>
            <p className="text-text-light mb-4">Premium dining experience with fresh seafood and Asian fusion cuisine. Beachfront setting with sunset views.</p>
            <div className="text-sm text-text-light space-y-2 mb-6">
              <p><strong>Cuisine:</strong> Seafood, Asian</p>
              <p><strong>Price:</strong> $$$</p>
              <p><strong>Hours:</strong> 6 AM - 11 PM</p>
              <p><strong>Location:</strong> Thinadhoo Beach</p>
            </div>
            <a href="tel:+9601234571" className="btn-primary btn-small">Reserve</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🥘 Maldivian Kitchen</h3>
            <p className="text-text-light mb-4">Authentic traditional Maldivian food in a casual setting. Known for Garudhiya, Mas Huni, and curries.</p>
            <div className="text-sm text-text-light space-y-2 mb-6">
              <p><strong>Cuisine:</strong> Local Maldivian</p>
              <p><strong>Price:</strong> $</p>
              <p><strong>Hours:</strong> 7 AM - 10 PM</p>
              <p><strong>Location:</strong> Town Center</p>
            </div>
            <a href="tel:+9601234572" className="btn-primary btn-small">Visit</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">☕ Island Cafe</h3>
            <p className="text-text-light mb-4">Relaxing cafe with coffee, pastries, and light meals. Perfect for breakfast or afternoon coffee.</p>
            <div className="text-sm text-text-light space-y-2 mb-6">
              <p><strong>Cuisine:</strong> Cafe, Light Meals</p>
              <p><strong>Price:</strong> $</p>
              <p><strong>Hours:</strong> 6 AM - 9 PM</p>
              <p><strong>Location:</strong> Main Island</p>
            </div>
            <a href="tel:+9601234573" className="btn-primary btn-small">Call</a>
          </div>

          <div className="card-base p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🤿 Fish Market Grill</h3>
            <p className="text-text-light mb-4">Fresh fish grilled daily from the local market. Choose your catch and enjoy it prepared to your liking.</p>
            <div className="text-sm text-text-light space-y-2 mb-6">
              <p><strong>Cuisine:</strong> Seafood Grill</p>
              <p><strong>Price:</strong> $$</p>
              <p><strong>Hours:</strong> 10 AM - 10 PM</p>
              <p><strong>Location:</strong> Near Market</p>
            </div>
            <a href="tel:+9601234574" className="btn-primary btn-small">Book</a>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <h2 className="section-title text-text-dark">Dining Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="info-box">
            <h4 className="text-text-dark">🍽️ Traditional Dishes to Try</h4>
            <ul className="text-text-light space-y-2">
              <li>• <strong>Garudhiya:</strong> Fish soup with rice</li>
              <li>• <strong>Mas Huni:</strong> Tuna salad with coconut</li>
              <li>• <strong>Fihunu Mas:</strong> Grilled fish</li>
              <li>• <strong>Curry Dishes:</strong> Fish or chicken curries</li>
            </ul>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">💳 Payment & Prices</h4>
            <p className="text-text-light">
              <strong>Budget meal:</strong> $3-8<br/>
              <strong>Mid-range:</strong> $10-25<br/>
              <strong>Fine dining:</strong> $30+<br/>
              <strong>Payment:</strong> Cash (MVR) or cards at larger establishments
            </p>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">🕐 Dining Hours</h4>
            <p className="text-text-light">
              Breakfast: 6-10 AM<br/>
              Lunch: 12-3 PM<br/>
              Dinner: 6-11 PM<br/>
              Most restaurants open daily. Friday is the holy day with limited hours.
            </p>
          </div>

          <div className="info-box">
            <h4 className="text-text-dark">🚫 Dietary Restrictions</h4>
            <p className="text-text-light">
              Vegetarian options available at most restaurants. Inform staff of allergies or religious dietary restrictions. Halal is standard in Maldives.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-spacing bg-linear-to-r from-primary to-accent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dine?
            </h2>
            <p className="text-xl text-blue-50 mb-10">
              Contact restaurants for reservations or get personalized recommendations from our local experts.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition">
              Get Recommendations
            </Link>
          </div>
        </div>
      </section>

      <AdSenseContainer />
    </>
  );
}
