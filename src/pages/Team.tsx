import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Check, MapPin } from 'lucide-react';

export const Team: React.FC = () => {
  const rachel = siteConfig.team[0];

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Meet Rachel D'Rozario | Personal Training & Recovery"
        description="Meet Rachel D'Rozario, Founder & Head Coach at D'Rozario Muscle Release in Stoney Creek, Ontario. Dedicated 1-on-1 personal training and targeted recovery."
      />

      {/* Hero Banner - Modeled on Screenshot 1.00.37 PM */}
      <section className="relative min-h-[50vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team-hero.jpg"
            alt="Rachel D'Rozario discussing training plan with client in Stoney Creek studio"
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Meet Rachel D'Rozario
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-xl">
              Founder, Head Personal Trainer & Muscle Release Specialist
            </p>
          </div>
        </div>
      </section>

      {/* Intro Statement - Modeled on Screenshot 1.00.40 PM */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
            Personalized Coaching for Lasting Results
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We believe the key to getting results is working hard while having fun and staying pain-free. At D'Rozario Muscle Release, you work directly with Rachel D'Rozario. Rachel is passionate about helping you move better, overcome old injuries, and build strength you can rely on every single day.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-sm font-medium text-[#3B6B96]">
            <MapPin className="w-4 h-4 text-burntOrange" />
            <span>Stoney Creek Studio · 1-on-1 Private Facility</span>
          </div>
        </div>
      </section>

      {/* Rachel D'Rozario Single Profile Card - Modeled directly on Screenshot 1.00.42 PM */}
      <section className="py-16 sm:py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Photo on left */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img
                    src={rachel.image}
                    alt={rachel.name}
                    className="w-full h-[400px] object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bio & Details on right */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#3B6B96]">
                    {rachel.name} | <span className="font-normal text-slate-800 text-xl sm:text-2xl">Founder & Head Coach</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider">
                    {rachel.certifications}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    {rachel.bio}
                  </p>
                  <p>
                    Rather than relying on cookie-cutter gym routines, Rachel evaluates your individual kinetic chain, identifies compensatory muscle recruitment, and uses targeted manual therapy to release stubborn spasms before loading strength exercises.
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                    Areas of Expertise
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {rachel.specialities.map((spec, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs bg-[#EBF2F7] text-[#2C5278] px-3 py-1.5 rounded-full font-medium"
                      >
                        <Check className="w-3 h-3 text-burntOrange" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <a
                    href={BOOKING_URL}
                    className="bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3 rounded text-sm font-medium transition-colors shadow-sm"
                  >
                    Book a Session with Rachel
                  </a>
                  <span className="text-xs text-slate-500">
                    Direct 1-on-1 private studio booking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
