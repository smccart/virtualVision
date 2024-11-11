/* eslint-env node */
/* eslint-disable no-undef */

const { configure } = require('quasar/wrappers');
const { visualizer } = require('rollup-plugin-visualizer');

module.exports = configure(function (/* ctx */) {
  return {
    boot: ['axios'],

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      vueRouterMode: 'history',
      vitePlugins: [
        visualizer({
          filename: './statistics.html',
          open: true,
        }),
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      plugins: [],
    },

    animations: [],

    ssr: {
      pwa: true,
      prodPort: 3000,
      middlewares: ['render'],
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
    },

    capacitor: {
      hideSplashscreen: true,
    },
  };
});
