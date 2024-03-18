<template>
  <div class="overflow-auto relative flex flex-col items-center">
    <m-svg-icon
      v-if="isMobileTerminal"
      name="close"
      class="w-3 h-3 p-0.5 m-1 ml-auto"
      fillClass="fill-zinc-900 dark:fill-zinc-200 "
      @click="close"
    ></m-svg-icon>

    <img class="" ref="imageTarget" :src="blob" />

    <m-button
      class="mt-4 w-[80%] xl:w-1/2"
      :loading="loading"
      @click="onConfirmClick"
    >
      确定
    </m-button>
  </div>
</template>

<script>
const EMITS_CLOSE = 'close'

// 移动端配置对象
const mobileOptions = {
  // 将裁剪框限制在画布的大小
  viewMode: 1,
  // 移动画布，裁剪框不动
  dragMode: 'move',
  // 裁剪框固定纵横比：1:1
  aspectRatio: 1,
  // 裁剪框不可移动
  cropBoxMovable: false,
  // 不可调整裁剪框大小
  cropBoxResizable: false
}

// PC 端配置对象
const pcOptions = {
  // 裁剪框固定纵横比：1:1
  aspectRatio: 1
}
</script>

<script setup>
import { ref, onMounted } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { isMobileTerminal } from '@/utils/flexible.js'

defineProps({
  blob: {
    type: String,
    required: true
  }
})

const emits = defineEmits([EMITS_CLOSE])

// 图片裁剪处理
const imageTarget = ref(null)
let cropper = null
onMounted(() => {
  /**
   * 接收两个参数：
   * 1. 需要裁剪的图片 DOM
   * 2. options 配置对象
   */
  cropper = new Cropper(
    imageTarget.value,
    isMobileTerminal.value ? mobileOptions : pcOptions
  )
})

// 点击关闭
const close = () => {
  emits(EMITS_CLOSE)
}
// 点击确定按钮
const loading = ref(false)
const onConfirmClick = () => {
  loading.value = true
  const canvasDataUrl = cropper.getCanvasData()
  cropper.getCroppedCanvas().toBlob((blob) => {
    console.log('🚀【裁剪后的 blob】', blob)
    loading.value = true
  })
}
</script>

<style lang="scss" scoped></style>
