import React, { useState } from 'react';
import { siteConfig, NUTRITION_FORM_ENDPOINT, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { CheckCircle2 } from 'lucide-react';

export const Nutrition: React.FC = () => {
  const { nutrition } = siteConfig;

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lifeStage: 'Pregnant',
    goals: [] as string[],
    dietaryRestrictions: '',
    additionalInfo: '',
    preferredContact: 'email',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    { id: 'more-energy', label: 'More energy' },
    { id: 'healthy-pregnancy', label: 'Healthy pregnancy eating' },
    { id: 'postpartum-nourishment', label: 'Postpartum nourishment' },
    { id: 'body-comp', label: 'Weight and body composition' },
    { id: 'strength-perf', label: 'Strength and performance' },
    { id: 'better-habits', label: 'Building better habits' },
    { id: 'other', label: 'Other' },
  ];

  const handleGoalToggle = (label: string) => {
    setFormData((prev) => {
      const exists = prev.goals.includes(label);
      const nextGoals = exists
        ? prev.goals.filter((g) => g !== label)
        : [...prev.goals, label];
      return { ...prev, goals: nextGoals };
    });

    if (errors.goals) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.goals;
        return next;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Inline Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'A valid email address is required';
    }
    if (!formData.lifeStage) newErrors.lifeStage = 'Please select your current life stage';
    if (formData.goals.length === 0) newErrors.goals = 'Please select at least one main goal';
    if (!formData.consent) newErrors.consent = 'Please confirm consent to be contacted';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Connect this nutrition application submission to your production endpoint
    // e.g. if (NUTRITION_FORM_ENDPOINT) { fetch(NUTRITION_FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(formData) }) }
    if (NUTRITION_FORM_ENDPOINT) {
      fetch(NUTRITION_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch((err) => console.error('Submission error:', err));
    }

    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Nutrition Consultation & Coaching | D'Rozario Fitness Stoney Creek"
        description="Personalised nutrition coaching designed for women through pregnancy, postpartum recovery, and menopause in Stoney Creek with Rachel D'Rozario."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#1A1714] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={nutrition.image}
            alt="Women's Nutrition Coaching in Stoney Creek"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/90 block mb-3">
              WOMEN'S NOURISHMENT · STONEY CREEK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] mb-4">
              {nutrition.headline}
            </h1>
            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light max-w-[65ch] leading-[1.7]">
              {nutrition.subhead}
            </p>
            <div className="mt-8">
              <a href="#apply" className="btn-editorial-primary">
                Apply for a Nutrition Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT A NUTRITION CONSULTATION COVERS */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              EVIDENCE-BASED NOURISHMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
              What A Nutrition Consultation Covers
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 mt-3 leading-[1.7] font-light">
              Nutrition coaching with Rachel D'Rozario is grounded in maternal physiology, hormonal rhythm, and realistic daily living. No restrictive diets, guilt, or unrealistic rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {nutrition.whatItCovers.map((topic, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F2ECE3] border border-[#1A1714]/15 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block mb-2 font-medium">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-serif text-[#1A1714] mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-[15px] text-[#1A1714]/75 leading-relaxed font-light">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              THE FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
              How It Works
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 mt-3 leading-[1.7] font-light">
              A structured, supportive four-step process built to meet you where you are today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nutrition.howItWorks.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 border border-[#1A1714]/15 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-[#B4532A] block mb-2 font-normal">
                    {stepItem.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#1A1714] mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-3 font-medium">
                INTENTIONAL SUPPORT
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
                Who It's For
              </h2>
              <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] font-light">
                Whether preparing for birth, recovering postpartum, or navigating midlife changes, nutrition coaching provides sustainable, food-first guidance.
              </p>
              <div className="pt-6">
                <span className="inline-block text-xs font-mono uppercase tracking-wider text-[#1A1714]/60 bg-[#F2ECE3] px-3.5 py-1.5 border border-[#1A1714]/15">
                  Coach: Rachel D'Rozario · {nutrition.credentialsPlaceholder}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15">
              {nutrition.whoItsFor.map((item, idx) => (
                <div key={idx} className="py-5 flex items-start gap-4">
                  <span className="font-mono text-[#B4532A] font-medium shrink-0 pt-0.5">—</span>
                  <p className="text-[16px] text-[#1A1714]/80 leading-relaxed font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM: "Apply for a Nutrition Consultation" */}
      <section id="apply" className="py-28 lg:py-36 bg-[#F2ECE3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              INITIAL INTAKE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
              Apply for a Nutrition Consultation
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 mt-3 leading-[1.7] font-light max-w-xl mx-auto">
              Please share a few details about your life stage and priorities. Rachel reviews every application personally.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#FAF7F2] border border-[#1A1714]/15 p-12 text-center space-y-4 shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-[#B4532A] mx-auto" />
              <h3 className="text-3xl font-serif text-[#1A1714]">
                Application Received
              </h3>
              <p className="text-[17px] text-[#1A1714]/80 max-w-md mx-auto leading-relaxed font-light">
                Thank you — Rachel will be in touch within [2] business days to discuss your consultation and scheduling.
              </p>
              <div className="pt-4">
                <a href={BOOKING_URL} className="btn-editorial-outline">
                  Return to Home
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="bg-[#FAF7F2] p-8 sm:p-14 border border-[#1A1714]/15 space-y-8 shadow-sm">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    First Name*
                  </label>
                  <input
                    id="first-name-input"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                  {errors.firstName && (
                    <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.firstName}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="last-name-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Last Name*
                  </label>
                  <input
                    id="last-name-input"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                  {errors.lastName && (
                    <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Email Address*
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="phone-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone-input"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                </div>
              </div>

              {/* Life Stage */}
              <div>
                <label htmlFor="life-stage-select" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Current Life Stage*
                </label>
                <select
                  id="life-stage-select"
                  name="lifeStage"
                  value={formData.lifeStage}
                  onChange={handleInputChange}
                  className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                >
                  <option value="Pregnant">Pregnant</option>
                  <option value="Postpartum">Postpartum</option>
                  <option value="Perimenopause or menopause">Perimenopause or menopause</option>
                  <option value="50+">50+</option>
                  <option value="Other">Other</option>
                </select>
                {errors.lifeStage && (
                  <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.lifeStage}</span>
                )}
              </div>

              {/* Main Goals (Checkboxes) */}
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Main Goals* (Select all that apply)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {goalOptions.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-[#F2ECE3] transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(opt.label)}
                        onChange={() => handleGoalToggle(opt.label)}
                        className="rounded-none border-[#1A1714]/30 text-[#1A1714] focus:ring-[#B4532A] w-4 h-4"
                      />
                      <span className="text-sm font-light text-[#1A1714]/85">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.goals && (
                  <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.goals}</span>
                )}
              </div>

              {/* Dietary Preferences or Restrictions */}
              <div>
                <label htmlFor="dietary-restrictions-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Dietary Preferences or Restrictions
                </label>
                <input
                  id="dietary-restrictions-input"
                  name="dietaryRestrictions"
                  type="text"
                  placeholder="e.g. Vegetarian, dairy-free, gluten sensitivity, none"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                />
              </div>

              {/* Anything Else We Should Know */}
              <div>
                <label htmlFor="additional-info-textarea" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Anything Else We Should Know
                </label>
                <textarea
                  id="additional-info-textarea"
                  name="additionalInfo"
                  rows={4}
                  placeholder="Tell Rachel about your schedule, family routine, or current challenges..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Preferred Contact Method
                </span>
                <div className="flex items-center gap-6 text-sm text-[#1A1714]/80">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className="text-[#1A1714] focus:ring-[#B4532A]"
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                      className="text-[#1A1714] focus:ring-[#B4532A]"
                    />
                    <span>Phone Call / Text</span>
                  </label>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 rounded-none border-[#1A1714]/30 text-[#1A1714] focus:ring-[#B4532A] w-4 h-4"
                  />
                  <span className="text-xs text-[#1A1714]/80 leading-relaxed">
                    I agree to be contacted about my application and understand that my information will be handled confidentially.*
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-[#B4532A] font-mono mt-1 block">{errors.consent}</span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className="btn-editorial-primary w-full sm:w-auto">
                  Submit Consultation Application
                </button>
              </div>

              {/* Mandatory Medical / Wellness Disclaimer Note Under Form */}
              <div className="pt-4 border-t border-[#1A1714]/15">
                <p className="text-xs text-[#1A1714]/65 font-light leading-relaxed italic">
                  {nutrition.disclaimer}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
