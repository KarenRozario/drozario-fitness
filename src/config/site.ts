/**
 * Centralized Configuration for D'Rozario Fitness
 * 
 * NOTE: All customer-facing copy lives in src/content/*.ts as the single source of truth.
 * This file maintains typed re-exports and configuration flags.
 */

import { siteMeta, BOOKING_URL } from '../content/siteMeta';
import { homeContent } from '../content/home';
import { programsContent, ProgramData } from '../content/programs';
import { rachelContent } from '../content/rachel';
import { focusAreasContent, FocusAreaItem } from '../content/focusAreas';
import { communityContent } from '../content/community';
import { nutritionContent, NutritionTopic, NutritionStep } from '../content/nutrition';
import { learnContent, BlogPostSummary } from '../content/learn';

export { BOOKING_URL };

/**
 * Preview Switcher Configuration:
 * Setting SHOW_THEME_SWITCHER = false will completely remove the preview bar.
 * DEFAULT_THEME controls the active style when switcher is hidden or no theme is set.
 */
export type ThemeId = 'editorial' | 'soft' | 'modern';
export const SHOW_THEME_SWITCHER = true;
export const DEFAULT_THEME: ThemeId = 'editorial';

/**
 * Nutrition Consultation Application Endpoint
 * TODO: Connect this endpoint to your production CRM, email service, or serverless API handler.
 * e.g. "https://api.drozariofitness.ca/nutrition-consultation"
 */
export const NUTRITION_FORM_ENDPOINT = "";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isOwner?: boolean;
  image: string;
  certifications: string;
  bio: string;
  specialities: string[];
}

export type ProgramItem = ProgramData;
export type FocusArea = FocusAreaItem;

export interface LifeStageOption {
  id: string;
  buttonLabel: string;
  headline: string;
  programSlug: string;
  description: string;
  keyPoints: string[];
}

export type BlogPost = BlogPostSummary;

export interface NutritionConfig {
  headline: string;
  subhead: string;
  image: string;
  credentialsPlaceholder: string;
  disclaimer: string;
  whatItCovers: NutritionTopic[];
  howItWorks: NutritionStep[];
  whoItsFor: string[];
}

const quizOptions: LifeStageOption[] = [
  {
    id: "pregnant",
    buttonLabel: "I am currently pregnant",
    headline: "Prenatal Conditioning & Birth Prep",
    programSlug: "prenatal-fitness",
    description: "Gentle, tailored strength coaching to support your posture, maintain energy, and prepare your body for birth across every trimester.",
    keyPoints: [
      "Pelvic floor & deep core awareness",
      "Trimester-specific exercise modifications",
      "Breathing mechanics for labour preparation",
    ],
  },
  {
    id: "postpartum",
    buttonLabel: "I have had a baby (recent or past)",
    headline: "Postnatal Core & Full-Body Rebuilding",
    programSlug: "postnatal-fitness",
    description: "Safe, structured recovery designed to rebuild your core, strengthen your back and glutes, and regain daily stamina without overwhelm.",
    keyPoints: [
      "Diaphragmatic breathing and gentle core reactivation",
      "Lifting and carrying mechanics for motherhood",
      "Safe progression to full-body strength training",
    ],
  },
  {
    id: "menopause",
    buttonLabel: "I am in perimenopause or menopause",
    headline: "Perimenopause & Menopause Strength",
    programSlug: "perimenopause-menopause",
    description: "Targeted resistance training designed to preserve muscle, protect bone density, and maintain vibrant energy through hormonal shifts.",
    keyPoints: [
      "Compound barbell and dumbbell strength training",
      "Bone-loading drills to stimulate bone density",
      "Workouts calibrated to manage fatigue and elevate mood",
    ],
  },
  {
    id: "fifty-plus",
    buttonLabel: "I am 50+ looking for functional strength",
    headline: "Strong After 50 & Functional Longevity",
    programSlug: "strong-after-50",
    description: "Comprehensive strength, balance, and joint mobility to keep you capable, confident, and active for everything life brings.",
    keyPoints: [
      "Balance and gait stability for fall prevention",
      "Joint-friendly resistance movements",
      "Empowering coaching in a welcoming, private environment",
    ],
  },
];

export const siteConfig = {
  ...siteMeta,
  valuePoints: homeContent.valuePoints,
  journeySteps: homeContent.journeySteps,
  team: [
    {
      id: "rachel-drozario",
      name: rachelContent.name,
      role: rachelContent.role,
      isOwner: rachelContent.isOwner,
      image: rachelContent.image,
      certifications: rachelContent.certifications,
      bio: rachelContent.bio,
      specialities: rachelContent.specialities,
    },
  ],
  programs: programsContent.programs,
  focusAreas: focusAreasContent.areas,
  community: communityContent,
  nutrition: nutritionContent,
  blog: learnContent.blogPosts,
  blogPosts: learnContent.blogPosts,
  stories: learnContent.stories,
  clientStoriesPlaceholder: learnContent.stories,
  quizOptions,
  lifeStages: quizOptions,
};
