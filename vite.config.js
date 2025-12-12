import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    ViteImageOptimizer(),
  ],
  assetsInclude: ['**/*.lottie'],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase-vendor';
            if (id.includes('@lottiefiles') || id.includes('lottie-web')) return 'lottie-vendor';
            if (id.includes('three')) return 'three-vendor';
            if (id.includes('framer-motion')) return 'framer-vendor';
            if (id.includes('gsap')) return 'gsap-vendor';
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('react')) return 'react-vendor';
            if (id.includes('react-icons')) return 'icons-vendor';

            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
