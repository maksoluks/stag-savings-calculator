import { defineConfig } from 'vinxi' // lub @tanstack/start/config

export default defineConfig({
  server: {
    prerender: {
      routes: ['/', '/privacy'] // dodaj tu ścieżki, które mają się wyrenderować do HTML
    }
  }
})
