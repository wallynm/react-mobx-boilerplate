const webpack = require('webpack')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')


const caseSensitivePlugin = new CaseSensitivePathsPlugin()
const bundleAnalyzerPlugin = new WebpackBundleAnalyzer()
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()


const pluginExtractCss = new ExtractCssChunks({
    filename: "[name].css",
    chunkFilename: "[id].css",
    hot: true
  }
)

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})


const urlLoader = {
  test: /\.(woff?2|ttf|eot)$/i,
  loader: 'file-loader',
  options: {
    name: `fonts/[name].[ext]?[hash]`
  }
}

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader"
  }
}

const iconLoader = {
  test: /\.font\.js/,
  use: [
    ExtractCssChunks.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        // modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
      }
    }, {
      loader: 'webfonts-loader',
      options: {
        'fileName': `fonts/[fontname].[ext]?[hash]`
      }
    }]
}

const cssLoader = {
  test: /\.css$/,
  use: [
    ExtractCssChunks.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]--[hash:base64:5]'
      }
    }, {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/configs/postcss.config.js'
        }
      },
    }]
}

module.exports = {
  devtool:'cheap-module-eval-source-map',
  entry: './src/index.js',
  resolve: {
    modules: ['./node_modules', './src']
  },

  output: {
    publicPath: '/',
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },

  devServer: {
    historyApiFallback: true,
    publicPath: '/', 
    port: 8080,
    hot: true
  },
  plugins: [
    caseSensitivePlugin,
    pluginExtractCss,
    htmlWebpackPlugin,
    hotModuleReplacementPlugin
  ],

  module: {
    rules: [
      babelLoader,
      cssLoader,
      iconLoader,
      urlLoader
    ]
  }
}

