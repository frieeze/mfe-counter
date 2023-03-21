const deps = require('./package.json').dependencies;

module.exports = {
  name: 'counter',
  exposes: {
    './Counter': './src/components/Counter',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
