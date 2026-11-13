import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { ArrowRight } from 'lucide-react';

interface FindYourProgramProps {
  isTeaser?: boolean;
}

export const FindYourProgram: React.FC<FindYourProgramProps> = ({ isTeaser = false }) => {
  const [selectedId, setSelectedId] = useState<string>('pregnant');

  const selectedStage =
    siteConfig.lifeStages.find((s) => s.id === selectedId) || siteConfig.lifeStages[0];

  const matchedProgram = siteConfig.programs.find(
    (p) => p.slug === selectedStage.programSlug
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 4 Large Selectable Cards - Editorial Magazine Style */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        role="tablist"
        aria-label="Women's Life Stage Selection"
      >
        {siteConfig.lifeStages.map((stage, idx) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              role="tab"
              aria-selected={isSelected}
              tabIndex={0}
              onClick={() => setSelectedId(stage.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedId(stage.id);
                }
              }}
              className={`p-6 text-left transition-all duration-200 border flex flex-col justify-between min-h-[160px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B4532A] ${
                isSelected
                  ? 'border-[#1A1714] bg-[#F2ECE3] shadow-md'
                  : 'border-[#1A1714]/15 bg-[#FAF7F2] hover:bg-[#F2ECE3]/60 hover:border-[#1A1714]/40'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span className="font-mono text-xs text-[#1A1714]/50">
                  0{idx + 1}
                </span>
                {isSelected && (
                  <span className="text-[10px] font-mono text-[#FAF7F2] uppercase tracking-[0.2em] bg-[#1A1714] px-2 py-0.5 font-medium">
                    Selected
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base font-serif text-[#1A1714]">
                  {stage.buttonLabel}
                </h3>
                <span className="text-xs text-[#1A1714]/65 block mt-1.5 font-light">
                  {stage.headline}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Program Summary Card - Asymmetric Editorial Spread */}
      <div className="bg-[#FAF7F2] text-[#1A1714] border border-[#1A1714]/15 shadow-sm p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#B4532A] border-b border-[#B4532A]/30 pb-1">
              <span>Recommended Path</span>
              <span>·</span>
              <span>{selectedStage.buttonLabel}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1714] tracking-tight leading-tight">
              {selectedStage.headline}
            </h3>

            <p className="text-[17px] text-[#1A1714]/80 leading-[1.7] max-w-[65ch]">
              {selectedStage.description}
            </p>

            {/* Key Focus Points as an Editorial List */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#1A1714]/60 block">
                What This Program Emphasizes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedStage.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1714]/80">
                    <span className="font-mono text-[#B4532A] shrink-0 font-medium">—</span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical safety notice for prenatal & postnatal */}
            {matchedProgram?.medicalNotice && (
              <div className="p-4 bg-[#F2ECE3] border-l-2 border-[#B4532A] text-xs text-[#1A1714]/80 leading-relaxed italic">
                <strong>Medical Notice:</strong> {matchedProgram.medicalNotice}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="btn-editorial-primary"
              >
                Book a Session
              </a>
              <Link
                to={`/programs/${selectedStage.programSlug}`}
                className="btn-editorial-outline"
              >
                <span>Read Full Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Image: Tall Portrait Crop */}
          <div className="lg:col-span-5 flex justify-center">
            {matchedProgram && (
              <div className="w-full max-w-[420px] overflow-hidden border border-[#1A1714]/15 bg-[#F2ECE3] group">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={matchedProgram.image}
                    alt={matchedProgram.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#FAF7F2] border-t border-[#1A1714]/15 text-xs text-[#1A1714] flex items-center justify-between">
                  <span className="font-serif text-sm">{matchedProgram.title}</span>
                  <span className="text-[#1A1714]/50 font-mono text-[10px] uppercase tracking-wider">Stoney Creek Studio</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {isTeaser && (
          <div className="mt-10 pt-6 border-t border-[#1A1714]/15 text-center">
            <Link
              to="/find-your-program"
              className="text-xs font-mono uppercase tracking-[0.2em] text-[#B4532A] hover:underline inline-flex items-center gap-2 transition-colors"
            >
              <span>Explore All Life Stage Options & Program FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
