import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { FindYourProgram } from '../components/shared/FindYourProgram';
import { SEO } from '../components/shared/SEO';
import {
  CheckCircle2,
  ChevronRight,
  Heart,
  Users,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

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
    <div className="bg-white text-zinc-900">
      <SEO
        title="Strong Through Every Stage | Women's Fitness Coaching Stoney Creek"
        description="Specialised fitness coaching for women through pregnancy, motherhood, and menopause in Stoney Creek, Ontario. Coached by Rachel D'Rozario."
      />

      {/* 1. HERO SECTION - COVERS THE WHOLE PAGE (100VH / MIN-H-SCREEN) */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Full-Page Background Image (Full Natural Colour, High-Res) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Woman fitness coaching at D'Rozario Fitness in Stoney Creek"
            className="w-full h-full object-cover object-center scale-100"
            loading="eager"
          />
          {/* Light bottom-weighted gradient overlay ONLY where white text sits, max 40% opacity */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-zinc-300 font-medium mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
              Stoney Creek, Ontario · Women's Fitness Coaching
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-6">
              Strong Through <br />
              <span className="font-semibold text-white">Every Stage.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-zinc-200 font-light mb-10 max-w-2xl leading-relaxed">
              Fitness coaching for women through pregnancy, motherhood, and menopause in Stoney Creek. Safe, progressive, and built for your body.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded font-medium text-base shadow-2xl transition-all duration-200 text-center"
              >
                Book a Session
              </a>
              <Link
                to="/find-your-program"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded font-medium text-base transition-all duration-200 text-center"
              >
                Find Your Program
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center hidden sm:block">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 block mb-2 font-mono">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border-2 border-white/40 rounded-full mx-auto flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. VALUE STRIP (CLEAN MONOCHROME) */}
      <section className="py-12 bg-zinc-950 text-white border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 text-white shrink-0 border border-zinc-800">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Coaching Built Around Your Life Stage
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Tailored movement for pregnancy, postpartum return, and menopause.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 text-white shrink-0 border border-zinc-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Safe, Progressive Training
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Evidence-based loading that honours your energy and physical changes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 text-white shrink-0 border border-zinc-800">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Small Groups and 1-on-1
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Individualised attention in an encouraging, welcoming studio atmosphere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 text-white shrink-0 border border-zinc-800">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  A Supportive Community of Women
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connect with local mothers and women sharing similar life experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. START YOUR JOURNEY - 50/50 SPLIT SCREEN LAYOUT */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image Covering Half The Page */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 min-h-[500px] lg:min-h-[640px] group">
              <img
                src="/images/journey-assessment.jpg"
                alt="Rachel D'Rozario coaching in private Stoney Creek studio"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-2">
                  1-on-1 & Small Group Coaching
                </span>
                <p className="text-lg font-light text-white">
                  "Movement should empower you through every phase of womanhood."
                </p>
                <span className="text-xs text-zinc-400 mt-1">— Rachel D'Rozario, Founder</span>
              </div>
            </div>

            {/* Right Column: Journey Steps */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                  How It Works
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                  Start Your Journey
                </h2>
                <p className="text-base text-zinc-600 mt-4 leading-relaxed font-normal">
                  Starting a fitness program during pregnancy, postpartum, or midlife can feel overwhelming. We take the guesswork out with an intentional, supportive four-step process built around you.
                </p>
              </div>

              <div className="space-y-6">
                {siteConfig.journeySteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl border border-zinc-200 hover:border-black transition-colors bg-zinc-50/50">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  className="bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-medium transition-colors shadow-md"
                >
                  Book Your Initial Consultation
                </a>
                <Link
                  to="/programs"
                  className="text-zinc-900 hover:text-zinc-600 font-medium text-sm flex items-center gap-1.5"
                >
                  <span>Explore all programs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM CARDS (4): LARGE HIGH-RES VISUAL CARDS */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
              Life-Stage Specialisation
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
              Programs For Every Chapter
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              Specialised coaching tailored to women's bodies, hormonal transitions, and maternal health.
            </p>
          </div>

          {/* 2x2 Grid of Large Editorial Visual Cards (Image covers most of the card!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {siteConfig.programs.map((program) => (
              <div
                key={program.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-zinc-200 group"
              >
                <div>
                  {/* Large High-Res Image (Covers Most of Card Height) */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-900">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-[11px] font-mono uppercase px-3 py-1 rounded-full border border-white/20">
                      {program.stageName}
                    </span>
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-light text-zinc-900 group-hover:text-zinc-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {program.shortDescription}
                    </p>
                    {program.medicalNotice && (
                      <p className="text-xs text-zinc-500 italic bg-zinc-100 p-2.5 rounded border border-zinc-200">
                        {program.medicalNotice}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center justify-between border-t border-zinc-100 mt-4">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="text-black font-semibold text-sm hover:underline flex items-center gap-1"
                  >
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={BOOKING_URL}
                    className="bg-black hover:bg-zinc-800 text-white text-xs px-4 py-2 rounded font-medium transition-colors"
                  >
                    Book session
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs"
              className="inline-block border border-black text-black hover:bg-black hover:text-white px-8 py-3.5 rounded text-sm font-medium transition-colors"
            >
              View All Programs In Detail →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOCUS AREAS (HIGH CONTRAST MONOCHROME) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
              Coaching Foundations
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 mb-4 tracking-tight">
              Our Core Focus Areas
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              Every session integrates these essential pillars of female strength, biomechanics, and everyday vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.focusAreas.map((area) => (
              <div
                key={area.id}
                className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-black transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FIND YOUR PROGRAM MATCHER */}
      <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900" id="find-your-program">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-2">
              Interactive Matcher
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white mb-3 tracking-tight">
              Find Your Program
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              Select where you are today to see your tailored program summary, focus points, and booking options.
            </p>
          </div>

          <FindYourProgram isTeaser={true} />
        </div>
      </section>

      {/* 7. MOMMY NETWORKS & COMMUNITY - 50/50 SPLIT SCREEN WITH HIGH-RES IMAGE */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block">
                Local Stoney Creek Connection
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                {siteConfig.community.title}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed">
                {siteConfig.community.subhead}
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {siteConfig.community.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0">✓</div>
                  <span>Stroller fitness and mom-and-baby movement meetups</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0">✓</div>
                  <span>Educational workshops on pelvic floor health & maternal strength</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0">✓</div>
                  <span>Welcoming, judgement-free space for women at every stage</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/community"
                  className="bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-medium transition-colors shadow-md"
                >
                  Explore Community & Partnerships
                </Link>
                <a
                  href={BOOKING_URL}
                  className="border border-black text-black hover:bg-black hover:text-white px-7 py-3.5 rounded text-sm font-medium transition-colors"
                >
                  Join a Session
                </a>
              </div>
            </div>

            {/* Right: Large High-Res Image (Covers Half The Screen) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 min-h-[500px] lg:min-h-[600px] group">
              <img
                src="/images/community-moms.jpg"
                alt="Mothers exercising together in community class at D'Rozario Fitness"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-1">
                  Community Classes & Workshops
                </span>
                <p className="text-base font-light text-white">
                  Mothers supporting mothers in Stoney Creek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET RACHEL D'ROZARIO - 50/50 SPLIT SCREEN */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Large Editorial Portrait (Covers Half The Screen) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 min-h-[500px] lg:min-h-[640px] group">
              <img
                src="/images/rachel-drozario.jpg"
                alt="Rachel D'Rozario - Women's Fitness Coach & Founder"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-light text-white">{rachel.name}</h3>
                <p className="text-xs text-zinc-300 font-mono uppercase tracking-wider">{rachel.role}</p>
              </div>
            </div>

            {/* Right: Bio & Qualifications */}
            <div className="space-y-6">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block">
                Meet Your Coach
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight leading-tight">
                {rachel.name}
              </h2>
              <p className="text-sm font-mono text-zinc-600 uppercase tracking-wider">
                {rachel.role} · Stoney Creek, Ontario
              </p>
              <p className="text-base text-zinc-700 leading-relaxed font-light">
                {rachel.bio}
              </p>

              <div className="p-6 rounded-xl bg-white border border-zinc-200 space-y-3">
                <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider block">
                  Coaching Focus & Background:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                  {rachel.specialities.map((spec: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/team"
                  className="bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-medium transition-colors shadow-md"
                >
                  Read Rachel's Story
                </Link>
                <a
                  href={BOOKING_URL}
                  className="border border-black text-black hover:bg-black hover:text-white px-7 py-3.5 rounded text-sm font-medium transition-colors"
                >
                  Book 1-on-1 Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEARN LIBRARY (3 ARTICLES) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2">
                Education & Articles
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight">
                Learn Library
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-black hover:text-zinc-600 text-sm font-medium mt-4 sm:mt-0 flex items-center gap-1"
            >
              <span>Explore All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 flex flex-col justify-between hover:shadow-lg transition-shadow group"
              >
                <div>
                  <div className="h-60 overflow-hidden bg-zinc-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {post.category} · {post.status}
                    </div>
                    <h3 className="text-lg font-medium text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-black font-semibold hover:underline"
                  >
                    Read article →
                  </Link>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. JOIN THE COMMUNITY (NEWSLETTER) - 50/50 SPLIT SCREEN */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: High-Res Female Fitness Image (Covers Half The Screen) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 min-h-[450px] lg:min-h-[550px] group">
              <img
                src="/images/community-jump.jpg"
                alt="Women's fitness community at D'Rozario Fitness"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1">
                  Empowering Stoney Creek Women
                </span>
                <p className="text-base text-zinc-200 font-light">
                  Stay connected with women's movement science and community workshops.
                </p>
              </div>
            </div>

            {/* Right: Newsletter Form */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-2">
                  Stay Connected
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                  Join The Community
                </h2>
                <p className="text-base text-zinc-300 mt-4 leading-relaxed font-light">
                  Sign up to receive women's fitness tips, life-stage movement guides, and studio updates delivered right to your inbox.
                </p>
              </div>

              {newsSubmitted ? (
                <div className="p-8 rounded-xl bg-zinc-900 border border-white/20 text-white text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
                  <h3 className="text-xl font-light">Thank You for Subscribing!</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    We've noted your email ({newsEmail}). You'll receive our next monthly update.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1.5 font-medium">First Name*</label>
                      <input
                        type="text"
                        value={newsFirstName}
                        onChange={(e) => setNewsFirstName(e.target.value)}
                        required
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-white focus:outline-none px-4 py-3 rounded text-sm text-white placeholder-zinc-500 transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Last Name*</label>
                      <input
                        type="text"
                        value={newsLastName}
                        onChange={(e) => setNewsLastName(e.target.value)}
                        required
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-white focus:outline-none px-4 py-3 rounded text-sm text-white placeholder-zinc-500 transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1.5 font-medium">Email*</label>
                    <input
                      type="email"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-white focus:outline-none px-4 py-3 rounded text-sm text-white placeholder-zinc-500 transition-colors"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-white hover:bg-zinc-200 text-black px-8 py-3.5 rounded text-sm font-semibold transition-colors shadow-lg w-full sm:w-auto"
                    >
                      Sign me up
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-500">
                    No spam. Unsubscribe at any time. We respect your privacy.
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
