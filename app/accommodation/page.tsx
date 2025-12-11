'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';
import SearchFilterBar from '@/components/SearchFilterBar';
import ListingCard from '@/components/ListingCard';
import { LISTINGS } from '@/data/listings';

export const metadata = {
  title: 'Accommodation in Fuvahmulah - Hotels, Resorts & Guest Houses',
  description: 'Find the perfect place to stay in Fuvahmulah. From luxury resorts to budget-friendly guest houses, all options offer authentic island hospitality.',
};

export default function AccommodationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Get accommodations from listings
  const accommodations = useMemo(() => {
    return LISTINGS.filter((listing) => listing.category === 'accommodation').map((listing) => ({
      id: listing.slug,
      title: listing.title,
      description: listing.shortDescription,
      image: listing.images[0],
      category: listing.categoryIcon,
      categoryIcon: listing.categoryIcon,
      location: listing.location,
      type: 'Resort', // Default type
      href: `/place/${listing.slug}`,
      rating: listing.rating,
      reviews: listing.reviews,
    }));
  }, []);

  // Filter accommodations based on search and filters
  const filteredAccommodations = useMemo(() => {
    return accommodations.filter((accommodation) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        accommodation.title.toLowerCase().includes(searchLower) ||
        accommodation.description.toLowerCase().includes(searchLower) ||
        accommodation.location.toLowerCase().includes(searchLower);

      const matchesLocation =
        !selectedLocation ||
        accommodation.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = !selectedType || accommodation.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [accommodations, searchQuery, selectedLocation, selectedType]);

  const handleClear = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
  };

  return (
    <>
      <PageHero
        title="Where to Stay in Fuvahmulah"
        subtitle="Discover comfortable accommodations from luxury resorts to budget-friendly guest houses"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop"
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
          { value: 'resort', label: 'Resort' },
          { value: 'hotel', label: 'Hotel' },
          { value: 'guesthouse', label: 'Guesthouse' },
          { value: 'homestay', label: 'Homestay' },
        ]}
        resultsCount={filteredAccommodations.length}
        searchQuery={searchQuery}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        onClear={handleClear}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          {filteredAccommodations.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  Showing <span className="font-semibold text-primary">{filteredAccommodations.length}</span>{' '}
                  accommodation{filteredAccommodations.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredAccommodations.map((accommodation) => (
                  <ListingCard key={accommodation.id} {...accommodation} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-gray-900 mb-4">No accommodations found</p>
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
