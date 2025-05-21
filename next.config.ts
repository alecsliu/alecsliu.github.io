import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Export static HTML/CSS/JS
  images: {
    unoptimized: true, // Required for static export
    domains: ['via.placeholder.com'],
  },
  // The following are optional but might be needed depending on your setup
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;