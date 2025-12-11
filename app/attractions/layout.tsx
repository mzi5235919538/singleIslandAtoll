import { Metadata } from 'next';
import { getTouristAttractionSchema, renderStructuredData } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Attractions & Activities',
  description: 'Explore the best attractions and activities in Fuvahmulah. From world-class tiger shark diving to pristine beaches and cultural experiences, discover unforgettable island adventures.',
  keywords: ['Fuvahmulah attractions', 'tiger shark diving', 'Maldives diving', 'island activities', 'water sports', 'beach activities'],
  openGraph: {
    title: 'Attractions & Activities in Fuvahmulah',
    description: 'Discover tiger shark diving, beaches, and island adventures in Fuvahmulah',
    images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop'],
  },
};

export default function AttractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the attractions page
  const attractionsSchema = getTouristAttractionSchema({
    name: 'Fuvahmulah Attractions & Activities',
    description: 'World-class tiger shark diving, pristine beaches, and unforgettable island adventures',
    address: 'Fuvahmulah, Maldives',
    url: 'https://single-island-atoll.vercel.app/attractions',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    openingHoursSpecification: {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
    },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(attractionsSchema)
        }}
      />
      {children}
    </>
  );
}
