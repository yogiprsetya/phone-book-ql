/** @type {import('next').NextConfig} */

const withTwin = require('./withTwin.js');

const nextConfig = withTwin({
  output: 'export',
  reactStrictMode: true
});

module.exports = nextConfig;
