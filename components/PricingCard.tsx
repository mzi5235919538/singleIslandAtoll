import React from 'react';
import CTAButton from './CTAButton';

interface PricingCardProps {
  name: string;
  price: string | number;
  period?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export default function PricingCard({
  name,
  price,
  period = 'per night',
  description,
  features,
  highlight = false,
  buttonText = 'Book Now',
  buttonHref = '/contact',
}: PricingCardProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        highlight
          ? 'card-elevated ring-2 ring-accent transform scale-105'
          : 'card-elevated hover:shadow-xl'
      }`}
    >
      {highlight && (
        <div className="bg-accent text-white py-2 text-center font-semibold text-sm">
          Most Popular
        </div>
      )}

      <div className="p-8 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-text-dark mb-2">{name}</h3>
          <p className="text-text-light">{description}</p>
        </div>

        <div className="py-6 border-y border-gray-200">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">${price}</span>
            <span className="text-text-light">{period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-accent font-bold">✓</span>
              <span className="text-text-dark">{feature}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          href={buttonHref}
          text={buttonText}
          variant={highlight ? 'primary' : 'outline'}
          size="medium"
        />
      </div>
    </div>
  );
}
