import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Check, MapPin } from 'lucide-react';

export const Team: React.FC = () => {
  const rachel = siteConfig.team[0];

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Meet Rachel D'Rozario | Women's Fitness Coach Stoney Creek"
        description="Meet Rachel D'Rozario, Founder & Women's Fitness Coach at D'Rozario Fitness in Stoney Creek, Ontario. Dedicated to prenatal, postnatal, and menopause fitness."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/team-hero.jpg"
            alt="Rachel D'Rozario coaching in Stoney Creek"
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-75"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Founder & Head Coach
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Meet Rachel D'Rozario
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Empowering women through pregnancy, motherhood, and menopause with safe, progressive strength in Stoney Creek.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
            Coaching Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight">
            Coaching Built Around Your Life Stage
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
            We believe the key to sustainable results is working hard while feeling deeply supported and understood. At D'Rozario Fitness, you work directly with Rachel D'Rozario. Rachel is passionate about helping women navigate pregnancy, postpartum recovery, and menopause through safe, progressive strength.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-sm font-medium text-black">
            <MapPin className="w-4 h-4 text-black" />
            <span>Stoney Creek Studio · 1-on-1 & Small Group Coaching</span>
          </div>
        </div>
      </section>

      {/* Rachel D'Rozario Profile - 50/50 Split Screen With Large Editorial Image */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-8 sm:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Photo on left - Covers 50% of the container */}
              <div className="lg:col-span-6 relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-950 min-h-[480px] sm:min-h-[580px] group">
                  <img
                    src={rachel.image}
                    alt={rachel.name}
                    className="w-full h-full object-cover object-center absolute inset-0 grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-1">
                      Certified Women's Coach
                    </span>
                    <h4 className="text-2xl font-light text-white">{rachel.name}</h4>
                  </div>
                </div>
              </div>

              {/* Bio on right */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
                    {rachel.name}
                  </h3>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    {rachel.role} · {rachel.certifications}
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-light">
                  <p>{rachel.bio}</p>
                  <p>
                    Rather than relying on one-size-fits-all workouts, Rachel tailors every movement session to your individual life stage, honouring your energy, pelvic floor health, and personal goals.
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider block mb-3 font-mono">
                    Specialised Coaching Disciplines:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {rachel.specialities.map((spec, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs bg-zinc-100 text-zinc-900 px-3.5 py-1.5 rounded-full font-medium border border-zinc-200"
                      >
                        <Check className="w-3.5 h-3.5 text-black" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-4">
                  <a
                    href={BOOKING_URL}
                    className="bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
                  >
                    Book a Session with Rachel
                  </a>
                  <span className="text-xs text-zinc-500">
                    Stoney Creek private studio & small groups
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
