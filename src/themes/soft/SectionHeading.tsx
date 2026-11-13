import React from 'react';

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SoftSectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  kicker,
  description,
  align = 'left',
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {kicker && (
        <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block mb-2">
          {kicker}
        </span>
      )}
      <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-dm-sans text-base text-[#3B2F2A]/75 mt-3 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

