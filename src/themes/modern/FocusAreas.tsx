import React, { useState } from 'react';
import { focusAreasContent } from '../../content/focusAreas';

export const ModernFocusAreas: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const areas = focusAreasContent.areas;
  const currentArea = areas[activeTab];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      const next = (index + 1) % areas.length;
      setActiveTab(next);
    } else if (e.key === 'ArrowLeft') {
      const prev = (index - 1 + areas.length) % areas.length;
      setActiveTab(prev);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F1ECF8] border-b-2 border-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block">
            {focusAreasContent.kicker}
          </span>
          <h2 className="font-archivo font-black text-4xl sm:text-6xl text-[#2E1A47] tracking-tight uppercase">
            {focusAreasContent.headline}
          </h2>
          <p className="font-manrope text-base text-[#2E1A47]/80">
            {focusAreasContent.subhead}
          </p>
        </div>

        {/* Horizontal Tabs: 01–04 (keyboard accessible) */}
        <div
          role="tablist"
          aria-label="Core Focus Areas"
          className="flex flex-wrap border-2 border-[#2E1A47] bg-[#2E1A47]"
        >
          {areas.map((area, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={area.id}
                role="tab"
                id={`tab-${area.id}`}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${area.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex-1 min-w-[140px] py-4 px-6 text-center font-archivo font-black text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#FF6B4A] text-white'
                    : 'bg-[#2E1A47] text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{area.number} · {area.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Box */}
        <div
          role="tabpanel"
          id={`tabpanel-${currentArea.id}`}
          aria-labelledby={`tab-${currentArea.id}`}
          className="bg-white border-2 border-[#2E1A47] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
              Pillar {currentArea.number}
            </span>
            <h3 className="font-archivo font-black text-3xl sm:text-4xl text-[#2E1A47] uppercase tracking-tight">
              {currentArea.title}
            </h3>
            <p className="font-manrope text-base text-[#2E1A47]/80 leading-relaxed">
              {currentArea.description}
            </p>

            <div className="pt-2">
              <span className="font-archivo font-bold text-xs uppercase tracking-wider text-[#2E1A47] block mb-2">
                Actionable Adaptations:
              </span>
              <ul className="space-y-2">
                {currentArea.benefitsList.map((item, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-3 text-sm font-manrope text-[#2E1A47]/90 font-medium">
                    <div className="w-5 h-5 bg-[#FF6B4A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F1ECF8] p-8 border-2 border-[#2E1A47] text-center space-y-3">
            <span className="font-archivo font-black text-6xl text-[#2E1A47]/20 select-none">
              {currentArea.number}
            </span>
            <h4 className="font-archivo font-black text-lg uppercase text-[#2E1A47]">
              Built for Every Trimester & Transition
            </h4>
            <p className="font-manrope text-xs text-[#2E1A47]/75">
              Integrated progressively in both 1-on-1 coaching and small cohorts in Stoney Creek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
