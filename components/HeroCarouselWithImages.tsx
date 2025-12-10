'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Pristine Beaches',
    description: 'White sand beaches with crystal clear turquoise waters',
    imageUrl: 'https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Beautiful beach in Fuvahmulah with turquoise water',
  },
  {
    id: 2,
    title: 'World-Class Diving',
    description: 'Experience vibrant coral reefs and abundant marine life',
    imageUrl: 'https://images.pexels.com/photos/3155657/pexels-photo-3155657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Divers exploring the coral reef in Fuvahmulah',
  },
  {
    id: 3,
    title: 'Sunset Paradise',
    description: 'Breathtaking sunsets over the Indian Ocean',
    imageUrl: 'https://images.pexels.com/photos/3155639/pexels-photo-3155639.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Golden sunset over the beach in Fuvahmulah',
  },
  {
    id: 4,
    title: 'Island Adventures',
    description: 'Explore water sports and island hopping experiences',
    imageUrl: 'https://images.pexels.com/photos/2784747/pexels-photo-2784747.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Aerial view of Fuvahmulah Island with lush vegetation',
  },
];

export default function HeroCarouselWithImages() {
  return (
    <div className="carousel-container w-screen left-1/2 right-1/2 -mx-1/2 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen bg-gray-900">
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark overlay for text readability - gradient from bottom to center to transparent */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/70 flex flex-col justify-center items-center text-center p-6">
                <div className="max-w-2xl">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl">
                    {slide.title}
                  </h3>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 drop-shadow-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
