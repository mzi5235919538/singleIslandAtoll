/**
 * Image Requirements Tracking
 * 
 * This file tracks which images are needed for the Fuvahmulah website.
 * Once photos are available, they can be added to public/images/
 * and the corresponding entries here marked as complete.
 * 
 * Updated: December 11, 2025
 */

export interface ImageTodo {
  id: string;
  category: string;
  location: string;
  description: string;
  recommended_dimensions: string;
  max_file_size_kb: number;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  notes: string;
}

export const IMAGE_TODOS: ImageTodo[] = [
  // HERO CAROUSEL IMAGES - HIGHEST PRIORITY
  {
    id: 'hero-dive-into-adventure',
    category: 'Hero Carousel',
    location: 'Tiger Point or diving location',
    description: 'Action shot of diver with shark or vibrant coral',
    recommended_dimensions: '1920x1080',
    max_file_size_kb: 500,
    priority: 'high',
    completed: false,
    notes: 'Used as hero carousel slide - should convey adventure/excitement',
  },
  {
    id: 'hero-experience-paradise',
    category: 'Hero Carousel',
    location: 'Beach/Island view',
    description: 'Scenic island/beach landscape at sunset or golden hour',
    recommended_dimensions: '1920x1080',
    max_file_size_kb: 500,
    priority: 'high',
    completed: false,
    notes: 'Used as hero carousel slide - should convey paradise',
  },
  {
    id: 'hero-explore-fuvahmulah',
    category: 'Hero Carousel',
    location: 'Cityscape/town view',
    description: 'Aerial or scenic view of Dhiddhoo or main island area',
    recommended_dimensions: '1920x1080',
    max_file_size_kb: 500,
    priority: 'high',
    completed: false,
    notes: 'Used as hero carousel slide',
  },
  {
    id: 'hero-create-memories',
    category: 'Hero Carousel',
    location: 'People/Community event',
    description: 'Tourist group enjoying activity or local cultural event',
    recommended_dimensions: '1920x1080',
    max_file_size_kb: 500,
    priority: 'high',
    completed: false,
    notes: 'Used as hero carousel slide - should show people/experiences',
  },

  // TIGER POINT REEF
  {
    id: 'tiger-point-hero',
    category: 'Attractions',
    location: 'Tiger Point Reef',
    description: 'Main/hero photo of Tiger Point - should show water/reef',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Primary photo for Tiger Point attraction page',
  },
  {
    id: 'tiger-point-gallery-1',
    category: 'Attractions',
    location: 'Tiger Point Reef',
    description: 'Underwater photo showing tiger sharks or fish',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Gallery image 1',
  },
  {
    id: 'tiger-point-gallery-2',
    category: 'Attractions',
    location: 'Tiger Point Reef',
    description: 'Coral formations or reef ecosystem',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Gallery image 2',
  },
  {
    id: 'tiger-point-gallery-3',
    category: 'Attractions',
    location: 'Tiger Point Reef',
    description: 'Divers in action or reef landscape',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Gallery image 3',
  },

  // VASHO VEYO BEACH
  {
    id: 'vasho-veyo-hero',
    category: 'Attractions',
    location: 'Vasho Veyo Beach',
    description: 'Beautiful beach landscape with white sand and turquoise water',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Primary photo for Vasho Veyo Beach page',
  },
  {
    id: 'vasho-veyo-gallery-1',
    category: 'Attractions',
    location: 'Vasho Veyo Beach',
    description: 'Close-up of beach/sand with clear water',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Gallery image 1',
  },
  {
    id: 'vasho-veyo-gallery-2',
    category: 'Attractions',
    location: 'Vasho Veyo Beach',
    description: 'Beach at sunset or different time of day',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Gallery image 2',
  },
  {
    id: 'vasho-veyo-gallery-3',
    category: 'Attractions',
    location: 'Vasho Veyo Beach',
    description: 'People enjoying the beach or water activities',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Gallery image 3',
  },

  // BIKINI BEACH
  {
    id: 'bikini-beach-hero',
    category: 'Attractions',
    location: 'Bikini Beach',
    description: 'Beach landscape photo',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Primary photo for Bikini Beach page',
  },
  {
    id: 'bikini-beach-gallery-1',
    category: 'Attractions',
    location: 'Bikini Beach',
    description: 'Detail shot of beach or sunset',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'Gallery image 1',
  },

  // LILY BEACH
  {
    id: 'lily-beach-hero',
    category: 'Attractions',
    location: 'Lily Beach',
    description: 'Beach landscape photo',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Primary photo for Lily Beach page',
  },
  {
    id: 'lily-beach-gallery-1',
    category: 'Attractions',
    location: 'Lily Beach',
    description: 'Detail shot of beach or activities',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'Gallery image 1',
  },

  // DHIDDHOO CENTRAL
  {
    id: 'dhiddhoo-central-hero',
    category: 'Attractions',
    location: 'Dhiddhoo Town Center',
    description: 'Downtown/market area of Dhiddhoo with local architecture',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Primary photo for Dhiddhoo Central page',
  },
  {
    id: 'dhiddhoo-central-gallery-1',
    category: 'Attractions',
    location: 'Dhiddhoo Town Center',
    description: 'Local shops, markets, or cultural sites',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'Gallery image 1',
  },

  // HAMMERHEAD POINT
  {
    id: 'hammerhead-point-hero',
    category: 'Attractions',
    location: 'Hammerhead Point Reef',
    description: 'Underwater photo of hammerhead sharks or reef',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Primary photo for Hammerhead Point page',
  },
  {
    id: 'hammerhead-point-gallery-1',
    category: 'Attractions',
    location: 'Hammerhead Point Reef',
    description: 'Hammerhead shark or school of fish',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Gallery image 1',
  },

  // ACCOMMODATION - HOTELS
  {
    id: 'fuvahmulah-resort-spa-hero',
    category: 'Accommodation',
    location: 'Fuvahmulah Resort & Spa',
    description: 'Exterior shot of resort or main building',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Primary photo for resort page',
  },
  {
    id: 'fuvahmulah-resort-spa-room',
    category: 'Accommodation',
    location: 'Fuvahmulah Resort & Spa',
    description: 'Guest room or suite interior',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Room photo for resort page',
  },
  {
    id: 'fuvahmulah-resort-spa-lobby',
    category: 'Accommodation',
    location: 'Fuvahmulah Resort & Spa',
    description: 'Lobby or reception area',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Lobby photo',
  },
  {
    id: 'fuvahmulah-resort-spa-spa',
    category: 'Accommodation',
    location: 'Fuvahmulah Resort & Spa',
    description: 'Spa area or treatment room',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Spa photo',
  },

  // DINING
  {
    id: 'reef-restaurant-hero',
    category: 'Dining',
    location: 'Reef Restaurant',
    description: 'Restaurant exterior or dining area with sea view',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Primary photo for restaurant page',
  },
  {
    id: 'reef-restaurant-dining-area',
    category: 'Dining',
    location: 'Reef Restaurant',
    description: 'Interior shot of dining area with beachfront view',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Dining area photo',
  },
  {
    id: 'reef-restaurant-dish',
    category: 'Dining',
    location: 'Reef Restaurant',
    description: 'Close-up of a seafood dish',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'high',
    completed: false,
    notes: 'Food photo',
  },

  // HOMEPAGE HIGHLIGHT CARDS
  {
    id: 'highlight-tiger-point-reef',
    category: 'Homepage Highlights',
    location: 'Tiger Point Reef',
    description: 'Card image for Tiger Point highlight (square/medium)',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },
  {
    id: 'highlight-vasho-veyo-beach',
    category: 'Homepage Highlights',
    location: 'Vasho Veyo Beach',
    description: 'Card image for Vasho Veyo Beach highlight',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },
  {
    id: 'highlight-hammerhead-point',
    category: 'Homepage Highlights',
    location: 'Hammerhead Point',
    description: 'Card image for Hammerhead Point highlight',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },
  {
    id: 'highlight-fuvahmulah-resort',
    category: 'Homepage Highlights',
    location: 'Fuvahmulah Resort & Spa',
    description: 'Card image for resort highlight',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },
  {
    id: 'highlight-reef-restaurant',
    category: 'Homepage Highlights',
    location: 'Reef Restaurant',
    description: 'Card image for restaurant highlight',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },
  {
    id: 'highlight-sunset-cruise',
    category: 'Homepage Highlights',
    location: 'Main Beach/Water',
    description: 'Card image for sunset cruise activity',
    recommended_dimensions: '400x300',
    max_file_size_kb: 200,
    priority: 'high',
    completed: false,
    notes: 'Homepage highlight card image',
  },

  // TESTIMONIALS
  {
    id: 'testimonial-john-smith',
    category: 'Testimonials',
    location: 'Avatar/Profile',
    description: 'Profile photo for John Smith testimonial',
    recommended_dimensions: '100x100',
    max_file_size_kb: 50,
    priority: 'low',
    completed: false,
    notes: 'Can use placeholder avatar if real photo unavailable',
  },
  {
    id: 'testimonial-sarah-johnson',
    category: 'Testimonials',
    location: 'Avatar/Profile',
    description: 'Profile photo for Sarah Johnson testimonial',
    recommended_dimensions: '100x100',
    max_file_size_kb: 50,
    priority: 'low',
    completed: false,
    notes: 'Can use placeholder avatar if real photo unavailable',
  },
  {
    id: 'testimonial-michael-chen',
    category: 'Testimonials',
    location: 'Avatar/Profile',
    description: 'Profile photo for Michael Chen testimonial',
    recommended_dimensions: '100x100',
    max_file_size_kb: 50,
    priority: 'low',
    completed: false,
    notes: 'Can use placeholder avatar if real photo unavailable',
  },
  {
    id: 'testimonial-emma-wilson',
    category: 'Testimonials',
    location: 'Avatar/Profile',
    description: 'Profile photo for Emma Wilson testimonial',
    recommended_dimensions: '100x100',
    max_file_size_kb: 50,
    priority: 'low',
    completed: false,
    notes: 'Can use placeholder avatar if real photo unavailable',
  },

  // GALLERY PAGE
  {
    id: 'gallery-landscape-1',
    category: 'Gallery',
    location: 'Island/Landscape',
    description: 'Scenic landscape of Fuvahmulah',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'General gallery image',
  },
  {
    id: 'gallery-landscape-2',
    category: 'Gallery',
    location: 'Island/Landscape',
    description: 'Scenic landscape at sunset/sunrise',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'General gallery image',
  },
  {
    id: 'gallery-landscape-3',
    category: 'Gallery',
    location: 'Island/Landscape',
    description: 'Aerial or scenic view',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'General gallery image',
  },
  {
    id: 'gallery-landscape-4',
    category: 'Gallery',
    location: 'Island/Landscape',
    description: 'Different location or angle',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'General gallery image',
  },
  {
    id: 'gallery-underwater-1',
    category: 'Gallery',
    location: 'Underwater/Reef',
    description: 'Underwater ecosystem or coral',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Underwater gallery image',
  },
  {
    id: 'gallery-underwater-2',
    category: 'Gallery',
    location: 'Underwater/Reef',
    description: 'Marine life or fish',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Underwater gallery image',
  },
  {
    id: 'gallery-underwater-3',
    category: 'Gallery',
    location: 'Underwater/Reef',
    description: 'Diver or shark in action',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'medium',
    completed: false,
    notes: 'Underwater gallery image',
  },
  {
    id: 'gallery-cultural-1',
    category: 'Gallery',
    location: 'Local Community/Cultural',
    description: 'Local people, crafts, or cultural event',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'Cultural gallery image',
  },
  {
    id: 'gallery-cultural-2',
    category: 'Gallery',
    location: 'Local Community/Cultural',
    description: 'Local market, festival, or tradition',
    recommended_dimensions: '800x600',
    max_file_size_kb: 400,
    priority: 'low',
    completed: false,
    notes: 'Cultural gallery image',
  },
];

/**
 * Get summary statistics about image todos
 */
export function getImageTodoStats() {
  const total = IMAGE_TODOS.length;
  const completed = IMAGE_TODOS.filter(todo => todo.completed).length;
  const pending = total - completed;
  const highPriority = IMAGE_TODOS.filter(todo => todo.priority === 'high' && !todo.completed).length;

  return {
    total,
    completed,
    pending,
    highPriority,
    completionPercentage: Math.round((completed / total) * 100),
  };
}

/**
 * Get todos filtered by priority
 */
export function getImageTodosByPriority(priority: 'high' | 'medium' | 'low') {
  return IMAGE_TODOS.filter(todo => todo.priority === priority);
}

/**
 * Get todos filtered by category
 */
export function getImageTodosByCategory(category: string) {
  return IMAGE_TODOS.filter(todo => todo.category === category);
}
