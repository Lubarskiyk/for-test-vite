import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import ViteWebfontDownload from 'vite-plugin-webfont-dl';
import Inspect from 'vite-plugin-inspect';
import { imagetools } from 'vite-imagetools';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      Inspect(),
      ViteWebfontDownload([
        'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&display=swap',
      ]),
      imagetools(),
    ],
  };
});
