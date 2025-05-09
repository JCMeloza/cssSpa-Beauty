import { defineConfig } from 'vite'

export default defineConfig({
  base: "/cssSpa-Beauty/",
  server: {
    watch: {
      usePolling: true
    }
  }
})