import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      App: path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-transform-class-properties', { loose: true }],
        ],
      },
    }),
    tsconfigPaths(),
    svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    target: 'esnext',
  },
});
