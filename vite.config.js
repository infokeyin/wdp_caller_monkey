import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':           fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages':      fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@hooks':      fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@utils':      fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@data':       fileURLToPath(new URL('./src/data', import.meta.url)),
      '@config':     fileURLToPath(new URL('./src/config', import.meta.url)),
      '@props':      fileURLToPath(new URL('./src/props', import.meta.url)),
    },
  },
});
