import projectImg01 from '../assets/images/placeholder_project_architecture_01_1790773330941.jpg';
import projectImg02 from '../assets/images/placeholder_project_search_02_1790773351992.jpg';
import projectImg03 from '../assets/images/placeholder_project_editorial_03_1790773365619.jpg';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  formOptionValue:
    | 'New website'
    | 'Website redesign'
    | 'SEO optimization'
    | 'SEO audit'
    | 'AEO/GEO'
    | 'Content'
    | 'Something else';
  columnSpan?: 'wide' | 'normal';
  whoItIsFor: string;
  whatWeDeliver: string[];
  searchImpact: string;
  commonMistakeAvoided: string;
}

export interface PlaceholderProject {
  id: string;
  slotLabel: string;
  clientName: string;
  industry: string;
  servicesProvided: string[];
  shortDescription: string;
  seoImprovementsSummary: string;
  imageUrl: string;
  imageAlt: string;
  architectureHighlights: string[];
  deliverablesCompleted: string[];
  searchOutcomeNote: string;
}

export interface ResultMetricCategory {
  id: string;
  category: string;
  qualitativeStatement: string;
  howWeMeasure: string;
  caseStudySlotNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing & Timeline' | 'Website & SEO' | 'AEO & GEO' | 'Working Together';
}

export interface SiteContentData {
  brand: {
    name: string;
    tagline: string;
    centralIdea: string;
    domain: string;
  };
  hero: {
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    wittyLine: string;
  };
  problem: {
    headline: string;
    introCopy: string;
    wittySubline: string;
    struggles: {
      title: string;
      explanation: string;
      technicalSymptom: string;
    }[];
    bridgePillars: string[];
  };
  services: ServiceItem[];
  whyUs: {
    headline: string;
    subcopy: string;
    sitePillars: { label: string; detail: string }[];
    searchPillars: { label: string; detail: string }[];
    benefits: { title: string; description: string }[];
  };
  process: {
    headline: string;
    subcopy: string;
    steps: {
      number: string;
      title: string;
      description: string;
      deliverables: string[];
    }[];
  };
  work: {
    headline: string;
    subcopy: string;
    placeholderNotice: string;
    projects: PlaceholderProject[];
  };
  results: {
    headline: string;
    subcopy: string;
    transparencyNote: string;
    categories: ResultMetricCategory[];
  };
  about: {
    headline: string;
    leadParagraph: string;
    bodyParagraph: string;
    wittyNote: string;
    disciplines: string[];
  };
  faq: FaqItem[];
  finalCta: {
    headline: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export const defaultSiteContent: SiteContentData = {
  brand: {
    name: 'Site & Search',
    tagline: 'We build websites. We make them discoverable.',
    centralIdea:
      'A beautiful website is only half the job. The other half is making sure people can find it.',
    domain: 'https://siteandsearch.studio',
  },
  hero: {
    headline: 'Your website deserves to be found.',
    supportingCopy:
      "We build high-performing websites and optimize them for search—so your business doesn't just look good online. It gets discovered.",
    primaryCta: 'Build My Website',
    secondaryCta: 'Improve My SEO',
    wittyLine: 'Pretty is good. Findable is better.',
  },
  problem: {
    headline: 'A beautiful website nobody finds is just a very expensive secret.',
    introCopy:
      'Most companies hire a design agency to make their website look impressive, then hire an SEO agency months later to figure out why nobody is visiting. By then, the structure is locked in, pages are slow, and search intent was never part of the blueprint.',
    wittySubline: "Don't let your website become internet wallpaper.",
    struggles: [
      {
        title: 'Poor search visibility',
        explanation:
          'Pages launch with zero keyword mapping or topical authority, remaining buried below competitors who structured their sites for search from day one.',
        technicalSymptom: 'Unindexed core pages & zero non-branded impressions',
      },
      {
        title: 'Weak website structure',
        explanation:
          'Flat or chaotic URL hierarchies confuse both human visitors and search crawlers about which services actually matter.',
        technicalSymptom: 'Orphaned service pages & broken heading hierarchy',
      },
      {
        title: 'Slow performance',
        explanation:
          'Bloated scripts, unoptimized media, and heavy layout shifts hurt Core Web Vitals and cause visitors to bounce before reading a word.',
        technicalSymptom: 'Poor LCP, CLS, and INP metrics on mobile devices',
      },
      {
        title: 'Poor search intent alignment',
        explanation:
          'Copy talks exclusively about internal company slogans rather than answering the specific problems buyers actually type into search bars.',
        technicalSymptom: 'High impressions with low click-through and engagement',
      },
      {
        title: 'Missing metadata',
        explanation:
          'Generic titles like "Home" or "Services", absent canonical tags, and missing Open Graph data leave search snippets looking unfinished.',
        technicalSymptom: 'Duplicate meta titles & truncated SERP previews',
      },
      {
        title: 'Weak internal linking',
        explanation:
          'Important commercial pages receive no contextual links from supporting articles or sibling pages, starving them of crawl priority.',
        technicalSymptom: 'Shallow crawl depth & isolated topic clusters',
      },
      {
        title: 'Poor content architecture',
        explanation:
          'Walls of vague marketing text lack clear definitions, scannable sections, and structured answers that modern readers expect.',
        technicalSymptom: 'Low dwell time & unclear topical relationships',
      },
      {
        title: 'Lack of AI-search readiness',
        explanation:
          'Without structured schema markup, explicit entity relationships, and concise answer blocks, answer engines struggle to parse and cite your business.',
        technicalSymptom: 'Missing Schema.org JSON-LD & ambiguous entity definitions',
      },
    ],
    bridgePillars: ['Website', 'Search', 'Content', 'Conversion'],
  },
  services: [
    {
      id: 'website-design',
      number: '01',
      title: 'Website Design',
      slug: 'website-design',
      shortDescription:
        'Modern, responsive websites built around your brand, audience and business goals.',
      formOptionValue: 'New website',
      columnSpan: 'wide',
      whoItIsFor:
        'Businesses launching a new digital presence or outgrowing a generic template that fails to communicate their value.',
      whatWeDeliver: [
        'Custom editorial UI/UX design tailored to your brand positioning',
        'Semantic HTML5 architecture with strict H1–H3 heading hierarchy',
        'Mobile-first responsive layouts engineered for fast Core Web Vitals',
        'Conversion-focused page flows with clear calls to action',
        'Built-in technical SEO foundations before launch day',
      ],
      searchImpact:
        'Every page launches with clean URL routing, structured metadata, fast load times, and crawlable architecture from day one.',
      commonMistakeAvoided:
        'Building a visually heavy website that requires an expensive technical SEO overhaul six months after launch.',
    },
    {
      id: 'seo-optimization',
      number: '02',
      title: 'SEO Optimization',
      slug: 'seo-optimization',
      shortDescription:
        'Technical and on-page optimization designed to make your website easier for search engines to understand and discover.',
      formOptionValue: 'SEO optimization',
      columnSpan: 'normal',
      whoItIsFor:
        'Companies with an existing website that struggles to rank for relevant commercial and informational queries.',
      whatWeDeliver: [
        'Indexation, crawl budget, XML sitemap, and robots.txt optimization',
        'On-page title, meta description, and heading structure refinement',
        'Internal linking architecture to distribute authority to key pages',
        'Schema.org structured data implementation (Organization, Service, FAQ)',
        'Core Web Vitals and page speed remediation',
      ],
      searchImpact:
        'Removes technical friction so search engines can crawl, interpret, and rank your core pages for high-intent queries.',
      commonMistakeAvoided:
        'Stuffing keywords into existing paragraphs without fixing underlying structural, canonical, or intent problems.',
    },
    {
      id: 'search-focused-content',
      number: '03',
      title: 'Search-Focused Content',
      slug: 'search-focused-content',
      shortDescription:
        'Content structured around search intent, useful information and real audience questions.',
      formOptionValue: 'Content',
      columnSpan: 'normal',
      whoItIsFor:
        'Teams tired of publishing generic blog posts that attract zero qualified buyers or fail to support commercial service pages.',
      whatWeDeliver: [
        'Search intent mapping across buyer stages and real customer questions',
        'Service page and landing page copywriting that balances clarity with SEO',
        'Topical cluster architecture connecting educational guides to commercial offers',
        'Clear definitions, structured headings, and concise summary blocks',
      ],
      searchImpact:
        'Builds topical depth and answers real search queries with substance rather than repetitive filler.',
      commonMistakeAvoided:
        'Publishing high-volume, low-value articles that dilute site quality and never convert visitors.',
    },
    {
      id: 'aeo-geo',
      number: '04',
      title: 'AEO & GEO',
      slug: 'aeo-and-geo',
      shortDescription:
        'Prepare your website and content for answer engines and generative search experiences.',
      formOptionValue: 'AEO/GEO',
      columnSpan: 'wide',
      whoItIsFor:
        'Forward-looking brands that want their services, definitions, and expertise clearly understood by both search engines and AI answer systems.',
      whatWeDeliver: [
        'Entity clarity audits so your brand, services, and audience are unambiguously defined',
        'Question-and-answer content structuring for direct answer extraction (AEO)',
        'Comprehensive Schema.org JSON-LD graphs linking Organization, Service, and FAQ entities',
        'Credibility, authorship, and factual structure improvements for generative engines (GEO)',
      ],
      searchImpact:
        'Makes your site significantly easier for answer engines and generative AI systems to parse, summarize accurately, and reference—without relying on gimmicks or false guarantees.',
      commonMistakeAvoided:
        'Believing anyone can "guarantee" placement in AI Overviews or ChatGPT, or ignoring core technical SEO while chasing AI buzzwords.',
    },
    {
      id: 'website-revamp',
      number: '05',
      title: 'Website Revamp',
      slug: 'website-revamp',
      shortDescription:
        'Transform an outdated website into a modern, fast and search-friendly digital presence.',
      formOptionValue: 'Website redesign',
      columnSpan: 'normal',
      whoItIsFor:
        'Established businesses whose current website feels dated, loads slowly, or risks losing hard-earned organic search equity during a redesign.',
      whatWeDeliver: [
        'Full pre-redesign SEO preservation audit and URL inventory',
        '301 redirect mapping to protect existing rankings and backlinks',
        'Modernized visual identity, typography, and mobile user experience',
        'Upgraded content hierarchy and improved conversion pathways',
      ],
      searchImpact:
        'Upgrades your design and conversion rates while safeguarding existing organic visibility and fixing legacy technical debt.',
      commonMistakeAvoided:
        'Launching a redesign that deletes high-ranking URLs or changes page paths without a redirect strategy.',
    },
    {
      id: 'seo-audit',
      number: '06',
      title: 'SEO Audit',
      slug: 'seo-audit',
      shortDescription:
        'Identify technical, content and search visibility issues and turn them into an actionable optimization roadmap.',
      formOptionValue: 'SEO audit',
      columnSpan: 'normal',
      whoItIsFor:
        'Founders and marketing leads who want an honest, prioritized diagnosis before committing to a rebuild or ongoing retainer.',
      whatWeDeliver: [
        'Complete technical crawl, indexability, and Core Web Vitals diagnostic',
        'Information architecture and internal linking evaluation',
        'Search intent, metadata, and content gap analysis',
        'Prioritized implementation roadmap ranked by impact and engineering effort',
      ],
      searchImpact:
        'Replaces guesswork and automated 100-page PDF dumps with a clear, human-written execution plan your team can act on immediately.',
      commonMistakeAvoided:
        'Paying for automated audit spreadsheets full of minor warnings with zero strategic prioritization.',
    },
  ],
  whyUs: {
    headline: "Because your website and your SEO shouldn't live in separate universes.",
    subcopy:
      'When design and search strategy happen in the same studio, every layout decision supports discoverability—and every search optimization respects the human reading the page.',
    sitePillars: [
      { label: 'Design', detail: 'Distinctive editorial visual identity that builds immediate trust' },
      { label: 'UX', detail: 'Intuitive navigation and frictionless journeys across every screen size' },
      { label: 'Performance', detail: 'Lean assets and fast Core Web Vitals engineered from the first line of code' },
      { label: 'Structure', detail: 'Semantic HTML hierarchy and clean component architecture' },
    ],
    searchPillars: [
      { label: 'SEO', detail: 'Technical crawlability, clean canonicals, and structured schema markup' },
      { label: 'Content', detail: 'Substantive copy organized around real questions and topical depth' },
      { label: 'Intent', detail: 'Pages aligned with how buyers actually search, evaluate, and decide' },
      { label: 'Discoverability', detail: 'Ready for traditional search results, answer engines, and generative discovery' },
    ],
    benefits: [
      {
        title: 'Website + SEO under one roof',
        description: 'No finger-pointing between a design agency and an external SEO vendor.',
      },
      {
        title: 'Search-intent-led structure',
        description: 'Sitemaps and navigation are shaped by how your audience searches, not internal org charts.',
      },
      {
        title: 'Mobile-first design',
        description: 'Engineered for responsive clarity, tap-friendly controls, and mobile indexing.',
      },
      {
        title: 'SEO-friendly architecture',
        description: 'Semantic markup, clean URLs, internal linking, and Schema.org JSON-LD baked in.',
      },
      {
        title: 'AEO/GEO-ready thinking',
        description: 'Clear entity definitions and structured Q&A blocks that answer engines can parse accurately.',
      },
      {
        title: 'Conversion-focused UX',
        description: 'Getting traffic is pointless if visitors do not understand what you do or how to take action.',
      },
      {
        title: 'Clear communication',
        description: 'Plain-English roadmaps and transparent rationale—zero jargon or mystery retainers.',
      },
    ],
  },
  process: {
    headline: 'From “We need a website” to “People can actually find us.”',
    subcopy:
      'A structured four-stage workflow that treats design, engineering, and search visibility as a single discipline.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understand the business, audience, competitors and goals.',
        deliverables: [
          'Business model, positioning, and audience intent workshop',
          'Competitor search landscape & content architecture review',
          'Sitemap blueprint and URL hierarchy planning',
        ],
      },
      {
        number: '02',
        title: 'Build',
        description: 'Design and develop a website around the brand and user experience.',
        deliverables: [
          'Editorial typography, visual system, and responsive interface design',
          'Clean, accessible frontend development with semantic HTML',
          'Conversion pathways, lead capture forms, and fast asset delivery',
        ],
      },
      {
        number: '03',
        title: 'Optimize',
        description: 'Improve technical SEO, content, structure and search intent.',
        deliverables: [
          'On-page metadata, canonical tags, Open Graph, and Schema.org markup',
          'Search-focused copy refinement and question-based AEO/GEO structuring',
          'Internal linking, XML sitemap, robots.txt, and Core Web Vitals verification',
        ],
      },
      {
        number: '04',
        title: 'Grow',
        description: 'Monitor, refine and continuously improve search visibility.',
        deliverables: [
          'Post-launch indexing verification and search console diagnostics',
          'Iterative content expansion around emerging audience queries',
          'Ongoing technical health, ranking, and conversion refinement',
        ],
      },
    ],
  },
  work: {
    headline: "Websites we've made less invisible.",
    subcopy:
      'A website shouldn’t just exist. It should do something. Below is our case study framework—structured to showcase design execution alongside real search architecture improvements.',
    placeholderNotice:
      'Placeholder Portfolio Slots — No fabricated clients or statistics. Use the "Customize Studio Content" button in the top bar to replace these slots with your live client screenshots and verified case studies.',
    projects: [
      {
        id: 'placeholder-project-01',
        slotLabel: 'Placeholder Case Study 01 · Replaceable Template',
        clientName: '[Client Name — B2B SaaS / Technology Platform]',
        industry: 'B2B Software & Technical Services',
        servicesProvided: ['Website Design', 'Technical SEO', 'Search-Focused Content'],
        shortDescription:
          'Placeholder project slot for a full website build and search architecture engagement. Designed to highlight how a clear product narrative pairs with intent-driven service and solution pages.',
        seoImprovementsSummary:
          'Restructured flat marketing pages into topic-aligned solution hubs, implemented Organization & SoftwareApplication schema, and resolved mobile layout shift issues.',
        imageUrl: projectImg01,
        imageAlt:
          'Minimalist editorial web interface wireframe mockup on warm stone surface representing Placeholder Project 01',
        architectureHighlights: [
          'Replaced generic single-page overview with dedicated, indexable solution pages',
          'Established clean H1–H3 hierarchy and descriptive metadata across all routes',
          'Added contextual internal linking between documentation, FAQs, and product pages',
        ],
        deliverablesCompleted: [
          'Custom responsive website design & development',
          'Technical SEO foundation & XML sitemap configuration',
          'Search-intent copy architecture',
        ],
        searchOutcomeNote:
          'Insert verified post-launch Search Console impressions, non-branded query growth, and conversion data here once client approval is finalized.',
      },
      {
        id: 'placeholder-project-02',
        slotLabel: 'Placeholder Case Study 02 · Replaceable Template',
        clientName: '[Client Name — Professional Consultancy / Advisory]',
        industry: 'Specialized B2B Consultancy',
        servicesProvided: ['Website Revamp', 'SEO Optimization', 'AEO & GEO'],
        shortDescription:
          'Placeholder project slot for a legacy website revamp and AEO/GEO readiness initiative. Demonstrates how complex advisory expertise can be translated into clear, discoverable web architecture.',
        seoImprovementsSummary:
          'Preserved existing organic equity with a 301 redirect map while introducing structured Q&A blocks, explicit entity definitions, and Service + FAQPage JSON-LD schema.',
        imageUrl: projectImg02,
        imageAlt:
          'Geometric visualization of search engine architecture and structured web nodes representing Placeholder Project 02',
        architectureHighlights: [
          'Audited and migrated legacy URLs with zero unmapped 404 errors',
          'Structured core practice areas around real buyer questions for answer engine clarity',
          'Reduced JavaScript bundle overhead to improve mobile page load performance',
        ],
        deliverablesCompleted: [
          'SEO-safe website redesign & migration',
          'On-page SEO & internal link restructuring',
          'AEO/GEO entity and FAQ schema implementation',
        ],
        searchOutcomeNote:
          'Insert verified ranking stability, organic lead quality, and search visibility observations from your client engagement here.',
      },
      {
        id: 'placeholder-project-03',
        slotLabel: 'Placeholder Case Study 03 · Replaceable Template',
        clientName: '[Client Name — Modern Consumer or Architecture Studio]',
        industry: 'Design, Architecture & High-Consideration Commerce',
        servicesProvided: ['SEO Audit', 'Website Design', 'Search-Focused Content'],
        shortDescription:
          'Placeholder project slot illustrating how visual-heavy brands can maintain an editorial aesthetic without sacrificing crawlability, image optimization, or search visibility.',
        seoImprovementsSummary:
          'Balanced high-impact visual presentation with descriptive alt attributes, fast next-gen image delivery, semantic category architecture, and clean breadcrumb navigation.',
        imageUrl: projectImg03,
        imageAlt:
          'Isometric architectural layout of a modern responsive website grid system representing Placeholder Project 03',
        architectureHighlights: [
          'Eliminated text-baked-into-images in favor of accessible, crawlable editorial typography',
          'Implemented lazy loading and explicit aspect ratios to prevent Cumulative Layout Shift (CLS)',
          'Created structured category and location pages aligned with high-intent search queries',
        ],
        deliverablesCompleted: [
          'Comprehensive technical & content SEO audit',
          'Responsive editorial web system',
          'Structured BreadcrumbList & Organization schema',
        ],
        searchOutcomeNote:
          'Insert verified Core Web Vitals improvements and organic discovery metrics from your completed project here.',
      },
    ],
  },
  results: {
    headline: 'Good work should have something to show for it.',
    subcopy:
      'We do not invent vanity numbers or publish fictional industry averages. Instead, here are the six concrete dimensions we measure and report on across every client engagement.',
    transparencyNote:
      'Qualitative Measurement Framework — Ready to populate with verified client case study data as engagements conclude.',
    categories: [
      {
        id: 'organic-visibility',
        category: 'Organic visibility',
        qualitativeStatement:
          'Expanding the footprint of relevant, non-branded queries for which your core service and solution pages appear in search results.',
        howWeMeasure: 'Tracked via Google Search Console query breadth and indexed topic coverage.',
        caseStudySlotNote: 'Ready for verified client visibility benchmark',
      },
      {
        id: 'search-impressions',
        category: 'Search impressions',
        qualitativeStatement:
          'Increasing how frequently qualified buyers encounter your brand across traditional search snippets and rich result features.',
        howWeMeasure: 'Monitored through Search Console impression trends across priority commercial pages.',
        caseStudySlotNote: 'Ready for verified pre/post impression comparison',
      },
      {
        id: 'ranking-improvements',
        category: 'Ranking improvements',
        qualitativeStatement:
          'Moving high-intent service pages from buried positions onto the first page where real evaluation happens.',
        howWeMeasure: 'Measured by tracking target query clusters aligned with actual business offerings.',
        caseStudySlotNote: 'Ready for verified keyword position progression',
      },
      {
        id: 'organic-traffic',
        category: 'Organic traffic',
        qualitativeStatement:
          'Attracting visitors who are actively searching for what you offer—rather than chasing irrelevant, high-bounce curiosity clicks.',
        howWeMeasure: 'Evaluated through engaged organic sessions on commercial and educational routes.',
        caseStudySlotNote: 'Ready for verified organic session growth data',
      },
      {
        id: 'conversions',
        category: 'Conversions',
        qualitativeStatement:
          'Turning search visitors into qualified inquiries, consultations, and pipeline through clear positioning and frictionless UX.',
        howWeMeasure: 'Tracked via completed lead forms, consultation bookings, and high-intent actions.',
        caseStudySlotNote: 'Ready for verified inquiry & conversion lift',
      },
      {
        id: 'page-performance',
        category: 'Page performance',
        qualitativeStatement:
          'Delivering fast, stable, accessible pages that satisfy both impatient human visitors and Core Web Vitals thresholds.',
        howWeMeasure: 'Audited via Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and CLS.',
        caseStudySlotNote: 'Ready for verified Core Web Vitals before/after',
      },
    ],
  },
  about: {
    headline:
      "We don't just build websites. We think about what happens after someone lands on them.",
    leadParagraph:
      'Site & Search was built on a simple observation: too many businesses pay twice for their website—once to make it look presentable, and a second time to figure out why nobody can find it in search.',
    bodyParagraph:
      'We bring design, frontend engineering, technical SEO, search-focused content, and AEO/GEO strategy into a single, cohesive studio. That means your visual identity, page speed, site structure, and search visibility are designed to work together from day one.',
    wittyNote: "Build it. Optimize it. Get found. A website shouldn't just exist. It should do something.",
    disciplines: ['Design', 'Development', 'SEO', 'Content', 'Search Strategy'],
  },
  faq: [
    {
      id: 'faq-1',
      category: 'Pricing & Timeline',
      question: 'How much does a website cost?',
      answer:
        'Project investment depends on scope—such as page count, custom design requirements, content creation, and the depth of technical SEO or migration work required. After a short discovery conversation, we provide a transparent, fixed-scope proposal so you know exactly what is included before we begin.',
    },
    {
      id: 'faq-2',
      category: 'Pricing & Timeline',
      question: 'How long does it take to build a website?',
      answer:
        'A typical search-optimized website takes between 4 and 8 weeks from discovery to launch. Focused landing pages or standalone SEO audits can be completed faster, while complex multi-page revamps with extensive content and redirect mapping may take slightly longer.',
    },
    {
      id: 'faq-3',
      category: 'Website & SEO',
      question: 'Do you provide SEO with website development?',
      answer:
        'Yes—that is the entire reason Site & Search exists. Every website we build includes foundational technical SEO, clean URL architecture, semantic heading hierarchy, fast performance, metadata, internal linking, and Schema.org structured data from the start.',
    },
    {
      id: 'faq-4',
      category: 'Website & SEO',
      question: 'Can you optimize my existing website?',
      answer:
        'Absolutely. If your current website has a solid visual foundation but struggles with search visibility, we can perform a comprehensive SEO audit and implement technical fixes, on-page optimization, internal linking improvements, and search-focused content without rebuilding from scratch.',
    },
    {
      id: 'faq-5',
      category: 'AEO & GEO',
      question: 'What is AEO?',
      answer:
        'AEO stands for Answer Engine Optimization. It is the practice of structuring your website content—using clear definitions, direct question-and-answer blocks, logical heading hierarchies, and Schema.org markup—so answer engines and featured snippets can easily extract and present accurate answers to user queries.',
    },
    {
      id: 'faq-6',
      category: 'AEO & GEO',
      question: 'What is GEO?',
      answer:
        'GEO stands for Generative Engine Optimization. It focuses on making your brand, services, and topical expertise clear, credible, and machine-readable for AI-driven and generative search systems. While no ethical studio can guarantee placement in ChatGPT or Google AI Overviews, strong entity clarity, structured data, and authoritative content significantly improve how generative systems understand and reference your business.',
    },
    {
      id: 'faq-7',
      category: 'Website & SEO',
      question: 'Can you redesign my website without damaging existing SEO?',
      answer:
        'Yes. Website redesigns often tank organic traffic because agencies delete ranking pages or change URLs without redirects. We audit your existing search equity first, preserve high-performing content structure, map 301 redirects carefully, and verify indexation before and after launch.',
    },
    {
      id: 'faq-8',
      category: 'Working Together',
      question: 'Do you work with businesses outside India?',
      answer:
        'Yes. We work with businesses internationally across North America, Europe, Asia-Pacific, the Middle East, and India. Our workflow, communication, and search strategies are built for both global B2B markets and region-specific search intent.',
    },
    {
      id: 'faq-9',
      category: 'Working Together',
      question: 'Do you provide ongoing SEO?',
      answer:
        'Yes. Search visibility compounds over time. After launching a website or completing an initial optimization sprint, we offer ongoing SEO and content partnerships to monitor rankings, publish search-focused content, refine pages, and adapt to evolving search behavior.',
    },
    {
      id: 'faq-10',
      category: 'Working Together',
      question: 'Can you perform an SEO audit before rebuilding my website?',
      answer:
        'Yes, and we frequently recommend starting there. An initial SEO audit reveals whether you truly need a full rebuild or targeted structural and content fixes—and if a rebuild is warranted, the audit becomes the blueprint for your new website.',
    },
  ],
  finalCta: {
    headline: 'Ready to get your website found?',
    copy: "Let's build something worth clicking—and easy to discover.",
    primaryCta: 'Start a Project',
    secondaryCta: 'Get an SEO Audit',
  },
};
