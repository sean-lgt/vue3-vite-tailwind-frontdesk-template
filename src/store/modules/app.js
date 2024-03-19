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
      currentCategory: ALL_CATEGORY_ITEM,
      // 搜索文本
      searchText: '',
      // 路由跳转类型
      routerType: 'none'
    }
  },
  mutations: {
    // 切换选中分类
    setCurrentCategory(state, payload) {
      state.currentCategory = payload
    },
    // 设置搜索文本
    setSearchText(state, payload) {
      state.searchText = payload
    },
    // 修改路由类型
    changeRouterType(state, payload) {
      state.routerType = payload
    }
  },
  actions: {}
}
