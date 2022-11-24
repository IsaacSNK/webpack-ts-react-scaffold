const { ModuleMinifierPlugin, WorkerPoolMinifier } = require('@rushstack/webpack4-module-minifier-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
  },
  plugins: [
    new ModuleMinifierPlugin({
      minifier: new WorkerPoolMinifier(),
      // If not provided, the plugin will attempt to guess from `mode` and `devtool`.
      // Providing it expressly gives better results
      // useSourceMap: true
    })
  ]
}