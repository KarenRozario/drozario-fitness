import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = siteConfig.programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title={`${program.title} | Women's Fitness Coaching Stoney Creek`}
        description={program.shortDescription}
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-75"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all programs</span>
            </Link>
          </div>

          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              {program.stageName}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              {program.title}
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Program Overview */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
                  Program Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
                  About This Program
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                  {program.fullDescription}
                </p>
              </div>

              {/* Medical Notice (Mandatory for prenatal/postnatal) */}
              {program.medicalNotice && (
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-800 leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-black uppercase tracking-wider text-xs">
                    <ShieldCheck className="w-4 h-4 text-black" />
                    <span>Safety Notice</span>
                  </div>
                  <p className="italic">{program.medicalNotice}</p>
                </div>
              )}

              {/* Who It's For */}
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 space-y-3">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
                  Ideal Candidate
                </span>
                <h3 className="text-2xl font-light text-zinc-900">
                  Who It's For
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed">
                  {program.whoItsFor}
                </p>
              </div>

              {/* What Sessions Look Like */}
              <div className="space-y-4">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
                  Session Experience
                </span>
                <h2 className="text-3xl font-light text-zinc-900 tracking-tight">
                  What Sessions Look Like
                </h2>
                <div className="p-6 rounded-2xl border border-zinc-200 bg-white text-zinc-600 leading-relaxed text-base">
                  {program.sessionOverview}
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-zinc-900">
                  Key Adaptations & Benefits:
                </h3>
                <ul className="space-y-3">
                  {program.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Box */}
            <div className="lg:col-span-4">
              <div className="bg-zinc-950 text-white p-8 rounded-3xl border border-zinc-800 sticky top-28 space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                    Investment
                  </span>
                  <div className="text-3xl font-light text-white">
                    {program.pricingPlaceholder}
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Available in private 1-on-1 coaching or supportive small-group formats in Stoney Creek.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Personalised form cues from Rachel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Pelvic floor & deep core awareness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white" />
                    <span>Supportive Stoney Creek community</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    className="block w-full text-center bg-white hover:bg-zinc-200 text-black py-3.5 rounded-lg text-sm font-semibold transition-colors shadow-lg"
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
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-zinc-900 mb-8">
            Explore Other Life Stage Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siteConfig.programs
              .filter((p) => p.slug !== program.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/programs/${other.slug}`}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all shadow-sm group"
                >
                  <h3 className="font-medium text-lg text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-zinc-500 line-clamp-2 mt-2">
                    {other.shortDescription}
                  </p>
                  <span className="text-xs font-semibold text-black inline-flex items-center gap-1 mt-4">
                    View program →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};
