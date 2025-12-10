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
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent flex flex-col justify-center items-start p-12 lg:p-20">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="btn-primary px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
