import { useEffect, useMemo } from 'react';
import { ServiceItem, SiteContentData } from '../data/siteContent';

interface SeoHeadProps {
  content: SiteContentData;
  activeSection: string;
  selectedService: ServiceItem | null;
}

export function buildSchemaGraph(
  content: SiteContentData,
  canonicalUrl: string,
  selectedService: ServiceItem | null
) {
  const baseUrl = content.brand.domain;

  const organizationNode = {
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: content.brand.name,
    slogan: content.brand.tagline,
    description: content.hero.supportingCopy,
    url: baseUrl,
    knowsAbout: [
      'Website Design and Development',
      'Website Redesigns',
      'Search Engine Optimization (SEO)',
      'Technical SEO',
      'On-Page SEO',
      'Search-Focused Content Strategy',
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'SEO Audits',
    ],
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.linkedin.com',
      'https://www.instagram.com',
      'https://x.com',
    ],
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: content.brand.name,
    description: content.brand.centralIdea,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'en',
  };

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${baseUrl}/`,
    },
  ];

  if (selectedService) {
    breadcrumbItems.push(
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${baseUrl}/#services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: selectedService.title,
        item: `${baseUrl}/#service-${selectedService.slug}`,
      }
    );
  } else if (activeSection && activeSection !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: activeSection.charAt(0).toUpperCase() + activeSection.slice(1),
      item: `${baseUrl}/#${activeSection}`,
    });
  }

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  const webpageNode = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: selectedService
      ? `${selectedService.title} — ${content.brand.name}`
      : `${content.brand.name} — Website Design, Technical SEO, AEO & GEO Studio`,
    description: selectedService
      ? `${selectedService.shortDescription} ${selectedService.searchImpact}`
      : content.hero.supportingCopy,
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#organization`,
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`,
    },
    inLanguage: 'en',
  };

  const serviceNodes = content.services.map((service) => ({
    '@type': 'Service',
    '@id': `${baseUrl}/#service-${service.slug}`,
    name: service.title,
    serviceType: service.title,
    description: `${service.shortDescription} ${service.searchImpact}`,
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Deliverables`,
      itemListElement: service.whatWeDeliver.map((deliverable, idx) => ({
        '@type': 'Offer',
        position: idx + 1,
        itemOffered: {
          '@type': 'Service',
          name: deliverable,
        },
      })),
    },
  }));

  const faqNode = {
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faqpage`,
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode,
      websiteNode,
      webpageNode,
      breadcrumbNode,
      ...serviceNodes,
      faqNode,
    ],
  };
}

export function SeoHead({ content, activeSection, selectedService }: SeoHeadProps) {
  const canonicalUrl = useMemo(() => {
    const origin =
      typeof window !== 'undefined' && window.location?.origin
        ? window.location.origin
        : content.brand.domain;
    const pathname =
      typeof window !== 'undefined' && window.location?.pathname
        ? window.location.pathname
        : '/';
    return `${origin}${pathname}`;
  }, [content.brand.domain]);

  const pageTitle = selectedService
    ? `${selectedService.title} | ${content.brand.name} — Websites & SEO`
    : `${content.brand.name} — Website Design, Technical SEO, AEO & GEO Studio`;

  const pageDescription = selectedService
    ? `${selectedService.shortDescription} ${selectedService.searchImpact}`
    : content.hero.supportingCopy;

  const schemaGraph = useMemo(
    () => buildSchemaGraph(content, canonicalUrl, selectedService),
    [content, canonicalUrl, selectedService]
  );

  useEffect(() => {
    document.title = pageTitle;

    const updateMeta = (selector: string, attribute: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attribute, value);
      }
    };

    updateMeta('meta[name="description"]', 'content', pageDescription);
    updateMeta('meta[property="og:title"]', 'content', pageTitle);
    updateMeta('meta[property="og:description"]', 'content', pageDescription);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
    updateMeta('meta[name="twitter:title"]', 'content', pageTitle);
    updateMeta('meta[name="twitter:description"]', 'content', pageDescription);
    updateMeta('link[rel="canonical"]', 'href', canonicalUrl);

    let scriptEl = document.getElementById('site-and-search-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'site-and-search-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaGraph, null, 2);
  }, [pageTitle, pageDescription, canonicalUrl, schemaGraph]);

  return null;
}
