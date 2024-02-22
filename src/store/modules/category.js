import { ALL_CATEGORY_ITEM, CATEGORY_INIT_DATA } from '@/constants/index.js'
import { getCategoryApi } from '@/api/category.js'
/**
 * 处理 navigationBar 中的数据 categorys
 */
export default {
  // 独立作用域
  namespaced: true,
  state() {
    return {
      // 1、categorys 具备一个初始化数据
      // 2、从服务端获取数据，替换初始化数据
      // 3、为了防止数据老化，我们每次获取新数据作为下一次初始化数据
      categorys: CATEGORY_INIT_DATA
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
