export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export const DESIGNER = {
  name: "John Odeniyi",
  role: "Graphics & UI/UX Designer",
  tagline: "Designing brands and digital experiences that people remember.",
  heroBio:
    "I'm a multidisciplinary Graphics & UI/UX Designer creating bold visual identities, digital products, and experiences for ambitious brands.",
  aboutBioTitle: "Designer, problem solver, visual storyteller.",
  aboutBioParagraphs: [
    "With over half a decade of hands-on experience across digital products, visual identities, and brand strategy, I craft thoughtful design systems that live at the intersection of aesthetics and functionality.",
    "My work spans from early-stage startup branding to scaling complex enterprise UI/UX platforms. I believe design is not just how something looks, but how effortlessly it connects with people.",
    "When I am not designing, I explore architectural photography, editorial typography, and physical print production.",
  ],
  availability: "Available for select projects",
  portraitImage: "/john.jpg",
  contactEmail: "john.odeniyi@gmail.com",
  location: "London, UK / Remote Worldwide",
  socials: [
    { name: "Behance", url: "https://behance.net", handle: "@johnodeniyi" },
    { name: "Dribbble", url: "https://dribbble.net", handle: "@johnodeniyi" },
    {
      name: "Instagram",
      url: "https://instagram.com",
      handle: "@johnodeniyi.design",
    },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "john-odeniyi" },
  ],
  stats: [
    {
      label: "Experience",
      value: "5+ Years",
      description: "Crafting brand & digital experiences",
    },
    {
      label: "Projects Completed",
      value: "80+",
      description: "Delivered worldwide",
    },
    {
      label: "Ambitious Brands",
      value: "30+",
      description: "Transformed visually",
    },
    {
      label: "Creative Assets",
      value: "250+",
      description: "Campaign & event deliverables",
    },
  ] as StatItem[],
  services: [
    {
      id: "brand-identity",
      number: "01",
      title: "Brand Identity",
      description:
        "Creating visual identities that communicate personality, values, and purpose across every touchpoint.",
      skills: [
        "Logo Design",
        "Visual Systems",
        "Brand Strategy",
        "Brand Guidelines",
        "Packaging",
      ],
    },
    {
      id: "graphic-design",
      number: "02",
      title: "Graphic & Event Design",
      description:
        "Campaigns, social content, event branding, art direction, and editorial visual communication.",
      skills: [
        "Event Branding",
        "Stage & Banner Graphics",
        "Social Media Kits",
        "Marketing Collateral",
      ],
    },
    {
      id: "ui-ux-design",
      number: "03",
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces, digital layouts, and web experiences users fall in love with.",
      skills: [
        "Web Applications",
        "Design Systems",
        "Wireframing",
        "Interactive Prototypes",
      ],
    },
  ] as ServiceItem[],
  process: [
    {
      number: "01",
      title: "Discover",
      description: "Understand the brand, audience, and core challenge.",
      details:
        "Deep dive interviews, competitive mapping, moodboarding, and aligning on vision.",
    },
    {
      number: "02",
      title: "Define",
      description: "Develop the strategy and visual direction.",
      details:
        "Structuring project roadmap, wireframes, stylescapes, and typographic hierarchy.",
    },
    {
      number: "03",
      title: "Explore",
      description: "Generate concepts, wireframes, and visual systems.",
      details:
        "Rapid iteration, exploratory concepts, layout testing, and interactive mockups.",
    },
    {
      number: "04",
      title: "Design",
      description: "Turn the strongest direction into polished work.",
      details:
        "Refining visual hierarchy, color palettes, typographic precision, and high-fidelity assets.",
    },
    {
      number: "05",
      title: "Deliver",
      description: "Prepare final assets and launch-ready designs.",
      details:
        "Comprehensive asset packages, print-ready specs, digital optimization, and support.",
    },
  ] as ProcessStepItem[],
  testimonials: [
    {
      quote:
        "Working with John completely transformed how we communicate our brand. The attention to detail, typography, and polish across all campaign touchpoints was incredible.",
      author: "Sarah Johnson",
      role: "Creative Lead",
      company: "A’Lime Media Limited",
    },
    {
      quote:
        "John delivered outstanding creatives for our media campaigns. Our engagement surged and our audience constantly compliments the visual quality.",
      author: "Marcus Chen",
      role: "Program Director",
      company: "A’Lime Impact Partnership",
    },
    {
      quote:
        "Exceptional artistic vision combined with prompt, reliable delivery. John raised the bar for our entire event branding strategy.",
      author: "Elena Rostova",
      role: "Communications Director",
      company: "Beyond the Pages",
    },
  ] as TestimonialItem[],
  clientLogos: [
    "A’LIME MEDIA LIMITED",
    "A’LIME IMPACT PARTNERSHIP",
    "WORLD ENVIRONMENT DAY",
    "BEYOND THE PAGES",
    "IMPACT ADVOCACY INITIATIVE",
    "SUSTAINABILITY MEDIA FORUM",
    "CREATIVE DIALOGUES",
  ],
};
