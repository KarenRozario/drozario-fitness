import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1714] text-[#FAF7F2]/80 pt-20 pb-14 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-[#FAF7F2]/10 text-sm">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[#FAF7F2] text-2xl font-serif tracking-tight">
                D'Rozario
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#FAF7F2]/50 font-sans font-medium uppercase -mt-0.5">
                Fitness
              </span>
            </div>
            <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
              Personalised women's strength coaching in Stoney Creek, Ontario.
            </p>
            <p className="text-xs text-[#FAF7F2]/50 font-mono tracking-wider">
              Founder & Coach: Rachel D'Rozario
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <span className="text-[#FAF7F2] font-medium block text-xs font-mono uppercase tracking-[0.2em] mb-4">Location</span>
            <div className="flex items-start gap-2.5 text-[#FAF7F2]/75">
              <MapPin className="w-3.5 h-3.5 text-[#B4532A] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{siteConfig.address}, {siteConfig.city}, {siteConfig.province}</span>
            </div>
            <p className="text-[11px] text-[#FAF7F2]/50 font-mono pt-1">
              Hamilton & Stoney Creek Region
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <span className="text-[#FAF7F2] font-medium block text-xs font-mono uppercase tracking-[0.2em] mb-4">Direct Contact</span>
            <div className="flex items-center gap-2.5 text-[#FAF7F2]/75">
              <Phone className="w-3.5 h-3.5 text-[#B4532A] shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#FAF7F2]/75">
              <Mail className="w-3.5 h-3.5 text-[#B4532A] shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
            <p className="text-[11px] text-[#FAF7F2]/50 font-mono pt-1">
              Private consultations by appointment
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[#FAF7F2] font-medium block text-xs font-mono uppercase tracking-[0.2em] mb-4">Follow Us</span>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                className="w-10 h-10 border border-[#FAF7F2]/20 hover:border-[#B4532A] hover:bg-[#B4532A] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                className="w-10 h-10 border border-[#FAF7F2]/20 hover:border-[#B4532A] hover:bg-[#B4532A] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                className="w-10 h-10 border border-[#FAF7F2]/20 hover:border-[#B4532A] hover:bg-[#B4532A] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#FAF7F2]/50 font-mono">
              @drozariofitness
            </p>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="pt-10 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.15em] font-medium">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[#FAF7F2]/60">
            <Link to="/programs" className="hover:text-[#FAF7F2] transition-colors">
              Programs
            </Link>
            <Link to="/nutrition" className="hover:text-[#FAF7F2] transition-colors">
              Nutrition
            </Link>
            <Link to="/team" className="hover:text-[#FAF7F2] transition-colors">
              Meet Rachel
            </Link>
            <Link to="/find-your-program" className="hover:text-[#FAF7F2] transition-colors">
              Find Your Program
            </Link>
            <Link to="/community" className="hover:text-[#FAF7F2] transition-colors">
              Community
            </Link>
            <Link to="/blog" className="hover:text-[#FAF7F2] transition-colors">
              Articles & Insights
            </Link>
            <Link to="/stories" className="hover:text-[#FAF7F2] transition-colors">
              Client Stories
            </Link>
            <Link to="/locations" className="hover:text-[#FAF7F2] transition-colors">
              Locations
            </Link>
            <Link to="/contact" className="hover:text-[#FAF7F2] transition-colors">
              Contact
            </Link>
          </div>

          <div className="text-[11px] font-mono tracking-widest text-[#FAF7F2]/40 normal-case">
            STONEY CREEK · ONTARIO · CANADA
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAF7F2]/40 font-mono">
          <p>© {new Date().getFullYear()} D'Rozario Fitness. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-md">
            Safe, progressive strength coaching designed for women across pregnancy, motherhood, and menopause.
          </p>
        </div>
      </div>
    </footer>
  );
};
