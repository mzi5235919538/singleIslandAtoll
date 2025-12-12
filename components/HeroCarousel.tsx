'use client';

import { useEffect, useState, useTransition } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  svgContent: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Pristine Beaches',
    description: 'White sand beaches and crystal-clear turquoise waters',
    svgContent: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" className="w-full h-full">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E0F6FF;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="seaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00D4FF;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0096C7;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="400" fill="url(#skyGrad)"/>
        <circle cx="1000" cy="150" r="80" fill="#FFD700" opacity="0.8"/>
        <rect y="400" width="1200" height="400" fill="url(#seaGrad)"/>
        <ellipse cx="600" cy="420" rx="800" ry="60" fill="#F4A460" opacity="0.9"/>
        <line x1="100" y1="350" x2="100" y2="450" stroke="#8B4513" stroke-width="15"/>
        <ellipse cx="100" cy="320" rx="60" ry="80" fill="#228B22"/>
        <line x1="1100" y1="350" x2="1100" y2="450" stroke="#8B4513" stroke-width="15"/>
        <ellipse cx="1100" cy="320" rx="60" ry="80" fill="#228B22"/>
        <path d="M 0 500 Q 300 480 600 500 T 1200 500" stroke="rgba(255,255,255,0.3)" stroke-width="3" fill="none"/>
        <text x="600" y="680" font-size="48" font-weight="bold" fill="white" text-anchor="middle">Pristine Beaches</text>
      </svg>
    `,
  },
  {
    id: 2,
    title: 'World-Class Diving',
    description: 'Explore vibrant coral reefs and marine life',
    svgContent: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#0077B6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00B4D8;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#oceanGrad)"/>
        <circle cx="600" cy="100" r="50" fill="#FFD700" opacity="0.6"/>
        <ellipse cx="600" cy="600" rx="300" ry="100" fill="#FF6347" opacity="0.7"/>
        <circle cx="300" cy="400" r="8" fill="#FFD700"/>
        <circle cx="320" cy="410" r="8" fill="#FFD700"/>
        <circle cx="340" cy="400" r="8" fill="#FFD700"/>
        <ellipse cx="150" cy="500" rx="50" ry="40" fill="#228B22"/>
        <circle cx="110" cy="480" r="20" fill="#228B22"/>
        <circle cx="600" cy="300" r="20" fill="white"/>
        <rect x="580" y="330" width="40" height="40" fill="white"/>
        <text x="600" y="680" font-size="48" font-weight="bold" fill="white" text-anchor="middle">World-Class Diving</text>
      </svg>
    `,
  },
  {
    id: 3,
    title: 'Local Culture & Heritage',
    description: 'Experience authentic Maldivian traditions',
    svgContent: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="sunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#FF7F50;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FF6347;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#sunsetGrad)"/>
        <rect y="500" width="1200" height="300" fill="#1a1a2e" opacity="0.8"/>
        <ellipse cx="200" cy="550" rx="80" ry="30" fill="#D2B48C"/>
        <polygon points="200,520 150,550 250,550" fill="#CD853F"/>
        <ellipse cx="1000" cy="580" rx="80" ry="30" fill="#D2B48C"/>
        <polygon points="1000,550 950,580 1050,580" fill="#CD853F"/>
        <line x1="600" y1="350" x2="600" y2="500" stroke="#2F4F4F" stroke-width="20"/>
        <ellipse cx="600" cy="300" rx="80" ry="120" fill="#2F4F4F"/>
        <text x="600" y="680" font-size="48" font-weight="bold" fill="white" text-anchor="middle">Local Culture & Heritage</text>
      </svg>
    `,
  },
  {
    id: 4,
    title: 'Pure Relaxation',
    description: 'Unwind in paradise with tropical comfort',
    svgContent: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="relaxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E0FFFF;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#relaxGrad)"/>
        <rect y="500" width="1200" height="300" fill="#F4A460"/>
        <rect x="450" y="300" width="300" height="200" fill="#D2B48C"/>
        <polygon points="450,300 600,150 750,300" fill="#8B7355"/>
        <rect x="480" y="330" width="40" height="40" fill="#87CEEB"/>
        <rect x="540" y="330" width="40" height="40" fill="#87CEEB"/>
        <rect x="600" y="330" width="40" height="40" fill="#87CEEB"/>
        <rect x="660" y="330" width="40" height="40" fill="#87CEEB"/>
        <ellipse cx="300" cy="600" rx="50" ry="30" fill="#FFB6C1"/>
        <ellipse cx="900" cy="600" rx="50" ry="30" fill="#FFB6C1"/>
        <circle cx="600" cy="580" r="40" fill="#FF4500" opacity="0.8"/>
        <line x1="600" y1="620" x2="600" y2="700" stroke="#8B4513" stroke-width="4"/>
        <text x="600" y="750" font-size="48" font-weight="bold" fill="#333" text-anchor="middle">Pure Relaxation</text>
      </svg>
    `,
  },
];

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, [startTransition]);

  if (!mounted) return null;

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full aspect-video">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full flex items-center justify-center bg-gray-100 relative group">
                {/* SVG Content */}
                <div
                  dangerouslySetInnerHTML={{ __html: slide.svgContent }}
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
