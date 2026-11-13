import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso-surface border-t border-espresso-border text-cream-muted pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-burntOrange block" />
              <span className="font-display text-2xl text-cream tracking-wider uppercase font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-burntOrange font-mono">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-cream-muted leading-relaxed max-w-sm">
              Bridging high-intent personal training and hands-on muscle release therapy. Helping Stoney Creek athletes and movers build durable strength and live pain-free.
            </p>

            {/* Social Placeholder Icons */}
            <div className="pt-2">
              <span className="text-xs uppercase font-mono tracking-wider text-cream-dark block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  className="w-9 h-9 rounded-sm bg-espresso-card border border-espresso-border flex items-center justify-center text-cream-muted hover:text-burntOrange hover:border-burntOrange transition-colors"
                  aria-label="Instagram profile placeholder"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  className="w-9 h-9 rounded-sm bg-espresso-card border border-espresso-border flex items-center justify-center text-cream-muted hover:text-burntOrange hover:border-burntOrange transition-colors"
                  aria-label="Facebook page placeholder"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  className="w-9 h-9 rounded-sm bg-espresso-card border border-espresso-border flex items-center justify-center text-cream-muted hover:text-burntOrange hover:border-burntOrange transition-colors"
                  aria-label="LinkedIn profile placeholder"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cream font-bold">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-burntOrange transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/pain-locator"
                  className="text-burntOrange hover:underline text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Pain Locator Tool</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn & Explore Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cream font-bold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/team" className="hover:text-burntOrange transition-colors">
                  Our Team & Founder
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-burntOrange transition-colors">
                  Movement Blog
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-burntOrange transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-burntOrange transition-colors">
                  Studio Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-burntOrange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href={BOOKING_URL} className="text-burntOrange hover:underline font-semibold">
                  Book an Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Block */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cream font-bold">
              Stoney Creek Studio
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-burntOrange shrink-0 mt-0.5" />
                <div>
                  <span className="block text-cream">{siteConfig.address}</span>
                  <span className="text-xs text-cream-dark">
                    {siteConfig.city}, {siteConfig.province}, {siteConfig.country}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-burntOrange shrink-0" />
                <span className="text-cream">{siteConfig.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-burntOrange shrink-0" />
                <span className="text-cream">{siteConfig.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/locations"
                className="text-xs font-mono uppercase tracking-wider text-cream-dark hover:text-burntOrange inline-flex items-center gap-1 transition-colors"
              >
                <span>View Map & Hours</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Canadian Context */}
        <div className="pt-8 mt-8 border-t border-espresso-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-dark">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Stoney Creek, Ontario, Canada</span>
            <span>·</span>
            <span>Independent Fitness & Recovery Centre</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
