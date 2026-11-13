import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Link } from 'react-router-dom';

export const Book: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Book a Session | Stoney Creek Women's Fitness Coaching"
        description="Book your 1-on-1 women's fitness consultation or training session with Rachel D'Rozario in Stoney Creek, Ontario."
      />

      {/* Hero Banner - Editorial Magazine Header */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#1A1714] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Book a session at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/90 block mb-3">
              DIRECT SCHEDULING · STONEY CREEK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] mb-4">
              Book a Session
            </h1>
            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light max-w-[65ch] leading-[1.7]">
              1-on-1 private coaching and small group women's fitness with Rachel D'Rozario in Stoney Creek.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Box */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F2ECE3] p-8 sm:p-16 border border-[#1A1714]/15 text-center space-y-8 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block font-medium">
              RESERVE YOUR APPOINTMENT
            </span>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
                Schedule Your Session
              </h2>
              <p className="text-[17px] text-[#1A1714]/75 max-w-md mx-auto leading-[1.7] font-light">
                Connect directly to our scheduling calendar to pick a time slot that matches your routine.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={BOOKING_URL}
                className="btn-editorial-primary text-xs py-4 px-10"
              >
                Launch Scheduling Calendar Now
              </a>
            </div>

            <p className="text-xs text-[#1A1714]/60 font-mono">
              Target Booking Destination: <code className="text-[#1A1714] font-semibold">{BOOKING_URL}</code>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#1A1714]/15 text-left">
              <div className="p-6 bg-[#FAF7F2] border border-[#1A1714]/15 space-y-2">
                <span className="text-xs font-serif text-[#1A1714] block">
                  01. Choose Date & Time
                </span>
                <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                  Select available morning, afternoon, or evening appointment slots.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#1A1714]/15 space-y-2">
                <span className="text-xs font-serif text-[#1A1714] block">
                  02. Confidential Intake
                </span>
                <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                  Share your life stage, birth or health background, and personal strength goals.
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#1A1714]/15 space-y-2">
                <span className="text-xs font-serif text-[#1A1714] block">
                  03. Meet Rachel 1-on-1
                </span>
                <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                  Personal consultation and movement blueprint tailored to your life stage in Stoney Creek.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center text-xs text-[#1A1714]/70 space-y-2 font-mono">
            <p>
              Prefer to book via phone or email? Call {siteConfig.phone} or email {siteConfig.email}.
            </p>
            <p>
              <Link to="/contact" className="text-[#B4532A] hover:underline uppercase tracking-wider font-semibold">
                Visit our Contact page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
