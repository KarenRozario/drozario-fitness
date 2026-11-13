import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLearnDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E242B]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#2C3540]'
          : 'bg-[#1E242B] py-4 sm:py-5 border-b border-[#2C3540]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Modeled on Body + Soul wordmark */}
          <Link
            to="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded p-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase font-sans">
                D'ROZARIO
              </span>
              <span className="text-burntOrange font-black text-lg">+</span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-slate-300 font-medium uppercase -mt-1">
              MUSCLE RELEASE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-normal" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                  location.pathname.startsWith('/services')
                    ? 'text-white font-medium border-b-2 border-burntOrange'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-[#242C35] border border-[#374351] shadow-xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  {siteConfig.services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      role="menuitem"
                      className="block px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-[#2F3A46] rounded transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-medium text-white">{service.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{service.shortDescription}</div>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-[#374351]">
                    <Link
                      to="/services"
                      className="block px-3 py-1.5 text-[11px] text-burntOrange hover:underline font-medium"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      All Services Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Meet Rachel (Single Trainer) */}
            <Link
              to="/team"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                isActive('/team')
                  ? 'text-white font-medium border-b-2 border-burntOrange'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Meet Rachel
            </Link>

            {/* Pain Locator */}
            <Link
              to="/pain-locator"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                isActive('/pain-locator')
                  ? 'text-white font-medium border-b-2 border-burntOrange'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Pain Locator
            </Link>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                type="button"
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                onMouseEnter={() => setLearnDropdownOpen(true)}
                aria-expanded={learnDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                  location.pathname.startsWith('/blog') || location.pathname.startsWith('/stories')
                    ? 'text-white font-medium border-b-2 border-burntOrange'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Learn</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {learnDropdownOpen && (
                <div
                  onMouseLeave={() => setLearnDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-52 rounded-md bg-[#242C35] border border-[#374351] shadow-xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  <Link
                    to="/blog"
                    role="menuitem"
                    className="block px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-[#2F3A46] rounded transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium text-white">Movement Blog</div>
                    <div className="text-[11px] text-slate-400">Biomechanics & Guides</div>
                  </Link>
                  <Link
                    to="/stories"
                    role="menuitem"
                    className="block px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-[#2F3A46] rounded transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium text-white">Success Stories</div>
                    <div className="text-[11px] text-slate-400">Client Case Studies</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              to="/locations"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                isActive('/locations')
                  ? 'text-white font-medium border-b-2 border-burntOrange'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Locations
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded ${
                isActive('/contact')
                  ? 'text-white font-medium border-b-2 border-burntOrange'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Button: "Book a Session" outline button (modeled on "Become a member") */}
          <div className="hidden lg:flex items-center">
            <a
              href={BOOKING_URL}
              className="border border-slate-300 text-white hover:bg-white hover:text-[#1E242B] px-5 py-2 rounded text-sm font-medium transition-all duration-200"
            >
              Book a session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={BOOKING_URL}
              className="border border-slate-300 text-white text-xs px-3 py-1.5 rounded font-medium"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-burntOrange rounded-md focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#242C35] border-t border-[#374351] px-4 pt-3 pb-6 space-y-2 text-sm text-slate-200">
          <div className="py-2 border-b border-[#374351] font-semibold text-white">Services</div>
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="block pl-3 py-1.5 text-xs text-slate-300 hover:text-white"
            >
              {service.title}
            </Link>
          ))}
          <Link to="/team" className="block py-2 border-b border-[#374351] text-white">
            Meet Rachel
          </Link>
          <Link to="/pain-locator" className="block py-2 border-b border-[#374351] text-white">
            Pain Locator
          </Link>
          <Link to="/blog" className="block py-2 border-b border-[#374351] text-white">
            Movement Blog
          </Link>
          <Link to="/stories" className="block py-2 border-b border-[#374351] text-white">
            Success Stories
          </Link>
          <Link to="/locations" className="block py-2 border-b border-[#374351] text-white">
            Locations
          </Link>
          <Link to="/contact" className="block py-2 text-white">
            Contact Us
          </Link>
          <div className="pt-3">
            <a
              href={BOOKING_URL}
              className="block text-center w-full bg-burntOrange text-white py-2.5 rounded font-medium text-sm"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
