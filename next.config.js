/** @type {import('next').NextConfig} */
const path = require('path');
const { NormalModuleReplacementPlugin } = require('webpack');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new NormalModuleReplacementPlugin(
        /email\/render/,
        path.resolve(__dirname, './lib/renderEmailFix.js')
      )
    );
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
