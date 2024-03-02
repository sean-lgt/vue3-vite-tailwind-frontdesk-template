import { ALL_CATEGORY_ITEM } from '@/constants/index'
/**
 * app 模块运行数据
 */
export default {
  // 独立作用域
  namespaced: true,
  state() {
    return {
      // 当前选中的分类
      currentCategory: ALL_CATEGORY_ITEM
    }
  },
  mutations: {
    // 切换选中分类
    setCurrentCategory(state, payload) {
      state.currentCategory = payload
    }
  },
  actions: {}
}
