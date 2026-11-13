import React, { useState } from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceInterest: 'general',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');

    // TODO: Connect this contact form to your production endpoint / API handler
    // e.g. fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // In production, integrate with Nexus / CRM / Email backend here.

    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Rachel D'Rozario | Stoney Creek Studio"
        description="Get in touch with Rachel D'Rozario at D'Rozario Muscle Release in Stoney Creek, Ontario. Inquiries, bookings, and movement consultations."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Direct Communication
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Have questions about an old injury, a chronic pain point, or which service is right for you? Send a message directly to Rachel D'Rozario or book your assessment online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-espresso-card p-8 sm:p-10 rounded-lg border border-espresso-border shadow-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-2">
                Send a Message
              </span>
              <h2 className="text-3xl font-display text-cream uppercase mb-6">
                Tell Us About Your Goals
              </h2>

              {submitted ? (
                <div className="bg-espresso p-8 rounded-md border border-burntOrange/50 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-burntOrange/20 border border-burntOrange text-burntOrange flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display text-cream uppercase">
                    Message Received
                  </h3>
                  <p className="text-sm text-cream-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-cream">{formData.name}</strong>. Rachel will review your inquiry and follow up at <strong className="text-cream">{formData.email}</strong> within 1 business day.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          message: '',
                          serviceInterest: 'general',
                        });
                      }}
                      className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                      Full Name <span className="text-burntOrange">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-espresso text-cream placeholder-cream-dark px-4 py-3 rounded-sm border border-espresso-border focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors"
                    />
                  </div>

                  {/* Email & Phone fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                        Email Address <span className="text-burntOrange">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className="w-full bg-espresso text-cream placeholder-cream-dark px-4 py-3 rounded-sm border border-espresso-border focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (905) 555-0123"
                        className="w-full bg-espresso text-cream placeholder-cream-dark px-4 py-3 rounded-sm border border-espresso-border focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                      Area of Primary Interest
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full bg-espresso text-cream px-4 py-3 rounded-sm border border-espresso-border focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors"
                    >
                      <option value="general">General Assessment & Movement Screening</option>
                      <option value="personal-training">1-on-1 Personal Training</option>
                      <option value="muscle-release">Muscle Release & Recovery Therapy</option>
                      <option value="sports-performance">Sports Performance & Speed/Power</option>
                      <option value="mobility">Mobility & Injury Prevention</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-cream-muted mb-1.5">
                      How Can We Help You? <span className="text-burntOrange">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your pain points, training history, or what you hope to achieve..."
                      className="w-full bg-espresso text-cream placeholder-cream-dark px-4 py-3 rounded-sm border border-espresso-border focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-400 font-medium" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Your Message
                      </span>
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-espresso-card p-6 sm:p-8 rounded-lg border border-espresso-border space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block">
                  Studio Contact Information
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-espresso border border-espresso-border text-burntOrange shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-cream-dark block">
                        Studio Address
                      </span>
                      <p className="text-sm text-cream font-medium mt-0.5">
                        {siteConfig.address}
                      </p>
                      <p className="text-xs text-cream-muted">
                        {siteConfig.city}, {siteConfig.province}, {siteConfig.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-espresso border border-espresso-border text-burntOrange shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-cream-dark block">
                        Telephone
                      </span>
                      <p className="text-sm text-cream font-medium mt-0.5">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-espresso border border-espresso-border text-burntOrange shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-cream-dark block">
                        Email Address
                      </span>
                      <p className="text-sm text-cream font-medium mt-0.5">
                        {siteConfig.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-espresso-border space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-cream-dark block">
                    Fastest Booking Method
                  </span>
                  <p className="text-xs text-cream-muted leading-relaxed">
                    Prefer immediate booking? Reserve your diagnostic assessment online in just a few clicks.
                  </p>
                  <Button href={BOOKING_URL} variant="primary" size="md" className="w-full">
                    Launch Booking Portal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
