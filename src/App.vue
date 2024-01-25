<template>
  <div>是否为移动端设备：{{ isMobileTerminal }}</div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
