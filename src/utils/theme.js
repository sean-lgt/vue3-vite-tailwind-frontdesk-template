import { watch } from 'vue'
import store from '@/store/index'
import { THEME_CONFIG } from '@/constants/index'

/**
 * @description: 跟换主题颜色
 * @return {*}
 * @param {*} theme 主题颜色名称
 */
export const changeTheme = (theme) => {
  let themeClassName = ''
  switch (theme) {
    case THEME_CONFIG.LIGHT:
      themeClassName = 'light'
      break
    case THEME_CONFIG.DARK:
      themeClassName = 'dark'
      break
    default:
      break
  }
  // 修改 html 的 class
  document.querySelector('html').className = themeClassName
}

/**
 * @description: 使用主题 并且启动监听主题切换
 * @return {*}
 */
export const useTheme = () => {
  watch(() => store.getters.themeType, changeTheme, {
    immediate: true
  })
}
