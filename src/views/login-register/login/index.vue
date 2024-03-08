<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"
  >
    <login-header></login-header>
    <!-- 表单区 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"
      >
        账号登录
      </h3>
      <div class="flex justify-around mt-4">
        <!-- QQ -->
        <login-qq></login-qq>
        <!-- 微信 -->
        <login-weixin></login-weixin>
      </div>
    </div>
  </div>
</template>

<script setup>
import loginHeader from '../components/login-header/index.vue'
import loginQq from '../components/login-qq/index.vue'
import loginWeixin from '../components/login-weixin/index.vue'
</script>

<style lang="scss" scoped></style>
