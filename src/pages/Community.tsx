import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';

export const Community: React.FC = () => {
  const { openBooking } = useBooking();
  const { community } = siteConfig;

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Community & Mom Groups | D'Rozario Fitness Stoney Creek"
        description="Rachel D'Rozario works closely with Stoney Creek mommy networks and mom groups, hosting group fitness classes, stroller strength meetups, and workshops."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Community & Mom Groups"
        kicker="MOMMY NETWORKS & WORKSHOPS · STONEY CREEK"
        description="Bringing women together through movement, postpartum support, and life-stage strength in Stoney Creek."
        image={`${import.meta.env.BASE_URL}images/community-moms.jpg`}
      />

      {/* Intro Section - Two-Image Asymmetric Photo Feature */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block font-medium">
                THE SISTERHOOD
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                {community.title}
              </h2>
              <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light max-w-[65ch]">
                {community.description}
              </p>
              <div className="pt-2">
                <a
                  href={BOOKING_URL}
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking('Semi-Private Pods');
                  }}
                  className="btn-editorial-primary cursor-pointer"
                >
                  Join a Community Session
                </a>
              </div>
            </div>

            {/* Right: Asymmetric Two-Image Spread */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#1A1714]/15 bg-[#F2ECE3] shadow-sm group">
                <img
                  src={`${import.meta.env.BASE_URL}images/community-moms.jpg`}
                  alt="Mothers exercising together in community class"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -left-6 w-1/2 aspect-[4/3] overflow-hidden border-4 border-[#FAF7F2] shadow-xl bg-[#F2ECE3]">
                <img
                  src={`${import.meta.env.BASE_URL}images/studio-stoney-creek.jpg`}
                  alt="Stoney Creek studio"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Editorial Magazine Columns */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {community.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 border border-[#1A1714]/15 space-y-3 flex flex-col justify-between"
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

          {/* Collaborative Mom Groups & Partners */}
          <div className="bg-[#FAF7F2] p-10 sm:p-14 border border-[#1A1714]/15 space-y-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
                COMMUNITY ALLIANCES
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1714] tracking-tight">
                Working with Mommy Networks
              </h3>
              <p className="text-[17px] text-[#1A1714]/75 mt-3 leading-relaxed font-light">
                Rachel hosts specialised workshops and partner classes with local community networks across Stoney Creek and Hamilton.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {community.partners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 bg-[#F2ECE3] border-l-2 border-[#1A1714] space-y-2"
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

            <div className="pt-8 border-t border-[#1A1714]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-xs text-[#1A1714]/65 max-w-xl font-light leading-relaxed">
                Are you part of a local mom group, midwifery collective, or women's organization? Rachel welcomes collaborative community partnerships.
              </p>
              <a
                href={BOOKING_URL}
                onClick={(e) => {
                  e.preventDefault();
                  openBooking('Semi-Private Pods');
                }}
                className="btn-editorial-primary shrink-0 cursor-pointer"
              >
                Inquire About Group Classes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
