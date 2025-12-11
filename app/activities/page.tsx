import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
import ListingCard from '@/components/ListingCard';

const ACTIVITIES = [
  {
    id: '1',
    title: 'Fuvahmulah Dive Centre',
    description: 'PADI 5-Star certified center with experienced instructors. Courses from Open Water to Divemaster available',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=600&fit=crop',
    category: 'Diving',
    categoryIcon: '🤿',
    location: 'Main Harbor',
    type: 'Water Sports',
    href: '/activities/fuvahmulah-dive',
    rating: 5,
    reviews: 156,
  },
  {
    id: '2',
    title: 'Reef Masters Diving',
    description: 'Specializing in advanced dives including deep dives, wreck dives, and night dives with expert guides',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
    category: 'Diving',
    categoryIcon: '🤿',
    location: 'North Reef',
    type: 'Water Sports',
    href: '/activities/reef-masters',
    rating: 4.9,
    reviews: 134,
  },
  {
    id: '3',
    title: 'Snorkel Adventures',
    description: 'Family-friendly snorkeling tours with equipment included. Perfect for beginners and non-swimmers',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
    category: 'Snorkeling',
    categoryIcon: '🏊',
    location: 'Coral Gardens',
    type: 'Water Sports',
    href: '/activities/snorkel-adventures',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: '4',
    title: 'Local Fishing Charters',
    description: 'Traditional and sport fishing with experienced local fishermen. Learn authentic fishing methods',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
    category: 'Fishing',
    categoryIcon: '🎣',
    location: 'Island Harbor',
    type: 'Water Sports',
    href: '/activities/fishing-charters',
    rating: 4.6,
    reviews: 87,
  },
  {
    id: '5',
    title: 'Island Tours & Exploration',
    description: 'Guided cultural and nature tours exploring local villages, markets, and natural attractions',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    category: 'Tours',
    categoryIcon: '🗺️',
    location: 'Central Island',
    type: 'Cultural',
    href: '/activities/island-tours',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: '6',
    title: 'Sunset Cruise',
    description: 'Romantic evening cruises with scenic views, refreshments, and opportunities for photography',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=600&fit=crop',
    category: 'Cruise',
    categoryIcon: '🚤',
    location: 'Main Beach',
    type: 'Experience',
    href: '/activities/sunset-cruise',
    rating: 4.9,
    reviews: 203,
  },
];

export const metadata = {
  title: 'Activities in Fuvahmulah - Diving, Snorkeling & Adventure',
  description: 'Discover exciting water sports and activities in Fuvahmulah including diving, snorkeling, fishing, and cultural tours with experienced operators.',
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Activities in Fuvahmulah"
        subtitle="Adventure and exploration await with professional operators and guides"
        backgroundImage="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop"
      />

      <FilterBar
        locationOptions={[
          { value: 'main-harbor', label: 'Main Harbor' },
          { value: 'north-reef', label: 'North Reef' },
          { value: 'coral-gardens', label: 'Coral Gardens' },
          { value: 'island-harbor', label: 'Island Harbor' },
          { value: 'central-island', label: 'Central Island' },
        ]}
        typeOptions={[
          { value: 'water-sports', label: 'Water Sports' },
          { value: 'cultural', label: 'Cultural' },
          { value: 'experience', label: 'Experience' },
          { value: 'diving', label: 'Diving' },
          { value: 'snorkeling', label: 'Snorkeling' },
        ]}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-primary">{ACTIVITIES.length}</span> activity operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ACTIVITIES.map((activity) => (
              <ListingCard key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
