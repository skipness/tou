import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import resolve from './util';
import baseConfig from './webpack.base.config';

const prodConfig: Configuration = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: 'https://tou.im/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: resolve('src'),
        exclude: /node-modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: {
              //   localIdentName: '[contenthash:5]',
              // },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[contenthash].[ext]',
              outputPath: 'assets/image',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        },
        'font-awesome': {
          name: 'font-awesome',
          test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: 'assets/style/bundle.[contenthash].css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
});

export default prodConfig;
