import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { navigationContent } from '../../content/navigation';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const ModernFooter: React.FC = () => {
  return (
    <footer className="bg-[#2E1A47] text-white pt-20 pb-10 border-t-4 border-[#FF6B4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          <div className="space-y-4">
            <span className="font-archivo font-black text-3xl tracking-tighter uppercase text-white">
              D'ROZARIO<span className="text-[#FF6B4A]">.</span>
            </span>
            <p className="font-manrope text-xs text-white/75 font-medium leading-relaxed">
              Personalised women's strength coaching in Stoney Creek, Ontario. Coached by Rachel D'Rozario.
            </p>
          </div>

          <div className="space-y-3 text-xs font-manrope">
            <span className="font-archivo font-black uppercase tracking-wider text-[#FF6B4A] block mb-2">
              Studio Location
            </span>
            <div className="flex items-start gap-2.5 text-white/80">
              <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
              <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.province}</span>
            </div>
            <p className="text-[11px] text-white/50">{siteConfig.region}</p>
          </div>

          <div className="space-y-3 text-xs font-manrope">
            <span className="font-archivo font-black uppercase tracking-wider text-[#FF6B4A] block mb-2">
              Get in Touch
            </span>
            <div className="flex items-center gap-2.5 text-white/80">
              <Phone className="w-4 h-4 text-[#FF6B4A] shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-white/80">
              <Mail className="w-4 h-4 text-[#FF6B4A] shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="font-archivo font-black uppercase tracking-wider text-[#FF6B4A] block mb-2 text-xs">
              Social Community
            </span>
            <div className="flex items-center gap-3">
              <a href={siteConfig.socials.instagram} className="w-9 h-9 border border-white/20 hover:border-[#FF6B4A] hover:bg-[#FF6B4A] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.facebook} className="w-9 h-9 border border-white/20 hover:border-[#FF6B4A] hover:bg-[#FF6B4A] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.linkedin} className="w-9 h-9 border border-white/20 hover:border-[#FF6B4A] hover:bg-[#FF6B4A] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="font-manrope text-xs text-white/60">{siteConfig.socials.handle}</p>
          </div>
        </div>

        {/* Navigation Link Row (Including Locations and Contact) */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-archivo font-black uppercase tracking-wider">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/80">
            {navigationContent.footerLinks.map((link) => (
              <Link key={link.href} to={link.href} className="hover:text-[#FF6B4A] transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-[11px] font-manrope text-white/50 normal-case">
            Safe, progressive strength coaching designed for women.
          </div>
        </div>

        {/* GIANT OUTLINED "D'ROZARIO" WORDMARK ACROSS THE BOTTOM */}
        <div className="pt-8 select-none pointer-events-none">
          <div className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)] text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px] font-archivo font-black uppercase text-center tracking-tighter leading-none whitespace-nowrap overflow-hidden">
            D'ROZARIO
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs font-manrope text-white/40 pt-4 border-t border-white/10">
          © {new Date().getFullYear()} D'Rozario Fitness. All rights reserved. Stoney Creek, Ontario, Canada.
        </div>
      </div>
    </footer>
  );
};
