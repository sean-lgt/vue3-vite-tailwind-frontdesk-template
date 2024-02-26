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

// 设置rem
useREM()
// 使用主题
useTheme()
createApp(App).use(router).use(store).use(mLibs).mount('#app')
