var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  mode: 'production',
  module: {
    
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};