'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';
import SearchFilterBar from '@/components/SearchFilterBar';
import ListingCard from '@/components/ListingCard';
import { LISTINGS } from '@/data/listings';

export const metadata = {
  title: 'Dining in Fuvahmulah - Restaurants, Cafes & Local Food',
  description: 'Discover the best restaurants and cafes in Fuvahmulah. Enjoy authentic Maldivian cuisine, fresh seafood, and international dining options.',
};

export default function DiningPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Get dining options from listings
  const dining = useMemo(() => {
    return LISTINGS.filter((listing) => listing.category === 'dining').map((listing) => ({
      id: listing.slug,
      title: listing.title,
      description: listing.shortDescription,
      image: listing.images[0],
      category: listing.categoryIcon,
      categoryIcon: listing.categoryIcon,
      location: listing.location,
      type: 'Restaurant', // Default type
      href: `/place/${listing.slug}`,
      rating: listing.rating,
      reviews: listing.reviews,
    }));
  }, []);

  // Filter dining options based on search and filters
  const filteredDining = useMemo(() => {
    return dining.filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower);

      const matchesLocation =
        !selectedLocation ||
        item.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = !selectedType || item.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [dining, searchQuery, selectedLocation, selectedType]);

  const handleClear = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
  };

  return (
    <>
      <PageHero
        title="Dining in Fuvahmulah"
        subtitle="Discover authentic cuisine from local eateries to fine dining restaurants"
        backgroundImage="https://images.unsplash.com/photo-1631504949f45-b0fc0e7bab67?w=1200&h=600&fit=crop"
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
          { value: 'restaurant', label: 'Restaurant' },
          { value: 'cafe', label: 'Cafe' },
          { value: 'local food', label: 'Local Food' },
          { value: 'fine dining', label: 'Fine Dining' },
        ]}
        resultsCount={filteredDining.length}
        searchQuery={searchQuery}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        onClear={handleClear}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          {filteredDining.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Showing <span className="font-semibold text-primary">{filteredDining.length}</span> restaurant
                  {filteredDining.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredDining.map((item) => (
                  <ListingCard key={item.id} {...item} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-gray-900 mb-4">No restaurants found</p>
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
