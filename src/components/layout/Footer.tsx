import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900 text-sm">
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold tracking-wider uppercase font-sans">
                D'ROZARIO
              </span>
              <span className="text-[10px] tracking-[0.32em] text-zinc-500 font-medium uppercase -mt-0.5">
                FITNESS
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light">
              Stoney Creek Women's Fitness Coaching
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Founder & Coach: Rachel D'Rozario
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="text-white font-medium block text-sm mb-3 font-mono uppercase tracking-wider">Location</span>
            <div className="flex items-start gap-2 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
              <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <span className="text-white font-medium block text-sm mb-3 font-mono uppercase tracking-wider">Direct Contact</span>
            <div className="flex items-center gap-2 text-zinc-400">
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Mail className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-white font-medium block text-sm mb-2 font-mono uppercase tracking-wider">Follow Us</span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors border border-zinc-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-normal">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-400">
            <Link to="/team" className="hover:text-white transition-colors">
              Meet Rachel
            </Link>
            <Link to="/programs" className="hover:text-white transition-colors">
              Programs
            </Link>
            <Link to="/find-your-program" className="hover:text-white transition-colors">
              Find Your Program
            </Link>
            <Link to="/community" className="hover:text-white transition-colors">
              Community
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Articles & Insights
            </Link>
            <Link to="/stories" className="hover:text-white transition-colors">
              Client Stories
            </Link>
            <Link to="/locations" className="hover:text-white transition-colors">
              Locations
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="text-zinc-500 text-xs font-mono">
            Stoney Creek, Ontario, Canada
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2 font-mono">
          <p>© {new Date().getFullYear()} All rights Reserved by D'Rozario Fitness</p>
          <p>Women's Prenatal, Postnatal, Menopause & Longevity Coaching · Stoney Creek</p>
        </div>
      </div>
    </footer>
  );
};
