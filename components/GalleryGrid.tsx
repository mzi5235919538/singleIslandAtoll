'use client';

import { useState } from 'react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
  columns?: number;
}

export default function GalleryGrid({
  images,
  columns = 3,
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (
    <>
      <div className={`grid grid-cols-1 ${columnClass} gap-6`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {image.title && (
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-4xl max-h-[85vh] object-contain rounded-lg"
          />
          {selectedImage.title && (
            <p className="absolute bottom-6 text-white text-lg font-semibold">
              {selectedImage.title}
            </p>
          )}
        </div>
      )}
    </>
  );
}
