import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '@/constants'

const { width } = useWindowSize()

/**
 * @description: 判断当前是否为移动端设备，依据屏幕宽度是否小于一个指定宽度 （1280）
 * 使用 vue3 的计算属性，更具灵活性
 * @return {Boolean}
 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * @description: 根据屏幕宽度动态指定 rem 基准值，最大为 40px
 * @return {*}
 */
export const useREM = () => {
  // 定义最大的 fontSize
  const MAX_FONT_SIZE = 40
  // 监听 html 文档备解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    // 获取html标签
    const html = document.querySelector('html')
    // 获取 html 标签的 fontSize 大小 屏幕宽度/10 （ipone6 宽度为375,则fontSize为 37.5）
    let fontSize = window.innerWidth / 10
    // 限制 fontSize 的大小
    if (fontSize > MAX_FONT_SIZE) {
      fontSize = MAX_FONT_SIZE
    }
    // 设置 fontSize
    html.style.fontSize = fontSize + 'px'
  })
}
