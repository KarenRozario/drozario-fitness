import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';

export const Programs: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Women's Fitness Programs | Prenatal, Postnatal, Menopause & 50+"
        description="Explore specialised women's fitness coaching programs in Stoney Creek, Ontario: Prenatal Fitness, Postnatal Fitness, Perimenopause & Menopause, and Strong After 50."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Women's Fitness Programs at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono mb-3 bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Life-Stage Movement
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Our Programs
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Coaching designed for women through pregnancy, motherhood, perimenopause, menopause, and lifelong strength.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List - 50/50 Split Screen Sections (Images Cover Half The Page) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {siteConfig.programs.map((program, index) => (
            <div
              key={program.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image side - Covers 50% of the screen */}
              <div
                className={`lg:col-span-6 relative ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 min-h-[440px] sm:min-h-[540px] lg:min-h-[620px] group">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-1">
                      {program.stageName}
                    </span>
                    <h3 className="text-xl font-light text-white">{program.title}</h3>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
                  Life Stage Program 0{index + 1}
                </span>

                <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  {program.title}
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed font-normal">
                  {program.fullDescription}
                </p>

                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-2">
                  <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider block">
                    Who It's For:
                  </span>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {program.whoItsFor}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider block">
                    Key Adaptations:
                  </span>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    {program.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0">✓</div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {program.medicalNotice && (
                  <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-200 text-xs text-zinc-800 leading-relaxed italic">
                    <strong>Medical Note:</strong> {program.medicalNotice}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-medium transition-colors shadow-md"
                  >
                    View Program Details
                  </Link>
                  <a
                    href={BOOKING_URL}
                    className="border border-black text-black hover:bg-black hover:text-white px-7 py-3.5 rounded text-sm font-medium transition-colors"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
