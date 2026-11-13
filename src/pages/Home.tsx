import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { PainLocator } from '../components/shared/PainLocator';
import { SEO } from '../components/shared/SEO';
import { CheckCircle2, ChevronRight } from 'lucide-react';

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

  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Love The Gym Again · Train Hard, Recover Harder"
        description="Targeted 1-on-1 personal training and restorative muscle release therapy in Stoney Creek, Ontario with Rachel D'Rozario."
      />

      {/* 1. HERO SECTION - Modeled directly on Screenshot 12.57.54 PM */}
      <section className="relative min-h-[82vh] flex items-center bg-[#151A20] overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-training.jpg"
            alt="Athlete training with battle ropes at D'Rozario studio"
            className="w-full h-full object-cover object-center opacity-45"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.08] mb-5">
              Train Hard.<br />
              <span className="font-semibold text-white">Recover Harder.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-200 font-light mb-8 max-w-xl">
              We make fitness and recovery personal — because it is.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3.5 rounded text-base font-medium shadow-md transition-all duration-200"
              >
                Book a Session
              </a>
              <Link
                to="/pain-locator"
                className="border border-white/60 text-white hover:bg-white/10 px-7 py-3.5 rounded text-base font-medium transition-all duration-200"
              >
                Find Your Pain Point
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "START YOUR FITNESS JOURNEY" - Modeled on Screenshot 12.58.00 PM */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-6 tracking-tight">
              Start Your Fitness & Recovery Journey
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-12">
              Whether you are rebuilding after an injury or training with Rachel to reach new athletic heights, we want you to love movement again. Because when your body feels resilient and pain-free, you progress consistently. We help our Stoney Creek clients achieve their goals through a hands-on, evidence-based approach.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-light text-[#3B6B96] mb-2">
                  1-on-1 Dedicated Coaching
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We only offer private, 1-on-1 coaching sessions because we want your genuine results and positive experience to be the reason you come back. Every minute is customized to your body.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-light text-[#3B6B96] mb-2">
                  Targeted Muscle Release Built Into Every Plan
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Founder Rachel D'Rozario integrates specialized manual soft-tissue release, fascial tension therapy, and joint mobilization directly with your lifting program so you adapt without breakdown.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-light text-[#3B6B96] mb-2">
                  Results-First Personal Training
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our approach is science-backed and evidence-based. Rachel crafts each training and recovery program according to your needs, backed by our comprehensive movement assessments. We'll get to know your joint mechanics and where to target our work so we can build a unique program for you. You'll see results faster and start living pain-free sooner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "THE PERFECT MATCH" (SPOTLIGHTING RACHEL D'ROZARIO ONLY) - Modeled on Screenshot 12.58.03 PM */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Image with Signature Curved Decorative Outline Frame */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Curved Bronze/Gold Accent Outline Frame from Inspo */}
              <div className="absolute top-5 right-2 sm:right-6 w-full max-w-[420px] h-[92%] rounded-3xl border-2 border-[#C5A880]/70 pointer-events-none transform translate-x-3 translate-y-3 z-0" />

              <div className="relative z-10 w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/perfect-match.jpg"
                  alt="Rachel D'Rozario coaching a client on functional row mechanics"
                  className="w-full h-[480px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy + Rachel Profile Card (Only Rachel, no other trainers) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                The Perfect Match
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                You work directly with owner and head coach Rachel D'Rozario based on your health and fitness goals. The right coach will help you succeed, resolve chronic pain points, and make sure you enjoy the process.
              </p>

              <div>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium transition-colors"
                >
                  <span>View Coach Profile</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Single Trainer Spotlight Card: Rachel D'Rozario */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-5 bg-[#F9FAFB] p-5 rounded-2xl border border-slate-200/80">
                <img
                  src="/images/rachel-drozario.jpg"
                  alt="Rachel D'Rozario - Founder & Head Coach"
                  className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl object-cover shadow-sm shrink-0"
                  loading="lazy"
                />
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-burntOrange uppercase tracking-wider block">
                    Your Dedicated Coach
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Rachel D'Rozario
                  </h3>
                  <p className="text-xs text-slate-500">
                    Founder, Head Trainer & Muscle Release Specialist
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 pt-0.5">
                    Bridging progressive barbell strength and targeted myofascial release for Stoney Creek lifters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "EXPERIENCE D'ROZARIO MUSCLE RELEASE" (3 CARDS) - Modeled on Screenshot 12.58.09 PM */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-4 tracking-tight">
              Experience D'Rozario Muscle Release
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              We know fitness is personal, so your experience is always tailored to your needs, ensuring you enjoy every step of the journey toward your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Personal Training */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-slate-200/70">
              <div>
                <img
                  src="/images/service-personal-training.jpg"
                  alt="Personal Training session"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-2xl font-light text-[#3B6B96]">
                    Personal Training
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Fitness and lifestyle assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Customized strength program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>One-on-one coached sessions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services/personal-training"
                  className="block w-full bg-[#414B56] hover:bg-burntOrange text-white text-center py-3 rounded-md text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Card 2: Sports Performance */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-slate-200/70">
              <div>
                <img
                  src="/images/service-sports-performance.jpg"
                  alt="Sports performance deadlift platform"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-2xl font-light text-[#3B6B96]">
                    Sports Performance
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Kinetic chain power & speed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Premium barbell & functional equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Injury resilience & return-to-sport</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services/sports-performance"
                  className="block w-full bg-[#414B56] hover:bg-burntOrange text-white text-center py-3 rounded-md text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Card 3: Muscle Release Therapy */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-slate-200/70">
              <div>
                <img
                  src="/images/service-muscle-release.jpg"
                  alt="Muscle Release Therapy table stretch"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-2xl font-light text-[#3B6B96]">
                    Muscle Release Therapy
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Targeted Fascial Stretch Therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Neuromuscular trigger point release</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B6B96] font-bold text-base leading-none">+</span>
                      <span>Joint decompression & posture reset</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services/muscle-release-recovery"
                  className="block w-full bg-[#414B56] hover:bg-burntOrange text-white text-center py-3 rounded-md text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE 1: SPECIALIZED PERSONAL TRAINING - Modeled on Screenshot 12.58.12 PM */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Specialized Personal Training
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We create the most personalized program to help you achieve your specific goals. To support you on your journey, Rachel D'Rozario brings deep expertise in functional anatomy, kinesiology, and soft-tissue mobilization. Every session identifies and addresses unique exercise requirements and treatment methods based on your needs.
              </p>

              <div>
                <span className="text-sm font-medium text-slate-800 block mb-3">
                  Areas of Expertise:
                </span>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Mobility & Joint Range Restoration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Athletic Running & Sprint Mechanics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Lower Back & Pelvic Decompression</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Shoulder Impingement & Rotator Cuff Health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Injury Recovery and Prevention</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/personal-training"
                  className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium transition-colors"
                >
                  <span>Specialized Training</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Image with Signature Curved Decorative Outline Frame */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="absolute top-5 left-2 sm:left-6 w-full max-w-[440px] h-[92%] rounded-3xl border-2 border-[#C5A880]/70 pointer-events-none transform -translate-x-3 translate-y-3 z-0" />

              <div className="relative z-10 w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/feature-training.jpg"
                  alt="Coach supervising deadlift technique"
                  className="w-full h-[460px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURE 2: 12-WEEK MOVEMENT LONGEVITY - Modeled on Screenshot 12.58.14 PM */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Flat-lay photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[440px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
                <img
                  src="/images/feature-nutrition.jpg"
                  alt="Nutritional food flat lay"
                  className="w-full h-[440px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                12-Week Movement Longevity & Nutrition
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Build durable muscle, alleviate joint stress, and develop sustainable daily recovery habits through a personalized program and regular 1-on-1 check-ins. Build lasting habits, track measurable progress, and achieve results you can see and feel.
              </p>

              <div>
                <span className="text-sm font-medium text-slate-800 block mb-3">
                  Why it Works
                </span>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Weekly 1-on-1 progress check-ins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Gradual, sustainable movement changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Direct expert guidance from Rachel D'Rozario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B6B96] font-bold">+</span>
                    <span>Clear 12-week functional roadmap</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/muscle-release-recovery"
                  className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium transition-colors"
                >
                  <span>Recovery Coaching</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAIN LOCATOR TEASER (DIAGNOSTIC TOOL) */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/60" id="pain-locator-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-3 tracking-tight">
              Where Does It Hurt?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Click any region on our anatomical map to see underlying biomechanical causes and how Rachel's targeted muscle release creates immediate relief.
            </p>
          </div>

          <div className="bg-[#140D0B] text-white p-6 sm:p-10 rounded-2xl shadow-xl">
            <PainLocator isTeaser={true} />
          </div>
        </div>
      </section>

      {/* 8. "HEALTHY LIVING LIBRARY" / LEARN LIBRARY - Modeled on Screenshot 12.58.17 PM */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] mb-3 tracking-tight">
              Healthy Living Library
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              With education as the focus, our Healthy Living Library is designed to show you that health and fitness are about more than just moving well. From tips on recovery and sleep to follow-along mobility routines, our articles teach you how to take care of your body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-3">
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
              <span>More Articles</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. "JOIN THE COMMUNITY" / NEWSLETTER - Modeled on Screenshot 12.58.20 PM */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Joyful jump box athlete photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
                <img
                  src="/images/community-jump.jpg"
                  alt="Athlete performing jump in bright fitness studio"
                  className="w-full h-[400px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Join The Community Form */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
                Join The Community
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Sign up to receive health + fitness tips, exclusive promotional offers and updates, delivered right to your inbox.
              </p>

              {newsSubmitted ? (
                <div className="bg-[#EBF2F7] border border-[#3B6B96]/30 p-6 rounded-lg text-slate-800">
                  <div className="flex items-center gap-2 text-[#3B6B96] font-semibold mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Thank you for signing up!</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    We've added <strong className="text-slate-800">{newsEmail}</strong> to Rachel's monthly movement and recovery bulletin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="space-y-4 max-w-xl">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-xs text-slate-600 font-medium mb-1">
                        First Name*
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        value={newsFirstName}
                        onChange={(e) => setNewsFirstName(e.target.value)}
                        className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96] focus:ring-1 focus:ring-[#3B6B96]"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-xs text-slate-600 font-medium mb-1">
                        Last Name*
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        value={newsLastName}
                        onChange={(e) => setNewsLastName(e.target.value)}
                        className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96] focus:ring-1 focus:ring-[#3B6B96]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="home-news-email" className="block text-xs text-slate-600 font-medium mb-1">
                      Email*
                    </label>
                    <input
                      id="home-news-email"
                      type="email"
                      required
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96] focus:ring-1 focus:ring-[#3B6B96]"
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
