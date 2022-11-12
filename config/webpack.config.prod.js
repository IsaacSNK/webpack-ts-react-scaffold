const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
  }
}