import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// The app is published with GitHub Pages at
// https://<user>.github.io/e-plantShopping/, so assets are referenced from
// the site root. Override with BASE_PATH for a sub-path deployment.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})