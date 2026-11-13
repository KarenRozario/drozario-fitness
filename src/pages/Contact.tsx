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
    <div className="bg-white text-slate-800">
      <SEO
        title="Contact Us | Stoney Creek Personal Training & Recovery"
        description="Contact Rachel D'Rozario at D'Rozario Muscle Release in Stoney Creek, Ontario. Let us help you get started with your health and fitness goals today."
      />

      {/* Hero Banner - Modeled on Screenshot 1.01.41 PM */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact D'Rozario Muscle Release"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Let us help you get started with your health and fitness goals today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - Modeled directly on Screenshot 1.01.43 PM and 1.01.45 PM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-[#3B6B96] mb-2">
              Let us help you get started with your health and fitness goals today.
            </h2>
          </div>

          {submitted ? (
            <div className="bg-[#EBF2F7] border border-[#3B6B96]/30 p-8 rounded-xl text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-[#3B6B96] mx-auto" />
              <h3 className="text-2xl font-light text-[#3B6B96]">
                Message Sent Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, {formData.firstName}. Rachel has received your message and will be in touch directly within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-first-name" className="block text-xs font-normal text-slate-600 mb-1.5">
                    First Name*
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="block text-xs font-normal text-slate-600 mb-1.5">
                    Last Name*
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email-input" className="block text-xs font-normal text-slate-600 mb-1.5">
                  Email*
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="contact-phone-input" className="block text-xs font-normal text-slate-600 mb-1.5">
                  Phone Number*
                </label>
                <input
                  id="contact-phone-input"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                />
              </div>

              {/* Location Select */}
              <div>
                <label htmlFor="contact-location-select" className="block text-xs font-normal text-slate-600 mb-1.5">
                  Location*
                </label>
                <select
                  id="contact-location-select"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#3B6B96]"
                >
                  <option value="Stoney Creek Studio">Stoney Creek Studio ({siteConfig.address})</option>
                </select>
              </div>

              {/* "I am interested in*" Checkboxes */}
              <div>
                <span className="block text-xs font-normal text-slate-600 mb-2">
                  I am interested in*
                </span>
                <div className="space-y-2 text-sm text-slate-700">
                  {[
                    "1-on-1 Personal Training",
                    "Targeted Muscle Release / Fascial Stretch Therapy",
                    "Sports Performance & Conditioning",
                    "Mobility & Injury Rehabilitation",
                    "General Movement Assessment",
                    "Other",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interest.includes(item)}
                        onChange={() => toggleInterest(item)}
                        className="rounded border-slate-300 text-[#3B6B96] focus:ring-[#3B6B96] w-4 h-4"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-msg-input" className="block text-xs font-normal text-slate-600 mb-1.5">
                  Message*
                </label>
                <textarea
                  id="contact-msg-input"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Rachel about your fitness history, pain points, or questions..."
                  className="w-full border border-slate-300 rounded px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#3B6B96]"
                />
              </div>

              {/* Consent Radios */}
              <div>
                <span className="block text-xs font-normal text-slate-600 mb-2">
                  Consent*
                </span>
                <div className="space-y-2 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consent"
                      value="yes"
                      checked={formData.consent === 'yes'}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.value })}
                      className="text-[#3B6B96]"
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
                      className="text-[#3B6B96]"
                    />
                    <span>I do not wish to receive information other than a response to my request above.</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#507C9E] hover:bg-[#416885] text-white px-8 py-3 rounded text-sm font-medium transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {/* Location Block at bottom - Modeled on Screenshot 1.01.45 PM */}
          <div className="mt-20 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-light text-[#3B6B96] mb-3">
              Stoney Creek Studio
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-burntOrange shrink-0" />
                <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province} {siteConfig.postalCode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-burntOrange shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-burntOrange shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
