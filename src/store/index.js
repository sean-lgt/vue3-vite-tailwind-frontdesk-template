import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import app from './modules/app'
import search from './modules/search'

const store = createStore({
  getters,
  modules: {
    category,
    theme,
    app,
    search
  },
  plugins: [
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: 'vite-tailwind-frontdesk',
      // 需要保存的模块
      paths: ['category', 'theme', 'search']
    })
  ]
})

export default store
