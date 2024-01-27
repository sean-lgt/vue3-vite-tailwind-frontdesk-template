<template>
  <div>移动端导航</div>
</template>

<script setup>
import { getCategoryApi } from '@/api/category.js'

const fetchCategoryData = () => {
  getCategoryApi()
}
fetchCategoryData()
</script>

<style lang="scss" scoped></style>
