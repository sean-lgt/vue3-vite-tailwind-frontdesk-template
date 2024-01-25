<template>
  <div>
    <mobile v-if="isMobileTerminal" />
    <pc v-if="!isMobileTerminal" />
  </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobile from './mobile/index.vue'
import pc from './pc/index.vue'
</script>

<style lang="scss" scoped></style>
