<template>
  <main class="my-[2%] flex h-auto w-[95%] flex-col pr-[2%] pl-[3%]">
    <TipsHeader :total-cash="totalCash" />
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <TipsDivisorSegment
        :tip-toggle-activate="tipToggleActivate"
        :total-tips="totalTips"
        :number-of-employees="numberOfEmployees"
        :total-tips-per-employee="totalTipsPerEmployee"
        @start-tip-process="(newValue) => (tipToggleActivate = newValue)"
      />
      <TipsCalculatorSegment
        :total-tips="totalTips"
        :tip-toggle-activate="tipToggleActivate"
        :number-of-employees="numberOfEmployees"
        :total-tips-per-employee="totalTipsPerEmployee"
        @update-total-tips="
          (value: number) => {
            totalTips = value
            calculateTips()
          }
        "
        @update-number-of-employees="
          (value: number) => {
            numberOfEmployees = value
            calculateTips()
          }
        "
      />
      <TipsPaysSegment />
    </div>
    <TipsFooter :total-paid="totalPaid" :total-tips="totalTips" />
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TipsCalculatorSegment from '@/components/tips/TipsCalculatorSegment.vue'
import TipsDivisorSegment from '@/components/tips/TipsDivisorSegment.vue'
import TipsFooter from '@/components/tips/TipsFooter.vue'
import TipsHeader from '@/components/tips/TipsHeader.vue'
import TipsPaysSegment from '@/components/tips/TipsPaysSegment.vue'
import type { TipsToPay } from '@/types/TipsToPay'

const totalCash = ref(5500)
const totalTips = ref(1828)
const numberOfEmployees = ref(0)
const totalTipsPerEmployee = ref(0)
const tipToggleActivate = ref(false)
const totalPaid = ref(0)
const orders = ref<TipsToPay[]>()

const calculateTips = (): void => {
  if (numberOfEmployees.value > 0) {
    totalTipsPerEmployee.value = parseFloat((totalTips.value / numberOfEmployees.value).toFixed(2))
  } else {
    totalTipsPerEmployee.value = 0
  }
}
calculateTips()
</script>
