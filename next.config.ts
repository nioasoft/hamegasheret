import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel optimizations
  // Note: optimizeCss graduated to stable in Next 16 (CSS chunking is on by default)
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // SEO optimizations
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'hamegasheret.co.il' },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Redirects for SEO
  // Note: www → non-www redirect is handled by Vercel/Cloudflare
  async redirects() {
    return [];
  },

  // Compression
  compress: true,

  // Generate build ID
  generateBuildId: async () => {
    return 'build-cache-' + Date.now();
  },
};

export default nextConfig;
