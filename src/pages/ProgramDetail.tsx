import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ArrowLeft } from 'lucide-react';

export const ProgramDetail: React.FC = () => {
  const { openBooking } = useBooking();
  const { slug } = useParams<{ slug: string }>();
  const program = siteConfig.programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title={`${program.title} | Women's Fitness Coaching Stoney Creek`}
        description={program.shortDescription}
      />

      {/* Hero Banner - Editorial Layout */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#1A1714] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FAF7F2]/90 hover:text-white transition-colors border-b border-[#FAF7F2]/40 pb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all programs</span>
            </Link>
          </div>

          <div className="max-w-3xl text-left">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/80 block mb-3">
              {program.stageName}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] mb-4">
              {program.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light max-w-[65ch] leading-[1.7]">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Program Overview */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                  SYLLABUS & OVERVIEW
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1714] tracking-tight">
                  About This Program
                </h2>
                <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] max-w-[65ch] font-light">
                  {program.fullDescription}
                </p>
              </div>

              {/* Medical Notice */}
              {program.medicalNotice && (
                <div className="p-6 bg-[#F2ECE3] border-l-2 border-[#B4532A] text-xs sm:text-sm text-[#1A1714]/85 leading-relaxed space-y-1.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B4532A] font-semibold block">
                    Important Medical Notice
                  </span>
                  <p className="italic">{program.medicalNotice}</p>
                </div>
              )}

              {/* Who It's For */}
              <div className="p-8 bg-[#F2ECE3] border-l-2 border-[#1A1714] space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714]/60 block font-medium">
                  Ideal Candidate
                </span>
                <h3 className="text-2xl font-serif text-[#1A1714]">
                  Who It's For
                </h3>
                <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light">
                  {program.whoItsFor}
                </p>
              </div>

              {/* What Sessions Look Like */}
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                  STUDIO EXPERIENCE
                </span>
                <h2 className="text-3xl font-serif text-[#1A1714] tracking-tight">
                  What Sessions Look Like
                </h2>
                <div className="p-8 border border-[#1A1714]/15 bg-white text-[#1A1714]/80 leading-[1.7] text-[17px] font-light">
                  {program.sessionOverview}
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-[#1A1714]">
                  Key Adaptations & Focus Points:
                </h3>
                <div className="divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15">
                  {program.benefits.map((b, idx) => (
                    <div key={idx} className="py-4 flex items-start gap-4 text-[15px] text-[#1A1714]/80 font-light">
                      <span className="font-mono text-[#B4532A] font-medium">—</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#1A1714] text-[#FAF7F2] p-8 border border-[#1A1714] sticky top-28 space-y-6 shadow-xl">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/60 block mb-2">
                    Investment
                  </span>
                  <div className="text-3xl font-serif text-[#FAF7F2]">
                    {program.pricingPlaceholder}
                  </div>
                  <p className="text-xs text-[#FAF7F2]/70 mt-2 leading-relaxed font-light">
                    Available in private 1-on-1 coaching or supportive small-group formats in Stoney Creek.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FAF7F2]/15 space-y-3 text-xs text-[#FAF7F2]/80">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B4532A] font-mono">—</span>
                    <span>Personalised form cues from Rachel</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B4532A] font-mono">—</span>
                    <span>Pelvic floor & deep core awareness</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B4532A] font-mono">—</span>
                    <span>Supportive Stoney Creek community</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    onClick={(e) => {
                      e.preventDefault();
                      openBooking(program.title);
                    }}
                    className="block w-full text-center bg-[#FAF7F2] hover:bg-[#B4532A] hover:text-[#FAF7F2] text-[#1A1714] py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking other programs */}
      <section className="py-24 bg-[#F2ECE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-[#1A1714] mb-8">
            Explore Other Life Stage Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {siteConfig.programs
              .filter((p) => p.slug !== program.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/programs/${other.slug}`}
                  className="p-8 border border-[#1A1714]/15 bg-[#FAF7F2] hover:bg-[#FAF7F2] hover:border-[#1A1714] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B4532A] block mb-2">
                      {other.stageName}
                    </span>
                    <h3 className="font-serif text-xl text-[#1A1714] group-hover:text-[#B4532A] transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-xs text-[#1A1714]/70 line-clamp-2 mt-2 font-light">
                      {other.shortDescription}
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1A1714] group-hover:text-[#B4532A] inline-flex items-center gap-1 mt-6 font-medium">
                    Read syllabus →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
