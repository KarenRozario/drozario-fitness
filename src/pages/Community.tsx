import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Users, Heart, Calendar } from 'lucide-react';

export const Community: React.FC = () => {
  const { community } = siteConfig;

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Community & Mom Groups | D'Rozario Fitness Stoney Creek"
        description="Rachel D'Rozario works closely with Stoney Creek mommy networks and mom groups, hosting group fitness classes, stroller strength meetups, and workshops."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/community-moms.jpg"
            alt="Stoney Creek Women and Mom Community Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Stoney Creek Networks & Events
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Community & Mom Groups
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Bringing women together through movement, postpartum support, and life-stage strength in Stoney Creek.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section - 50/50 Split Screen With Large Image */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block font-mono">
                Our Movement Community
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                {community.title}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed font-normal">
                {community.description}
              </p>
              <div className="pt-2">
                <a
                  href={BOOKING_URL}
                  className="inline-block bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
                >
                  Join a Community Session
                </a>
              </div>
            </div>

            {/* Right: Large Editorial Image (Covers Half The Screen) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 min-h-[460px] sm:min-h-[540px] group">
              <img
                src="/images/community-moms.jpg"
                alt="Mothers exercising together in community class"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-1">
                  Mothers & Families First
                </span>
                <p className="text-base font-light text-white">
                  Safe, progressive, community-driven strength training in Stoney Creek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {community.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-4 hover:border-black transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center">
                  {idx === 0 && <Heart className="w-6 h-6 text-white" />}
                  {idx === 1 && <Users className="w-6 h-6 text-white" />}
                  {idx === 2 && <Calendar className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-xl font-medium text-zinc-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Collaborative Mom Groups & Partners */}
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-zinc-200 shadow-md space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2 font-mono">
                Local Collaborations
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-zinc-900 tracking-tight">
                Working with Mommy Networks
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light">
                Rachel hosts specialised workshops and partner classes with local community networks across Stoney Creek and Hamilton.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {community.partners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 hover:border-black transition-colors"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                    {partner.role}
                  </span>
                  <h4 className="text-base font-semibold text-zinc-900">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {partner.focus}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-zinc-500 max-w-xl">
                Are you part of a local mom group, midwifery collective, or women's organization? Rachel welcomes community partnerships.
              </p>
              <a
                href={BOOKING_URL}
                className="bg-black hover:bg-zinc-800 text-white px-7 py-3 rounded text-sm font-semibold transition-colors shadow-md shrink-0"
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
