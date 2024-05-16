import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('development', process.cwd(), '')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: env.VITE_BUILD_OUT_DIR,
  },
  base: `/test-action/${env.VITE_BUILD_ENV}`
})
