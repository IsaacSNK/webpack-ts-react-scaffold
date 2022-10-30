const path = require('path');

module.exports = {
  entry: 'index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      'node_modules', 
      'src'
    ]
  }
}