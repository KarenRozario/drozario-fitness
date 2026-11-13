import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A3440] text-slate-300 pt-14 pb-10 border-t border-[#374453]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#3D4C5C]/60 text-sm">
          <div className="space-y-2">
            <div className="flex items-baseline gap-1">
              <span className="text-white text-lg font-bold uppercase font-sans">
                D'ROZARIO
              </span>
              <span className="text-burntOrange font-black">+</span>
            </div>
            <p className="text-xs text-slate-400">
              Stoney Creek Personal Training & Recovery
            </p>
            <p className="text-xs text-slate-400">
              Owner & Head Coach: Rachel D'Rozario
            </p>
          </div>

          <div className="space-y-1 text-xs">
            <span className="text-white font-medium block text-sm mb-2">Location</span>
            <div className="flex items-start gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-burntOrange shrink-0 mt-0.5" />
              <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province}</span>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <span className="text-white font-medium block text-sm mb-2">Direct Contact</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-burntOrange shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Mail className="w-3.5 h-3.5 text-burntOrange shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-white font-medium block text-sm mb-1">Follow Us</span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                className="w-8 h-8 rounded bg-[#374453] hover:bg-burntOrange text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                className="w-8 h-8 rounded bg-[#374453] hover:bg-burntOrange text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                className="w-8 h-8 rounded bg-[#374453] hover:bg-burntOrange text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Links Navigation Row - exact layout from Screenshot 12.58.22 PM */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-normal">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
            <Link to="/team" className="hover:text-white transition-colors">
              Meet Rachel
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/pain-locator" className="hover:text-white transition-colors">
              Pain Locator
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Movement Blog
            </Link>
            <Link to="/stories" className="hover:text-white transition-colors">
              Success Stories
            </Link>
            <Link to="/locations" className="hover:text-white transition-colors">
              Locations
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>

          <div className="text-slate-400 text-xs">
            Stoney Creek, Ontario, Canada
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-[#3D4C5C]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} All rights Reserved by D'Rozario Muscle Release</p>
          <p>Personal Training & Targeted Muscle Release Therapy · Stoney Creek</p>
        </div>
      </div>
    </footer>
  );
};
