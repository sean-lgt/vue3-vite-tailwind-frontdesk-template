<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <!-- 汉堡按钮 -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- 滑块 -->
      <li
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
        :style="silderStyle"
      ></li>

      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100 ': currentCategoryIndex === index
        }"
        :ref="setItemRef"
        @click="onItemClick(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'

defineProps({
  data: {
    type: Array,
    required: true
  }
})

const currentCategoryIndex = ref(0)

// 滑块样式
const silderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

// 获取填充的所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}

// 元素更新后，dom渲染前重置数据
onBeforeUpdate(() => {
  itemRefs = []
})

// 获取 ul 元素，计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(currentCategoryIndex, (val) => {
  // 获取选中元素的 left/width
  const { left, width } = itemRefs[val].getBoundingClientRect()
  // 设置滑块的位置和宽度
  silderStyle.value = {
    // ul横向滚动位置 + 当前元素的left - 内边距
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: `${width}px`
  }
})

// 点击
const onItemClick = (item, index) => {
  currentCategoryIndex.value = index
}
</script>

<style lang="scss" scoped></style>
