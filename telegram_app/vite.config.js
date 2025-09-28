import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/telegram_app/',
  plugins: [react(),
    tailwindcss()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }

})
