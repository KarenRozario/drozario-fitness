import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { homeContent } from '../../content/home';
import { ArrowRight } from 'lucide-react';

export const EditorialHero: React.FC = () => {
  const { openBooking } = useBooking();
  const { hero } = homeContent;

  return (
    <section className="relative min-h-[92vh] flex items-end pb-20 sm:pb-28 bg-[#1A1714] overflow-hidden">
      {/* Background Image: Full Bleed Natural Colour */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.heroImage}
          alt="Strong woman training with weights at D'Rozario Fitness"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Soft bottom gradient only where text overlays photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Kicker: min 13px, full opacity, text-photo-shadow */}
          <span className="font-mono text-[13px] sm:text-sm uppercase tracking-[0.25em] text-[#F5EDE3] font-semibold block text-photo-shadow">
            {hero.kicker}
          </span>

          {/* Headline: High-Contrast Serif with italic accent */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#FAF7F2] tracking-tight leading-[1.03] text-photo-shadow">
            Strong Through <em className="italic font-normal">Every</em> Stage.
          </h1>

          {/* Subhead: Clean Sans with line length <= 65ch */}
          <p className="text-lg sm:text-xl text-[#FAF7F2] font-light max-w-[62ch] leading-[1.7] text-photo-shadow">
            {hero.subhead}
          </p>

          {/* Primary & Secondary Editorial Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="btn-editorial-primary text-xs tracking-[0.2em] cursor-pointer"
            >
              {hero.primaryCta.label}
            </a>
            <Link
              to={hero.secondaryCta.href}
              className="btn-editorial-outline-white text-xs tracking-[0.2em] flex items-center gap-2"
            >
              <span>{hero.secondaryCta.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

