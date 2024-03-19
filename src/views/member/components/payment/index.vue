<template>
  <div>
    <pc-payment v-if="!isMobileTerminal" :payData="payData"></pc-payment>
    <mobile-payment v-else :payData="payData"></mobile-payment>
  </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible.js'
import pcPayment from '../pc-payment/index.vue'
import mobilePayment from '../mobile-payment/index.vue'

const props = defineProps({
  payData: {
    require: true,
    type: Object
  }
})
</script>

<style lang="scss" scoped></style>
