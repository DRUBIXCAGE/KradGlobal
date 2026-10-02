export interface BusinessVertical {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  keyPillars: string[];
  metrics: { label: string; value: string }[];
  image: string;
  accentColor: string;
}

export interface MarketStory {
  id: string;
  country: string;
  code: string;
  flag: string;
  headline: string;
  quote: string;
  subtext: string;
  image: string;
  coordinates: string;
  focusAreas: string[];
  keyHubs: string[];
  economicSignificance: string;
}

export interface WhyPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: string;
}

export interface EcosystemNode {
  id: string;
  name: string;
  category: "core" | "vertical" | "enabler";
  description: string;
  impact: string;
  x: number;
  y: number;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  fullContent?: string[];
  author: string;
  image: string;
  featured?: boolean;
}

export interface CompanyMetadata {
  name: string;
  tagline: string;
  missionStatement: string;
  editorialStatement: {
    heading: string;
    text: string;
    highlightKeywords: string[];
  };
  visionStatement: {
    heading: string;
    subtext: string;
  };
  globalStats: {
    metric: string;
    label: string;
    description: string;
  }[];
  contactInfo: {
    email: string;
    phone: string;
    whatsappUrl: string;
    headquarters: string;
    regionalOffices: {
      region: string;
      city: string;
      address: string;
      focus: string;
    }[];
  };
}

export const COMPANY_DATA: CompanyMetadata = {
  name: "Krad Global",
  tagline: "Connecting Markets. Moving People. Creating Possibilities.",
  missionStatement:
    "Krad Global is an international diversified business group connecting commerce, people, and opportunities across high-growth international corridors.",
  editorialStatement: {
    heading: "BUILT FOR A WORLD THAT MOVES.",
    text: "Krad Global operates at the intersection of people, products, markets and opportunity. From international travel to global trade and digital commerce, we build connections that move business forward.",
    highlightKeywords: ["PEOPLE", "PRODUCTS", "MARKETS", "OPPORTUNITY"],
  },
  visionStatement: {
    heading: "THE NEXT OPPORTUNITY IS ALWAYS GLOBAL.",
    subtext:
      "Krad Global continues to explore new markets, new technologies and new ways of connecting businesses and people across borders.",
  },
  globalStats: [
    {
      metric: "3+",
      label: "Strategic Markets",
      description: "Direct operational hubs in India, UAE, and USA with active global corridors.",
    },
    {
      metric: "Global",
      label: "Business Reach",
      description: "Seamless cross-border transaction capabilities spanning Asia, the Middle East, and the Americas.",
    },
    {
      metric: "Multiple",
      label: "Business Verticals",
      description: "Diversified portfolio spanning travel, trade, supply chain, digital retail, and advisory.",
    },
    {
      metric: "International",
      label: "Network",
      description: "Built-in institutional relationships, vetted supplier pipelines, and logistics alliances.",
    },
  ],
  contactInfo: {
    email: "contact@kradglobal.com",
    phone: "+971 4 000 0000",
    whatsappUrl: "https://wa.me/971500000000?text=Hello%20Krad%20Global%20Team,%20I%20would%20like%20to%20explore%20business%20opportunities.",
    headquarters: "Dubai International Financial Centre (DIFC), Dubai, UAE",
    regionalOffices: [
      {
        region: "India",
        city: "Mumbai & New Delhi",
        address: "Commercial Gateway Hub, BKC, Mumbai",
        focus: "Sourcing, Supply Chain & International Tourism Outbound",
      },
      {
        region: "UAE",
        city: "Dubai",
        address: "Sheikh Zayed Road / DIFC Financial Corridor",
        focus: "Global Trading, Corporate Operations & Middle East Inbound",
      },
      {
        region: "USA",
        city: "New York & Delaware",
        address: "Manhattan Strategic Business Node, NY",
        focus: "North American Distribution, Digital Commerce & Strategic Ventures",
      },
    ],
  },
};

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: "global-travel",
    number: "01",
    title: "GLOBAL TRAVEL",
    tagline: "Curated International Mobility & Experiential Tourism",
    shortDescription:
      "International travel solutions, corporate mobility, luxury tourism, experiences and high-touch global travel services.",
    fullDescription:
      "Our Global Travel division redefines high-end corporate voyages, customized international luxury leisure, bespoke delegations, and cross-border mobility. Positioned as a dedicated premium service, we coordinate high-security executive itineraries, specialized private aviation arrangements, visa facilitation, and luxury destination management across key worldwide corridors.",
    keyPillars: [
      "Executive & Corporate Travel Logistics",
      "Bespoke Luxury Destination Experiences",
      "International Delegations & Trade Missions",
      "Strategic Hospitality Partnerships",
    ],
    metrics: [
      { label: "Corridors", value: "India - UAE - USA - Europe" },
      { label: "Service Standard", value: "24/7 Dedicated Concierge" },
      { label: "Focus", value: "B2B & High-Net-Worth Travel" },
    ],
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#c9a86a",
  },
  {
    id: "import-export",
    number: "02",
    title: "IMPORT & EXPORT",
    tagline: "Cross-Border Goods Flow & Regulatory Navigation",
    shortDescription:
      "Connecting vetted suppliers, manufactured products and consuming markets across international borders with compliant logistics.",
    fullDescription:
      "Bridging manufacturers in emerging manufacturing powerhouses with high-demand destination economies. We engineer resilient multimodal freight lanes, handle comprehensive customs architecture, manage end-to-end documentation, and mitigate supply chain disruptions across sea and air freight routes.",
    keyPillars: [
      "End-to-End Customs & Regulatory Compliance",
      "Multimodal Freight & Intermodal Routing",
      "Bulk & Containerized Cargo Management",
      "Port-to-Door Traceability & Quality Assurance",
    ],
    metrics: [
      { label: "Transit Hubs", value: "Jebel Ali, JNPT, NY/NJ" },
      { label: "Compliance", value: "Standardized International Trade Codes" },
      { label: "Cargo Scope", value: "General Goods & Industrial Supplies" },
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#38bdf8",
  },
  {
    id: "global-trading",
    number: "03",
    title: "GLOBAL TRADING",
    tagline: "Institutional Commodity & Commercial Distribution",
    shortDescription:
      "International sourcing, distribution, commercial brokerage and structured trading opportunities across frontier and established markets.",
    fullDescription:
      "Krad Global acts as an agile trading house, capitalizing on international price differentials, securing strategic inventory, and executing structured commercial contracts. We build long-term supply relationships backed by institutional escrow structures and sound counterparty risk protocols.",
    keyPillars: [
      "Commercial Sourcing & Supplier Vetting",
      "B2B Wholesale Contracts & Off-Take Agreements",
      "Risk Mitigation & Trade Financing Structures",
      "Bespoke Market Entry Procurement",
    ],
    metrics: [
      { label: "Market Focus", value: "South Asia, GCC & Americas" },
      { label: "Trade Framework", value: "Incoterms 2020 Compliant" },
      { label: "Execution", value: "Direct Manufacturer Bilaterals" },
    ],
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#e5c583",
  },
  {
    id: "digital-commerce",
    number: "04",
    title: "DIGITAL COMMERCE",
    tagline: "Omnichannel Cross-Border Retail & Next-Gen Dropshipping",
    shortDescription:
      "Dropshipping, e-commerce infrastructure, global brand incubation and digitally enabled cross-border commerce architectures.",
    fullDescription:
      "Leveraging modern algorithm-driven demand forecasting, programmatic advertising, localized payment gateways, and overseas micro-fulfillment centers. We power agile consumer product lines and direct-to-consumer pipelines that sell globally while fulfilling locally.",
    keyPillars: [
      "Algorithmic Product Research & Validation",
      "Automated High-Velocity Dropshipping Pipelines",
      "Global Micro-Fulfillment & 3PL Integration",
      "Multi-Currency Payment Processing & Conversion",
    ],
    metrics: [
      { label: "Fulfillment", value: "US & UAE Fast-Dispatch Alliances" },
      { label: "Channels", value: "D2C Web, Marketplaces & Social Commerce" },
      { label: "Tech Stack", value: "Modern Cloud-Automated ERP" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#60a5fa",
  },
  {
    id: "business-solutions",
    number: "05",
    title: "BUSINESS SOLUTIONS",
    tagline: "Corporate Market Entry & Strategic Advisory",
    shortDescription:
      "Cross-border corporate structuring, jurisdictional market entry, regional partnerships and localized operational solutions.",
    fullDescription:
      "Entering foreign jurisdictions requires nuanced regulatory navigation, local tax synchronization, banking introductions, and verified partner vetting. Krad Global's advisory arm provides turnkey solutions for enterprises expanding between the Indian subcontinent, the Middle East, and North America.",
    keyPillars: [
      "Cross-Border Corporate Setup & Licensing",
      "Banking & Financial Corridor Onboarding",
      "Local Regulatory Advisory & Compliance",
      "Strategic Joint Venture Formation",
    ],
    metrics: [
      { label: "Hub Specialization", value: "UAE Freezones, US LLC/C-Corp, India FDI" },
      { label: "Execution Model", value: "Turnkey Enterprise Onboarding" },
      { label: "Advisory", value: "Bilateral Trade Compliance" },
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#d4af37",
  },
  {
    id: "future-ventures",
    number: "06",
    title: "FUTURE VENTURES",
    tagline: "Emerging Markets, AI Logistics & Strategic Innovation",
    shortDescription:
      "New market penetration, disruptive tech integration, green energy logistics and strategic early-stage partnerships.",
    fullDescription:
      "We continually re-invest capital and cross-border expertise into high-upside ventures. From artificial intelligence applied to predictive supply chains to next-generation fintech solutions for global cross-border remittances, our future ventures arm stays ahead of macroeconomic shifts.",
    keyPillars: [
      "AI-Powered Supply Chain Intelligence",
      "Green & Sustainable Freight Initiatives",
      "Seed Capital & Strategic Incubation",
      "Emerging Frontier Market Corridors",
    ],
    metrics: [
      { label: "Horizon", value: "2026-2030 Growth Vectors" },
      { label: "Involvement", value: "Operational Equity & Bilateral Alliances" },
      { label: "Sectors", value: "Fintech, Logistics Tech & Clean Trade" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    accentColor: "#38bdf8",
  },
];

export const MARKET_STORIES: MarketStory[] = [
  {
    id: "india",
    country: "INDIA",
    code: "IND",
    flag: "🇮🇳",
    headline: "Where our journey connects with opportunity.",
    quote: "A powerhouse of manufacturing, technology, skilled talent, and dynamic consumer growth.",
    subtext:
      "India represents the foundational bedrock of manufacturing capability, vast demographic dividend, and outbound experiential tourism demand. Through strategic relationships in Mumbai, Delhi, and southern tech corridors, Krad Global channels Indian goods to international buyers while facilitating outbound business travel and international trade partnerships.",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85",
    coordinates: "19.0760° N, 72.8777° E",
    focusAreas: ["Sourcing & Manufacturing", "High-Volume Commodity Trade", "Outbound Travel & Delegations", "Tech Supply Chains"],
    keyHubs: ["Mumbai (Financial Hub)", "New Delhi (Trade Corridor)", "Bengaluru (Tech Ecosystem)"],
    economicSignificance:
      "Fastest growing major global economy, driving international demand across consumer and industrial sectors.",
  },
  {
    id: "uae",
    country: "UAE",
    code: "ARE",
    flag: "🇦🇪",
    headline: "Where global commerce meets ambition.",
    quote: "The world's preeminent financial crossroads connecting East and West with speed and precision.",
    subtext:
      "Dubai and the broader United Arab Emirates serve as Krad Global's operational nerve center. With unmatched logistics infrastructure, tax-optimized commercial freezones, and immediate access to over two billion consumers within a four-hour flight radius, the UAE anchors our global re-export, trading, and cross-border consulting initiatives.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    coordinates: "25.2048° N, 55.2708° E",
    focusAreas: ["Commercial Re-Export", "Corporate Freezone Hubs", "Luxury Tourism Gateway", "Multimodal Freight Node"],
    keyHubs: ["Dubai (DIFC / Jafza)", "Abu Dhabi (Energy & Sovereign Capital)", "Sharjah (Air Cargo Gateway)"],
    economicSignificance:
      "Global nexus of capital, trade liquidity, and strategic air-maritime connectivity.",
  },
  {
    id: "usa",
    country: "USA",
    code: "USA",
    flag: "🇺🇸",
    headline: "Where ideas meet one of the world's largest markets.",
    quote: "Unrivaled purchasing power, mature digital consumer infrastructure, and scalable enterprise opportunities.",
    subtext:
      "The United States provides the scale, consumer buying power, and institutional depth for our digital commerce, import distribution, and specialized commercial operations. By establishing reliable supply channels from South Asia and the Middle East into American distribution networks, we fulfill high-velocity consumer demands with efficiency.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1600&q=85",
    coordinates: "40.7128° N, 74.0060° W",
    focusAreas: ["High-Volume E-Commerce & D2C", "Import Distribution Networks", "Corporate Partnership Alliances", "Innovation Scouting"],
    keyHubs: ["New York (Commercial Hub)", "Delaware (Corporate Gateway)", "West Coast Port Corridors"],
    economicSignificance:
      "World's largest consumer economy with sophisticated supply chain distribution channels.",
  },
];

export const WHY_PRINCIPLES: WhyPrinciple[] = [
  {
    number: "01",
    title: "GLOBAL PERSPECTIVE",
    tagline: "Thinking beyond individual markets.",
    description:
      "We analyze opportunities across macro corridors rather than isolated geographic silos. A shift in Asian manufacturing, a tariff change in the Americas, or a new logistics corridor in the Middle East is continuously synthesized into strategic advantage.",
    points: [
      "Real-time intelligence across 3 continental time zones",
      "Macro-economic agility and currency risk mitigation",
      "Arbitrage discovery in sourcing and consumer retail",
    ],
    icon: "Globe",
  },
  {
    number: "02",
    title: "DIVERSE CAPABILITIES",
    tagline: "Multiple business verticals under one global ecosystem.",
    description:
      "Krad Global is intentionally multi-disciplinary. Travel clients become trade partners, e-commerce logistics strengthen our freight volumes, and our corporate advisory services unlock new avenues for strategic joint ventures.",
    points: [
      "Cross-pollinated deal flow and operational synergies",
      "Shared institutional relationships across multiple industries",
      "Resilient diversified revenue streams protecting against sector shocks",
    ],
    icon: "Layers",
  },
  {
    number: "03",
    title: "CONNECTED OPPORTUNITIES",
    tagline: "Building bridges between markets, suppliers, customers and partners.",
    description:
      "True commercial power lies in connectivity. We bring together vetted suppliers in India, strategic trading entities in the UAE, and wholesale buyers or consumer markets in North America through trusted, transparent frameworks.",
    points: [
      "Direct relationships with vetted manufacturers and operators",
      "Transparent contracts governed by international legal standards",
      "Frictionless transaction execution and payment coordination",
    ],
    icon: "Network",
  },
  {
    number: "04",
    title: "FORWARD THINKING",
    tagline: "Exploring emerging markets, technologies and business models.",
    description:
      "We embrace technological automation, AI-driven demand analytics, and sustainable cross-border trade methods. Rather than waiting for market disruption, we actively invest in systems that ensure long-term resilience.",
    points: [
      "Algorithmic forecasting and automated supply monitoring",
      "Continuous exploration of high-growth frontier corridors",
      "Sustainable and modern regulatory-first operational practices",
    ],
    icon: "Sparkles",
  },
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "krad-center",
    name: "KRAD GLOBAL",
    category: "core",
    description: "The central corporate intelligence, governance, and capital allocation core.",
    impact: "Unifies operations, monitors risk, and drives bilateral cross-border synergies.",
    x: 50,
    y: 50,
  },
  {
    id: "travel",
    name: "Travel & Mobility",
    category: "vertical",
    description: "Curated corporate mobility, luxury tourism, and international delegation coordination.",
    impact: "Connects business decision-makers physically across international hubs.",
    x: 22,
    y: 28,
  },
  {
    id: "trade",
    name: "Global Trading",
    category: "vertical",
    description: "Commercial brokerage, off-take agreements, and wholesale commodity distribution.",
    impact: "Captures multi-market price advantages with institutional escrow structures.",
    x: 50,
    y: 18,
  },
  {
    id: "import-export",
    name: "Import & Export",
    category: "vertical",
    description: "Physical freight flow, customs clearance, and port-to-door logistics management.",
    impact: "Physically shifts tons of verified cargo across ocean and air corridors.",
    x: 78,
    y: 28,
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    category: "vertical",
    description: "Omnichannel digital storefronts, multi-currency conversion, and digital brand presence.",
    impact: "Directly accesses international end-consumers with high-margin products.",
    x: 84,
    y: 55,
  },
  {
    id: "dropshipping",
    name: "Dropshipping",
    category: "vertical",
    description: "Agile on-demand fulfillment, algorithmic testing, and 3PL direct-dispatch pipelines.",
    impact: "Eliminates heavy upfront inventory holding costs through distributed logistics.",
    x: 72,
    y: 78,
  },
  {
    id: "logistics",
    name: "Logistics",
    category: "enabler",
    description: "Warehousing, intermodal rail-road-sea routing, and automated inventory sync.",
    impact: "The physical backbone ensuring on-time delivery across continents.",
    x: 50,
    y: 84,
  },
  {
    id: "partnerships",
    name: "Strategic Partnerships",
    category: "enabler",
    description: "Bilateral joint ventures, sovereign freezone ties, and banking alliances.",
    impact: "Accelerates regulatory clearance and provides privileged local market access.",
    x: 28,
    y: 78,
  },
  {
    id: "markets",
    name: "Target Markets",
    category: "enabler",
    description: "Active high-growth consumer and industrial corridors (India, UAE, USA & Global).",
    impact: "Provides the underlying demand driving all transaction flows.",
    x: 16,
    y: 55,
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "global-trade-corridors-2026",
    title: "Navigating the New Trade Corridors: How India, UAE, and USA Shape Modern Commerce",
    category: "International Trade",
    readTime: "5 min read",
    date: "October 2026",
    summary:
      "A strategic analysis of how CEPA agreements, multimodal sea-air logistics, and digital customs synchronization are transforming trade velocity between South Asia and the West.",
    author: "Krad Global Research Desk",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "cross-border-ecommerce-evolution",
    title: "The Next Era of Cross-Border Dropshipping: Algorithmic Sourcing and Micro-Fulfillment",
    category: "E-Commerce",
    readTime: "4 min read",
    date: "September 2026",
    summary:
      "Why traditional dropshipping is obsolete, and how automated inventory allocation and bonded regional warehouses in Dubai and the US are setting new standards.",
    author: "Digital Commerce Division",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "corporate-mobility-trends",
    title: "High-Touch Executive Travel: Managing Mobility in an Increasingly Connected Business World",
    category: "Global Travel Trends",
    readTime: "6 min read",
    date: "August 2026",
    summary:
      "The evolution of multinational executive delegations, bespoke visa corridors, and how integrated hospitality partnerships unlock commercial relationships.",
    author: "Global Travel Advisory",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "emerging-market-sourcing",
    title: "De-Risking Supply Chains: Multi-Country Sourcing Protocols Across Asia and Beyond",
    category: "Emerging Markets",
    readTime: "5 min read",
    date: "July 2026",
    summary:
      "How institutional buyers balance quality assurance, currency fluctuations, and localized supplier vetting across India and emerging export hubs.",
    author: "Global Procurement Strategy",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "market-entry-uae-us",
    title: "From Regional Leader to Global Enterprise: Structuring Market Entry Across the UAE and USA",
    category: "Business Opportunities",
    readTime: "7 min read",
    date: "June 2026",
    summary:
      "Critical legal, tax, and operational considerations when scaling companies from the subcontinent into Middle Eastern and North American jurisdictions.",
    author: "Corporate Advisory Practice",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];
