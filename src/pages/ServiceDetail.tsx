import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import {
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  ShieldCheck,
  Tag,
  ArrowLeft,
} from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Stoney Creek Personal Training & Recovery`}
        description={service.shortDescription}
      />

      {/* Hero Section */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-widest text-cream-dark hover:text-burntOrange inline-flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-espresso-surface border border-burntOrange/40 text-xs font-mono uppercase tracking-widest text-burntOrange">
                <span>Stoney Creek Service Protocol</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight text-cream">
                {service.title}
              </h1>

              <p className="text-lg text-cream-muted leading-relaxed">
                {service.shortDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href={BOOKING_URL} variant="primary" size="lg">
                  Book {service.title}
                </Button>
                <a
                  href="#session-breakdown"
                  className="text-xs font-mono uppercase tracking-widest text-cream hover:text-burntOrange inline-flex items-center gap-1.5 py-3 px-4"
                >
                  <span>What a session looks like</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-espresso-border bg-espresso-surface shadow-2xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 object-cover object-center filter contrast-105"
                  loading="eager"
                />
                <div className="p-4 bg-espresso-card border-t border-espresso-border flex items-center justify-between text-xs text-cream-dark">
                  <span className="flex items-center gap-1.5 text-cream">
                    <ShieldCheck className="w-4 h-4 text-burntOrange" />
                    1-on-1 Coached by Rachel D'Rozario
                  </span>
                  <span className="font-mono text-burntOrange">Private Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border" id="session-breakdown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: What it is & Session Structure */}
            <div className="lg:col-span-8 space-y-12">
              {/* What It Is */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block">
                  Methodology & Science
                </span>
                <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
                  What It Is
                </h2>
                <p className="text-base text-cream-muted leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Who It's For */}
              <div className="bg-espresso-card p-6 sm:p-8 rounded-lg border border-espresso-border space-y-4">
                <div className="flex items-center gap-2 text-burntOrange">
                  <Target className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">
                    Target Athlete & Client Profile
                  </span>
                </div>
                <h3 className="text-2xl font-display text-cream uppercase">
                  Who It's For
                </h3>
                <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
                  {service.whoItsFor}
                </p>
              </div>

              {/* What a Session Looks Like */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-burntOrange">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">
                    Session Mechanics
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
                  What a Session Looks Like
                </h2>
                <div className="bg-espresso p-6 rounded-md border border-espresso-border text-sm text-cream-muted leading-relaxed">
                  {service.sessionOverview}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-display text-cream uppercase">
                  What You Can Expect
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="p-4 rounded bg-espresso-card border border-espresso-border flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-burntOrange shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-cream">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-espresso-card p-6 sm:p-8 rounded-lg border border-espresso-border space-y-6 sticky top-28 shadow-xl">
                <div className="border-b border-espresso-border pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-1">
                    Investment
                  </span>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-cream-muted" />
                    <span className="font-display text-2xl text-cream tracking-wide">
                      {service.pricingPlaceholder}
                    </span>
                  </div>
                  <p className="text-xs text-cream-dark mt-2">
                    Transparent rates tailored to session frequency and recovery packages. Zero sales pressure.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-cream-dark">
                    Includes:
                  </div>
                  <ul className="space-y-2 text-xs text-cream-muted">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange" />
                      <span>Dedicated 1-on-1 private coaching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange" />
                      <span>Direct soft-tissue recovery integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange" />
                      <span>Objective joint range of motion tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange" />
                      <span>Take-home mobility & recovery cues</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 space-y-3">
                  <Button
                    href={BOOKING_URL}
                    variant="primary"
                    size="md"
                    className="w-full"
                    ariaLabel={`Book ${service.title} session now`}
                  >
                    Book This Service
                  </Button>
                  <Link
                    to="/contact"
                    className="block text-center text-xs font-mono uppercase tracking-wider text-cream-dark hover:text-burntOrange transition-colors"
                  >
                    Have Questions? Contact Rachel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking to Other Services */}
      <section className="py-16 bg-espresso border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display text-cream uppercase mb-8">
            Other Training & Recovery Disciplines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {siteConfig.services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="p-5 rounded-md bg-espresso-surface border border-espresso-border hover:border-burntOrange transition-all group"
                >
                  <h3 className="font-display text-xl text-cream uppercase group-hover:text-burntOrange transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-cream-muted line-clamp-2 mt-1">
                    {other.shortDescription}
                  </p>
                  <span className="text-xs font-mono uppercase tracking-wider text-burntOrange inline-flex items-center gap-1 mt-3">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};
