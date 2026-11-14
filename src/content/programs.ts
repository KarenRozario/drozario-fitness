export interface ProgramData {
  slug: string;
  number: string;
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
  modernColorBlock?: {
    bg: string;
    text: string;
    accent: string;
  };
}

export const programsContent: {
  kicker: string;
  headline: string;
  subhead: string;
  programs: ProgramData[];
} = {
  kicker: "CURATED OFFERINGS · STONEY CREEK",
  headline: "Programs For Every Chapter",
  subhead: "Specialised strength coaching tailored to women's bodies, hormonal shifts, and maternal life stages.",
  programs: [
    {
      slug: "prenatal-fitness",
      number: "01",
      title: "Prenatal Fitness",
      stageName: "First, Second & Third Trimesters",
      shortDescription: "Safe, empowering strength training to prepare your body for birth, support posture, and maintain energy through every trimester.",
      fullDescription: "Our prenatal fitness program helps expectant mothers maintain functional strength, support comfortable posture, and practice pelvic floor awareness. Every movement is tailored to your trimester and energy levels, helping you feel strong and confident throughout your pregnancy.",
      whoItsFor: "Expectant mothers at any trimester with medical clearance seeking expert, supportive movement.",
      sessionOverview: "Breath mechanics, core stability, modified squats and hinges, upper body posture conditioning, and relaxation strategies for labour preparation.",
      benefits: [
        "Strengthens core and pelvic floor muscles safely",
        "Supports spine and posture as your belly grows",
        "Improves endurance and breath control for labour",
        "Maintains cardiovascular stamina and daily energy",
        "Reduces common pregnancy aches in hips and lower back",
      ],
      image: `${import.meta.env.BASE_URL}images/program-prenatal.jpg`,
      pricingPlaceholder: "Private Coaching & Small Group Prenatal Pods available — [Pricing details upon inquiry]",
      medicalNotice: "Requires verbal or written clearance from your OB-GYN or midwife before commencing sessions.",
      modernColorBlock: {
        bg: "bg-[#2E1A47]",
        text: "text-white",
        accent: "text-[#FF6B4A]",
      },
    },
    {
      slug: "postnatal-fitness",
      number: "02",
      title: "Postnatal Fitness & Core Rebuilding",
      stageName: "Early Postpartum to 2+ Years",
      shortDescription: "Gentle, progressive rebuilding of core strength, pelvic stability, and full-body stamina following childbirth.",
      fullDescription: "Postpartum recovery is not about 'bouncing back'—it is about rebuilding your body's foundation with patience and expertise. We focus on reconnecting deep core muscles, restoring pelvic floor integrity, and steadily building strength for lifting, carrying, and everyday motherhood.",
      whoItsFor: "Mothers from 6 weeks postpartum onward (with healthcare provider sign-off), whether 3 months or 3 years after delivery.",
      sessionOverview: "Diaphragmatic breathing, gentle glute and core activation, stroller-safe functional patterns, progressive dumbbell work, and pelvic floor coordination.",
      benefits: [
        "Re-educates deep core muscles following delivery",
        "Safe progressions for women returning to movement",
        "Builds stamina for carrying, nursing, and baby gear",
        "Restores posture and relieves upper-back tension",
        "Welcoming environment where babies are always welcome in private sessions",
      ],
      image: `${import.meta.env.BASE_URL}images/program-postnatal.jpg`,
      pricingPlaceholder: "Postpartum Starter Series & Monthly Memberships — [Pricing details upon inquiry]",
      medicalNotice: "Requires 6-week postpartum clearance from your physician or midwife (10–12 weeks for caesarean birth).",
      modernColorBlock: {
        bg: "bg-[#F1ECF8]",
        text: "text-[#2E1A47]",
        accent: "text-[#FF6B4A]",
      },
    },
    {
      slug: "perimenopause-menopause",
      number: "03",
      title: "Perimenopause & Menopause Strength",
      stageName: "Midlife Transition & Hormonal Shifts",
      shortDescription: "Resistance training to build strength, support healthy bones and keep your energy up through every transition.",
      fullDescription: "As your body navigates hormonal transitions, resistance training is one of the most effective ways to feel strong, energized, and capable. We design progressive strength workouts that focus on building lean muscle, supporting bone health, improving sleep quality, and maintaining vibrant physical confidence.",
      whoItsFor: "Women in perimenopause, menopause, or post-menopause who want to build functional muscle, support their bones, and feel empowered.",
      sessionOverview: "Compound multi-joint resistance training (squats, deadlifts, presses), grip and core stability, impact-friendly bone-loading drills, and mobility work.",
      benefits: [
        "Resistance training to build strength, support healthy bones and keep your energy up through every transition",
        "Supports lean muscle mass and physical resilience",
        "Promotes better sleep patterns and daily energy levels",
        "Enhances joint mobility, flexibility, and physical poise",
        "Encouraging, knowledgeable coaching tailored to fluctuating energy",
      ],
      image: `${import.meta.env.BASE_URL}images/program-menopause.jpg`,
      pricingPlaceholder: "Semi-Private Pods & 1-on-1 Coaching Packages — [Pricing details upon inquiry]",
      modernColorBlock: {
        bg: "bg-[#FF6B4A]",
        text: "text-white",
        accent: "text-white/80",
      },
    },
    {
      slug: "strong-after-50",
      number: "04",
      title: "Strong After 50",
      stageName: "Lifelong Vitality & Longevity",
      shortDescription: "Functional strength, balance, and mobility designed to keep you feeling independent, active, and capable for decades to come.",
      fullDescription: "Strength has no age limit. Our Strong After 50 program celebrates women who want to stay active, climb stairs with ease, play with grandchildren, travel, and enjoy vibrant physical freedom without fear of stumbling or losing strength.",
      whoItsFor: "Women 50, 60, 70, and beyond who desire tailored, respectful strength coaching in a private, supportive studio setting.",
      sessionOverview: "Progressive functional resistance training, balance and gait stability, core strength, rotational power, and gentle joint mobility.",
      benefits: [
        "Maintains bone strength and muscular power as you age",
        "Enhances balance, foot-ground awareness, and stability",
        "Protects joint range of motion and overall functional ease",
        "Increases vitality for gardening, hiking, and active travel",
        "Welcoming community of peers who celebrate every milestone",
      ],
      image: `${import.meta.env.BASE_URL}images/program-strong-after-50.jpg`,
      pricingPlaceholder: "Weekly Small Groups & Private Packages — [Pricing details upon inquiry]",
      modernColorBlock: {
        bg: "bg-white",
        text: "text-[#2E1A47]",
        accent: "text-[#FF6B4A]",
      },
    },
  ],
};

