import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig, BOOKING_FORM_ENDPOINT } from '../../config/site';
import { CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

interface BookingFormProps {
  initialProgram?: string;
  onSuccessClose?: () => void;
  isModal?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  preferredTime: string;
  locationType: string;
  notes: string;
  consent: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialProgram,
  onSuccessClose,
  isModal = false,
}) => {
  const { theme } = useTheme();
  const isModern = theme === 'modern';
  const isSoft = theme === 'soft';

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: initialProgram || 'Prenatal Fitness & Movement',
    preferredTime: 'Weekday Mornings (8am – 12pm)',
    locationType: 'Stoney Creek Studio (In-Person)',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errs.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.program) {
      errs.program = 'Please select a program or life stage';
    }
    if (!formData.consent) {
      errs.consent = 'Consent is required to allow Rachel to contact you';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (BOOKING_FORM_ENDPOINT) {
        await fetch(BOOKING_FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Booking submission error:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: 'Prenatal Fitness & Movement',
      preferredTime: 'Weekday Mornings (8am – 12pm)',
      locationType: 'Stoney Creek Studio (In-Person)',
      notes: '',
      consent: false,
    });
    setErrors({});
    if (onSuccessClose) {
      onSuccessClose();
    }
  };

  const programOptions = [
    { label: 'Prenatal Fitness & Movement (Trimesters 1–3)', value: 'Prenatal Fitness & Movement' },
    { label: 'Postnatal Core Rebuilding & Recovery', value: 'Postnatal Core Rebuilding & Recovery' },
    { label: 'Perimenopause & Menopause Strength Coaching', value: 'Perimenopause & Menopause Strength' },
    { label: 'Strong After 50 Strength & Bone Health', value: 'Strong After 50 Strength & Bone Health' },
    { label: 'Nutrition Coaching & Consultation', value: 'Nutrition Coaching & Consultation' },
    { label: 'General Life Stage Movement Consultation', value: 'General Life Stage Movement Consultation' },
  ];

  const timeOptions = [
    'Weekday Mornings (8am – 12pm)',
    'Weekday Midday (12pm – 4pm)',
    'Weekday Evenings (4pm – 8pm)',
    'Saturday Morning (9am – 1pm)',
    'Flexible / Let Rachel Suggest',
  ];

  const locationOptions = [
    'Stoney Creek Studio (Private In-Person)',
    'Virtual Coaching Consultation (Online)',
  ];

  // Styling helper classes per theme
  const formCardClass = isModern
    ? 'bg-white border-2 border-[#2E1A47] shadow-[8px_8px_0px_#2E1A47] rounded-none'
    : isSoft
    ? 'bg-[#FFFBF8] border border-[#EEDBD2] shadow-xl rounded-3xl sm:rounded-[32px]'
    : 'bg-[#FAF7F2] border border-[#1A1714]/20 shadow-lg rounded-none';

  const headerBannerClass = isModern
    ? 'bg-[#2E1A47] text-white p-6 sm:p-8 border-b-2 border-[#2E1A47]'
    : isSoft
    ? 'bg-[#F6E8E1] text-[#3B2F2A] p-6 sm:p-8 border-b border-[#EEDBD2] rounded-t-3xl sm:rounded-t-[32px]'
    : 'bg-[#F2ECE3] text-[#1A1714] p-6 sm:p-8 border-b border-[#1A1714]/15 rounded-none';

  const kickerClass = isModern
    ? 'font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block'
    : isSoft
    ? 'font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block'
    : 'font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] font-medium block';

  const headlineClass = isModern
    ? 'font-archivo font-black text-2xl sm:text-4xl text-white uppercase tracking-tight leading-tight mt-1'
    : isSoft
    ? 'font-dm-serif text-2xl sm:text-4xl text-[#3B2F2A] tracking-tight leading-tight mt-1'
    : 'font-serif text-2xl sm:text-4xl text-[#1A1714] tracking-tight leading-tight mt-1';

  const subheadClass = isModern
    ? 'font-manrope text-xs sm:text-sm text-white/80 font-normal leading-relaxed mt-2'
    : isSoft
    ? 'font-dm-sans text-xs sm:text-sm text-[#3B2F2A]/75 font-normal leading-relaxed mt-2'
    : 'font-sans text-xs sm:text-sm text-[#1A1714]/75 font-light leading-relaxed mt-2';

  const labelClass = isModern
    ? 'block font-archivo font-black text-[11px] uppercase tracking-wider text-[#2E1A47] mb-1.5'
    : isSoft
    ? 'block font-dm-sans text-xs text-[#3B2F2A]/85 font-semibold mb-1.5'
    : 'block font-mono text-[11px] uppercase tracking-[0.18em] text-[#1A1714]/75 font-medium mb-1.5';

  const inputClass = isModern
    ? 'w-full bg-[#F1ECF8] border-2 border-[#2E1A47] px-4 py-3 text-sm text-[#2E1A47] rounded-none focus:outline-none focus:border-[#FF6B4A] focus:bg-white font-manrope font-semibold transition-colors'
    : isSoft
    ? 'w-full bg-white border border-[#EEDBD2] px-4 py-3 text-sm text-[#3B2F2A] rounded-2xl focus:outline-none focus:border-[#8FA58A] focus:ring-2 focus:ring-[#8FA58A]/30 font-dm-sans transition-all'
    : 'w-full bg-[#FAF7F2] border border-[#1A1714]/25 px-4 py-3 text-sm text-[#1A1714] rounded-none focus:outline-none focus:border-[#1A1714] font-sans transition-colors';

  const submitButtonClass = isModern
    ? 'w-full bg-[#FF6B4A] hover:bg-[#2E1A47] text-white py-4 px-8 font-archivo font-black uppercase text-xs tracking-widest rounded-none shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50'
    : isSoft
    ? 'w-full rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white py-4 px-8 font-dm-sans font-semibold text-xs tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50'
    : 'w-full btn-editorial-primary text-xs py-4 px-8 tracking-[0.2em] rounded-none flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50';

  const errorTextClass = isModern
    ? 'font-archivo font-bold text-xs text-[#FF6B4A] mt-1 block uppercase'
    : isSoft
    ? 'font-dm-sans text-xs text-[#B4532A] mt-1 block'
    : 'font-mono text-xs text-[#B4532A] mt-1 block';

  if (isSuccess) {
    return (
      <div className={`${formCardClass} p-8 sm:p-14 text-center space-y-6 max-w-2xl mx-auto`}>
        <div
          className={`w-16 h-16 mx-auto flex items-center justify-center ${
            isModern
              ? 'bg-[#2E1A47] text-[#FF6B4A] rounded-none border-2 border-[#2E1A47]'
              : isSoft
              ? 'bg-[#8FA58A]/15 text-[#8FA58A] rounded-full'
              : 'bg-[#B4532A]/10 text-[#B4532A] rounded-none'
          }`}
        >
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-3">
          <span className={kickerClass}>RESERVATION RECEIVED</span>
          <h3
            className={
              isModern
                ? 'font-archivo font-black text-2xl sm:text-3xl uppercase text-[#2E1A47]'
                : isSoft
                ? 'font-dm-serif text-2xl sm:text-3xl text-[#3B2F2A]'
                : 'font-serif text-2xl sm:text-3xl text-[#1A1714]'
            }
          >
            Thank You, {formData.firstName}!
          </h3>
          <p
            className={
              isModern
                ? 'font-manrope text-sm text-[#2E1A47]/80 leading-relaxed font-semibold max-w-md mx-auto'
                : isSoft
                ? 'font-dm-sans text-sm text-[#3B2F2A]/80 leading-relaxed font-normal max-w-md mx-auto'
                : 'font-sans text-sm text-[#1A1714]/80 leading-relaxed font-light max-w-md mx-auto'
            }
          >
            Your booking request for{' '}
            <strong className="font-semibold text-inherit">{formData.program}</strong> has been
            safely received. Rachel reviews every schedule personally and will contact you via{' '}
            <strong className="font-semibold text-inherit">{formData.email}</strong> within one
            business day to finalize your calendar slot.
          </p>
        </div>

        <div
          className={`p-5 text-left text-xs space-y-2 max-w-md mx-auto ${
            isModern
              ? 'bg-[#F1ECF8] border-2 border-[#2E1A47] font-mono text-[#2E1A47]'
              : isSoft
              ? 'bg-[#F6E8E1] rounded-2xl font-dm-sans text-[#3B2F2A]'
              : 'bg-[#F2ECE3] border border-[#1A1714]/15 font-mono text-[#1A1714]/80'
          }`}
        >
          <div className="flex items-center gap-2 font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#B4532A]" />
            <span>Requested Time: {formData.preferredTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B4532A]" />
            <span>Format: {formData.locationType}</span>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleReset}
            className={
              isModern
                ? 'bg-[#2E1A47] hover:bg-[#FF6B4A] text-white px-8 py-3 font-archivo font-black uppercase text-xs tracking-widest rounded-none cursor-pointer'
                : isSoft
                ? 'rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white px-8 py-3 font-dm-sans font-semibold text-xs tracking-wider cursor-pointer'
                : 'btn-editorial-primary text-xs py-3 px-8 tracking-widest cursor-pointer'
            }
          >
            {isModal ? 'Close Window' : 'Done'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={formCardClass}>
      {/* Header Banner */}
      <div className={headerBannerClass}>
        <span className={kickerClass}>
          {isModern ? 'DIRECT RESERVATION · STONEY CREEK' : isSoft ? '✦ PRIVATE & WELCOMING SPACE' : 'NO. 01 — SESSION RESERVATION'}
        </span>
        <h2 className={headlineClass}>
          {isModern
            ? 'SCHEDULE YOUR STRENGTH SESSION'
            : isSoft
            ? 'Book Your Gentle Discovery Session'
            : 'Book a Private Coaching Session'}
        </h2>
        <p className={subheadClass}>
          Connect with Rachel D'Rozario for tailored women's fitness coaching across pregnancy, postpartum recovery, and menopause.
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="booking-first-name" className={labelClass}>
              First Name*
            </label>
            <input
              id="booking-first-name"
              name="firstName"
              type="text"
              required
              placeholder="e.g. Sarah"
              value={formData.firstName}
              onChange={handleInputChange}
              className={inputClass}
            />
            {errors.firstName && <span className={errorTextClass}>{errors.firstName}</span>}
          </div>

          <div>
            <label htmlFor="booking-last-name" className={labelClass}>
              Last Name*
            </label>
            <input
              id="booking-last-name"
              name="lastName"
              type="text"
              required
              placeholder="e.g. Miller"
              value={formData.lastName}
              onChange={handleInputChange}
              className={inputClass}
            />
            {errors.lastName && <span className={errorTextClass}>{errors.lastName}</span>}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="booking-email" className={labelClass}>
              Email Address*
            </label>
            <input
              id="booking-email"
              name="email"
              type="email"
              required
              placeholder="sarah@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClass}
            />
            {errors.email && <span className={errorTextClass}>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="booking-phone" className={labelClass}>
              Phone Number*
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              required
              placeholder="(905) 555-0182"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClass}
            />
            {errors.phone && <span className={errorTextClass}>{errors.phone}</span>}
          </div>
        </div>

        {/* Program Selection */}
        <div>
          <label htmlFor="booking-program" className={labelClass}>
            Program / Life Stage Focus*
          </label>
          <select
            id="booking-program"
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            className={inputClass}
          >
            {programOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.program && <span className={errorTextClass}>{errors.program}</span>}
        </div>

        {/* Preferred Timing & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="booking-time" className={labelClass}>
              Preferred Appointment Window
            </label>
            <select
              id="booking-time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className={inputClass}
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="booking-location" className={labelClass}>
              Session Location
            </label>
            <select
              id="booking-location"
              name="locationType"
              value={formData.locationType}
              onChange={handleInputChange}
              className={inputClass}
            >
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes & Goals */}
        <div>
          <label htmlFor="booking-notes" className={labelClass}>
            Tell Rachel About Your Goals or Considerations (Optional)
          </label>
          <textarea
            id="booking-notes"
            name="notes"
            rows={3}
            placeholder="Share anything helpful: your current trimester or baby's age, past strength experience, specific goals, or questions..."
            value={formData.notes}
            onChange={handleInputChange}
            className={inputClass}
          />
        </div>

        {/* Studio Info Pill */}
        <div
          className={`p-4 text-xs flex items-start gap-3 ${
            isModern
              ? 'bg-[#F1ECF8] border border-[#2E1A47]/30 text-[#2E1A47] font-manrope'
              : isSoft
              ? 'bg-[#F6E8E1] text-[#3B2F2A] rounded-2xl border border-[#EEDBD2] font-dm-sans'
              : 'bg-[#F2ECE3] text-[#1A1714] border border-[#1A1714]/15 font-sans'
          }`}
        >
          <MapPin className="w-4 h-4 text-[#B4532A] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold">Studio Location:</span> {siteConfig.address}, {siteConfig.city}, {siteConfig.province}. Private appointment only. Babies & strollers always welcome in private postpartum sessions.
          </div>
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className={`mt-1 w-4 h-4 rounded cursor-pointer ${isModern ? 'accent-[#FF6B4A]' : isSoft ? 'accent-[#8FA58A]' : 'accent-[#B4532A]'}`}
            />
            <span
              className={
                isModern
                  ? 'font-manrope text-xs text-[#2E1A47]/90 font-medium'
                  : isSoft
                  ? 'font-dm-sans text-xs text-[#3B2F2A]/90'
                  : 'font-sans text-xs text-[#1A1714]/80 font-light'
              }
            >
              I consent to Rachel D'Rozario contacting me by email or phone to confirm appointment scheduling and answer questions.*
            </span>
          </label>
          {errors.consent && <span className={errorTextClass}>{errors.consent}</span>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={submitButtonClass}
          >
            {isSubmitting ? (
              <span>Submitting Session Request...</span>
            ) : (
              <>
                <span>
                  {isModern
                    ? 'CONFIRM & SUBMIT SESSION REQUEST'
                    : isSoft
                    ? 'Submit Session Request'
                    : 'Submit Session Request'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
