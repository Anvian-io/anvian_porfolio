"use client";
import Script from 'next/script';

const StructuredData = ({ data }) => {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
};

// Organization Schema
export const OrganizationSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anvian",
    "url": "https://anvianco.vercel.app",
    "logo": "https://anvianco.vercel.app/logo.png",
    "description": "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    "email": "anvianco@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "anvianco@gmail.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/anvian",
      "https://twitter.com/anvianco",
      "https://www.facebook.com/anvianco"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      },
      "geoRadius": "5000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Custom websites built with modern frameworks for optimal performance and scalability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Secure online stores with payment integration and inventory management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User-centered interfaces designed for seamless experiences and maximum engagement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Increase visibility and rankings with our data-driven SEO strategies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CMS Development",
            "description": "Content management systems for easy website updates and maintenance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Development",
            "description": "High-converting landing pages designed to maximize conversions."
          }
        }
      ]
    }
  };

  return <StructuredData data={data} />;
};

// WebSite Schema
export const WebSiteSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Anvian",
    "url": "https://anvianco.vercel.app",
    "description": "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://anvianco.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Anvian"
    }
  };

  return <StructuredData data={data} />;
};

// Service Schema
export const ServiceSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Anvian"
    },
    "description": "Custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Custom websites built with modern frameworks for optimal performance and scalability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Secure online stores with payment integration and inventory management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User-centered interfaces designed for seamless experiences and maximum engagement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Increase visibility and rankings with our data-driven SEO strategies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CMS Development",
            "description": "Content management systems for easy website updates and maintenance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Development",
            "description": "High-converting landing pages designed to maximize conversions."
          }
        }
      ]
    }
  };

  return <StructuredData data={data} />;
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items = [] }) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://anvianco.vercel.app"
    }
  ];

  const breadcrumbItems = [...defaultItems, ...items];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  return <StructuredData data={data} />;
};

// FAQ Schema
export const FAQSchema = ({ questions = [] }) => {
  const defaultQuestions = [
    {
      "@type": "Question",
      "name": "What services does Anvian offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anvian offers custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing page development services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline depends on the complexity of the project. Simple websites take 2-4 weeks, while complex e-commerce sites may take 6-12 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide website maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide ongoing maintenance, updates, and 24/7 technical support for all our clients."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern technologies including React, Next.js, Node.js, WordPress, and other cutting-edge frameworks for optimal performance."
      }
    }
  ];

  const allQuestions = [...defaultQuestions, ...questions];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  };

  return <StructuredData data={data} />;
};

// Local Business Schema
export const LocalBusinessSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Anvian",
    "description": "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    "url": "https://anvianco.vercel.app",
    "email": "anvianco@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": "Worldwide",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "20.5937",
        "longitude": "78.9629"
      },
      "geoRadius": "5000"
    }
  };

  return <StructuredData data={data} />;
};

export default StructuredData; 