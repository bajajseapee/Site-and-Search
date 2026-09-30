import React, { useState } from 'react';
import { ArrowRight, Check, Code2, Globe, Search, Sparkles } from 'lucide-react';

interface BridgeNode {
  id: string;
  index: string;
  websiteLayer: string;
  websiteElement: string;
  websiteSnippet: string;
  searchMechanism: string;
  serpHeadline: string;
  serpUrl: string;
  serpSnippet: string;
  serpRichMeta: string;
  aeoQuery: string;
  aeoCitationSummary: string;
  aeoEntities: string[];
}

const BRIDGE_NODES: BridgeNode[] = [
  {
    id: 'intent-hierarchy',
    index: '01',
    websiteLayer: 'Semantic Heading & Intent Copy',
    websiteElement: '<main> → <h1> + Intent-Aligned Service Lead',
    websiteSnippet:
      '<h1>B2B Supply Chain Software Built for Multi-Warehouse Teams</h1>\n<p>Real-time inventory routing, automated purchase orders, and ERP sync...</p>',
    searchMechanism: 'Topic Disambiguation & Query Matching',
    serpHeadline: 'Multi-Warehouse Supply Chain Software | YourBrand',
    serpUrl: 'https://yourbrand.com › solutions › multi-warehouse',
    serpSnippet:
      'Real-time inventory routing, automated purchase orders, and ERP synchronization built for multi-warehouse operations teams.',
    serpRichMeta: 'Page 1 Organic Match · High Commercial Intent · Clean Canonical',
    aeoQuery: 'What software helps manage inventory across multiple warehouses?',
    aeoCitationSummary:
      'Answer engines extract the explicit H1 definition and opening paragraph because the target audience ("multi-warehouse teams") and core capability ("inventory routing & ERP sync") are stated without vague slogans.',
    aeoEntities: ['Multi-Warehouse Inventory', 'ERP Synchronization', 'B2B Supply Chain'],
  },
  {
    id: 'schema-graph',
    index: '02',
    websiteLayer: 'Schema.org JSON-LD Entity Graph',
    websiteElement: '<script type="application/ld+json"> @graph',
    websiteSnippet:
      '{\n  "@type": "ProfessionalService",\n  "name": "Site & Search",\n  "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Technical SEO & Web Design" }\n}',
    searchMechanism: 'Machine-Readable Entity & Rich Snippet Graph',
    serpHeadline: 'Site & Search — Website Design, Technical SEO & AEO Studio',
    serpUrl: 'https://siteandsearch.studio › services › technical-seo',
    serpSnippet:
      'Technical and on-page optimization designed to make your website easier for search engines and answer systems to understand.',
    serpRichMeta: 'FAQ Rich Dropdowns Eligible · Organization & Service Entities Linked',
    aeoQuery: 'Which studios combine custom website development with technical SEO and AEO?',
    aeoCitationSummary:
      'Structured JSON-LD connects the Organization entity directly to its Service catalog and FAQPage answers, removing ambiguity for generative search crawlers.',
    aeoEntities: ['Organization Schema', 'Service OfferCatalog', 'FAQPage Markup'],
  },
  {
    id: 'internal-architecture',
    index: '03',
    websiteLayer: 'Internal Linking & Topic Architecture',
    websiteElement: 'BreadcrumbList + Contextual Pillar-to-Cluster Links',
    websiteSnippet:
      '<nav aria-label="Breadcrumb">Home / Services / Website Revamp</nav>\n<a href="/seo-audit">Start with a pre-migration SEO audit →</a>',
    searchMechanism: 'Crawl Priority & Topical Authority Distribution',
    serpHeadline: 'SEO-Safe Website Redesign & Migration | Site & Search',
    serpUrl: 'https://siteandsearch.studio › services › website-revamp',
    serpSnippet:
      'Transform an outdated website into a modern, fast, and search-friendly digital presence without losing existing organic rankings.',
    serpRichMeta: 'Sitelinks Structure · Shallow 2-Click Crawl Depth · 301 Equity Protected',
    aeoQuery: 'How do you redesign a website without losing SEO rankings?',
    aeoCitationSummary:
      'Cohesive internal links between the Website Revamp page, SEO Audit guide, and migration FAQ signal deep topical coverage rather than an isolated sales page.',
    aeoEntities: ['301 Redirect Mapping', 'URL Equity Preservation', 'Breadcrumb Hierarchy'],
  },
  {
    id: 'performance-vitals',
    index: '04',
    websiteLayer: 'Core Web Vitals & Accessible UX',
    websiteElement: 'Zero-CLS Layout + Semantic Controls + Fast LCP',
    websiteSnippet:
      '<img src="architecture.jpg" width="1200" height="900" loading="lazy" alt="Responsive grid architecture" />',
    searchMechanism: 'Page Experience Signals & Engagement Retention',
    serpHeadline: 'High-Performance Web Engineering & Technical SEO',
    serpUrl: 'https://siteandsearch.studio › process › build-and-optimize',
    serpSnippet:
      'Fast page loads, optimized assets, responsive layouts, and accessible components engineered for human visitors and search crawlers.',
    serpRichMeta: 'Core Web Vitals Passing · Mobile-First Indexed · Low Bounce Rate',
    aeoQuery: 'Why does page speed and semantic HTML matter for modern SEO?',
    aeoCitationSummary:
      'Clean DOM structure with minimal render-blocking JavaScript allows search and AI crawlers to parse full page content immediately without timeout errors.',
    aeoEntities: ['Largest Contentful Paint', 'Cumulative Layout Shift', 'Semantic DOM'],
  },
];

export const HeroBridgeVisualizer: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(BRIDGE_NODES[0].id);
  const [discoveryMode, setDiscoveryMode] = useState<'serp' | 'aeo'>('serp');

  const activeNode = BRIDGE_NODES.find((n) => n.id === activeId) || BRIDGE_NODES[0];

  return (
    <div
      className="bg-white border border-[#E2DDD5] rounded-xl overflow-hidden shadow-[0_12px_36px_-16px_rgba(17,17,16,0.07)]"
      aria-label="Interactive diagram showing how website architecture connects to search engine discovery"
    >
      {/* Top Studio Inspector Bar */}
      <div className="px-4 sm:px-6 py-3.5 bg-[#F3F1EC] border-b border-[#E2DDD5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1D4ED8]" aria-hidden="true" />
          <span className="font-mono text-xs text-[#111110] font-medium tracking-tight">
            Interactive Architecture → Discovery Bridge
          </span>
        </div>
        <div className="text-xs text-[#575550]">
          Select any website layer below to inspect how it drives search discovery
        </div>
      </div>

      {/* Main Split Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2DDD5]">
        {/* Left Column: Website Interface & Architecture Blueprint */}
        <div className="lg:col-span-6 p-5 sm:p-6 bg-[#FAF9F6] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#111110]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-tight text-[#111110]">
                  Part 01 · Your Website Architecture
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#575550]">
                What visitors &amp; crawlers see
              </span>
            </div>

            {/* Interactive Layer Selector Buttons */}
            <div className="space-y-2" role="tablist" aria-label="Website architecture layers">
              {BRIDGE_NODES.map((node) => {
                const isSelected = node.id === activeNode.id;
                return (
                  <button
                    key={node.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveId(node.id)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all duration-150 ${
                      isSelected
                        ? 'bg-white border-[#1D4ED8] shadow-xs'
                        : 'bg-transparent border-[#E2DDD5] hover:bg-white/70 hover:border-[#C8C2B8]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-xs font-medium tabular-nums ${
                            isSelected ? 'text-[#1D4ED8]' : 'text-[#78756E]'
                          }`}
                        >
                          {node.index}.
                        </span>
                        <span className="text-sm font-semibold text-[#111110] truncate">
                          {node.websiteLayer}
                        </span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                          isSelected ? 'text-[#1D4ED8] translate-x-0.5' : 'text-[#9C988F]'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-1 pl-6 font-mono text-[11px] text-[#575550] truncate">
                      {node.websiteElement}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Code / Markup Preview Box */}
          <div className="mt-5 pt-4 border-t border-[#E2DDD5]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#575550] mb-2">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#1D4ED8]" aria-hidden="true" />
                Clean Semantic Implementation
              </span>
              <span>Signal: {activeNode.searchMechanism}</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#141413] text-[#F7F6F2] font-mono text-[11px] leading-relaxed overflow-x-auto">
              <code>{activeNode.websiteSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Right Column: Search & Answer Engine Discovery Output */}
        <div className="lg:col-span-6 p-5 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-tight text-[#111110]">
                  Part 02 · How People Discover You
                </span>
              </div>

              {/* Segmented Control: Traditional Search vs AEO/GEO */}
              <div
                className="inline-flex p-0.5 rounded-lg bg-[#F3F1EC] border border-[#E2DDD5]"
                role="group"
                aria-label="Discovery view mode"
              >
                <button
                  type="button"
                  onClick={() => setDiscoveryMode('serp')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    discoveryMode === 'serp'
                      ? 'bg-white text-[#111110] shadow-2xs'
                      : 'text-[#575550] hover:text-[#111110]'
                  }`}
                >
                  Search Results (SEO)
                </button>
                <button
                  type="button"
                  onClick={() => setDiscoveryMode('aeo')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    discoveryMode === 'aeo'
                      ? 'bg-white text-[#111110] shadow-2xs'
                      : 'text-[#575550] hover:text-[#111110]'
                  }`}
                >
                  Answer Engines (AEO/GEO)
                </button>
              </div>
            </div>

            {discoveryMode === 'serp' ? (
              <div className="space-y-4">
                {/* Simulated Search Bar */}
                <div className="px-3.5 py-2.5 rounded-lg bg-[#F7F6F2] border border-[#E2DDD5] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Search className="w-3.5 h-3.5 text-[#575550] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs text-[#111110] truncate">
                      {activeNode.aeoQuery}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#1D4ED8] shrink-0">
                    Intent Matched
                  </span>
                </div>

                {/* Live SERP Result Preview Card */}
                <div className="p-4 rounded-lg border border-[#E2DDD5] bg-[#FAF9F6]">
                  <div className="font-mono text-[11px] text-[#575550] mb-1 truncate">
                    {activeNode.serpUrl}
                  </div>
                  <div className="text-base font-semibold text-[#1D4ED8] leading-snug mb-1.5">
                    {activeNode.serpHeadline}
                  </div>
                  <p className="text-xs text-[#3D3B37] leading-relaxed">
                    {activeNode.serpSnippet}
                  </p>

                  {/* Unboxed Metadata Line (Strict Zero-Pill Compliance) */}
                  <div className="mt-3 pt-3 border-t border-[#E2DDD5] text-[11px] font-mono text-[#575550]">
                    {activeNode.serpRichMeta}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Simulated Answer Engine Prompt */}
                <div className="px-3.5 py-2.5 rounded-lg bg-[#F7F6F2] border border-[#E2DDD5] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs text-[#111110] truncate">
                      {activeNode.aeoQuery}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#575550] shrink-0">
                    AEO / GEO Parse
                  </span>
                </div>

                {/* Answer Engine Synthesis Explanation */}
                <div className="p-4 rounded-lg border border-[#E2DDD5] bg-[#FAF9F6] space-y-3">
                  <div className="text-xs font-semibold text-[#111110]">
                    How Answer &amp; Generative Engines Interpret This Layer:
                  </div>
                  <p className="text-xs text-[#3D3B37] leading-relaxed">
                    {activeNode.aeoCitationSummary}
                  </p>
                  <div className="pt-2 border-t border-[#E2DDD5]">
                    <div className="text-[11px] font-mono text-[#575550] mb-1">
                      Extracted Entities &amp; Signals:
                    </div>
                    <div className="text-xs font-medium text-[#111110]">
                      {activeNode.aeoEntities.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Connection Takeaway */}
          <div className="mt-5 pt-4 border-t border-[#E2DDD5] flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-[#3D3B37] leading-relaxed">
              <strong className="font-semibold text-[#111110]">The Site &amp; Search Rule:</strong>{' '}
              Every visual element we design is wired to a crawlable, structured search signal underneath.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
