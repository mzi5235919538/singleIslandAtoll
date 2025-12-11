import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  const content = (
    <div className="card-elevated p-8 group h-full cursor-pointer">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-light leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
