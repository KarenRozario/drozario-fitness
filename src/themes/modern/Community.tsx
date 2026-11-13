import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { communityContent } from '../../content/community';

export const ModernCommunity: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-b-2 border-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
              {communityContent.kicker}
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-6xl text-[#2E1A47] tracking-tight uppercase leading-none">
              {communityContent.title}
            </h2>
            <p className="font-manrope text-base sm:text-lg text-[#2E1A47]/80 leading-relaxed font-medium">
              {communityContent.description}
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <a
              href={BOOKING_URL}
              className="bg-[#FF6B4A] hover:bg-[#E55A3A] text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none shadow-lg whitespace-nowrap"
            >
              Inquire About Group Pods
            </a>
          </div>
        </div>

        {/* 3 Features as High-Contrast Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityContent.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 border-2 border-[#2E1A47] bg-[#F1ECF8] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
                  PROGRAM 0{idx + 1}
                </span>
                <h3 className="font-archivo font-black text-2xl uppercase text-[#2E1A47] tracking-tight">
                  {feature.title}
                </h3>
                <p className="font-manrope text-sm text-[#2E1A47]/80 font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mommy Networks Alliances Box */}
        <div className="bg-[#2E1A47] text-white p-8 sm:p-12 border-2 border-[#2E1A47] space-y-8">
          <div>
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
              COLLABORATIVE NETWORKS
            </span>
            <h3 className="font-archivo font-black text-3xl sm:text-4xl uppercase tracking-tight mt-1">
              Active Community Partners Across Hamilton & Stoney Creek
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityContent.partners.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="p-6 bg-white/10 border-l-4 border-[#FF6B4A] space-y-2"
              >
                <span className="font-archivo font-bold text-[10px] uppercase tracking-wider text-[#FF6B4A]">
                  {partner.role}
                </span>
                <h4 className="font-archivo font-black text-lg uppercase text-white">
                  {partner.name}
                </h4>
                <p className="font-manrope text-xs text-white/80">
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
