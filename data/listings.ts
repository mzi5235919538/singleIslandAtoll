export interface Listing {
  slug: string;
  title: string;
  category: 'diving' | 'attractions' | 'dining' | 'accommodation' | 'activities';
  categoryIcon: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  features: string[];
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: string;
  priceRange?: string;
  rating: number;
  reviews: number;
}

export const LISTINGS: Listing[] = [
  // Attractions
  {
    slug: 'tiger-point-reef',
    title: 'Tiger Point Reef',
    category: 'diving',
    categoryIcon: '🤿',
    location: 'North Reef, Fuvahmulah',
    shortDescription: 'Experience thrilling tiger shark encounters at this iconic diving spot with pristine coral formations',
    fullDescription: `Tiger Point Reef is one of the most thrilling and sought-after diving destinations in Fuvahmulah. Known for its frequent tiger shark encounters, this reef offers an unforgettable underwater experience for certified divers. The site features pristine coral formations, abundant marine life, and dramatic underwater topography that creates a truly magical diving environment.

The reef is home to a diverse ecosystem including reef sharks, schools of barracuda, groupers, and colorful tropical fish. The crystal-clear waters provide excellent visibility, making it ideal for underwater photography. Whether you're an experienced diver seeking an adrenaline rush or a certified diver wanting to see these magnificent sharks, Tiger Point Reef delivers an extraordinary adventure.

Our professional dive operators ensure your safety while providing expert guidance about marine life behavior and conservation. Each dive is carefully planned to maximize your experience while respecting the delicate reef ecosystem.`,
    images: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
    ],
    features: [
      'Tiger shark encounters',
      'Pristine coral formations',
      'Excellent visibility',
      'PADI certified operators',
      'Professional guides',
      'Safety equipment provided',
      'Suitable for intermediate+ divers',
      'Photography opportunities',
    ],
    contact: {
      phone: '+960 123-4567',
      email: 'info@tigerpoint.mv',
      website: 'www.tigerpoint.mv',
    },
    hours: 'Daily: 6:00 AM - 6:00 PM',
    priceRange: '$120-150 per dive',
    rating: 5,
    reviews: 128,
  },
  {
    slug: 'vasho-veyo-beach',
    title: 'Vasho Veyo Beach',
    category: 'attractions',
    categoryIcon: '🏖️',
    location: 'South Beach, Fuvahmulah',
    shortDescription: 'Pristine sandy beach with crystal clear waters perfect for swimming, sunbathing, and sunset views',
    fullDescription: `Vasho Veyo Beach is one of Fuvahmulah's most beautiful and accessible beaches, offering pristine white sand and crystal-clear turquoise waters. Located on the southern coast of the island, this stunning beach is perfect for families, couples, and solo travelers seeking relaxation and natural beauty.

The beach stretches for nearly a kilometer with gentle slopes ideal for swimming. The shallow waters are perfect for children and non-swimmers, while the deeper areas beyond the reef offer excellent snorkeling opportunities. The soft sand is ideal for beach games, sunbathing, and creating lasting memories.

One of the best features of Vasho Veyo Beach is its spectacular sunset views. As the sun descends toward the horizon, the sky transforms into shades of orange, pink, and purple, creating a truly magical atmosphere. Bring a picnic, watch the sunset, and experience the tranquility of island life. The beach is well-maintained and equipped with basic facilities including shaded areas and nearby cafes.`,
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    ],
    features: [
      'Pristine white sand',
      'Crystal clear waters',
      'Shallow swimming area',
      'Snorkeling opportunities',
      'Sunset viewing spot',
      'Family-friendly',
      'Shaded areas available',
      'Beach cafes nearby',
    ],
    contact: {
      phone: '+960 987-6543',
      email: 'info@vashobeach.mv',
    },
    hours: 'Open 24/7',
    priceRange: 'Free admission',
    rating: 4.8,
    reviews: 92,
  },
  {
    slug: 'hammerhead-point',
    title: 'Hammerhead Point',
    category: 'diving',
    categoryIcon: '🤿',
    location: 'East Reef, Fuvahmulah',
    shortDescription: 'Premier diving location famous for hammerhead shark encounters with dramatic underwater topography',
    fullDescription: `Hammerhead Point is a premier diving destination renowned worldwide for its regular hammerhead shark encounters. Located on the eastern reefs of Fuvahmulah, this site offers one of the most thrilling and unique diving experiences in the Maldives.

The dramatic underwater landscape features steep drop-offs, interesting rock formations, and a rich ecosystem that attracts large pelagic species. The nutrient-rich currents bring in mackerel, barracuda, snappers, and of course, the majestic hammerhead sharks that make this site special.

Diving at Hammerhead Point requires certification and experience due to the deeper waters and currents. Our expert dive masters carefully select the optimal diving time and conditions to maximize your chances of encountering these magnificent creatures. The sheer thrill of seeing hammerheads in their natural habitat is an experience you'll never forget.`,
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    ],
    features: [
      'Hammerhead shark encounters',
      'Dramatic underwater topography',
      'Strong currents - exciting diving',
      'Large pelagic species',
      'Expert dive masters',
      'Certification required',
      'Optimal timing selection',
      'Professional safety protocols',
    ],
    contact: {
      phone: '+960 234-5678',
      email: 'info@hammerhead.mv',
      website: 'www.hammerheadpoint.mv',
    },
    hours: 'Daily: 6:00 AM - 6:00 PM',
    priceRange: '$150-180 per dive',
    rating: 4.9,
    reviews: 156,
  },
  // Accommodation
  {
    slug: 'fuvahmulah-resort-spa',
    title: 'Fuvahmulah Resort & Spa',
    category: 'accommodation',
    categoryIcon: '⭐',
    location: 'Thinadhoo Beach, Fuvahmulah',
    shortDescription: 'Luxury 5-star resort with world-class amenities, spa services, and fine dining overlooking pristine beaches',
    fullDescription: `Fuvahmulah Resort & Spa represents the pinnacle of luxury hospitality in the Maldives. Situated on the pristine Thinadhoo Beach, this world-class resort offers unparalleled views, exceptional service, and unforgettable experiences.

The resort features 50+ elegantly appointed deluxe rooms and beachfront villas, each designed with modern amenities and traditional Maldivian touches. Wake up to ocean views, enjoy private beach access, and experience the ultimate in island relaxation. Every room includes a private balcony or terrace, premium bedding, air conditioning, and state-of-the-art entertainment systems.

Our full-service spa offers rejuvenating treatments using natural and organic products. Indulge in traditional Maldivian therapies, international wellness treatments, and relaxation packages. The resort also features multiple dining venues serving authentic Maldivian cuisine, international dishes, and gourmet experiences. Water sports facilities, diving center partnerships, and curated island tours are available to add adventure to your stay.

Whether you're seeking a romantic honeymoon, a family vacation, or a peaceful retreat, Fuvahmulah Resort & Spa delivers an extraordinary island experience.`,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    ],
    features: [
      '50+ Deluxe Rooms & Villas',
      'Beachfront location',
      'Full-service spa',
      'Multiple restaurants',
      'Private beach access',
      'Water sports facilities',
      'Diving center partnerships',
      'Concierge services',
      'Room service 24/7',
      'Honeymoon packages',
    ],
    contact: {
      phone: '+960 456-7890',
      email: 'reservations@fuvahmulahresort.com',
      website: 'www.fuvahmulahresort.mv',
    },
    hours: 'Check-in: 2:00 PM | Check-out: 11:00 AM',
    priceRange: '$300-800 per night',
    rating: 5,
    reviews: 342,
  },
  {
    slug: 'island-paradise-hotel',
    title: 'Island Paradise Hotel',
    category: 'accommodation',
    categoryIcon: '🏨',
    location: 'City Center, Fuvahmulah',
    shortDescription: 'Charming 3-star hotel with authentic hospitality, local cuisine, and convenient island location',
    fullDescription: `Island Paradise Hotel is a delightful mid-range accommodation offering authentic Maldivian hospitality combined with modern comforts. Located in the heart of the island, it provides convenient access to local markets, restaurants, and cultural attractions.

The hotel features 30 comfortable rooms equipped with essential amenities including air conditioning, private bathrooms, WiFi, and flat-screen TVs. Each room is thoughtfully decorated reflecting local culture and design. The friendly staff goes above and beyond to ensure your comfort and satisfaction.

Enjoy authentic Maldivian and international cuisine at our in-house restaurant. The skilled chefs prepare meals using fresh local ingredients and traditional recipes. The hotel bar serves refreshing beverages and cocktails in a relaxed atmosphere.

Island Paradise Hotel is perfect for travelers seeking authentic island experiences without the resort prices. Our location provides easy access to the local market, nearby restaurants, diving centers, and tour operators. The team can arrange activities, transportation, and guided tours to help you explore Fuvahmulah like a local.`,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595565007841-3f397f1c9b1b?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578654881063-f3f4ebc36371?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    ],
    features: [
      '30 Comfortable Rooms',
      'Central location',
      'Restaurant on-site',
      'Bar service',
      'WiFi throughout',
      'Tour arrangement',
      'Local market access',
      'Friendly staff',
      'Activity booking assistance',
      'Reasonable prices',
    ],
    contact: {
      phone: '+960 789-0123',
      email: 'info@islandparadise.mv',
      website: 'www.islandparadisehotel.mv',
    },
    hours: 'Check-in: 1:00 PM | Check-out: 11:00 AM',
    priceRange: '$80-150 per night',
    rating: 4.7,
    reviews: 218,
  },
  // Dining
  {
    slug: 'reef-restaurant',
    title: 'Reef Restaurant',
    category: 'dining',
    categoryIcon: '🍽️',
    location: 'Thinadhoo Beach, Fuvahmulah',
    shortDescription: 'Premium beachfront dining with fresh seafood, Asian fusion, and sunset views. Perfect for special occasions',
    fullDescription: `Reef Restaurant is an elegant dining establishment offering premium culinary experiences with breathtaking beachfront views. Situated directly on Thinadhoo Beach, this restaurant combines fine dining with a relaxed tropical atmosphere.

The menu features fresh seafood sourced daily from local fishermen, complemented by Asian fusion cuisine prepared by our expert chefs. Signature dishes include grilled fish with tropical fruit sauces, coconut curries, pan-seared tuna, and creative seafood platters. International options are also available for those preferring familiar flavors.

The open-air dining area provides panoramic ocean views, making sunset dining particularly magical. Watch the sky transform into vibrant colors while enjoying expertly prepared food and curated wine selections. The bar offers tropical cocktails, fine spirits, and an extensive beverage menu.

Reef Restaurant is perfect for romantic dinners, special celebrations, or memorable dining experiences. Reservations are highly recommended, especially for dinner. The attentive staff ensures impeccable service while maintaining the relaxed island vibe.`,
    images: [
      'https://images.unsplash.com/photo-1631504949f45-b0fc0e7bab67?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504674900968-67642b4aa2d1?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631504949f45-b0fc0e7bab67?w=600&h=400&fit=crop',
    ],
    features: [
      'Beachfront location',
      'Fresh daily seafood',
      'Asian fusion cuisine',
      'Sunset views',
      'Full bar service',
      'Wine selections',
      'Fine dining ambiance',
      'Romantic atmosphere',
      'Professional staff',
      'Reservation recommended',
    ],
    contact: {
      phone: '+960 321-0987',
      email: 'reservations@reef-restaurant.mv',
      website: 'www.reef-restaurant.mv',
    },
    hours: 'Lunch: 12:00 PM - 3:00 PM | Dinner: 6:00 PM - 11:00 PM',
    priceRange: '$30-60 per person',
    rating: 5,
    reviews: 187,
  },
  {
    slug: 'maldivian-kitchen',
    title: 'Maldivian Kitchen',
    category: 'dining',
    categoryIcon: '🥘',
    location: 'Town Center, Fuvahmulah',
    shortDescription: 'Authentic traditional Maldivian cuisine. Famous for Garudhiya, Mas Huni, and aromatic curries',
    fullDescription: `Maldivian Kitchen is a charming local restaurant dedicated to preserving and celebrating authentic Maldivian cuisine. Located in the heart of town, this casual eatery offers genuine island flavors prepared using time-honored recipes and fresh local ingredients.

The restaurant specializes in traditional Maldivian dishes that have been enjoyed for generations. Garudhiya, the iconic fish soup served with rice and spice paste, is prepared to perfection. Mas Huni, a delicious tuna salad with coconut and spices, is a must-try specialty. The restaurant also serves exceptional curries, grilled fish, and other local favorites.

The warm and welcoming atmosphere reflects true Maldivian hospitality. The staff is knowledgeable about each dish and happy to explain the cultural significance and ingredients. Prices are very reasonable, making authentic island cuisine accessible to all visitors.

Maldivian Kitchen is perfect for experiencing local food culture, meeting islanders, and enjoying affordable dining. Arrive early during peak hours as this popular spot fills quickly. The casual setting is ideal for groups, families, and solo travelers alike.`,
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    ],
    features: [
      'Authentic Maldivian cuisine',
      'Traditional recipes',
      'Fresh local ingredients',
      'Garudhiya specialty',
      'Mas Huni available',
      'Aromatic curries',
      'Warm hospitality',
      'Affordable prices',
      'Local atmosphere',
      'Family-friendly',
    ],
    contact: {
      phone: '+960 432-1098',
      email: 'info@maldivian-kitchen.mv',
    },
    hours: 'Breakfast: 7:00 AM - 10:00 AM | Lunch: 12:00 PM - 3:00 PM | Dinner: 6:00 PM - 10:00 PM',
    priceRange: '$3-10 per person',
    rating: 4.7,
    reviews: 124,
  },
  // Activities
  {
    slug: 'fuvahmulah-dive-centre',
    title: 'Fuvahmulah Dive Centre',
    category: 'activities',
    categoryIcon: '🤿',
    location: 'Main Harbor, Fuvahmulah',
    shortDescription: 'PADI 5-Star certified center with experienced instructors. Courses from Open Water to Divemaster available',
    fullDescription: `Fuvahmulah Dive Centre is a PADI 5-Star dive facility committed to providing exceptional diving experiences in one of the world's premier diving destinations. With highly experienced instructors and state-of-the-art equipment, we ensure both safety and unforgettable underwater adventures.

Whether you're a beginner wanting your first underwater experience or an advanced diver seeking specialized training, our certified instructors provide personalized guidance. We offer comprehensive courses including Open Water Certification, Advanced Open Water, specialty courses (Deep Diving, Navigation, Wreck Diving), and Divemaster training.

Our fleet of well-maintained boats accesses the best dive sites around Fuvahmulah, from the famous shark encounters at Tiger Point to the unique hammerhead shark meetings at Hammerhead Point. Small group sizes (maximum 6 divers per guide) ensure personalized attention and optimal safety.

We use only the highest quality diving equipment and strictly adhere to safety protocols. All our staff undergoes regular training and certification updates. The dive center is equipped with oxygen, emergency medical supplies, and direct communication with local medical facilities.

Fuvahmulah Dive Centre isn't just about certification—it's about creating lifelong diving memories and fostering marine conservation awareness.`,
    images: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
    ],
    features: [
      'PADI 5-Star facility',
      'Experienced instructors',
      'All certification levels',
      'Small group dives',
      'Modern equipment',
      'Safety-first approach',
      'Competitive pricing',
      'Daily dive trips',
      'Specialty courses',
      'Marine conservation focus',
    ],
    contact: {
      phone: '+960 654-3210',
      email: 'info@fuvahmulah-dive.mv',
      website: 'www.fuvahmulah-dive-centre.mv',
    },
    hours: 'Daily: 6:00 AM - 6:00 PM',
    priceRange: '$50-400 (Dives $50-150, Courses $300-400)',
    rating: 4.8,
    reviews: 201,
  },
  {
    slug: 'sunset-cruise',
    title: 'Sunset Cruise',
    category: 'activities',
    categoryIcon: '🚤',
    location: 'Main Beach, Fuvahmulah',
    shortDescription: 'Romantic evening cruises with scenic views, refreshments, and opportunities for photography',
    fullDescription: `Sunset Cruise offers a magical way to experience the natural beauty of Fuvahmulah as the day transitions into night. Our romantic evening cruises combine spectacular ocean views, refreshing beverages, and the perfect atmosphere for creating lasting memories.

Each cruise departs from the main beach and travels around the island, providing panoramic views of the coastline and surrounding reefs. As the sun descends toward the horizon, the sky transforms into breathtaking shades of orange, pink, purple, and gold—a photographer's dream and a romantic's paradise.

Onboard, enjoy refreshments including tropical fruits, snacks, and beverages. Complimentary non-alcoholic drinks are provided, with optional alcoholic beverages available for purchase. The boat is spacious and comfortable with seating for up to 40 guests, providing ample space to relax and soak in the views.

The professional crew ensures your safety and comfort throughout the cruise. Photography opportunities abound, and many guests capture stunning sunset images from the water. The cruise is perfect for couples, families, or groups celebrating special occasions.

Whether you're seeking romance, adventure, or simply a relaxing evening on the water, Sunset Cruise delivers an unforgettable Fuvahmulah experience.`,
    images: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop',
    ],
    features: [
      'Scenic ocean views',
      'Golden hour photography',
      'Romantic atmosphere',
      'Tropical refreshments',
      'Comfortable seating',
      'Professional crew',
      'Safe & reliable',
      'Flexible scheduling',
      'Special occasion ready',
      'Perfect for couples',
    ],
    contact: {
      phone: '+960 765-4321',
      email: 'info@sunset-cruise.mv',
      website: 'www.sunset-cruise-fuvahmulah.mv',
    },
    hours: 'Daily: Departure 5:30 PM - 7:30 PM (varies by season)',
    priceRange: '$40-80 per person',
    rating: 4.9,
    reviews: 203,
  },
];

export function getListingBySlug(slug: string): Listing | undefined {
  return LISTINGS.find((listing) => listing.slug === slug);
}

export function getListingsByCategory(
  category: Listing['category']
): Listing[] {
  return LISTINGS.filter((listing) => listing.category === category);
}

export function getRelatedListings(
  currentSlug: string,
  limit: number = 4
): Listing[] {
  const current = getListingBySlug(currentSlug);
  if (!current) return [];

  return LISTINGS.filter(
    (listing) => listing.category === current.category && listing.slug !== currentSlug
  ).slice(0, limit);
}
