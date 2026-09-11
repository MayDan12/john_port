export interface DesignSystem {
  colors: { hex: string; name: string }[];
  typography: { fontName: string; usage: string };
  highlights: string[];
}

export interface CaseStudyData {
  overview: string;
  challenge: string;
  approach: string;
  designSystem: DesignSystem;
  outcome: string;
  gallery: {
    src: string;
    caption: string;
    layout: 'full' | 'half' | 'third';
  }[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'UI/UX' | 'Branding' | 'Graphic Design' | 'Web Design' | 'Art Direction' | 'Social Media';
  allCategories: string[];
  year: string;
  client: string;
  description: string;
  services: string[];
  coverImage: string;
  featured: boolean;
  caseStudy?: CaseStudyData;
}

export const PROJECTS: Project[] = [
  {
    id: 'aura-finance',
    title: 'Aura Finance',
    slug: 'aura-finance',
    category: 'UI/UX',
    allCategories: ['UI/UX', 'Branding'],
    year: '2026',
    client: 'Aura Financial Technologies',
    description: 'Next-generation intelligent wealth management platform designed for modern investors seeking visual clarity and effortless portfolio automation.',
    services: ['UI/UX Design', 'Branding', 'Design System', 'Prototyping'],
    coverImage: '/projects/aura-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Aura Finance set out to revolutionize retail wealth management with a mobile-first platform that demystifies complex financial analytics into elegant, human-centered insights.',
      challenge: 'Legacy investment applications overwhelm users with dense data tables, confusing navigation, and aggressive color schemes. Aura needed a soothing, trustworthy, yet futuristic visual identity and mobile interface.',
      approach: 'We developed a translucent glassmorphism aesthetic centered on dark violet gradients and tactile micro-interactions. Every chart component was custom-designed for glanceability, using color-coded nodes rather than cluttered line graphs.',
      designSystem: {
        colors: [
          { hex: '#7C3AED', name: 'Electric Purple' },
          { hex: '#4C1D95', name: 'Deep Ultraviolet' },
          { hex: '#A78BFA', name: 'Soft Iris' },
          { hex: '#09090B', name: 'Obsidian' }
        ],
        typography: {
          fontName: 'Geist Sans & Inter',
          usage: 'Precision typography with custom numerical tabular fonts for real-time financial tracking.'
        },
        highlights: [
          'Adaptive Glassmorphic Cards',
          'Tactile Haptic-inspired UI Elements',
          'Biometric Quick-Action Bar'
        ]
      },
      outcome: 'Aura Finance achieved a 140% surge in daily active mobile user engagement within 60 days of launch and received an Apple Design Award nomination in Fintech Innovation.',
      gallery: [
        {
          src: '/projects/aura-cover.jpg',
          caption: 'Primary Dashboard Mobile Interface with Glassmorphic Widgets',
          layout: 'full'
        },
        {
          src: '/projects/lume-cover.jpg',
          caption: 'Real-time portfolio pulse & dark mode variant controls',
          layout: 'half'
        },
        {
          src: '/projects/vanta-cover.jpg',
          caption: 'Component library & custom typography system',
          layout: 'half'
        }
      ]
    }
  },
  {
    id: 'noma',
    title: 'Noma',
    slug: 'noma',
    category: 'Branding',
    allCategories: ['Branding', 'Art Direction'],
    year: '2026',
    client: 'Noma Living Studio',
    description: 'Minimal luxury brand identity and collateral design for an architectural lifestyle and interior design studio.',
    services: ['Brand Identity', 'Art Direction', 'Print & Packaging', 'Guidelines'],
    coverImage: '/projects/noma-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Noma crafts sustainable architectural spaces across Europe. They required an ultra-refined visual language that reflects their minimalist philosophy and spatial elegance.',
      challenge: 'Connecting raw textural architectural materials with high-end print collateral and digital touchpoints without appearing overly austere.',
      approach: 'We created a bespoke serif wordmark paired with blind debossed tactile stationery on heavyweight linen paper stock, paired with soft lavender and deep charcoal brand accents.',
      designSystem: {
        colors: [
          { hex: '#1C1917', name: 'Charcoal Black' },
          { hex: '#A78BFA', name: 'Studio Violet' },
          { hex: '#F5F5F4', name: 'Linen White' },
          { hex: '#44403C', name: 'Raw Basalt' }
        ],
        typography: {
          fontName: 'Custom Serif & Editorial Grotesk',
          usage: 'High contrast display serif titles with airy body prose.'
        },
        highlights: [
          'Embossed Physical Packaging',
          'Monochrome Identity Manual',
          'Architectural Spatial Signage'
        ]
      },
      outcome: 'Noma expanded into 3 new European capitals with a cohesive brand identity featured in Wallpaper* and Architectural Digest.',
      gallery: [
        {
          src: '/projects/noma-cover.jpg',
          caption: 'Stationery and physical print collateral suite',
          layout: 'full'
        },
        {
          src: '/projects/mono-cover.jpg',
          caption: 'Art Direction poster series and gallery exhibition collateral',
          layout: 'full'
        }
      ]
    }
  },
  {
    id: 'lume',
    title: 'Lume',
    slug: 'lume',
    category: 'UI/UX',
    allCategories: ['UI/UX', 'Web Design'],
    year: '2025',
    client: 'Lume Smart Home Systems',
    description: 'Next-gen ambient smart home automation iOS app and hardware companion UI system.',
    services: ['Product Design', 'UI/UX', 'Design System', 'Iconography'],
    coverImage: '/projects/lume-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Lume connects IoT smart home hardware into an intuitive, touch-friendly control center built for effortless daily living.',
      challenge: 'Balancing hundreds of smart device states (lighting, climate, security, audio) into a frictionless single-screen controller.',
      approach: 'We architected a dynamic spatial layout using glowing neon purple indicator states against dark obsidian backdrops, giving users immediate sensory confirmation of device triggers.',
      designSystem: {
        colors: [
          { hex: '#8B5CF6', name: 'Neon Purple' },
          { hex: '#18181B', name: 'Midnight Charcoal' },
          { hex: '#10B981', name: 'Active Mint' }
        ],
        typography: {
          fontName: 'Geist Sans Modern',
          usage: 'Clean geometric sans-serif tuned for readability at night.'
        },
        highlights: [
          'Spatial Lighting Sliders',
          'One-Tap Ambient Scenes',
          'Hardware Status Radar'
        ]
      },
      outcome: 'Lume achieved 98% positive user rating across iOS App Store reviews with zero friction onboarding.',
      gallery: [
        {
          src: '/projects/lume-cover.jpg',
          caption: 'Dual-screen Smart Control & Device Management Interface',
          layout: 'full'
        },
        {
          src: '/projects/aura-cover.jpg',
          caption: 'Mobile app widget integration',
          layout: 'full'
        }
      ]
    }
  },
  {
    id: 'vanta-studio',
    title: 'Vanta Studio',
    slug: 'vanta-studio',
    category: 'Graphic Design',
    allCategories: ['Graphic Design', 'Branding', 'Art Direction'],
    year: '2025',
    client: 'Vanta Contemporary Atelier',
    description: 'Experimental typographic exhibition campaign, poster series, and visual identity for a modern art collective.',
    services: ['Brand Identity', 'Graphic Design', 'Typography', 'Exhibition Posters'],
    coverImage: '/projects/vanta-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Vanta Studio commissioned an uncompromising graphic campaign for their flagship modern design retrospective exhibition.',
      challenge: 'Standing out in crowded urban art spaces with a graphic visual language that breaks traditional layout grids while maintaining readability.',
      approach: 'Leveraging oversized sans-serif typography, asymmetric grid splits, high-contrast violet blocks, and brutalist editorial hierarchy.',
      designSystem: {
        colors: [
          { hex: '#4C1D95', name: 'Vanta Purple' },
          { hex: '#000000', name: 'Pure Void' },
          { hex: '#FFFFFF', name: 'Stark White' }
        ],
        typography: {
          fontName: 'Display Grotesk Ultra-Bold',
          usage: 'Impactful display headers paired with micro technical metadata.'
        },
        highlights: [
          'Oversized Urban Posters',
          'Interactive AR Exhibition Guides',
          'Limited Edition Catalogue'
        ]
      },
      outcome: 'The exhibition broke attendance records with over 45,000 visitors across a three-week run.',
      gallery: [
        {
          src: '/projects/vanta-cover.jpg',
          caption: 'Architectural wall poster mockup in gallery space',
          layout: 'full'
        },
        {
          src: '/projects/mono-cover.jpg',
          caption: 'Exhibition series print poster variation',
          layout: 'full'
        }
      ]
    }
  },
  {
    id: 'haven',
    title: 'Haven',
    slug: 'haven',
    category: 'Web Design',
    allCategories: ['Web Design', 'UI/UX'],
    year: '2025',
    client: 'Haven Estates & Living',
    description: 'High-converting luxury architectural website experience showcasing bespoke residences with interactive 3D virtual walkthroughs.',
    services: ['Web Design', 'UI/UX', 'Frontend Architecture', '3D Integration'],
    coverImage: '/projects/haven-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Haven required a web platform as serene and beautifully proportioned as the architectural homes they sell.',
      challenge: 'Presenting multi-million dollar architectural listings with expansive imagery while keeping web load times under 1 second.',
      approach: 'We designed a minimal editorial desktop website layout with immersive image transition sequences, subtle scroll animations, and clean property metadata grids.',
      designSystem: {
        colors: [
          { hex: '#6D28D9', name: 'Deep Iris' },
          { hex: '#F3F4F6', name: 'Warm Cream' },
          { hex: '#111827', name: 'Ink' }
        ],
        typography: {
          fontName: 'Serif Modern & Sans',
          usage: 'Balanced classical headlines with modern sans listings body.'
        },
        highlights: [
          'Fluid Canvas Transitions',
          'Interactive Listing Filters',
          'Curated Journal Layout'
        ]
      },
      outcome: 'Increased qualified private buyer inquiries by 210% in the first quarter post-relaunch.',
      gallery: [
        {
          src: '/projects/haven-cover.jpg',
          caption: 'Desktop Editorial Listing Interface on Studio Setup',
          layout: 'full'
        }
      ]
    }
  },
  {
    id: 'mono',
    title: 'Mono',
    slug: 'mono',
    category: 'Art Direction',
    allCategories: ['Art Direction', 'Graphic Design', 'Social Media'],
    year: '2024',
    client: 'The Atelier Gallery',
    description: 'High-fashion editorial campaign design, photography direction, and art gallery promotional materials.',
    services: ['Campaign Design', 'Art Direction', 'Photography Styling', 'Social Media'],
    coverImage: '/projects/mono-cover.jpg',
    featured: true,
    caseStudy: {
      overview: 'Mono was a multi-platform visual campaign celebrating minimalist fashion and sculptural silhouettes.',
      challenge: 'Creating a haunting, unforgettable visual atmosphere across digital displays, social media, and physical gallery prints.',
      approach: 'Low-key studio lighting with violet ambient rim lights, dramatic silhouette portraiture, and refined serif typographic overlays.',
      designSystem: {
        colors: [
          { hex: '#3B0764', name: 'Midnight Violet' },
          { hex: '#09090B', name: 'Shadow Black' },
          { hex: '#E9D5FF', name: 'Pale Lavender' }
        ],
        typography: {
          fontName: 'High Fashion Serif',
          usage: 'Spaced capital serif titles with romantic artistic feel.'
        },
        highlights: [
          'Silhouette Portrait Series',
          'Social Reel Motion Package',
          'Gallery Exhibition Banners'
        ]
      },
      outcome: 'Featured in top design blogs including Design Boom and Mindsparkle Mag.',
      gallery: [
        {
          src: '/projects/mono-cover.jpg',
          caption: 'Exhibition hall framed campaign posters',
          layout: 'full'
        }
      ]
    }
  }
];

export const CATEGORIES = [
  'All',
  'UI/UX',
  'Branding',
  'Graphic Design',
  'Web Design',
  'Art Direction',
  'Social Media'
] as const;
