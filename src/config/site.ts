/**
 * Centralized Configuration for D'Rozario Muscle Release
 * 
 * ALL business details, contact information, service definitions,
 * and the primary booking URL live exclusively in this file.
 */

export const BOOKING_URL = "#book";

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

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whoItsFor: string;
  sessionOverview: string;
  benefits: string[];
  image: string;
  pricingPlaceholder: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  commonSymptoms: string[];
  protocol: string;
}

export interface PainRegion {
  id: string;
  name: string;
  view: 'front' | 'back' | 'both';
  coordinates: { x: number; y: number }; // Percentage position on SVG body map
  commonCauses: string;
  howWeHelp: string;
  suggestedServiceSlug: string;
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

export const siteConfig = {
  name: "D'Rozario Muscle Release",
  shortName: "D'Rozario",
  tagline: "Stoney Creek Personal Training & Recovery",
  owner: "Rachel D'Rozario",
  description: "Targeted 1-on-1 personal training and restorative muscle release therapy in Stoney Creek, Ontario. Train hard, relieve pain, and restore athletic movement.",
  
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
      title: "1-on-1 Coached Precision",
      description: "Direct, undivided attention every minute of your session, customized to your unique movement mechanics and goals.",
      icon: "ShieldCheck",
    },
    {
      title: "Recovery in Every Plan",
      description: "We weave soft-tissue release, fascial work, and mobility directly into your program so you adapt without breakdown.",
      icon: "Activity",
    },
    {
      title: "Objective Results Tracked",
      description: "Structured functional assessments track joint mobility, muscle firing, and power gains session by session.",
      icon: "Target",
    },
    {
      title: "Local Stoney Creek Studio",
      description: "A private, distraction-free athletic recovery facility dedicated to your focus and performance.",
      icon: "MapPin",
    },
  ],

  // Journey Steps (Home Section 3)
  journeySteps: [
    {
      number: "01",
      title: "Comprehensive Movement Assessment",
      description: "We evaluate joint range of motion, muscle imbalances, pain triggers, and past athletic history to understand your body's specific blueprint.",
    },
    {
      number: "02",
      title: "Customized Training & Recovery Plan",
      description: "A dual-phase roadmap combining progressive strength loading with targeted soft-tissue protocols matched to your schedule and goals.",
    },
    {
      number: "03",
      title: "High-Intent Strength Training",
      description: "Build robust joint stability, functional power, and clean movement patterns under coach supervision.",
    },
    {
      number: "04",
      title: "Targeted Muscle Release Therapy",
      description: "Manual myofascial release and neuromuscular resetting to release chronic spasms, alleviate tension, and accelerate tissue repair.",
    },
  ],

  // Team: Just ONE person — Rachel D'Rozario (no other trainers)
  team: [
    {
      id: "rachel-drozario",
      name: "Rachel D'Rozario",
      role: "Founder, Head Personal Trainer & Muscle Release Specialist",
      isOwner: true,
      image: "/images/rachel-drozario.jpg",
      certifications: "[Certification placeholder, e.g. CPT, Muscle Release Practitioner]",
      bio: "Rachel founded D'Rozario Muscle Release to offer Stoney Creek a higher standard of athletic care — bridging the gap between heavy, progressive strength training and precise hands-on muscle release. Working with athletes, lifters, and active community members, Rachel focuses on uncovering root biomechanical restrictions to eliminate persistent pain and unlock long-term strength. Every client works directly with Rachel 1-on-1.",
      specialities: [
        "Hands-On Myofascial Release",
        "Biomechanical Movement Screening",
        "Athletic Strength & Conditioning",
        "Post-Rehab Integration",
      ],
    },
  ] as TeamMember[],

  // Services
  services: [
    {
      slug: "personal-training",
      title: "Personal Training",
      shortDescription: "Private 1-on-1 strength and conditioning designed around your anatomy, movement mechanics, and physical goals.",
      fullDescription: "Our Stoney Creek personal training sessions blend foundational barbell and dumbbell strength principles with individualized biomechanical coaching. Whether you are building functional power, overcoming movement plateaus, or rebuilding joint resilience, every repetition is coached with strict intent and precision.",
      whoItsFor: "Athletes, dedicated lifters, and busy professionals who want focused 1-on-1 coaching without the noise and chaos of a commercial gym.",
      sessionOverview: "60-minute focused session comprising dynamic movement prep, primary multi-joint strength work, targeted accessory loading, and active cool-down with movement screening.",
      benefits: [
        "100% personalized strength programming",
        "Direct real-time form correction & motor learning",
        "Continuous progression and load tracking",
        "Integration with recovery protocols to prevent burnout",
      ],
      image: "/images/service-personal-training.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
    {
      slug: "muscle-release-recovery",
      title: "Muscle Release & Recovery",
      shortDescription: "Targeted hands-on myofascial release to eliminate stubborn tension, restore range of motion, and accelerate recovery.",
      fullDescription: "Deep, targeted soft-tissue release focused on breaking down fascial adhesions, easing persistent joint compression, and resetting chronically tight muscle groups. Designed as a standalone restorative session or paired directly with your lifting program.",
      whoItsFor: "Anyone experiencing chronic stiffness, tension headaches, locked hips, tight shoulders, or lingering post-workout fatigue.",
      sessionOverview: "Hands-on neuromuscular assessment, targeted manual release therapy, active tissue elongation, and take-home joint mobilization drills.",
      benefits: [
        "Rapid relief from chronic myofascial trigger points",
        "Restores natural joint range of motion and gliding",
        "Alleviates compensatory muscle guarding",
        "Improves blood flow and lymphatic drainage for tissue repair",
      ],
      image: "/images/service-muscle-release.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
    {
      slug: "sports-performance",
      title: "Sports Performance",
      shortDescription: "Speed, power, and rotational capacity development built specifically for competitive and recreational athletes.",
      fullDescription: "Structured athletic development focusing on force production, deceleration mechanics, kinetic chain efficiency, and sport-specific energy system conditioning. We build athletes who are fast, resilient, and durable on the ice, field, or court.",
      whoItsFor: "Hockey, soccer, rugby, baseball, golf, and endurance athletes looking to improve in-game explosiveness and minimize non-contact injury risks.",
      sessionOverview: "High-intensity athletic profiling, force-velocity training, multi-directional agility drills, power development, and specialized athletic recovery.",
      benefits: [
        "Enhanced explosive power and acceleration mechanics",
        "Kinetic chain rotational power for striking, throwing, and skating",
        "Deceleration and landing mechanics for ACL injury risk reduction",
        "Sport-specific conditioning and work capacity",
      ],
      image: "/images/service-sports-performance.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
    {
      slug: "mobility-injury-prevention",
      title: "Mobility & Injury Prevention",
      shortDescription: "Targeted joint articulation, stability drills, and movement retraining to keep you durable and pain-free long-term.",
      fullDescription: "A proactive methodology targeting restricted capsular space, asymmetrical motor control, and tendon vulnerability. We build strong joints at terminal ranges of motion so your body can absorb force safely without breaking down.",
      whoItsFor: "Lifters dealing with recurring tweaks, desk workers with postural strain, and adults committed to preserving functional independence.",
      sessionOverview: "Functional range conditioning, end-range isometric holds, motor control patterning, and spine, hip, and shoulder decompression.",
      benefits: [
        "Unlocks usable, active range of motion (not just passive flexibility)",
        "Builds connective tissue and tendon tolerance",
        "Addresses kinetic chain imbalances before they cause injury",
        "Restores fluid, natural human movement patterns",
      ],
      image: "/images/service-mobility.jpg",
      pricingPlaceholder: "[Price per session / package details]",
    },
  ] as ServiceItem[],

  // Focus Areas
  focusAreas: [
    {
      id: "lower-back",
      title: "Lower Back & Spine",
      description: "Relieve spinal compression, strengthen deep pelvic stabilizers, and regain flexion and extension tolerance without fear.",
      commonSymptoms: ["Stiffness getting out of bed", "Ache during long drives", "Pain under barbell loading"],
      protocol: "Targeted release of psoas, quadratus lumborum, and gluteus medius alongside anti-rotational core stabilization.",
    },
    {
      id: "shoulders",
      title: "Shoulder & Upper Back",
      description: "Unstick impinged scapulae, open overhead positioning, and restore rotator cuff integrity for pressing and throwing.",
      commonSymptoms: ["Pinching when reaching overhead", "Trapezius knots", "Weakness in shoulder abduction"],
      protocol: "Pec minor and latissimus release combined with scapular upward rotation mechanics and rotator cuff eccentric loading.",
    },
    {
      id: "hips-knees",
      title: "Hips & Knees",
      description: "Balance pelvic tilt, loosen locked hip flexors, and build knee tracking stability across deep squats and running strides.",
      commonSymptoms: ["Clicking hips during walking", "Anterior knee pain on stairs", "Deep joint stiffness after squatting"],
      protocol: "Hip capsule mobilization, TFL/IT-band soft tissue work, and VMO (quad) and hamstring stabilization.",
    },
    {
      id: "posture",
      title: "Posture & Desk Strain",
      description: "Reverse rounded shoulders, forward-head posture, and thoracic stiffness from long hours at the desk or behind the wheel.",
      commonSymptoms: ["Mid-back burning between shoulder blades", "Tension headaches", "Shallow chest breathing"],
      protocol: "Thoracic spine extension mobilization, suboccipital release, and mid-trap/rhomboid endurance retraining.",
    },
    {
      id: "post-injury",
      title: "Post-Injury Return to Sport",
      description: "Safely bridge the critical gap between basic clinical physiotherapy clearance and returning to intense athletic performance.",
      commonSymptoms: ["Hesitation loading the joint", "Loss of sport speed", "Compensating on the opposite side"],
      protocol: "Progressive reload protocols, kinetic chain synchronization, and sport-specific deceleration drills.",
    },
    {
      id: "athletic-performance",
      title: "Athletic Performance",
      description: "Optimize force transfer across the kinetic chain, improve sprint mechanics, and build bulletproof tissue tolerance.",
      commonSymptoms: ["Performance plateaus", "Loss of first-step explosiveness", "Chronic post-game tightness"],
      protocol: "Triphasic strength methods, rotational power development, and contrast recovery sessions.",
    },
  ] as FocusArea[],

  // Pain Locator Regions
  painRegions: [
    {
      id: "neck-upper-traps",
      name: "Neck & Upper Trapezius",
      view: "back",
      coordinates: { x: 50, y: 15 },
      commonCauses: "Prolonged desk work, forward-head posture, elevated shoulders under stress, or heavy loading without proper cervical stability.",
      howWeHelp: "Targeted release of suboccipitals and levator scapulae, combined with lower-trap activation drills and thoracic spine extension.",
      suggestedServiceSlug: "muscle-release-recovery",
    },
    {
      id: "shoulders",
      name: "Shoulder & Rotator Cuff",
      view: "front",
      coordinates: { x: 30, y: 22 },
      commonCauses: "Impingement during overhead movements, pec minor tightness pulling shoulders forward, and rotator cuff tendon overload.",
      howWeHelp: "Manual release of anterior shoulder capsule, pec minor therapy, and eccentric rotator cuff strengthening drills.",
      suggestedServiceSlug: "personal-training",
    },
    {
      id: "chest-pecs",
      name: "Chest & Anterior Shoulder",
      view: "front",
      coordinates: { x: 50, y: 24 },
      commonCauses: "High bench press volume without antagonist rowing balance, slumped forward posture, and breathing restrictions.",
      howWeHelp: "Pectoralis major and minor myofascial release, rib cage expansion drills, and scapular retraction retraining.",
      suggestedServiceSlug: "muscle-release-recovery",
    },
    {
      id: "lower-back",
      name: "Lower Back (Lumbar Spine)",
      view: "back",
      coordinates: { x: 50, y: 44 },
      commonCauses: "Chronically tight hip flexors pulling the pelvis into anterior tilt, weak glute firing, and spinal erector fatigue under load.",
      howWeHelp: "Targeted myofascial release through the psoas and QL, gluteus medius activation, and anti-extension core stabilization.",
      suggestedServiceSlug: "mobility-injury-prevention",
    },
    {
      id: "hips-glutes",
      name: "Hips & Glutes",
      view: "back",
      coordinates: { x: 50, y: 53 },
      commonCauses: "Prolonged sitting leading to shortened hip flexors, deep piriformis tension irritating the sciatic pathway, and lack of hip extension.",
      howWeHelp: "Deep gluteal manual therapy, hip capsule distraction, and multi-planar hip hinge loading.",
      suggestedServiceSlug: "personal-training",
    },
    {
      id: "knees",
      name: "Knees & Patellar Tendon",
      view: "front",
      coordinates: { x: 42, y: 72 },
      commonCauses: "Quadriceps dominance, tight IT-band complexes, restricted ankle dorsiflexion, and hip stability deficits on single-leg impact.",
      howWeHelp: "Targeted quadriceps and TFL soft-tissue therapy, ankle joint mobilization, and VMO / hamstring co-contraction protocols.",
      suggestedServiceSlug: "sports-performance",
    },
    {
      id: "hamstrings-calves",
      name: "Hamstrings & Calves",
      view: "back",
      coordinates: { x: 50, y: 76 },
      commonCauses: "Anterior pelvic tilt putting hamstrings on constant tension, calf tightness from running, and plantar fascia restriction.",
      howWeHelp: "Active hamstring release therapy, deep gastroc and soleus manual work, and progressive posterior chain loading.",
      suggestedServiceSlug: "mobility-injury-prevention",
    },
  ] as PainRegion[],

  // Blog Posts (Marked [Draft])
  blogPosts: [
    {
      slug: "why-stretching-isnt-fixing-your-tight-hamstrings",
      title: "Why Static Stretching Isn't Fixing Your Tight Hamstrings [Draft]",
      category: "Recovery & Biomechanics",
      readTime: "4 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-1.jpg",
      excerpt: "If you've been stretching your hamstrings every single morning with zero lasting relief, your pelvis might be tricking you. Here is why active strength at end-range outperforms passive stretching.",
      sections: [
        {
          heading: "The Illusion of 'Tightness'",
          body: [
            "Every week at our Stoney Creek studio, athletes tell us the exact same story: 'I stretch my hamstrings every single day, but they feel like steel cables the moment I stand up.'",
            "What feels like tightness is often neurological tension caused by anterior pelvic tilt. When your pelvis tips forward (common with prolonged desk work and tight hip flexors), your hamstrings are physically pulled taut like a rubber band over a wheel.",
            "Stretching an already over-lengthened muscle sends alarm signals to your nervous system, causing it to tighten up even more to protect the hip and knee joints.",
          ],
        },
        {
          heading: "The Release + Reload Solution",
          body: [
            "Instead of mindless passive pulling, real recovery requires two targeted phases: releasing the overactive antagonists (hip flexors and quads) and loading the hamstrings through eccentric strength.",
            "When we apply targeted muscle release to the hip flexor complex, the pelvis can settle back into a neutral position, instantly relieving tension off the hamstring attachment.",
            "Following this with progressive Romanian deadlifts teaches the nervous system that your hamstrings are strong and safe across their full range.",
          ],
        },
      ],
    },
    {
      slug: "building-bulletproof-shoulders-for-stoney-creek-athletes",
      title: "Shoulder Mobility Guide: Improve Flexibility, Stability and Control [Draft]",
      category: "Sports Performance",
      readTime: "5 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-2.jpg",
      excerpt: "Strong, mobile shoulders help you move confidently through everyday activities and perform more effectively in the gym. This guide explores every major shoulder movement pattern.",
      sections: [
        {
          heading: "Why Bench Pressing Alone Creates Joint Compression",
          body: [
            "Athletes love horizontal pressing, but repeated heavy loading without adequate scapular movement creates anterior humeral glide and impinges the rotator cuff tendon.",
            "If the scapula cannot freely glide and rotate upwards along the rib cage, your humerus jams into the acromion process every time you lift your arm above parallel.",
          ],
        },
        {
          heading: "Restoring the Serratus and Rotator Cuff",
          body: [
            "By targeting the pec minor with manual release and activating the serratus anterior with upward reaching drills, we create space inside the glenohumeral joint.",
            "At D'Rozario Muscle Release, our athletes train with high intensity while maintaining healthy, pain-free shoulders year-round.",
          ],
        },
      ],
    },
    {
      slug: "the-science-of-targeted-muscle-release-explained",
      title: "How 1-on-1 Coached Recovery Helps You Achieve Your Goals [Draft]",
      category: "Muscle Release & Therapy",
      readTime: "6 min read",
      status: "[Draft]",
      author: "Rachel D'Rozario",
      image: "/images/blog-3.jpg",
      excerpt: "When you have the right 1-on-1 support, you start to enjoy the training process. The studio becomes a place of progress, and movement becomes a sustainable tool for lifelong health.",
      sections: [
        {
          heading: "It's Not Just Muscle — It's Neurological",
          body: [
            "Many people think muscle release is about physically 'crushing knots.' In reality, muscular knots are localized contractions sustained by protective reflex loops in your nervous system.",
            "When precise pressure and active movement are applied, mechanoreceptors in your fascia signal your brain to down-regulate motor tone, allowing the muscle fibres to release tension.",
          ],
        },
        {
          heading: "Why Integrating Training Is the Missing Link",
          body: [
            "Manual therapy opens a temporary window of increased mobility. If you don't reinforce that new range with active strength training immediately afterwards, your brain reverts to its old guarded patterns.",
            "That is why our hybrid approach in Stoney Creek combines hands-on release and structured strength in the same ecosystem.",
          ],
        },
      ],
    },
  ] as BlogPost[],

  // Client Stories Placeholder Structure (NO invented reviews/ratings/testimonials)
  clientStoriesPlaceholder: {
    notice: "Real Case Studies & Client Movement Journeys",
    frameworkHeading: "How We Document & Verify Client Progress",
    description: "At D'Rozario Muscle Release, we prioritize measurable functional outcomes over generic claims. We are currently compiling structured case studies following our Stoney Creek athletes and recovery clients.",
    steps: [
      {
        phase: "Phase 1: Baseline Assessment",
        details: "Digital range-of-motion measurements, strength symmetry testing, and subjective pain index scoring upon day one.",
      },
      {
        phase: "Phase 2: Hybrid Intervention",
        details: "Weekly breakdown of targeted muscle release protocols paired with progressive resistance training.",
      },
      {
        phase: "Phase 3: Functional Re-Testing",
        details: "Standardized re-assessment at 4, 8, and 12 weeks to objectively quantify mobility gains, strength progress, and pain reduction.",
      },
    ],
    placeholderCards: [
      {
        id: "case-study-1",
        label: "[Client Case Study 01 - In Progress]",
        category: "Chronic Lower Back & Deadlift Return",
        demographic: "[Local Stoney Creek Lifter]",
        timeline: "[8-Week Assessment Cycle]",
        metricsPlaceholder: "Baseline: [Mobility Limitation] → Re-test: [Full Range & Load Tolerance]",
      },
      {
        id: "case-study-2",
        label: "[Client Case Study 02 - In Progress]",
        category: "Overhead Shoulder Mobility & Overhead Press",
        demographic: "[Competitive Athlete / Stoney Creek]",
        timeline: "[6-Week Assessment Cycle]",
        metricsPlaceholder: "Baseline: [Scapular Restriction] → Re-test: [Pain-Free Full Upward Rotation]",
      },
      {
        id: "case-study-3",
        label: "[Client Case Study 03 - In Progress]",
        category: "Knee Tracking & Post-Injury Return to Sport",
        demographic: "[Adult Recreational Athlete]",
        timeline: "[12-Week Assessment Cycle]",
        metricsPlaceholder: "Baseline: [Patellar Tendon Guarding] → Re-test: [Full Single-Leg Deceleration]",
      },
    ],
  },
};
