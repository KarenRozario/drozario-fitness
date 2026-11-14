import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { homeContent } from '../../content/home';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SoftHero: React.FC = () => {
  const { openBooking } = useBooking();
  const { hero } = homeContent;

  return (
    <section className="bg-[#FFFBF8] py-12 sm:py-20 lg:py-24 border-b border-[#F6E8E1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Soft Blush Panel (NO text on photo) */}
          <div className="lg:col-span-6 bg-[#F6E8E1] rounded-[32px] p-8 sm:p-12 lg:p-14 space-y-6 shadow-sm border border-[#EEDBD2]">
            <div className="inline-flex items-center gap-2 bg-[#FFFBF8] text-[#8FA58A] px-4 py-1.5 rounded-full text-xs font-dm-sans font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{hero.kicker}</span>
            </div>

            <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl text-[#3B2F2A] tracking-tight leading-[1.1]">
              Strong Through <span className="font-caveat text-5xl sm:text-6xl text-[#8FA58A] font-bold">Every</span> Stage.
            </h1>

            <p className="font-dm-sans text-base sm:text-lg text-[#3B2F2A]/80 font-normal leading-relaxed max-w-[55ch]">
              {hero.subhead}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                onClick={(e) => {
                  e.preventDefault();
                  openBooking();
                }}
                className="rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-[#FFFBF8] px-7 py-3 text-sm font-dm-sans font-semibold transition-all shadow-md whitespace-nowrap cursor-pointer"
              >
                {hero.primaryCta.label}
              </a>
              <Link
                to={hero.secondaryCta.href}
                className="rounded-full border-2 border-[#3B2F2A] text-[#3B2F2A] hover:bg-[#3B2F2A] hover:text-[#FFFBF8] px-7 py-3 text-sm font-dm-sans font-semibold transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Photo inside a Tall Arch Shape (Rounded Top) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-[32px] overflow-hidden shadow-2xl bg-[#F6E8E1] border-4 border-white">
              <img
                src={hero.heroImage}
                alt="Woman exercising in gentle, natural studio light"
                width={512}
                height={640}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Small Floating Rounded Card */}
            <div className="absolute -bottom-5 sm:bottom-6 -right-2 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#F6E8E1] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F6E8E1] flex items-center justify-center text-[#8FA58A] text-lg">
                🌸
              </div>
              <div>
                <p className="font-dm-sans text-xs uppercase tracking-wider text-[#8FA58A] font-semibold">Specialised Care</p>
                <p className="font-dm-serif text-sm text-[#3B2F2A]">{hero.softFloatingCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

