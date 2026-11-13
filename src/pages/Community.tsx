import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Users, Heart, Calendar } from 'lucide-react';

export const Community: React.FC = () => {
  const { community } = siteConfig;

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Community & Mom Groups | D'Rozario Fitness Stoney Creek"
        description="Rachel D'Rozario works closely with Stoney Creek mommy networks and mom groups, hosting group fitness classes, stroller strength meetups, and workshops."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/community-moms.jpg"
            alt="Stoney Creek Women and Mom Community Fitness"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-2">
              Stoney Creek Networks & Events
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Community & Mom Groups
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Bringing women together through movement, postpartum support, and life-stage strength.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
            {community.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {community.description}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {community.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF2F7] text-[#3B6B96] flex items-center justify-center">
                  {idx === 0 && <Heart className="w-6 h-6 text-burntOrange" />}
                  {idx === 1 && <Users className="w-6 h-6 text-[#3B6B96]" />}
                  {idx === 2 && <Calendar className="w-6 h-6 text-amber-600" />}
                </div>
                <h3 className="text-xl font-medium text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Collaborative Mom Groups & Partners */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-1">
                Local Collaborations
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#3B6B96]">
                Working with Mommy Networks
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Rachel hosts specialized workshops and partner classes with local community networks across Stoney Creek and Hamilton.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {community.partners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 space-y-2"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    {partner.role}
                  </span>
                  <h4 className="text-base font-semibold text-slate-900">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Are you part of a local mom group, midwifery collective, or women's organization? Rachel welcomes community partnerships.
              </p>
              <a
                href={BOOKING_URL}
                className="bg-[#507C9E] hover:bg-[#416885] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-sm shrink-0"
              >
                Inquire About Group Classes
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
