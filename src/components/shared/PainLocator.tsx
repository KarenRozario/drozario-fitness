import React, { useState } from 'react';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { Button } from './Button';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PainLocatorProps {
  isTeaser?: boolean;
}

export const PainLocator: React.FC<PainLocatorProps> = ({ isTeaser = false }) => {
  const [currentView, setCurrentView] = useState<'front' | 'back'>('back');
  const [selectedRegionId, setSelectedRegionId] = useState<string>('lower-back');

  const visibleRegions = siteConfig.painRegions.filter(
    (r) => r.view === currentView || r.view === 'both'
  );

  const selectedRegion =
    siteConfig.painRegions.find((r) => r.id === selectedRegionId) ||
    visibleRegions[0] ||
    siteConfig.painRegions[0];

  const handleSelectRegion = (id: string, view?: 'front' | 'back') => {
    setSelectedRegionId(id);
    if (view && view !== currentView) {
      setCurrentView(view);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* View Toggle Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-espresso-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block">
            Interactive Diagnostic Map
          </span>
          <p className="text-sm text-cream-muted">
            Select a body region below or click the diagram to view targeted recovery protocols.
          </p>
        </div>

        <div
          role="group"
          aria-label="Body View Selection"
          className="inline-flex rounded-sm bg-espresso-surface p-1 border border-espresso-border"
        >
          <button
            type="button"
            onClick={() => {
              setCurrentView('front');
              // Auto-select a front region if current isn't in front
              const frontReg = siteConfig.painRegions.find(r => r.view === 'front' || r.view === 'both');
              if (frontReg && selectedRegion.view === 'back') {
                setSelectedRegionId(frontReg.id);
              }
            }}
            aria-pressed={currentView === 'front'}
            className={`px-5 py-2 text-xs font-display tracking-widest uppercase rounded-sm transition-all ${
              currentView === 'front'
                ? 'bg-burntOrange text-cream font-bold shadow'
                : 'text-cream-muted hover:text-cream'
            }`}
          >
            Anterior (Front)
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentView('back');
              // Auto-select a back region if current isn't in back
              const backReg = siteConfig.painRegions.find(r => r.view === 'back' || r.view === 'both');
              if (backReg && selectedRegion.view === 'front') {
                setSelectedRegionId(backReg.id);
              }
            }}
            aria-pressed={currentView === 'back'}
            className={`px-5 py-2 text-xs font-display tracking-widest uppercase rounded-sm transition-all ${
              currentView === 'back'
                ? 'bg-burntOrange text-cream font-bold shadow'
                : 'text-cream-muted hover:text-cream'
            }`}
          >
            Posterior (Back)
          </button>
        </div>
      </div>

      {/* Quick Region Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Pain regions quick select">
        {siteConfig.painRegions.map((region) => {
          const isSelected = selectedRegion.id === region.id;
          return (
            <button
              key={region.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleSelectRegion(region.id, region.view === 'both' ? currentView : region.view)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-burntOrange text-cream ring-2 ring-burntOrange/50 shadow-sm'
                  : 'bg-espresso-card text-cream-muted border border-espresso-border hover:border-burntOrange/40 hover:text-cream'
              }`}
            >
              {region.name}
              <span className="ml-1.5 opacity-60 text-[10px] uppercase">
                ({region.view})
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Stylized Body SVG Map */}
        <div className="lg:col-span-5 bg-espresso-card/80 border border-espresso-border rounded-md p-6 relative flex flex-col items-center shadow-xl">
          <div className="w-full flex items-center justify-between text-xs text-cream-dark uppercase tracking-wider mb-2 font-mono">
            <span>Body Map: {currentView.toUpperCase()} VIEW</span>
            <span>Click any hotspot</span>
          </div>

          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[1/2] mx-auto py-2">
            {/* SVG Anatomical Silhouette */}
            <svg
              viewBox="0 0 200 400"
              className="w-full h-full filter drop-shadow-lg select-none"
              aria-label={`Stylized athletic human body diagram - ${currentView} view`}
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2E201B" />
                  <stop offset="100%" stopColor="#1E1412" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Head & Neck */}
              <circle cx="100" cy="38" r="18" fill="url(#bodyGrad)" stroke="#4A342D" strokeWidth="1.5" />
              <path d="M92 56 L108 56 L112 68 L88 68 Z" fill="url(#bodyGrad)" stroke="#4A342D" strokeWidth="1.5" />

              {/* Torso & Shoulders */}
              <path
                d="M88 68 L50 82 L38 142 L52 144 L60 98 L76 150 L84 210 L116 210 L124 150 L140 98 L148 144 L162 142 L150 82 L112 68 Z"
                fill="url(#bodyGrad)"
                stroke="#4A342D"
                strokeWidth="1.5"
              />

              {/* Forearms & Hands */}
              <path d="M38 142 L30 200 L40 202 L50 144 Z" fill="url(#bodyGrad)" stroke="#4A342D" strokeWidth="1.5" />
              <path d="M162 142 L170 200 L160 202 L150 144 Z" fill="url(#bodyGrad)" stroke="#4A342D" strokeWidth="1.5" />

              {/* Pelvis & Hips */}
              <path d="M84 210 L76 250 L124 250 L116 210 Z" fill="url(#bodyGrad)" stroke="#4A342D" strokeWidth="1.5" />

              {/* Legs */}
              <path
                d="M76 250 L70 320 L72 380 L86 380 L92 320 L96 250 Z"
                fill="url(#bodyGrad)"
                stroke="#4A342D"
                strokeWidth="1.5"
              />
              <path
                d="M124 250 L130 320 L128 380 L114 380 L108 320 L104 250 Z"
                fill="url(#bodyGrad)"
                stroke="#4A342D"
                strokeWidth="1.5"
              />

              {/* Anatomical Contour Guide Lines */}
              <line x1="100" y1="68" x2="100" y2="210" stroke="#3D2A24" strokeDasharray="3 3" strokeWidth="1" />
              {currentView === 'front' ? (
                <>
                  {/* Chest Pec Outline */}
                  <path d="M78 98 Q100 112 122 98" fill="none" stroke="#4A342D" strokeWidth="1" />
                  <line x1="84" y1="120" x2="116" y2="120" stroke="#3D2A24" strokeWidth="1" />
                  {/* Knee caps */}
                  <ellipse cx="80" cy="308" rx="6" ry="7" fill="none" stroke="#4A342D" strokeWidth="1" />
                  <ellipse cx="120" cy="308" rx="6" ry="7" fill="none" stroke="#4A342D" strokeWidth="1" />
                </>
              ) : (
                <>
                  {/* Spine contour & scapulae */}
                  <path d="M72 88 Q88 100 88 120" fill="none" stroke="#4A342D" strokeWidth="1" />
                  <path d="M128 88 Q112 100 112 120" fill="none" stroke="#4A342D" strokeWidth="1" />
                  {/* Glute line */}
                  <path d="M80 236 Q100 248 120 236" fill="none" stroke="#4A342D" strokeWidth="1" />
                  <line x1="100" y1="210" x2="100" y2="246" stroke="#4A342D" strokeWidth="1.5" />
                </>
              )}
            </svg>

            {/* Interactive Hotspot Buttons Placed Directly on the Silhouette */}
            {siteConfig.painRegions.map((region) => {
              const isRelevantView = region.view === currentView || region.view === 'both';
              if (!isRelevantView) return null;

              const isSelected = selectedRegion.id === region.id;

              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select ${region.name} diagnostic information`}
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded-full transition-transform ${
                    isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                  }`}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {/* Pulsing radar ring */}
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-burntOrange' : 'bg-cream/40 group-hover:bg-burntOrange/60'
                      }`}
                    />
                    {/* Inner solid hotspot dot */}
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 ${
                        isSelected
                          ? 'bg-burntOrange border-cream shadow-[0_0_12px_#E07A2E]'
                          : 'bg-espresso border-cream-muted group-hover:border-burntOrange'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-espresso-border w-full flex items-center justify-between text-[11px] text-cream-dark">
            <span>Stoney Creek Biomechanical Screen</span>
            <span className="text-burntOrange font-mono">0.02s Response</span>
          </div>
        </div>

        {/* Right Column: Selected Pain Diagnostic Card */}
        <div className="lg:col-span-7 bg-espresso-surface border border-espresso-border rounded-md p-6 sm:p-8 relative shadow-2xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burntOrange animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono text-burntOrange">
                Active Assessment Zone
              </span>
            </div>
            <span className="text-xs uppercase px-2.5 py-1 rounded bg-espresso-card text-cream-muted border border-espresso-border">
              {selectedRegion.view === 'both' ? 'Anterior & Posterior' : `${selectedRegion.view} aspect`}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-display text-cream tracking-wide mb-6 uppercase">
            {selectedRegion.name}
          </h3>

          <div className="space-y-6">
            {/* Common Causes */}
            <div className="bg-espresso-card/60 p-4 sm:p-5 rounded-md border-l-4 border-amber-600/70 border-y border-r border-espresso-border">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cream mb-1">
                    Common Causes & Biomechanical Triggers
                  </h4>
                  <p className="text-sm text-cream-muted leading-relaxed">
                    {selectedRegion.commonCauses}
                  </p>
                </div>
              </div>
            </div>

            {/* How We Help */}
            <div className="bg-espresso-card/60 p-4 sm:p-5 rounded-md border-l-4 border-burntOrange border-y border-r border-espresso-border">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-burntOrange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cream mb-1">
                    How D'Rozario Restores Movement
                  </h4>
                  <p className="text-sm text-cream-muted leading-relaxed">
                    {selectedRegion.howWeHelp}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Recommendation & CTAs */}
          <div className="mt-8 pt-6 border-t border-espresso-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-cream-dark uppercase tracking-wider block">
                Targeted Program Route
              </span>
              <Link
                to={`/services/${selectedRegion.suggestedServiceSlug}`}
                className="text-sm text-burntOrange hover:underline font-medium inline-flex items-center gap-1 group mt-0.5"
              >
                <span>Explore matched protocol</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Button
              href={BOOKING_URL}
              variant="primary"
              size="md"
              ariaLabel={`Book an assessment for ${selectedRegion.name}`}
            >
              Book an Assessment
            </Button>
          </div>

          {isTeaser && (
            <div className="mt-6 pt-4 text-center border-t border-espresso-border/50">
              <Link
                to="/pain-locator"
                className="text-xs font-mono uppercase tracking-widest text-cream-muted hover:text-burntOrange inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Open Full Interactive Pain Diagnostic Centre</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
