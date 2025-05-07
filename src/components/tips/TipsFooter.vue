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
        class="h-full justify-center rounded-full px-[10%]"
        :class="{
          'bg-primary text-white': canPay,
          'text-background-secondary border-background-secondary border-1 bg-white': !canPay,
        }"
        :disabled="!canPay"
        @click="() => fetchNewTip(orders)"
      >
        {{
          canPay
            ? 'Pagar ' + formatCurrency(totalTips) + ' en Propinas'
            : 'No hay Propinas por Pagar'
        }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { fetchNewTip } from '@/helpers/fetchTips'
import { formatCurrency } from '@/utils/currency'
import { useTipsCalculator } from '@/composables/useTipsCalculator'
const { totalPaid, remaining, canPay, totalTips, orders } = useTipsCalculator()
</script>
