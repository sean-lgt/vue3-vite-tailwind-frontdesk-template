<template>
  <div class="w-full">
    <m-search v-model="searchValue">
      <template #dropdown>
        <div>暂无数据</div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValue = ref('')
</script>

<style lang="scss" scoped></style>
