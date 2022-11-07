/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
    return config;

  }
}

const removeImports = require('next-remove-imports')();
module.exports = removeImports(nextConfig);