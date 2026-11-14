import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { MapPin } from 'lucide-react';

export const Team: React.FC = () => {
  const { openBooking } = useBooking();
  const rachel = siteConfig.team[0];

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Meet Rachel D'Rozario | Women's Fitness Coach Stoney Creek"
        description="Meet Rachel D'Rozario, Founder & Women's Fitness Coach at D'Rozario Fitness in Stoney Creek, Ontario. Dedicated to prenatal, postnatal, and menopause fitness."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Meet Rachel D'Rozario"
        kicker="FOUNDER & HEAD COACH · STONEY CREEK"
        description="Empowering women through pregnancy, motherhood, and menopause with safe, progressive strength in Stoney Creek."
        image={`${import.meta.env.BASE_URL}images/team-hero.webp`}
      />

      {/* Philosophy Statement Between Hairline Rules */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
            COACHING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
            Coaching Built Around Your Life Stage
          </h2>
          <p className="text-[17px] sm:text-lg text-[#1A1714]/80 leading-[1.7] font-light">
            We believe the key to sustainable results is working hard while feeling deeply supported and understood. At D'Rozario Fitness, you work directly with Rachel D'Rozario. Rachel is passionate about helping women navigate pregnancy, postpartum recovery, and menopause through safe, progressive strength.
          </p>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#1A1714]/70">
            <MapPin className="w-3.5 h-3.5 text-[#B4532A]" />
            <span>Stoney Creek Studio · 1-on-1 & Small Group Coaching</span>
          </div>
        </div>
      </section>

      {/* Rachel D'Rozario In-Depth Feature - Asymmetric Spread */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Tall Portrait Crop (4:5) */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A1714]/15 shadow-sm group bg-[#FAF7F2]">
                <img
                  src={rachel.image}
                  alt={rachel.name}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/50 uppercase tracking-wider">
                <span>{rachel.name}</span>
                <span>{rachel.certifications}</span>
              </div>
            </div>

            {/* Right: Bio With Drop Cap */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2">
                  PROFILE & METHOD
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                  {rachel.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714]/60 mt-1">
                  {rachel.role} · {rachel.certifications}
                </p>
              </div>

              {/* First paragraph with drop cap */}
              <p className="drop-cap text-[17px] text-[#1A1714]/85 leading-[1.7] font-light max-w-[65ch]">
                {rachel.bio}
              </p>

              <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light max-w-[65ch]">
                Rather than relying on one-size-fits-all workouts, Rachel tailors every movement session to your individual life stage, honouring your energy, pelvic floor health, and personal goals.
              </p>

              <div className="p-6 bg-[#FAF7F2] border-l-2 border-[#1A1714] space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] block font-medium">
                  Specialised Coaching Disciplines:
                </span>
                <div className="divide-y divide-[#1A1714]/15">
                  {rachel.specialities.map((spec, idx) => (
                    <div key={idx} className="py-2.5 flex items-center gap-3 text-xs sm:text-sm text-[#1A1714]/80 font-light">
                      <span className="font-mono text-[#B4532A] font-medium">—</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking();
                  }}
                  className="btn-editorial-primary cursor-pointer"
                >
                  Book a Session with Rachel
                </a>
                <span className="text-xs font-mono text-[#1A1714]/60">
                  Private studio & small groups in Stoney Creek
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
