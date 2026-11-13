import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';
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
    <div className="bg-white text-zinc-900">
      <SEO
        title="Contact Us | D'Rozario Fitness Stoney Creek"
        description="Contact Rachel D'Rozario at D'Rozario Fitness in Stoney Creek, Ontario. Let us help you get started with women's fitness coaching today."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact D'Rozario Fitness"
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-75"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Let us help you get started with your life-stage movement and fitness goals in Stoney Creek today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Studio Info */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2 font-mono">
              Direct Inquiries
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight">
              Send Rachel A Message
            </h2>
          </div>

          {submitted ? (
            <div className="bg-zinc-50 border border-zinc-200 p-10 rounded-3xl text-center space-y-4 max-w-2xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-black mx-auto" />
              <h3 className="text-2xl font-light text-zinc-900">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.firstName}. Rachel has received your message and will be in touch directly within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto bg-zinc-50 p-8 sm:p-12 rounded-3xl border border-zinc-200">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                    First Name*
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                    Last Name*
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                    Email*
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                    Phone Number*
                  </label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Location Select */}
              <div>
                <label htmlFor="contact-location-select" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                  Location*
                </label>
                <select
                  id="contact-location-select"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="Stoney Creek Studio">Stoney Creek Studio ({siteConfig.address})</option>
                </select>
              </div>

              {/* "I am interested in*" Checkboxes */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                  I am interested in*
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700 pt-1">
                  {[
                    "Prenatal Fitness Coaching",
                    "Postnatal Fitness & Core Reconnection",
                    "Perimenopause & Menopause Strength",
                    "Strong After 50 Coaching",
                    "Mom Group & Community Classes",
                    "General Life Stage Consultation",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer p-2 rounded hover:bg-white transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="rounded border-zinc-300 text-black focus:ring-black w-4 h-4"
                      />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-msg-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                  Message*
                </label>
                <textarea
                  id="contact-msg-input"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Rachel about your fitness goals, your life stage, or any questions..."
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Consent Radios */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2 font-mono">
                  Consent*
                </span>
                <div className="space-y-2 text-xs text-zinc-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consent"
                      value="yes"
                      checked={formData.consent === 'yes'}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="text-black focus:ring-black"
                    />
                    <span>I want to receive emails about gym news, promotions, and health living tips.</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consent"
                      value="no"
                      checked={formData.consent === 'no'}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="text-black focus:ring-black"
                    />
                    <span>I do not wish to receive information other than a response to my request above.</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-black hover:bg-zinc-800 text-white px-9 py-3.5 rounded-lg text-sm font-semibold transition-colors shadow-md w-full sm:w-auto"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}

          {/* Location Block at bottom */}
          <div className="mt-20 pt-12 border-t border-zinc-200">
            <h3 className="text-2xl font-light text-zinc-900 mb-4 tracking-tight">
              Stoney Creek Studio
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-zinc-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province} {siteConfig.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-black shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-black shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
