import router from '@/router/index.js'
import store from '@/store/index.js'
import { message } from '@/libs/index.js'

// 处理需要登录页面的访问权限
router.beforeEach((to, from) => {
  // 无需登录的页面访问
  if (!to.meta.user) {
    return
  }
  // 已经登录 可以进入
  if (store.getters.token) {
    return true
  }
  // 未登录 给警告并跳转回首页
  message('warn', '登录失效，请重新登录')
  return '/'
})
