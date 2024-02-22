import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import category from './modules/category'

const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    createPersistedState({
      // 保存到 localStorage 中的 key
      key: 'vite-tailwind-frontdesk',
      // 需要保存的模块
      paths: ['category']
    })
  ]
})

export default store
