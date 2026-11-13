import React from 'react';
import { focusAreasContent } from '../../content/focusAreas';

export const EditorialFocusAreas: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#F2ECE3] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Col: Section Title */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block">
              {focusAreasContent.kicker}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
              {focusAreasContent.headline}
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 leading-[1.7] font-light">
              {focusAreasContent.subhead}
            </p>
          </div>

          {/* Right Col: Editorial Numbered List */}
          <div className="lg:col-span-8 divide-y divide-[#1A1714]/15 border-t border-[#1A1714]/15">
            {focusAreasContent.areas.map((area) => (
              <div key={area.id} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                <div className="sm:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A]">
                  {area.number}
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-xl text-[#1A1714]">
                    {area.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light">
                    {area.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-xs text-[#1A1714]/60 font-light list-disc list-inside">
                    {area.benefitsList.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

