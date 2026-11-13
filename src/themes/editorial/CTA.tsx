import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { homeContent } from '../../content/home';

export const EditorialCTA: React.FC = () => {
  const { openBooking } = useBooking();
  const { cta } = homeContent;

  return (
    <section className="py-24 lg:py-32 bg-[#F2ECE3] border-b border-[#1A1714]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block">
          {cta.kicker}
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A1714] tracking-tight leading-tight">
          {cta.headline}
        </h2>
        <p className="text-lg text-[#1A1714]/80 font-light max-w-2xl mx-auto leading-relaxed">
          {cta.subhead}
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            onClick={(e) => {
              e.preventDefault();
              openBooking();
            }}
            className="btn-editorial-primary text-xs tracking-[0.2em] whitespace-nowrap cursor-pointer"
          >
            {cta.primaryButton}
          </a>
          <Link
            to="/programs"
            className="btn-editorial-outline text-xs tracking-[0.2em] whitespace-nowrap"
          >
            {cta.secondaryButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

