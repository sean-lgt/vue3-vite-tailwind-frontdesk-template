<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <!-- 汉堡按钮 -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
        @click="isOpenPopup = !isOpenPopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- 滑块 -->
      <li
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
        :style="silderStyle"
      ></li>

      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100 ': $store.getters.currentCategoryIndex === index
        }"
        :ref="setItemRef"
        @click="onItemClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>

    <m-popup v-model="isOpenPopup">
      <Menu @onItemClick="onItemClick"></Menu>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import { useStore } from 'vuex'
import { useScroll } from '@vueuse/core'
import Menu from '@/views/main/components/menu/index.vue'

const store = useStore()

const props = defineProps({
  // data: {
  //   type: Array,
  //   required: true
  // }
})

// 滑块样式
const silderStyle = ref({
  transform: 'translateX(0px)',
  width: '46px'
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
// fix 监听 getters 时需要传递的是一个函数
watch(
  () => store.getters.currentCategoryIndex,
  (val) => {
    // 获取选中元素的 left/width
    const { left, width } = itemRefs[val].getBoundingClientRect()
    // 设置滑块的位置和宽度
    silderStyle.value = {
      // ul横向滚动位置 + 当前元素的left - 内边距
      transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
      width: `${width}px`
    }
  }
)

// 点击
const onItemClick = (item) => {
  store.commit('app/setCurrentCategory', item)
  isOpenPopup.value = false
}

// popup 展示
const isOpenPopup = ref(false)
</script>

<style lang="scss" scoped></style>
