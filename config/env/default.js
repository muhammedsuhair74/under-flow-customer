'use strict';

// eslint-disable-next-line no-unused-vars
const developConfig = {
  apiEndpoint: 'http://www.mocky.io',
  apiVersion: 'v2'
};

module.exports = {
  webpack: {
    logDispatcher: true
  },
  clientConfig: {
    ...developConfig
  }
};
