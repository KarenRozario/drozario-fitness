import React from 'react';

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  image?: string;
}

export const SoftPageHero: React.FC<PageHeroProps> = ({
  title,
  kicker,
  description,
  image = "/images/hero-women-fitness.jpg",
}) => {
  return (
    <section className="bg-[#FFFBF8] py-14 sm:py-20 border-b border-[#F6E8E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6E8E1] rounded-[36px] p-8 sm:p-14 lg:p-16 border border-[#EEDBD2] shadow-sm relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            {kicker && (
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-dm-sans font-semibold uppercase tracking-wider text-[#8FA58A] shadow-sm">
                {kicker}
              </span>
            )}
            <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2F2A] tracking-tight leading-[1.1]">
              {title}
            </h1>
            {description && (
              <p className="font-dm-sans text-base sm:text-lg text-[#3B2F2A]/80 leading-relaxed font-normal">
                {description}
              </p>
            )}
          </div>

          {/* Decorative soft arch photo preview */}
          <div className="hidden lg:block absolute -right-6 -bottom-10 w-72 h-80 rounded-t-full overflow-hidden border-4 border-white shadow-lg">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
