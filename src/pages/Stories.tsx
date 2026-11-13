import React, { useState } from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Shield, Activity } from 'lucide-react';

export const Stories: React.FC = () => {
  const { clientStoriesPlaceholder } = siteConfig;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Client Stories | Women's Fitness Journeys Stoney Creek"
        description="Structured movement case studies and client journeys at D'Rozario Fitness in Stoney Creek. Documenting objective functional outcomes and maternal strength."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/stories-hero.jpg"
            alt="Client Stories at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Verified Progress
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Client Stories
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Every day, Rachel helps our Stoney Creek women feel stronger, more confident, and energised through every season of life.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Banner */}
      <section className="py-4 bg-zinc-950 text-xs text-zinc-400 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Shield className="w-4 h-4 text-white shrink-0" />
          <span>
            <strong className="text-white">Verification Standard:</strong> D'Rozario Fitness documents verified functional outcomes (strength progress, core connection, daily stamina). We do not invent reviews or ratings.
          </span>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2 font-mono">
              Empowerment Framework
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 mb-3 tracking-tight">
              How We Document & Support Progress
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Every woman follows a thoughtful, personalised trajectory from baseline consultation through progressive functional strength.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStoriesPlaceholder.placeholderCards.map((card) => (
              <div
                key={card.id}
                className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="text-black font-semibold uppercase">{card.label}</span>
                    <Activity className="w-4 h-4 text-zinc-700" />
                  </div>

                  <h3 className="text-xl font-light text-zinc-900">
                    {card.category}
                  </h3>

                  <div className="text-xs text-zinc-500 font-mono">
                    {card.demographic} · {card.timeline}
                  </div>

                  <p className="text-xs text-zinc-700 bg-white p-4 rounded-xl border border-zinc-200 font-mono">
                    <strong>Milestone:</strong> {card.metricsPlaceholder}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 italic pt-3 border-t border-zinc-200">
                  [Verified case study in progress. Full milestone summary will be published upon client consent.]
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <a
              href={BOOKING_URL}
              className="inline-block bg-black hover:bg-zinc-800 text-white px-8 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
            >
              Start Your Own Movement Journey
            </a>
          </div>
        </div>
      </section>

      {/* Community Newsletter Strip - 50/50 Split */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 min-h-[400px]">
                <img
                  src="/images/community-jump.jpg"
                  alt="Women's fitness community"
                  className="w-full h-full object-cover object-center absolute inset-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block font-mono">
                Stay Informed
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                Join The Community
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed font-light">
                Sign up for our Movement bulletin to receive women's fitness tips, mom group news, and life-stage updates in Stoney Creek.
              </p>

              {submitted ? (
                <div className="p-4 bg-zinc-900 border border-white/20 rounded-xl text-white text-xs font-medium">
                  Thank you! You're subscribed to Rachel's community updates.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded text-sm font-semibold transition-colors shrink-0"
                  >
                    Sign me up
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
