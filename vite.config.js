import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-tours",
  plugins: [react()],
   build: {
    chunkSizeWarningLimit: 1600, // ← زوّد الرقم هنا (القيمة الافتراضية 500)
  },
})
