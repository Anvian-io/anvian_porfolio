import Image from "next/image";
import Components from "@/components/index";
import { Main, Section, H1, H2, H3, P, Article } from "@/components/SEO/SemanticWrapper";
import { 
  OrganizationSchema, 
  WebSiteSchema, 
  ServiceSchema, 
  FAQSchema,
  LocalBusinessSchema 
} from "@/components/SEO/StructuredData";
import { 
  PerformanceOptimizer, 
  FontOptimizer, 
  ResourceHints 
} from "@/components/SEO/PerformanceOptimizer";

export default function Home() {
  return (
    <>
      {/* Performance Optimizations */}
      <PerformanceOptimizer />
      <FontOptimizer />
      <ResourceHints />
      
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <ServiceSchema />
      <FAQSchema />
      <LocalBusinessSchema />
      
      <Main className="overflow-x-hidden">
        <Components.Navbar />
        
        <Section id="home" aria-label="Hero Section">
          <Components.Hero_section />
        </Section>
        
        <Section id="services" aria-label="Our Services">
          <Components.ServiceSection />
        </Section>
        
        <Section id="projects" aria-label="Past Projects">
          <Components.PastProjects />
        </Section>
        
        <Section id="feedback" aria-label="Client Feedback">
          <Components.FeedbackSection />
        </Section>
        
        <Section id="contact" aria-label="Contact Us">
          <Components.ContactUs />
        </Section>
        
        <Components.Footer />
      </Main>
    </>
  );
}
