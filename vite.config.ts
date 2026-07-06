import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    // Ta wtyczka przechwyci importy "node:async_hooks" i zapobiegnie wywaleniu buildu
    nodePolyfills({
      include: ['async_hooks'],
      globals: {
        Buffer: false,
        global: false,
        process: false,
      },
    }),
  ],
})
