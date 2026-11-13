import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Book: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Book a Session | Stoney Creek Women's Fitness Coaching"
        description="Book your 1-on-1 women's fitness consultation or training session with Rachel D'Rozario in Stoney Creek, Ontario."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Book a session at D'Rozario Fitness"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Book a Session
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              1-on-1 private coaching and small group women's fitness with Rachel D'Rozario in Stoney Creek.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Box */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] p-8 sm:p-14 rounded-3xl border border-slate-200 text-center space-y-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#EBF2F7] text-[#3B6B96] flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Schedule Your Consultation or Session
              </h2>
              <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                Connect directly to our scheduling calendar to pick a time slot that matches your routine.
              </p>
            </div>

            <div>
              <a
                href={BOOKING_URL}
                className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-10 py-4 rounded-md text-base font-medium transition-colors shadow-md"
              >
                Launch Scheduling Calendar Now
              </a>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Target Booking Destination: <code className="text-burntOrange font-semibold">{BOOKING_URL}</code>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 text-left">
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-semibold text-[#3B6B96] block">
                  1. Choose Date & Time
                </span>
                <p className="text-xs text-slate-500">
                  Select available morning, afternoon, or evening appointment slots.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-semibold text-[#3B6B96] block">
                  2. Intake Form
                </span>
                <p className="text-xs text-slate-500">
                  Share your life stage, birth or health background, and personal strength goals.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/80 space-y-1">
                <span className="text-xs font-semibold text-[#3B6B96] block">
                  3. Meet Rachel 1-on-1
                </span>
                <p className="text-xs text-slate-500">
                  Personal consultation and movement blueprint tailored to your life stage in Stoney Creek.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-slate-500 space-y-1">
            <p>
              Prefer to book via phone or email? Call {siteConfig.phone} or email {siteConfig.email}.
            </p>
            <p>
              <Link to="/contact" className="text-[#3B6B96] hover:underline font-medium">
                Visit our Contact page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
