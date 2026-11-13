import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const programsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
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
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
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
          ? 'bg-black/95 backdrop-blur-md shadow-lg py-3.5 border-b border-zinc-800'
          : 'bg-black py-4 sm:py-5 border-b border-zinc-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo wordmark: D'ROZARIO with sub-line FITNESS */}
          <Link
            to="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase font-sans">
              D'ROZARIO
            </span>
            <span className="text-[10px] tracking-[0.32em] text-zinc-400 font-medium uppercase -mt-0.5">
              FITNESS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-normal" aria-label="Main Navigation">
            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                type="button"
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                  location.pathname.startsWith('/programs')
                    ? 'text-white font-medium border-b-2 border-white'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {programsDropdownOpen && (
                <div
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-zinc-950 border border-zinc-800 shadow-2xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  {siteConfig.programs.map((prog) => (
                    <Link
                      key={prog.slug}
                      to={`/programs/${prog.slug}`}
                      role="menuitem"
                      className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <div className="font-medium text-white">{prog.title}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{prog.shortDescription}</div>
                    </Link>
                  ))}
                  <div className="pt-1 mt-1 border-t border-zinc-800">
                    <Link
                      to="/programs"
                      className="block px-3 py-1.5 text-[11px] text-zinc-300 hover:text-white hover:underline font-medium"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      All Programs Overview →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Meet Rachel */}
            <Link
              to="/team"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive('/team')
                  ? 'text-white font-medium border-b-2 border-white'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Meet Rachel
            </Link>

            {/* Find Your Program */}
            <Link
              to="/find-your-program"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive('/find-your-program')
                  ? 'text-white font-medium border-b-2 border-white'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Find Your Program
            </Link>

            {/* Community */}
            <Link
              to="/community"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive('/community')
                  ? 'text-white font-medium border-b-2 border-white'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Community
            </Link>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                type="button"
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                onMouseEnter={() => setLearnDropdownOpen(true)}
                aria-expanded={learnDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                  location.pathname.startsWith('/blog') || location.pathname.startsWith('/stories')
                    ? 'text-white font-medium border-b-2 border-white'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>Learn</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {learnDropdownOpen && (
                <div
                  onMouseLeave={() => setLearnDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-52 rounded-md bg-zinc-950 border border-zinc-800 shadow-2xl p-2 z-50 animate-fade-in"
                  role="menu"
                >
                  <Link
                    to="/blog"
                    role="menuitem"
                    className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium text-white">Articles & Insights</div>
                    <div className="text-[11px] text-zinc-400">Life Stage Guidance</div>
                  </Link>
                  <Link
                    to="/stories"
                    role="menuitem"
                    className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="font-medium text-white">Client Stories</div>
                    <div className="text-[11px] text-zinc-400">Movement Case Studies</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              to="/locations"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive('/locations')
                  ? 'text-white font-medium border-b-2 border-white'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Locations
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded ${
                isActive('/contact')
                  ? 'text-white font-medium border-b-2 border-white'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Button: "Book a session" */}
          <div className="hidden lg:flex items-center">
            <a
              href={BOOKING_URL}
              className="border border-white/80 text-white hover:bg-white hover:text-black px-5 py-2 rounded text-sm font-medium transition-all duration-200"
            >
              Book a session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={BOOKING_URL}
              className="border border-white/80 text-white text-xs px-3 py-1.5 rounded font-medium"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-zinc-300 rounded-md focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-4 pt-3 pb-6 space-y-2 text-sm text-zinc-300">
          <div className="py-2 border-b border-zinc-800 font-semibold text-white">Programs</div>
          {siteConfig.programs.map((prog) => (
            <Link
              key={prog.slug}
              to={`/programs/${prog.slug}`}
              className="block pl-3 py-1.5 text-xs text-zinc-400 hover:text-white"
            >
              {prog.title}
            </Link>
          ))}
          <Link to="/team" className="block py-2 border-b border-zinc-800 text-white">
            Meet Rachel
          </Link>
          <Link to="/find-your-program" className="block py-2 border-b border-zinc-800 text-white">
            Find Your Program
          </Link>
          <Link to="/community" className="block py-2 border-b border-zinc-800 text-white">
            Community
          </Link>
          <Link to="/blog" className="block py-2 border-b border-zinc-800 text-white">
            Articles & Insights
          </Link>
          <Link to="/stories" className="block py-2 border-b border-zinc-800 text-white">
            Client Stories
          </Link>
          <Link to="/locations" className="block py-2 border-b border-zinc-800 text-white">
            Locations
          </Link>
          <Link to="/contact" className="block py-2 text-white">
            Contact Us
          </Link>
          <div className="pt-3">
            <a
              href={BOOKING_URL}
              className="block text-center w-full bg-white text-black py-2.5 rounded font-medium text-sm hover:bg-zinc-200 transition-colors"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
