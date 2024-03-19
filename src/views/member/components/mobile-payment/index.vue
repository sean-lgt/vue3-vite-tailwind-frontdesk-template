<template>
  <div
    class="fixed left-0 bottom-0 w-screen text-center bg-white dark:bg-zinc-800 xl:hidden"
  >
    <!-- 特惠提示 -->
    <discounts></discounts>
    <!-- 支付 -->
    <div class="flex justify-between text-xs px-1 py-0.5">
      <div class="text-left text-zinc-900 dark:text-zinc-200">
        <p class="">
          券后合计：<span class="text-red-600 text-[16px] font-sans font-medium"
            >￥</span
          ><span class="text-red-600 text-[22px] font-sans font-medium">9</span>
        </p>
        <p class="text-red-600">优惠券：限时立减 ￥10</p>
      </div>
      <m-button class="w-[120px]" :isActiveAnim="false" @click="onConfirmClick">
        立即开通
      </m-button>
    </div>
    <!-- TODO: popup -->
    <m-popup v-model="isOpenPopup" class="rounded">
      <div class="py-2 h-[80vh] flex flex-col">
        <h2
          class="text-xl text-zinc-900 dark:text-zinc-200 font-bold mb-2 px-1"
        >
          选择支付方式
        </h2>
        <!-- 支付宝 -->
        <div
          class="flex items-center px-2 py-2 border-b border-b-zinc-200 dark:border-b-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-900"
          @click="onAlipay"
        >
          <img
            class="w-4 h-4"
            src="https://imooc-front.lgdsunday.club/assets/alipay.e4ca2d5f.png"
            alt=""
          />
          <p class="text-xl ml-1 text-zinc-800 dark:text-zinc-200">支付宝</p>
        </div>
      </div>
    </m-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import discounts from '../discounts/index.vue'

const props = defineProps({
  payData: {
    required: true,
    type: Object
  }
})

const isOpenPopup = ref(false)
const onConfirmClick = () => {
  isOpenPopup.value = !isOpenPopup.value
}

// 点击支付宝支付
const onAlipay = () => {}
</script>

<style lang="scss" scoped></style>
