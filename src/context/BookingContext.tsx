import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface BookingContextType {
  isOpen: boolean;
  openBooking: (initialProgram?: string) => void;
  closeBooking: () => void;
  initialProgram: string;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
  initialProgram: '',
});

export const useBooking = () => useContext(BookingContext);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProgram, setInitialProgram] = useState('');

  const openBooking = useCallback((program?: string) => {
    if (program) {
      setInitialProgram(program);
    }
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    // Clean up #book hash from the URL without triggering full page reload
    if (typeof window !== 'undefined' && window.location.hash === '#book') {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
  }, []);

  // Listen to hash changes (e.g. clicking href="#book" or loading page with #book)
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== 'undefined' && window.location.hash === '#book') {
        setIsOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Prevent background scroll when modal is open & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBooking();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeBooking]);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openBooking,
        closeBooking,
        initialProgram,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
