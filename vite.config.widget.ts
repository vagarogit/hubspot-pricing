import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import replace from '@rollup/plugin-replace'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    replace({
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': JSON.stringify({ NODE_ENV: 'production' }),
        'process': JSON.stringify({ env: { NODE_ENV: 'production' } })
      }
    })
  ],
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