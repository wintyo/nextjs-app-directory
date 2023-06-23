const path = require('path');

loadEnv(process.env.APP_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  // webpack(config) {
  //   config.resolve.alias['~'] = path.join(__dirname, 'src');
  //   return config;
  // },
};

function loadEnv(appEnvName = 'local') {
  const loadEnvFile = (filePath) => {
    try {
      return require(filePath);
    } catch {
      return {};
    }
  };

  const env = {
    ...require('./env/env.default'),
    ...loadEnvFile(`./env/env.${appEnvName}`),
    NEXT_PUBLIC_APP_ENV: appEnvName,
  };

  console.log('install env:', env);

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}

module.exports = nextConfig;
