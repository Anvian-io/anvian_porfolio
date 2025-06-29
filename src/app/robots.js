export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://anvianco.vercel.app/sitemap.xml',
    host: 'https://anvianco.vercel.app',
  };
} 