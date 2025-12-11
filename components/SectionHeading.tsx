interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  size = 'large',
}: SectionHeadingProps) {
  const titleSizes = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl',
  };

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`${titleSizes[size]} font-bold text-text-dark mb-3`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
