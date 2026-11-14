import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { ThemeId, SHOW_THEME_SWITCHER, DEFAULT_THEME } from '../config/site';

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const VALID_THEMES: ThemeId[] = ['editorial', 'soft', 'modern'];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    // 1. Check URL query param ?theme=...
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const queryTheme = params.get('theme') as ThemeId;
        if (queryTheme && VALID_THEMES.includes(queryTheme)) {
          return queryTheme;
        }
      } catch (err) {
        console.error('Error reading theme from URL', err);
      }

      // 2. Check localStorage
      try {
        const stored = localStorage.getItem('drozario_theme') as ThemeId;
        if (stored && VALID_THEMES.includes(stored)) {
          return stored;
        }
      } catch (err) {
        console.error('Error reading theme from localStorage', err);
      }
    }

    return DEFAULT_THEME;
  });

  const setTheme = (newTheme: ThemeId) => {
    if (!VALID_THEMES.includes(newTheme)) return;
    setThemeState(newTheme);

    // Apply data-theme to <html>
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', newTheme);
    }

    // Persist to localStorage
    try {
      localStorage.setItem('drozario_theme', newTheme);
    } catch (err) {
      console.error('Error saving theme to localStorage', err);
    }

    // Update URL query without reload
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('theme', newTheme);
      window.history.replaceState({}, '', url.toString());
    } catch (err) {
      console.error('Error updating URL param', err);
    }
  };

  useEffect(() => {
    // Sync to html on mount and when theme changes
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!SHOW_THEME_SWITCHER && typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--preview-bar-h', '0px');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {SHOW_THEME_SWITCHER && <ThemeSwitcherBar currentTheme={theme} onSelectTheme={setTheme} />}
      {children}
    </ThemeContext.Provider>
  );
};

interface SwitcherProps {
  currentTheme: ThemeId;
  onSelectTheme: (t: ThemeId) => void;
}

const ThemeSwitcherBar: React.FC<SwitcherProps> = ({ currentTheme, onSelectTheme }) => {
  const barRef = useRef<HTMLElement>(null);
  const themes: { id: ThemeId; label: string; desc: string }[] = [
    { id: 'editorial', label: '1 · Editorial', desc: 'Serif & warm ivory' },
    { id: 'soft', label: '2 · Soft Wellness', desc: 'Curved, sage & cocoa' },
    { id: 'modern', label: '3 · Modern Strong', desc: 'Bold coral & plum' },
  ];

  useEffect(() => {
    const updateHeight = () => {
      if (barRef.current && typeof document !== 'undefined') {
        const h = barRef.current.offsetHeight;
        document.documentElement.style.setProperty('--preview-bar-h', `${h}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--preview-bar-h', '0px');
      }
    };
  }, []);

  return (
    <aside
      ref={barRef}
      aria-label="Design preview switcher"
      className="sticky top-0 z-[60] w-full bg-[#18181B] text-[#F4F4F5] border-b border-zinc-800 py-2.5 px-4 shadow-md transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300 whitespace-nowrap">
            Design preview — choose a style:
          </span>
        </div>

        {/* Buttons / Controls Centered */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center whitespace-nowrap">
          {themes.map((t) => {
            const isActive = currentTheme === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelectTheme(t.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded transition-all flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-white whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-zinc-950 font-bold shadow'
                    : 'bg-zinc-800/90 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
                title={t.desc}
              >
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
