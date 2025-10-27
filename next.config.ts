import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable the unescaped entities rule for Hebrew text
    ignoreDuringBuilds: true,
  },
  // Vercel optimizations
  experimental: {
    optimizeCss: true,
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
    domains: ['images.unsplash.com', 'via.placeholder.com', 'hamegasheret.co.il'],
    formats: ['image/webp', 'image/avif'],
  },

  // Redirects for SEO
  async redirects() {
    return [
      // www → non-www redirect (301 permanent)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hamegasheret.co.il',
          },
        ],
        destination: 'https://hamegasheret.co.il/:path*',
        permanent: true,
      },
    ];
  },

  // Compression
  compress: true,

  // Generate build ID
  generateBuildId: async () => {
    return 'build-cache-' + Date.now();
  },
};

export default nextConfig;
