import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { useBooking } from '../../context/BookingContext';
import { ChevronDown, Menu, X } from 'lucide-react';

export const ModernHeader: React.FC = () => {
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [programsAlignRight, setProgramsAlignRight] = useState(false);
  const [learnAlignRight, setLearnAlignRight] = useState(true);

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
    setProgramsOpen(false);
    setLearnOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
      if (learnRef.current && !learnRef.current.contains(e.target as Node)) {
        setLearnOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      style={{ top: 'var(--preview-bar-h, 0px)' }}
      className="sticky z-50 w-full bg-[#2E1A47] text-white border-b border-[#2E1A47] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* White Logo Left */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="font-archivo font-black text-2xl sm:text-3xl tracking-tighter text-white uppercase whitespace-nowrap">
              D'ROZARIO<span className="text-[#FF6B4A]">.</span>
            </span>
          </Link>

          {/* Menu Right (>= 1280px, strictly non-wrapping) */}
          <nav
            className="hidden xl:flex items-center gap-7 font-manrope font-bold text-xs uppercase tracking-wider text-white/85 whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                type="button"
                onClick={() => {
                  checkProgramsPos();
                  setProgramsOpen(!programsOpen);
                }}
                onMouseEnter={() => {
                  checkProgramsPos();
                  setProgramsOpen(true);
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap ${
                  location.pathname.startsWith('/programs') || location.pathname === '/nutrition'
                    ? 'text-[#FF6B4A] font-extrabold'
                    : 'text-white/85 hover:text-[#FF6B4A]'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {programsOpen && (
                <div
                  onMouseLeave={() => setProgramsOpen(false)}
                  className={`absolute mt-2 w-max min-w-[320px] max-w-[min(440px,calc(100vw-32px))] bg-[#2E1A47] border-2 border-white/20 shadow-2xl p-3.5 z-50 animate-fade-in ${
                    programsAlignRight ? 'right-0' : 'left-0'
                  }`}
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] tracking-widest uppercase text-[#FF6B4A] font-archivo font-black border-b border-white/10 mb-2">
                    PROGRAM TRACKS
                  </div>
                  <div className="space-y-1">
                    {siteConfig.programs.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/programs/${p.slug}`}
                        role="menuitem"
                        className="block px-3 py-2.5 hover:bg-white/10 transition-colors group"
                        onClick={() => setProgramsOpen(false)}
                      >
                        <div className="flex items-start gap-3">
                          <span className="font-archivo font-black text-xs text-[#FF6B4A] w-6 shrink-0 pt-0.5 select-none">
                            {p.number}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs text-white group-hover:text-[#FF6B4A] font-archivo font-black uppercase tracking-tight transition-colors leading-snug break-words">
                              {p.title}
                            </div>
                            <div className="text-[11px] text-white/70 normal-case tracking-normal font-manrope line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                              {p.shortDescription}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 mt-2 border-t border-white/10 space-y-1">
                    <Link
                      to="/nutrition"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-white/10 transition-colors group"
                      onClick={() => setProgramsOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-archivo font-black text-xs text-[#FF6B4A] w-6 shrink-0 pt-0.5 select-none">
                          05
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-[#FF6B4A] group-hover:text-white font-archivo font-black uppercase tracking-tight transition-colors leading-snug break-words">
                            Nutrition Coaching
                          </div>
                          <div className="text-[11px] text-white/70 normal-case tracking-normal font-manrope line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                            Nourish every stage with realistic, evidence-informed guidance.
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/programs"
                      className="block px-3 py-2 text-xs text-[#FF6B4A] hover:underline font-archivo font-black uppercase tracking-wider"
                      onClick={() => setProgramsOpen(false)}
                    >
                      VIEW ALL PROGRAMS →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/find-your-program"
              className={`py-2 transition-colors whitespace-nowrap ${
                isActive('/find-your-program') ? 'text-[#FF6B4A]' : 'hover:text-[#FF6B4A]'
              }`}
            >
              Find Your Program
            </Link>

            <Link
              to="/team"
              className={`py-2 transition-colors whitespace-nowrap ${
                isActive('/team') ? 'text-[#FF6B4A]' : 'hover:text-[#FF6B4A]'
              }`}
            >
              Meet Rachel
            </Link>

            <Link
              to="/community"
              className={`py-2 transition-colors whitespace-nowrap ${
                isActive('/community') ? 'text-[#FF6B4A]' : 'hover:text-[#FF6B4A]'
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
                  setLearnOpen(!learnOpen);
                }}
                onMouseEnter={() => {
                  checkLearnPos();
                  setLearnOpen(true);
                }}
                className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap ${
                  isActive('/blog') || isActive('/stories') ? 'text-[#FF6B4A]' : 'hover:text-[#FF6B4A]'
                }`}
              >
                <span>Learn</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {learnOpen && (
                <div
                  onMouseLeave={() => setLearnOpen(false)}
                  className={`absolute mt-2 w-max min-w-[320px] max-w-[min(440px,calc(100vw-32px))] bg-[#2E1A47] border-2 border-white/20 shadow-2xl p-3.5 z-50 animate-fade-in ${
                    learnAlignRight ? 'right-0' : 'left-0'
                  }`}
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[10px] tracking-widest uppercase text-[#FF6B4A] font-archivo font-black border-b border-white/10 mb-2">
                    INSIGHTS & EVIDENCE
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/blog"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-white/10 transition-colors group"
                      onClick={() => setLearnOpen(false)}
                    >
                      <div className="text-xs text-white group-hover:text-[#FF6B4A] font-archivo font-black uppercase tracking-tight transition-colors leading-snug break-words">
                        Articles & Insights
                      </div>
                      <div className="text-[11px] text-white/70 normal-case tracking-normal font-manrope line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                        Research-backed articles on maternal core health and strength training.
                      </div>
                    </Link>
                    <Link
                      to="/stories"
                      role="menuitem"
                      className="block px-3 py-2.5 hover:bg-white/10 transition-colors group"
                      onClick={() => setLearnOpen(false)}
                    >
                      <div className="text-xs text-white group-hover:text-[#FF6B4A] font-archivo font-black uppercase tracking-tight transition-colors leading-snug break-words">
                        Client Stories
                      </div>
                      <div className="text-[11px] text-white/70 normal-case tracking-normal font-manrope line-clamp-2 mt-1 font-normal leading-relaxed break-words">
                        Real outcomes and verified member journeys across Stoney Creek.
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`py-2 transition-colors whitespace-nowrap ${
                isActive('/contact') ? 'text-[#FF6B4A]' : 'hover:text-[#FF6B4A]'
              }`}
            >
              Contact
            </Link>

            {/* Coral Square "Book a session" button */}
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="bg-[#FF6B4A] hover:bg-[#E55A3A] text-white px-6 py-3 font-archivo font-black uppercase text-xs tracking-widest transition-colors rounded-none shadow-md ml-2 whitespace-nowrap cursor-pointer"
            >
              Book a session
            </a>
          </nav>

          {/* Mobile / Tablet View (<1280px) */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="bg-[#FF6B4A] text-white text-xs font-archivo font-bold px-4 py-2 uppercase whitespace-nowrap cursor-pointer"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#FF6B4A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#241438] border-b border-white/20 px-6 py-8 space-y-4 shadow-2xl">
          <div className="space-y-3 font-archivo font-bold text-xs uppercase tracking-wider text-white">
            <div className="pb-3 border-b border-white/10">
              <span className="text-[#FF6B4A] text-[11px] block mb-2 font-black tracking-widest">
                PROGRAMS
              </span>
              <div className="pl-3 space-y-2.5">
                {siteConfig.programs.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/programs/${p.slug}`}
                    className="block text-white/90 hover:text-[#FF6B4A] leading-snug break-words"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-[#FF6B4A] mr-2">{p.number}</span>
                    {p.title}
                  </Link>
                ))}
                <Link
                  to="/nutrition"
                  className="block text-[#FF6B4A] hover:text-white leading-snug break-words"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-white/60 mr-2">05</span>
                  Nutrition Coaching →
                </Link>
              </div>
            </div>

            <Link to="/find-your-program" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Find Your Program
            </Link>
            <Link to="/team" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Meet Rachel
            </Link>
            <Link to="/community" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Community
            </Link>
            <Link to="/blog" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Articles & Insights
            </Link>
            <Link to="/stories" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Client Stories
            </Link>
            <Link to="/locations" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
              Locations
            </Link>
            <Link to="/contact" className="block py-1 text-white/90 hover:text-[#FF6B4A]" onClick={() => setMobileMenuOpen(false)}>
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
              className="w-full block text-center bg-[#FF6B4A] hover:bg-[#2E1A47] text-white py-3.5 font-archivo font-black uppercase text-xs tracking-widest rounded-none shadow cursor-pointer transition-colors"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

