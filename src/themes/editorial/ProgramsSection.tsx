import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { programsContent } from '../../content/programs';
import { ArrowRight, Check } from 'lucide-react';

export const EditorialProgramsSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block mb-3">
            {programsContent.kicker}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1714] tracking-tight leading-tight">
            {programsContent.headline}
          </h2>
          <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
            {programsContent.subhead}
          </p>
        </div>

        {/* Stacked Asymmetric Editorial Spreads */}
        <div className="space-y-28">
          {programsContent.programs.map((program, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={program.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column: Tall Portrait (4:5 Crop) */}
                <div
                  className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1714]/5 border border-[#1A1714]/15 shadow-sm group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 font-mono text-xs uppercase tracking-[0.2em] bg-[#1A1714] text-[#FAF7F2] px-3 py-1.5 shadow">
                      NO. {program.number}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
                      {program.stageName}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1714] tracking-tight">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light max-w-[62ch]">
                    {program.fullDescription}
                  </p>

                  {/* Who It's For & Benefits */}
                  <div className="bg-[#F2ECE3] p-6 border-l-2 border-[#1A1714] space-y-2">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#1A1714] font-medium block">
                      Who It's For
                    </span>
                    <p className="text-sm text-[#1A1714]/75 font-light leading-relaxed">
                      {program.whoItsFor}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#1A1714] font-medium block">
                      Key Movement Adaptations
                    </span>
                    <ul className="space-y-2 text-sm text-[#1A1714]/75 font-light">
                      {program.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#B4532A] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {program.medicalNotice && (
                    <p className="text-xs text-[#1A1714]/70 italic leading-relaxed">
                      <strong>Medical Note:</strong> {program.medicalNotice}
                    </p>
                  )}

                  <div className="pt-2 flex items-center gap-6">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] hover:text-[#B4532A] flex items-center gap-2 transition-colors font-medium border-b border-[#1A1714] pb-1 whitespace-nowrap"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={BOOKING_URL}
                      className="btn-editorial-primary text-[10px] py-2.5 px-5 whitespace-nowrap"
                    >
                      Book Session
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20 pt-12 border-t border-[#1A1714]/15">
          <Link
            to="/programs"
            className="btn-editorial-outline"
          >
            View Full Program Syllabi →
          </Link>
        </div>
      </div>
    </section>
  );
};

