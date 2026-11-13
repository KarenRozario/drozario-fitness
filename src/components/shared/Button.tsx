import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  external = false,
  ariaLabel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-medium uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-espresso disabled:opacity-50 disabled:cursor-not-allowed select-none text-center';

  const sizeStyles = {
    sm: 'text-sm px-4 py-2 rounded-sm gap-1.5 tracking-wider',
    md: 'text-base px-6 py-3 rounded-sm gap-2 tracking-widest text-lg',
    lg: 'text-lg px-8 py-4 rounded-sm gap-2.5 tracking-widest text-xl',
  };

  const variantStyles = {
    primary:
      'bg-burntOrange text-cream hover:bg-burntOrange-hover active:bg-burntOrange-active shadow-md hover:shadow-burntOrange/20 hover:scale-[1.02] active:scale-[0.99]',
    secondary:
      'bg-espresso-card text-cream border border-espresso-border hover:border-cream/40 hover:bg-espresso-elevated active:bg-espresso-surface',
    outline:
      'bg-transparent text-burntOrange border-2 border-burntOrange hover:bg-burntOrange hover:text-cream active:bg-burntOrange-active',
    ghost:
      'bg-transparent text-cream hover:text-burntOrange hover:bg-espresso-surface/60',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
