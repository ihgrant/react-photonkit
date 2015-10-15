const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example/app.cjsx'),
  output: {
    path: path.resolve(__dirname, 'example/dist'),
    publicPath: 'example/dist/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: "./example",
    port: 8000
  },
  resolveLoader: {
    modulesDirectories: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.coffee$/, exclude: /node_modules/, loader: 'coffee-loader' },
      { test: /\.cjsx$/, exclude: /node_modules/, loaders: ['coffee', 'cjsx']},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ]
  }
};