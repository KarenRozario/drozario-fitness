import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ArrowLeft, Check } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title={`${service.title} | Stoney Creek Personal Training & Recovery`}
        description={service.shortDescription}
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="mb-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services</span>
            </Link>
          </div>

          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What It Is & What a Session Looks Like */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-light text-[#3B6B96] tracking-tight">
                  What It Is
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {service.fullDescription}
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200/80 space-y-4">
                <h3 className="text-2xl font-light text-[#3B6B96]">
                  Who It's For
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.whoItsFor}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-light text-[#3B6B96] tracking-tight">
                  What a Session Looks Like
                </h2>
                <div className="p-6 rounded-xl border border-slate-200 text-slate-600 leading-relaxed text-base">
                  {service.sessionOverview}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800">
                  Key Benefits & Outcomes:
                </h3>
                <ul className="space-y-2.5">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>{b}</span>
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
                    Session Investment
                  </span>
                  <div className="text-2xl font-normal text-slate-900">
                    {service.pricingPlaceholder}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Private 1-on-1 coaching directly with Rachel D'Rozario in Stoney Creek.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Private studio setting (no crowds)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct manual muscle release included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Movement screening & metrics tracked</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    className="block w-full text-center bg-[#507C9E] hover:bg-[#416885] text-white py-3 rounded-md text-sm font-medium transition-colors shadow-sm"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
