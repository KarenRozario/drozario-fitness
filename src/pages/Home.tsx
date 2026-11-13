import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { FindYourProgram } from '../components/shared/FindYourProgram';
import { SEO } from '../components/shared/SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  // Newsletter Form State
  const [newsFirstName, setNewsFirstName] = useState('');
  const [newsLastName, setNewsLastName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;

    // TODO: Connect this newsletter subscription to your production CRM / email service endpoint
    // e.g. fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ firstName: newsFirstName, lastName: newsLastName, email: newsEmail }) })
    setNewsSubmitted(true);
  };

  const rachel = siteConfig.team[0];

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Strong Through Every Stage | Women's Fitness Coaching Stoney Creek"
        description="Specialised fitness coaching for women through pregnancy, motherhood, and menopause in Stoney Creek, Ontario. Coached by Rachel D'Rozario."
      />

      {/* 1. HERO SECTION - FULL-BLEED COLOUR PHOTO, MAGAZINE LAYOUT */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-end pb-24 sm:pb-32 lg:pb-36 bg-[#1A1714] overflow-hidden">
        {/* Full-Bleed Colour Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Woman fitness coaching at D'Rozario Fitness in Stoney Creek"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Light bottom gradient (≤35%) only where text overlays photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        {/* Headline bottom-left in high-contrast serif */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/90 block mb-4">
              STONEY CREEK · WOMEN'S FITNESS
            </span>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF7F2] leading-[1.03] mb-6 font-serif">
              Strong Through <br />
              <em className="italic font-normal">Every</em> Stage.
            </h1>

            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light mb-10 max-w-[65ch] leading-[1.7]">
              Fitness coaching for women through pregnancy, motherhood, and menopause in Stoney Creek. Safe, progressive, and built for your body.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_URL}
                className="btn-editorial-primary"
              >
                Book a Session
              </a>
              <Link
                to="/find-your-program"
                className="btn-editorial-outline-white"
              >
                Find Your Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE STRIP - NUMBERED EDITORIAL COLUMNS */}
      <section className="py-14 sm:py-16 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div className="border-t border-[#1A1714]/15 pt-5 space-y-2">
              <span className="font-mono text-xs text-[#B4532A] uppercase tracking-[0.2em] block">
                01 — LIFE STAGE
              </span>
              <h3 className="font-serif text-lg text-[#1A1714]">
                Coaching Built for You
              </h3>
              <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                Tailored movement for pregnancy, postpartum return, and menopause transitions.
              </p>
            </div>

            <div className="border-t border-[#1A1714]/15 pt-5 space-y-2">
              <span className="font-mono text-xs text-[#B4532A] uppercase tracking-[0.2em] block">
                02 — EVIDENCE-BASED
              </span>
              <h3 className="font-serif text-lg text-[#1A1714]">
                Safe, Progressive Loading
              </h3>
              <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                Thoughtful movement progressions that honour your energy and physical shifts.
              </p>
            </div>

            <div className="border-t border-[#1A1714]/15 pt-5 space-y-2">
              <span className="font-mono text-xs text-[#B4532A] uppercase tracking-[0.2em] block">
                03 — INTIMATE CARE
              </span>
              <h3 className="font-serif text-lg text-[#1A1714]">
                Small Groups & 1-on-1
              </h3>
              <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                Personalised attention in an encouraging, private Stoney Creek studio setting.
              </p>
            </div>

            <div className="border-t border-[#1A1714]/15 pt-5 space-y-2">
              <span className="font-mono text-xs text-[#B4532A] uppercase tracking-[0.2em] block">
                04 — SISTERHOOD
              </span>
              <h3 className="font-serif text-lg text-[#1A1714]">
                Supportive Community
              </h3>
              <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                Connect with local mothers and women sharing similar seasons of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PULL QUOTE SECTION - RACHEL'S QUOTE BETWEEN HAIRLINE RULES */}
      <section className="bg-[#FAF7F2] py-24 sm:py-32 border-b border-[#1A1714]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B4532A] block mb-6">
            A Note From Coach Rachel
          </span>
          <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-5xl leading-tight text-[#1A1714] font-normal mb-8">
            “True strength isn't about pushing past your limits—it's about learning to honour where your body is today, and building a foundation that lasts through motherhood, menopause, and beyond.”
          </blockquote>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714]/65">
            — Rachel D'Rozario, Founder & Women's Fitness Coach
          </div>
        </div>
      </section>

      {/* 4. START YOUR JOURNEY - ASYMMETRIC 12-COLUMN MAGAZINE GRID */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Tall Portrait Crop (4:5) */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A1714]/15 shadow-sm group bg-[#FAF7F2]">
                <img
                  src="/images/journey-assessment.jpg"
                  alt="Rachel D'Rozario coaching in private Stoney Creek studio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/60 uppercase tracking-wider">
                <span>The Stoney Creek Studio</span>
                <span>Private Assessment</span>
              </div>
            </div>

            {/* Right: Journey Steps Editorial Layout */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-3">
                  NO. 01 — THE METHOD
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                  Start Your Journey
                </h2>
                <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
                  Starting a fitness program during pregnancy, postpartum, or midlife can feel overwhelming. We take the guesswork out with an intentional, supportive four-step process built around you.
                </p>
              </div>

              {/* Numbered Editorial Steps */}
              <div className="divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15">
                {siteConfig.journeySteps.map((step, idx) => (
                  <div key={idx} className="py-5 flex items-start gap-6">
                    <span className="font-serif text-2xl text-[#B4532A] shrink-0 font-normal">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-[#1A1714] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  className="btn-editorial-primary"
                >
                  Book Initial Consultation
                </a>
                <Link
                  to="/programs"
                  className="btn-editorial-outline"
                >
                  <span>Explore All Programs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRAMS AS NUMBERED FEATURES "NO. 01–04" */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-3">
              CURATED OFFERINGS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1714] tracking-tight leading-tight">
              Programs For Every Chapter
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
              Specialised strength coaching tailored to women's bodies, hormonal shifts, and maternal life stages.
            </p>
          </div>

          {/* Stacked Asymmetric Editorial Spreads */}
          <div className="space-y-28">
            {siteConfig.programs.map((program, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={program.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Image Column: Tall Portrait (4:5 Crop) */}
                  <div
                    className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A1714]/15 group bg-[#F2ECE3]">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/50 uppercase tracking-wider">
                      <span>{program.stageName}</span>
                      <span>Stoney Creek</span>
                    </div>
                  </div>

                  {/* Text Column: Editorial Copy */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                      NO. 0{idx + 1} — {program.title.toUpperCase()}
                    </span>

                    <h3 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                      {program.title}
                    </h3>

                    <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] max-w-[65ch] font-light">
                      {program.fullDescription}
                    </p>

                    <div className="p-5 bg-[#F2ECE3] border-l-2 border-[#1A1714] space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1714]/70 block font-medium">
                        Who It's For:
                      </span>
                      <p className="text-sm text-[#1A1714]/80 leading-relaxed font-light">
                        {program.whoItsFor}
                      </p>
                    </div>

                    {program.medicalNotice && (
                      <p className="text-xs text-[#1A1714]/70 italic leading-relaxed">
                        <strong>Medical Note:</strong> {program.medicalNotice}
                      </p>
                    )}

                    <div className="pt-2 flex items-center gap-6">
                      <Link
                        to={`/programs/${program.slug}`}
                        className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] hover:text-[#B4532A] flex items-center gap-2 transition-colors font-medium border-b border-[#1A1714] pb-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={BOOKING_URL}
                        className="btn-editorial-primary text-[10px] py-2.5 px-5"
                      >
                        Book Session
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-20 pt-12 border-t border-[#1A1714]/15">
            <Link
              to="/programs"
              className="btn-editorial-outline"
            >
              View Full Program Syllabi →
            </Link>
          </div>
        </div>
      </section>

      {/* 5B. NUTRITION TEASER — EDITORIAL ASYMMETRIC SPREAD */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Tall Portrait Image (4:5 Crop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1714]/5 border border-[#1A1714]/15 shadow-sm group">
                <img
                  src={siteConfig.nutrition.image}
                  alt="Women's nutrition coaching consultation with fresh whole foods and tea"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-3">
                  NO. 02 — NOURISHMENT
                </span>
                <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1714] tracking-tight leading-tight">
                  {siteConfig.nutrition.headline}
                </h2>
                <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
                  {siteConfig.nutrition.subhead}
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#1A1714]/15">
                {siteConfig.nutrition.whatItCovers.map((topic, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="font-mono text-xs text-[#B4532A] uppercase tracking-wider block">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg text-[#1A1714] leading-snug">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/nutrition"
                  className="btn-editorial-primary"
                >
                  <span>Explore Nutrition Coaching</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/nutrition#apply"
                  className="btn-editorial-outline"
                >
                  Apply For Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOCUS AREAS AS AN EDITORIAL LIST WITH THIN DIVIDERS & NUMBERS */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Col: Section Title */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                MOVEMENT SCIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                Our Core Focus Areas
              </h2>
              <p className="text-[17px] text-[#1A1714]/75 leading-[1.7] font-light">
                Every session integrates these essential pillars of female strength, biomechanics, and everyday vitality. No guesswork, no generic routines.
              </p>
            </div>

            {/* Right Col: Editorial Numbered List */}
            <div className="lg:col-span-8 divide-y divide-[#1A1714]/15 border-t border-[#1A1714]/15">
              {siteConfig.focusAreas.map((area, idx) => (
                <div key={area.id} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                  <div className="sm:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A]">
                    0{idx + 1}
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-serif text-xl text-[#1A1714]">
                      {area.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-6">
                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FIND YOUR PROGRAM MATCHER */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15" id="find-your-program">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-3">
              TAILORED DIRECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] mb-4 tracking-tight">
              Find Your Program
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 leading-[1.7] font-light">
              Select where you are today to see your tailored program summary, key movement focuses, and direct booking options.
            </p>
          </div>

          <FindYourProgram isTeaser={true} />
        </div>
      </section>

      {/* 8. COMMUNITY SECTION - TWO-IMAGE ASYMMETRIC SPREAD */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Asymmetric Two-Image Spread */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#1A1714]/15 bg-[#FAF7F2] group">
                <img
                  src="/images/community-moms.jpg"
                  alt="Mothers exercising together in community class at D'Rozario Fitness"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Inset Secondary Image for Magazine Feel */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 aspect-[4/3] overflow-hidden border-4 border-[#F2ECE3] shadow-xl bg-[#FAF7F2]">
                <img
                  src="/images/studio-stoney-creek.jpg"
                  alt="Stoney Creek studio space"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6 sm:pt-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                STONEY CREEK CONNECTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                {siteConfig.community.title}
              </h2>
              <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] font-light">
                {siteConfig.community.subhead}
              </p>
              <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light">
                {siteConfig.community.description}
              </p>

              <div className="divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15 py-2">
                <div className="py-3 flex items-start gap-3 text-xs text-[#1A1714]/80">
                  <span className="font-mono text-[#B4532A] font-medium">—</span>
                  <span>Stroller fitness and mom-and-baby movement meetups</span>
                </div>
                <div className="py-3 flex items-start gap-3 text-xs text-[#1A1714]/80">
                  <span className="font-mono text-[#B4532A] font-medium">—</span>
                  <span>Educational workshops on pelvic floor health & maternal strength</span>
                </div>
                <div className="py-3 flex items-start gap-3 text-xs text-[#1A1714]/80">
                  <span className="font-mono text-[#B4532A] font-medium">—</span>
                  <span>Welcoming, judgement-free space for women at every stage</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/community"
                  className="btn-editorial-primary"
                >
                  Explore Partnerships
                </Link>
                <a
                  href={BOOKING_URL}
                  className="btn-editorial-outline"
                >
                  Join a Community Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEET RACHEL D'ROZARIO - WITH EDITORIAL DROP CAP */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Tall Portrait Crop (4:5) */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden border border-[#1A1714]/15 shadow-sm group bg-[#F2ECE3]">
                <img
                  src="/images/rachel-drozario.jpg"
                  alt="Rachel D'Rozario - Women's Fitness Coach & Founder"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/50 uppercase tracking-wider">
                <span>{rachel.name}</span>
                <span>{rachel.role}</span>
              </div>
            </div>

            {/* Right: Bio With Drop Cap */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block">
                FOUNDER & HEAD COACH
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                {rachel.name}
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714]/60">
                {rachel.role} · Stoney Creek, Ontario
              </p>

              {/* First paragraph with drop cap */}
              <p className="drop-cap text-[17px] text-[#1A1714]/80 leading-[1.7] font-light max-w-[65ch]">
                {rachel.bio}
              </p>

              <div className="p-6 bg-[#F2ECE3] border-l-2 border-[#1A1714] space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#1A1714] block font-medium">
                  Coaching Specialisations:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1A1714]/75">
                  {rachel.specialities.map((spec: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="font-mono text-[#B4532A]">—</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/team"
                  className="btn-editorial-primary"
                >
                  Read Rachel's Story
                </Link>
                <a
                  href={BOOKING_URL}
                  className="btn-editorial-outline"
                >
                  Book 1-on-1 Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEARN LIBRARY (MAGAZINE ARTICLE CARDS) */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#1A1714]/15">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2">
                READING ROOM
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
                Learn Library
              </h2>
            </div>
            <Link
              to="/blog"
              className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] hover:text-[#B4532A] mt-4 sm:mt-0 flex items-center gap-2 transition-colors font-medium"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[3/2] overflow-hidden border border-[#1A1714]/15 mb-6 bg-[#FAF7F2]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-[#B4532A] uppercase tracking-[0.2em]">
                      {post.category} · {post.readTime}
                    </div>
                    <h3 className="text-xl font-serif text-[#1A1714] leading-snug group-hover:text-[#B4532A] transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1A1714]/15 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#1A1714]/60">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#1A1714] hover:text-[#B4532A] font-medium transition-colors"
                  >
                    Read article →
                  </Link>
                  <span>{post.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. JOIN THE COMMUNITY (NEWSLETTER) */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Editorial Image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden border border-[#1A1714]/15 bg-[#F2ECE3] group">
                <img
                  src="/images/community-jump.jpg"
                  alt="Women's fitness community at D'Rozario Fitness"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-mono text-[#1A1714]/50 uppercase tracking-wider">
                <span>Stoney Creek Women</span>
                <span>Movement Science</span>
              </div>
            </div>

            {/* Right: Newsletter Form */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2">
                  STAY CONNECTED
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
                  Join The Community
                </h2>
                <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] font-light max-w-[65ch]">
                  Sign up to receive women's fitness guidance, life-stage movement science, and Stoney Creek studio updates delivered straight to your inbox.
                </p>
              </div>

              {newsSubmitted ? (
                <div className="p-8 border border-[#1A1714]/20 bg-[#F2ECE3] text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#B4532A] mx-auto" />
                  <h3 className="text-2xl font-serif text-[#1A1714]">Thank You for Subscribing</h3>
                  <p className="text-sm text-[#1A1714]/75 max-w-sm mx-auto font-light leading-relaxed">
                    We've noted your email ({newsEmail}). You'll receive our next monthly update.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 block mb-1.5 font-medium">First Name*</label>
                      <input
                        type="text"
                        value={newsFirstName}
                        onChange={(e) => setNewsFirstName(e.target.value)}
                        required
                        className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 focus:border-[#1A1714] focus:outline-none px-4 py-3 text-sm text-[#1A1714] placeholder-[#1A1714]/40 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 block mb-1.5 font-medium">Last Name*</label>
                      <input
                        type="text"
                        value={newsLastName}
                        onChange={(e) => setNewsLastName(e.target.value)}
                        required
                        className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 focus:border-[#1A1714] focus:outline-none px-4 py-3 text-sm text-[#1A1714] placeholder-[#1A1714]/40 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 block mb-1.5 font-medium">Email Address*</label>
                    <input
                      type="email"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      required
                      className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 focus:border-[#1A1714] focus:outline-none px-4 py-3 text-sm text-[#1A1714] placeholder-[#1A1714]/40 transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-editorial-primary w-full sm:w-auto"
                    >
                      Sign Me Up
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-[#1A1714]/50">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
