import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { Button } from '../shared/Button';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLearnDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setLearnDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-md border-b border-espresso-border shadow-2xl py-3'
          : 'bg-espresso/90 backdrop-blur-sm border-b border-espresso-border/50 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded p-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-burntOrange block transition-transform group-hover:scale-y-110" />
              <span className="font-display text-2xl sm:text-3xl text-cream tracking-wider uppercase font-bold leading-none">
                {siteConfig.shortName}
              </span>
              <span className="font-display text-sm sm:text-base text-burntOrange tracking-widest uppercase font-semibold">
                Muscle Release
              </span>
            </div>
            <span className="text-[10px] text-cream-dark tracking-widest uppercase pl-4 hidden sm:block">
              Stoney Creek Personal Training & Recovery
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 text-sm uppercase tracking-wider font-medium transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                  location.pathname.startsWith('/services')
                    ? 'text-burntOrange font-semibold'
                    : 'text-cream hover:text-burntOrange'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-burntOrange' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 rounded-md bg-espresso-surface border border-espresso-border shadow-2xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-burntOrange border-b border-espresso-border mb-1">
                    Specialized Disciplines
                  </div>
                  {siteConfig.services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      role="menuitem"
                      className="block px-3 py-2.5 rounded text-sm text-cream hover:text-burntOrange hover:bg-espresso-card transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-medium text-cream">{service.title}</div>
                      <div className="text-xs text-cream-dark line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-espresso-border">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Team */}
            <Link
              to="/team"
              className={`text-sm uppercase tracking-wider font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded py-1 ${
                isActive('/team') ? 'text-burntOrange font-semibold' : 'text-cream hover:text-burntOrange'
              }`}
            >
              Team
            </Link>

            {/* Pain Locator */}
            <Link
              to="/pain-locator"
              className={`text-sm uppercase tracking-wider font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded py-1 flex items-center gap-1 ${
                isActive('/pain-locator')
                  ? 'text-burntOrange font-semibold'
                  : 'text-cream hover:text-burntOrange'
              }`}
            >
              <span>Pain Locator</span>
              <span className="w-1.5 h-1.5 rounded-full bg-burntOrange animate-pulse" />
            </Link>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                type="button"
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                onMouseEnter={() => setLearnDropdownOpen(true)}
                aria-expanded={learnDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 text-sm uppercase tracking-wider font-medium transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                  location.pathname.startsWith('/blog') || location.pathname.startsWith('/stories')
                    ? 'text-burntOrange font-semibold'
                    : 'text-cream hover:text-burntOrange'
                }`}
              >
                <span>Learn</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    learnDropdownOpen ? 'rotate-180 text-burntOrange' : ''
                  }`}
                />
              </button>

              {learnDropdownOpen && (
                <div
                  onMouseLeave={() => setLearnDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 rounded-md bg-espresso-surface border border-espresso-border shadow-2xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  <Link
                    to="/blog"
                    role="menuitem"
                    className="block px-3 py-2 rounded text-sm text-cream hover:text-burntOrange hover:bg-espresso-card transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium">Movement Blog</div>
                    <div className="text-xs text-cream-dark">Science & recovery articles</div>
                  </Link>
                  <Link
                    to="/stories"
                    role="menuitem"
                    className="block px-3 py-2 rounded text-sm text-cream hover:text-burntOrange hover:bg-espresso-card transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium">Client Stories</div>
                    <div className="text-xs text-cream-dark">Case study frameworks</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              to="/locations"
              className={`text-sm uppercase tracking-wider font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded py-1 ${
                isActive('/locations')
                  ? 'text-burntOrange font-semibold'
                  : 'text-cream hover:text-burntOrange'
              }`}
            >
              Locations
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-sm uppercase tracking-wider font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded py-1 ${
                isActive('/contact') ? 'text-burntOrange font-semibold' : 'text-cream hover:text-burntOrange'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary CTA (Links to BOOKING_URL) */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="sm"
              ariaLabel="Book a session at D'Rozario Muscle Release"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              href={BOOKING_URL}
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
              ariaLabel="Book Now"
            >
              Book Now
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream hover:text-burntOrange rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-espresso-surface border-b border-espresso-border px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-mono uppercase text-burntOrange tracking-widest">
              Services
            </div>
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block px-3 py-2 text-sm text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
              >
                {service.title}
              </Link>
            ))}
          </div>

          <div className="border-t border-espresso-border pt-2 space-y-1">
            <Link
              to="/team"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
            >
              Team
            </Link>
            <Link
              to="/pain-locator"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded flex items-center justify-between"
            >
              <span>Pain Locator</span>
              <span className="text-[10px] bg-burntOrange/20 text-burntOrange px-2 py-0.5 rounded font-mono">
                Interactive
              </span>
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
            >
              Learn: Blog
            </Link>
            <Link
              to="/stories"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
            >
              Learn: Client Stories
            </Link>
            <Link
              to="/locations"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
            >
              Locations
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-sm uppercase tracking-wider text-cream hover:text-burntOrange hover:bg-espresso-card rounded"
            >
              Contact
            </Link>
          </div>

          <div className="pt-3 border-t border-espresso-border flex flex-col gap-2">
            <Button href={BOOKING_URL} variant="primary" size="md" className="w-full">
              Book a Session
            </Button>
            <div className="text-center text-xs text-cream-dark pt-1">
              Stoney Creek, ON · {siteConfig.phone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
