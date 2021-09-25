// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const injectDevServer = require('@cypress/react/plugins/react-scripts');

// eslint-disable-next-line no-undef
module.exports = (on, config) => {
  injectDevServer(on, config);
  return config;
};
