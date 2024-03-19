<template>
  <!-- 保留一级路由出口 -->
  <div class="h-screen w-screen fixed top-0 left-0">
    <!-- <router-view></router-view> -->
    <!-- 路由动画组件 -->
    <m-transition-router-view
      mainComponentName="home"
      :routerType="$store.getters.routerType"
    ></m-transition-router-view>
  </div>
</template>

<script setup></script>

<style scoped></style>
