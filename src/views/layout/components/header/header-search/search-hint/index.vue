<template>
  <div>
    <div
      v-for="(item, index) in hintData"
      :key="index"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      @click="onItemClick(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
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

// 监听
watch(
  () => props.searchText,
  () => {
    getHintData()
  },
  {
    immediate: true
  }
)

// 点击搜索项
const onItemClick = (item) => {
  emits('itemClick', item)
}
</script>

<style lang="scss" scoped></style>
