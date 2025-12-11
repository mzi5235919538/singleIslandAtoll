/**
 * Image Constants for Fuvahmulah Website
 * 
 * This file centralizes all image path references throughout the site.
 * Each image path corresponds to files in public/images/
 * 
 * TODO: Replace placeholder paths with actual Fuvahmulah photos
 * as they become available from local photographers/tourism board.
 */

export const IMAGES = {
  // HERO CAROUSEL & HOMEPAGE HERO IMAGES
  hero: {
    // TODO: Replace with actual Fuvahmulah hero photos
    slide1: '/images/hero/dive-into-adventure.jpg',
    slide2: '/images/hero/experience-paradise.jpg',
    slide3: '/images/hero/explore-fuvahmulah.jpg',
    slide4: '/images/hero/create-memories.jpg',
  },

  // ATTRACTIONS
  attractions: {
    tigerPoint: {
      // TODO: Get real photos of Tiger Point Reef
      hero: '/images/attractions/tiger-point/hero.jpg',
      gallery: [
        '/images/attractions/tiger-point/gallery-1.jpg',
        '/images/attractions/tiger-point/gallery-2.jpg',
        '/images/attractions/tiger-point/gallery-3.jpg',
      ],
    },
    vashoVeyo: {
      // TODO: Get real photos of Vasho Veyo Beach
      hero: '/images/attractions/vasho-veyo/hero.jpg',
      gallery: [
        '/images/attractions/vasho-veyo/gallery-1.jpg',
        '/images/attractions/vasho-veyo/gallery-2.jpg',
        '/images/attractions/vasho-veyo/gallery-3.jpg',
      ],
    },
    bikiniBeach: {
      // TODO: Get real photos of Bikini Beach
      hero: '/images/attractions/bikini-beach/hero.jpg',
      gallery: [
        '/images/attractions/bikini-beach/gallery-1.jpg',
        '/images/attractions/bikini-beach/gallery-2.jpg',
      ],
    },
    lilyBeach: {
      // TODO: Get real photos of Lily Beach
      hero: '/images/attractions/lily-beach/hero.jpg',
      gallery: [
        '/images/attractions/lily-beach/gallery-1.jpg',
        '/images/attractions/lily-beach/gallery-2.jpg',
      ],
    },
    dhiddhoo: {
      // TODO: Get real photos of Dhiddhoo Central/downtown area
      hero: '/images/attractions/dhiddhoo-central/hero.jpg',
      gallery: [
        '/images/attractions/dhiddhoo-central/gallery-1.jpg',
        '/images/attractions/dhiddhoo-central/gallery-2.jpg',
      ],
    },
    hammerheadPoint: {
      // TODO: Get real photos of Hammerhead Point
      hero: '/images/attractions/hammerhead-point/hero.jpg',
      gallery: [
        '/images/attractions/hammerhead-point/gallery-1.jpg',
        '/images/attractions/hammerhead-point/gallery-2.jpg',
      ],
    },
  },

  // ACCOMMODATION
  accommodation: {
    hotels: {
      // TODO: Get photos of Fuvahmulah Resort & Spa and other hotels
      fuvahmulahResortSpa: {
        hero: '/images/accommodation/hotels/fuvahmulah-resort-spa/hero.jpg',
        gallery: [
          '/images/accommodation/hotels/fuvahmulah-resort-spa/room-1.jpg',
          '/images/accommodation/hotels/fuvahmulah-resort-spa/lobby.jpg',
          '/images/accommodation/hotels/fuvahmulah-resort-spa/spa.jpg',
        ],
      },
    },
    guestHouses: {
      // TODO: Get photos of local guest houses
      default: '/images/accommodation/guest-houses/default-guesthouse.jpg',
    },
    inns: {
      // TODO: Get photos of local inns
      default: '/images/accommodation/inns/default-inn.jpg',
    },
  },

  // DINING
  dining: {
    // TODO: Get photos of local restaurants
    reefRestaurant: {
      hero: '/images/dining/reef-restaurant/hero.jpg',
      gallery: [
        '/images/dining/reef-restaurant/dining-area.jpg',
        '/images/dining/reef-restaurant/dish-1.jpg',
      ],
    },
    localCuisine: {
      default: '/images/dining/local-cuisine.jpg',
    },
  },

  // HOMEPAGE HIGHLIGHTS (Cards)
  highlights: {
    // TODO: Replace all highlight card images with real Fuvahmulah photos
    tigerPointReef: '/images/highlights/tiger-point-reef.jpg',
    vashoVeyoBeach: '/images/highlights/vasho-veyo-beach.jpg',
    hammerheadPoint: '/images/highlights/hammerhead-point.jpg',
    fuvahmulahResort: '/images/highlights/fuvahmulah-resort-spa.jpg',
    reefRestaurant: '/images/highlights/reef-restaurant.jpg',
    sunsetCruise: '/images/highlights/sunset-cruise.jpg',
  },

  // TESTIMONIALS
  testimonials: {
    // TODO: Get diverse user/tourist photos or use avatars
    johnSmith: '/images/testimonials/john-smith.jpg',
    sarahJohnson: '/images/testimonials/sarah-johnson.jpg',
    michaelChen: '/images/testimonials/michael-chen.jpg',
    emmaWilson: '/images/testimonials/emma-wilson.jpg',
  },

  // GALLERY
  gallery: {
    // TODO: Get a diverse collection of Fuvahmulah landscape, underwater, and cultural photos
    landscapes: [
      '/images/gallery/landscape-1.jpg',
      '/images/gallery/landscape-2.jpg',
      '/images/gallery/landscape-3.jpg',
      '/images/gallery/landscape-4.jpg',
    ],
    underwater: [
      '/images/gallery/underwater-1.jpg',
      '/images/gallery/underwater-2.jpg',
      '/images/gallery/underwater-3.jpg',
    ],
    cultural: [
      '/images/gallery/cultural-1.jpg',
      '/images/gallery/cultural-2.jpg',
    ],
  },

  // BLOG/ARTICLES
  blog: {
    // TODO: Get featured images for blog posts
    default: '/images/blog/default-featured.jpg',
  },
};

/**
 * Helper function to get image path with fallback
 * Useful for ensuring graceful degradation if images are missing
 */
export function getImagePath(path: string | undefined, fallback: string = IMAGES.highlights.tigerPointReef): string {
  return path || fallback;
}

/**
 * Type-safe way to access image constants
 * This prevents typos and ensures images referenced actually exist in the constant
 */
export type ImageKey = keyof typeof IMAGES;
