const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);
const cracoLessPlugin = require('craco-less');
const plugin = require('eslint-plugin-react');

module.exports = {
  plugins: [
    {
      plugin: cracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
};
