import React from 'react';
import { PainLocator } from '../components/shared/PainLocator';
import { SEO } from '../components/shared/SEO';
import { BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { HelpCircle, Stethoscope, Zap } from 'lucide-react';

export const PainLocatorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Pain Locator & Movement Diagnostic Tool"
        description="Interactive anatomical pain mapping for Stoney Creek athletes and lifters. Discover root biomechanical causes for lower back, shoulder, hip, and knee restrictions."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Self-Diagnostic Portal
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Interactive Pain Locator
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Pain is an alarm signal, not a life sentence. Select your primary area of restriction or discomfort below to understand how myofascial adhesions, joint mechanics, and movement compensations may be contributing — and how our targeted recovery system resolves it.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PainLocator isTeaser={false} />
        </div>
      </section>

      {/* Educational FAQ / Methodology Section */}
      <section className="py-20 bg-espresso border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
              Clinical Context
            </span>
            <h2 className="text-4xl font-display text-cream uppercase">
              How Our Diagnostic Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-espresso-card p-6 rounded-md border border-espresso-border space-y-3">
              <div className="w-10 h-10 rounded bg-espresso flex items-center justify-center text-burntOrange">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display text-cream uppercase">
                1. Biomechanical Screening
              </h3>
              <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                We assess passive versus active joint angles. If you have passive range of motion but cannot control it under load, your issue is motor control and stability, not joint wear.
              </p>
            </div>

            <div className="bg-espresso-card p-6 rounded-md border border-espresso-border space-y-3">
              <div className="w-10 h-10 rounded bg-espresso flex items-center justify-center text-burntOrange">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display text-cream uppercase">
                2. Targeted Soft-Tissue Release
              </h3>
              <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                Hands-on myofascial work disrupts local trigger points and frees up glide between muscle fascial compartments, resetting hypertonic neural guarding.
              </p>
            </div>

            <div className="bg-espresso-card p-6 rounded-md border border-espresso-border space-y-3">
              <div className="w-10 h-10 rounded bg-espresso flex items-center justify-center text-burntOrange">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display text-cream uppercase">
                3. Loading the New Range
              </h3>
              <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                Mobility without strength is temporary. We immediately load your newfound joint range with isometric holds and controlled resistance so your nervous system locks in the adaptation.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button href={BOOKING_URL} variant="primary" size="lg">
              Book a Movement & Pain Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
