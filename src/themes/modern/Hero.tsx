import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { homeContent } from '../../content/home';
import { ArrowRight } from 'lucide-react';

export const ModernHero: React.FC = () => {
  const { hero, marquee } = homeContent;

  return (
    <>
      {/* Split Screen Hero: 55% Solid Plum Block / 45% Full-Height Photo (NO text on photo) */}
      <section className="bg-[#2E1A47] text-white overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex items-stretch">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left 55% (lg:col-span-7): Solid Plum Block */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-16 sm:py-24 space-y-8 bg-[#2E1A47]">
            <div className="space-y-4">
              <span className="font-archivo text-xs sm:text-sm font-black tracking-[0.25em] text-[#FF6B4A] uppercase block">
                {hero.kicker}
              </span>

              {/* Huge Stacked Uppercase Headline in Archivo */}
              <h1 className="font-archivo font-black text-5xl sm:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] uppercase">
                <span>STRONG</span>
                <br />
                <span>THROUGH</span>
                <br />
                <span className="text-[#FF6B4A]">EVERY</span>
                <br />
                <span>STAGE.</span>
              </h1>
            </div>

            <p className="font-manrope text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-[50ch]">
              {hero.subhead}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-[#FF6B4A] hover:bg-[#E55A3A] text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none shadow-lg whitespace-nowrap"
              >
                {hero.primaryCta.label}
              </a>
              <Link
                to={hero.secondaryCta.href}
                className="border-2 border-white hover:bg-white hover:text-[#2E1A47] text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none flex items-center gap-2 whitespace-nowrap"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right 45% (lg:col-span-5): Full-Height Natural Photo */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full bg-zinc-900 overflow-hidden">
            <img
              src={hero.heroImage}
              alt="Woman training with barbell at D'Rozario Fitness"
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Strip in Coral */}
      <div className="bg-[#FF6B4A] text-white py-3.5 border-y-2 border-[#2E1A47] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap font-archivo font-black text-sm uppercase tracking-widest">
          {[...Array(6)].map((_, groupIdx) => (
            <div key={groupIdx} className="flex items-center gap-8 mx-4">
              {marquee.map((item, idx) => (
                <span key={idx} className="flex items-center gap-8">
                  <span>{item}</span>
                  <span className="w-2 h-2 rounded-full bg-white opacity-80" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
