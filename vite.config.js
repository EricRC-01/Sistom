import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      contexts: "/src/contexts",
      hooks: "/src/hooks",
      pages: "/src/pages",
      routes: "/src/routes",
      theme: "/src/theme",
    },
  },
})
