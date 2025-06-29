"use client";
import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/fonts/geist-sans.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/fonts/geist-mono.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ];

    preloadLinks.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });

    // Prefetch important pages
    const prefetchLinks = [
      '/#services',
      '/#projects',
      '/#contact',
    ];

    prefetchLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    });

    // Intersection Observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    }, observerOptions);

    // Observe all lazy images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));

    // Cleanup
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

// Image optimization component
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  placeholder = 'blur',
  blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  ...props 
}) => {
  return (
    <img
      src={priority ? src : placeholder}
      data-src={!priority ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${!priority ? 'lazy' : ''}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
    />
  );
};

// Font optimization
export const FontOptimizer = () => {
  useEffect(() => {
    // Font display swap for better performance
    const fontDisplaySwap = `
      @font-face {
        font-family: 'Geist';
        font-display: swap;
      }
      @font-face {
        font-family: 'Geist Mono';
        font-display: swap;
      }
    `;

    const style = document.createElement('style');
    style.textContent = fontDisplaySwap;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Resource hints
export const ResourceHints = () => {
  useEffect(() => {
    // DNS prefetch for external domains
    const dnsPrefetch = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com',
      '//www.googletagmanager.com',
    ];

    dnsPrefetch.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const preconnect = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnect.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

// Critical CSS inliner
export const CriticalCSS = ({ css }) => {
  useEffect(() => {
    if (css) {
      const style = document.createElement('style');
      style.textContent = css;
      style.setAttribute('data-critical', 'true');
      document.head.appendChild(style);

      return () => {
        const existingStyle = document.querySelector('style[data-critical="true"]');
        if (existingStyle) {
          document.head.removeChild(existingStyle);
        }
      };
    }
  }, [css]);

  return null;
};

// Service Worker registration for PWA
export const ServiceWorkerRegistration = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return null;
};

// export default PerformanceOptimizer; 