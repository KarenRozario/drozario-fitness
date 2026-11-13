import React, { useState } from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Shield, Activity } from 'lucide-react';

export const Stories: React.FC = () => {
  const { clientStoriesPlaceholder } = siteConfig;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Success Stories | Client Movement Journeys"
        description="Structured movement case studies and client recovery journeys at D'Rozario Muscle Release in Stoney Creek. Documenting objective functional outcomes."
      />

      {/* Hero Banner - Modeled on Screenshot 1.01.19 PM */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/stories-hero.jpg"
            alt="Success Stories at D'Rozario Muscle Release"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Success Stories
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Each and every day, Rachel helps our Stoney Creek community live happier, healthier, and more active lives. We celebrate every movement win as we help you reach new heights without pain.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Banner */}
      <section className="py-4 bg-[#F8F9FA] border-b border-slate-200 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#3B6B96] shrink-0" />
          <span>
            <strong>Verification Standard:</strong> D'Rozario Muscle Release documents objective functional outcomes (range of motion, strength symmetry, pain index). We do not invent fake reviews or ratings.
          </span>
        </div>
      </section>

      {/* Clinical Framework & Case Studies - Modeled on Screenshot 1.01.21 PM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-[#3B6B96] mb-3">
              How We Document & Verify Client Progress
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every body follows a measurable diagnostic trajectory from baseline assessment through targeted muscle release and progressive loading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStoriesPlaceholder.placeholderCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-burntOrange font-semibold uppercase">{card.label}</span>
                    <Activity className="w-4 h-4 text-[#3B6B96]" />
                  </div>

                  <h3 className="text-xl font-light text-[#3B6B96]">
                    {card.category}
                  </h3>

                  <div className="text-xs text-slate-500">
                    {card.demographic} · {card.timeline}
                  </div>

                  <p className="text-xs text-slate-600 bg-[#F8F9FA] p-3 rounded-lg border border-slate-200/60 font-mono">
                    <strong>Metric:</strong> {card.metricsPlaceholder}
                  </p>
                </div>

                <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-100">
                  [Verified case study in progress. Full outcome screen will be published upon client consent.]
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <a
              href={BOOKING_URL}
              className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-8 py-3.5 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Start Your Own Recovery Trajectory
            </a>
          </div>
        </div>
      </section>

      {/* Community Newsletter Strip - Modeled on Screenshot 1.01.25 PM */}
      <section className="py-20 bg-[#F8F9FA] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[360px] rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/community-jump.jpg"
                  alt="Healthy living community"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl font-light text-[#3B6B96]">
                Join The Community
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                Sign up for our Movement Longevity program to receive exclusive health + fitness tips delivered right to your inbox.
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs font-medium">
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
                    className="flex-1 border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                  />
                  <button
                    type="submit"
                    className="bg-[#507C9E] hover:bg-[#416885] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors"
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
