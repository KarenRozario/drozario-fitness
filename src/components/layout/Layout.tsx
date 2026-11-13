import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeHeader, ThemeFooter } from '../../themes';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeHeader />
      <main className="flex-grow focus:outline-none" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <ThemeFooter />
    </div>
  );
};
