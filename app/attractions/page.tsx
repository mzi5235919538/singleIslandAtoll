'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/PageHero';
import SearchFilterBar from '@/components/SearchFilterBar';
import ListingCard from '@/components/ListingCard';
import MapWrapper from '@/components/MapWrapper';
import { LISTINGS } from '@/data/listings';
import { mapLocations } from '@/data/mapLocations';

const LOCATION_MAP: { [key: string]: string } = {
  'north': 'North',
  'south': 'South',
  'east': 'East',
  'west': 'West',
  'central': 'Central',
};

const TYPE_MAP: { [key: string]: string } = {
  'beach': 'Beach',
  'nature': 'Nature',
  'culture': 'Culture',
  'adventure': 'Adventure',
};

export default function AttractionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  // Get attractions from listings
  const attractions = useMemo(() => {
    return LISTINGS.filter((listing) => listing.category === 'attractions' || listing.category === 'diving').map(
      (listing) => ({
        id: listing.slug,
        title: listing.title,
        description: listing.shortDescription,
        image: listing.images[0],
        category: listing.categoryIcon,
        categoryIcon: listing.categoryIcon,
        location: listing.location,
        type: listing.category === 'diving' ? 'Adventure' : 'Beach',
        href: `/place/${listing.slug}`,
        rating: listing.rating,
        reviews: listing.reviews,
      })
    );
  }, []);

  // Get attraction markers for map
  const attractionMarkers = useMemo(() => {
    return mapLocations
      .filter(loc => loc.category === 'Diving' || loc.category === 'Attractions')
      .map(loc => ({
        position: [loc.coordinates.lat, loc.coordinates.lng] as [number, number],
        title: loc.title,
        category: loc.category,
        slug: loc.slug,
        description: loc.description,
      }));
  }, []);

  // Filter attractions based on search and filters
  const filteredAttractions = useMemo(() => {
    return attractions.filter((attraction) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        attraction.title.toLowerCase().includes(searchLower) ||
        attraction.description.toLowerCase().includes(searchLower) ||
        attraction.location.toLowerCase().includes(searchLower);

      const matchesLocation =
        !selectedLocation ||
        attraction.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = !selectedType || attraction.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [attractions, searchQuery, selectedLocation, selectedType]);

  const handleClear = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType('');
  };

  return (
    <>
      <PageHero
        title="Attractions in Fuvahmulah"
        subtitle="Discover the island's best destinations, from thrilling dives to pristine beaches"
        backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop"
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
          { value: 'beach', label: 'Beach' },
          { value: 'nature', label: 'Nature' },
          { value: 'culture', label: 'Culture' },
          { value: 'adventure', label: 'Adventure' },
        ]}
        resultsCount={filteredAttractions.length}
        searchQuery={searchQuery}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        onClear={handleClear}
      />

      <section className="section-spacing bg-white">
        <div className="section-container">
          {/* View Mode Toggle */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🏠 Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'map'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🗺️ Map View
            </button>
          </div>

          {viewMode === 'map' ? (
            <>
              <div className="mb-4">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-primary">{attractionMarkers.length}</span> locations on
                  map
                </p>
              </div>
              <MapWrapper markers={attractionMarkers} height="h-96" />
            </>
          ) : (
            <>
              {filteredAttractions.length > 0 ? (
                <>
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg">
                      Showing <span className="font-semibold text-primary">{filteredAttractions.length}</span> attraction
                      {filteredAttractions.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredAttractions.map((attraction) => (
                      <ListingCard key={attraction.id} {...attraction} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-2xl font-bold text-gray-900 mb-4">No attractions found</p>
                  <p className="text-gray-600 mb-8">Try adjusting your filters or search query</p>
                  <button
                    onClick={handleClear}
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
