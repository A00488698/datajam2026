import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages friendly:
// - We use HashRouter, so no special 404 rewrite needed.
// - base should match repo name.
export default defineConfig({
  plugins: [react()],
  base: '/datajam2026/',
})
