import React from 'react';
import { FindYourProgram } from '../components/shared/FindYourProgram';
import { SEO } from '../components/shared/SEO';
import { BOOKING_URL } from '../config/site';

export const FindYourProgramPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Find Your Program | Women's Fitness Coaching Stoney Creek"
        description="Find the right women's fitness program for your life stage: prenatal fitness, postnatal fitness, perimenopause and menopause strength, or Strong After 50."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Find Your Program at D'Rozario Fitness"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Find Your Program
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Select where you are in your journey today to discover the right coaching path for your body.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Selector */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-light text-[#3B6B96] mb-3">
              Where Are You In Your Movement Journey?
            </h2>
            <p className="text-sm text-slate-600">
              Select a stage below to see how Rachel tailors coaching, pelvic floor awareness, and progressive strength for you.
            </p>
          </div>

          <FindYourProgram isTeaser={false} />
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl font-light text-[#3B6B96]">
            Still Wondering Which Pathway Fits Best?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Book a complimentary 15-minute consultation with Rachel D'Rozario to discuss your goals, schedule, and any questions.
          </p>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
