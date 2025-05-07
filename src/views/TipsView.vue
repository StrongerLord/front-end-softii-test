<script setup lang="ts">
import { ref } from 'vue'
import TipsCalculatorSegment from '@/components/tips/TipsCalculatorSegment.vue'
import TipsDivisorSegment from '@/components/tips/TipsDivisorSegment.vue'
import TipsFooter from '@/components/tips/TipsFooter.vue'
import TipsHeader from '@/components/tips/TipsHeader.vue'
import TipsPaysSegment from '@/components/tips/TipsPaysSegment.vue'

const totalTips = ref(16)
const numberOfEmployees = ref(4)
const totalTipsPerEmployee = ref(4)

const calculateTips = (): void => {
  if (numberOfEmployees.value > 0) {
    totalTipsPerEmployee.value = parseFloat((totalTips.value / numberOfEmployees.value).toFixed(2))
  } else {
    totalTipsPerEmployee.value = 0
  }
}
</script>

<template>
  <main class="my-[2%] flex h-auto w-[95%] flex-col pr-[2%] pl-[3%]">
    <TipsHeader :total-tips="totalTips" />
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <TipsDivisorSegment
        :total-tips="totalTips"
        :number-of-employees="numberOfEmployees"
        :total-tips-per-employee="totalTipsPerEmployee"
      />
      <TipsCalculatorSegment />
      <TipsPaysSegment />
    </div>
    <TipsFooter />
  </main>
</template>
