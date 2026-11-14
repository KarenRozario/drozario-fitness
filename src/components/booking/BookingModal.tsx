import React, { useRef } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useTheme } from '../../context/ThemeContext';
import { BookingForm } from './BookingForm';
import { X } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isOpen, closeBooking, initialProgram } = useBooking();
  const { theme } = useTheme();
  const modalContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
      closeBooking();
    }
  };

  const isModern = theme === 'modern';
  const isSoft = theme === 'soft';

  // Backdrop overlay styling per theme
  const backdropClass = isModern
    ? 'fixed inset-0 z-[100] bg-[#2E1A47]/80 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-fadeIn'
    : isSoft
    ? 'fixed inset-0 z-[100] bg-[#3B2F2A]/60 backdrop-blur-md overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-fadeIn'
    : 'fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-fadeIn';

  // Floating Close Button styling per theme
  const closeButtonClass = isModern
    ? 'w-10 h-10 bg-[#FF6B4A] hover:bg-[#2E1A47] text-white flex items-center justify-center rounded-none shadow-md transition-colors cursor-pointer'
    : isSoft
    ? 'w-10 h-10 rounded-full bg-white text-[#3B2F2A] hover:bg-[#8FA58A] hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer'
    : 'w-10 h-10 bg-[#1A1714] text-[#FAF7F2] hover:bg-[#B4532A] flex items-center justify-center rounded-none shadow-md transition-colors cursor-pointer';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a Fitness Coaching Session"
      onClick={handleBackdropClick}
      className={backdropClass}
    >
      <div
        ref={modalContentRef}
        className="relative w-full max-w-2xl my-auto animate-scaleUp"
      >
        {/* Floating Close Button positioned cleanly top-right */}
        <div className="absolute top-4 right-4 z-20">
          <button
            type="button"
            onClick={closeBooking}
            aria-label="Close booking window"
            className={closeButtonClass}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme-Adaptive Booking Form */}
        <BookingForm
          initialProgram={initialProgram}
          onSuccessClose={closeBooking}
          isModal={true}
        />
      </div>
    </div>
  );
};
