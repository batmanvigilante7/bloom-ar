import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /bloom-ar/, while local development stays at /.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/bloom-ar/' : '/',
  plugins: [react()],
})
