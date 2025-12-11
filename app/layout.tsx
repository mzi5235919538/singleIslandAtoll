import type { Metadata } from 'next';
import { getOrganizationSchema, getTouristDestinationSchema, renderStructuredData } from '@/lib/structuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SkipToMainContent from '@/components/SkipToMainContent';
import { BookingModalProvider } from '@/components/BookingModalProvider';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileTestChecklist from '@/components/MobileTestChecklist';

export const metadata: Metadata = {
  metadataBase: new URL('https://single-island-atoll.vercel.app'),
  title: {
    default: 'Fuvahmulah Travel Guide | Tiger Shark Diving in Maldives',
    template: '%s | Fuvahmulah - Maldives Travel'
  },
  description: 'Discover Fuvahmulah, the Maldives premier tiger shark diving destination. Explore pristine beaches, world-class diving, authentic island cuisine, and unforgettable island experiences. Your complete travel guide to Maldives\' most exclusive atoll.',
  keywords: [
    'Fuvahmulah',
    'Maldives',
    'tiger shark diving',
    'island travel',
    'scuba diving',
    'water sports',
    'island accommodation',
    'Maldives tourism',
    'adventure travel',
    'tropical island',
    'diving destination',
    'beach resort',
    'Maldives guide'
  ],
  authors: [{ name: 'Fuvahmulah Tourism', url: 'https://single-island-atoll.vercel.app' }],
  creator: 'Fuvahmulah Tourism',
  publisher: 'Fuvahmulah',
  openGraph: {
    title: 'Fuvahmulah - Tiger Shark Island Diving Destination',
    description: 'Premier tiger shark diving destination in the Maldives. Explore pristine beaches, world-class diving, authentic experiences.',
    url: 'https://single-island-atoll.vercel.app',
    siteName: 'Fuvahmulah Travel Guide',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Fuvahmulah Tiger Shark Diving Destination',
        type: 'image/jpeg'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuvahmulah - Tiger Shark Island Diving',
    description: 'Discover Fuvahmulah, the Maldives premier diving destination',
    images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop'],
    creator: '@fuvahmulah'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0077b6" />
        {/* Organization and Tourist Destination Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: renderStructuredData([
              getOrganizationSchema(),
              getTouristDestinationSchema(),
            ])
          }}
        />
        {/* Google Analytics */}
        <GoogleAnalytics />
        {/* Google AdSense placeholder - Replace with your code */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx" crossOrigin="anonymous"></script> */}
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <SkipToMainContent />
        <BookingModalProvider>
          <Header />
          <main id="main-content" className="grow">
            {children}
          </main>
          <Footer />
          <MobileTestChecklist />
        </BookingModalProvider>
      </body>
    </html>
  );
}
