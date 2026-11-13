import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { homeContent } from '../../content/home';

export const ModernCTA: React.FC = () => {
  const { cta } = homeContent;

  return (
    <section className="py-24 lg:py-32 bg-[#2E1A47] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
          {cta.kicker}
        </span>
        <h2 className="font-archivo font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none">
          {cta.headline}
        </h2>
        <p className="font-manrope text-base sm:text-lg text-white/80 max-w-xl mx-auto font-medium">
          {cta.subhead}
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            className="bg-[#FF6B4A] hover:bg-[#E55A3A] text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none shadow-lg whitespace-nowrap"
          >
            {cta.primaryButton}
          </a>
          <Link
            to="/programs"
            className="border-2 border-white hover:bg-white hover:text-[#2E1A47] text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none whitespace-nowrap"
          >
            {cta.secondaryButton}
          </Link>
        </div>
      </div>
    </section>
  );
};
