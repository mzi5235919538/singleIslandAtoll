interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-fadeInUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
