import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, './src')
    }
  },
  server: {
    // 代理配置
    proxy: {
      '/frontdesk/dev-api': {
        target: 'http://127.0.0.1:3008/frontdesk/dev-api',
        changeOrigin: true
      }
    }
  }
})
