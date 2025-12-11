'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';
import SearchFilterBar from '@/components/SearchFilterBar';
import ListingCard from '@/components/ListingCard';
import { LISTINGS } from '@/data/listings';

export const metadata = {
  title: 'Activities in Fuvahmulah - Diving, Snorkeling & Adventure',
  description: 'Discover exciting water sports and activities in Fuvahmulah including diving, snorkeling, fishing, and cultural tours with experienced operators.',
};

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Get activities from listings
  const activities = useMemo(() => {
    return LISTINGS.filter((listing) => listing.category === 'activities').map((listing) => ({
      id: listing.slug,
      title: listing.title,
      description: listing.shortDescription,
      image: listing.images[0],
      category: listing.categoryIcon,
      categoryIcon: listing.categoryIcon,
      location: listing.location,
      type: 'Activity', // Default type
      href: `/place/${listing.slug}`,
      rating: listing.rating,
      reviews: listing.reviews,
    }));
  }, []);

  // Filter activities based on search and filters
  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        activity.title.toLowerCase().includes(searchLower) ||
        activity.description.toLowerCase().includes(searchLower) ||
        activity.location.toLowerCase().includes(searchLower);

      const matchesLocation =
        !selectedLocation ||
        activity.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = !selectedType || activity.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [activities, searchQuery, selectedLocation, selectedType]);

  const handleClear = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
  };

  return (
    <>
      <PageHero
        title="Activities in Fuvahmulah"
        subtitle="Adventure and exploration await with professional operators and guides"
        backgroundImage="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop"
      />

      <SearchFilterBar
        onSearch={setSearchQuery}
        onLocationChange={setSelectedLocation}
        onTypeChange={setSelectedType}
        locationOptions={[
          { value: 'north', label: 'North' },
          { value: 'south', label: 'South' },
          { value: 'east', label: 'East' },
          { value: 'west', label: 'West' },
          { value: 'central', label: 'Central' },
        ]}
        typeOptions={[
          { value: 'diving', label: 'Diving' },
          { value: 'surfing', label: 'Surfing' },
          { value: 'fishing', label: 'Fishing' },
          { value: 'tours', label: 'Tours' },
        ]}
        resultsCount={filteredActivities.length}
        searchQuery={searchQuery}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        onClear={handleClear}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          {filteredActivities.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Showing <span className="font-semibold text-primary">{filteredActivities.length}</span> activit
                  {filteredActivities.length !== 1 ? 'ies' : 'y'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredActivities.map((activity) => (
                  <ListingCard key={activity.id} {...activity} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-gray-900 mb-4">No activities found</p>
              <p className="text-gray-600 mb-8">Try adjusting your filters or search query</p>
              <button
                onClick={handleClear}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
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
