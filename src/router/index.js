import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(), // 路由模式
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes // 路由规则
})

export default router
