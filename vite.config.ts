import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import presetIcons from '@unocss/preset-icons';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      safelist: 'p-1 p-2 p-3 p-4'.split(' '),
    }),
    react(),
  ],
});
