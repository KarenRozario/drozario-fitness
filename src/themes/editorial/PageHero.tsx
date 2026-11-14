import React from 'react';

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  image?: string;
}

export const EditorialPageHero: React.FC<PageHeroProps> = ({
  title,
  kicker,
  description,
  image = `${import.meta.env.BASE_URL}images/hero-women-fitness.webp`,
}) => {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-16 sm:pb-20 bg-[#1A1714] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Scrim: rgba(0,0,0,0.65) to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4">
          {kicker && (
            <span className="font-mono text-[13px] sm:text-sm uppercase tracking-[0.25em] text-[#FAF7F2] font-semibold block text-photo-shadow">
              {kicker}
            </span>
          )}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] text-photo-shadow">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-[#FAF7F2] font-light max-w-[65ch] leading-[1.7] text-photo-shadow">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

