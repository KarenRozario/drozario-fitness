import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { Award, CheckCircle2 } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Team & Coaching Staff"
        description="Meet Rachel D'Rozario, Founder & Head Coach at D'Rozario Muscle Release in Stoney Creek, Ontario, alongside our specialized coaching roster."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Coaching Staff & Clinical Practitioners
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Our Team
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Founded on the belief that strength training and injury rehabilitation belong together. Led by Rachel D'Rozario, our Stoney Creek team is committed to uncovering biomechanical root causes and coaching purposeful, pain-free athletic movement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {siteConfig.team.map((member, index) => (
            <div
              key={member.id}
              className={`p-6 sm:p-10 rounded-lg bg-espresso-card border border-espresso-border shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                member.isOwner ? 'ring-1 ring-burntOrange/40' : ''
              }`}
            >
              {/* Photo & Badges */}
              <div className="lg:col-span-4 space-y-4">
                <div className="aspect-[4/5] rounded-md overflow-hidden bg-espresso border border-espresso-border relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-center filter contrast-105"
                    loading="lazy"
                  />
                  {member.isOwner && (
                    <div className="absolute top-3 left-3 bg-burntOrange text-cream font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded shadow">
                      Founder & Head Coach
                    </div>
                  )}
                  {!member.isOwner && (
                    <div className="absolute top-3 left-3 bg-espresso/90 border border-espresso-border text-cream-dark font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded">
                      [Trainer Position]
                    </div>
                  )}
                </div>

                <div className="p-3 bg-espresso rounded border border-espresso-border">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-burntOrange mb-1">
                    <Award className="w-4 h-4 shrink-0" />
                    <span>Credentials & Education</span>
                  </div>
                  <p className="text-xs text-cream-muted font-sans">
                    {member.certifications}
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-burntOrange">
                      {member.isOwner ? "Founder Profile" : `Staff Coach 0${index + 1}`}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display text-cream uppercase tracking-wide">
                    {member.name}
                  </h2>
                  <p className="text-sm font-medium text-cream-muted mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-cream-muted leading-relaxed">
                  <p>{member.bio}</p>
                </div>

                {/* Specialties */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cream-dark block">
                    Focus Disciplines & Clinical Strengths
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {member.specialities.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-2.5 rounded bg-espresso border border-espresso-border text-xs text-cream"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-burntOrange shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    href={BOOKING_URL}
                    variant="primary"
                    size="md"
                    ariaLabel={`Book a session with ${member.name}`}
                  >
                    {member.isOwner ? "Book With Rachel" : `Book With ${member.name}`}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
