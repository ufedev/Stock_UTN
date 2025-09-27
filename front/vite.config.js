import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import t from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), t()],
})
