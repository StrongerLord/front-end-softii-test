<script setup lang="ts">
import { formatCurrency } from '@/utils/currency'
import IconBackArrow from '@/components/icons/IconBackArrow.vue'
import { useTipsCalculator } from '@/composables/useTipsCalculator'
const { totalCash } = useTipsCalculator()
</script>

<template>
  <header
    class="border-background-base mr-[1%] flex h-[12%] w-full flex-row items-center justify-start border-b-1 pb-[2%]"
  >
    <RouterLink to="/" class="flex w-[9%] items-center">
      <div class="mr-[10%] w-[20%]">
        <IconBackArrow />
      </div>
      <p class="text-primary text-xs">Atrás</p>
    </RouterLink>
    <div class="flex flex-grow">
      <p class="text-2xl text-black">Pago de Propinas</p>
    </div>
    <div class="flex w-[22%] flex-col items-end">
      <p class="text-md text-primary -mt-2">Efectivo en Caja</p>
      <p class="text-primary bg-secondary rounded-md pt-[2%] pr-[4%] pb-[5%] pl-[6%] text-4xl">
        {{ formatCurrency(totalCash) }}
      </p>
    </div>
  </header>
</template>
