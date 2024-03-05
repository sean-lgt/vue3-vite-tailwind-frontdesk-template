<template>
  <div class="w-full guide-search">
    <m-search v-model="searchValue" @search="onClickSearchItem">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <search-hint
            :searchText="searchValue"
            @itemClick="onClickSearchItem"
            v-show="searchValue"
          ></search-hint>
          <!-- 最近搜索 -->
          <search-history
            @itemClick="onClickSearchItem"
            v-show="!searchValue"
          ></search-history>
          <!-- 推荐主题 -->
          <search-theme v-show="!searchValue"></search-theme>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import searchHint from './search-hint/index.vue'
import searchHistory from './search-history/index.vue'
import searchTheme from './search-theme/index.vue'

const store = useStore()

const searchValue = ref('')

// 点击搜索回调
const onClickSearchItem = (val) => {
  searchValue.value = val
  if (val) {
    // 保存历史记录
    store.commit('search/addHistory', val)
    console.log('触发 searchText 变化')
    // 触发 searchText 变化
    store.commit('app/setSearchText', val)
  }
}
</script>

<style lang="scss" scoped></style>
