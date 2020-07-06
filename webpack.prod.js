const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const paths = [
  {
    path: '/',
    lastmod: '2020-04-28',
  },
  {
    path: '/explore',
    lastmod: '2020-04-03',
  },
  {
    path: '/legal/privacy-policy',
    lastmod: '2020-03-20',
  },
  {
    path: '/legal/terms-of-service',
    lastmod: '2020-03-20',
  },
  {
    path: '/contact-us',
    lastmod: '2020-02-23',
  },
  {
    path: '/today-events?category=Business',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Entertainment',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Environment',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Health',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Science',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Sports',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Technology',
    lastmod: '2020-04-28',
  },
  {
    path: '/today-events?category=Others',
    lastmod: '2020-04-28',
  },
];

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './.env.production', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new SitemapPlugin('https://tharavu.org', paths),
    new CopyPlugin({
      patterns: [
        { from: 'netlify.toml', to: 'netlify.toml' },
      ],
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
