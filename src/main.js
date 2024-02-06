import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from '@/router'
import { useREM } from '@/utils/flexible.js'
import './styles/index.scss'

useREM()
createApp(App).use(router).mount('#app')
