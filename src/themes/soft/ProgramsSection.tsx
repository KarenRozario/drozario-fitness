import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { programsContent } from '../../content/programs';
import { ChevronLeft, ChevronRight, ArrowRight, Check } from 'lucide-react';

export const SoftProgramsSection: React.FC = () => {
  const { openBooking } = useBooking();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FFFBF8] border-b border-[#F6E8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
              {programsContent.kicker}
            </span>
            <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight">
              {programsContent.headline}
            </h2>
            <p className="font-dm-sans text-base text-[#3B2F2A]/75 font-normal leading-relaxed">
              {programsContent.subhead}
            </p>
          </div>

          {/* Carousel Arrows on Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#EEDBD2] bg-[#F6E8E1] hover:bg-[#8FA58A] hover:text-white text-[#3B2F2A] flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous programs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#EEDBD2] bg-[#F6E8E1] hover:bg-[#8FA58A] hover:text-white text-[#3B2F2A] flex items-center justify-center transition-all shadow-sm"
              aria-label="Next programs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Row of Tall Rounded Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {programsContent.programs.map((program) => (
            <div
              key={program.slug}
              className="w-[310px] sm:w-[360px] shrink-0 rounded-[28px] overflow-hidden bg-white border border-[#F6E8E1] shadow-md flex flex-col justify-between snap-start group"
            >
              {/* Image Top (Tall 4:5 Crop, Rounded Top) */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#F6E8E1]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3.5 py-1 text-xs font-dm-sans font-semibold text-[#8FA58A] shadow-sm">
                  {program.stageName}
                </div>
              </div>

              {/* Soft Colour Band Bottom */}
              <div className="p-6 sm:p-7 bg-white flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-dm-serif text-2xl text-[#3B2F2A] leading-snug">
                    {program.title}
                  </h3>
                  <p className="font-dm-sans text-sm text-[#3B2F2A]/75 font-normal leading-relaxed line-clamp-3">
                    {program.shortDescription}
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-[#3B2F2A]/80 font-dm-sans">
                    {program.benefits.slice(0, 2).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F6E8E1] flex items-center justify-between">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="text-xs font-dm-sans font-semibold text-[#3B2F2A] hover:text-[#8FA58A] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={BOOKING_URL}
                    onClick={(e) => {
                      e.preventDefault();
                      openBooking(program.title);
                    }}
                    className="rounded-full bg-[#F6E8E1] hover:bg-[#8FA58A] text-[#3B2F2A] hover:text-white px-4 py-2 text-xs font-dm-sans font-semibold transition-all cursor-pointer"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-[#3B2F2A] text-[#3B2F2A] hover:bg-[#3B2F2A] hover:text-white px-7 py-3 text-xs font-dm-sans font-semibold tracking-wide transition-all"
          >
            <span>Explore All 4 Life Stage Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

