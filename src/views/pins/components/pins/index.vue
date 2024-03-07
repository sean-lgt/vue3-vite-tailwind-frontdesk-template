<template>
  <div>当前id：{{ id }}</div>
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
