/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    src: './src',
  },
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    'snowpack-plugin-raw-file-loader',
    [
      'snowpack-plugin-raw-file-loader',
      {
        exts: ['.graphql'],
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  exclude: ['**/.git/**/*', '**/_redirects'],
};
