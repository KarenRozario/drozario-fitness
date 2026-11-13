import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import {
  Activity,
  Shield,
} from 'lucide-react';

export const Stories: React.FC = () => {
  const { clientStoriesPlaceholder } = siteConfig;

  return (
    <>
      <SEO
        title="Client Stories & Case Studies [Framework]"
        description="Structured movement case study framework at D'Rozario Muscle Release in Stoney Creek. Documenting objective functional outcomes and recovery trajectories."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Documented Client Outcomes
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Client Movement Journeys
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              We do not publish vague marketing soundbites. Our clients' transformations are tracked through measurable functional re-testing, joint range-of-motion assessments, and sustainable athletic loading.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Notice: Strict Verification Standards */}
      <section className="py-6 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-xs text-cream-dark">
            <Shield className="w-4 h-4 text-burntOrange shrink-0" />
            <span>
              <strong>Ethical Transparency:</strong> D'Rozario Muscle Release publishes only verified, consenting client biomechanical case studies. We do not invent reviews, star ratings, or arbitrary percentages.
            </span>
          </div>
        </div>
      </section>

      {/* Case Study Methodology Framework */}
      <section className="py-20 bg-espresso border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
              Our Clinical Method
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
              {clientStoriesPlaceholder.frameworkHeading}
            </h2>
            <p className="text-sm text-cream-muted mt-2">
              {clientStoriesPlaceholder.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientStoriesPlaceholder.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-espresso-surface p-6 rounded-md border border-espresso-border space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-widest text-burntOrange font-bold">
                  {step.phase}
                </div>
                <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Case Study Placeholders (Layout Only) */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
                Active Tracking Cohort
              </span>
              <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
                Upcoming Documented Cases
              </h2>
            </div>
            <span className="text-xs font-mono text-cream-dark uppercase">
              Stoney Creek Cohort · Spring / Summer
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientStoriesPlaceholder.placeholderCards.map((card) => (
              <div
                key={card.id}
                className="bg-espresso-card p-6 rounded-lg border-2 border-dashed border-espresso-border space-y-4 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {card.label}
                  </span>
                  <Activity className="w-4 h-4 text-burntOrange" />
                </div>

                <div>
                  <h3 className="text-xl font-display text-cream uppercase tracking-wide">
                    {card.category}
                  </h3>
                  <div className="text-xs font-mono text-cream-dark mt-1">
                    {card.demographic} · {card.timeline}
                  </div>
                </div>

                <div className="bg-espresso p-3.5 rounded border border-espresso-border text-xs text-cream-muted space-y-1.5 font-mono">
                  <div className="text-[11px] text-burntOrange uppercase tracking-wider font-semibold">
                    Targeted Tracking Metric:
                  </div>
                  <div>{card.metricsPlaceholder}</div>
                </div>

                <p className="text-xs text-cream-dark leading-relaxed italic">
                  [Full clinical case breakdown with pre- and post-movement screens will be published following the client verification protocol.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Intake / Invitation */}
      <section className="py-20 bg-espresso">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block">
            Start Your Own Trajectory
          </span>
          <h2 className="text-4xl font-display text-cream uppercase">
            Ready to Build Your Case Study?
          </h2>
          <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
            Whether you want to deadlift without back spasm, eliminate chronic shoulder impingement, or skate without hip pain, your journey starts with a baseline movement screen.
          </p>
          <div className="pt-2">
            <Button href={BOOKING_URL} variant="primary" size="lg">
              Book Your Initial Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
