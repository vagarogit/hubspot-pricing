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
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': '"production"',
        'process.env': '{"NODE_ENV":"production"}',
        'process.emit': '(function(){})',
        'process': 'undefined'
      }
    })
  ],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{"NODE_ENV":"production"}',
    'process.emit': '(function(){})',
    'process': 'undefined',
    global: 'globalThis'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/widget.tsx'),
      name: 'HubSpotPricingWidget', 
      fileName: 'hubspot-pricing-widget',
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'hubspot-pricing-widget.[ext]',
        globals: {}
      }
    },
    cssCodeSplit: false,
    minify: true
  }
})