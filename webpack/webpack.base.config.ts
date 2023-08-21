import dotenv from 'dotenv';
import FaviconWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import resolve from './util';

const baseConfig: Configuration = {
  entry: resolve('src/index.tsx'),
  output: {
    filename: `assets/js/bundle.${process.env.NODE_ENV === 'development' ? '' : '[contenthash]'
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
    fallback: { util: false }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/template/index.html'),
    }),
    new FaviconWebpackPlugin({
      favicons: {
        appName: 'tou.im',
        appDescription: 'Simple image hosting service',
        background: '#000000',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: false,
          windows: false,
          yandex: false,
        },
        theme_color: '#ffd700',
        start_url: '/',
      },
      logo: resolve('src/template/favico.png'),
      outputPath: 'assets/image/ico/',
      prefix: 'assets/image/ico/',
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
