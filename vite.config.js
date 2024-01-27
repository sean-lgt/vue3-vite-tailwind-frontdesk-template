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
      '/prod-api': {
        target: 'https://imooc-front.lgdsunday.club/',
        changeOrigin: true
      }
    }
  }
})
