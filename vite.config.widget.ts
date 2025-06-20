import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'HubSpotPricingWidget',
      fileName: 'hubspot-pricing-widget',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        assetFileNames: 'hubspot-pricing-widget.[ext]'
      }
    },
    cssCodeSplit: false,
    minify: true
  }
})