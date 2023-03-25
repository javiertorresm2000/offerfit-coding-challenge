import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockPlugin from 'vite-plugin-file-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mockPlugin(),],
})
