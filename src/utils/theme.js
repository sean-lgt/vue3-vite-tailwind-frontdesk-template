import { watch } from 'vue'
import store from '@/store/index'
import { THEME_CONFIG } from '@/constants/index'

let matchMedia = ''
/**
 * @description: 监听系统内置主题变更
 * @return {*}
 */
const watchSystemThemeChange = () => {
  // 仅需初始化一次即可
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = () => {
    changeTheme(THEME_CONFIG.SYSTEM)
  }
}

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
    case THEME_CONFIG.SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
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
