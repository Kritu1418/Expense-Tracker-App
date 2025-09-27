import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Yeh aapki UI (Styling) ko theek rakhega
  plugins: [react(), tailwindcss()],

  // Yeh aapke frontend ko backend se connect karega
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
})