const path = require('path')

const config = {
  entry: './src/createStore.js',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    filename: 'createStore.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}

module.exports = config
