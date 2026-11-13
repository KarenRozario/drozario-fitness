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
    <div className="bg-white text-slate-800">
      <SEO
        title={`${program.title} | Women's Fitness Coaching Stoney Creek`}
        description={program.shortDescription}
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="mb-4">
            <Link
              to="/programs"
              className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Programs</span>
            </Link>
          </div>

          <div className="max-w-2xl text-left">
            <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-2">
              Women's Life Stage Coaching
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              {program.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-xl">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Program Overview */}
              <div className="space-y-4">
                <h2 className="text-3xl font-light text-[#3B6B96] tracking-tight">
                  About This Program
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {program.fullDescription}
                </p>
              </div>

              {/* Medical Notice (Mandatory for prenatal/postnatal) */}
              {program.medicalNotice && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-900 leading-relaxed space-y-1">
                  <div className="flex items-center gap-2 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>Safety First</span>
                  </div>
                  <p>{program.medicalNotice}</p>
                </div>
              )}

              {/* Who It's For */}
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-2xl font-light text-[#3B6B96]">
                  Who It's For
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {program.whoItsFor}
                </p>
              </div>

              {/* What Sessions Look Like */}
              <div className="space-y-4">
                <h2 className="text-3xl font-light text-[#3B6B96] tracking-tight">
                  What Sessions Look Like
                </h2>
                <div className="p-6 rounded-2xl border border-slate-200 bg-white text-slate-600 leading-relaxed text-base">
                  {program.sessionOverview}
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800">
                  What You Can Expect:
                </h3>
                <ul className="space-y-3">
                  {program.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Box */}
            <div className="lg:col-span-4">
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200 sticky top-28 space-y-6 shadow-sm">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Investment
                  </span>
                  <div className="text-2xl font-normal text-slate-900">
                    {program.pricingPlaceholder}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Available in private 1-on-1 or supportive small-group formats in Stoney Creek.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Personalised form cues from Rachel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pelvic floor & core-aware training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Supportive community of women</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    className="block w-full text-center bg-[#507C9E] hover:bg-[#416885] text-white py-3 rounded-md text-sm font-medium transition-colors shadow-sm"
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
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-[#3B6B96] mb-8">
            Explore Other Life Stage Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siteConfig.programs
              .filter((p) => p.slug !== program.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/programs/${other.slug}`}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#3B6B96] transition-all shadow-xs group"
                >
                  <h3 className="font-medium text-lg text-slate-900 group-hover:text-[#3B6B96] transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {other.shortDescription}
                  </p>
                  <span className="text-xs font-semibold text-burntOrange inline-flex items-center gap-1 mt-3">
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
