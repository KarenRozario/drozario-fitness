import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { ArrowRight } from 'lucide-react';

export const Programs: React.FC = () => {
  const { openBooking } = useBooking();
  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Women's Fitness Programs | Prenatal, Postnatal, Menopause & 50+"
        description="Explore specialised women's fitness coaching programs in Stoney Creek, Ontario: Prenatal Fitness, Postnatal Fitness, Perimenopause & Menopause, and Strong After 50."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Our Programs"
        kicker="LIFE-STAGE MOVEMENT · STONEY CREEK"
        description="Coaching designed for women through pregnancy, motherhood, perimenopause, menopause, and lifelong strength."
        image={`${import.meta.env.BASE_URL}images/hero-women-fitness.jpg`}
      />

      {/* Programs List - Asymmetric 12-Column Magazine Spreads */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {siteConfig.programs.map((program, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={program.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image side - Tall Portrait Crop (4:5) */}
                <div
                  className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A1714]/15 shadow-sm group bg-[#F2ECE3]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/50 uppercase tracking-wider">
                    <span>{program.stageName}</span>
                    <span>No. 0{index + 1}</span>
                  </div>
                </div>

                {/* Text side */}
                <div
                  className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block font-medium">
                    NO. 0{index + 1} — {program.stageName.toUpperCase()}
                  </span>

                  <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                    {program.title}
                  </h2>

                  <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] max-w-[65ch] font-light">
                    {program.fullDescription}
                  </p>

                  <div className="p-6 bg-[#F2ECE3] border-l-2 border-[#1A1714] space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1714]/70 block font-medium">
                      Who It's For:
                    </span>
                    <p className="text-sm text-[#1A1714]/80 leading-relaxed font-light">
                      {program.whoItsFor}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#1A1714]/60 block font-medium">
                      Key Movement Adaptations:
                    </span>
                    <div className="space-y-2">
                      {program.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1A1714]/75">
                          <span className="font-mono text-[#B4532A] font-medium">—</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {program.medicalNotice && (
                    <div className="p-4 bg-[#F2ECE3] border-l-2 border-[#B4532A] text-xs text-[#1A1714]/80 leading-relaxed italic">
                      <strong>Medical Note:</strong> {program.medicalNotice}
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/programs/${program.slug}`}
                      className="btn-editorial-primary"
                    >
                      <span>Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={BOOKING_URL}
                      onClick={(e) => {
                        e.preventDefault();
                        openBooking(program.title);
                      }}
                      className="btn-editorial-outline cursor-pointer"
                    >
                      Book a Session
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
