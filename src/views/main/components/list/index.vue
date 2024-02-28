<template>
  <div>
    <m-waterfall
      :data="pexelsList"
      :nodeKey="'id'"
      :column="isMobileTerminal ? 2 : 5"
      :picturePreReading="true"
      class="w-full px-1"
    >
      <template v-slot="{ item, width }">
        <list-item :data="item"></list-item>
      </template>
    </m-waterfall>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import listItem from './list-item/index.vue'
import { getPexlesListApi } from '@/api/pexels.js'
import { isMobileTerminal } from '@/utils/flexible.js'

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
