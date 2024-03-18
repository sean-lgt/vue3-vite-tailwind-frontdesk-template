<template>
  <div
    class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
    ref="mainContainerTarget"
  >
    <navigation />
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <list />
    </div>
    <!-- 移动端 tabbar -->
    <m-trigger-menu
      v-if="isMobileTerminal"
      class="fixed bottom-6 m-auto left-0 right-0 w-[220px]"
    >
      <m-trigger-menu-item
        icon="home"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
      >
        首页
      </m-trigger-menu-item>
      <m-trigger-menu-item
        v-if="$store.getters.token"
        icon="vip"
        iconClass="fill-zinc-400 dark:fill-zinc-500"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onVipClick"
      >
        VIP
      </m-trigger-menu-item>
      <m-trigger-menu-item
        icon="profile"
        iconClass="fill-zinc-400 dark:fill-zinc-500"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onMyClick"
      >
        {{ $store.getters.token ? '我的' : '登录' }}
      </m-trigger-menu-item>
    </m-trigger-menu>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<script setup>
import { ref, onActivated } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useScroll } from '@vueuse/core'
import navigation from './components/navigation/index.vue'
import list from './components/list/index.vue'
import { isMobileTerminal } from '@/utils/flexible.js'

const store = useStore()
const router = useRouter()

// 跳转vip
const onVipClick = () => {
  // 配置跳转方式
  store.commit('app/changeRouterType', 'push')
}

// 跳转我的
const onMyClick = () => {
  // 配置跳转方式
  store.commit('app/changeRouterType', 'push')

  if (store.getters.token) {
    router.push('/profile')
  } else {
    router.push('/login')
  }
}

// 记录页面滚动位置
const mainContainerTarget = ref(null)
const { y: containerTargetScrollY } = useScroll(mainContainerTarget)
// 被缓存的组件再次可见，会回调 onActivated 方法
onActivated(() => {
  if (!mainContainerTarget.value) {
    return
  }
  mainContainerTarget.value.scrollTop = containerTargetScrollY.value
})
</script>

<style lang="scss" scoped></style>
