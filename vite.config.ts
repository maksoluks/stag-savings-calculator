import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Przechwytuje import serwerowy i podmienia go na bezpieczną dla przeglądarki klasę
      'node:async_hooks': path.resolve(__dirname, './mock-async-hooks.js'),
    },
  },
})
