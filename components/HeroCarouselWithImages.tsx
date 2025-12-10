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
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-screen bg-gray-900">
              <Image
                src={slide.imageUrl}
                alt={slide.imageAlt}
                fill
                priority={slide.id === 1}
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 drop-shadow-lg max-w-2xl">
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
