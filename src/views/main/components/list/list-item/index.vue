<template>
  <div class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1">
    <div
      class="relative w-full rounded cursor-zoom-in group"
      :style="{ backgroundColor: createRandomRGB() }"
      @click="onToPinsClick"
    >
      <!-- 图片 -->
      <img
        v-lazy
        ref="imgTarget"
        class="w-full rounded bg-transparent"
        :src="data.photo"
        v-if="isOpenPicturePreReading"
      />
      <img
        v-lazy
        ref="imgTarget"
        v-if="!isOpenPicturePreReading"
        class="w-full rounded bg-transparent"
        :src="data.photo"
        :style="{ height: (width / data.photoWidth) * data.photoHeight + 'px' }"
      />
      <!-- 遮罩层 -->
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
      >
        <!-- 分享 -->
        <m-button class="absolute top-1.5 left-1.5">分享</m-button>
        <!-- 点赞 -->
        <m-button
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass="fill-bg-zinc-900 dark:fill-bg-zinc-900"
        ></m-button>
        <!-- 下载 -->
        <m-button
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          icon="download"
          size="small"
          iconClass="fill-bg-zinc-900 dark:fill-bg-zinc-900"
          @click="onDownload"
        ></m-button>
        <!-- 全屏 -->
        <m-button
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          icon="full"
          size="small"
          iconClass="fill-bg-zinc-900 dark:fill-bg-zinc-900"
          @click="onImgFullScreen"
        ></m-button>
      </div>
    </div>
    <!-- 标题 -->
    <p class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 px-1">
      {{ data.title }}
    </p>
    <!-- 作者 -->
    <div class="flex items-center mt-1 px-1">
      <img class="h-2 w-2 rounded-full" :src="data.avatar" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { saveAs } from 'file-saver'
import { useFullscreen, useElementBounding } from '@vueuse/core'
import { IS_OPEN_PICTURE_PRE_READING } from '@/constants/index.js'
import { createRandomRGB } from '@/utils/color.js'
import { message } from '@/libs/index.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number
  }
})

const emits = defineEmits(['click'])

// 是否使用图片预加载 如果数据中有返回图片的宽高，则不需要预加载也可以计算高度
const isOpenPicturePreReading = IS_OPEN_PICTURE_PRE_READING

// 点击下载图片
const onDownload = () => {
  message('success', '图片开始下载')
  setTimeout(() => {
    saveAs(props.data.photoDownLink)
  }, 500)
}

// 图片元素
const imgTarget = ref(null)

// 生成全屏方法
const { enter: onImgFullScreen } = useFullscreen(imgTarget)

// 点击进入详情
const onToPinsClick = () => {
  emits('click', {
    id: props.data.id,
    localtion: imgContainerCenter()
  })
}

/**
 * pins 跳转处理，记录图片的中心点（X|Y位置 + 宽|高的一半）
 */
// const {
//   x: imgContainerX,
//   y: imgContainerY,
//   width: imgContainerWidth,
//   height: imgContainerHeight
// } = useElementBounding(imgTarget)
// const imgContainerCenter = computed(() => {
//   return {
//     translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
//     translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2)
//   }
// })

/**
 * issue：https://coding.imooc.com/learn/questiondetail/270316.html
 * 查看 vueuse 的源代码（https://github.com/vueuse/vueuse/blob/main/packages/core/useElementBounding/index.ts）发现 useElementBounding 方法是仅在 window 的 scroll 时被触发，所以在移动端状态下会导致 useElementBounding 的返回值不再具备响应性。从而计算失败。
 * 所以我们可以修改 imgContainerCenter 为一个方法，利用 el.getBoundingClientRect 方法获取动态的 x、y、width、height , 从而进行正确的计算。
 */
const imgContainerCenter = () => {
  const {
    x: imgContainerX,
    y: imgContainerY,
    width: imgContainerWidth,
    height: imgContainerHeight
  } = imgTarget.value.getBoundingClientRect()
  return {
    translateX: parseInt(imgContainerX + imgContainerWidth / 2),
    translateY: parseInt(imgContainerY + imgContainerHeight / 2)
  }
}
</script>

<style lang="scss" scoped></style>
