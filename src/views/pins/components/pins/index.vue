<template>
  <div
    class="fixed left-0 top-0 w-screen h-screen z-20 backdrop-blur-4xl bg-white dark:bg-zinc-800 pb-2 overflow-y-auto xl:p-2"
  >
    <m-navbar>参数</m-navbar>
    <div>当前id：{{ id }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
