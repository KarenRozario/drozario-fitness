import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, NUTRITION_FORM_ENDPOINT } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2 } from 'lucide-react';

export const Nutrition: React.FC = () => {
  const { nutrition } = siteConfig;
  const { theme } = useTheme();

  const isModern = theme === 'modern';
  const isSoft = theme === 'soft';

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

    if (NUTRITION_FORM_ENDPOINT) {
      fetch(NUTRITION_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch((err) => console.error('Submission error:', err));
    }

    setIsSubmitted(true);
  };

  // Styling helper classes per theme
  const pageContainerClass = isModern
    ? 'bg-white text-[#2E1A47] font-manrope'
    : isSoft
    ? 'bg-[#FFFBF8] text-[#3B2F2A] font-dm-sans'
    : 'bg-[#FAF7F2] text-[#1A1714] font-sans';

  const section1Bg = isModern
    ? 'bg-white border-b-2 border-[#2E1A47]'
    : isSoft
    ? 'bg-[#FFFBF8] border-b border-[#EEDBD2]'
    : 'bg-[#FAF7F2] border-b border-[#1A1714]/15';

  const section2Bg = isModern
    ? 'bg-[#F1ECF8] border-b-2 border-[#2E1A47]'
    : isSoft
    ? 'bg-[#F6E8E1] border-b border-[#EEDBD2]'
    : 'bg-[#F2ECE3] border-b border-[#1A1714]/15';

  const card1Class = isModern
    ? 'p-8 bg-[#F1ECF8] border-2 border-[#2E1A47] space-y-3 flex flex-col justify-between'
    : isSoft
    ? 'p-8 bg-[#FFFBF8] border border-[#EEDBD2] rounded-3xl shadow-sm space-y-3 flex flex-col justify-between'
    : 'p-8 bg-[#F2ECE3] border border-[#1A1714]/15 space-y-3 flex flex-col justify-between';

  const card2Class = isModern
    ? 'bg-white p-8 border-2 border-[#2E1A47] space-y-3 flex flex-col justify-between'
    : isSoft
    ? 'bg-[#FFFBF8] p-8 border border-[#EEDBD2] rounded-3xl shadow-sm space-y-3 flex flex-col justify-between'
    : 'bg-[#FAF7F2] p-8 border border-[#1A1714]/15 space-y-3 flex flex-col justify-between';

  const kickerClass = isModern
    ? 'font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block mb-2'
    : isSoft
    ? 'font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block mb-2'
    : 'font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium';

  const headingClass = isModern
    ? 'text-3xl sm:text-5xl font-archivo font-black text-[#2E1A47] tracking-tight uppercase leading-none'
    : isSoft
    ? 'text-3xl sm:text-5xl font-dm-serif text-[#3B2F2A] tracking-tight leading-tight'
    : 'text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight';

  const subheadClass = isModern
    ? 'text-base sm:text-lg text-[#2E1A47]/80 mt-3 font-medium'
    : isSoft
    ? 'text-[17px] text-[#3B2F2A]/80 mt-3 leading-[1.7] font-normal'
    : 'text-[17px] text-[#1A1714]/75 mt-3 leading-[1.7] font-light';

  const inputClass = isModern
    ? 'w-full bg-[#F1ECF8] border-2 border-[#2E1A47] px-4 py-3 text-sm text-[#2E1A47] focus:outline-none focus:border-[#FF6B4A] focus:bg-white font-manrope font-semibold transition-colors'
    : isSoft
    ? 'w-full bg-white border border-[#EEDBD2] px-4 py-3 text-sm text-[#3B2F2A] rounded-2xl focus:outline-none focus:border-[#8FA58A] focus:ring-2 focus:ring-[#8FA58A]/30 font-dm-sans transition-all'
    : 'w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] font-sans transition-colors';

  const formBoxClass = isModern
    ? 'bg-white p-8 sm:p-14 border-2 border-[#2E1A47] shadow-[8px_8px_0px_#2E1A47] space-y-8'
    : isSoft
    ? 'bg-[#FFFBF8] p-8 sm:p-14 border border-[#EEDBD2] rounded-3xl shadow-xl space-y-8'
    : 'bg-[#FAF7F2] p-8 sm:p-14 border border-[#1A1714]/15 space-y-8 shadow-sm';

  const submitButtonClass = isModern
    ? 'w-full sm:w-auto bg-[#FF6B4A] hover:bg-[#2E1A47] text-white py-4 px-10 font-archivo font-black uppercase text-xs tracking-widest transition-colors cursor-pointer'
    : isSoft
    ? 'w-full sm:w-auto rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white py-4 px-10 font-dm-sans font-semibold text-xs tracking-wider transition-colors cursor-pointer shadow-md'
    : 'btn-editorial-primary w-full sm:w-auto cursor-pointer';

  return (
    <div className={pageContainerClass}>
      <SEO
        title="Nutrition Consultation & Coaching | D'Rozario Fitness Stoney Creek"
        description="Personalised nutrition coaching designed for women through pregnancy, postpartum recovery, and menopause in Stoney Creek with Rachel D'Rozario."
      />

      {/* 1. HERO SECTION (adapts via ThemePageHero) */}
      <ThemePageHero
        title={nutrition.headline}
        kicker="WOMEN'S NOURISHMENT · STONEY CREEK"
        description={nutrition.subhead}
        image={nutrition.image}
      />

      {/* 2. WHAT A NUTRITION CONSULTATION COVERS */}
      <section className={`py-24 lg:py-32 ${section1Bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className={kickerClass}>
              EVIDENCE-BASED NOURISHMENT
            </span>
            <h2 className={headingClass}>
              What A Nutrition Consultation Covers
            </h2>
            <p className={subheadClass}>
              Nutrition coaching with Rachel D'Rozario is grounded in maternal physiology, hormonal rhythm, and realistic daily living. No restrictive diets, guilt, or unrealistic rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {nutrition.whatItCovers.map((topic, idx) => (
              <div key={idx} className={card1Class}>
                <div className="space-y-2">
                  <span className={isModern ? 'font-archivo font-black text-xs text-[#FF6B4A] uppercase tracking-wider block' : isSoft ? 'font-dm-sans text-xs text-[#8FA58A] font-bold uppercase tracking-wider block' : 'font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block font-medium'}>
                    0{idx + 1}
                  </span>
                  <h3 className={isModern ? 'text-2xl font-archivo font-black text-[#2E1A47] uppercase' : isSoft ? 'text-2xl font-dm-serif text-[#3B2F2A]' : 'text-2xl font-serif text-[#1A1714]'}>
                    {topic.title}
                  </h3>
                  <p className={isModern ? 'text-sm text-[#2E1A47]/80 leading-relaxed font-medium' : isSoft ? 'text-[15px] text-[#3B2F2A]/80 leading-relaxed font-normal' : 'text-[15px] text-[#1A1714]/75 leading-relaxed font-light'}>
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className={`py-24 lg:py-32 ${section2Bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className={kickerClass}>
              THE FRAMEWORK
            </span>
            <h2 className={headingClass}>
              How It Works
            </h2>
            <p className={subheadClass}>
              A structured, supportive four-step process built to meet you where you are today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {nutrition.howItWorks.map((stepItem, idx) => (
              <div key={idx} className={card2Class}>
                <div className="space-y-2">
                  <span className={isModern ? 'font-archivo font-black text-4xl text-[#FF6B4A] block' : isSoft ? 'font-dm-serif text-3xl text-[#8FA58A] block' : 'font-serif text-3xl text-[#B4532A] block'}>
                    {stepItem.step}
                  </span>
                  <h3 className={isModern ? 'font-archivo font-black text-lg text-[#2E1A47] uppercase' : isSoft ? 'font-dm-serif text-xl text-[#3B2F2A]' : 'font-serif text-xl text-[#1A1714]'}>
                    {stepItem.title}
                  </h3>
                  <p className={isModern ? 'text-xs text-[#2E1A47]/80 leading-relaxed font-medium' : isSoft ? 'text-xs text-[#3B2F2A]/80 leading-relaxed font-normal' : 'text-sm text-[#1A1714]/70 leading-relaxed font-light'}>
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR */}
      <section className={`py-24 lg:py-32 ${section1Bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className={kickerClass}>
                INTENTIONAL SUPPORT
              </span>
              <h2 className={headingClass}>
                Who It's For
              </h2>
              <p className={subheadClass}>
                Whether preparing for birth, recovering postpartum, or navigating midlife changes, nutrition coaching provides sustainable, food-first guidance.
              </p>
              <div className="pt-4">
                <span className={`inline-block text-xs font-mono uppercase tracking-wider ${isModern ? 'bg-[#2E1A47] text-white px-4 py-2 font-archivo' : isSoft ? 'bg-[#F6E8E1] text-[#3B2F2A] rounded-full px-4 py-2 border border-[#EEDBD2]' : 'bg-[#F2ECE3] text-[#1A1714]/70 px-3.5 py-1.5 border border-[#1A1714]/15'}`}>
                  Coach: Rachel D'Rozario · {nutrition.credentialsPlaceholder}
                </span>
              </div>
            </div>

            <div className={`lg:col-span-7 divide-y ${isModern ? 'divide-[#2E1A47] border-y-2 border-[#2E1A47]' : isSoft ? 'divide-[#EEDBD2] border-y border-[#EEDBD2]' : 'divide-[#1A1714]/15 border-y border-[#1A1714]/15'}`}>
              {nutrition.whoItsFor.map((item, idx) => (
                <div key={idx} className="py-5 flex items-start gap-4">
                  <span className={isModern ? 'text-[#FF6B4A] font-bold text-lg' : isSoft ? 'text-[#8FA58A] font-bold text-lg' : 'text-[#B4532A] font-medium shrink-0 pt-0.5'}>
                    —
                  </span>
                  <p className={isModern ? 'text-base text-[#2E1A47] font-medium' : isSoft ? 'text-[16px] text-[#3B2F2A]/90' : 'text-[16px] text-[#1A1714]/80 font-light'}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION FORM: "Apply for a Nutrition Consultation" */}
      <section id="apply" className={`py-24 lg:py-32 ${section2Bg}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className={kickerClass}>
              INITIAL INTAKE
            </span>
            <h2 className={headingClass}>
              Apply for a Nutrition Consultation
            </h2>
            <p className={`${subheadClass} max-w-xl mx-auto`}>
              Please share a few details about your life stage and priorities. Rachel reviews every application personally.
            </p>
          </div>

          {isSubmitted ? (
            <div className={`${card2Class} p-12 text-center space-y-4 shadow-sm max-w-2xl mx-auto`}>
              <CheckCircle2 className={`w-12 h-12 mx-auto ${isModern ? 'text-[#FF6B4A]' : isSoft ? 'text-[#8FA58A]' : 'text-[#B4532A]'}`} />
              <h3 className={isModern ? 'text-2xl font-archivo font-black uppercase text-[#2E1A47]' : isSoft ? 'text-2xl font-dm-serif text-[#3B2F2A]' : 'text-3xl font-serif text-[#1A1714]'}>
                Application Received
              </h3>
              <p className={isModern ? 'text-sm text-[#2E1A47]/80 leading-relaxed font-medium' : isSoft ? 'text-sm text-[#3B2F2A]/80 leading-relaxed' : 'text-[17px] text-[#1A1714]/80 leading-relaxed font-light'}>
                Thank you — Rachel will be in touch within 2 business days to discuss your consultation and scheduling.
              </p>
              <div className="pt-4">
                <Link to="/" className={submitButtonClass}>
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={formBoxClass}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name-input" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                    First Name*
                  </label>
                  <input
                    id="first-name-input"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {errors.firstName && (
                    <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.firstName}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="last-name-input" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                    Last Name*
                  </label>
                  <input
                    id="last-name-input"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {errors.lastName && (
                    <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email-input" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                    Email Address*
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {errors.email && (
                    <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="phone-input" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                    Phone Number
                  </label>
                  <input
                    id="phone-input"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Life Stage */}
              <div>
                <label htmlFor="life-stage-select" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                  Current Life Stage*
                </label>
                <select
                  id="life-stage-select"
                  name="lifeStage"
                  value={formData.lifeStage}
                  onChange={handleInputChange}
                  className={inputClass}
                >
                  <option value="Pregnant">Pregnant</option>
                  <option value="Postpartum">Postpartum</option>
                  <option value="Perimenopause or menopause">Perimenopause or menopause</option>
                  <option value="50+">50+</option>
                  <option value="Other">Other</option>
                </select>
                {errors.lifeStage && (
                  <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.lifeStage}</span>
                )}
              </div>

              {/* Main Goals (Checkboxes) */}
              <div>
                <span className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                  Main Goals* (Select all that apply)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {goalOptions.map((opt) => (
                    <label key={opt.id} className={`flex items-center gap-3 cursor-pointer p-2.5 transition-colors ${isModern ? 'hover:bg-[#F1ECF8]' : isSoft ? 'hover:bg-[#F6E8E1] rounded-xl' : 'hover:bg-[#F2ECE3]'}`}>
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(opt.label)}
                        onChange={() => handleGoalToggle(opt.label)}
                        className={`w-4 h-4 cursor-pointer ${isModern ? 'accent-[#FF6B4A]' : isSoft ? 'accent-[#8FA58A]' : 'accent-[#B4532A]'}`}
                      />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.goals && (
                  <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.goals}</span>
                )}
              </div>

              {/* Dietary Preferences or Restrictions */}
              <div>
                <label htmlFor="dietary-restrictions-input" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                  Dietary Preferences or Restrictions
                </label>
                <input
                  id="dietary-restrictions-input"
                  name="dietaryRestrictions"
                  type="text"
                  placeholder="e.g. Vegetarian, dairy-free, gluten sensitivity, none"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>

              {/* Anything Else We Should Know */}
              <div>
                <label htmlFor="additional-info-textarea" className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                  Anything Else We Should Know
                </label>
                <textarea
                  id="additional-info-textarea"
                  name="additionalInfo"
                  rows={4}
                  placeholder="Tell Rachel about your schedule, family routine, or current challenges..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className={inputClass}
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <span className={`block text-xs uppercase tracking-wider mb-2 font-bold ${isModern ? 'font-archivo text-[#2E1A47]' : isSoft ? 'font-dm-sans text-[#3B2F2A]' : 'font-mono text-[#1A1714]/70'}`}>
                  Preferred Contact Method
                </span>
                <div className="flex items-center gap-6 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                      className={isModern ? 'accent-[#FF6B4A]' : isSoft ? 'accent-[#8FA58A]' : 'accent-[#B4532A]'}
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
                      className={isModern ? 'accent-[#FF6B4A]' : isSoft ? 'accent-[#8FA58A]' : 'accent-[#B4532A]'}
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
                    className={`mt-1 w-4 h-4 cursor-pointer ${isModern ? 'accent-[#FF6B4A]' : isSoft ? 'accent-[#8FA58A]' : 'accent-[#B4532A]'}`}
                  />
                  <span className="text-xs leading-relaxed opacity-90">
                    I agree to be contacted about my application and understand that my information will be handled confidentially.*
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-[#FF6B4A] font-mono mt-1 block">{errors.consent}</span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button type="submit" className={submitButtonClass}>
                  Submit Consultation Application
                </button>
              </div>

              {/* Mandatory Medical / Wellness Disclaimer Note Under Form */}
              <div className={`pt-4 border-t ${isModern ? 'border-[#2E1A47]/20' : isSoft ? 'border-[#EEDBD2]' : 'border-[#1A1714]/15'}`}>
                <p className="text-xs opacity-75 font-light leading-relaxed italic">
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
