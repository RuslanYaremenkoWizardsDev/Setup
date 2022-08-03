/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  compiler: {
    styledComponents: {
      displayName: !isProd,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = withBundleAnalyzer(nextConfig);
