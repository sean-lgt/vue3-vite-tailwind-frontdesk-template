<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示 svg 的图标名称 (剔除 icon-)
  name: { type: String, required: true },
  // 直接指定 svg 图标的颜色
  color: { type: String },
  // 通过tailwind 设置 svg 图标颜色的类名
  fillClass: { type: String }
})

// 真实显示的 svg 图标名
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped></style>
