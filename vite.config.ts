import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served from https://<user>.github.io/petfoodscan/ on GitHub Pages
  base: '/petfoodscan/',
  plugins: [react()],
});
