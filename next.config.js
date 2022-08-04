/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const pwa = require('./configs/pwa');
const { i18n } = require('./next-i18next.config');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  pwa,
  i18n,
  compiler: {
    styledComponents: {
      displayName: !isProd,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = withBundleAnalyzer(nextConfig);
