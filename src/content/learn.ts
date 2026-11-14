export interface BlogPostSummary {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  status: string;
  excerpt: string;
  image: string;
  author: string;
  sections?: {
    heading: string;
    body: string[];
  }[];
}

export interface CaseStudySummary {
  id: string;
  label: string;
  category: string;
  demographic: string;
  timeline: string;
  metricsPlaceholder: string;
}

export const learnContent = {
  kicker: "INSIGHTS & STORIES",
  headline: "Movement Science & Client Stories",
  subhead: "Evidence-informed guidance on prenatal fitness, core rebuilding, menopause strength, and real milestones from Stoney Creek women.",
  blogPosts: [
    {
      slug: "core-and-pelvic-floor-in-pregnancy",
      title: "Core and Pelvic Floor Awareness During Pregnancy",
      category: "Prenatal Movement",
      readTime: "4 min read",
      status: "Published",
      excerpt: "Understanding how breath and intra-abdominal pressure work together can transform your comfort during pregnancy and labour.",
      image: `${import.meta.env.BASE_URL}images/blog-core-pelvic-floor.webp`,
      author: "Rachel D'Rozario",
      sections: [
        {
          heading: "Why Pelvic Floor Awareness Matters Early",
          body: [
            "During pregnancy, your body undergoes significant postural and hormonal shifts. The hormone relaxin softens ligaments, while your center of gravity naturally moves forward as baby grows.",
            "Instead of traditional crunches or high-pressure abdominal exercises, prenatal core training focuses on coordinated diaphragmatic breathing and deep core stabilization. This protects your lower back, reduces pelvic girdle discomfort, and lays the groundwork for a smoother delivery and postpartum recovery.",
          ],
        },
        {
          heading: "The 360-Degree Breath",
          body: [
            "One of the simplest yet most effective exercises you can practice is the 360-degree ribcage breath. Sit tall on an exercise ball or firm chair, place your hands around your lower ribs, and inhale gently into the sides and back of your ribs rather than just your belly.",
            "As you exhale, feel your ribs softly come back down and gently engage your pelvic floor from the bottom up. Practicing this for 5 minutes daily builds muscle memory that will serve you throughout labour.",
          ],
        },
      ],
    },
    {
      slug: "why-heavy-weights-matter-in-menopause",
      title: "Why Resistance Training is Essential in Perimenopause",
      category: "Midlife Strength",
      readTime: "5 min read",
      status: "Published",
      excerpt: "Why lifting weights is one of the most empowering habits women can build during hormonal transitions.",
      image: `${import.meta.env.BASE_URL}images/blog-menopause-strength.webp`,
      author: "Rachel D'Rozario",
      sections: [
        {
          heading: "The Physiology of Midlife Transitions",
          body: [
            "As oestrogen levels fluctuate and decline during perimenopause and menopause, women naturally experience accelerated muscle mass loss and changes in bone mineral density. Cardio alone is no longer enough to maintain functional health.",
            "Progressive resistance training sends a direct mechanical signal to both muscle and bone tissue to stay dense, strong, and active. It is not about bulking up; it is about protecting your functional independence.",
          ],
        },
        {
          heading: "Starting Safely with Progressive Overload",
          body: [
            "If you have never lifted weights before, starting in a private coaching setting ensures your movement mechanics and joint alignments are respected. We start with foundational movement patterns: the squat, hip hinge, push, pull, and loaded carry.",
            "Gradually adding resistance over 8 to 12 weeks yields remarkable improvements in sleep quality, joint comfort, posture, and daily energy.",
          ],
        },
      ],
    },
    {
      slug: "returning-to-exercise-postpartum",
      title: "Returning to Fitness After Giving Birth: A Sensible Timeline",
      category: "Postnatal Recovery",
      readTime: "6 min read",
      status: "Published",
      excerpt: "Skip the rush to 'bounce back.' Here is how to rebuild your body with care, patience, and true functional strength.",
      image: `${import.meta.env.BASE_URL}images/blog-postnatal-return.webp`,
      author: "Rachel D'Rozario",
      sections: [
        {
          heading: "The Fourth Trimester is for Healing",
          body: [
            "Society often puts unfair pressure on mothers to rush back into high-intensity workouts weeks after giving birth. However, true recovery honours the healing of pelvic tissues, abdominal fascia, and systemic fatigue.",
            "The first six weeks should be dedicated to rest, gentle walking, and diaphragmatic breathing. Only after receiving full medical clearance from your doctor or midwife should structured resistance training begin.",
          ],
        },
        {
          heading: "Building from the Inside Out",
          body: [
            "Our Stoney Creek postnatal programs focus first on pelvic stability, glute strength, and upper-back mobility to counter the hunched posture of feeding and carrying.",
            "With progressive guidance, mothers move from basic breath integration to deadlifts, carries, and bodyweight conditioning with complete confidence.",
          ],
        },
      ],
    },
  ],
  stories: {
    headline: "Real Journeys of Stoney Creek Women",
    subhead: "At D'Rozario Fitness, we celebrate functional progress and personal confidence. We are compiling verified movement case studies from our Stoney Creek prenatal, postnatal, and menopause clients.",
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
};

