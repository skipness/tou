import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import resolve from './util';

const baseConfig: Configuration = {
  entry: resolve('src/index.tsx'),
  output: {
    filename: `assets/js/bundle.${
      process.env.NODE_ENV === 'development' ? '' : '[contenthash]'
    }.js`,
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: resolve('src'),
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: '10' } }],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/template/index.html'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify({
        ...{ NODE_ENV: process.env.NODE_ENV },
        ...dotenv.config().parsed,
      }),
    }),
  ],
};

export default baseConfig;
