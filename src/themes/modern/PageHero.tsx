import React from 'react';

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  image?: string;
}

export const ModernPageHero: React.FC<PageHeroProps> = ({
  title,
  kicker,
  description,
  image = "/images/hero-women-fitness.jpg",
}) => {
  return (
    <section className="bg-[#2E1A47] text-white py-16 sm:py-24 border-b-4 border-[#FF6B4A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          {kicker && (
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block">
              {kicker}
            </span>
          )}
          <h1 className="font-archivo font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-white">
            {title}
          </h1>
          {description && (
            <p className="font-manrope text-base sm:text-lg text-white/80 leading-relaxed font-medium max-w-[60ch]">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Decorative semi-transparent background image watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

