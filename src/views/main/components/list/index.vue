<template>
  <div>
    <list-item
      v-for="(item, index) in pexelsList"
      :key="item.id"
      :data="item"
    ></list-item>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import listItem from './list-item/index.vue'
import { getPexlesListApi } from '@/api/pexels.js'

let listQuery = {
  page: 1,
  size: 20
}
const pexelsList = ref([])
const getPexlesData = async () => {
  const res = await getPexlesListApi(listQuery)
  console.log('🚀【pexles 列表数据】', res)
  pexelsList.value = res.list || []
}
getPexlesData()
</script>

<style lang="scss" scoped></style>
