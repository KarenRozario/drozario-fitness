/**
 * Centralized Configuration for D'Rozario Fitness
 * 
 * ALL business details, contact information, program definitions,
 * and the primary booking URL live exclusively in this file.
 */

export const BOOKING_URL = "#book";

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

export interface ProgramItem {
  slug: string;
  title: string;
  stageName: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  sessionOverview: string;
  benefits: string[];
  image: string;
  pricingPlaceholder: string;
  medicalNotice?: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  benefitsList: string[];
}

export interface LifeStageOption {
  id: string;
  buttonLabel: string;
  headline: string;
  programSlug: string;
  description: string;
  keyPoints: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  status: string;
  excerpt: string;
  image: string;
  author: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export interface NutritionTopic {
  title: string;
  description: string;
}

export interface NutritionStep {
  step: string;
  title: string;
  description: string;
}

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

export const siteConfig = {
  name: "D'Rozario Fitness",
  shortName: "D'Rozario",
  tagline: "Stoney Creek Women's Fitness Coaching",
  owner: "Rachel D'Rozario",
  description: "Specialized fitness coaching for women through pregnancy, motherhood and menopause in Stoney Creek, Ontario. Coached with care by Rachel D'Rozario.",
  
  // Contact & Location Details
  phone: "[Rachel's phone]",
  email: "[Rachel's email]",
  address: "[Studio Address, Stoney Creek, ON]",
  city: "Stoney Creek",
  province: "ON",
  country: "Canada",
  postalCode: "[Postal Code]",
  
  // Mapping & OpenStreetMap Embed
  openStreetMapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-79.7900%2C43.1900%2C-79.6700%2C43.2500&amp;layer=mapnik&amp;marker=43.2181%2C-79.7289",
  openStreetMapDirectionsUrl: "https://www.openstreetmap.org/search?query=Stoney%20Creek%20Ontario#map=14/43.2181/-79.7289",
  
  // Social Media Placeholders
  socials: {
    instagram: "[Instagram URL]",
    facebook: "[Facebook URL]",
    linkedin: "[LinkedIn URL]",
  },
  
  // Operating Hours Placeholders
  hours: [
    { days: "Monday – Friday", times: "[Hours, e.g. 6:00 AM – 8:00 PM]" },
    { days: "Saturday", times: "[Hours, e.g. 8:00 AM – 2:00 PM]" },
    { days: "Sunday", times: "[By appointment only]" },
  ],
  
  // Value Strip Points (Home Section 2)
  valuePoints: [
    {
      title: "Coaching Built Around Your Life Stage",
      description: "Every movement program honors where your body is today — from trimester adaptations to postpartum core recovery and hormonal shifts.",
      icon: "UserHeart",
    },
    {
      title: "Safe, Progressive Training",
      description: "Structured strength and pelvic floor-aware progressions designed to build stamina and confidence without overwhelm.",
      icon: "ShieldCheck",
    },
    {
      title: "Small Groups and 1-on-1",
      description: "Choose between focused private sessions or intimate group classes designed for connection, encouragement, and form guidance.",
      icon: "Users",
    },
    {
      title: "A Supportive Community of Women",
      description: "Join Stoney Creek mothers, professionals, and women over 50 committed to moving well and lifting each other up.",
      icon: "HeartHandshake",
    },
  ],

  // Journey Steps (Home Section 3: "Start Your Journey")
  journeySteps: [
    {
      number: "01",
      title: "Complimentary Consultation",
      description: "We discuss your current life stage, birth or health history, daily schedule, and personal movement goals in a comfortable setting.",
    },
    {
      number: "02",
      title: "Personalised Training Plan",
      description: "A customized movement framework designed around your body, whether you are pregnant, postpartum, or navigating menopause.",
    },
    {
      number: "03",
      title: "Guided Coaching Sessions",
      description: "Learn safe movement patterns, core engagement, and functional strength exercises under Rachel's encouraging coaching.",
    },
    {
      number: "04",
      title: "Ongoing Check-Ins & Progression",
      description: "Continuous adjustments as your body adapts, ensuring workouts stay energizing, safe, and aligned with your changing needs.",
    },
  ],

  // Rachel D'Rozario - Only One Coach
  team: [
    {
      id: "rachel-drozario",
      name: "Rachel D'Rozario",
      role: "Founder & Women's Fitness Coach",
      isOwner: true,
      image: "/images/rachel-drozario.jpg",
      certifications: "[Certification placeholder, e.g. Certified Personal Trainer, Pre/Postnatal Fitness Specialist]",
      bio: "Rachel founded D'Rozario Fitness to provide women in Stoney Creek with a safe, empowering space to build strength through every season of life. Specializing in prenatal fitness, postpartum return to movement, and menopause strength training, Rachel collaborates closely with local mom groups and women's wellness networks. Her coaching philosophy centers on meeting each woman exactly where she is with encouragement, expert guidance, and sustainable strength.",
      specialities: [
        "Prenatal Fitness & Labour Preparation",
        "Postnatal Core & Pelvic Floor Reconnection",
        "Perimenopause & Menopause Strength",
        "Functional Strength After 50",
      ],
    },
  ] as TeamMember[],

  // Programs (4 Life Stages)
  programs: [
    {
      slug: "prenatal",
      title: "Prenatal Fitness",
      stageName: "I'm pregnant",
      shortDescription: "Safe, supportive strength training and breathing mechanics to prepare your body for labour, delivery, and motherhood.",
      fullDescription: "Our prenatal fitness sessions help expectant mothers maintain functional strength, support comfortable posture, and practice pelvic floor awareness. Every movement is tailored to your trimester and energy levels, helping you feel strong and confident throughout your pregnancy.",
      whoItsFor: "Expectant mothers at any stage of pregnancy seeking safe, expert-led exercise that honors their changing bodies.",
      sessionOverview: "60-minute session combining gentle joint mobility, diaphragmatic breathing, pelvic floor-aware core work, and functional full-body strength.",
      benefits: [
        "Maintains full-body strength and stamina for labour and delivery",
        "Supports posture and spinal comfort as baby grows",
        "Teaches intentional core and pelvic floor coordination",
        "Provides safe, trimester-specific movement modifications",
      ],
      image: "/images/program-prenatal.jpg",
      pricingPlaceholder: "[Price per session / package details]",
      medicalNotice: "Always check with your doctor or midwife before starting or returning to exercise during pregnancy or after birth.",
    },
    {
      slug: "postnatal",
      title: "Postnatal Fitness",
      stageName: "I've recently had a baby",
      shortDescription: "Empowering postpartum strength focused on core reconnection, pelvic floor awareness, and rebuilding everyday stamina.",
      fullDescription: "Returning to movement after baby requires patience, intention, and progressive loading. We focus on reconnecting deep core muscles, supporting pelvic health, and rebuilding functional strength so you can lift, carry, and enjoy motherhood with energy and ease.",
      whoItsFor: "Mothers from early postpartum onward seeking a gentle, progressive path back to exercise. Little ones are always welcome.",
      sessionOverview: "60-minute session focusing on posture alignment, diaphragmatic breath connection, progressive pelvic floor activation, and functional compound movements.",
      benefits: [
        "Re-establishes deep core connection and abdominal strength",
        "Supports pelvic floor awareness during everyday lifting and carrying",
        "Builds upper body and back strength for nursing and holding baby",
        "Welcoming, supportive environment where moms can connect",
      ],
      image: "/images/program-postnatal.jpg",
      pricingPlaceholder: "[Price per session / package details]",
      medicalNotice: "Always check with your doctor or midwife before starting or returning to exercise during pregnancy or after birth.",
    },
    {
      slug: "menopause",
      title: "Perimenopause & Menopause",
      stageName: "I'm in perimenopause or menopause",
      shortDescription: "Resistance training to build strength, support healthy bones and keep your energy up through every transition.",
      fullDescription: "As hormones shift during perimenopause and menopause, strength training becomes essential for lifelong health. We design progressive resistance workouts that support healthy bones, maintain functional strength, elevate mood, and keep you feeling vibrant and empowered.",
      whoItsFor: "Women navigating perimenopause or menopause who want to protect their bone health, maintain muscle, and optimize their vitality.",
      sessionOverview: "60-minute session emphasizing progressive resistance loading, bone-strengthening compound movements, joint mobility, and nervous system regulation.",
      benefits: [
        "Supports healthy bones through progressive resistance training",
        "Builds and maintains lean muscle to support daily energy and vitality",
        "Promotes restorative sleep, mood balance, and sustained energy",
        "Enhances joint mobility, flexibility, and physical confidence",
      ],
      image: "/images/program-menopause.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
    {
      slug: "strong-after-50",
      title: "Strong After 50",
      stageName: "I'm 50+ and want to get stronger",
      shortDescription: "Functional strength, balance, and vitality training to keep you moving freely, independently, and confidently for decades to come.",
      fullDescription: "Aging is an invitation to get stronger, not slow down. Our Strong After 50 coaching focuses on balance, functional multi-joint strength, stability, and mobility so you can continue doing all the activities you love with ease.",
      whoItsFor: "Women 50+ looking for an encouraging, expert-led environment to build functional strength, mobility, and lifelong resilience.",
      sessionOverview: "60-minute session combining balance and coordination drills, functional bodyweight and dumbbell strength, posture work, and gentle mobility.",
      benefits: [
        "Develops balance, coordination, and reactive stability",
        "Builds full-body functional strength for daily activities",
        "Protects joint mobility, flexibility, and spinal posture",
        "Fosters lifelong vitality in a welcoming community of women",
      ],
      image: "/images/program-strong-after-50.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
  ] as ProgramItem[],

  // Focus Areas (6)
  focusAreas: [
    {
      id: "core-pelvic-floor",
      title: "Core & Pelvic Floor-Aware Training",
      description: "Learn to coordinate breath, pelvic floor engagement, and deep core stabilizers to support your body through pregnancy and postpartum recovery.",
      benefitsList: ["Diaphragmatic breathing coordination", "Safe core progressions", "Pelvic support during lifting"],
    },
    {
      id: "strength-bone-health",
      title: "Strength & Bone Health",
      description: "Progressive resistance training to build strength, support healthy bones and help you stay strong and capable as you age.",
      benefitsList: ["Weight-bearing compound exercises", "Healthy bone support", "Lean muscle preservation"],
    },
    {
      id: "energy-mood",
      title: "Energy & Mood",
      description: "Movement that supports your energy, helps you manage stress and leaves you feeling clearer and more like yourself through busy seasons of life.",
      benefitsList: ["Stress reduction and nervous system regulation", "Endorphin and mood elevation", "Better sleep consistency"],
    },
    {
      id: "posture-pregnancy",
      title: "Posture Through Pregnancy",
      description: "Counteract the mechanical shifts of pregnancy by strengthening the upper back, opening tight chest muscles, and stabilizing the pelvis.",
      benefitsList: ["Upper back postural endurance", "Pelvic alignment support", "Comfortable everyday movement"],
    },
    {
      id: "returning-after-baby",
      title: "Returning to Exercise After Baby",
      description: "A gentle, respectful step-by-step roadmap to re-establish your baseline, regain physical stamina, and build confidence in your body.",
      benefitsList: ["Progressive return roadmap", "Bodyweight to loaded transitions", "Encouraging, pressure-free pacing"],
    },
    {
      id: "balance-mobility",
      title: "Balance & Mobility",
      description: "Functional movement patterns that enhance single-leg stability, joint range of motion, and dynamic balance for lifelong independence.",
      benefitsList: ["Fall prevention and balance drills", "Smooth joint articulation", "Fluid everyday mobility"],
    },
  ] as FocusArea[],

  // Find Your Program Selector Options (4 Life Stages)
  lifeStages: [
    {
      id: "pregnant",
      buttonLabel: "I'm pregnant",
      headline: "Prenatal Fitness Program",
      programSlug: "prenatal",
      description: "Safe, trimester-tailored movement and core support to prepare your body for birth and the physical demands of motherhood.",
      keyPoints: [
        "Trimester-specific exercise modifications",
        "Pelvic floor and diaphragmatic breathing awareness",
        "Gentle strength to support comfortable posture",
        "Preparation for labour stamina and newborn care",
      ],
    },
    {
      id: "new-baby",
      buttonLabel: "I've recently had a baby",
      headline: "Postnatal Fitness Program",
      programSlug: "postnatal",
      description: "A progressive, empowering return to movement focused on deep core reconnection, pelvic health, and rebuilding full-body strength.",
      keyPoints: [
        "Deep core reconnection and abdominal support",
        "Functional strength for lifting, carrying, and stroller walks",
        "Safe progressions tailored to your birth recovery",
        "Babies are always welcome in sessions",
      ],
    },
    {
      id: "menopause",
      buttonLabel: "I'm in perimenopause or menopause",
      headline: "Perimenopause & Menopause Strength",
      programSlug: "menopause",
      description: "Resistance training to build strength, support healthy bones and keep your energy up through every transition.",
      keyPoints: [
        "Heavy and moderate resistance loading for bone health",
        "Functional conditioning and lean muscle support",
        "Joint mobility and stress-reducing breathwork",
        "Energy and mood support through hormonal transitions",
      ],
    },
    {
      id: "strong-50",
      buttonLabel: "I'm 50+ and want to get stronger",
      headline: "Strong After 50 Program",
      programSlug: "strong-after-50",
      description: "Functional strength, balance, and vitality coaching to keep you moving freely, independently, and confidently for decades to come.",
      keyPoints: [
        "Balance and coordination drills for fall prevention",
        "Functional strength for gardening, travel, and daily life",
        "Joint-friendly movement that protects flexibility",
        "Supportive, welcoming community of women",
      ],
    },
  ] as LifeStageOption[],

  // Community / Mom Groups Section Data
  community: {
    title: "Empowering Stoney Creek Women & Mommy Networks",
    subhead: "Rachel is passionate about bringing women together through movement, shared experiences, and community support.",
    description: "Motherhood and midlife should never feel isolating. Rachel works closely with local mom groups, postpartum networks, and community wellness circles across Stoney Creek to host collaborative classes, stroller-friendly outdoor sessions, and educational workshops.",
    partners: [
      {
        name: "[Partner group name, e.g. Stoney Creek Mom Community]",
        role: "Community Partner",
        focus: "Mommy & Baby movement workshops and stroller strength meetups.",
      },
      {
        name: "[Partner group name, e.g. Hamilton Postnatal Wellness Network]",
        role: "Collaborative Workshop Series",
        focus: "Core and pelvic floor education for new mothers returning to fitness.",
      },
      {
        name: "[Partner group name, e.g. Women 50+ Vitality Circle]",
        role: "Community Fitness Group",
        focus: "Small-group strength and mobility classes for midlife women.",
      },
    ],
    features: [
      {
        title: "Mommy & Baby Friendly",
        desc: "Bring your baby to class. Our private studio provides a welcoming space where nursing, pausing, and feeding are always respected.",
      },
      {
        title: "Small Supportive Cohorts",
        desc: "Group sessions are kept small (3 to 6 women) so Rachel can provide individual form cues while fostering genuine friendships.",
      },
      {
        title: "Community Events",
        desc: "Seasonal workshops on women's hormonal health, pelvic floor wellness, and strength training fundamentals.",
      },
    ],
  },

  // Blog Posts (Retitled for Women's Life Stages)
  blogPosts: [
    {
      slug: "core-pelvic-floor-strength-pregnancy",
      title: "Core & Pelvic Floor Strength in Pregnancy & Beyond [Draft]",
      category: "Prenatal & Postnatal",
      readTime: "4 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-core-pelvic-floor.jpg",
      excerpt: "Why the core is so much more than six-pack muscles. Discover how diaphragmatic breathing and pelvic floor coordination support your body through every trimester and postpartum.",
      sections: [
        {
          heading: "Understanding the Core as a Pressure System",
          body: [
            "During pregnancy, your body undergoes tremendous mechanical changes. The core isn't just your abdominal muscles — it's an integrated cylinder comprising your diaphragm, deep transversus abdominis, spinal stabilizers, and pelvic floor.",
            "When you learn how to coordinate your breath with gentle pelvic floor engagement, you provide natural internal support for your lower back and growing baby.",
          ],
        },
        {
          heading: "Safe Adaptations for Every Trimester",
          body: [
            "We focus on intentional movement: gentle hip hinge mechanics, glute bridges with exhalation, and functional squats that prepare your body for birth.",
            "Always honor your energy on any given day. Some days call for restorative breathing; other days call for loaded carries.",
          ],
        },
      ],
    },
    {
      slug: "strength-training-perimenopause-menopause",
      title: "Strength Training Through Perimenopause & Menopause [Draft]",
      category: "Menopause & Beyond",
      readTime: "5 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-menopause-strength.jpg",
      excerpt: "How progressive resistance training supports healthy bones, protects lean muscle mass, and sustains energy through life transitions.",
      sections: [
        {
          heading: "Why Lifting Weights Matters More Than Ever",
          body: [
            "As estrogen levels fluctuate during perimenopause and menopause, bone turnover speeds up and lean muscle mass naturally tends to decline.",
            "Cardio alone cannot provide the resistance required to support bone health. Lifting moderate weights under proper guidance delivers the functional loading to keep your bones and joints strong.",
          ],
        },
        {
          heading: "Supporting Mood, Sleep, and Confidence",
          body: [
            "Strength training helps regulate blood sugar, lowers cortisol, and promotes restful sleep. Our Stoney Creek women report feeling energized and capable in every area of life.",
          ],
        },
      ],
    },
    {
      slug: "returning-to-exercise-after-baby",
      title: "Returning to Exercise After Baby: Safe, Empowering Steps [Draft]",
      category: "Postnatal Fitness",
      readTime: "5 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-postnatal-return.jpg",
      excerpt: "A calm, encouraging guide to returning to exercise after birth. How to pace your progression, reconnect your core, and celebrate your strength.",
      sections: [
        {
          heading: "The 6-Week Checkup Is Just the Starting Line",
          body: [
            "Receiving clearance at your postpartum checkup does not mean you should immediately jump back into high-impact workouts.",
            "Your body has accomplished something extraordinary. We start with foundational breathwork, posture alignment, and gentle glute activation before progressing to loaded functional exercises.",
          ],
        },
        {
          heading: "Lifting for the Demands of Motherhood",
          body: [
            "Motherhood is an athletic endeavor. Lifting car seats, carrying toddlers, and pushing strollers requires strong glutes, a resilient back, and deep core stability. We train for real life.",
          ],
        },
      ],
    },
  ] as BlogPost[],

  // Client Stories / Movement Journeys (NO invented reviews/ratings/testimonials)
  clientStoriesPlaceholder: {
    notice: "Real Case Studies & Client Movement Journeys",
    frameworkHeading: "How We Document & Verify Client Progress",
    description: "At D'Rozario Fitness, we celebrate functional progress and personal confidence. We are compiling verified movement case studies from our Stoney Creek prenatal, postnatal, and menopause clients.",
    steps: [
      {
        phase: "Phase 1: Baseline Consultation",
        details: "Review of medical clearance, birth history or menopause symptoms, movement comfort, and personal fitness goals.",
      },
      {
        phase: "Phase 2: Tailored Life-Stage Program",
        details: "Weekly 1-on-1 coaching or small group sessions integrating pelvic floor awareness with progressive functional strength.",
      },
      {
        phase: "Phase 3: Ongoing Milestone Re-Evaluation",
        details: "Periodic reviews at 6 and 12 weeks to celebrate strength gains, improved posture, and everyday maternal vitality.",
      },
    ],
    placeholderCards: [
      {
        id: "case-study-1",
        label: "[Client Case Study 01 - Postpartum Return]",
        category: "Postnatal Core Reconnection & Stroller Fitness",
        demographic: "[Stoney Creek Mother of Two]",
        timeline: "[12-Week Postnatal Journey]",
        metricsPlaceholder: "Baseline: [Core Fatigue & Hesitation] → Follow-up: [Confident Deadlifts & Full Day Stamina]",
      },
      {
        id: "case-study-2",
        label: "[Client Case Study 02 - Prenatal Strength]",
        category: "Prenatal Conditioning & Labour Preparation",
        demographic: "[First-Time Expectant Mother / Stoney Creek]",
        timeline: "[Second & Third Trimester Program]",
        metricsPlaceholder: "Baseline: [Postural Fatigue] → Follow-up: [Strong Pelvic Stability & Breath Control]",
      },
      {
        id: "case-study-3",
        label: "[Client Case Study 03 - Menopause Vitality]",
        category: "Bone Health & Strength in Perimenopause",
        demographic: "[Active Midlife Professional]",
        timeline: "[16-Week Strength Progression]",
        metricsPlaceholder: "Baseline: [Declining Energy & Muscle Tone] → Follow-up: [Consistent Barbell Strength & Vitality]",
      },
    ],
  },
  nutrition: {
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
  },
};
