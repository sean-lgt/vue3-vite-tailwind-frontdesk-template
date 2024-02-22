import { ALL_CATEGORY_ITEM } from '@/constants/index.js'
import { getCategoryApi } from '@/api/category.js'
/**
 * 处理 navigationBar 中的数据 categorys
 */
export default {
  // 独立作用域
  namespaced: true,
  state() {
    return {
      categorys: [ALL_CATEGORY_ITEM]
    }
  },
  mutations: {
    setCategorys(state, payload) {
      state.categorys = [ALL_CATEGORY_ITEM, ...payload]
    }
  },
  actions: {
    async getCategorys({ commit }) {
      const { categorys } = await getCategoryApi()
      commit('setCategorys', categorys)
    }
  }
}
