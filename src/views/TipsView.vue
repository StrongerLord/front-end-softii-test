<script setup lang="ts">
import { ref } from 'vue'
import TipsCalculatorSegment from '@/components/tips/TipsCalculatorSegment.vue'
import TipsDivisorSegment from '@/components/tips/TipsDivisorSegment.vue'
import TipsFooter from '@/components/tips/TipsFooter.vue'
import TipsHeader from '@/components/tips/TipsHeader.vue'
import TipsPaysSegment from '@/components/tips/TipsPaysSegment.vue'

const totalTips = ref(0)
const numberOfEmployees = ref(0)
const totalTipsPerEmployee = ref(0)
const tipToggleActivate = ref(false)

const calculateTips = (): void => {
  if (numberOfEmployees.value > 0) {
    totalTipsPerEmployee.value = parseFloat((totalTips.value / numberOfEmployees.value).toFixed(2))
  } else {
    totalTipsPerEmployee.value = 0
  }
}
calculateTips()
</script>

<template>
  <main class="my-[2%] flex h-auto w-[95%] flex-col pr-[2%] pl-[3%]">
    <TipsHeader :total-tips="totalTips" />
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <TipsDivisorSegment
        @start-tip-process="(newValue) => (tipToggleActivate = newValue)"
        :tip-toggle-activate="tipToggleActivate"
        :total-tips="totalTips"
        :number-of-employees="numberOfEmployees"
        :total-tips-per-employee="totalTipsPerEmployee"
      />
      <TipsCalculatorSegment :total-tips="totalTips" :tip-toggle-activate="tipToggleActivate" />
      <TipsPaysSegment />
    </div>
    <TipsFooter />
  </main>
</template>
