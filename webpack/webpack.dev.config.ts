import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import resolve from './util';
import baseConfig from './webpack.base.config';

const devConfig: Configuration = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 8888,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: resolve('src'),
        exclude: /node-modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
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
              name: '[path][name].[ext]',
              outputPath: 'assets/image',
            },
          },
        ],
      },
    ],
  },
});

export default devConfig;
