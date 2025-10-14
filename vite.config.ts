import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  build: {
    chunkSizeWarningLimit: 600, // Increase the warning limit if needed
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create a chunk for React and related packages
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          
          // Create a chunk for Firebase related packages
          if (id.includes('node_modules/firebase')) {
            return 'firebase-vendor';
          }
          
          // Create a chunk for UI component libraries
          if (id.includes('node_modules/@headlessui') || 
              id.includes('node_modules/@heroicons')) {
            return 'ui-components';
          }
          
          // Create a chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    sourcemap: false, // Disable source maps in production for smaller bundle size
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    }
  }
})