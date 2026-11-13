export interface NutritionTopic {
  title: string;
  description: string;
}

export interface NutritionStep {
  step: string;
  title: string;
  description: string;
}

export const nutritionContent = {
  kicker: "NOURISHMENT · WELLNESS GUIDANCE",
  headline: "Nourish Every Stage",
  subhead: "Personalised women's nutrition coaching designed for pregnancy, postpartum recovery, and menopause in Stoney Creek.",
  image: "/images/nutrition-hero.jpg",
  credentialsPlaceholder: "[Certification] in Women's Nutrition Coaching",
  disclaimer: "Nutrition coaching is general wellness guidance and is not a substitute for advice from your doctor, midwife or a registered dietitian.",
  whatItCovers: [
    {
      title: "Eating well through pregnancy",
      description: "Support maternal wellness and fetal growth with nutrient-dense meals, steady energy, and simple solutions for morning nausea or food aversions.",
    },
    {
      title: "Postpartum energy and recovery",
      description: "Replenish depleted reserves after childbirth, support milk production if nursing, and nourish deep tissue recovery with simple, prepared meals.",
    },
    {
      title: "Nourishing your body through perimenopause and menopause",
      description: "Support healthy bones, sustain lean muscle mass, and stabilize daily energy through thoughtful protein pacing and nutrient-rich whole foods.",
    },
    {
      title: "Building sustainable habits around a busy family life",
      description: "Practical meal strategies that work with real schedules, family dinners, and busy evenings—without restrictive rules, guilt, or separate meals.",
    },
  ],
  howItWorks: [
    {
      step: "01",
      title: "Apply Online",
      description: "Fill out our confidential intake form sharing your current life stage, daily routines, and primary nutrition goals.",
    },
    {
      step: "02",
      title: "Initial Consultation",
      description: "A dedicated 60-minute session to discuss your lifestyle, food relationship, energy patterns, and personal preferences.",
    },
    {
      step: "03",
      title: "Personalised Guidance",
      description: "Receive a realistic, food-first framework tailored specifically to your body's current physiological stage.",
    },
    {
      step: "04",
      title: "Ongoing Check-Ins",
      description: "Regular follow-ups to refine strategies, navigate schedule changes, and build lifelong sustainable habits.",
    },
  ],
  whoItsFor: [
    "Expectant mothers seeking balanced nourishment for pregnancy vitality and baby's growth",
    "Postpartum mothers looking to replenish energy, support lactation, and rebuild physical strength",
    "Women navigating perimenopause or menopause aiming to support bone health and everyday energy",
    "Busy women and mothers ready to simplify family eating without restrictive rules or guilt",
  ],
  formPreview: {
    badge: "INTAKE APPLICATION",
    title: "Apply for a Nutrition Consultation",
    desc: "Complete our quick life-stage intake to start your personalized nutrition coaching.",
    cta: "Apply Now →",
  },
};
