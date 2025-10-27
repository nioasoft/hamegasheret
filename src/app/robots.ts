import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/_next/static/',
        '/_next/image/',
        '/api/',
        '/*.woff2$',
        '/*.woff$',
        '/*.ttf$',
        '/favicon*',
        '/apple-icon*',
        '/web-app-manifest*',
      ],
    },
    sitemap: 'https://hamegasheret.co.il/sitemap.xml',
  }
}
