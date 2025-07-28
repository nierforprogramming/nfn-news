import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { GiTalk } from 'react-icons/gi'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
 server: {
  host: true,     
  port: 5173,
  allowedHosts: ['chatty-pillows-dance.loca.lt']
}
     
})
