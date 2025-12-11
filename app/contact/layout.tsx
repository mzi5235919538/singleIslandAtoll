import { Metadata } from 'next';
import { getOrganizationSchema, renderStructuredData } from '@/lib/structuredData';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Fuvahmulah Tourism. We\'re here to answer your questions about diving, accommodations, dining, and experiences in Fuvahmulah, Maldives.',
  keywords: ['Contact Fuvahmulah', 'tourism inquiries', 'booking information', 'Maldives contact'],
  openGraph: {
    title: 'Contact Fuvahmulah Tourism',
    description: 'Get in touch for diving, booking, and travel inquiries',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the contact page
  const contactSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(contactSchema)
        }}
      />
      {children}
    </>
  );
}
