// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings
        if (warning.message.includes('Module level directives cause errors when bundled')) {
          return
        }
        warn(warning)}}}
})