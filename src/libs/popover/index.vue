<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseLeave">
    <div ref="referenceTarget">
      <!-- 具名插槽 触发弹层的视图 -->
      <slot name="reference" />
    </div>
    <transition name="slider">
      <div
        v-show="isVisable"
        ref="contentTarget"
        :style="contentStyle"
        class="absolute z-20 bg-white dark:bg-zinc-900 border rounded-md dark:border-zinc-700"
      >
        <!-- 匿名插槽 弹出层视图中展示的内容-->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
// 延迟关闭时长 防抖
const DELAY_TIME = 150

const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'

// 定义指定位置 enum
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]
</script>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  // 控制气泡弹出层位置,只允许传入特定值
  placement: {
    type: String,
    default: PROP_BOTTOM_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)
      if (!result) {
        throw new Error(
          `popover 的 placement 必须是 ${placementEnum.join('、')} 中的一个`
        )
      }
      return result
    }
  }
})

// 控制弹出层是否展示
const isVisable = ref(false)

// 控制延迟关闭时间 防抖
let timer = null

// 鼠标移入触发
const onMouseenter = () => {
  isVisable.value = true
  // 再次触发时，清理延时装置
  if (timer) {
    clearTimeout(timer)
  }
}

// 鼠标移出触发 防抖延迟
const onMouseLeave = () => {
  // 延时装置
  timer = setTimeout(() => {
    isVisable.value = false
    timer = null
  }, DELAY_TIME)
}

// 计算元素尺寸信息
const referenceTarget = ref(null) //触发弹层元素
const contentTarget = ref(null) //弹层元素
// 弹层位置style
const contentStyle = ref({
  top: 0,
  left: 0
})

// 计算元素尺寸
const useElementSize = (target) => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

/**
 * 监听展示的变化，在展示时计算气泡位置
 */
watch(isVisable, (val) => {
  if (!val) {
    return
  }
  // 等待渲染成功之后
  nextTick(() => {
    switch (props.placement) {
      // 左上
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右上
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
      // 左下
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      // 右下
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          useElementSize(referenceTarget.value).width + 'px'
        break
    }
  })
})
</script>

<style lang="scss" scoped>
.slider-enter-active,
.slider-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.slider-enter-from,
.slider-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
