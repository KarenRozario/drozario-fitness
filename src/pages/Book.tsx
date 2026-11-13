import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Book: React.FC = () => {
  return (
    <>
      <SEO
        title="Book a Session | Stoney Creek Personal Training & Recovery"
        description="Book your 1-on-1 personal training or muscle release assessment with Rachel D'Rozario in Stoney Creek, Ontario."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Direct Scheduling Portal
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Book a Session
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Take the first step toward lasting joint health and athletic power. All sessions are 1-on-1 and conducted at our private Stoney Creek studio.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Integration Panel */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-espresso-card p-8 sm:p-12 rounded-lg border border-espresso-border shadow-2xl space-y-8 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-burntOrange/20 border border-burntOrange text-burntOrange flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-burntOrange font-bold">
                Online Reservation Engine
              </span>
              <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
                Schedule Your Initial Assessment
              </h2>
              <p className="text-sm sm:text-base text-cream-muted max-w-lg mx-auto leading-relaxed">
                Connect directly to our scheduling calendar to pick a time slot that matches your routine.
              </p>
            </div>

            {/* Direct Booking Link Action */}
            <div className="pt-2">
              <Button
                href={BOOKING_URL}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-xl px-10 py-5"
                ariaLabel="Launch external booking calendar"
              >
                Launch Scheduling Calendar Now
              </Button>
            </div>

            <p className="text-xs font-mono text-cream-dark">
              Target Booking Destination: <code className="text-burntOrange">{BOOKING_URL}</code>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-espresso-border text-left">
              <div className="p-3 bg-espresso rounded border border-espresso-border space-y-1">
                <span className="text-xs font-mono uppercase text-burntOrange font-semibold block">
                  1. Choose Date
                </span>
                <p className="text-xs text-cream-muted">
                  View live availability for morning, afternoon, or evening sessions.
                </p>
              </div>

              <div className="p-3 bg-espresso rounded border border-espresso-border space-y-1">
                <span className="text-xs font-mono uppercase text-burntOrange font-semibold block">
                  2. Intake Form
                </span>
                <p className="text-xs text-cream-muted">
                  Provide brief background on injuries, sport focus, and movement goals.
                </p>
              </div>

              <div className="p-3 bg-espresso rounded border border-espresso-border space-y-1">
                <span className="text-xs font-mono uppercase text-burntOrange font-semibold block">
                  3. Meet Rachel
                </span>
                <p className="text-xs text-cream-muted">
                  Private 1-on-1 assessment and treatment at our Stoney Creek facility.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Alternative */}
          <div className="mt-12 text-center text-xs text-cream-dark space-y-2">
            <p>
              Prefer to book via phone or email? Reach out directly to {siteConfig.phone} or {siteConfig.email}.
            </p>
            <p>
              <Link to="/contact" className="text-burntOrange hover:underline font-mono uppercase tracking-wider">
                Visit contact page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
