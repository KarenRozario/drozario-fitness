import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, CheckCircle2, Shield } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    
    // TODO: Connect this newsletter subscription to your production CRM / email service endpoint
    // e.g. fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    // In production, integrate with Nexus / Mailchimp / ConvertKit API endpoint here.
    
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#1A222C] border border-slate-700/60 rounded-2xl p-8 sm:p-12 relative overflow-hidden text-white">
      {/* Decorative accent background blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-burntOrange/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#232D3A] border border-slate-700 text-burntOrange mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-3">
          Join the D'Rozario Fitness Community
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto font-light">
          Get practical guidance on life-stage fitness, core and pelvic floor awareness, and women's strength training straight from Rachel D'Rozario. No spam, just encouraging, science-backed guidance.
        </p>

        {submitted ? (
          <div className="bg-[#232D3A] border border-burntOrange/40 rounded-xl p-6 animate-fade-in flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-burntOrange mb-3" />
            <h3 className="text-xl font-light text-white mb-1">
              Thank You for Subscribing!
            </h3>
            <p className="text-sm text-slate-300 max-w-md">
              We've noted your email ({email}). You'll receive our next monthly update on women's fitness, maternal health, and lifelong strength.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
              }}
              className="mt-4 text-xs font-mono text-burntOrange hover:underline uppercase tracking-wider"
            >
              Sign up with another address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-[#232D3A] text-white placeholder-slate-400 px-4 py-3.5 rounded-lg border border-slate-700 focus:border-burntOrange focus:outline-none focus:ring-1 focus:ring-burntOrange text-sm transition-colors"
              />
            </div>
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-xs text-red-400 font-medium" role="alert">
            {error}
          </p>
        )}

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Shield className="w-3.5 h-3.5 text-burntOrange/70" />
          <span>Zero spam. Unsubscribe at any time. We respect your privacy.</span>
        </div>
      </div>
    </div>
  );
};
