const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  // webpack(config) {
  //   config.resolve.alias['~'] = path.join(__dirname, 'src');
  //   return config;
  // },
};

module.exports = nextConfig;
