<template>
  <div class="w-full">
    <m-search v-model="searchValue">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <search-hint
            :searchText="searchValue"
            @itemClick="onClickSearchItem"
            v-show="searchValue"
          ></search-hint>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import searchHint from './search-hint/index.vue'

const searchValue = ref('')

// 点击搜索回调
const onClickSearchItem = (item) => {
  console.log('🚀【点击搜索回调】', item)
}
</script>

<style lang="scss" scoped></style>
