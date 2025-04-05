/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    unoptimized: true
  },
  transpilePackages: ['lucide-react'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },
  experimental: {
    optimizeCss: false,
    esmExternals: true
  },
  output: 'export',
  distDir: '.next',
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig; 