const cucumber = require('cypress-cucumber-preprocessor').default;
const { initPlugin } = require('cypress-video');

module.exports = (on, config) => {
  initPlugin(on, config);
  return config;
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  // Other configurations if needed
  
};
