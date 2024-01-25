import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '../constants'

const { width } = useWindowSize()

/**
 * @description: 判断当前是否为移动端设备，依据屏幕宽度是否小于一个指定宽度 （1280）
 * 使用 vue3 的计算属性，更具灵活性
 * @return {Boolean}
 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
