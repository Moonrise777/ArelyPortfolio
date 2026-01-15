import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // Si estamos construyendo para producción (build), cambiamos la base para GitHub Pages
  if (command !== 'serve') {
    config.base = '/ArelyPortfolio/'
  }

  return config
})