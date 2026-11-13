import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { communityContent } from '../../content/community';

export const SoftCommunity: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBF8] border-b border-[#F6E8E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Photo Collage of 3 Rounded Images in a Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Image 1 */}
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-[#F6E8E1] group">
            <img
              src={communityContent.images[0].src}
              alt={communityContent.images[0].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Image 2 - Staggered slightly higher with circular border radius */}
          <div className="aspect-[1/1] md:-mt-8 rounded-[36px] overflow-hidden shadow-xl border-4 border-white bg-[#F6E8E1] group">
            <img
              src={communityContent.images[1].src}
              alt={communityContent.images[1].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Image 3 */}
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-lg border-4 border-white bg-[#F6E8E1] group">
            <img
              src={communityContent.images[2].src}
              alt={communityContent.images[2].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Below */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
            {communityContent.kicker}
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight">
            {communityContent.title}
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-[#3B2F2A]/80 font-normal leading-relaxed">
            {communityContent.description}
          </p>

          {/* Partner Badges */}
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            {communityContent.partners.map((p, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[#F6E8E1] text-[#3B2F2A] px-5 py-2 text-xs font-dm-sans font-medium"
              >
                {p.name} · <em className="text-[#8FA58A] not-italic">{p.role}</em>
              </span>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={BOOKING_URL}
              className="rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white px-8 py-3.5 text-xs font-dm-sans font-semibold tracking-wide transition-all shadow-md inline-block whitespace-nowrap"
            >
              Join Our Next Community Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

