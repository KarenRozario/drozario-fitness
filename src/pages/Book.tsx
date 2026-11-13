import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Book: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Book a Session | Stoney Creek Women's Fitness Coaching"
        description="Book your 1-on-1 women's fitness consultation or training session with Rachel D'Rozario in Stoney Creek, Ontario."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Book a session at D'Rozario Fitness"
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-75"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Direct Scheduling
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Book a Session
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              1-on-1 private coaching and small group women's fitness with Rachel D'Rozario in Stoney Creek.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Box */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 p-8 sm:p-14 rounded-3xl border border-zinc-200 text-center space-y-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight">
                Schedule Your Consultation or Session
              </h2>
              <p className="text-base text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
                Connect directly to our scheduling calendar to pick a time slot that matches your routine.
              </p>
            </div>

            <div>
              <a
                href={BOOKING_URL}
                className="inline-block bg-black hover:bg-zinc-800 text-white px-10 py-4 rounded-lg text-base font-semibold transition-colors shadow-lg"
              >
                Launch Scheduling Calendar Now
              </a>
            </div>

            <p className="text-xs text-zinc-400 font-mono">
              Target Booking Destination: <code className="text-black font-semibold">{BOOKING_URL}</code>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-200 text-left">
              <div className="p-5 bg-white rounded-xl border border-zinc-200 space-y-1">
                <span className="text-xs font-semibold text-black block uppercase tracking-wider font-mono">
                  1. Choose Date & Time
                </span>
                <p className="text-xs text-zinc-600">
                  Select available morning, afternoon, or evening appointment slots.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-zinc-200 space-y-1">
                <span className="text-xs font-semibold text-black block uppercase tracking-wider font-mono">
                  2. Intake Form
                </span>
                <p className="text-xs text-zinc-600">
                  Share your life stage, birth or health background, and personal strength goals.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-zinc-200 space-y-1">
                <span className="text-xs font-semibold text-black block uppercase tracking-wider font-mono">
                  3. Meet Rachel 1-on-1
                </span>
                <p className="text-xs text-zinc-600">
                  Personal consultation and movement blueprint tailored to your life stage in Stoney Creek.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-zinc-500 space-y-2">
            <p>
              Prefer to book via phone or email? Call {siteConfig.phone} or email {siteConfig.email}.
            </p>
            <p>
              <Link to="/contact" className="text-black hover:underline font-semibold">
                Visit our Contact page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
