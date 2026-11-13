import React from 'react';
import { FindYourProgram } from '../components/shared/FindYourProgram';
import { SEO } from '../components/shared/SEO';
import { BOOKING_URL } from '../config/site';

export const FindYourProgramPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Find Your Program | Women's Fitness Coaching Stoney Creek"
        description="Find the right women's fitness program for your life stage: prenatal fitness, postnatal fitness, perimenopause and menopause strength, or Strong After 50."
      />

      {/* Hero Banner - Editorial Magazine Header */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#1A1714] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Find Your Program at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/90 block mb-3">
              PERSONALISED GUIDANCE · STONEY CREEK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] mb-4">
              Find Your Program
            </h1>
            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light max-w-[65ch] leading-[1.7]">
              Select where you are in your journey today to discover the right coaching path for your body.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Selector */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              LIFE-STAGE SELECTOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] mb-4 tracking-tight">
              Where Are You In Your Journey?
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 font-light leading-[1.7]">
              Select a stage below to see how Rachel tailors coaching, pelvic floor awareness, and progressive strength for you.
            </p>
          </div>

          <FindYourProgram isTeaser={false} />
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block">
            PERSONALIZED MATCHING
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1714] tracking-tight">
            Still Wondering Which Pathway Fits Best?
          </h3>
          <p className="text-[17px] text-[#1A1714]/75 leading-[1.7] max-w-md mx-auto font-light">
            Book a complimentary 15-minute consultation with Rachel D'Rozario to discuss your goals, schedule, and any questions.
          </p>
          <div className="pt-4">
            <a
              href={BOOKING_URL}
              className="btn-editorial-primary"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
