const path = require('path');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',

  module: {
    //devtool: 'source-map',
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};