<template>
  <div
    class="group relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40"
  >
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="search"
        color="#707070"
      ></m-svg-icon>
      <!-- 输入框 -->
      <input
        type="text"
        class="block w-full rounded-xl h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 text-zinc-900 tracking-wide text-sm font-semibold border border-zinc-100 focus:border-red-300 duration-500 group-hover:bg-white group-hover:border-zinc-200"
        placeholder="搜索"
      />
      <!-- 删除按钮 -->
      <m-svg-icon
        name="input-delete"
        class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
      ></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] bg-zinc-200 duration-500 group-hover:opacity-100"
      ></div>
      <!-- 搜索按钮 -->
      <m-button
        class="absolute translate-y-[-50%] top-[50%] right-1 rounded-xl duration-500"
        icon="search"
        iconColor="#ffffff"
        @click="handleSearch"
      ></m-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-200 hover:shadow-2xl"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
// 点击搜索
const handleSearch = () => {}
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s;
}

.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
