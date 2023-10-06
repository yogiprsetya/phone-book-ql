'use client';

const path = require('path');

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname, 'api'),
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'components'),
  path.resolve(__dirname, 'config'),
  path.resolve(__dirname, 'hooks'),
  path.resolve(__dirname, 'services')
];

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options;
      // Make the loader work with the new app directory
      const patchedDefaultLoaders = options.defaultLoaders.babel;
      patchedDefaultLoaders.options.hasServerComponents = false;
      patchedDefaultLoaders.options.hasReactRefresh = false;

      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          patchedDefaultLoaders,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-jsx-remove-data-test-id'),
                require.resolve('babel-plugin-macros'),
                require.resolve('@emotion/babel-plugin'),
                [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }]
              ]
            }
          }
        ]
      });

      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
          v8: false
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    }
  };
};
