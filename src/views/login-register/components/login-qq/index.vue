<template>
  <div>
    <span id="qqLoginBtn" v-show="false"></span>
    <m-svg-icon
      class="w-4 cursor-pointer"
      name="qq"
      @click="onQQLogin"
    ></m-svg-icon>
  </div>
</template>

<script setup>
// 点击qq登录
const onQQLogin = () => {}
</script>

<style lang="scss" scoped></style>
