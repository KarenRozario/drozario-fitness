import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: 'Stoney Creek Studio',
    interest: [] as string[],
    message: '',
    consent: 'yes',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest.includes(val)
        ? prev.interest.filter((i) => i !== val)
        : [...prev.interest, val],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect this contact form to your production endpoint / API handler
    // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Contact Us | D'Rozario Fitness Stoney Creek"
        description="Contact Rachel D'Rozario at D'Rozario Fitness in Stoney Creek, Ontario. Let us help you get started with women's fitness coaching today."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Contact Us"
        kicker="GET IN TOUCH · STONEY CREEK"
        description="Let us help you get started with your life-stage movement and fitness goals in Stoney Creek today."
        image={`${import.meta.env.BASE_URL}images/contact-hero.webp`}
      />

      {/* Contact Form & Studio Info */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              DIRECT INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
              Send Rachel A Message
            </h2>
          </div>

          {submitted ? (
            <div className="bg-[#F2ECE3] border border-[#1A1714]/15 p-12 text-center space-y-4 max-w-2xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-[#B4532A] mx-auto" />
              <h3 className="text-3xl font-serif text-[#1A1714]">
                Message Sent Successfully
              </h3>
              <p className="text-[15px] text-[#1A1714]/80 max-w-md mx-auto leading-relaxed font-light">
                Thank you, {formData.firstName}. Rachel has received your message and will be in touch directly within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto bg-[#F2ECE3] p-8 sm:p-14 border border-[#1A1714]/15">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    First Name*
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Last Name*
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Email Address*
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                    Phone Number*
                  </label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                  />
                </div>
              </div>

              {/* Location Select */}
              <div>
                <label htmlFor="contact-location-select" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Studio Location*
                </label>
                <select
                  id="contact-location-select"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                >
                  <option value="Stoney Creek Studio">Stoney Creek Studio ({siteConfig.address})</option>
                </select>
              </div>

              {/* "I am interested in*" Checkboxes */}
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  I am interested in*
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[#1A1714]/80 pt-1">
                  {[
                    "Prenatal Fitness Coaching",
                    "Postnatal Fitness & Core Reconnection",
                    "Perimenopause & Menopause Strength",
                    "Strong After 50 Coaching",
                    "Mom Group & Community Classes",
                    "General Life Stage Consultation",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-[#FAF7F2] transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="rounded-none border-[#1A1714]/30 text-[#1A1714] focus:ring-[#B4532A] w-4 h-4"
                      />
                      <span className="text-xs sm:text-sm font-light">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-msg-input" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Message / Movement Goals*
                </label>
                <textarea
                  id="contact-msg-input"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Rachel about your fitness goals, your life stage, or any questions..."
                  className="w-full bg-[#FAF7F2] border border-[#1A1714]/20 px-4 py-3 text-sm text-[#1A1714] focus:outline-none focus:border-[#1A1714] transition-colors"
                />
              </div>

              {/* Consent Radios */}
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-[0.15em] text-[#1A1714]/70 mb-2 font-medium">
                  Communication Consent*
                </span>
                <div className="space-y-2 text-xs text-[#1A1714]/75 font-light">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consent"
                      value="yes"
                      checked={formData.consent === 'yes'}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="text-[#1A1714] focus:ring-[#B4532A]"
                    />
                    <span>I want to receive emails about studio news, workshops, and movement guides.</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consent"
                      value="no"
                      checked={formData.consent === 'no'}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="text-[#1A1714] focus:ring-[#B4532A]"
                    />
                    <span>I only wish to receive a direct response regarding this inquiry.</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-editorial-primary w-full sm:w-auto"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}

          {/* Location Block at bottom */}
          <div className="mt-24 pt-12 border-t border-[#1A1714]/15">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block mb-2 font-medium">
              HEADQUARTERS
            </span>
            <h3 className="text-2xl font-serif text-[#1A1714] mb-6 tracking-tight">
              Stoney Creek Studio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-[#1A1714]/75 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B4532A] shrink-0 mt-0.5" />
                <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province} {siteConfig.postalCode}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B4532A] shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B4532A] shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
