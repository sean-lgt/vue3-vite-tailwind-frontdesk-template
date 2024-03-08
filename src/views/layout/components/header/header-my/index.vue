<template>
  <m-popover class="guide-my flex items-center" placement="bottom-left">
    <template #reference>
      <div
        v-if="false"
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <img
          class="w-3 h-3 rounded-sm"
          src="https://file.ipadown.com/tophub/assets/images/media/mp.weixin.qq.com.png_160x160.png"
        />
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <m-svg-icon
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
    <div v-if="false" class="w-[140px] overflow-hidden p-1">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuArr"
        :key="item.id"
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

const router = useRouter()

const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/'
  },
  {
    id: 1,
    title: '升级 VIP',
    icon: 'vip-profile',
    path: '/'
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
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
