import React from 'react';
import { PainLocator } from '../components/shared/PainLocator';
import { SEO } from '../components/shared/SEO';
import { BOOKING_URL } from '../config/site';

export const PainLocatorPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Pain Locator & Movement Diagnostic Tool | Stoney Creek"
        description="Interactive anatomical pain mapping for Stoney Creek athletes and lifters. Discover root biomechanical causes for lower back, shoulder, hip, and knee restrictions."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-training.jpg"
            alt="Pain Locator Diagnostic Tool"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Interactive Pain Locator
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Select your primary restriction zone below to explore underlying biomechanical causes and learn how targeted muscle release creates lasting relief.
            </p>
          </div>
        </div>
      </section>

      {/* Main Diagnostic Area */}
      <section className="py-20 bg-[#140D0B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PainLocator isTeaser={false} />
        </div>
      </section>

      {/* 3 Step Protocol */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-light text-[#3B6B96] mb-3">
              How Rachel Resolves Movement Restrictions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Pain is rarely where the problem starts. We look at the entire kinetic chain to eliminate tension and build long-term strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-slate-200 space-y-3">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                Step 1: Movement Screen
              </span>
              <h3 className="text-xl font-light text-[#3B6B96]">
                Assess Functional Range
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We evaluate active versus passive range of motion. If you have passive joint flexibility but lack active control, the issue is stability and motor control.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-slate-200 space-y-3">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                Step 2: Targeted Release
              </span>
              <h3 className="text-xl font-light text-[#3B6B96]">
                Reset Fascial Tension
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hands-on myofascial work disrupts trigger points and frees up glide between muscle fascial compartments, resetting protective neural guarding.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-slate-200 space-y-3">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                Step 3: Strength Loading
              </span>
              <h3 className="text-xl font-light text-[#3B6B96]">
                Lock In New Range
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mobility without strength is temporary. We immediately load your newfound joint range under Rachel's coaching so your nervous system locks in the adaptation.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href={BOOKING_URL}
              className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-8 py-3.5 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Book an Assessment with Rachel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
