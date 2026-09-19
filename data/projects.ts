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
  category: 'Social Media' | 'Branding' | 'Graphic Design' | 'Art Direction' | 'UI/UX' | 'Web Design';
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
    "id": "alime-media-social",
    "title": "A’Lime Media Social Media Campaign",
    "slug": "alime-media-social",
    "category": "Social Media",
    "allCategories": [
      "Social Media",
      "Graphic Design"
    ],
    "year": "2025",
    "client": "A’Lime Media Limited",
    "description": "High-impact social media creatives, editorial carousels, and visual communication assets designed for A’Lime Media Limited.",
    "services": [
      "Social Media Design",
      "Visual Storytelling",
      "Brand Collateral",
      "Content Strategy"
    ],
    "coverImage": "https://i.imgur.com/TbD2p7e.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "A’Lime Media Limited engaged us to establish a distinguished, modern social media presence that elevates their media initiatives, captures attention in fast-paced feeds, and communicates brand authority.",
      "challenge": "Creating visual consistency across dozens of content themes while cutting through digital noise on platforms like Instagram and LinkedIn. The designs needed to convey both high intellectual value and instant visual punch.",
      "approach": "We devised a modular social graphics system anchored by sharp typography hierarchy, bold chromatic contrasts, and intuitive carousel slide structures that maximize audience engagement and retention.",
      "designSystem": {
        "colors": [
          {
            "hex": "#1E1B4B",
            "name": "Deep Midnight Indigo"
          },
          {
            "hex": "#7C3AED",
            "name": "Electric Violet"
          },
          {
            "hex": "#F43F5E",
            "name": "Vibrant Coral"
          },
          {
            "hex": "#F8FAFC",
            "name": "Pure White"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "High-impact display headlines paired with legible informational subheadings for rapid feed scanning."
        },
        "highlights": [
          "Modular Carousel Frameworks",
          "Dynamic Engagement Callouts",
          "Consistent Brand Palette & Visual Rhythm"
        ]
      },
      "outcome": "Delivered 30 polished campaign assets driving an increase in organic engagement, high bookmark and share rates, and an instantly recognizable digital brand presence.",
      "gallery": [
        {
          "src": "https://i.imgur.com/TbD2p7e.jpg",
          "caption": "A’Lime Media — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/QErWSJK.jpg",
          "caption": "A’Lime Media — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/EseRZ2L.jpg",
          "caption": "A’Lime Media — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/qYPxGWd.jpg",
          "caption": "A’Lime Media — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/y2mNy40.jpg",
          "caption": "A’Lime Media — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/h26kXBx.jpg",
          "caption": "A’Lime Media — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DGjXxQc.jpg",
          "caption": "A’Lime Media — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/c5nHs3G.jpg",
          "caption": "A’Lime Media — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/EIQzG8x.jpg",
          "caption": "A’Lime Media — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ip8jrgx.jpg",
          "caption": "A’Lime Media — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/OXeE9f0.jpg",
          "caption": "A’Lime Media — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/UfOX1qs.jpg",
          "caption": "A’Lime Media — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/kh6k4Xg.jpg",
          "caption": "A’Lime Media — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ek6Hjny.jpg",
          "caption": "A’Lime Media — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/a0zY0s4.jpg",
          "caption": "A’Lime Media — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/ufi0zVa.jpg",
          "caption": "A’Lime Media — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/tVxrgxb.jpg",
          "caption": "A’Lime Media — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/qgowRps.jpg",
          "caption": "A’Lime Media — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/PsC91ts.jpg",
          "caption": "A’Lime Media — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/l5yTrfg.jpg",
          "caption": "A’Lime Media — Creative #20",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DYtfYmD.jpg",
          "caption": "A’Lime Media — Creative #21",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/opdZdSa.jpg",
          "caption": "A’Lime Media — Creative #22",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/VRdvR5J.jpg",
          "caption": "A’Lime Media — Creative #23",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/dFbqhn8.jpg",
          "caption": "A’Lime Media — Creative #24",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/TUThkIH.jpg",
          "caption": "A’Lime Media — Creative #25",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/Ipz6xHS.jpg",
          "caption": "A’Lime Media — Creative #26",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/nZPMEBX.jpg",
          "caption": "A’Lime Media — Creative #27",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/uHzOdmC.jpg",
          "caption": "A’Lime Media — Creative #28",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/NhcIRkW.jpg",
          "caption": "A’Lime Media — Creative #29",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/bLUOuy3.jpg",
          "caption": "A’Lime Media — Creative #30",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "alime-impact-social",
    "title": "A’Lime Impact Partnership Social Advocacy",
    "slug": "alime-impact-social",
    "category": "Social Media",
    "allCategories": [
      "Social Media",
      "Graphic Design",
      "Art Direction"
    ],
    "year": "2025",
    "client": "A’Lime Media Impact Partnership",
    "description": "Advocacy-driven social media design, educational carousel decks, and impact storytelling for A’Lime Media Impact Partnership.",
    "services": [
      "Advocacy Graphics",
      "Social Media Design",
      "Data Visualization",
      "Community Storytelling"
    ],
    "coverImage": "https://i.imgur.com/X2kKFJS.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "A’Lime Media Impact Partnership works across critical development, sustainability, and societal empowerment issues. They required compelling visual communication to distill multifaceted social challenges into accessible, shareable social media narratives.",
      "challenge": "Communicating serious social causes, human stories, and data-dense policy information without overwhelming audiences or diminishing the emotional gravity of the causes.",
      "approach": "We created an empathetic yet visually energetic design system featuring clear data callouts, impactful quotes, harmonious color blocking, and sequential storytelling formats that educate and inspire action.",
      "designSystem": {
        "colors": [
          {
            "hex": "#065F46",
            "name": "Emerald Impact"
          },
          {
            "hex": "#0D9488",
            "name": "Deep Teal"
          },
          {
            "hex": "#F59E0B",
            "name": "Warm Ochre"
          },
          {
            "hex": "#0F172A",
            "name": "Deep Slate"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Thoughtful, empathetic typographic scale crafted for educational and advocacy readability."
        },
        "highlights": [
          "Actionable Cause Callouts",
          "Structured Infographic Slides",
          "Community Narrative Spotlights"
        ]
      },
      "outcome": "Created a versatile 33-asset creative library that expanded cross-platform awareness, sparked community dialogue, and strengthened partner engagement across social channels.",
      "gallery": [
        {
          "src": "https://i.imgur.com/X2kKFJS.jpg",
          "caption": "A’Lime Impact — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/YzinZZT.jpg",
          "caption": "A’Lime Impact — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/F776PAL.jpg",
          "caption": "A’Lime Impact — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/GKfryX6.jpg",
          "caption": "A’Lime Impact — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/hg0z5wk.jpg",
          "caption": "A’Lime Impact — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/KhIXnuo.jpg",
          "caption": "A’Lime Impact — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/OSGDMrX.jpg",
          "caption": "A’Lime Impact — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/KRL90fA.jpg",
          "caption": "A’Lime Impact — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/RQNPFeh.jpg",
          "caption": "A’Lime Impact — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DsuyLV0.jpg",
          "caption": "A’Lime Impact — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/JEDwmMS.jpg",
          "caption": "A’Lime Impact — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/WbCUSTu.jpg",
          "caption": "A’Lime Impact — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DKINhQ1.jpg",
          "caption": "A’Lime Impact — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/riobc3v.jpg",
          "caption": "A’Lime Impact — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/PwwkDQY.jpg",
          "caption": "A’Lime Impact — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/Xd2KK1q.jpg",
          "caption": "A’Lime Impact — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/1TGCC8F.jpg",
          "caption": "A’Lime Impact — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/K6av9n7.jpg",
          "caption": "A’Lime Impact — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/obJpgUH.jpg",
          "caption": "A’Lime Impact — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/vMGCg7W.jpg",
          "caption": "A’Lime Impact — Creative #20",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/7UbJyr4.jpg",
          "caption": "A’Lime Impact — Creative #21",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/rBAL5zB.jpg",
          "caption": "A’Lime Impact — Creative #22",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/YQQKuJD.jpg",
          "caption": "A’Lime Impact — Creative #23",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/KxJ6XlJ.jpg",
          "caption": "A’Lime Impact — Creative #24",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/oow473u.jpg",
          "caption": "A’Lime Impact — Creative #25",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/SSKStjf.jpg",
          "caption": "A’Lime Impact — Creative #26",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/TTaUy2c.jpg",
          "caption": "A’Lime Impact — Creative #27",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/jfWlz3F.jpg",
          "caption": "A’Lime Impact — Creative #28",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/pTHEKBE.jpg",
          "caption": "A’Lime Impact — Creative #29",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/e4HgzY6.jpg",
          "caption": "A’Lime Impact — Creative #30",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/2qEEZWM.jpg",
          "caption": "A’Lime Impact — Creative #31",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/jRFhjpH.jpg",
          "caption": "A’Lime Impact — Creative #32",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DKcdjVM.jpg",
          "caption": "A’Lime Impact — Creative #33",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "world-environment-day",
    "title": "World Environment Day Event Identity",
    "slug": "world-environment-day",
    "category": "Branding",
    "allCategories": [
      "Branding",
      "Art Direction",
      "Graphic Design"
    ],
    "year": "2025",
    "client": "A’Lime Impact Partnership",
    "description": "Comprehensive event branding, environmental awareness collateral, and campaign art direction for World Environment Day.",
    "services": [
      "Brand Identity",
      "Event Collateral",
      "Art Direction",
      "Exhibition Banners",
      "Digital Campaign"
    ],
    "coverImage": "https://i.imgur.com/S6TKLDq.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "World Environment Day serves as a global rally for climate awareness and ecological preservation. We designed the complete visual identity and campaign collateral for A’Lime Impact Partnership’s marquee environmental celebration.",
      "challenge": "Avoiding traditional green-washing aesthetic clichés while creating a celebratory, modern, and urgent environmental event brand that works seamlessly across stage backdrops, print collateral, and social media.",
      "approach": "Combining organic nature-inspired motifs, high-energy neon greens, deep forest shadows, and bold contemporary typography. Every touchpoint—from physical roll-up banners to attendee badges and digital teasers—shared an unmistakable visual signature.",
      "designSystem": {
        "colors": [
          {
            "hex": "#064E3B",
            "name": "Forest Shadow"
          },
          {
            "hex": "#10B981",
            "name": "Vibrant Emerald"
          },
          {
            "hex": "#E0E7FF",
            "name": "Sky Atmosphere"
          },
          {
            "hex": "#FACC15",
            "name": "Solar Yellow"
          }
        ],
        "typography": {
          "fontName": "Outfit Display & Inter",
          "usage": "Bold, forward-looking headlines paired with crisp structural metadata."
        },
        "highlights": [
          "Eco-Futurist Visual Motifs",
          "On-Site Environmental Banners",
          "Integrated Multichannel Collateral"
        ]
      },
      "outcome": "The cohesive event branding unified all 20 touchpoints, delivering an unforgettable attendee experience and widespread digital amplification for the environmental campaign.",
      "gallery": [
        {
          "src": "https://i.imgur.com/S6TKLDq.jpg",
          "caption": "Environment Day — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/zP2nd9f.jpg",
          "caption": "Environment Day — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/gColPkZ.jpg",
          "caption": "Environment Day — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/o7zroAn.jpg",
          "caption": "Environment Day — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/eRXTdlW.jpg",
          "caption": "Environment Day — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/nImXImV.jpg",
          "caption": "Environment Day — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/r7HBTOu.jpg",
          "caption": "Environment Day — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/1S2DmWs.jpg",
          "caption": "Environment Day — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/llqX6IA.jpg",
          "caption": "Environment Day — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/E5sWop1.jpg",
          "caption": "Environment Day — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/pBGnueA.jpg",
          "caption": "Environment Day — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/HBj4kGp.jpg",
          "caption": "Environment Day — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/fpB5vvr.jpg",
          "caption": "Environment Day — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/r7XWrbF.jpg",
          "caption": "Environment Day — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/j1SBacB.jpg",
          "caption": "Environment Day — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/Cb6wq4d.jpg",
          "caption": "Environment Day — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/EfNv6QC.jpg",
          "caption": "Environment Day — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/MyG6wSA.jpg",
          "caption": "Environment Day — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/iStbYPX.jpg",
          "caption": "Environment Day — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/7nh9hQT.jpg",
          "caption": "Environment Day — Creative #20",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "beyond-the-pages",
    "title": "Beyond the Pages Event Branding",
    "slug": "beyond-the-pages",
    "category": "Branding",
    "allCategories": [
      "Branding",
      "Art Direction",
      "Graphic Design"
    ],
    "year": "2024",
    "client": "A’Lime Media Limited",
    "description": "Experiential event identity, stage screen graphics, speaker announcements, and marketing collateral for the Beyond the Pages flagship conference.",
    "services": [
      "Event Identity",
      "Art Direction",
      "Keynote Visuals",
      "Speaker Spotlights",
      "Print Collateral"
    ],
    "coverImage": "https://i.imgur.com/lhkcIA7.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "Beyond the Pages is a signature thought-leadership conference hosted by A’Lime Media Limited exploring the evolution of literature, journalism, and creative media in the digital age.",
      "challenge": "Bridging the timeless craftsmanship of the written page with the cutting-edge vibrancy of modern digital media, producing an identity that commands respect from senior speakers and attendees alike.",
      "approach": "We developed a refined editorial brand aesthetic blending regal purple and indigo gradients, stylized typography, and sleek speaker showcase templates that built anticipation in the weeks leading up to the conference.",
      "designSystem": {
        "colors": [
          {
            "hex": "#3730A3",
            "name": "Royal Indigo"
          },
          {
            "hex": "#8B5CF6",
            "name": "Luminous Violet"
          },
          {
            "hex": "#F97316",
            "name": "Radiant Tangerine"
          },
          {
            "hex": "#0F172A",
            "name": "Midnight Charcoal"
          }
        ],
        "typography": {
          "fontName": "Outfit Serif & Inter",
          "usage": "Refined editorial serif titles combined with clean geometric grotesk for event details."
        },
        "highlights": [
          "Stage Keynote Systems",
          "Speaker Spotlight Frameworks",
          "Editorial Social Announcements"
        ]
      },
      "outcome": "Successfully branded across 13 core promotional and on-site assets, positioning Beyond the Pages as a standout cultural and media forum with record registration numbers.",
      "gallery": [
        {
          "src": "https://i.imgur.com/lhkcIA7.jpg",
          "caption": "Beyond the Pages — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/R2gb6fz.jpg",
          "caption": "Beyond the Pages — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/qGArZsj.jpg",
          "caption": "Beyond the Pages — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/N8N8thU.jpg",
          "caption": "Beyond the Pages — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/j87STaL.jpg",
          "caption": "Beyond the Pages — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/BZpaX7O.jpg",
          "caption": "Beyond the Pages — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DN6s1SP.jpg",
          "caption": "Beyond the Pages — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/g4rEAvA.jpg",
          "caption": "Beyond the Pages — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/DKUD3j2.jpg",
          "caption": "Beyond the Pages — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/iNRfhTL.jpg",
          "caption": "Beyond the Pages — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/GvMVLrG.jpg",
          "caption": "Beyond the Pages — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/Dif3tQK.jpg",
          "caption": "Beyond the Pages — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/MtLQBS5.jpg",
          "caption": "Beyond the Pages — Creative #13",
          "layout": "third"
        }
      ]
    }
  }
];

export const CATEGORIES = [
  'All',
  'Social Media',
  'Branding',
  'Graphic Design',
  'Art Direction'
] as const;
