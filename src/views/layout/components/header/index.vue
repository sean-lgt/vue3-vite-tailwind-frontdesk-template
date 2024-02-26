<template>
  <div
    class="w-full duration-500 bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 px-2 py-1"
  >
    <div class="flex items-center">
      <img
        v-lazy
        class="h-4 cursor-pointer mr-2 guide-home"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        @click="navToHome"
      />
      <headerSearch class="mr-1"></headerSearch>
      <headerTheme class="mr-1"></headerTheme>
      <headerMy></headerMy>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import headerSearch from './header-search/index.vue'
import headerTheme from './header-theme/index.vue'
import headerMy from './header-my/index.vue'

const router = useRouter()

const navToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
