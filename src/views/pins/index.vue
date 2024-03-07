<template>
  <div class="w-full h-full bg-zinc-200 dark:bg-zinc-800">
    <pins :id="$route.params.id" />
  </div>
</template>

<script setup>
import pins from './components/pins/index.vue'
</script>

<style lang="scss" scoped></style>
