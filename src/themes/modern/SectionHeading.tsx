import React from 'react';

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const ModernSectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  kicker,
  description,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {kicker && (
        <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] block mb-2">
          {kicker}
        </span>
      )}
      <h2 className="font-archivo font-black text-3xl sm:text-5xl text-[#2E1A47] uppercase tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-manrope text-base text-[#2E1A47]/80 mt-2 font-medium">
          {description}
        </p>
      )}
    </div>
  );
};

