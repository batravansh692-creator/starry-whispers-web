export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string; // lucide name
};

export const SERVICES: Service[] = [
  {
    slug: "kundli",
    title: "Kundli (Birth Chart) Reading",
    short: "A complete Vedic birth chart with planetary placements and life themes.",
    description:
      "An in-depth Janam Kundli analysis based on your date, time and place of birth, covering personality, career, relationships, finances, and karmic patterns.",
    icon: "Sparkles",
  },
  {
    slug: "marriage",
    title: "Marriage & Match-Making",
    short: "Gun Milan, compatibility and timing for a harmonious partnership.",
    description:
      "Traditional Ashtakoot Gun Milan along with Mangal Dosha, Nadi, and emotional compatibility analysis to guide a long, peaceful marriage.",
    icon: "Heart",
  },
  {
    slug: "career",
    title: "Career & Business Guidance",
    short: "Right path, right timing — for jobs, growth and ventures.",
    description:
      "Identify the most favourable careers, ideal sectors, partnerships and timing of growth using the 10th house, Dasha, and transit analysis.",
    icon: "Briefcase",
  },
  {
    slug: "vastu",
    title: "Vastu Consultation",
    short: "Energy alignment for home, shop and workplace.",
    description:
      "Practical Vastu remedies for home and business without major demolition — direction, colours, placements and energy corrections.",
    icon: "Home",
  },
  {
    slug: "muhurat",
    title: "Muhurat & Auspicious Timing",
    short: "Choose the right moment for every important step.",
    description:
      "Shubh Muhurat for marriage, griha pravesh, business launch, vehicle purchase, naming ceremony and other important events.",
    icon: "Clock",
  },
  {
    slug: "remedies",
    title: "Gemstone & Remedies",
    short: "Personalised mantras, gemstones and rituals.",
    description:
      "Authentic, chart-specific gemstone, rudraksha, mantra and donation remedies — only what your planets actually need.",
    icon: "Gem",
  },
  {
    slug: "numerology",
    title: "Numerology",
    short: "The hidden vibration of your name and date of birth.",
    description:
      "Discover your driver and conductor numbers, lucky numbers, and name corrections aligned with your destiny.",
    icon: "Hash",
  },
  {
    slug: "tarot",
    title: "Tarot Reading",
    short: "Clear answers on focused questions.",
    description:
      "Intuitive tarot guidance for love, career, finance and personal decisions — practical and confidential.",
    icon: "Layers",
  },
];
