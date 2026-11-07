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
  },
  {
    "id": "gadgetinental",
    "title": "Gadgetinental Consumer Tech Campaigns",
    "slug": "gadgetinental",
    "category": "Graphic Design",
    "allCategories": [
      "Graphic Design",
      "Social Media",
      "Branding"
    ],
    "year": "2024",
    "client": "Gadgetinental",
    "description": "Dynamic consumer tech marketing assets, product launch creatives, and high-conversion e-commerce promotional designs for Gadgetinental.",
    "services": [
      "Product Marketing Design",
      "Social Media Graphics",
      "E-commerce Creatives",
      "Promotional Campaigns"
    ],
    "coverImage": "https://i.imgur.com/45sFEa3.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "Gadgetinental is an omnichannel consumer electronics retailer delivering premium smartphones, audio gear, and personal computing accessories to tech enthusiasts.",
      "challenge": "Creating compelling product showcases that present complex hardware specifications in a clean, legible format on mobile screens while driving sales momentum.",
      "approach": "Constructed an agile design framework combining dark obsidian backdrops, electric cyan highlights, clear numeric callouts, and tactile product cutouts that demand attention.",
      "designSystem": {
        "colors": [
          {
            "hex": "#09090B",
            "name": "Obsidian Black"
          },
          {
            "hex": "#06B6D4",
            "name": "Electric Cyan"
          },
          {
            "hex": "#F59E0B",
            "name": "Solar Amber"
          },
          {
            "hex": "#FFFFFF",
            "name": "Pure White"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "High-contrast sans-serif engineered for rapid specification scanning and commercial urgency."
        },
        "highlights": [
          "High-Conversion Promotional Flyers",
          "Dynamic Spec Callout Grids",
          "Clean E-commerce Product Spotlights"
        ]
      },
      "outcome": "Designed a comprehensive suite of 39 promotional creatives that fueled significant online sales growth and solidified Gadgetinental’s cutting-edge brand perception.",
      "gallery": [
        {
          "src": "https://i.imgur.com/45sFEa3.jpg",
          "caption": "Gadgetinental — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/1A8nzJy.jpg",
          "caption": "Gadgetinental — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/G1qPnfk.jpg",
          "caption": "Gadgetinental — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/A8IrPij.jpg",
          "caption": "Gadgetinental — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/H6kfhHT.jpg",
          "caption": "Gadgetinental — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/x9nm5VG.jpg",
          "caption": "Gadgetinental — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/UFMd9Fh.jpg",
          "caption": "Gadgetinental — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/fYmOUEj.jpg",
          "caption": "Gadgetinental — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/52Tloux.jpg",
          "caption": "Gadgetinental — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/EQ63hfc.jpg",
          "caption": "Gadgetinental — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/517SNdH.jpg",
          "caption": "Gadgetinental — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/Jkby1KA.jpg",
          "caption": "Gadgetinental — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/zHMnLls.jpg",
          "caption": "Gadgetinental — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/vclsPso.jpg",
          "caption": "Gadgetinental — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/CMwvdhs.jpg",
          "caption": "Gadgetinental — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/QsFncV2.jpg",
          "caption": "Gadgetinental — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ITcThJ9.jpg",
          "caption": "Gadgetinental — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/1NVPlDm.jpg",
          "caption": "Gadgetinental — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/IgFcSL2.jpg",
          "caption": "Gadgetinental — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/0bIJTrG.jpg",
          "caption": "Gadgetinental — Creative #20",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/J7kfCsN.jpg",
          "caption": "Gadgetinental — Creative #21",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/GO6Te7V.jpg",
          "caption": "Gadgetinental — Creative #22",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/2RqVCqd.jpg",
          "caption": "Gadgetinental — Creative #23",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/fQDvr9K.jpg",
          "caption": "Gadgetinental — Creative #24",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ny4eAWv.jpg",
          "caption": "Gadgetinental — Creative #25",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/fRGTJDt.jpg",
          "caption": "Gadgetinental — Creative #26",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/l5gtzJM.jpg",
          "caption": "Gadgetinental — Creative #27",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/gSHSrhA.jpg",
          "caption": "Gadgetinental — Creative #28",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/C7IoZxP.jpg",
          "caption": "Gadgetinental — Creative #29",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/gscrvqd.jpg",
          "caption": "Gadgetinental — Creative #30",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DYC2DV9.jpg",
          "caption": "Gadgetinental — Creative #31",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/uVq0dem.jpg",
          "caption": "Gadgetinental — Creative #32",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/m6kOicz.jpg",
          "caption": "Gadgetinental — Creative #33",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/euazN6e.jpg",
          "caption": "Gadgetinental — Creative #34",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/r1pkUbr.jpg",
          "caption": "Gadgetinental — Creative #35",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/2awj8iK.jpg",
          "caption": "Gadgetinental — Creative #36",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/w9tkyUG.jpg",
          "caption": "Gadgetinental — Creative #37",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/O3xywEd.jpg",
          "caption": "Gadgetinental — Creative #38",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/fOtCUue.jpg",
          "caption": "Gadgetinental — Creative #39",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "pickupman-logistics",
    "title": "Pickupman Logistics Brand & Campaign Identity",
    "slug": "pickupman-logistics",
    "category": "Branding",
    "allCategories": [
      "Branding",
      "Social Media",
      "Graphic Design"
    ],
    "year": "2024",
    "client": "Pickupman Logistics",
    "description": "Action-oriented brand collateral, fleet graphics, and customer acquisition campaigns designed for urban dispatch and courier service Pickupman.",
    "services": [
      "Brand Identity",
      "Social Media Marketing",
      "Logistics Collateral",
      "Advertising Assets"
    ],
    "coverImage": "https://i.imgur.com/bWCVoz5.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "Pickupman Logistics offers on-demand express courier, freight forwarding, and urban delivery solutions across key commercial districts.",
      "challenge": "Standing out in a competitive urban logistics sector by communicating trust, prompt delivery guarantees, and clear pricing in split-second social views.",
      "approach": "Developed an energetic visual language employing vibrant express orange accents, bold directional arrows, and approachable delivery messaging that builds immediate consumer trust.",
      "designSystem": {
        "colors": [
          {
            "hex": "#EA580C",
            "name": "Express Orange"
          },
          {
            "hex": "#1E3A8A",
            "name": "Logistics Navy"
          },
          {
            "hex": "#10B981",
            "name": "Active Mint"
          },
          {
            "hex": "#FFFFFF",
            "name": "Pure White"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Sturdy, friendly grotesque typography conveying speed, dependability, and professional service."
        },
        "highlights": [
          "Service Route & Tracking Callouts",
          "Fleet & Rider Visual Systems",
          "Customer Trust & Testimonial Templates"
        ]
      },
      "outcome": "Crafted 21 campaign assets that boosted brand recall and significantly increased direct dispatch bookings across digital platforms.",
      "gallery": [
        {
          "src": "https://i.imgur.com/bWCVoz5.jpg",
          "caption": "Pickupman — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/BBfcnHv.jpg",
          "caption": "Pickupman — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/jwtK5kX.jpg",
          "caption": "Pickupman — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DJsZcJz.jpg",
          "caption": "Pickupman — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/QS2Y1mS.jpg",
          "caption": "Pickupman — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/QLg8qIR.jpg",
          "caption": "Pickupman — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/L7f0aBp.jpg",
          "caption": "Pickupman — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/xmiKTzf.jpg",
          "caption": "Pickupman — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/76qHgn8.jpg",
          "caption": "Pickupman — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/pDOXTWQ.jpg",
          "caption": "Pickupman — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/bbNBMJe.jpg",
          "caption": "Pickupman — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/9LIyA5b.jpg",
          "caption": "Pickupman — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/BlAdrmb.jpg",
          "caption": "Pickupman — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/zQaZCAt.jpg",
          "caption": "Pickupman — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/4UATwm9.jpg",
          "caption": "Pickupman — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/9Hpm2cj.jpg",
          "caption": "Pickupman — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/TuxNVoz.jpg",
          "caption": "Pickupman — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/VvBfMht.jpg",
          "caption": "Pickupman — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/mHMohDk.jpg",
          "caption": "Pickupman — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/kBz7HvS.jpg",
          "caption": "Pickupman — Creative #20",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/YuVSCQ9.jpg",
          "caption": "Pickupman — Creative #21",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "swift-logistics",
    "title": "Swift Logistics Corporate Collateral",
    "slug": "swift-logistics",
    "category": "Graphic Design",
    "allCategories": [
      "Graphic Design",
      "Social Media",
      "Branding"
    ],
    "year": "2024",
    "client": "Swift Logistics Co.",
    "description": "Sleek corporate logistics marketing, rate card systems, and social media engagement graphics created for Swift Logistics.",
    "services": [
      "Marketing Collateral",
      "Social Media Design",
      "Rate Cards & Infographics",
      "Brand Awareness"
    ],
    "coverImage": "https://i.imgur.com/iuwr7Q0.jpg",
    "featured": false,
    "caseStudy": {
      "overview": "Swift Logistics specializes in nationwide freight transport, enterprise supply chain management, and interstate haulage services.",
      "challenge": "Distilling complex logistical rate structures, transit timelines, and corporate partner tiers into accessible, aesthetically polished digital assets.",
      "approach": "Devised a clean corporate visual style featuring crimson speed accents, deep slate containers, and structured tabular infographics for clarity.",
      "designSystem": {
        "colors": [
          {
            "hex": "#DC2626",
            "name": "Rapid Crimson"
          },
          {
            "hex": "#1E293B",
            "name": "Industrial Slate"
          },
          {
            "hex": "#F1F5F9",
            "name": "Cloud Mist"
          },
          {
            "hex": "#0F172A",
            "name": "Midnight Charcoal"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Aerodynamic sans-serif typography accentuating precision and corporate credibility."
        },
        "highlights": [
          "Route Network Infographics",
          "Express Delivery Badges",
          "Modular Social Campaign Templates"
        ]
      },
      "outcome": "Delivered 16 unified marketing assets that elevated B2B corporate inquiries and streamlined customer rate onboarding.",
      "gallery": [
        {
          "src": "https://i.imgur.com/iuwr7Q0.jpg",
          "caption": "Swift Logistics — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/T1tjyZX.jpg",
          "caption": "Swift Logistics — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/y85zXfO.jpg",
          "caption": "Swift Logistics — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/oHsdTYX.jpg",
          "caption": "Swift Logistics — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/mJAq7i6.jpg",
          "caption": "Swift Logistics — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/62I566V.jpg",
          "caption": "Swift Logistics — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/SuIDVUD.jpg",
          "caption": "Swift Logistics — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/BgrINj4.jpg",
          "caption": "Swift Logistics — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/gE5EI72.jpg",
          "caption": "Swift Logistics — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/o1kbt6J.jpg",
          "caption": "Swift Logistics — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/F9YQz0g.jpg",
          "caption": "Swift Logistics — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/AH9UTw2.jpg",
          "caption": "Swift Logistics — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/mAO6e34.jpg",
          "caption": "Swift Logistics — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/95urAdC.jpg",
          "caption": "Swift Logistics — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/KTfM5Sz.jpg",
          "caption": "Swift Logistics — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/R31eRav.jpg",
          "caption": "Swift Logistics — Creative #16",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "lagos-health-ministry",
    "title": "Lagos State Ministry of Health Public Health Campaigns",
    "slug": "lagos-health-ministry",
    "category": "Graphic Design",
    "allCategories": [
      "Graphic Design",
      "Social Media",
      "Art Direction"
    ],
    "year": "2024",
    "client": "Lagos State Ministry of Health",
    "description": "Crucial public health awareness designs, healthcare advisories, and civic health education graphics for the Lagos State Government.",
    "services": [
      "Public Health Campaigns",
      "Infographic Design",
      "Civic Communications",
      "Advisory Graphics"
    ],
    "coverImage": "https://i.imgur.com/fYKlxsU.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "The Lagos State Ministry of Health oversees public health policy, epidemic prevention, and healthcare delivery for over 20 million residents in Africa’s largest metropolis.",
      "challenge": "Translating critical medical guidelines, preventative health measures, and maternal health notices into immediate, accessible visual formats that resonate across diverse socioeconomic communities.",
      "approach": "Engineered high-clarity civic infographics with unambiguous visual iconography, sympathetic human portraiture, and authoritative institutional seals that foster widespread public adherence.",
      "designSystem": {
        "colors": [
          {
            "hex": "#0284C7",
            "name": "Lagos Civic Blue"
          },
          {
            "hex": "#0D9488",
            "name": "Healthcare Teal"
          },
          {
            "hex": "#D97706",
            "name": "Advisory Amber"
          },
          {
            "hex": "#F8FAFC",
            "name": "Clean White"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Authoritative, universally legible typography formatted for effortless civic communication."
        },
        "highlights": [
          "Civic Health Infographics",
          "Emergency Advisory Layouts",
          "Public Service Announcement Badges"
        ]
      },
      "outcome": "Delivered 15 vital campaign assets that facilitated high digital reach and helped inform millions during state-wide health initiatives.",
      "gallery": [
        {
          "src": "https://i.imgur.com/fYKlxsU.jpg",
          "caption": "Lagos Health — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/Tm1aTtI.jpg",
          "caption": "Lagos Health — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/pAYM87D.jpg",
          "caption": "Lagos Health — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/RUzpJfN.jpg",
          "caption": "Lagos Health — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/guUkzGV.jpg",
          "caption": "Lagos Health — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/qER4mAi.jpg",
          "caption": "Lagos Health — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/9Q52HHg.jpg",
          "caption": "Lagos Health — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/2jVkC9N.jpg",
          "caption": "Lagos Health — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/iQ72aOP.jpg",
          "caption": "Lagos Health — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/9S5D08w.jpg",
          "caption": "Lagos Health — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/XNaHwCo.jpg",
          "caption": "Lagos Health — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/F3FcXfX.jpg",
          "caption": "Lagos Health — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/orU1Qqe.jpg",
          "caption": "Lagos Health — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/7WPVpoH.jpg",
          "caption": "Lagos Health — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ltbLNgz.jpg",
          "caption": "Lagos Health — Creative #15",
          "layout": "half"
        }
      ]
    }
  },
  {
    "id": "yangalotto",
    "title": "Yangalotto Entertainment Brand & Campaign Graphics",
    "slug": "yangalotto",
    "category": "Branding",
    "allCategories": [
      "Branding",
      "Social Media",
      "Graphic Design"
    ],
    "year": "2024",
    "client": "Yangalotto Entertainment",
    "description": "Vibrant gaming campaign visuals, jackpot winner announcements, and promotional collateral for lottery platform Yangalotto.",
    "services": [
      "Promotional Campaign Design",
      "Social Media Graphics",
      "Jackpot Creatives",
      "Visual Storytelling"
    ],
    "coverImage": "https://i.imgur.com/cmAgpHa.jpg",
    "featured": false,
    "caseStudy": {
      "overview": "Yangalotto is an interactive digital gaming and lottery platform offering daily draws, cash prizes, and life-changing jackpot rewards.",
      "challenge": "Conveying authentic winner excitement and credibility simultaneously, assuring users of transparent gameplay while maximizing entertainment value.",
      "approach": "Implemented glowing golden accents, rich jewel-toned purples and emeralds, alongside prominent payout certification markers that excite and reassure players.",
      "designSystem": {
        "colors": [
          {
            "hex": "#EAB308",
            "name": "Jackpot Gold"
          },
          {
            "hex": "#059669",
            "name": "Emerald Luck"
          },
          {
            "hex": "#6B21A8",
            "name": "Royal Purple"
          },
          {
            "hex": "#0A0A0A",
            "name": "Obsidian Velvet"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Bold, celebratory display styling tailored for high-energy gaming excitement."
        },
        "highlights": [
          "Jackpot Winner Announcements",
          "Daily Draw Callouts",
          "Gamified Social Engagement Cards"
        ]
      },
      "outcome": "Crafted 12 high-converting promotional assets that expanded active player registrations and digital ticket purchases.",
      "gallery": [
        {
          "src": "https://i.imgur.com/cmAgpHa.jpg",
          "caption": "Yangalotto — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/35zn408.jpg",
          "caption": "Yangalotto — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/YgDMbiE.jpg",
          "caption": "Yangalotto — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/mF0Lh9Y.jpg",
          "caption": "Yangalotto — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/Q518k3N.jpg",
          "caption": "Yangalotto — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/blR8L3Q.jpg",
          "caption": "Yangalotto — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/NKGjcoH.jpg",
          "caption": "Yangalotto — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/gI3r2nT.jpg",
          "caption": "Yangalotto — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/KMxRfRP.jpg",
          "caption": "Yangalotto — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/W8s4WlQ.jpg",
          "caption": "Yangalotto — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/sYpjcxr.jpg",
          "caption": "Yangalotto — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/XDmQSdj.jpg",
          "caption": "Yangalotto — Creative #12",
          "layout": "third"
        }
      ]
    }
  },
  {
    "id": "softvenix",
    "title": "Softvenix Technology Solutions Brand Collateral",
    "slug": "softvenix",
    "category": "Graphic Design",
    "allCategories": [
      "Graphic Design",
      "Social Media",
      "Branding"
    ],
    "year": "2024",
    "client": "Softvenix Technologies",
    "description": "Sophisticated tech agency branding, enterprise cloud marketing collateral, and digital transformation assets for Softvenix.",
    "services": [
      "Tech Brand Collateral",
      "Social Media Strategy",
      "B2B Marketing Visuals",
      "Digital Product Graphics"
    ],
    "coverImage": "https://i.imgur.com/JDCrsWg.jpg",
    "featured": false,
    "caseStudy": {
      "overview": "Softvenix is a bespoke software development agency empowering businesses with enterprise software, cloud architecture, and modern product engineering.",
      "challenge": "Differentiating Softvenix from conventional dev shops with visual communication that appeals directly to enterprise decision-makers and startup founders.",
      "approach": "Developed sleek dark-mode layouts highlighting deep indigo tones, cyan circuitry gradients, and modular software architecture representations.",
      "designSystem": {
        "colors": [
          {
            "hex": "#4338CA",
            "name": "Deep Indigo"
          },
          {
            "hex": "#06B6D4",
            "name": "Cyan Pulse"
          },
          {
            "hex": "#8B5CF6",
            "name": "Ultraviolet"
          },
          {
            "hex": "#090D16",
            "name": "Slate Night"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Modern geometric grotesk reflecting precision, high intelligence, and technical sophistication."
        },
        "highlights": [
          "Cloud Architecture Infographics",
          "SaaS Feature Spotlights",
          "Executive Thought Leadership Cards"
        ]
      },
      "outcome": "Produced 15 corporate campaign assets that significantly enhanced Softvenix’s B2B digital footprint and client inquiry rates.",
      "gallery": [
        {
          "src": "https://i.imgur.com/JDCrsWg.jpg",
          "caption": "Softvenix — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/y3w4zq6.jpg",
          "caption": "Softvenix — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/MJnFHuE.jpg",
          "caption": "Softvenix — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ae0XZ0Y.jpg",
          "caption": "Softvenix — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/PuIQAaX.jpg",
          "caption": "Softvenix — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/775MbxR.jpg",
          "caption": "Softvenix — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/ar5oedc.jpg",
          "caption": "Softvenix — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/cQVQ16z.jpg",
          "caption": "Softvenix — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/LrUaheu.jpg",
          "caption": "Softvenix — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/dw2Nm61.jpg",
          "caption": "Softvenix — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/R5qBONh.jpg",
          "caption": "Softvenix — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/OTpXAoc.jpg",
          "caption": "Softvenix — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/LMofKNU.jpg",
          "caption": "Softvenix — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/9rme3rA.jpg",
          "caption": "Softvenix — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/9Dhr2fY.jpg",
          "caption": "Softvenix — Creative #15",
          "layout": "half"
        }
      ]
    }
  },
  {
    "id": "mypitchhub",
    "title": "MyPitchHub Venture & Founder Enablement Graphics",
    "slug": "mypitchhub",
    "category": "Branding",
    "allCategories": [
      "Branding",
      "Social Media",
      "Graphic Design"
    ],
    "year": "2024",
    "client": "MyPitchHub Global",
    "description": "Venture pitch identity, founder educational carousels, and investor readiness collateral for startup advisory MyPitchHub.",
    "services": [
      "Investor Deck Styling",
      "Social Media Graphics",
      "Founder Educational Carousels",
      "Brand Identity"
    ],
    "coverImage": "https://i.imgur.com/NdKAg6W.jpg",
    "featured": true,
    "caseStudy": {
      "overview": "MyPitchHub is a founder advisory ecosystem equipping seed and series-A startups with investor narrative structuring, financial model presentation, and deck design.",
      "challenge": "Presenting dense venture capital concepts, term sheet terminology, and pitch framework methodologies in highly shareable, accessible formats on social feeds.",
      "approach": "Constructed an investor-grade editorial aesthetic featuring structured carousel frameworks, clean metric callout modules, and sharp green financial cues.",
      "designSystem": {
        "colors": [
          {
            "hex": "#0F172A",
            "name": "Venture Slate"
          },
          {
            "hex": "#10B981",
            "name": "Equity Emerald"
          },
          {
            "hex": "#F43F5E",
            "name": "Catalyst Coral"
          },
          {
            "hex": "#FFFFFF",
            "name": "Pure White"
          }
        ],
        "typography": {
          "fontName": "Outfit & Inter",
          "usage": "Crisp, authoritative editorial type designed for complex venture concepts."
        },
        "highlights": [
          "Fundraising Metric Templates",
          "Pitch Deck Breakdown Guides",
          "Investor Matchmaking Highlights"
        ]
      },
      "outcome": "Generated 21 educational deliverables that accelerated MyPitchHub’s community expansion to thousands of active venture founders.",
      "gallery": [
        {
          "src": "https://i.imgur.com/NdKAg6W.jpg",
          "caption": "MyPitchHub — Creative #01",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/BjRLmns.jpg",
          "caption": "MyPitchHub — Creative #02",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/DlqO9oj.jpg",
          "caption": "MyPitchHub — Creative #03",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/eG95np2.jpg",
          "caption": "MyPitchHub — Creative #04",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/k5JRRw2.jpg",
          "caption": "MyPitchHub — Creative #05",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/qEidNKS.jpg",
          "caption": "MyPitchHub — Creative #06",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/Zm1WKVS.jpg",
          "caption": "MyPitchHub — Creative #07",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/EP9Acbq.jpg",
          "caption": "MyPitchHub — Creative #08",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/dSBdTw0.jpg",
          "caption": "MyPitchHub — Creative #09",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/65FYf4Y.jpg",
          "caption": "MyPitchHub — Creative #10",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/b8HZ0zV.jpg",
          "caption": "MyPitchHub — Creative #11",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/rRI8EE4.jpg",
          "caption": "MyPitchHub — Creative #12",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/le0djS6.jpg",
          "caption": "MyPitchHub — Creative #13",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/d2G5Qfi.jpg",
          "caption": "MyPitchHub — Creative #14",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/sp7CwIL.jpg",
          "caption": "MyPitchHub — Creative #15",
          "layout": "half"
        },
        {
          "src": "https://i.imgur.com/2tPh7pU.jpg",
          "caption": "MyPitchHub — Creative #16",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/YLNw9d5.jpg",
          "caption": "MyPitchHub — Creative #17",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/5VdYmCR.jpg",
          "caption": "MyPitchHub — Creative #18",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/srtq0lv.jpg",
          "caption": "MyPitchHub — Creative #19",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/A8t3O0u.jpg",
          "caption": "MyPitchHub — Creative #20",
          "layout": "third"
        },
        {
          "src": "https://i.imgur.com/xX0w9Tq.jpg",
          "caption": "MyPitchHub — Creative #21",
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
