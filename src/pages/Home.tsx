import React from 'react';
import { SEO } from '../components/shared/SEO';
import {
  ThemeHero,
  ThemeProgramsSection,
  ThemeNutritionTeaser,
  ThemeFocusAreas,
  ThemeMeetRachel,
  ThemeCommunity,
  ThemeLearnSection,
  ThemeCTA,
} from '../themes';

export const Home: React.FC = () => {
  return (
    <div>
      <SEO
        title="D'Rozario Fitness | Women's Life-Stage Movement in Stoney Creek"
        description="Specialised fitness coaching for women through pregnancy, motherhood, perimenopause, menopause, and lifelong strength in Stoney Creek, Ontario."
      />
      
      {/* Active Theme's Home Section Set */}
      <ThemeHero />
      <ThemeProgramsSection />
      <ThemeNutritionTeaser />
      <ThemeFocusAreas />
      <ThemeMeetRachel />
      <ThemeCommunity />
      <ThemeLearnSection />
      <ThemeCTA />
    </div>
  );
};
