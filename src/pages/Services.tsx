import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Training & Recovery Services"
        description="Explore 1-on-1 personal training, muscle release therapy, sports performance, and mobility programs in Stoney Creek, Ontario."
      />

      {/* Services Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Stoney Creek Coaching & Therapy
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Our Disciplines
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              We reject the one-size-fits-all model. Every human body presents distinct mechanical levers, postural compensations, and athletic demands. Explore our four specialized pathways below.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-espresso-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden border border-espresso-border bg-espresso shadow-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-espresso/90 border border-espresso-border text-xs font-mono uppercase tracking-widest text-burntOrange px-3 py-1 rounded">
                    0{index + 1} // Discipline
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase tracking-wide">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-cream-muted leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="bg-espresso-card p-4 rounded-md border border-espresso-border space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-burntOrange block">
                    Target Demographic
                  </span>
                  <p className="text-xs sm:text-sm text-cream-muted">
                    {service.whoItsFor}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cream-dark block">
                    Core Adaptations
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center gap-2 text-xs text-cream">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button to={`/services/${service.slug}`} variant="primary" size="md">
                    View Complete Details
                  </Button>
                  <Button href={BOOKING_URL} variant="secondary" size="md">
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Prompt Banner */}
      <section className="py-16 bg-espresso border-t border-espresso-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase">
            Unsure Which Pathway Fits Your Goals?
          </h2>
          <p className="text-sm sm:text-base text-cream-muted max-w-xl mx-auto">
            Book an initial movement assessment. Rachel D'Rozario will evaluate your movement patterns, discuss your pain history, and build a recommended service blueprint.
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
