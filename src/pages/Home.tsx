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
  Check,
  Sparkles,
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
    <div className="bg-white text-slate-800">
      <SEO
        title="Strong Through Every Stage | Women's Fitness Coaching Stoney Creek"
        description="Specialized fitness coaching for women through pregnancy, motherhood and menopause in Stoney Creek, Ontario. Coached by Rachel D'Rozario."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center bg-[#151A20] overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-women-fitness.jpg"
            alt="Woman fitness coaching at D'Rozario Fitness in Stoney Creek"
            className="w-full h-full object-cover object-center opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.08] mb-5">
              Strong Through <br />
              <span className="font-semibold text-white">Every Stage.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-200 font-light mb-8 max-w-xl">
              Fitness coaching for women through pregnancy, motherhood and menopause in Stoney Creek.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3.5 rounded text-base font-medium shadow-md transition-all duration-200"
              >
                Book a Session
              </a>
              <Link
                to="/find-your-program"
                className="border border-white/60 text-white hover:bg-white/10 px-7 py-3.5 rounded text-base font-medium transition-all duration-200"
              >
                Find Your Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE STRIP */}
      <section className="py-12 bg-[#F8F9FA] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-xs text-burntOrange shrink-0 border border-slate-100">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Coaching Built Around Your Life Stage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tailored movement for pregnancy, postpartum recovery, and menopause.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-xs text-[#3B6B96] shrink-0 border border-slate-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Safe, Progressive Training
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pelvic floor-aware strength protocols that build stamina with care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-xs text-amber-600 shrink-0 border border-slate-100">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  Small Groups and 1-on-1
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Private focused sessions or encouraging small cohorts in Stoney Creek.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white shadow-xs text-emerald-600 shrink-0 border border-slate-100">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  A Supportive Community of Women
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connect with local mothers and women lifting each other up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "START YOUR JOURNEY" */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-2">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
              Start Your Journey
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed font-normal">
              Getting started is welcoming and straightforward. We meet you where you are today with a clear, supportive framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.journeySteps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-light text-[#3B6B96] block mb-1">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-medium text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={BOOKING_URL}
              className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-8 py-3 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Book Your Initial Consultation
            </a>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM CARDS (4): Prenatal, Postnatal, Menopause, Strong After 50 */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-4 tracking-tight">
              Programs For Every Chapter
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Specialized coaching tailored to women's bodies, hormonal transitions, and maternal health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.programs.map((program) => (
              <div
                key={program.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-slate-200/80"
              >
                <div>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-semibold text-burntOrange uppercase tracking-wider block">
                      {program.stageName}
                    </span>
                    <h3 className="text-xl font-medium text-[#3B6B96] leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {program.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="block w-full bg-[#414B56] hover:bg-burntOrange text-white text-center py-2.5 rounded text-xs font-medium transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOCUS AREAS */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-2">
              Targeted Elements
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
              Key Focus Areas
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed font-normal">
              Rachel's coaching emphasizes foundational movement qualities that help women thrive in everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.focusAreas.map((area) => (
              <div
                key={area.id}
                className="p-7 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center gap-2 text-burntOrange">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Core Focus
                  </span>
                </div>
                <h3 className="text-lg font-medium text-slate-900">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
                <div className="pt-2 border-t border-slate-200/60 space-y-1">
                  {area.benefitsList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FIND YOUR PROGRAM */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-b border-slate-200/60" id="find-your-program">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block mb-2">
              Program Matcher
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-3 tracking-tight">
              Find Your Program
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Select where you are today to see your tailored program summary, focus points, and booking options.
            </p>
          </div>

          <FindYourProgram isTeaser={true} />
        </div>
      </section>

      {/* 7. COMMUNITY & MOMMY NETWORKS SECTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100 overflow-hidden" id="community">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Image with curved frame */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full max-w-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/community-moms.jpg"
                  alt="Mom group fitness class in Stoney Creek"
                  className="w-full h-[440px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy & Community Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                Stoney Creek Networks & Events
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Community & Mommy Networks
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Rachel has worked closely with local mommy networks, postpartum groups, and women's circles across Stoney Creek and Hamilton. From stroller-friendly group meetups to intimate mom & baby movement classes, we cultivate connections that last well beyond the workout.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                  Community Offerings:
                </span>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Supportive small-group fitness classes (babies welcome)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Collaborative partner sessions with local mom networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Educational workshops on pelvic floor health & maternal strength</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/community"
                  className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium transition-colors"
                >
                  <span>Learn about our community programs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MEET RACHEL SPOTLIGHT (ONE PERSON ONLY) */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                Meet Your Coach
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Rachel D'Rozario
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {rachel.bio}
              </p>

              <div>
                <span className="text-sm font-medium text-slate-800 block mb-2">
                  Specialized Coaching Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {rachel.specialities.map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-[#2C5278] px-3 py-1 rounded-full border border-slate-200 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/team"
                  className="inline-flex items-center gap-1 text-sm text-[#3B6B96] hover:text-burntOrange font-medium"
                >
                  <span>Read Rachel's full story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Rachel Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={rachel.image}
                  alt="Rachel D'Rozario - Women's Fitness Coach"
                  className="w-full h-[450px] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEARN LIBRARY */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-3 tracking-tight">
              Women's Movement Library
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Practical guides on pelvic floor engagement, strength through perimenopause, and returning to fitness with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {post.category} · {post.status}
                    </span>
                    <h3 className="text-lg font-medium text-[#3B6B96] leading-snug hover:text-burntOrange transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#3B6B96] hover:text-burntOrange font-medium"
                  >
                    Read article →
                  </Link>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-right">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium"
            >
              <span>Explore All Articles</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. JOIN THE COMMUNITY / NEWSLETTER */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/community-jump.jpg"
                  alt="Active woman smiling at D'Rozario Fitness"
                  className="w-full h-[400px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Join Form */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Join The Community
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Sign up to receive women's fitness tips, life-stage movement guides, and studio updates delivered right to your inbox.
              </p>

              {newsSubmitted ? (
                <div className="bg-[#EBF2F7] border border-[#3B6B96]/30 p-6 rounded-lg text-slate-800">
                  <div className="flex items-center gap-2 text-[#3B6B96] font-semibold mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Thank you for signing up!</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    We've added <strong className="text-slate-800">{newsEmail}</strong> to Rachel's monthly movement newsletter.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="space-y-4 max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-first-name" className="block text-xs text-slate-600 font-medium mb-1">
                        First Name*
                      </label>
                      <input
                        id="home-first-name"
                        type="text"
                        required
                        value={newsFirstName}
                        onChange={(e) => setNewsFirstName(e.target.value)}
                        className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-last-name" className="block text-xs text-slate-600 font-medium mb-1">
                        Last Name*
                      </label>
                      <input
                        id="home-last-name"
                        type="text"
                        required
                        value={newsLastName}
                        onChange={(e) => setNewsLastName(e.target.value)}
                        className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-email" className="block text-xs text-slate-600 font-medium mb-1">
                      Email*
                    </label>
                    <input
                      id="home-email"
                      type="email"
                      required
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3 rounded text-sm font-medium transition-colors"
                    >
                      Sign me up
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
