export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavDropdownItem {
  label: string;
  description?: string;
  href: string;
  badge?: string;
}

export interface NavDropdown {
  label: string;
  href?: string;
  items: NavDropdownItem[];
}

export const navigationContent = {
  bookCta: {
    label: "Book a session",
    href: "#book",
  },
  primaryNav: [
    {
      type: "dropdown" as const,
      label: "Programs",
      href: "/programs",
      items: [
        {
          label: "Prenatal Fitness",
          description: "First, second & third trimester conditioning",
          href: "/programs/prenatal-fitness",
          badge: "01",
        },
        {
          label: "Postnatal Fitness & Core",
          description: "Pelvic floor-aware recovery & rebuilding",
          href: "/programs/postnatal-fitness",
          badge: "02",
        },
        {
          label: "Perimenopause & Menopause",
          description: "Resistance training for bone health & strength",
          href: "/programs/perimenopause-menopause",
          badge: "03",
        },
        {
          label: "Strong After 50",
          description: "Functional vitality, balance & longevity",
          href: "/programs/strong-after-50",
          badge: "04",
        },
        {
          label: "Nutrition Coaching",
          description: "Nourishing your body through every life stage",
          href: "/nutrition",
          badge: "N",
        },
      ],
      footerLink: {
        label: "View All Programs →",
        href: "/programs",
      },
    },
    {
      type: "link" as const,
      label: "Find Your Program",
      href: "/find-your-program",
    },
    {
      type: "link" as const,
      label: "Meet Rachel",
      href: "/team",
    },
    {
      type: "link" as const,
      label: "Community",
      href: "/community",
    },
    {
      type: "dropdown" as const,
      label: "Learn",
      href: "/blog",
      items: [
        {
          label: "Articles & Insights",
          description: "Movement science & life-stage guidance",
          href: "/blog",
        },
        {
          label: "Client Stories",
          description: "Real movement journeys of Stoney Creek women",
          href: "/stories",
        },
      ],
    },
    {
      type: "link" as const,
      label: "Contact",
      href: "/contact",
    },
  ],
  footerLinks: [
    { label: "Programs", href: "/programs" },
    { label: "Nutrition", href: "/nutrition" },
    { label: "Meet Rachel", href: "/team" },
    { label: "Find Your Program", href: "/find-your-program" },
    { label: "Community", href: "/community" },
    { label: "Articles & Insights", href: "/blog" },
    { label: "Client Stories", href: "/stories" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
};

