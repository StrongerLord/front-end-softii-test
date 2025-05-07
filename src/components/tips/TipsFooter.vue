<template>
  <div class="flex w-full px-[4%]">
    <div class="flex w-1/2 flex-wrap items-center justify-between text-2xl">
      <p class="text-primary flex w-1/2">Total Pagado</p>
      <p class="text-primary flex w-1/2 justify-end">{{ formatCurrency(totalPaid) }}</p>
      <p class="flex w-auto">Restante por Pagar</p>
      <p class="flex w-auto justify-end">{{ formatCurrency(remaining) }}</p>
    </div>
    <div class="flex h-full w-1/2 items-center justify-end text-2xl">
      <button
        class="bg-primary h-full justify-center rounded-full px-[10%] text-white"
        :disabled="!canPay"
      >
        Pagar $1,500.00 en Propinas
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatCurrency } from '@/utils/currency'
import { useTipsCalculator } from '@/composables/useTipsCalculator'
const { totalPaid, remaining, canPay } = useTipsCalculator()
</script>
