import { getOrganizationSchema, renderStructuredData } from '@/lib/structuredData';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data for the about page
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(organizationSchema)
        }}
      />
      {children}
    </>
  );
}
