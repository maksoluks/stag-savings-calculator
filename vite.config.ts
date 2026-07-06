import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/auto-gaz-stag/', // Ten slasz na końcu i początku jest kluczowy!
})
