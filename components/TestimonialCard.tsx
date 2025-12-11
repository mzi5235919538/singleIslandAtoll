import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  image?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="card-elevated p-8 space-y-4">
      {rating && (
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-xl ${i < rating ? 'text-accent' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>
      )}

      <blockquote className="text-text-dark italic text-lg leading-relaxed">
        &quot;{quote}&quot;
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        {image && (
          <Image
            src={image}
            alt={author}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-text-dark">{author}</p>
          <p className="text-sm text-text-light">{title}</p>
        </div>
      </div>
    </div>
  );
}
