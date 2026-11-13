import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { navigationContent } from '../../content/navigation';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const SoftFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#F6E8E1] text-[#3B2F2A] pt-16 pb-12">
      {/* Wavy Top Divider SVG */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 fill-[#F6E8E1]"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centred Logo & Philosophy */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <Link to="/" className="inline-flex flex-col items-center">
            <span className="font-dm-serif text-3xl text-[#3B2F2A] tracking-tight">
              D'Rozario
            </span>
            <span className="font-dm-sans text-[11px] tracking-[0.25em] text-[#8FA58A] uppercase font-semibold -mt-1">
              Fitness & Movement
            </span>
          </Link>
          <p className="font-dm-sans text-xs sm:text-sm text-[#3B2F2A]/75 leading-relaxed">
            Supportive, expert fitness coaching designed for women across pregnancy, motherhood, and menopause in Stoney Creek, Ontario.
          </p>
        </div>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-dm-sans text-[#3B2F2A]/80">
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#8FA58A]" />
            <span>{siteConfig.address}, {siteConfig.city}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
            <Phone className="w-3.5 h-3.5 text-[#8FA58A]" />
            <span>{siteConfig.phone}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
            <Mail className="w-3.5 h-3.5 text-[#8FA58A]" />
            <span>{siteConfig.email}</span>
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="pt-6 border-t border-[#EEDBD2] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-dm-sans font-medium text-[#3B2F2A]/80">
          {navigationContent.footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="hover:text-[#8FA58A] transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EEDBD2] text-xs font-dm-sans text-[#3B2F2A]/60">
          <p>© {new Date().getFullYear()} D'Rozario Fitness. Nurturing every body with care.</p>
          <div className="flex items-center gap-3">
            <a href={siteConfig.socials.instagram} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B2F2A] hover:text-[#8FA58A] shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={siteConfig.socials.facebook} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B2F2A] hover:text-[#8FA58A] shadow-sm">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={siteConfig.socials.linkedin} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3B2F2A] hover:text-[#8FA58A] shadow-sm">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
