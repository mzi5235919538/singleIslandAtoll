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
    <div className="carousel-container shadow-lg rounded-lg overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-96 md:h-[500px] bg-gray-900">
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-100">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
