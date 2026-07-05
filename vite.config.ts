import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/auto-gaz-stag/',
  build: {
    rollupOptions: {
      external: [
        'node:async_hooks',
        '@tanstack/start-storage-context'
      ],
    },
  },
})
