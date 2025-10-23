import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'המגשרת - עו״ד זהבית דבי | גישור גירושין ודיני משפחה',
    short_name: 'המגשרת',
    description: 'המגשרת עו״ד זהבית דבי עם 85% הצלחה. המגשרת המובילה בבאר שבע והדרום. גישור מקצועי לגירושין, משמורת ילדים ודיני משפחה.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8B7355',
    dir: 'rtl',
    lang: 'he',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    categories: ['law', 'mediation', 'family law', 'legal services'],
    scope: '/',
  }
}
