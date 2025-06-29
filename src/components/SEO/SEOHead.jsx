"use client";
import Head from 'next/head';

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  image = "/og-image.jpg",
  url = "https://anvianco.vercel.app",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Anvian Team",
  section = "Web Development",
  tags = []
}) => {
  const fullTitle = title ? `${title} | Anvian - Web Development Agency` : "Anvian - Premium Web Development Agency | Custom Websites & SEO";
  const fullDescription = description || "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.";
  
  const defaultKeywords = [
    "web development",
    "website agency", 
    "custom websites",
    "e-commerce websites",
    "UI/UX design",
    "CMS development",
    "SEO optimization",
    "landing pages",
    "IT company",
    "web design",
    "digital agency"
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Anvian" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@anvianco" />
      <meta name="twitter:site" content="@anvianco" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="India" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:email" content="anvianco@gmail.com" />
      
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://anvianco.vercel.app"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": title || "Services",
                "item": url
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default SEOHead; 