<template>
  <div>移动端导航</div>
</template>

<script setup>
import { getCategoryApi } from '@/api/category.js'

const fetchCategoryData = () => {
  getCategoryApi().then((res) => {
    console.log('🚀【获取类别数据】', res)
  })
}
fetchCategoryData()
</script>

<style lang="scss" scoped></style>
