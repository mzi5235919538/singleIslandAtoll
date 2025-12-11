import { Metadata } from 'next';
import { getLocalBusinessSchema, renderStructuredData } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Dining & Restaurants',
  description: 'Discover authentic cuisine from local eateries to fine dining restaurants in Fuvahmulah. Experience traditional Maldivian food and international cuisine.',
  keywords: ['Fuvahmulah dining', 'restaurants Maldives', 'local cuisine', 'fine dining', 'Maldives food'],
  openGraph: {
    title: 'Dining & Restaurants in Fuvahmulah',
    description: 'Explore authentic cuisine and fine dining options in Fuvahmulah',
    images: ['https://images.unsplash.com/photo-1631504949-f45-b0fc0e7bab67?w=1200&h=630&fit=crop'],
  },
};

export default function DiningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the dining page
  const diningSchema = getLocalBusinessSchema({
    name: 'Fuvahmulah Dining Scene',
    description: 'Authentic cuisine from local eateries to fine dining restaurants',
    address: 'Fuvahmulah, Maldives',
    phone: '+960-775-7070',
    email: 'dining@fuvahmulah.travel',
    url: 'https://single-island-atoll.vercel.app/dining',
    image: 'https://images.unsplash.com/photo-1631504949-f45-b0fc0e7bab67?w=800&h=600&fit=crop',
    rating: 4.5,
    reviews: 120,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(diningSchema)
        }}
      />
      {children}
    </>
  );
}
