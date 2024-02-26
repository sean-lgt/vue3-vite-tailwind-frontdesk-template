import { THEME_CONFIG } from '@/constants/index'

export default {
  namespaced: true,
  state() {
    return {
      // 主题模式
      themeType: THEME_CONFIG.LIGHT
    }
  },
  mutations: {
    // 切换主题模式
    changeThemeType(state, payload) {
      state.themeType = payload
    }
  }
}
