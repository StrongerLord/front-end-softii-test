<template>
  <main class="my-[2%] flex h-auto w-[95%] flex-col pr-[2%] pl-[3%]">
    <TipsHeader />
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <TipsDivisorSegment />
      <TipsCalculatorSegment />
      <TipsPaysSegment />
    </div>
    <TipsFooter />
  </main>
</template>
<script setup lang="ts">
import TipsCalculatorSegment from '@/components/tips/TipsCalculatorSegment.vue'
import TipsDivisorSegment from '@/components/tips/TipsDivisorSegment.vue'
import TipsFooter from '@/components/tips/TipsFooter.vue'
import TipsHeader from '@/components/tips/TipsHeader.vue'
import TipsPaysSegment from '@/components/tips/TipsPaysSegment.vue'
</script>
