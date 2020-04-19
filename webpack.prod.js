const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  {
    path: '/',
    lastmod: '2020-04-17',
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
];

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './.env.production', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new SitemapPlugin('https://tharavu.org', paths),
  ],
});
