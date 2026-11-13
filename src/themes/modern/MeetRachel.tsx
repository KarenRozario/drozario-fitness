import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { rachelContent } from '../../content/rachel';

export const ModernMeetRachel: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width Lilac Block with Photo Overlapping the Block Edge */}
        <div className="bg-[#F1ECF8] border-4 border-[#2E1A47] p-8 sm:p-12 lg:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Overlapping Photo */}
            <div className="lg:col-span-5 relative -mt-6 lg:-mt-24 lg:-mb-24">
              <div className="aspect-[4/5] bg-[#2E1A47] border-4 border-[#2E1A47] shadow-2xl overflow-hidden">
                <img
                  src={rachelContent.image}
                  alt={rachelContent.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#FF6B4A] text-white p-3 font-archivo font-black text-xs uppercase tracking-wider text-center mt-3">
                {rachelContent.modernRoleLine}
              </div>
            </div>

            {/* Right Col: Large Pull-Quote in Archivo & Bio */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
                COACHING PHILOSOPHY
              </span>

              {/* Large Pull-Quote in Archivo */}
              <blockquote className="font-archivo font-black text-2xl sm:text-4xl text-[#2E1A47] uppercase leading-tight tracking-tight">
                "{rachelContent.modernPullQuote}"
              </blockquote>

              <p className="font-manrope text-base text-[#2E1A47]/85 leading-relaxed font-medium">
                {rachelContent.bio}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  className="bg-[#2E1A47] hover:bg-black text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none shadow whitespace-nowrap"
                >
                  Book with Rachel
                </a>
                <span className="font-archivo font-bold text-xs uppercase text-[#2E1A47]/70">
                  {rachelContent.certifications}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
