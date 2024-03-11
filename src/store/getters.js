export default {
  categorys: (state) => state.category.categorys,
  // 当前主题
  themeType: (state) => state.theme.themeType,
  // category 选中项
  currentCategory: (state) => state.app.currentCategory,
  // category 选中项的下标
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex((item) => {
      return item.id === getters.currentCategory.id
    })
  },
  // 搜索历史
  historys: (state) => state.search.historys,
  // 搜索文本
  searchText: (state) => state.app.searchText,
  // 用户登录的token
  token: (state) => state.user.token,
  // 用户登录信息
  userInfo: (state) => state.user.userInfo
}
