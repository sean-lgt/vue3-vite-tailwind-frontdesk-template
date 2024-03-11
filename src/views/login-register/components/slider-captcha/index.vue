<template>
  <div
    class="fixed top-[20%] left-[50%] translate-x-[-50%] w-[340px] h-[270px] text-sm bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-900 shadow-3xl"
  >
    <div class="flex items-center h-5 text-left px-1 mb-1">
      <span class="flex-grow dark:text-zinc-200">请完成安全验证</span>
      <m-svg-icon
        name="refresh"
        fillClass="fill-zinc-900 dark:fill-zinc-200"
        class="w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onReset"
      ></m-svg-icon>
      <m-svg-icon
        name="close"
        fillClass="fill-zinc-900 dark:fill-zinc-200"
        class="ml-2 w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onClose"
      ></m-svg-icon>
    </div>
    <div id="captcha"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { checkSilerCaptchaApi } from '@/api/sys.js'
import '@/vendor/SliderCaptcha/slidercaptcha.min.css'
import '@/vendor/SliderCaptcha/longbow.slidercaptcha.min.js'

const emits = defineEmits(['close', 'success'])

// 滑块验证实例
let captcha = null
onMounted(() => {
  captcha = sliderCaptcha({
    // 渲染位置
    id: 'captcha',
    // 用户拼图成功之后的回调
    async onSuccess(arr) {
      console.log('🚀【成功】', arr)
      const res = await checkSilerCaptchaApi({
        behavior: arr
      })
      if (res) {
        emits('success')
      }
    },
    // 用户拼图失败之后的回调
    onFail() {
      console.log('sliderCaptcha onFail')
    },
    // 默认的验证方法，咱们不在此处进行验证，而是选择在用户拼图成功之后进行验证，所以此处永远返回为 true
    verify() {
      return true
    }
  })
})

// 点击重置
const onReset = () => {
  captcha.reset()
}

// 点击关闭
const onClose = () => {
  emits('close')
}
</script>

<style lang="scss" scoped></style>
