<template>
  <div>
    <mobile v-if="isMobileTerminal" :data="categoryList" />
    <pc v-if="!isMobileTerminal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import mobile from './mobile/index.vue'
import pc from './pc/index.vue'
import { getCategoryApi } from '@/api/category.js'
import { ALL_CATEGORY_ITEM } from '@/constants/index'

const categoryList = ref([])
const fetchCategoryData = async () => {
  const { categorys } = await getCategoryApi()
  categoryList.value = [ALL_CATEGORY_ITEM, ...categorys]
  console.log('🚀【获取类别数据】', categoryList.value)
}
fetchCategoryData()
</script>

<style lang="scss" scoped></style>
