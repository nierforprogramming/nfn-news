import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { GiTalk } from 'react-icons/gi'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
 server: {
 proxy: {
      '/api': {
        target: 'https://api.currentsapi.services',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
}
     
})
