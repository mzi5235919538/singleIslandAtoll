/**
 * Structured Data (JSON-LD) Generators
 * Used for SEO, rich snippets, and search engine understanding
 */

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: string | number | boolean | object | undefined;
}

/**
 * Generate TouristDestination schema
 * For the main Fuvahmulah destination
 */
export function getTouristDestinationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'TouristDestination',
    name: 'Fuvahmulah',
    description: 'Premier tiger shark diving destination in the Maldives with pristine beaches, world-class diving, and authentic island experiences',
    url: 'https://single-island-atoll.vercel.app',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MV',
      addressRegion: 'Fuvahmulah',
      streetAddress: 'Fuvahmulah City'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -0.30,
      longitude: 73.42
    },
    sameAs: [
      'https://www.facebook.com/fuvahmulah',
      'https://www.instagram.com/fuvahmulah',
      'https://twitter.com/fuvahmulah'
    ],
    touristType: ['Adventure traveler', 'Scuba diver', 'Beach lover'],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://single-island-atoll.vercel.app/contact',
        actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform']
      }
    }
  };
}

/**
 * Generate LocalBusiness schema
 * For restaurants and dining establishments
 */
export function getLocalBusinessSchema(business: {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  url: string;
  image: string;
  rating?: number;
  reviews?: number;
}): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Restaurant',
    name: business.name,
    description: business.description,
    image: business.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressCountry: 'MV'
    },
    telephone: business.phone,
    email: business.email,
    url: business.url,
    ...(business.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating,
        reviewCount: business.reviews || 1
      }
    }),
    priceRange: '$$$'
  };
}

/**
 * Generate LodgingBusiness schema
 * For hotels, guesthouses, resorts
 */
export function getLodgingBusinessSchema(lodge: {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  url: string;
  image: string;
  amenities: string[];
  rating?: number;
  reviews?: number;
  priceRange?: string;
}): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'LodgingBusiness',
    name: lodge.name,
    description: lodge.description,
    image: lodge.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: lodge.address,
      addressCountry: 'MV'
    },
    telephone: lodge.phone,
    email: lodge.email,
    url: lodge.url,
    amenityFeature: lodge.amenities.map(amenity => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity
    })),
    ...(lodge.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: lodge.rating,
        reviewCount: lodge.reviews || 1
      }
    }),
    ...(lodge.priceRange && { priceRange: lodge.priceRange })
  };
}

/**
 * Generate TouristAttraction schema
 * For dive sites, beaches, and attractions
 */
export function getTouristAttractionSchema(attraction: {
  name: string;
  description: string;
  image: string;
  url: string;
  address: string;
  openingHoursSpecification?: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
}): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'TouristAttraction',
    name: attraction.name,
    description: attraction.description,
    image: attraction.image,
    url: attraction.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: attraction.address,
      addressCountry: 'MV'
    },
    ...(attraction.openingHoursSpecification && {
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: attraction.openingHoursSpecification.dayOfWeek,
        opens: attraction.openingHoursSpecification.opens,
        closes: attraction.openingHoursSpecification.closes
      }
    })
  };
}

/**
 * Generate Organization schema
 * For the main website organization
 */
export function getOrganizationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    name: 'Fuvahmulah Tourism',
    url: 'https://single-island-atoll.vercel.app',
    logo: 'https://single-island-atoll.vercel.app/logo.png',
    description: 'Premier tiger shark diving destination and travel guide for Fuvahmulah, Maldives',
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+960-775-7070',
      email: 'info@fuvahmulah.travel',
      areaServed: 'MV',
      availableLanguage: 'en'
    },
    sameAs: [
      'https://www.facebook.com/fuvahmulah',
      'https://www.instagram.com/fuvahmulah',
      'https://twitter.com/fuvahmulah'
    ]
  };
}

/**
 * Generate BreadcrumbList schema
 * For navigation breadcrumbs
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate FAQPage schema
 * For FAQ sections
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>): StructuredData {
  return {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Render structured data as a script tag component
 */
export function renderStructuredData(data: StructuredData | StructuredData[]): string {
  return JSON.stringify(Array.isArray(data) ? data : data, null, 2);
}
