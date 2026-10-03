export interface TeamMember {
  name: string;
  role: string;
  country: string;
  bio: string;
  email?: string;
  avatarInitial?: string;
  linkedin?: string;
}

export interface BusinessDetails {
  summary: string;
  scopeOfOperations: string[];
  keyServices: {
    name: string;
    description: string;
  }[];
  tradeCorridors: string[];
  compliance: string[];
}

export interface BusinessVertical {
  id: string;
  number: string;
  order: number;
  country: string;
  operationalHubs: string[];
  websiteUrl: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  businessDetails: BusinessDetails;
  teamMembers: TeamMember[];
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
    order: 1,
    country: "United Arab Emirates & India",
    operationalHubs: ["Dubai (DIFC) - UAE", "Mumbai (BKC) - India", "New York (Manhattan) - USA"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Global Travel
    websiteUrl: "https://travel.kradglobal.com",
    title: "GLOBAL TRAVEL",
    tagline: "Curated International Mobility & Experiential Tourism",
    shortDescription:
      "International travel solutions, corporate mobility, luxury tourism, experiences and high-touch global travel services.",
    fullDescription:
      "Our Global Travel division redefines high-end corporate voyages, customized international luxury leisure, bespoke delegations, and cross-border mobility. Positioned as a dedicated premium service, we coordinate high-security executive itineraries, specialized private aviation arrangements, visa facilitation, and luxury destination management across key worldwide corridors.",
    businessDetails: {
      summary:
        "High-touch executive mobility, bespoke corporate missions, and bespoke luxury tourism connecting South Asia, the GCC, North America, and Europe with 24/7 dedicated concierge coverage.",
      scopeOfOperations: [
        "Executive Business Travel & Corporate Account Management",
        "Diplomatic & VIP Trade Delegation Logistics",
        "Bespoke Luxury Destination Experiences & Private Retreats",
        "Private Aviation Charters & High-Security Ground Transit",
        "Fast-Track Visa, Immigration & Border Protocol Facilitation",
      ],
      keyServices: [
        {
          name: "Corporate Executive Mobility",
          description: "End-to-end flight management, premium accommodation, and 24/7 route disruption mitigation for corporate executives.",
        },
        {
          name: "Experiential Luxury Tourism",
          description: "Curated private journeys across the Emirates, European cultural hubs, Southeast Asia, and private island retreats.",
        },
        {
          name: "Bilateral Trade Delegations",
          description: "Logistical and hospitality orchestration for business councils, summits, investor roadshows, and official government delegations.",
        },
        {
          name: "Aviation & Maritime Charters",
          description: "Dedicated access to private jets, helicopters, and luxury marine vessels across the Arabian Gulf and Mediterranean.",
        },
      ],
      tradeCorridors: [
        "India → United Arab Emirates (High-Frequency Business Axis)",
        "UAE → United Kingdom & Continental Europe",
        "India & UAE → North America (New York, San Francisco, Miami)",
        "GCC Cross-Border Corporate Mobility (Riyadh, Doha, Dubai)",
      ],
      compliance: [
        "IATA Certified Agency Protocols",
        "Corporate Duty of Care & Traveler Risk Management",
        "Strict GDPR & International Privacy Standards",
      ],
    },
    teamMembers: [
      {
        name: "[Executive Lead Name]",
        role: "Managing Director - Global Mobility & Hospitality",
        country: "Dubai, UAE",
        bio: "Leads international airline relationships, VIP private aviation charters, and corporate mobility accounts across the Middle East and Asia.",
        email: "travel.director@kradglobal.com",
        avatarInitial: "TD",
      },
      {
        name: "[Regional Partner Name]",
        role: "Director of Inbound & Outbound Tourism",
        country: "Mumbai, India",
        bio: "Specializes in high-volume corporate delegations, incentive retreats, and bilateral trade delegation hospitality.",
        email: "india.travel@kradglobal.com",
        avatarInitial: "RD",
      },
      {
        name: "[VIP Concierge Lead]",
        role: "Head of Private Client Services",
        country: "New York, USA",
        bio: "Manages North American executive itineraries, bespoke luxury itineraries, and cross-Atlantic charter coordination.",
        email: "us.concierge@kradglobal.com",
        avatarInitial: "VC",
      },
    ],
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
    order: 2,
    country: "India & United Arab Emirates",
    operationalHubs: ["JNPT / Mumbai - India", "Jebel Ali Port - UAE", "Port of New York / New Jersey - USA"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Import & Export
    websiteUrl: "https://trade.kradglobal.com",
    title: "IMPORT & EXPORT",
    tagline: "Cross-Border Goods Flow & Regulatory Navigation",
    shortDescription:
      "Connecting vetted suppliers, manufactured products and consuming markets across international borders with compliant logistics.",
    fullDescription:
      "Bridging manufacturers in emerging manufacturing powerhouses with high-demand destination economies. We engineer resilient multimodal freight lanes, handle comprehensive customs architecture, manage end-to-end documentation, and mitigate supply chain disruptions across sea and air freight routes.",
    businessDetails: {
      summary:
        "Comprehensive cross-border import and export infrastructure handling industrial supplies, consumer goods, and commercial bulk commodities across leading maritime and air trade lanes.",
      scopeOfOperations: [
        "Multimodal Freight Forwarding (Ocean FCL/LCL & Air Freight)",
        "End-to-End Customs Clearance & Tariffs Optimization",
        "Vetted Manufacturer Sourcing & Pre-Shipment Inspection",
        "Warehousing, Consolidation & Port-to-Door Delivery",
      ],
      keyServices: [
        {
          name: "Ocean & Air Freight Management",
          description: "Contracted cargo lanes across Tier-1 shipping lines and air carriers with competitive transit times.",
        },
        {
          name: "Customs Regulatory Architecture",
          description: "Full customs classification (HS Codes), duty drawback navigation, and trade compliance clearance.",
        },
        {
          name: "Cross-Border Sourcing & Inspection",
          description: "Factory audits, material quality validation, and supply continuity assurance at the manufacturing source.",
        },
        {
          name: "Bonded Warehousing & Logistics",
          description: "Free-zone storage, consolidation hubs in Jebel Ali and Mumbai, and localized last-mile dispatch.",
        },
      ],
      tradeCorridors: [
        "India (JNPT / Mundra) → United Arab Emirates (Jebel Ali)",
        "Middle East Hub → North America (East Coast Ports)",
        "Southeast Asia → India & Gulf Transit Corridors",
        "Europe → Middle East Multimodal Routes",
      ],
      compliance: [
        "Incoterms 2020 Standard Operating Framework",
        "AEO (Authorized Economic Operator) Standards",
        "International Maritime Organization (IMO) Cargo Safety",
      ],
    },
    teamMembers: [
      {
        name: "[Trade Operations Head]",
        role: "Director of International Freight & Trade",
        country: "Dubai, UAE",
        bio: "Specializes in maritime freight contracts, cross-border shipping alliances, and Gulf customs clearance architectures.",
        email: "freight@kradglobal.com",
        avatarInitial: "TO",
      },
      {
        name: "[Head of Sourcing & QA]",
        role: "VP of Supplier Networks & Compliance",
        country: "Mumbai, India",
        bio: "Oversees manufacturer audits, quality verification laboratories, and outbound port operations across South Asia.",
        email: "sourcing@kradglobal.com",
        avatarInitial: "SQ",
      },
      {
        name: "[Port Logistics Coordinator]",
        role: "Chief of North American Import Logistics",
        country: "New York, USA",
        bio: "Directs container clearance, intermodal rail transfer, and bonded warehouse distribution for American accounts.",
        email: "us.logistics@kradglobal.com",
        avatarInitial: "PL",
      },
    ],
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
    order: 3,
    country: "United Arab Emirates & Global",
    operationalHubs: ["Dubai (DIFC) - UAE", "Singapore", "Geneva Trade Axis"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Global Trading
    websiteUrl: "https://trading.kradglobal.com",
    title: "GLOBAL TRADING",
    tagline: "Institutional Commodity & Commercial Distribution",
    shortDescription:
      "International sourcing, distribution, commercial brokerage and structured trading opportunities across frontier and established markets.",
    fullDescription:
      "Krad Global acts as an agile trading house, capitalizing on international price differentials, securing strategic inventory, and executing structured commercial contracts. We build long-term supply relationships backed by institutional escrow structures and sound counterparty risk protocols.",
    businessDetails: {
      summary:
        "Commercial brokerage and structured commodity trading desk managing wholesale buy-sell contracts, off-take agreements, and cross-border commercial procurement.",
      scopeOfOperations: [
        "Bulk Commodity & Raw Material Procurement",
        "Commercial Wholesale Brokerage & Counterparty Matching",
        "Structured Trade Financing & Documentary Credits (LC/SBLC)",
        "Arbitrage & Regional Price Optimization Desks",
      ],
      keyServices: [
        {
          name: "Structured Commercial Procurement",
          description: "Negotiating direct manufacturer contracts, off-take agreements, and long-term supply quotas.",
        },
        {
          name: "Trade Finance & Escrow Security",
          description: "Structuring Letters of Credit, performance bonds, and verifiable escrow mechanisms for large-scale deals.",
        },
        {
          name: "Global Price Discovery & Arbitrage",
          description: "Capitalizing on market dislocations between Asian production hubs and Middle Eastern/Western demand centers.",
        },
        {
          name: "Strategic Inventory Allocation",
          description: "Managing buffer stocks, forward-hedged deliveries, and secure localized commodity distribution.",
        },
      ],
      tradeCorridors: [
        "Gulf Cooperation Council (GCC) Internal Distribution",
        "South Asia ↔ Middle East Commercial Corridors",
        "Africa Frontier Markets ↔ UAE Trading Hubs",
        "Trans-Pacific Sourcing & Commodity Channels",
      ],
      compliance: [
        "International Chamber of Commerce (ICC) Standards",
        "Strict KYC & Anti-Money Laundering (AML) Protocols",
        "Vetted Tier-1 Banking Relationships",
      ],
    },
    teamMembers: [
      {
        name: "[Chief Commercial Officer]",
        role: "Head of Global Trading & Commodities",
        country: "Dubai, UAE",
        bio: "Specializes in bulk commercial contracts, cross-border structured commodity finance, and international buyer negotiations.",
        email: "trading.desk@kradglobal.com",
        avatarInitial: "CC",
      },
      {
        name: "[Senior Trading Partner]",
        role: "Director of Wholesale & Distribution",
        country: "Singapore",
        bio: "Leads Asia-Pacific supplier discovery, raw material allocation, and bilateral off-take frameworks.",
        email: "asia.trading@kradglobal.com",
        avatarInitial: "ST",
      },
      {
        name: "[Trade Finance Specialist]",
        role: "VP of Risk & Documentary Credits",
        country: "Geneva / Dubai",
        bio: "Manages letters of credit, escrow verification, counterparty risk assessments, and compliance audits.",
        email: "tradefinance@kradglobal.com",
        avatarInitial: "TF",
      },
    ],
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
    order: 4,
    country: "United States & United Arab Emirates",
    operationalHubs: ["Delaware / New York - USA", "Dubai - UAE", "Shenzhen - Asia"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Digital Commerce
    websiteUrl: "https://commerce.kradglobal.com",
    title: "DIGITAL COMMERCE",
    tagline: "Omnichannel Cross-Border Retail & Next-Gen Dropshipping",
    shortDescription:
      "Dropshipping, e-commerce infrastructure, global brand incubation and digitally enabled cross-border commerce architectures.",
    fullDescription:
      "Leveraging modern algorithm-driven demand forecasting, programmatic advertising, localized payment gateways, and overseas micro-fulfillment centers. We power agile consumer product lines and direct-to-consumer pipelines that sell globally while fulfilling locally.",
    businessDetails: {
      summary:
        "High-velocity cross-border digital retail, next-gen dropshipping architectures, and direct-to-consumer brand incubation powered by proprietary software and automated fulfillment.",
      scopeOfOperations: [
        "Automated Multi-Channel Dropshipping Infrastructure",
        "D2C Brand Incubation, Packaging & Intellectual Property",
        "Cross-Border Micro-Fulfillment & 3PL Warehouse Alliances",
        "Algorithmic Trend Forecasting & Paid Media Performance",
      ],
      keyServices: [
        {
          name: "High-Velocity Dropshipping Automation",
          description: "End-to-end API integration between customer storefronts, supplier warehouses, and global parcel tracking.",
        },
        {
          name: "Localized Fulfillment & Fast Dispatch",
          description: "Strategic fulfillment hubs in the US, UAE, and EU guaranteeing 2-5 day domestic delivery windows.",
        },
        {
          name: "Multi-Currency Checkout & Payments",
          description: "Conversion-optimized payment stack supporting Stripe, local GCC gateways, Buy-Now-Pay-Later, and multicurrency.",
        },
        {
          name: "Private Label Brand Incubation",
          description: "Transforming winning cross-border products into institutional direct-to-consumer brands with custom packaging.",
        },
      ],
      tradeCorridors: [
        "Manufacturing Desks (Asia) → US Consumer Market (Fast Air Express)",
        "China & India Sourcing → GCC Regional Micro-Fulfillment (Dubai Hub)",
        "Domestic US Micro-Hubs → Nationwide Fast Dispatch",
        "Cross-Border UK & European Digital Sales Channels",
      ],
      compliance: [
        "Consumer Protection & Product Safety Standards (FCC/CE)",
        "Payment Card Industry Data Security Standard (PCI-DSS)",
        "Strict E-Commerce Return & Warranty Protocols",
      ],
    },
    teamMembers: [
      {
        name: "[VP of Digital Commerce]",
        role: "Head of E-Commerce & Growth",
        country: "New York, USA",
        bio: "Directs programmatic acquisition strategies, omnichannel storefront architectures, and customer lifetime value optimization.",
        email: "commerce.lead@kradglobal.com",
        avatarInitial: "VD",
      },
      {
        name: "[Head of Supply Chain & 3PL]",
        role: "Director of Global Micro-Fulfillment",
        country: "Shenzhen / Dubai",
        bio: "Specializes in automated order dispatch, factory direct-ship logistics, and real-time inventory management.",
        email: "fulfillment@kradglobal.com",
        avatarInitial: "HS",
      },
      {
        name: "[Brand Incubation Strategist]",
        role: "Creative Director - Digital Brands",
        country: "Dubai, UAE",
        bio: "Leads packaging design, consumer product positioning, and localized viral commerce creative production.",
        email: "brands@kradglobal.com",
        avatarInitial: "BI",
      },
    ],
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
    order: 5,
    country: "United Arab Emirates, India & USA",
    operationalHubs: ["Dubai (DIFC / ADGM) - UAE", "Mumbai & New Delhi - India", "Delaware & NY - USA"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Business Solutions
    websiteUrl: "https://solutions.kradglobal.com",
    title: "BUSINESS SOLUTIONS",
    tagline: "Corporate Market Entry & Strategic Advisory",
    shortDescription:
      "Cross-border corporate structuring, jurisdictional market entry, regional partnerships and localized operational solutions.",
    fullDescription:
      "Entering foreign jurisdictions requires nuanced regulatory navigation, local tax synchronization, banking introductions, and verified partner vetting. Krad Global's advisory arm provides turnkey solutions for enterprises expanding between the Indian subcontinent, the Middle East, and North America.",
    businessDetails: {
      summary:
        "Turnkey cross-border corporate expansion advisory assisting enterprises, family offices, and emerging founders in establishing compliant operations in the UAE, India, and the United States.",
      scopeOfOperations: [
        "Jurisdictional Corporate Structuring & Licensing",
        "Tier-1 Corporate Banking & Treasury Onboarding",
        "Bilateral Tax, Regulatory & Foreign Direct Investment (FDI) Advisory",
        "Strategic Joint Venture Brokerage & Commercial Representation",
      ],
      keyServices: [
        {
          name: "UAE Freezone & Mainland Incorporation",
          description: "Full-service setup across DIFC, ADGM, DMCC, and Dubai Mainland including residency visas and corporate bank accounts.",
        },
        {
          name: "US Corporate Structuring (LLC / C-Corp)",
          description: "Delaware and Wyoming corporate entity structuring, EIN issuance, US banking access, and federal tax compliance.",
        },
        {
          name: "India Market Entry & FDI Structuring",
          description: "Navigating RBI regulations, FDI routes, local office setup, and joint venture vetting across Indian commercial hubs.",
        },
        {
          name: "Strategic Joint Ventures & Commercial Representation",
          description: "Acting as local corporate partners, nominative directors, and commercial advisors for foreign corporate entrants.",
        },
      ],
      tradeCorridors: [
        "India ↔ UAE Corporate Corridor (CEPA Trade Agreement)",
        "UAE ↔ North American Investment & Expansion Channel",
        "Europe ↔ GCC Corporate Relocation Hub",
        "South Asia ↔ Western Markets Expansion Pipeline",
      ],
      compliance: [
        "UAE Corporate Tax & Economic Substance Regulations (ESR)",
        "US IRS Foreign National Tax Compliance Standards",
        "Reserve Bank of India (RBI) Foreign Exchange Management Act (FEMA)",
      ],
    },
    teamMembers: [
      {
        name: "[Managing Partner - Advisory]",
        role: "Head of Corporate Structuring & Jurisdictions",
        country: "Dubai, UAE",
        bio: "Advises multinational enterprises on UAE freezone/mainland structuring, corporate taxation, and banking governance.",
        email: "solutions@kradglobal.com",
        avatarInitial: "MP",
      },
      {
        name: "[Director of India Operations]",
        role: "VP of Regulatory Affairs & FDI",
        country: "Mumbai, India",
        bio: "Specializes in cross-border inbound investment, Indian corporate compliance, and joint venture negotiation.",
        email: "india.solutions@kradglobal.com",
        avatarInitial: "DO",
      },
      {
        name: "[Legal & US Compliance Counsel]",
        role: "Senior Partner - North American Structuring",
        country: "New York, USA",
        bio: "Coordinates Delaware holding structures, federal compliance, and transatlantic commercial agreements.",
        email: "us.advisory@kradglobal.com",
        avatarInitial: "LC",
      },
    ],
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
    order: 6,
    country: "Global / Cross-Border",
    operationalHubs: ["Dubai - UAE", "San Francisco - USA", "Bangalore - India"],
    // USER CONFIGURATION: Replace with your actual individual website URL for Future Ventures
    websiteUrl: "https://ventures.kradglobal.com",
    title: "FUTURE VENTURES",
    tagline: "Emerging Markets, AI Logistics & Strategic Innovation",
    shortDescription:
      "New market penetration, disruptive tech integration, green energy logistics and strategic early-stage partnerships.",
    fullDescription:
      "We continually re-invest capital and cross-border expertise into high-upside ventures. From artificial intelligence applied to predictive supply chains to next-generation fintech solutions for global cross-border remittances, our future ventures arm stays ahead of macroeconomic shifts.",
    businessDetails: {
      summary:
        "Innovation incubator and strategic venture arm investing in and operationalizing cutting-edge technologies that transform cross-border commerce, supply chain automation, and fintech.",
      scopeOfOperations: [
        "AI Supply Chain Optimization & Autonomous Logistics",
        "Cross-Border Fintech & Multi-Currency Settlement Protocols",
        "Clean Logistics & Sustainable Freight Initiatives",
        "Early-Stage Incubation & Strategic Capital Deployment",
      ],
      keyServices: [
        {
          name: "Predictive AI Trade Intelligence",
          description: "Machine learning systems predicting shipping bottle-necks, customs delays, and commodity pricing fluctuations.",
        },
        {
          name: "Next-Gen Fintech Remittance Infrastructure",
          description: "Accelerating same-day cross-border B2B payouts, institutional stablecoin settlement, and currency hedging.",
        },
        {
          name: "Sustainable Green Freight Partnerships",
          description: "Piloting carbon-offset ocean transit and electric last-mile delivery alliances across key metropolitan hubs.",
        },
        {
          name: "Strategic Venture Incubation",
          description: "Providing capital, direct commercial access, and regulatory sponsorship for breakthrough global startups.",
        },
      ],
      tradeCorridors: [
        "Silicon Valley ↔ Dubai Tech & Capital Corridor",
        "Bangalore Technology Hub ↔ Global Deployment Desks",
        "Trans-Pacific Digital Innovation & AI Corridors",
        "Global Emerging Frontiers & Green Energy Corridors",
      ],
      compliance: [
        "Venture Capital & Regulatory Sandbox Standards",
        "International ESG (Environmental, Social, Governance) Frameworks",
        "Intellectual Property & Patent Protection across Tri-Continent Nodes",
      ],
    },
    teamMembers: [
      {
        name: "[Head of Ventures & Innovation]",
        role: "Chief Innovation Officer & General Partner",
        country: "Dubai / San Francisco",
        bio: "Directs technology incubation, venture alliances, and strategic capital allocation across AI, fintech, and supply chain automation.",
        email: "ventures@kradglobal.com",
        avatarInitial: "HV",
      },
      {
        name: "[AI & Logistics Architect]",
        role: "VP of Applied Technologies",
        country: "Bangalore, India",
        bio: "Specializes in machine learning models for predictive routing, freight optimization, and automated commerce software.",
        email: "tech@kradglobal.com",
        avatarInitial: "AL",
      },
      {
        name: "[Strategic Partnerships Lead]",
        role: "Director of Global Startup Alliances",
        country: "San Francisco, USA",
        bio: "Connects breakthrough technology founders with Krad Global's physical trade corridors and institutional distribution.",
        email: "partnerships@kradglobal.com",
        avatarInitial: "SP",
      },
    ],
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

export function getEndeavourBySlug(slug: string): BusinessVertical | undefined {
  return BUSINESS_VERTICALS.find((v) => v.id === slug);
}

export function getAllEndeavours(): BusinessVertical[] {
  return [...BUSINESS_VERTICALS].sort((a, b) => a.order - b.order);
}
