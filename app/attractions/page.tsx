import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
import ListingCard from '@/components/ListingCard';

const ATTRACTIONS = [
  {
    id: '1',
    title: 'Tiger Point Reef',
    description: 'Experience thrilling tiger shark encounters at this iconic diving spot with pristine coral formations',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=600&fit=crop',
    category: 'Diving',
    categoryIcon: '🤿',
    location: 'North Reef',
    type: 'Water Activity',
    href: '/attractions/tiger-point',
    rating: 5,
    reviews: 128,
  },
  {
    id: '2',
    title: 'Vasho Veyo Beach',
    description: 'Pristine sandy beach with crystal clear waters perfect for swimming, sunbathing, and sunset views',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
    category: 'Beach',
    categoryIcon: '🏖️',
    location: 'South Beach',
    type: 'Beach',
    href: '/attractions/vasho-veyo',
    rating: 4.8,
    reviews: 92,
  },
  {
    id: '3',
    title: 'Local Market',
    description: 'Vibrant local market offering authentic island crafts, fresh produce, and traditional Maldivian goods',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561404?w=600&h=600&fit=crop',
    category: 'Culture',
    categoryIcon: '🎨',
    location: 'City Center',
    type: 'Cultural',
    href: '/attractions/market',
    rating: 4.6,
    reviews: 67,
  },
  {
    id: '4',
    title: 'Freshwater Lake',
    description: 'Unique freshwater lagoons surrounded by lush tropical vegetation, perfect for nature walks and photography',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    category: 'Nature',
    categoryIcon: '💧',
    location: 'Central Island',
    type: 'Nature',
    href: '/attractions/freshwater-lake',
    rating: 4.7,
    reviews: 54,
  },
  {
    id: '5',
    title: 'Hammerhead Point',
    description: 'Premier diving location famous for hammerhead shark encounters with dramatic underwater topography',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
    category: 'Diving',
    categoryIcon: '🤿',
    location: 'East Reef',
    type: 'Water Activity',
    href: '/attractions/hammerhead-point',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: '6',
    title: 'Island Museum',
    description: 'Fascinating museum showcasing Maldivian history, culture, and maritime heritage with interactive exhibits',
    image: 'https://images.unsplash.com/photo-1577720643272-265ae3f46d35?w=600&h=600&fit=crop',
    category: 'Museum',
    categoryIcon: '🏛️',
    location: 'City Center',
    type: 'Cultural',
    href: '/attractions/museum',
    rating: 4.5,
    reviews: 43,
  },
];

export const metadata = {
  title: 'Attractions in Fuvahmulah - Things to Do',
  description: 'Discover the best attractions and activities in Fuvahmulah, from world-class diving to pristine beaches and local culture.',
};

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        title="Attractions in Fuvahmulah"
        subtitle="Discover the island's best destinations, from thrilling dives to pristine beaches"
        backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop"
      />

      <FilterBar
        locationOptions={[
          { value: 'north-reef', label: 'North Reef' },
          { value: 'south-beach', label: 'South Beach' },
          { value: 'east-reef', label: 'East Reef' },
          { value: 'city-center', label: 'City Center' },
          { value: 'central-island', label: 'Central Island' },
        ]}
        typeOptions={[
          { value: 'diving', label: 'Diving' },
          { value: 'beach', label: 'Beach' },
          { value: 'cultural', label: 'Cultural' },
          { value: 'nature', label: 'Nature' },
        ]}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-primary">{ATTRACTIONS.length}</span> attractions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ATTRACTIONS.map((attraction) => (
              <ListingCard key={attraction.id} {...attraction} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
