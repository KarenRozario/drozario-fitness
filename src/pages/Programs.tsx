import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Check } from 'lucide-react';

export const Programs: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Women's Fitness Programs | Prenatal, Postnatal, Menopause & 50+"
        description="Explore specialized women's fitness coaching programs in Stoney Creek, Ontario: Prenatal Fitness, Postnatal Fitness, Perimenopause & Menopause, and Strong After 50."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Women's Fitness Programs at D'Rozario Fitness"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Our Programs
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-xl">
              Coaching designed for women through pregnancy, motherhood, menopause, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {siteConfig.programs.map((program, index) => (
            <div
              key={program.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 relative flex justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-full max-w-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 sm:h-96 object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                  Life Stage Program 0{index + 1}
                </span>

                <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                  {program.title}
                </h2>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {program.fullDescription}
                </p>

                <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                    Who It's For
                  </span>
                  <p className="text-sm text-slate-600">
                    {program.whoItsFor}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                    Key Adaptations:
                  </span>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {program.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {program.medicalNotice && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                    <strong>Medical Note:</strong> {program.medicalNotice}
                  </div>
                )}

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="bg-[#507C9E] hover:bg-[#416885] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-sm"
                  >
                    View Program Details
                  </Link>
                  <a
                    href={BOOKING_URL}
                    className="border border-slate-300 hover:border-slate-500 text-slate-700 px-6 py-2.5 rounded text-sm font-medium transition-colors"
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
