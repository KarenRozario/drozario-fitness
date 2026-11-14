import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { ChevronDown, Menu, X } from 'lucide-react';

export const EditorialHeader: React.FC = () => {
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [programsAlignRight, setProgramsAlignRight] = useState(false);
  const [learnAlignRight, setLearnAlignRight] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const programsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

  const checkProgramsPos = () => {
    if (programsRef.current && typeof window !== 'undefined') {
      const rect = programsRef.current.getBoundingClientRect();
      setProgramsAlignRight(rect.left + 440 > window.innerWidth - 16);
    }
  };

  const checkLearnPos = () => {
    if (learnRef.current && typeof window !== 'undefined') {
      const rect = learnRef.current.getBoundingClientRect();
      setLearnAlignRight(rect.left + 440 > window.innerWidth - 16);
    }
  };

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
      style={{ top: 'var(--preview-bar-h, 0px)' }}
      className={`sticky z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#1A1714]/15'
          : 'bg-[#FAF7F2] py-4 border-b border-[#1A1714]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Editorial Logo Wordmark */}
          <Link
            to="/"
            className="flex flex-col shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] p-0.5"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="text-[#1A1714] text-2xl sm:text-3xl font-normal tracking-tight font-serif whitespace-nowrap">
              D'Rozario
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#1A1714]/60 font-sans font-medium uppercase -mt-0.5 whitespace-nowrap">
              Fitness
            </span>
          </Link>

          {/* Desktop Navigation Links (>=1280px, strictly non-wrapping) */}
          <nav
            className="hidden xl:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {/* Programs Dropdown (Includes Nutrition) */}
            <div className="relative" ref={programsRef}>
              <button
                type="button"
                onClick={() => {
                  checkProgramsPos();
                  setProgramsDropdownOpen(!programsDropdownOpen);
                }}
                onMouseEnter={() => {
                  checkProgramsPos();
                  setProgramsDropdownOpen(true);
                }}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                  location.pathname.startsWith('/programs') || location.pathname === '/nutrition'
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
                  className={`absolute mt-2 w-max min-w-[320px] max-w-[min(440px,calc(100vw-32px))] bg-[#FAF7F2] border border-[#1A1714]/15 shadow-xl p-3.5 z-50 animate-fade-in ${
                    programsAlignRight ? 'right-0' : 'left-0'
                  }`}
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#1A1714]/50 font-mono border-b border-[#1A1714]/10 mb-2">
                    Life Stage Coaching
                  </div>
                  <div className="space-y-1">
                    {siteConfig.programs.map((prog) => (
                      <Link
                        key={prog.slug}
                        to={`/programs/${prog.slug}`}
                        role="menuitem"
                        className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors group rounded-sm"
                        onClick={() => setProgramsDropdownOpen(false)}
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-mono text-[11px] text-[#1A1714]/50 w-6 shrink-0 pt-0.5 select-none font-medium">
                            {prog.number}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors leading-snug break-words">
                              {prog.title}
                            </div>
                            <div className="text-[11px] text-[#1A1714]/65 normal-case tracking-normal line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                              {prog.shortDescription}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#1A1714]/10 space-y-1">
                    <Link
                      to="/nutrition"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors group rounded-sm"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[11px] text-[#B4532A] w-6 shrink-0 pt-0.5 select-none font-medium">
                          05
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors leading-snug break-words">
                            Nutrition Coaching
                          </div>
                          <div className="text-[11px] text-[#1A1714]/65 normal-case tracking-normal line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                            Nourishing your body through pregnancy, postpartum recovery, and menopause.
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/programs"
                      className="block px-3 py-2 text-[11px] text-[#B4532A] hover:underline font-mono tracking-wider"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      VIEW ALL PROGRAMS →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Find Your Program */}
            <Link
              to="/find-your-program"
              className={`transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/find-your-program')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Find Your Program
            </Link>

            {/* Meet Rachel */}
            <Link
              to="/team"
              className={`transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/team')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Meet Rachel
            </Link>

            {/* Community */}
            <Link
              to="/community"
              className={`transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
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
                onClick={() => {
                  checkLearnPos();
                  setLearnDropdownOpen(!learnDropdownOpen);
                }}
                onMouseEnter={() => {
                  checkLearnPos();
                  setLearnDropdownOpen(true);
                }}
                aria-expanded={learnDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                  isActive('/blog') || isActive('/stories')
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
                  className={`absolute mt-2 w-max min-w-[320px] max-w-[min(440px,calc(100vw-32px))] bg-[#FAF7F2] border border-[#1A1714]/15 shadow-xl p-3.5 z-50 animate-fade-in ${
                    learnAlignRight ? 'right-0' : 'left-0'
                  }`}
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#1A1714]/50 font-mono border-b border-[#1A1714]/10 mb-2">
                    Movement Knowledge
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/blog"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors group rounded-sm"
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors leading-snug break-words">
                        Articles & Insights
                      </div>
                      <div className="text-[11px] text-[#1A1714]/65 normal-case tracking-normal line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                        Evidence-based guides on pelvic floor health and midlife strength training.
                      </div>
                    </Link>
                    <Link
                      to="/stories"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-[#F2ECE3] transition-colors group rounded-sm"
                      onClick={() => setLearnDropdownOpen(false)}
                    >
                      <div className="text-xs font-serif text-[#1A1714] group-hover:text-[#B4532A] transition-colors leading-snug break-words">
                        Client Stories
                      </div>
                      <div className="text-[11px] text-[#1A1714]/65 normal-case tracking-normal line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                        Real fitness and recovery outcomes from our Stoney Creek community.
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`transition-colors py-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isActive('/contact')
                  ? 'text-[#1A1714] font-semibold border-b border-[#1A1714]'
                  : 'text-[#1A1714]/75 hover:text-[#B4532A]'
              }`}
            >
              Contact
            </Link>

            {/* Primary Action Button */}
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="btn-editorial-primary text-[11px] py-2.5 px-5 shrink-0 ml-2 whitespace-nowrap cursor-pointer"
            >
              Book a session
            </a>
          </nav>

          {/* Mobile / Tablet Menu Button (<1280px) */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="btn-editorial-primary text-[10px] py-2 px-3.5 whitespace-nowrap cursor-pointer"
            >
              Book session
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1714] hover:text-[#B4532A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#1A1714]/15 px-4 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-wider font-medium font-mono">
            <div className="py-1">
              <span className="text-[11px] text-[#1A1714]/50 uppercase tracking-widest block mb-2 font-mono">
                Programs & Coaching
              </span>
              <div className="pl-3 space-y-2.5 border-l-2 border-[#1A1714]/15">
                {siteConfig.programs.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/programs/${p.slug}`}
                    className="block text-[#1A1714] hover:text-[#B4532A] text-xs font-serif leading-snug break-words"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-mono text-[10px] text-[#1A1714]/50 mr-2">{p.number}</span>
                    {p.title}
                  </Link>
                ))}
                <Link
                  to="/nutrition"
                  className="block text-[#1A1714] hover:text-[#B4532A] text-xs font-serif leading-snug break-words"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-mono text-[10px] text-[#B4532A] mr-2">05</span>
                  Nutrition Coaching
                </Link>
                <Link
                  to="/programs"
                  className="block text-[#B4532A] text-[11px] font-mono pt-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Programs →
                </Link>
              </div>
            </div>

            <Link
              to="/find-your-program"
              className="text-[#1A1714] hover:text-[#B4532A] py-1 border-t border-[#1A1714]/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Your Program
            </Link>

            <Link
              to="/team"
              className="text-[#1A1714] hover:text-[#B4532A] py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Meet Rachel
            </Link>

            <Link
              to="/community"
              className="text-[#1A1714] hover:text-[#B4532A] py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>

            <div className="py-1">
              <span className="text-[11px] text-[#1A1714]/50 uppercase tracking-widest block mb-1 font-mono">
                Learn
              </span>
              <div className="pl-3 space-y-2 border-l-2 border-[#1A1714]/15">
                <Link
                  to="/blog"
                  className="block text-[#1A1714] hover:text-[#B4532A] text-xs font-serif"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Articles & Insights
                </Link>
                <Link
                  to="/stories"
                  className="block text-[#1A1714] hover:text-[#B4532A] text-xs font-serif"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client Stories
                </Link>
              </div>
            </div>

            <Link
              to="/locations"
              className="text-[#1A1714] hover:text-[#B4532A] py-1 border-t border-[#1A1714]/10 text-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              Studio Locations
            </Link>

            <Link
              to="/contact"
              className="text-[#1A1714] hover:text-[#B4532A] py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="btn-editorial-primary w-full text-center py-3 cursor-pointer"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
