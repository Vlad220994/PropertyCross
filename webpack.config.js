const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader'
      },
      { 
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node-modules/'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: { sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true}
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: { sourceMap: true}
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true}
          }
        ],
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
}
