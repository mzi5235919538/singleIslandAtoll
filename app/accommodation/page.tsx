import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
import ListingCard from '@/components/ListingCard';

const ACCOMMODATIONS = [
  {
    id: '1',
    title: 'Fuvahmulah Resort & Spa',
    description: 'Luxury 5-star resort with world-class amenities, spa services, and fine dining overlooking pristine beaches',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop',
    category: 'Resort',
    categoryIcon: '⭐',
    location: 'Thinadhoo Beach',
    type: 'Luxury',
    href: '/accommodation/fuvahmulah-resort',
    rating: 5,
    reviews: 342,
  },
  {
    id: '2',
    title: 'Island Paradise Hotel',
    description: 'Charming 3-star hotel with authentic hospitality, local cuisine, and convenient island location',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
    category: 'Hotel',
    categoryIcon: '🏨',
    location: 'City Center',
    type: 'Mid-Range',
    href: '/accommodation/island-paradise',
    rating: 4.7,
    reviews: 218,
  },
  {
    id: '3',
    title: 'Cozy Guest House',
    description: 'Affordable and welcoming guesthouse with shared facilities perfect for budget travelers seeking authentic experience',
    image: 'https://images.unsplash.com/photo-1555686519-6861da3ca18f?w=600&h=600&fit=crop',
    category: 'Guesthouse',
    categoryIcon: '🏡',
    location: 'Local Area',
    type: 'Budget',
    href: '/accommodation/cozy-guesthouse',
    rating: 4.5,
    reviews: 156,
  },
  {
    id: '4',
    title: 'Beachfront Bungalows',
    description: 'Romantic private bungalows with direct beach access, perfect for couples and honeymooners',
    image: 'https://images.unsplash.com/photo-1578654881063-f3f4ebc36371?w=600&h=600&fit=crop',
    category: 'Bungalow',
    categoryIcon: '🏝️',
    location: 'South Beach',
    type: 'Romantic',
    href: '/accommodation/beachfront-bungalows',
    rating: 4.9,
    reviews: 287,
  },
  {
    id: '5',
    title: 'Diving Paradise Inn',
    description: 'Specialized diving resort with direct access to world-famous dive sites and professional dive center',
    image: 'https://images.unsplash.com/photo-1520521821577-fea43ff16d4f?w=600&h=600&fit=crop',
    category: 'Resort',
    categoryIcon: '🤿',
    location: 'North Reef',
    type: 'Specialty',
    href: '/accommodation/diving-paradise',
    rating: 4.8,
    reviews: 201,
  },
  {
    id: '6',
    title: 'Eco-Lodge Island Retreat',
    description: 'Sustainable eco-friendly accommodation with local design, perfect for environmentally conscious travelers',
    image: 'https://images.unsplash.com/photo-1584124268002-c4646a10f329?w=600&h=600&fit=crop',
    category: 'Eco-Lodge',
    categoryIcon: '🌿',
    location: 'Central Island',
    type: 'Eco-Friendly',
    href: '/accommodation/eco-lodge',
    rating: 4.6,
    reviews: 134,
  },
];

export const metadata = {
  title: 'Accommodation in Fuvahmulah - Hotels, Resorts & Guest Houses',
  description: 'Find the perfect place to stay in Fuvahmulah. From luxury resorts to budget-friendly guest houses, all options offer authentic island hospitality.',
};

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        title="Where to Stay in Fuvahmulah"
        subtitle="Discover comfortable accommodations from luxury resorts to budget-friendly guest houses"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop"
      />

      <FilterBar
        locationOptions={[
          { value: 'thinadhoo-beach', label: 'Thinadhoo Beach' },
          { value: 'city-center', label: 'City Center' },
          { value: 'south-beach', label: 'South Beach' },
          { value: 'north-reef', label: 'North Reef' },
          { value: 'central-island', label: 'Central Island' },
        ]}
        typeOptions={[
          { value: 'luxury', label: 'Luxury' },
          { value: 'mid-range', label: 'Mid-Range' },
          { value: 'budget', label: 'Budget' },
          { value: 'romantic', label: 'Romantic' },
          { value: 'eco-friendly', label: 'Eco-Friendly' },
        ]}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-primary">{ACCOMMODATIONS.length}</span> accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ACCOMMODATIONS.map((accommodation) => (
              <ListingCard key={accommodation.id} {...accommodation} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
