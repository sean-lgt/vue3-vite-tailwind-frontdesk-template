<template>
  <div>
    <div
      v-for="(item, index) in hintData"
      :key="index"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      @click="onItemClick(item)"
      v-html="highlightText(item)"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { getPexlesSearchHintApi } from '@/api/pexels.js'

const props = defineProps({
  // 搜索文本
  searchText: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['itemClick'])

// 获取搜索提示数据
const hintData = ref([])
const getHintData = async () => {
  if (!props.searchText) return
  const resData = await getPexlesSearchHintApi({ q: props.searchText })
  console.log('🚀【获取搜索数据】', resData)
  hintData.value = resData.result || []
}

// 监听 增加防抖
watchDebounced(() => props.searchText, getHintData, {
  immediate: true,
  // 每次事件触发时，延迟的时间
  debounce: 500
})

// 处理关键字高亮
const highlightText = (text) => {
  // 生成高亮标签
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  // 构建正则表达式，从《显示文本中》找出与《用户输入文本相同的内容》，使用《高亮标签》进行替换
  const reg = new RegExp(props.searchText, 'gi')
  // 替换
  return text.replace(reg, highlightStr)
}

// 点击搜索项
const onItemClick = (item) => {
  emits('itemClick', item)
}
</script>

<style lang="scss" scoped></style>
