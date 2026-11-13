import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { homeContent } from '../../content/home';

export const SoftCTA: React.FC = () => {
  const { openBooking } = useBooking();
  const { cta } = homeContent;

  return (
    <section className="py-24 bg-[#FFFBF8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F6E8E1] rounded-[36px] p-10 sm:p-16 text-center space-y-6 border border-[#EEDBD2] shadow-sm">
          <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
            {cta.kicker}
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight">
            {cta.headline}
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-[#3B2F2A]/80 max-w-xl mx-auto leading-relaxed">
            {cta.subhead}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white px-8 py-3.5 text-xs font-dm-sans font-semibold tracking-wide transition-all shadow-md whitespace-nowrap cursor-pointer"
            >
              {cta.primaryButton}
            </a>
            <Link
              to="/programs"
              className="rounded-full border-2 border-[#3B2F2A] text-[#3B2F2A] hover:bg-[#3B2F2A] hover:text-white px-8 py-3.5 text-xs font-dm-sans font-semibold tracking-wide transition-all whitespace-nowrap"
            >
              {cta.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

