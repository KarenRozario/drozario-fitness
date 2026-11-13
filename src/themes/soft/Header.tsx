import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { ChevronDown, Menu, X } from 'lucide-react';

export const SoftHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  const location = useLocation();
  const programsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

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
      className="sticky z-50 w-full bg-[#FFFBF8]/95 backdrop-blur-md border-b border-[#F6E8E1] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop View (>= 1280px): Centred logo above centred menu row */}
        <div className="hidden xl:flex flex-col items-center">
          {/* Centred Logo */}
          <Link
            to="/"
            className="flex flex-col items-center group py-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="font-dm-serif text-3xl text-[#3B2F2A] tracking-tight hover:text-[#8FA58A] transition-colors whitespace-nowrap">
              D'Rozario
            </span>
            <span className="font-dm-sans text-[11px] tracking-[0.25em] text-[#8FA58A] uppercase font-semibold -mt-1 whitespace-nowrap">
              Fitness & Movement
            </span>
          </Link>

          {/* Centred Menu Row (Title Case, non-wrapping) */}
          <nav
            className="flex items-center gap-8 pt-2 pb-1 font-dm-sans text-sm text-[#3B2F2A] font-medium whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                onMouseEnter={() => setProgramsOpen(true)}
                className={`flex items-center gap-1.5 py-1.5 transition-colors whitespace-nowrap ${
                  location.pathname.startsWith('/programs') || location.pathname === '/nutrition'
                    ? 'text-[#8FA58A] font-semibold'
                    : 'text-[#3B2F2A] hover:text-[#8FA58A]'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className="w-4 h-4 opacity-60" />
              </button>

              {programsOpen && (
                <div
                  onMouseLeave={() => setProgramsOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#FFFBF8] border border-[#F6E8E1] rounded-2xl shadow-xl p-3 z-50"
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[11px] tracking-wider uppercase text-[#8FA58A] font-semibold border-b border-[#F6E8E1] mb-1">
                    Life Stage Programs
                  </div>
                  {siteConfig.programs.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/programs/${p.slug}`}
                      className="block px-3 py-2 rounded-xl hover:bg-[#F6E8E1] transition-colors text-xs text-[#3B2F2A] font-medium"
                      onClick={() => setProgramsOpen(false)}
                    >
                      {p.title}
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-[#F6E8E1]">
                    <Link
                      to="/nutrition"
                      className="block px-3 py-2 rounded-xl hover:bg-[#F6E8E1] transition-colors text-xs text-[#3B2F2A] font-medium"
                      onClick={() => setProgramsOpen(false)}
                    >
                      Nutrition Coaching
                    </Link>
                    <Link
                      to="/programs"
                      className="block px-3 py-1.5 text-[11px] text-[#8FA58A] font-semibold hover:underline"
                      onClick={() => setProgramsOpen(false)}
                    >
                      View All Programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/find-your-program"
              className={`py-1.5 transition-colors whitespace-nowrap ${
                isActive('/find-your-program') ? 'text-[#8FA58A] font-semibold' : 'text-[#3B2F2A] hover:text-[#8FA58A]'
              }`}
            >
              Find Your Program
            </Link>

            <Link
              to="/team"
              className={`py-1.5 transition-colors whitespace-nowrap ${
                isActive('/team') ? 'text-[#8FA58A] font-semibold' : 'text-[#3B2F2A] hover:text-[#8FA58A]'
              }`}
            >
              Meet Rachel
            </Link>

            <Link
              to="/community"
              className={`py-1.5 transition-colors whitespace-nowrap ${
                isActive('/community') ? 'text-[#8FA58A] font-semibold' : 'text-[#3B2F2A] hover:text-[#8FA58A]'
              }`}
            >
              Community
            </Link>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                type="button"
                onClick={() => setLearnOpen(!learnOpen)}
                onMouseEnter={() => setLearnOpen(true)}
                className={`flex items-center gap-1.5 py-1.5 transition-colors whitespace-nowrap ${
                  isActive('/blog') || isActive('/stories')
                    ? 'text-[#8FA58A] font-semibold'
                    : 'text-[#3B2F2A] hover:text-[#8FA58A]'
                }`}
              >
                <span>Learn</span>
                <ChevronDown className="w-4 h-4 opacity-60" />
              </button>

              {learnOpen && (
                <div
                  onMouseLeave={() => setLearnOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#FFFBF8] border border-[#F6E8E1] rounded-2xl shadow-xl p-2 z-50"
                  role="menu"
                >
                  <Link
                    to="/blog"
                    className="block px-3 py-2 rounded-xl text-xs text-[#3B2F2A] hover:bg-[#F6E8E1] font-medium"
                    onClick={() => setLearnOpen(false)}
                  >
                    Articles & Insights
                  </Link>
                  <Link
                    to="/stories"
                    className="block px-3 py-2 rounded-xl text-xs text-[#3B2F2A] hover:bg-[#F6E8E1] font-medium"
                    onClick={() => setLearnOpen(false)}
                  >
                    Client Stories
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`py-1.5 transition-colors whitespace-nowrap ${
                isActive('/contact') ? 'text-[#8FA58A] font-semibold' : 'text-[#3B2F2A] hover:text-[#8FA58A]'
              }`}
            >
              Contact
            </Link>

            {/* Pill "Book a session" button */}
            <a
              href={BOOKING_URL}
              className="ml-2 rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-[#FFFBF8] px-6 py-2.5 text-xs font-semibold tracking-wide transition-all shadow-sm whitespace-nowrap"
            >
              Book a session
            </a>
          </nav>
        </div>

        {/* Mobile / Tablet Header (< 1280px) */}
        <div className="flex xl:hidden items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="font-dm-serif text-2xl text-[#3B2F2A]">D'Rozario</span>
            <span className="font-dm-sans text-[10px] tracking-widest text-[#8FA58A] uppercase font-semibold -mt-1">
              Fitness
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              className="rounded-full bg-[#3B2F2A] text-[#FFFBF8] text-xs px-4 py-2 font-medium whitespace-nowrap"
            >
              Book
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3B2F2A] hover:text-[#8FA58A]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFBF8] border-b border-[#F6E8E1] px-5 py-6 space-y-4 shadow-xl">
          <div className="space-y-3 font-dm-sans text-sm text-[#3B2F2A]">
            <div className="pb-2 border-b border-[#F6E8E1]">
              <span className="text-xs font-semibold text-[#8FA58A] uppercase tracking-wider block mb-2">
                Programs
              </span>
              <div className="pl-3 space-y-2">
                {siteConfig.programs.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/programs/${p.slug}`}
                    className="block text-xs text-[#3B2F2A]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {p.title}
                  </Link>
                ))}
                <Link
                  to="/nutrition"
                  className="block text-xs text-[#3B2F2A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nutrition Coaching
                </Link>
              </div>
            </div>

            <Link to="/find-your-program" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Find Your Program
            </Link>
            <Link to="/team" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Meet Rachel
            </Link>
            <Link to="/community" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Community
            </Link>
            <Link to="/blog" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Articles & Insights
            </Link>
            <Link to="/stories" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Client Stories
            </Link>
            <Link to="/locations" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Studio Locations
            </Link>
            <Link to="/contact" className="block py-1" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <a
              href={BOOKING_URL}
              className="w-full block text-center rounded-full bg-[#3B2F2A] text-white py-3 text-sm font-semibold shadow"
            >
              Book a session
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
