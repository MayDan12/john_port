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
  name: 'John Odeniyi',
  role: 'Graphics & UI/UX Designer',
  tagline: 'Designing brands and digital experiences that people remember.',
  heroBio: "I'm a multidisciplinary Graphics & UI/UX Designer creating bold visual identities, digital products, and experiences for ambitious brands.",
  aboutBioTitle: 'Designer, problem solver, visual storyteller.',
  aboutBioParagraphs: [
    'With over half a decade of hands-on experience across digital products, visual identities, and brand strategy, I craft thoughtful design systems that live at the intersection of aesthetics and functionality.',
    'My work spans from early-stage startup branding to scaling complex enterprise UI/UX platforms. I believe design is not just how something looks, but how effortlessly it connects with people.',
    'When I am not designing, I explore architectural photography, editorial typography, and physical print production.'
  ],
  availability: 'Available for select projects',
  portraitImage: '/projects/avatar.jpg',
  contactEmail: 'john.odeniyi@gmail.com',
  location: 'London, UK / Remote Worldwide',
  socials: [
    { name: 'Behance', url: 'https://behance.net', handle: '@alexvance' },
    { name: 'Dribbble', url: 'https://dribbble.net', handle: '@alexvance' },
    { name: 'Instagram', url: 'https://instagram.com', handle: '@alexvance.design' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'alexvance-design' }
  ],
  stats: [
    { label: 'Experience', value: '5+ Years', description: 'Crafting digital products' },
    { label: 'Projects Completed', value: '80+', description: 'Delivered worldwide' },
    { label: 'Ambitious Brands', value: '30+', description: 'Transformed visually' },
    { label: 'Global Footprint', value: '12 Countries', description: 'Clients across continents' }
  ] as StatItem[],
  services: [
    {
      id: 'brand-identity',
      number: '01',
      title: 'Brand Identity',
      description: 'Creating visual identities that communicate personality, values, and purpose across every touchpoint.',
      skills: ['Logo Design', 'Visual Systems', 'Brand Strategy', 'Brand Guidelines', 'Packaging']
    },
    {
      id: 'ui-ux-design',
      number: '02',
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces, design systems, and web/mobile app experiences users fall in love with.',
      skills: ['Mobile Apps', 'Web Applications', 'Design Systems', 'Wireframing', 'Interactive Prototypes']
    },
    {
      id: 'graphic-design',
      number: '03',
      title: 'Graphic Design',
      description: 'Campaigns, social content, physical collateral, art direction, and editorial visual communication.',
      skills: ['Editorial Layouts', 'Print & Poster Design', 'Social Media Kits', 'Marketing Collateral']
    },

  ] as ServiceItem[],
  process: [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand the brand, audience, and core challenge.',
      details: 'Deep dive interviews, competitive mapping, moodboarding, and aligning on vision.'
    },
    {
      number: '02',
      title: 'Define',
      description: 'Develop the strategy and visual direction.',
      details: 'Structuring project roadmap, wireframes, stylescapes, and typographic hierarchy.'
    },
    {
      number: '03',
      title: 'Explore',
      description: 'Generate concepts, wireframes, and visual systems.',
      details: 'Rapid iteration, exploratory UI concepts, layout testing, and interactive prototypes.'
    },
    {
      number: '04',
      title: 'Design',
      description: 'Turn the strongest direction into polished work.',
      details: 'Refining micro-interactions, dark/light variants, design tokens, and high-fidelity screens.'
    },
    {
      number: '05',
      title: 'Deliver',
      description: 'Prepare final assets and launch-ready designs.',
      details: 'Developer handoff specs, asset export package, documentation, and post-launch support.'
    }
  ] as ProcessStepItem[],
  testimonials: [
    {
      quote: 'Working with Alex completely transformed how we communicate our brand. The attention to detail, typography, and UI polish was incredible.',
      author: 'Sarah Johnson',
      role: 'Founder & CEO',
      company: 'Noma Living'
    },
    {
      quote: 'Alex delivered an Apple-level mobile interface for Aura Finance. Our users constantly compliment the fluidity and glassmorphic aesthetic.',
      author: 'Marcus Chen',
      role: 'Head of Product',
      company: 'Aura Financial'
    },
    {
      quote: 'Exceptional artistic vision combined with technical design system rigor. Alex raised the bar for our entire campaign strategy.',
      author: 'Elena Rostova',
      role: 'Creative Director',
      company: 'Vanta Atelier'
    }
  ] as TestimonialItem[],
  clientLogos: [
    'AURA FINANCE',
    'NOMA LIVING',
    'LUME IoT',
    'VANTA ATELIER',
    'HAVEN HOMES',
    'THE ATELIER GALLERY',
    'KINETIC LABS',
    'SPECTRUM AUDIO'
  ]
};
