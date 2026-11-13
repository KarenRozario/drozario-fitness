import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { PainLocator } from '../components/shared/PainLocator';
import { Newsletter } from '../components/shared/Newsletter';
import { SEO } from '../components/shared/SEO';
import {
  ShieldCheck,
  Activity,
  Target,
  MapPin,
  ArrowRight,
  CheckCircle,
  Zap,
} from 'lucide-react';

export const Home: React.FC = () => {
  // Value strip icon mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-burntOrange shrink-0" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-burntOrange shrink-0" />;
      case 'Target':
        return <Target className="w-6 h-6 text-burntOrange shrink-0" />;
      case 'MapPin':
      default:
        return <MapPin className="w-6 h-6 text-burntOrange shrink-0" />;
    }
  };

  return (
    <>
      <SEO
        title="Train Hard. Recover Harder."
        description="Targeted 1-on-1 personal training and restorative muscle release therapy in Stoney Creek, Ontario. Coached by Rachel D'Rozario."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-espresso py-16 sm:py-24 border-b border-espresso-border">
        {/* Background Graphic & Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-training.jpg"
            alt="Personal training and muscle release session in progress at D'Rozario Stoney Creek studio"
            className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-espresso/60 to-espresso" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-espresso-card/90 border border-burntOrange/40 text-xs font-mono tracking-widest uppercase text-burntOrange mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-burntOrange animate-pulse" />
              <span>Stoney Creek, Ontario · Personal Training & Muscle Release</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight text-cream leading-[0.92] mb-6 drop-shadow-md">
              Train Hard. <br />
              <span className="text-burntOrange underline decoration-burntOrange/40 decoration-4 underline-offset-8">
                Recover Harder.
              </span>
            </h1>

            {/* One-line subhead about personal training and recovery for Stoney Creek athletes */}
            <p className="text-lg sm:text-xl text-cream-muted leading-relaxed font-sans font-normal max-w-2xl mb-8">
              Targeted personal training and hands-on recovery therapy engineered for Stoney Creek athletes, lifters, and active movers who refuse to let chronic pain dictate their ceiling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href={BOOKING_URL}
                variant="primary"
                size="lg"
                ariaLabel="Book a session at D'Rozario Muscle Release"
              >
                Book a Session
              </Button>

              <Button
                to="/pain-locator"
                variant="secondary"
                size="lg"
                ariaLabel="Find Your Pain Point interactive tool"
              >
                Find Your Pain Point
              </Button>
            </div>

            {/* Local Trust Note */}
            <div className="mt-10 flex items-center gap-6 pt-6 border-t border-espresso-border/60 text-xs font-mono uppercase tracking-wider text-cream-dark">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-burntOrange" />
                <span>1-on-1 Private Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-burntOrange" />
                <span>No Commercial Crowds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-burntOrange" />
                <span>Evidence-Led Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE STRIP */}
      <section className="bg-espresso-surface border-b border-espresso-border py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {siteConfig.valuePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded bg-espresso-card/40 border border-espresso-border/50 hover:border-burntOrange/40 transition-colors"
              >
                <div className="p-2.5 rounded bg-espresso-surface border border-espresso-border">
                  {getIcon(point.icon)}
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wide uppercase text-cream mb-1">
                    {point.title}
                  </h3>
                  <p className="text-xs text-cream-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "START YOUR JOURNEY" */}
      <section className="py-20 sm:py-28 bg-espresso border-b border-espresso-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-burntOrange">
                <span>The D'Rozario System</span>
                <span className="w-8 h-px bg-burntOrange" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase leading-none">
                Start Your Journey to Pain-Free Performance
              </h2>

              <p className="text-base text-cream-muted leading-relaxed">
                Most fitness centres force you to choose between pushing your body hard or nursing your injuries. At D'Rozario Muscle Release, we integrate corrective soft-tissue treatment directly into your strength training. Your first session isn't a generic workout — it's a calibrated diagnostic and loading blueprint.
              </p>

              {/* Journey Steps Bullets (assessment → plan → train → recover) */}
              <div className="space-y-4 pt-2">
                {siteConfig.journeySteps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 p-4 rounded-md bg-espresso-surface border border-espresso-border hover:border-espresso-subtle transition-colors"
                  >
                    <span className="font-display text-2xl text-burntOrange font-bold tracking-wider leading-none mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
                        {step.title}
                      </h3>
                      <p className="text-xs text-cream-muted mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Journey CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href={BOOKING_URL} variant="primary" size="lg">
                  Book Your Initial Assessment
                </Button>
                <Link
                  to="/services"
                  className="text-xs font-mono uppercase tracking-widest text-cream hover:text-burntOrange inline-flex items-center gap-1.5 transition-colors self-center py-2"
                >
                  <span>Explore session details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-espresso-border bg-espresso-surface shadow-2xl">
                <img
                  src="/images/journey-assessment.jpg"
                  alt="Rachel D'Rozario conducting functional joint assessment at Stoney Creek facility"
                  className="w-full h-80 sm:h-96 object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                <div className="p-6 sm:p-8 bg-espresso-surface border-t border-espresso-border space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-burntOrange">
                      First Session Protocol
                    </span>
                    <span className="text-xs text-cream-dark">60 – 75 Minutes</span>
                  </div>
                  <h3 className="text-2xl font-display text-cream uppercase">
                    What to Expect On Day One
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                    Come dressed in training attire. We will map your range of motion, identify localized fascial adhesions, test neuromuscular recruitment, and execute your first hybrid release-and-load sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM PREVIEW */}
      <section className="py-20 sm:py-28 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
                Coaching & Therapy Staff
              </span>
              <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase">
                Meet the Coaches
              </h2>
            </div>
            <Link
              to="/team"
              className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Full Coach Profiles & Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Trainer Cards linking to /team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.team.map((trainer) => (
              <Link
                key={trainer.id}
                to="/team"
                className="group block bg-espresso-card border border-espresso-border rounded-md overflow-hidden hover:border-burntOrange transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden bg-espresso relative">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.role}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    loading="lazy"
                  />
                  {trainer.isOwner && (
                    <div className="absolute top-3 left-3 bg-burntOrange text-cream font-mono text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded shadow">
                      Founder
                    </div>
                  )}
                  {!trainer.isOwner && (
                    <div className="absolute top-3 left-3 bg-espresso/80 border border-espresso-border text-cream-dark font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                      [Placeholder]
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl text-cream uppercase tracking-wide group-hover:text-burntOrange transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-cream-muted leading-tight">
                    {trainer.role}
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-burntOrange uppercase tracking-wider flex items-center gap-1">
                    <span>View Bio & Specialties</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE CARDS */}
      <section className="py-20 sm:py-28 bg-espresso border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
              Structured Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase mb-4">
              Our Core Disciplines
            </h2>
            <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
              Every body moves differently. Our programs blend progressive resistance training with targeted soft-tissue therapy to deliver durable athletic performance.
            </p>
          </div>

          {/* 3 Core Service Cards: Personal Training, Muscle Release & Recovery, Sports Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 3).map((service) => (
              <div
                key={service.slug}
                className="bg-espresso-surface border border-espresso-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-burntOrange/60 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-espresso relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-surface via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-display text-cream uppercase tracking-wide group-hover:text-burntOrange transition-colors">
                      {service.title}
                    </h3>
                    {/* 2-line description */}
                    <p className="text-sm text-cream-muted leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-espresso-border/40 mt-4 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all font-bold"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={BOOKING_URL}
                    className="text-xs font-display uppercase tracking-wider text-cream-muted hover:text-cream"
                  >
                    Book Session →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-widest text-cream hover:text-burntOrange inline-flex items-center gap-2 border border-espresso-border px-6 py-3 rounded bg-espresso-surface hover:bg-espresso-card transition-colors"
            >
              <span>View All 4 Training & Recovery Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOCUS AREAS LIST */}
      <section className="py-20 sm:py-28 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
              Biomechanics & Problem Solvers
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase mb-4">
              Focus Areas We Address
            </h2>
            <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
              We specialize in resolving the stubborn, recurring movement bottlenecks that keep active people from training at full intensity.
            </p>
          </div>

          {/* 6 Focus Areas: lower back, shoulders, hips & knees, posture, post-injury return, athletic performance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.focusAreas.map((area) => (
              <div
                key={area.id}
                className="bg-espresso-card p-6 rounded-md border border-espresso-border hover:border-burntOrange/50 transition-all space-y-3"
              >
                <div className="flex items-center gap-2 text-burntOrange">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider">
                    Target Protocol
                  </span>
                </div>
                <h3 className="text-2xl font-display text-cream uppercase tracking-wide">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                  {area.description}
                </p>
                <div className="pt-2 border-t border-espresso-border/50 text-[11px] text-cream-dark">
                  <span className="font-semibold text-cream-muted">Clinical Strategy:</span> {area.protocol}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PAIN LOCATOR TEASER */}
      <section id="pain-locator-teaser" className="py-20 sm:py-28 bg-espresso border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
              Self-Diagnostic Tool
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase mb-4">
              Where Does It Hurt?
            </h2>
            <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
              Use our interactive body map to identify your primary restriction zone, explore underlying biomechanical causes, and learn how targeted muscle release creates immediate relief.
            </p>
          </div>

          {/* Pain Locator Component */}
          <PainLocator isTeaser={true} />
        </div>
      </section>

      {/* 8. LEARN LIBRARY */}
      <section className="py-20 sm:py-28 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
                Movement Science & Education
              </span>
              <h2 className="text-4xl sm:text-5xl font-display text-cream tracking-tight uppercase">
                Learn Library
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Article Cards (marked [Draft]) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-espresso-card border border-espresso-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-burntOrange/50 transition-all shadow-md group"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-espresso relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-espresso/90 border border-espresso-border font-mono text-[10px] text-burntOrange uppercase px-2 py-0.5 rounded font-bold">
                      {post.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-cream-dark font-mono uppercase">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display text-cream uppercase tracking-wide group-hover:text-burntOrange transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-cream-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-espresso-border/40 mt-4 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>Read article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-xs text-cream-dark">By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER SIGNUP */}
      <section className="py-20 sm:py-24 bg-espresso">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
};
