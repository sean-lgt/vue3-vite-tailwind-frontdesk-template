<template>
  <div>
    <m-infinite-list
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexlesData"
    >
      <m-waterfall
        :data="pexelsList"
        :nodeKey="'id'"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="isOpenPicturePreReading"
        class="w-full px-1"
      >
        <template v-slot="{ item, width }">
          <list-item :data="item" :width="width" @click="onToPins"></list-item>
        </template>
      </m-waterfall>
    </m-infinite-list>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import listItem from './list-item/index.vue'
import { getPexlesListApi } from '@/api/pexels.js'
import { isMobileTerminal } from '@/utils/flexible.js'
import { IS_OPEN_PICTURE_PRE_READING } from '@/constants/index.js'

const store = useStore()

const isOpenPicturePreReading = IS_OPEN_PICTURE_PRE_READING

let listQuery = {
  page: 1,
  size: 20
}
// 是否在加载中
const loading = ref(false)
// 数据是否加载完成
const isFinished = ref(false)
const pexelsList = ref([])
const getPexlesData = async () => {
  // 数据全部加载完成则 return
  if (isFinished.value) {
    return
  }

  // 完成第一次请求之后，后续请求让 page 自增
  if (pexelsList.value.length) {
    listQuery.page += 1
  }

  const res = await getPexlesListApi(listQuery)
  // 初始请求清空数据源
  if (listQuery.page === 1) {
    pexelsList.value = res.list
  } else {
    pexelsList.value.push(...res.list)
  }
  // 判断数据是否全部加载完成
  if (pexelsList.value.length === res.total) {
    isFinished.value = true
  }
  // 修改 loading 标记
  loading.value = false
}

// 重置查询对象
const resetListQuery = (newQuery) => {
  listQuery = { ...listQuery, ...newQuery }
  // 重置状态
  isFinished.value = false
  pexelsList.value = []
}

// 监听 currentCategory 的变化
watch(
  () => store.getters.currentCategory,
  (currentCategory) => {
    // 重置请求参数
    resetListQuery({
      page: 1,
      categoryId: currentCategory.id
    })
  }
)

// 监听搜索内容项的变化
watch(
  () => store.getters.searchText,
  (val) => {
    // 重置请求参数
    resetListQuery({
      page: 1,
      searchText: val
    })
  }
)

// 进入 pins
const onToPins = (item) => {
  console.log('🚀【拿到item】', item)
  // 主动介入浏览器堆栈管理  修改浏览器的url
  history.pushState(null, null, `/pins/${item.id}`)
}
</script>

<style lang="scss" scoped></style>
