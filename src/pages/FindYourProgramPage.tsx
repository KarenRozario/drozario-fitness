import React from 'react';
import { FindYourProgram } from '../components/shared/FindYourProgram';
import { SEO } from '../components/shared/SEO';
import { BOOKING_URL } from '../config/site';

export const FindYourProgramPage: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Find Your Program | Women's Fitness Coaching Stoney Creek"
        description="Find the right women's fitness program for your life stage: prenatal fitness, postnatal fitness, perimenopause and menopause strength, or Strong After 50."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Find Your Program at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Personalised Guidance
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Find Your Program
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Select where you are in your journey today to discover the right coaching path for your body.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Selector */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-2">
              Life-Stage Selector
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-3 tracking-tight">
              Where Are You In Your Movement Journey?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light">
              Select a stage below to see how Rachel tailors coaching, pelvic floor awareness, and progressive strength for you.
            </p>
          </div>

          <FindYourProgram isTeaser={false} />
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-20 bg-white border-t border-zinc-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-light text-zinc-900 tracking-tight">
            Still Wondering Which Pathway Fits Best?
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md mx-auto">
            Book a complimentary 15-minute consultation with Rachel D'Rozario to discuss your goals, schedule, and any questions.
          </p>
          <div className="pt-4">
            <a
              href={BOOKING_URL}
              className="inline-block bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
