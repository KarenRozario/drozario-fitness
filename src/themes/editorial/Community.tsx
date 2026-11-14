import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { communityContent } from '../../content/community';

export const EditorialCommunity: React.FC = () => {
  const { openBooking } = useBooking();
  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Intro Section - Two-Image Asymmetric Photo Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block">
              {communityContent.kicker}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
              {communityContent.title}
            </h2>
            <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light max-w-[65ch]">
              {communityContent.description}
            </p>
            <div className="pt-2">
              <a
                href={BOOKING_URL}
                onClick={(e) => {
                  e.preventDefault();
                  openBooking();
                }}
                className="btn-editorial-primary whitespace-nowrap cursor-pointer"
              >
                Join a Community Session
              </a>
            </div>
          </div>

          {/* Right: Asymmetric Two-Image Spread */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] w-full overflow-hidden border border-[#1A1714]/15 bg-[#F2ECE3] shadow-sm group">
              <img
                src={communityContent.images[0].src}
                alt={communityContent.images[0].alt}
                width={640}
                height={480}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-1/2 aspect-[4/3] overflow-hidden border-4 border-[#FAF7F2] shadow-xl bg-[#F2ECE3]">
              <img
                src={communityContent.images[1].src}
                alt={communityContent.images[1].alt}
                width={640}
                height={480}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 3 Numbered Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityContent.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#F2ECE3] p-8 border border-[#1A1714]/15 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block mb-2 font-medium">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-serif text-[#1A1714] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#1A1714]/75 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collaborative Mommy Networks Box */}
        <div className="bg-[#F2ECE3] p-10 sm:p-14 border border-[#1A1714]/15 space-y-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              COMMUNITY ALLIANCES
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1714] tracking-tight">
              Working with Mommy Networks
            </h3>
            <p className="text-[17px] text-[#1A1714]/75 mt-3 leading-relaxed font-light">
              Rachel hosts specialised clinics and partner classes with local community networks across Stoney Creek and Hamilton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityContent.partners.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="p-6 bg-[#FAF7F2] border-l-2 border-[#1A1714] space-y-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A1714]/50 block">
                  {partner.role}
                </span>
                <h4 className="text-lg font-serif text-[#1A1714]">
                  {partner.name}
                </h4>
                <p className="text-xs text-[#1A1714]/70 leading-relaxed font-light">
                  {partner.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

