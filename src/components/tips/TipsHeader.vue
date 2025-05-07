<script setup lang="ts">
import IconBackArrow from '../icons/IconBackArrow.vue'
defineProps({
  totalTips: {
    type: Number,
    required: true,
  },
})

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value)
}
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
      <p class="text-md -mt-2">Efectivo en Caja</p>
      <p class="text-4xl">{{ formatCurrency(totalTips) }}</p>
    </div>
  </header>
</template>
