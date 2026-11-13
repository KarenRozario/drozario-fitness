import React, { useState } from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { Shield } from 'lucide-react';

export const Stories: React.FC = () => {
  const { openBooking } = useBooking();
  const { clientStoriesPlaceholder } = siteConfig;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Client Stories | Women's Fitness Journeys Stoney Creek"
        description="Structured movement case studies and client journeys at D'Rozario Fitness in Stoney Creek. Documenting objective functional outcomes and maternal strength."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Client Stories"
        kicker="VERIFIED OUTCOMES · STONEY CREEK"
        description="Every day, Rachel helps our Stoney Creek women feel stronger, more confident, and energised through every season of life."
        image="/images/stories-hero.jpg"
      />

      {/* Transparency Banner Between Hairline Rules */}
      <section className="py-4 bg-[#F2ECE3] text-xs text-[#1A1714]/80 border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2.5 font-mono">
          <Shield className="w-4 h-4 text-[#B4532A] shrink-0" />
          <span>
            <strong className="text-[#1A1714]">Verification Standard:</strong> D'Rozario Fitness documents verified functional outcomes (strength progress, core connection, daily stamina). We do not invent reviews or ratings.
          </span>
        </div>
      </section>

      {/* Case Studies - Editorial Grid */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              METHODICAL TRACKING
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] mb-4 tracking-tight">
              How We Document & Support Progress
            </h2>
            <p className="text-[#1A1714]/75 text-[17px] leading-[1.7] font-light">
              Every woman follows a thoughtful, personalised trajectory from baseline consultation through progressive functional strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {clientStoriesPlaceholder.placeholderCards.map((card, idx) => (
              <div
                key={card.id}
                className="bg-[#F2ECE3] border border-[#1A1714]/15 p-8 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#1A1714]/60 font-mono">
                    <span className="text-[#B4532A] font-semibold uppercase">{card.label}</span>
                    <span>0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#1A1714]">
                    {card.category}
                  </h3>

                  <div className="text-xs text-[#1A1714]/60 font-mono">
                    {card.demographic} · {card.timeline}
                  </div>

                  <div className="text-xs text-[#1A1714]/85 bg-[#FAF7F2] p-4 border border-[#1A1714]/15 font-mono">
                    <strong>Milestone:</strong> {card.metricsPlaceholder}
                  </div>
                </div>

                <p className="text-[11px] font-mono text-[#1A1714]/50 italic pt-4 border-t border-[#1A1714]/15">
                  [Verified case study in progress. Full milestone summary will be published upon client consent.]
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="btn-editorial-primary cursor-pointer"
            >
              Start Your Own Movement Journey
            </a>
          </div>
        </div>
      </section>

      {/* Community Newsletter Strip */}
      <section className="py-24 sm:py-32 bg-[#F2ECE3] border-t border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#1A1714]/15 bg-[#FAF7F2]">
                <img
                  src="/images/community-jump.jpg"
                  alt="Women's fitness community"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block font-medium">
                COMMUNITY UPDATES
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
                Join The Community
              </h2>
              <p className="text-[17px] text-[#1A1714]/75 leading-[1.7] font-light max-w-[65ch]">
                Sign up for our Movement bulletin to receive women's fitness tips, mom group news, and life-stage updates in Stoney Creek.
              </p>

              {submitted ? (
                <div className="p-5 bg-[#FAF7F2] border border-[#1A1714]/20 text-[#1A1714] text-xs font-mono">
                  Thank you! You're subscribed to Rachel's community updates.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md pt-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                  <button
                    type="submit"
                    className="btn-editorial-primary shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
