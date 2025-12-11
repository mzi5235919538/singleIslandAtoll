import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
import ListingCard from '@/components/ListingCard';

const DINING = [
  {
    id: '1',
    title: 'Reef Restaurant',
    description: 'Premium beachfront dining with fresh seafood, Asian fusion, and sunset views. Perfect for special occasions',
    image: 'https://images.unsplash.com/photo-1631504949f45-b0fc0e7bab67?w=600&h=600&fit=crop',
    category: 'Fine Dining',
    categoryIcon: '🍽️',
    location: 'Thinadhoo Beach',
    type: 'Seafood',
    href: '/dining/reef-restaurant',
    rating: 5,
    reviews: 187,
  },
  {
    id: '2',
    title: 'Maldivian Kitchen',
    description: 'Authentic traditional Maldivian cuisine. Famous for Garudhiya, Mas Huni, and aromatic curries',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    category: 'Local Food',
    categoryIcon: '🥘',
    location: 'Town Center',
    type: 'Maldivian',
    href: '/dining/maldivian-kitchen',
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '3',
    title: 'Island Cafe',
    description: 'Cozy cafe with premium coffee, pastries, and light meals. Perfect for breakfast and afternoon relaxation',
    image: 'https://images.unsplash.com/photo-1459521828906-47cbb7ee9b8e?w=600&h=600&fit=crop',
    category: 'Cafe',
    categoryIcon: '☕',
    location: 'Main Island',
    type: 'Cafe',
    href: '/dining/island-cafe',
    rating: 4.6,
    reviews: 95,
  },
  {
    id: '4',
    title: 'Fish Market Grill',
    description: 'Fresh fish grilled daily from local market. Choose your catch and enjoy it prepared to your liking',
    image: 'https://images.unsplash.com/photo-1614707267537-b85faf00021d?w=600&h=600&fit=crop',
    category: 'Seafood Grill',
    categoryIcon: '🦞',
    location: 'Near Market',
    type: 'Seafood',
    href: '/dining/fish-market-grill',
    rating: 4.8,
    reviews: 142,
  },
  {
    id: '5',
    title: 'Asian Fusion Kitchen',
    description: 'Thai, Indian, and pan-Asian cuisine with authentic flavors and fresh ingredients',
    image: 'https://images.unsplash.com/photo-1589301760014-d4c26eee8e49?w=600&h=600&fit=crop',
    category: 'Asian',
    categoryIcon: '🍜',
    location: 'City Center',
    type: 'Asian',
    href: '/dining/asian-fusion',
    rating: 4.7,
    reviews: 118,
  },
  {
    id: '6',
    title: 'Green Leaf Vegetarian',
    description: 'Healthy vegetarian and vegan cuisine with fresh local produce and international salads',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    category: 'Vegetarian',
    categoryIcon: '🥗',
    location: 'Main Island',
    type: 'Vegetarian',
    href: '/dining/green-leaf',
    rating: 4.5,
    reviews: 87,
  },
];

export const metadata = {
  title: 'Dining in Fuvahmulah - Restaurants, Cafes & Local Food',
  description: 'Discover the best restaurants and cafes in Fuvahmulah. Enjoy authentic Maldivian cuisine, fresh seafood, and international dining options.',
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="Dining in Fuvahmulah"
        subtitle="Discover authentic cuisine from local eateries to fine dining restaurants"
        backgroundImage="https://images.unsplash.com/photo-1631504949f45-b0fc0e7bab67?w=1200&h=600&fit=crop"
      />

      <FilterBar
        locationOptions={[
          { value: 'thinadhoo-beach', label: 'Thinadhoo Beach' },
          { value: 'town-center', label: 'Town Center' },
          { value: 'main-island', label: 'Main Island' },
          { value: 'city-center', label: 'City Center' },
          { value: 'near-market', label: 'Near Market' },
        ]}
        typeOptions={[
          { value: 'seafood', label: 'Seafood' },
          { value: 'maldivian', label: 'Maldivian' },
          { value: 'asian', label: 'Asian' },
          { value: 'vegetarian', label: 'Vegetarian' },
          { value: 'cafe', label: 'Cafe' },
        ]}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-primary">{DINING.length}</span> restaurants & cafes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {DINING.map((restaurant) => (
              <ListingCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
