<script setup lang="ts">
import IconCash from '../icons/IconCash.vue'
import { formatCurrency } from '@/utils/currency'

import { useTipsCalculator } from '@/composables/useTipsCalculator'
const { orders, removeOrder } = useTipsCalculator()
</script>
<template>
  <div class="scroll-tight flex w-1/3 flex-col space-y-[5%]">
    <p class="text-xl">Pagos</p>
    <div class="h-[75%] space-y-[5%] overflow-visible overflow-y-scroll p-[1%]">
      <div class="h-auto w-full space-y-[2%]">
        <div
          v-for="order in orders"
          :key="String(order.id)"
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p class="w-[50%]">
            {{ order.method.type === 'cash' ? 'Efectivo' : order.method.information }}
          </p>
          <p>{{ formatCurrency(order.quantity) }}</p>
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full text-red-500"
            @click="removeOrder(order.id)"
          >
            X
          </button>
        </div>
        <div
          v-if="!orders"
          :key="0"
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-full items-center justify-center">
            <p class="text-left">Sin pagos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
