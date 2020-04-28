var path = require('path');

module.exports = {
  // mode: 'production',
  // devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/PointCloudViz.js',
  output: {
    path: path.resolve('lib'),
    filename: 'PointCloudViz.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|glb)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
}