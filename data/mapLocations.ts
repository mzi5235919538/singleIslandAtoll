/**
 * Map Locations Data for Fuvahmulah
 * Contains GPS coordinates and information for all attractions, dining, and accommodations
 */

export interface MapLocation {
  id: string;
  title: string;
  category: 'Diving' | 'Dining' | 'Accommodation' | 'Attractions';
  slug: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  phone?: string;
  website?: string;
}

// TODO: Replace with actual Fuvahmulah coordinates
// These are approximate center points for demonstration
// Update with real GPS data from local sources

export const mapLocations: MapLocation[] = [
  // ATTRACTIONS - DIVING SITES
  {
    id: 'tiger-point-reef',
    title: 'Tiger Point Reef',
    category: 'Diving',
    slug: 'tiger-point-reef',
    coordinates: {
      lat: -0.2850,
      lng: 73.4200,
    },
    description: 'Premium diving spot famous for tiger shark encounters',
  },
  {
    id: 'hammerhead-point',
    title: 'Hammerhead Point',
    category: 'Diving',
    slug: 'hammerhead-point',
    coordinates: {
      lat: -0.2900,
      lng: 73.4300,
    },
    description: 'Elite diving location with hammerhead shark sightings',
  },
  {
    id: 'vasho-veyo-beach',
    title: 'Vasho Veyo Beach',
    category: 'Attractions',
    slug: 'vasho-veyo-beach',
    coordinates: {
      lat: -0.2950,
      lng: 73.4250,
    },
    description: 'Pristine sandy beach with crystal clear waters',
  },
  {
    id: 'bikini-beach',
    title: 'Bikini Beach',
    category: 'Attractions',
    slug: 'bikini-beach',
    coordinates: {
      lat: -0.3000,
      lng: 73.4150,
    },
    description: 'Beautiful beach known for water sports',
  },
  {
    id: 'lily-beach',
    title: 'Lily Beach',
    category: 'Attractions',
    slug: 'lily-beach',
    coordinates: {
      lat: -0.2800,
      lng: 73.4350,
    },
    description: 'Scenic beach with unique wildlife',
  },
  {
    id: 'dhiddhoo-central',
    title: 'Dhiddhoo Central',
    category: 'Attractions',
    slug: 'dhiddhoo-central',
    coordinates: {
      lat: -0.3050,
      lng: 73.4400,
    },
    description: 'Main town center with local markets and culture',
  },

  // ACCOMMODATION - HOTELS & RESORTS
  {
    id: 'fuvahmulah-resort-spa',
    title: 'Fuvahmulah Resort & Spa',
    category: 'Accommodation',
    slug: 'fuvahmulah-resort-spa',
    coordinates: {
      lat: -0.2900,
      lng: 73.4150,
    },
    description: 'Luxury 5-star resort with world-class amenities',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'island-breeze-hotel',
    title: 'Island Breeze Hotel',
    category: 'Accommodation',
    slug: 'island-breeze-hotel',
    coordinates: {
      lat: -0.3000,
      lng: 73.4200,
    },
    description: 'Mid-range beachfront hotel',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'tropical-escape-guesthouse',
    title: 'Tropical Escape Guesthouse',
    category: 'Accommodation',
    slug: 'tropical-escape-guesthouse',
    coordinates: {
      lat: -0.3100,
      lng: 73.4250,
    },
    description: 'Cozy local guesthouse with authentic experience',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'ocean-view-inn',
    title: 'Ocean View Inn',
    category: 'Accommodation',
    slug: 'ocean-view-inn',
    coordinates: {
      lat: -0.2750,
      lng: 73.4300,
    },
    description: 'Intimate inn with stunning ocean views',
    phone: '+960-XXXX-XXXX',
  },

  // DINING - RESTAURANTS
  {
    id: 'reef-restaurant',
    title: 'Reef Restaurant',
    category: 'Dining',
    slug: 'reef-restaurant',
    coordinates: {
      lat: -0.2870,
      lng: 73.4220,
    },
    description: 'Premium beachfront dining with fresh seafood',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'island-grill',
    title: 'Island Grill',
    category: 'Dining',
    slug: 'island-grill',
    coordinates: {
      lat: -0.2950,
      lng: 73.4280,
    },
    description: 'Local grilled specialties and international cuisine',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'coconut-cafe',
    title: 'Coconut Café',
    category: 'Dining',
    slug: 'coconut-cafe',
    coordinates: {
      lat: -0.3020,
      lng: 73.4320,
    },
    description: 'Casual beachside café with fresh coconut drinks',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'maldivian-kitchen',
    title: 'Maldivian Kitchen',
    category: 'Dining',
    slug: 'maldivian-kitchen',
    coordinates: {
      lat: -0.3050,
      lng: 73.4180,
    },
    description: 'Authentic local cuisine and traditional dishes',
    phone: '+960-XXXX-XXXX',
  },
  {
    id: 'sunset-lounge',
    title: 'Sunset Lounge',
    category: 'Dining',
    slug: 'sunset-lounge',
    coordinates: {
      lat: -0.2800,
      lng: 73.4400,
    },
    description: 'Rooftop bar and lounge with sunset views',
    phone: '+960-XXXX-XXXX',
  },
];

/**
 * Get all locations of a specific category
 */
export function getLocationsByCategory(category: MapLocation['category']): MapLocation[] {
  return mapLocations.filter(location => location.category === category);
}

/**
 * Get a single location by slug
 */
export function getLocationBySlug(slug: string): MapLocation | undefined {
  return mapLocations.find(location => location.slug === slug);
}

/**
 * Get nearby locations within a radius (in kilometers)
 */
export function getNearbyLocations(
  lat: number,
  lng: number,
  radiusKm: number = 5
): MapLocation[] {
  const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return mapLocations.filter(location => {
    const distance = getDistance(lat, lng, location.coordinates.lat, location.coordinates.lng);
    return distance <= radiusKm;
  });
}

/**
 * Get Google Maps URL for a location
 */
export function getGoogleMapsUrl(lat: number, lng: number, name?: string): string {
  const query = name ? encodeURIComponent(name) : `${lat},${lng}`;
  return `https://www.google.com/maps/search/${query}/@${lat},${lng},15z`;
}

/**
 * Get statistics about map data
 */
export function getMapStatistics() {
  const byCategory = {
    'Diving': mapLocations.filter(l => l.category === 'Diving').length,
    'Attractions': mapLocations.filter(l => l.category === 'Attractions').length,
    'Accommodation': mapLocations.filter(l => l.category === 'Accommodation').length,
    'Dining': mapLocations.filter(l => l.category === 'Dining').length,
  };

  return {
    total: mapLocations.length,
    byCategory,
  };
}
