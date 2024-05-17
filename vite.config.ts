import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    build: {
      outDir: env.VITE_BUILD_OUT_DIR,
    },
    base: `/test-action/${env.VITE_BUILD_ENV}`
  }
})
