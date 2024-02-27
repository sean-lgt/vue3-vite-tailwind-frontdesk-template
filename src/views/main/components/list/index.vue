<template>
  <div>list</div>
</template>

<script setup>
import { getPexlesListApi } from '@/api/pexels.js'

let listQuery = {
  page: 1,
  size: 20
}
const getPexlesData = async () => {
  const res = await getPexlesListApi(listQuery)
  console.log('🚀【pexles 列表数据】', res)
}
getPexlesData()
</script>

<style lang="scss" scoped></style>
