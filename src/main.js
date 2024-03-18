import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { useREM } from '@/utils/flexible.js'
// 导入物料组件库
import mLibs from './libs'
import './styles/index.scss'
// 注册 svg-icons
import 'virtual:svg-icons-register'
import { useTheme } from '@/utils/theme'
// 注册自定义指令
import directives from './directives/index.js'
// 权限控制
import './permission.js'

// 设置rem
useREM()
// 使用主题
useTheme()
createApp(App).use(router).use(store).use(mLibs).use(directives).mount('#app')
