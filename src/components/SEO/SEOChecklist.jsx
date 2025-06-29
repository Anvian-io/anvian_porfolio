"use client";
import { useEffect, useState } from 'react';

const SEOChecklist = () => {
  const [seoStatus, setSeoStatus] = useState({
    title: false,
    description: false,
    keywords: false,
    canonical: false,
    openGraph: false,
    twitterCard: false,
    structuredData: false,
    sitemap: false,
    robots: false,
    images: false,
    links: false,
    headings: false,
    performance: false,
    mobile: false,
    accessibility: false,
  });

  useEffect(() => {
    // Check SEO elements
    const checkSEO = () => {
      const newStatus = { ...seoStatus };

      // Check title
      const title = document.querySelector('title');
      newStatus.title = title && title.textContent.length > 0 && title.textContent.length <= 60;

      // Check meta description
      const description = document.querySelector('meta[name="description"]');
      newStatus.description = description && 
        description.getAttribute('content') && 
        description.getAttribute('content').length > 0 && 
        description.getAttribute('content').length <= 160;

      // Check keywords
      const keywords = document.querySelector('meta[name="keywords"]');
      newStatus.keywords = keywords && keywords.getAttribute('content');

      // Check canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      newStatus.canonical = canonical && canonical.getAttribute('href');

      // Check Open Graph
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      newStatus.openGraph = ogTitle && ogDescription && ogImage;

      // Check Twitter Card
      const twitterCard = document.querySelector('meta[name="twitter:card"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      newStatus.twitterCard = twitterCard && twitterTitle;

      // Check structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
      newStatus.structuredData = structuredData.length > 0;

      // Check headings hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const h1Count = document.querySelectorAll('h1').length;
      newStatus.headings = h1Count === 1 && headings.length > 0;

      // Check images
      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(img => img.alt && img.alt.trim() !== '');
      newStatus.images = images.length === 0 || imagesWithAlt.length === images.length;

      // Check links
      const links = document.querySelectorAll('a');
      const linksWithHref = Array.from(links).filter(link => link.href && link.href.trim() !== '');
      newStatus.links = links.length === 0 || linksWithHref.length === links.length;

      // Check mobile responsiveness
      const viewport = document.querySelector('meta[name="viewport"]');
      newStatus.mobile = viewport && viewport.getAttribute('content').includes('width=device-width');

      // Check performance (basic)
      const performance = window.performance;
      if (performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        newStatus.performance = loadTime < 3000; // Less than 3 seconds
      }

      setSeoStatus(newStatus);
    };

    // Run check after page load
    if (document.readyState === 'complete') {
      checkSEO();
    } else {
      window.addEventListener('load', checkSEO);
    }

    return () => {
      window.removeEventListener('load', checkSEO);
    };
  }, []);

  const getStatusColor = (status) => {
    return status ? 'text-green-500' : 'text-red-500';
  };

  const getStatusIcon = (status) => {
    return status ? '✓' : '✗';
  };

  const getScore = () => {
    const total = Object.keys(seoStatus).length;
    const passed = Object.values(seoStatus).filter(Boolean).length;
    return Math.round((passed / total) * 100);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">SEO Checklist</h3>
        <div className={`text-2xl font-bold ${getScore() >= 80 ? 'text-green-500' : getScore() >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
          {getScore()}%
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        {Object.entries(seoStatus).map(([key, status]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className={`font-bold ${getStatusColor(status)}`}>
              {getStatusIcon(status)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t">
        <div className="text-xs text-gray-600 dark:text-gray-400">
          <p>• Title: 50-60 characters</p>
          <p>• Description: 150-160 characters</p>
          <p>• One H1 per page</p>
          <p>• All images have alt text</p>
          <p>• Load time &lt; 3 seconds</p>
        </div>
      </div>
    </div>
  );
};

// SEO Audit component for development
export const SEOAudit = () => {
  const [auditResults, setAuditResults] = useState(null);

  const runAudit = () => {
    const results = {
      pageTitle: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Missing',
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || 'Missing',
      h1Count: document.querySelectorAll('h1').length,
      h2Count: document.querySelectorAll('h2').length,
      h3Count: document.querySelectorAll('h3').length,
      imageCount: document.querySelectorAll('img').length,
      imagesWithoutAlt: Array.from(document.querySelectorAll('img')).filter(img => !img.alt).length,
      linkCount: document.querySelectorAll('a').length,
      internalLinks: Array.from(document.querySelectorAll('a')).filter(link => link.href.includes(window.location.hostname)).length,
      externalLinks: Array.from(document.querySelectorAll('a')).filter(link => !link.href.includes(window.location.hostname)).length,
      structuredDataCount: document.querySelectorAll('script[type="application/ld+json"]').length,
      loadTime: window.performance ? window.performance.timing.loadEventEnd - window.performance.timing.navigationStart : 'N/A',
    };

    setAuditResults(results);
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border max-w-sm z-50">
      <h3 className="text-lg font-semibold mb-3">SEO Audit</h3>
      
      <button 
        onClick={runAudit}
        className="bg-blue-500 text-white px-3 py-1 rounded text-sm mb-3"
      >
        Run Audit
      </button>

      {auditResults && (
        <div className="space-y-2 text-xs">
          <div><strong>Page Title:</strong> {auditResults.pageTitle}</div>
          <div><strong>Meta Description:</strong> {auditResults.metaDescription}</div>
          <div><strong>Canonical URL:</strong> {auditResults.canonicalUrl}</div>
          <div><strong>H1 Count:</strong> {auditResults.h1Count}</div>
          <div><strong>H2 Count:</strong> {auditResults.h2Count}</div>
          <div><strong>H3 Count:</strong> {auditResults.h3Count}</div>
          <div><strong>Images:</strong> {auditResults.imageCount} (Missing alt: {auditResults.imagesWithoutAlt})</div>
          <div><strong>Links:</strong> {auditResults.linkCount} (Internal: {auditResults.internalLinks}, External: {auditResults.externalLinks})</div>
          <div><strong>Structured Data:</strong> {auditResults.structuredDataCount}</div>
          <div><strong>Load Time:</strong> {auditResults.loadTime}ms</div>
        </div>
      )}
    </div>
  );
};

export default SEOChecklist; 