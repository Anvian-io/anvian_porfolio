export default function manifest() {
  return {
    name: 'Anvian - Premium Web Development Agency',
    short_name: 'Anvian',
    description: 'Anvian builds high-performance websites that drive business growth. Custom web development, SEO-friendly solutions, and 24/7 support.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    prefer_related_applications: false,
  };
} 