/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    src: './src',
  },
  mount: {
    /* ... */
  },
  plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
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
  exclude: ['**/.git/**/*'],
};
