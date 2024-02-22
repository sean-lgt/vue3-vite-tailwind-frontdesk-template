<template>
  <div>
    <mobile v-if="isMobileTerminal" />
    <pc v-if="!isMobileTerminal" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { isMobileTerminal } from '@/utils/flexible'
import mobile from './mobile/index.vue'
import pc from './pc/index.vue'

const store = useStore()
// 获取 category 数据
store.dispatch('category/getCategorys')
</script>

<style lang="scss" scoped></style>
