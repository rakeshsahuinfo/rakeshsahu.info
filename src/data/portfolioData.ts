import { Competency, JourneyMilestone, ServiceOffering, InsightArticle, BeyondTechItem } from '../types';

export const PORTFOLIO_INFO = {
  name: "Rakesh Kumar Sahu",
  title: "Technology Leader • Architect • Mentor",
  headlineDisplay: "Building technology. Enabling people. Learning what comes next.",
  bio: "I help organizations turn complex technology challenges into scalable solutions — while enabling people and teams to grow, adapt and build what comes next.",
  tenure: "25+ Years of Curiosity | 17+ Years in Technology",
  email: "email@rakeshsahu.info",
  portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCYScWHr64Et-OSfuCNVJEnG7Zlrl9ikB9qBkLbtun0ote9G5iD_9f5vEOSkKwQ7K1hFEdByqBar2C9gYbGx6Wo8E-kWtdGjVIh5_e5pYqhBrwkBbQK5PII3yZqPO8dQ0bIv-VQAMUu3SWx2sb4QhjoAXsEXmNFa3_HUolNWnWWfUkDpHSnxDaGAvRP4tJL3Ak3lCEeubVMoZytrK0osdgjBrF07UqEgx0m4n5n88Ymk_fOCYmKloDQ",
  careerLineSummary: "Teaching → Entrepreneurship → Engineering → Architecture → Leadership → AI",
  careerParagraph: "From teaching students at 16 to leading technology teams and architecting enterprise platforms, every chapter added a different perspective — teaching taught me how people learn, entrepreneurship taught me responsibility, engineering taught me how systems work, and leadership taught me that technology only succeeds when people do.",
  beliefHeading: "Technology changes.\nPeople make it meaningful.",
  beliefParagraph: "I believe technology is most powerful when it helps people do more, understand more and create more. My role as a technology leader is not just to design systems, but to create clarity, enable people and turn complex challenges into meaningful progress.",
  beyondTechTagline: "Technology is what I work with. People, music, travel and learning are what keep me curious.",
  connectServices: "Leadership | Consulting | Training | Mentoring | Speaking"
};

export const CORE_COMPETENCIES: Competency[] = [
  {
    id: "tech-leadership",
    title: "Technology Leadership",
    icon: "groups",
    description: "Building high-performing teams and enabling people to turn complex challenges into meaningful outcomes.",
    accentColor: "#4fdbc8",
    highlights: [
      "Cross-functional engineering organization scaling (from seed to enterprise scale)",
      "Culture of psychological safety, ownership, and engineering excellence",
      "Executive stakeholder alignment & bridging technical complexity with business value",
      "Mentoring next-generation engineering managers and principal architects"
    ],
    caseStudy: {
      title: "Global Engineering Transformation",
      impact: "Reduced time-to-market by 42% while improving team retention to 94%",
      description: "Restructured a siloed 120-person distributed engineering group into outcome-driven autonomous squads with clear domain ownership, continuous deployment pipelines, and shared engineering standards."
    }
  },
  {
    id: "architecture-emerging-tech",
    title: "Architecture & Emerging Technology",
    icon: "psychology",
    description: "Designing scalable platforms while exploring how AI can reshape enterprise technology.",
    accentColor: "#4fdbc8",
    highlights: [
      "Distributed systems design, event-driven architectures & domain-driven design (DDD)",
      "Pragmatic enterprise AI adoption: Agentic workflows, RAG systems, and LLM governance",
      "Cloud-native resilience, microservices modernization, and zero-downtime migrations",
      "Technical debt remediation strategies with quantifiable business outcomes"
    ],
    caseStudy: {
      title: "Core Platform Modernization & AI Ingestion",
      impact: "Handled 10x traffic spikes with 99.99% availability and sub-80ms latency",
      description: "Architected a hybrid event-stream platform processing tens of millions of daily transactions, decoupling legacy monoliths into resilient cloud microservices augmented with real-time AI classification."
    }
  },
  {
    id: "strategy-innovation",
    title: "Strategy, Innovation & Transformation",
    icon: "hub",
    description: "Connecting business goals, technology strategy and execution across complex enterprise environments.",
    accentColor: "#f8bd45",
    highlights: [
      "Technology roadmapping aligned directly with P&L and long-term enterprise value",
      "Innovation incubation: moving from proof-of-concept to production reality",
      "Vendor evaluation, build-vs-buy analysis, and total cost of ownership (TCO) optimization",
      "Change management across multi-tiered corporate and technology stakeholders"
    ],
    caseStudy: {
      title: "Enterprise Multi-Year Digital Roadmap",
      impact: "Delivered $14M in operational efficiencies over 3 years",
      description: "Defined and orchestrated an overarching technology modernization strategy across four international business units, establishing common design systems, reusable service meshes, and agile delivery governance."
    }
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "teaching",
    order: 1,
    stage: "Teaching",
    title: "Teaching at 16: The Art of Simplification",
    period: "Early Foundation",
    summary: "Teaching students at 16 taught me how people learn, how to break down intricate concepts, and how empathy drives comprehension.",
    lesson: "Teaching taught me how people learn.",
    details: [
      "Started tutoring high school students in mathematics and fundamental computer logic at age 16.",
      "Discovered that true understanding isn't about knowing jargon, but in explaining hard concepts simply.",
      "Learned patience, adaptive communication styles, and the profound joy of seeing others unlock their potential."
    ],
    skillsGained: ["Empathy", "Conceptual Simplification", "Pedagogy", "Clear Communication"]
  },
  {
    id: "entrepreneurship",
    order: 2,
    stage: "Entrepreneurship",
    title: "Entrepreneurship: The Crucible of Ownership",
    period: "Early Career",
    summary: "Stepping into early ventures meant wearing every hat: from customer discovery and product architecture to shipping software and surviving constraints.",
    lesson: "Entrepreneurship taught me responsibility.",
    details: [
      "Bootstrapped early software initiatives, navigating finite capital and urgent customer timelines.",
      "Mastered end-to-end accountability: when a system went down, there was no separate team to delegate to.",
      "Internalized the direct relationship between engineering decisions, cash flow, and user delight."
    ],
    skillsGained: ["P&L Ownership", "Customer Empathy", "Resourcefulness", "Rapid Prototyping"]
  },
  {
    id: "engineering",
    order: 3,
    stage: "Engineering",
    title: "Engineering: Systems, Concurrency & Craft",
    period: "Core Engineering Years",
    summary: "Diving deep into the engine room of software: distributed databases, scalable concurrency, protocol layers, and bulletproof code.",
    lesson: "Engineering taught me how systems work.",
    details: [
      "Built high-throughput backend services handling millions of concurrent requests under stringent SLA requirements.",
      "Tackled distributed consensus, eventual consistency, database optimization, and latency bottlenecks.",
      "Championed clean architecture, automated testing suites, and observability practices."
    ],
    skillsGained: ["Distributed Systems", "Performance Tuning", "Database Architecture", "Code Craftsmanship"]
  },
  {
    id: "architecture",
    order: 4,
    stage: "Architecture",
    title: "Enterprise Architecture: Strategy at Scale",
    period: "Platform & Systems Design",
    summary: "Moving from individual components to systemic topologies that span continents, legacy integrations, and multi-cloud footprints.",
    lesson: "Architecture taught me how to balance tradeoffs.",
    details: [
      "Designed enterprise-grade platforms balancing reliability, cost, velocity, and security posture.",
      "Led legacy decomposition programs, successfully carving microservices out of decades-old monoliths.",
      "Created governance frameworks that encouraged architectural innovation without creating chaos."
    ],
    skillsGained: ["Domain-Driven Design", "Cloud Native", "Event-Driven Topologies", "Enterprise Integration"]
  },
  {
    id: "leadership",
    order: 5,
    stage: "Leadership",
    title: "Technology Leadership: Amplifying People",
    period: "Executive & People Leadership",
    summary: "Leading large multidisciplinary teams showed that software systems are a reflection of human communication structures (Conway's Law).",
    lesson: "Leadership taught me that technology only succeeds when people do.",
    details: [
      "Built and nurtured high-performing engineering cultures centered around trust, continuous feedback, and autonomy.",
      "Mentored dozens of engineers into staff, principal, and managerial career paths.",
      "Partnered with C-suite executives to align technical roadmaps directly with corporate strategic goals."
    ],
    skillsGained: ["Organizational Design", "Executive Coaching", "Strategic Planning", "Culture Building"]
  },
  {
    id: "ai",
    order: 6,
    stage: "AI",
    title: "AI & What Comes Next: Human-Centric Intelligence",
    period: "Current & Forward Horizon",
    summary: "Pioneering the pragmatic integration of generative models, agentic orchestrations, and AI-assisted workflows within enterprise constraints.",
    lesson: "Learning what comes next — continuously curious.",
    details: [
      "Directing AI strategy and implementation for enterprise knowledge retrieval, automated reasoning, and developer productivity.",
      "Establishing guardrails for hallucination prevention, data privacy compliance, and responsible AI governance.",
      "Championing human-in-the-loop workflows where AI amplifies human intellect rather than replacing human judgment."
    ],
    skillsGained: ["Agentic AI Systems", "LLM Orchestration", "AI Safety & Governance", "Future-State Architecture"]
  }
];

export const BEYOND_TECH_ITEMS: BeyondTechItem[] = [
  {
    id: "teacher",
    title: "Teacher",
    icon: "school",
    subtitle: "Because teaching is one of the best ways to learn.",
    description: "Because teaching is one of the best ways to learn.",
    fullStory: "Teaching has been a central pillar of my life since I was 16. Whether teaching complex calculus, distributed computing concepts to junior developers, or mentoring senior executives through digital transformations, the act of teaching forces you to eliminate fluff and get to first principles. I regularly run workshops, design mentorship curriculums, and speak with student communities."
  },
  {
    id: "music",
    title: "Music",
    icon: "music_note",
    subtitle: "A lifelong curiosity — from Tabla to guitar and everything in between.",
    description: "A lifelong curiosity — from Tabla to guitar and everything in between.",
    fullStory: "Rhythm and melody share profound symmetry with software architecture. Playing the Indian classical Tabla trained my brain in intricate mathematical polyrhythms, precision, and active listening. Picking up the acoustic and electric guitar taught me improvisation, harmony, and creative balance. In engineering, as in an orchestra, the best systems emerge when distinct instruments complement each other in tight synchronization."
  },
  {
    id: "travel",
    title: "Travel",
    icon: "public",
    subtitle: "Different places, people and perspectives shape how I see the world.",
    description: "Different places, people and perspectives shape how I see the world.",
    fullStory: "Traveling across dozens of countries and cultures has been an indispensable teacher of humility and adaptability. Stepping out of familiar environments challenges unconscious biases, reveals alternative ways of problem-solving, and deepens empathy. This global perspective directly informs how I design inclusive software and build distributed, cross-cultural global teams."
  },
  {
    id: "giving-back",
    title: "Giving Back",
    icon: "bloodtype",
    subtitle: "A regular blood donor since my teens.",
    description: "A regular blood donor since my teens.",
    fullStory: "Quiet consistency matters more than loud gestures. Donating blood regularly since my teenage years has been a personal commitment to community health and saving lives. Alongside blood donation, I dedicate time to pro-bono technology advisory for social causes, educational scholarships for underprivileged students, and open mentorship for first-generation engineers."
  }
];

export const SERVICES_LIST: ServiceOffering[] = [
  {
    id: "leadership-advisory",
    title: "Executive Technology Advisory",
    category: "Leadership",
    tagline: "Bridging board vision with engineering reality",
    description: "Strategic advisory for CEOs, CTOs, and founders navigating digital inflection points, restructuring technology departments, or modernizing engineering culture.",
    deliverables: [
      "Technology & engineering organizational audit",
      "Executive alignment sessions & multi-year technology roadmaps",
      "Engineering KPI framework (DORA metrics, team health, velocity)",
      "CTO/VP Engineering interim leadership and sounding board"
    ],
    targetAudience: "Series B+ Startups, Scale-ups, and Enterprise CTOs"
  },
  {
    id: "enterprise-architecture",
    title: "Architecture & Modernization Consulting",
    category: "Architecture",
    tagline: "Scalable, resilient systems designed for real business growth",
    description: "Hands-on architectural guidance to transform brittle legacy systems into robust, event-driven, cloud-native platforms capable of 10x scale.",
    deliverables: [
      "System architecture review & bottleneck root-cause analysis",
      "Monolith decomposition strategy & microservices migration plan",
      "Cloud cost optimization (FinOps) and resilience hardening",
      "Enterprise API and event streaming specifications"
    ],
    targetAudience: "Organizations struggling with technical debt or scaling bottlenecks"
  },
  {
    id: "ai-strategy",
    title: "Enterprise AI Strategy & Implementation",
    category: "Technology & AI",
    tagline: "Pragmatic, high-ROI AI adoption without the hype",
    description: "Helping organizations identify viable AI use cases, architect production-ready agentic workflows, and establish robust safety and compliance frameworks.",
    deliverables: [
      "AI readiness assessment & business value prioritization",
      "Agentic workflow and RAG architecture blueprints",
      "Model evaluation, vendor selection & data privacy framework",
      "AI governance, security, and developer productivity tooling"
    ],
    targetAudience: "Enterprises seeking tangible ROI from modern AI technologies"
  },
  {
    id: "team-training",
    title: "Leadership Mentoring & Training Programs",
    category: "Training",
    tagline: "Empowering your people to lead with clarity and empathy",
    description: "Custom workshops and 1-on-1 coaching for engineering managers, staff/principal engineers, and tech leads stepping into executive scope.",
    deliverables: [
      "1-on-1 executive coaching for technical leaders",
      "Workshops: 'From Senior Engineer to Architect & Leader'",
      "Psychological safety and team feedback loops implementation",
      "Technical storytelling & executive communication masterclasses"
    ],
    targetAudience: "Emerging engineering leaders and growing tech organizations"
  },
  {
    id: "keynote-speaking",
    title: "Keynotes & Industry Speaking",
    category: "Speaking",
    tagline: "Thought-provoking talks on leadership, architecture, and the future of work",
    description: "Engaging keynote presentations for industry summits, corporate offsites, and developer conferences on systems thinking, AI evolution, and leadership.",
    deliverables: [
      "Keynote addresses on AI transformation and human potential",
      "Interactive panel moderation and executive roundtables",
      "Curated Q&A sessions and fireside chats"
    ],
    targetAudience: "Tech conferences, executive summits, corporate all-hands"
  }
];

export const INSIGHTS_LIST: InsightArticle[] = [
  {
    id: "technology-people-meaningful",
    title: "Technology Changes. People Make It Meaningful: The Human Equation",
    readTime: "6 min read",
    category: "Leadership Philosophy",
    date: "September 2026",
    excerpt: "Why the highest-leverage engineering decisions are never purely technical, and how cultivating clarity and empathy drives lasting technical excellence.",
    keyTakeaways: [
      "Conway's Law is inescapable: system architecture always mirrors organizational communication.",
      "Complex systems fail at the seams of human misunderstanding, not code syntax.",
      "Great leaders don't give answers; they create conditions where teams arrive at truth collaboratively."
    ],
    content: [
      "Throughout more than 17 years in enterprise technology and 25 years of insatiable curiosity, I have witnessed countless framework migrations, cloud revolutions, and architectural paradigms. Yet across every cycle, one truth remains steadfast: Technology changes. People make it meaningful.",
      "When we inspect a failed software initiative, post-mortems rarely point to an inability to write a specific algorithm. Instead, the failure traces back to ambiguity: misaligned incentives, siloed communications, fear of speaking up, or a disconnection between the code being committed and the human beings who depend on it.",
      "My approach as a technology leader begins by establishing profound clarity. When engineers understand the 'why' behind an architectural choice—and feel trusted to own the outcome—velocity and quality follow organically.",
      "As AI accelerates software generation, the differentiator in modern organizations will not be how fast we can output code, but our judgment in defining what is worth building and how we uplift our teams along the journey."
    ]
  },
  {
    id: "pragmatic-enterprise-ai",
    title: "Beyond the Hype: Architecting Pragmatic Agentic AI in the Enterprise",
    readTime: "8 min read",
    category: "AI & Architecture",
    date: "August 2026",
    excerpt: "A blueprint for moving from conversational toy demos to deterministic, secure, and cost-effective multi-agent workflows in production.",
    keyTakeaways: [
      "Grounding and deterministic verification must flank every non-deterministic model call.",
      "Start with small, bounded problem domains with clear evaluation metrics.",
      "The value of AI is unlocked when it reduces cognitive load for human experts."
    ],
    content: [
      "Every enterprise is currently asking how to implement Generative AI, but few are architecting for deterministic reliability. In enterprise environments, an 85% success rate is not a feature—it is an unacceptable operational risk.",
      "To build production-grade agentic systems, we must treat LLMs as reasoning engines within a strictly bounded architecture. This means implementing formal schema contracts, rigorous evaluation pipelines, guardrail layers, and deterministic fallback circuits.",
      "In this essay, we examine how decoupling workflow orchestration from model inference allows organizations to remain model-agnostic, adapt to next-generation models effortlessly, and protect sensitive enterprise data."
    ]
  },
  {
    id: "non-linear-career-strength",
    title: "The Non-Linear Career: Why Cross-Disciplinary Leaders Build Resilient Systems",
    readTime: "5 min read",
    category: "Career & Growth",
    date: "July 2026",
    excerpt: "How teaching at 16, entrepreneurship, classical music, and enterprise engineering connect to form a holistic leadership mental model.",
    keyTakeaways: [
      "Specialization is useful, but synthesis across diverse domains creates breakthrough leadership.",
      "Teaching is the ultimate test of conceptual clarity.",
      "Musical polyrhythms teach synchronization and timing in distributed systems."
    ],
    content: [
      "Early in my career, well-meaning advisors suggested picking a single lane and staying in it. Looking back, embracing a non-linear path—from teaching students as a teenager, to launching early entrepreneurial ventures, to hands-on distributed engineering and enterprise architecture—was the most valuable choice I ever made.",
      "Teaching taught me how people learn and absorb information. Entrepreneurship taught me absolute accountability. Engineering grounded me in systems theory and latency physics. Playing the Tabla taught me that harmony requires strict adherence to rhythm and tempo.",
      "When leading complex technology organizations, you are rarely solving a purely technical riddle. You are synthesizing economics, human psychology, architectural tradeoffs, and future possibilities."
    ]
  }
];

export const TECH_PILLARS = [
  {
    title: "Architectural Resilience",
    badge: "Reliability & Scale",
    description: "Designing self-healing, gracefully degrading systems that withstand high concurrency, network partitions, and cascading failure modes.",
    points: ["Circuit breaking & bulkhead patterns", "Idempotency & transaction boundaries", "Observability-first tracing & metrics"]
  },
  {
    title: "Human-Centric AI Systems",
    badge: "Modern Horizon",
    description: "Integrating agentic reasoning with strict enterprise boundaries, verifiable output contracts, and transparent human-in-the-loop controls.",
    points: ["Agent orchestration & tool calling", "RAG with hybrid vector & graph retrieval", "Enterprise security, auditability & FinOps"]
  },
  {
    title: "Evolutionary Architecture",
    badge: "Agility & Velocity",
    description: "Avoiding big-bang rewrites in favor of incremental strangler migrations that deliver continuous business value without downtime.",
    points: ["Domain-driven design & bounded contexts", "Event streaming with Kafka & cloud events", "Modular micro-frontends and API mesh"]
  }
];
