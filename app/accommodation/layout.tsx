import { Metadata } from 'next';
import { getLodgingBusinessSchema, renderStructuredData } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Accommodation & Lodging',
  description: 'Find the perfect place to stay in Fuvahmulah. From luxury resorts to budget-friendly guesthouses and charming inns, discover comfortable accommodations for your island getaway.',
  keywords: ['Fuvahmulah accommodation', 'hotels Maldives', 'resorts', 'guesthouses', 'island lodging', 'Maldives stays'],
  openGraph: {
    title: 'Accommodation & Lodging in Fuvahmulah',
    description: 'Find luxury resorts, hotels, guesthouses, and inns in Fuvahmulah',
    images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=630&fit=crop'],
  },
};

export default function AccommodationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the accommodation page
  const accommodationSchema = getLodgingBusinessSchema({
    name: 'Fuvahmulah Accommodation',
    description: 'Luxury resorts, hotels, guesthouses, and inns in Fuvahmulah',
    address: 'Fuvahmulah, Maldives',
    phone: '+960-775-7070',
    email: 'accommodation@fuvahmulah.travel',
    url: 'https://single-island-atoll.vercel.app/accommodation',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    amenities: [
      'Free WiFi',
      'Swimming Pool',
      'Beachfront Access',
      'Water Sports',
      'Spa Services',
      'Restaurant',
      'Bar',
      ' Dive Shop'
    ],
    rating: 4.6,
    reviews: 250,
    priceRange: '$$$',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(accommodationSchema)
        }}
      />
      {children}
    </>
  );
}
