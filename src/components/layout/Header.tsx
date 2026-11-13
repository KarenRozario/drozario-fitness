import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { openBooking } = useBooking();
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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-4 border-b border-[#1A1714]/15'
          : 'bg-[#FAF7F2] py-5 border-b border-[#1A1714]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Editorial Logo Wordmark: D'ROZARIO with sub-line FITNESS */}
          <Link
            to="/"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] p-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="text-[#1A1714] text-2xl sm:text-3xl font-normal tracking-tight font-serif">
              D'Rozario
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#1A1714]/60 font-sans font-medium uppercase -mt-0.5">
              Fitness
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium" aria-label="Main Navigation">
            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                type="button"
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                  location.pathname.startsWith('/programs')
                    ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                    : 'text-[#1A1714]/75 hover:text-[#B4532A]'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {programsDropdownOpen && (
                <div
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-72 bg-[#FAF7F2] border border-[#1A1714]/15 shadow-xl p-3 z-50 animate-fade-in"
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#1A1714]/50 font-mono border-b border-[#1A1714]/10 mb-2">
                    Life Stage Coaching
                  </div>
                  {siteConfig.programs.map((prog, idx) => (
                    <Link
                      key={prog.slug}
                      to={`/programs/${prog.slug}`}
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors group"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors">
                        <span className="font-mono text-[10px] text-[#1A1714]/50 mr-2">0{idx + 1}</span>
                        {prog.title}
                      </div>
                      <div className="text-[11px] text-[#1A1714]/60 normal-case tracking-normal line-clamp-1 mt-0.5 font-normal">
                        {prog.shortDescription}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-[#1A1714]/10 space-y-1">
                    <Link
                      to="/nutrition"
                      role="menuitem"
                      className="block px-3 py-2 hover:bg-[#F2ECE3] transition-colors group"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors">
                        Nutrition Coaching
                      </div>
                      <div className="text-[11px] text-[#1A1714]/60 normal-case tracking-normal">
                        Nourishing your body through every stage
                      </div>
                    </Link>
                    <Link
                      to="/programs"
                      className="block px-3 py-1.5 text-[11px] text-[#B4532A] hover:underline font-mono tracking-wider"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      VIEW ALL PROGRAMS →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nutrition */}
            <Link
              to="/nutrition"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/nutrition')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Nutrition
            </Link>

            {/* Meet Rachel */}
            <Link
              to="/team"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/team')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Meet Rachel
            </Link>

            {/* Find Your Program */}
            <Link
              to="/find-your-program"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/find-your-program')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Find Your Program
            </Link>

            {/* Community */}
            <Link
              to="/community"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/community')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
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
                className={`flex items-center gap-1.5 transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                  location.pathname.startsWith('/blog') || location.pathname.startsWith('/stories')
                    ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                    : 'text-[#1A1714]/75 hover:text-[#B4532A]'
                }`}
              >
                <span>Learn</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {learnDropdownOpen && (
                <div
                  onMouseLeave={() => setLearnDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 bg-[#FAF7F2] border border-[#1A1714]/15 shadow-xl p-3 z-50 animate-fade-in"
                  role="menu"
                >
                  <Link
                    to="/blog"
                    role="menuitem"
                    className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="text-xs font-serif text-[#1A1714]">Articles & Insights</div>
                    <div className="text-[11px] text-[#1A1714]/60 normal-case tracking-normal">Life-Stage Movement Guides</div>
                  </Link>
                  <Link
                    to="/stories"
                    role="menuitem"
                    className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors"
                    onClick={() => setLearnDropdownOpen(false)}
                  >
                    <div className="text-xs font-serif text-[#1A1714]">Client Stories</div>
                    <div className="text-[11px] text-[#1A1714]/60 normal-case tracking-normal">Verified Coaching Journeys</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <Link
              to="/locations"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/locations')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Locations
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/contact')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Button: "Book a session" */}
          <div className="hidden lg:flex items-center">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="border border-[#1A1714] bg-[#1A1714] text-[#FAF7F2] hover:bg-[#B4532A] hover:border-[#B4532A] px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Book a session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="border border-[#1A1714] bg-[#1A1714] text-[#FAF7F2] hover:bg-[#B4532A] text-[11px] uppercase tracking-wider px-3 py-1.5 font-medium transition-colors cursor-pointer"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1A1714] hover:text-[#B4532A] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#1A1714]/15 px-6 pt-4 pb-8 space-y-3 text-xs uppercase tracking-widest text-[#1A1714]">
          <div className="py-2 border-b border-[#1A1714]/15 font-mono text-[10px] text-[#1A1714]/50">
            Programs
          </div>
          {siteConfig.programs.map((prog) => (
            <Link
              key={prog.slug}
              to={`/programs/${prog.slug}`}
              className="block pl-3 py-1.5 text-[11px] text-[#1A1714]/70 hover:text-[#B4532A] normal-case tracking-normal font-serif text-sm"
            >
              {prog.title}
            </Link>
          ))}
          <Link to="/nutrition" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Nutrition
          </Link>
          <Link to="/team" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Meet Rachel
          </Link>
          <Link to="/find-your-program" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Find Your Program
          </Link>
          <Link to="/community" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Community
          </Link>
          <Link to="/blog" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Articles & Insights
          </Link>
          <Link to="/stories" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Client Stories
          </Link>
          <Link to="/locations" className="block py-2 border-b border-[#1A1714]/15 hover:text-[#B4532A]">
            Locations
          </Link>
          <Link to="/contact" className="block py-2 hover:text-[#B4532A]">
            Contact Us
          </Link>
          <div className="pt-4">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="block text-center w-full bg-[#1A1714] text-[#FAF7F2] hover:bg-[#B4532A] py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
