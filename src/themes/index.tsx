import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Theme 1: Editorial
import { EditorialHeader } from './editorial/Header';
import { EditorialHero } from './editorial/Hero';
import { EditorialProgramsSection } from './editorial/ProgramsSection';
import { EditorialNutritionTeaser } from './editorial/NutritionTeaser';
import { EditorialMeetRachel } from './editorial/MeetRachel';
import { EditorialFocusAreas } from './editorial/FocusAreas';
import { EditorialCommunity } from './editorial/Community';
import { EditorialLearnSection } from './editorial/LearnSection';
import { EditorialCTA } from './editorial/CTA';
import { EditorialFooter } from './editorial/Footer';
import { EditorialPageHero } from './editorial/PageHero';
import { EditorialSectionHeading } from './editorial/SectionHeading';

// Theme 2: Soft Wellness
import { SoftHeader } from './soft/Header';
import { SoftHero } from './soft/Hero';
import { SoftProgramsSection } from './soft/ProgramsSection';
import { SoftNutritionTeaser } from './soft/NutritionTeaser';
import { SoftMeetRachel } from './soft/MeetRachel';
import { SoftFocusAreas } from './soft/FocusAreas';
import { SoftCommunity } from './soft/Community';
import { SoftLearnSection } from './soft/LearnSection';
import { SoftCTA } from './soft/CTA';
import { SoftFooter } from './soft/Footer';
import { SoftPageHero } from './soft/PageHero';
import { SoftSectionHeading } from './soft/SectionHeading';

// Theme 3: Modern Strong
import { ModernHeader } from './modern/Header';
import { ModernHero } from './modern/Hero';
import { ModernProgramsSection } from './modern/ProgramsSection';
import { ModernNutritionTeaser } from './modern/NutritionTeaser';
import { ModernMeetRachel } from './modern/MeetRachel';
import { ModernFocusAreas } from './modern/FocusAreas';
import { ModernCommunity } from './modern/Community';
import { ModernLearnSection } from './modern/LearnSection';
import { ModernCTA } from './modern/CTA';
import { ModernFooter } from './modern/Footer';
import { ModernPageHero } from './modern/PageHero';
import { ModernSectionHeading } from './modern/SectionHeading';

export const ThemeHeader: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftHeader />;
  if (theme === 'modern') return <ModernHeader />;
  return <EditorialHeader />;
};

export const ThemeHero: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftHero />;
  if (theme === 'modern') return <ModernHero />;
  return <EditorialHero />;
};

export const ThemeProgramsSection: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftProgramsSection />;
  if (theme === 'modern') return <ModernProgramsSection />;
  return <EditorialProgramsSection />;
};

export const ThemeNutritionTeaser: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftNutritionTeaser />;
  if (theme === 'modern') return <ModernNutritionTeaser />;
  return <EditorialNutritionTeaser />;
};

export const ThemeMeetRachel: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftMeetRachel />;
  if (theme === 'modern') return <ModernMeetRachel />;
  return <EditorialMeetRachel />;
};

export const ThemeFocusAreas: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftFocusAreas />;
  if (theme === 'modern') return <ModernFocusAreas />;
  return <EditorialFocusAreas />;
};

export const ThemeCommunity: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftCommunity />;
  if (theme === 'modern') return <ModernCommunity />;
  return <EditorialCommunity />;
};

export const ThemeLearnSection: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftLearnSection />;
  if (theme === 'modern') return <ModernLearnSection />;
  return <EditorialLearnSection />;
};

export const ThemeCTA: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftCTA />;
  if (theme === 'modern') return <ModernCTA />;
  return <EditorialCTA />;
};

export const ThemeFooter: React.FC = () => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftFooter />;
  if (theme === 'modern') return <ModernFooter />;
  return <EditorialFooter />;
};

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  image?: string;
}

export const ThemePageHero: React.FC<PageHeroProps> = (props) => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftPageHero {...props} />;
  if (theme === 'modern') return <ModernPageHero {...props} />;
  return <EditorialPageHero {...props} />;
};

interface SectionHeadingProps {
  title: string;
  kicker?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const ThemeSectionHeading: React.FC<SectionHeadingProps> = (props) => {
  const { theme } = useTheme();
  if (theme === 'soft') return <SoftSectionHeading {...props} />;
  if (theme === 'modern') return <ModernSectionHeading {...props} />;
  return <EditorialSectionHeading {...props} />;
};

