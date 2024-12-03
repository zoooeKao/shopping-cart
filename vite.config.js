import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4000',
        // target: 'https://shopping-cart.hkg1.zeabur.app/',
        changeOrigin: true,
      },
    },
    // host: '192.168.1.116',
    host: '0.0.0.0',
  },
  plugins: [react()],
});
