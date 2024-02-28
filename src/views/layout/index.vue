<template>
  <div class="h-screen">
    <headerComponent class="h-header"></headerComponent>
    <div class="h-main">
      <mainComponent></mainComponent>
    </div>
    <floating></floating>
  </div>
</template>

<script setup>
import headerComponent from './components/header/index.vue'
import mainComponent from './components/main/index.vue'
import floating from './components/floating/index.vue'
</script>

<style lang="scss" scoped></style>
