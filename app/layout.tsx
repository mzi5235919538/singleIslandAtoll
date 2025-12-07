import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fuvahmulah Tourism - Discover Sinle Atoll, Maldives',
  description: 'Explore Fuvahmulah (Single Island Atoll) - Your complete guide to hotels, restaurants, dive centers, attractions, and activity centers in the Maldives',
  keywords: 'Fuvahmulah, Single Island Atoll, Maldives, tourism, hotels, dive centers, restaurants, travel guide',
  authors: [{ name: 'Fuvahmulah Tourism' }],
  openGraph: {
    title: 'Fuvahmulah Tourism - Discover Single Island Atoll, Maldives',
    description: 'Your complete travel companion for Fuvahmulah',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuvahmulah Tourism',
    description: 'Explore the beauty of Single Island Atoll',
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
