import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappIcon from "@/components/WhatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://anvianco.vercel.app"),
  title: {
    template: "%s | Anvian - Web Development Agency",
    default: "Anvian - Premium Web Development Agency | Custom Websites & SEO",
  },
  description: "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages. We build high-performance websites that drive business growth.",
  keywords: [
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
    "digital agency",
    "responsive websites",
    "WordPress development",
    "React development",
    "Next.js development",
    "website maintenance",
    "web hosting",
    "domain services",
    "digital marketing",
    "business websites"
  ],
  authors: [{ name: "Anvian Team" }],
  creator: "Anvian",
  publisher: "Anvian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anvianco.vercel.app",
    siteName: "Anvian",
    title: "Anvian - Premium Web Development Agency | Custom Websites & SEO",
    description: "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anvian - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvian - Premium Web Development Agency | Custom Websites & SEO",
    description: "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
    images: ["/og-image.jpg"],
    creator: "@anvianco",
    site: "@anvianco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://anvianco.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "email": "anvianco@gmail.com"
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
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Anvian",
              "url": "https://anvianco.vercel.app",
              "description": "Anvian is a leading IT company specializing in custom web development, e-commerce websites, UI/UX design, CMS development, SEO optimization, and landing pages.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://anvianco.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  }
                ]
              }
            })
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Anvian" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappIcon />
      </body>
    </html>
  );
}
