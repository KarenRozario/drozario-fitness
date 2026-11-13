import React from 'react';

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const EditorialSectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  kicker,
  description,
  align = 'left',
}) => {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {kicker && (
        <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
          {description}
        </p>
      )}
    </div>
  );
};

