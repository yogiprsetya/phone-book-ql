/** @type {import('next').NextConfig} */

const withTwin = require('./withTwin.js');

const nextConfig = withTwin({
  output: 'export'
});

module.exports = nextConfig;
