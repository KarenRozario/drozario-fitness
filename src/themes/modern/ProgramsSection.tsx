import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { programsContent } from '../../content/programs';
import { homeContent } from '../../content/home';
import { ArrowRight } from 'lucide-react';

export const ModernProgramsSection: React.FC = () => {
  const { openBooking } = useBooking();
  const { programs } = programsContent;
  const { factsStrip } = homeContent;

  const prenatal = programs[0];
  const postnatal = programs[1];
  const menopause = programs[2];
  const strongAfter50 = programs[3];

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-b-2 border-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Facts Strip: 3 big non-numeric, true statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#2E1A47] border-2 border-[#2E1A47] bg-[#F1ECF8]">
          {factsStrip.map((item, idx) => (
            <div key={idx} className="p-8 sm:p-10 space-y-2">
              <h3 className="font-archivo font-black text-2xl lg:text-3xl text-[#2E1A47] tracking-tight uppercase">
                {item.title}
              </h3>
              <p className="font-manrope text-sm text-[#2E1A47]/80 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block">
              {programsContent.kicker}
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-6xl text-[#2E1A47] tracking-tight uppercase leading-none">
              {programsContent.headline}
            </h2>
            <p className="font-manrope text-base text-[#2E1A47]/80">
              {programsContent.subhead}
            </p>
          </div>
          <Link
            to="/programs"
            className="font-archivo font-black text-xs uppercase tracking-widest text-[#2E1A47] hover:text-[#FF6B4A] flex items-center gap-2 border-b-2 border-[#2E1A47] pb-1 shrink-0 whitespace-nowrap"
          >
            <span>All Programs & Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* BENTO GRID: One large tile (Prenatal) + Three smaller tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Tile (Prenatal): 7 Columns, Solid Plum */}
          <div className="lg:col-span-7 bg-[#2E1A47] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group border-2 border-[#2E1A47]">
            {/* Oversized Number in Archivo */}
            <div className="flex justify-between items-start">
              <span className="font-archivo font-black text-7xl sm:text-9xl text-white/15 leading-none select-none">
                01
              </span>
              <span className="bg-[#FF6B4A] text-white font-archivo font-black text-xs uppercase tracking-widest px-4 py-1.5">
                {prenatal.stageName}
              </span>
            </div>

            {/* Photo Cropped Inside the Tile */}
            <div className="my-8 aspect-[16/9] w-full overflow-hidden bg-black/40 border border-white/20">
              <img
                src={prenatal.image}
                alt={prenatal.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Title Bottom-Left & Actions */}
            <div className="space-y-4">
              <h3 className="font-archivo font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                {prenatal.title}
              </h3>
              <p className="font-manrope text-sm text-white/80 max-w-[55ch]">
                {prenatal.shortDescription}
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to={`/programs/${prenatal.slug}`}
                  className="bg-[#FF6B4A] hover:bg-[#E55A3A] text-white px-6 py-3 font-archivo font-black text-xs uppercase tracking-widest whitespace-nowrap"
                >
                  View Details
                </Link>
                <a
                  href={BOOKING_URL}
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking(prenatal.title);
                  }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E1A47] px-6 py-3 font-archivo font-black text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer"
                >
                  Book Session
                </a>
              </div>
            </div>
          </div>

          {/* Right Column with 3 Stacked / Bento Tiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tile 2: Postnatal (Lilac Block) */}
            <div className="bg-[#F1ECF8] text-[#2E1A47] p-8 border-2 border-[#2E1A47] flex flex-col justify-between relative group">
              <div className="flex justify-between items-start">
                <span className="font-archivo font-black text-5xl sm:text-6xl text-[#2E1A47]/20 leading-none select-none">
                  02
                </span>
                <span className="font-archivo font-bold text-xs uppercase tracking-wider text-[#FF6B4A]">
                  {postnatal.stageName}
                </span>
              </div>
              <div className="my-4 aspect-[21/9] overflow-hidden border border-[#2E1A47]/20">
                <img
                  src={postnatal.image}
                  alt={postnatal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-archivo font-black text-2xl uppercase tracking-tight text-[#2E1A47]">
                  {postnatal.title}
                </h4>
                <p className="font-manrope text-xs text-[#2E1A47]/80 mt-1 line-clamp-2">
                  {postnatal.shortDescription}
                </p>
                <Link
                  to={`/programs/${postnatal.slug}`}
                  className="inline-flex items-center gap-1 font-archivo font-black text-xs uppercase tracking-wider text-[#FF6B4A] mt-3 hover:underline"
                >
                  <span>Explore 02</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tile 3: Perimenopause & Menopause (Solid Coral Block) */}
            <div className="bg-[#FF6B4A] text-white p-8 border-2 border-[#2E1A47] flex flex-col justify-between relative group">
              <div className="flex justify-between items-start">
                <span className="font-archivo font-black text-5xl sm:text-6xl text-white/25 leading-none select-none">
                  03
                </span>
                <span className="font-archivo font-bold text-xs uppercase tracking-wider text-white">
                  {menopause.stageName}
                </span>
              </div>
              <div className="my-4 aspect-[21/9] overflow-hidden border border-white/20">
                <img
                  src={menopause.image}
                  alt={menopause.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-archivo font-black text-2xl uppercase tracking-tight text-white">
                  {menopause.title}
                </h4>
                <p className="font-manrope text-xs text-white/90 mt-1 line-clamp-2">
                  {menopause.shortDescription}
                </p>
                <Link
                  to={`/programs/${menopause.slug}`}
                  className="inline-flex items-center gap-1 font-archivo font-black text-xs uppercase tracking-wider text-white mt-3 hover:underline font-bold"
                >
                  <span>Explore 03</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Tile 4: Strong After 50 (White Block) */}
            <div className="bg-white text-[#2E1A47] p-8 border-2 border-[#2E1A47] flex flex-col justify-between relative group">
              <div className="flex justify-between items-start">
                <span className="font-archivo font-black text-5xl sm:text-6xl text-[#2E1A47]/20 leading-none select-none">
                  04
                </span>
                <span className="font-archivo font-bold text-xs uppercase tracking-wider text-[#FF6B4A]">
                  {strongAfter50.stageName}
                </span>
              </div>
              <div className="my-4 aspect-[21/9] overflow-hidden border border-[#2E1A47]/20">
                <img
                  src={strongAfter50.image}
                  alt={strongAfter50.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-archivo font-black text-2xl uppercase tracking-tight text-[#2E1A47]">
                  {strongAfter50.title}
                </h4>
                <p className="font-manrope text-xs text-[#2E1A47]/80 mt-1 line-clamp-2">
                  {strongAfter50.shortDescription}
                </p>
                <Link
                  to={`/programs/${strongAfter50.slug}`}
                  className="inline-flex items-center gap-1 font-archivo font-black text-xs uppercase tracking-wider text-[#FF6B4A] mt-3 hover:underline"
                >
                  <span>Explore 04</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

