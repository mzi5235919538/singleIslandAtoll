import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Single Atoll - Your Complete Maldives Travel Guide',
  description: 'Discover Single Atoll Maldives - Your complete guide to accommodations, dive centers, restaurants, attractions, and travel tips for the most authentic island experience',
  keywords: 'Single Atoll, Maldives, travel guide, guesthouses, dive centers, island accommodation, Maldives tourism',
  authors: [{ name: 'Single Atoll' }],
  openGraph: {
    title: 'Single Atoll - Maldives Travel Guide',
    description: 'Your definitive resource for the most authentic Maldives island experience',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Single Atoll - Maldives',
    description: 'Discover authentic island living and world-class diving',
  },
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
        {/* Google AdSense placeholder - Replace with your code */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx" crossOrigin="anonymous"></script> */}
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main id="main-content" className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
