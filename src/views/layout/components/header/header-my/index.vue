<template>
  <m-popover class="guide-my flex items-center" placement="bottom-left">
    <template #reference>
      <div
        v-if="$store.getters.token"
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <img
          class="w-3 h-3 rounded-sm"
          :src="$store.getters.userInfo.avatar || ''"
        />
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <m-svg-icon
          v-if="$store.getters.userInfo.vipLevel"
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
          fillClass="fill-zinc-900"
        ></m-svg-icon>
      </div>
      <div v-else>
        <m-button
          class="guide-my"
          icon="profile"
          iconColor="#fff"
          @click="navToLogin"
        ></m-button>
      </div>
    </template>
    <div v-if="$store.getters.token" class="w-[140px] overflow-hidden p-1">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuArr"
        :key="item.id"
        @click="onItemClick(item.path)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-zinc-800 dark:text-zinc-300 text-sm">{{
          item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { confirm } from '@/libs/index.js'

const router = useRouter()
const store = useStore()

const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级 VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]

// 跳转进入登录
const navToLogin = () => {
  // 配置跳转方式
  store.commit('app/changeRouterType', 'push')
  router.push('/login')
}

// menu item 点击事件
const onItemClick = (path) => {
  // 有路径则进行路径跳转
  if (path) {
    // 配置跳转方式
    store.commit('app/changeRouterType', 'push')
    router.push(path)
    return
  }
  if (!path) {
    // 无路径则为退出登录
    confirm('您确定要退出登录吗？').then(() => {
      // 退出登录不存在跳转路径
      store.dispatch('user/logout')
    })
  }
}
</script>

<style lang="scss" scoped></style>
