import React from 'react';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { BookingForm } from '../components/booking/BookingForm';
import { Link, useSearchParams } from 'react-router-dom';

export const Book: React.FC = () => {
  const [searchParams] = useSearchParams();
  const programParam = searchParams.get('program') || undefined;

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Book a Session | Stoney Creek Women's Fitness Coaching"
        description="Book your 1-on-1 women's fitness consultation or training session with Rachel D'Rozario in Stoney Creek, Ontario."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Book a Session"
        kicker="DIRECT SCHEDULING · STONEY CREEK"
        description="1-on-1 private coaching and small group women's fitness with Rachel D'Rozario in Stoney Creek."
        image={`${import.meta.env.BASE_URL}images/hero-women-fitness.webp`}
      />

      {/* Form Container */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm initialProgram={programParam} isModal={false} />

          {/* How It Works Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 text-left">
            <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 space-y-2">
              <span className="text-xs font-serif text-[#1A1714] block font-semibold">
                01. Submit Request
              </span>
              <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                Select your preferred life stage focus and available appointment window.
              </p>
            </div>

            <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 space-y-2">
              <span className="text-xs font-serif text-[#1A1714] block font-semibold">
                02. Confidential Intake
              </span>
              <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                Rachel reviews your background and contacts you within 1 business day to confirm.
              </p>
            </div>

            <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 space-y-2">
              <span className="text-xs font-serif text-[#1A1714] block font-semibold">
                03. Meet Rachel 1-on-1
              </span>
              <p className="text-xs text-[#1A1714]/70 font-light leading-relaxed">
                Personal consultation and movement assessment tailored to your life stage in Stoney Creek.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-[#1A1714]/70 space-y-2 font-mono">
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
