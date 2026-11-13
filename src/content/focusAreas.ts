export interface FocusAreaItem {
  id: string;
  tabLabel: string;
  number: string;
  title: string;
  description: string;
  benefitsList: string[];
}

export const focusAreasContent = {
  kicker: "MOVEMENT SCIENCE · BIOMECHANICS",
  headline: "Our Core Focus Areas",
  subhead: "Every session integrates these essential pillars of female strength, biomechanics, and everyday vitality. No guesswork, no generic routines.",
  areas: [
    {
      id: "pelvic-floor",
      tabLabel: "PELVIC FLOOR",
      number: "01",
      title: "Core & Pelvic Floor-Aware Training",
      description: "Movement synced with breath to support deep abdominal and pelvic health at every stage of womanhood.",
      benefitsList: [
        "Diaphragmatic breath integration",
        "Safe intra-abdominal pressure management",
        "Support for core reconnection after birth",
      ],
    },
    {
      id: "progressive-strength",
      tabLabel: "BONE STRENGTH",
      number: "02",
      title: "Strength & Bone Support",
      description: "Progressive resistance training to build strength, support healthy bones and help you stay strong and capable as you age.",
      benefitsList: [
        "Multi-joint compound lifting (squat, hinge, press, pull)",
        "Impact and loading strategies for bone health",
        "Gradual, measurable progressions tailored to your pace",
      ],
    },
    {
      id: "functional-mobility",
      tabLabel: "POSTURE & MOBILITY",
      number: "03",
      title: "Functional Mobility & Posture",
      description: "Counteract the physical demands of pregnancy, nursing, desk work, and daily life with restoring movement.",
      benefitsList: [
        "Thoracic spine opening and shoulder stabilization",
        "Hip and pelvic alignment drills for gait comfort",
        "Full-body joint integrity and ease of movement",
      ],
    },
    {
      id: "energy-vitality",
      tabLabel: "ENERGY & MOOD",
      number: "04",
      title: "Energy, Vitality & Mood",
      description: "Movement that supports your energy, helps you manage stress and leaves you feeling clearer and more like yourself through busy seasons of life.",
      benefitsList: [
        "Calibrated volume that energizes rather than drains",
        "Nervous system down-regulation and breathwork",
        "Supportive, stress-reducing coaching atmosphere",
      ],
    },
  ],
};
