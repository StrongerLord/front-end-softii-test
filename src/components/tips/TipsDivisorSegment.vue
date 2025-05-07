<script setup lang="ts">
import IconPencil from '@/components/icons/IconPencil.vue'
import IconWallet from '@/components/icons/IconWallet.vue'
import IconCash from '@/components/icons/IconCash.vue'
import IconCard from '@/components/icons/IconCard.vue'
import { formatCurrency } from '@/helpers/currency'
defineProps({
  totalTips: {
    type: Number,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
  },
  totalTipsPerEmployee: {
    type: Number,
    required: true,
  },
  tipToggleActivate: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['start-tip-process'])
const handleStartTipProcess = (value: boolean) => {
  emit('start-tip-process', Boolean(value))
}
</script>

<template class="flex-col justify-between">
  <div class="flex h-full w-1/3 flex-col items-start justify-start space-y-[3%] text-xl">
    <div class="w-full flex-wrap px-[15%]">
      <p class="text-md text-primary w-full text-sm font-medium">Total de Propinas</p>
      <div class="mt-[2%] flex flex-row items-center justify-between">
        <p
          class="text-primary bg-secondary w-fit rounded-md pt-[2%] pr-[4%] pb-[5%] pl-[6%] text-4xl"
        >
          {{ formatCurrency(totalTips) }}
        </p>
        <button class="w-[11%]" @click="handleStartTipProcess(!tipToggleActivate)">
          <IconPencil />
        </button>
      </div>
    </div>
    <p>¿Entre cuántos quieres dividir las Propinas?</p>
    <div class="flex w-full flex-row items-center justify-between">
      <input
        :value="numberOfEmployees"
        type="number"
        class="border-background-base w-[30%] rounded-2xl border-2 px-[10%] py-[2%] text-2xl text-black"
        placeholder="#"
        disabled
      />
      <p class="text-primary mt-[2%] w-[70%] items-end px-[5%] text-right text-xl">
        {{ formatCurrency(totalTipsPerEmployee) }} x Persona
      </p>
    </div>
    <div class="mt-[15%] space-y-[3%]">
      <div class="flex flex-row items-center justify-start">
        <div class="w-[8%]">
          <IconWallet />
        </div>
        <p class="pl-[4%]">Elige el Método de Pago</p>
      </div>
      <div class="flex flex-wrap items-center p-[2%]">
        <button
          class="border-background-base m-[1%] flex h-24 w-[48%] flex-col items-center justify-center rounded-2xl border-1 shadow-lg shadow-black/20"
        >
          <div class="w-[20%]">
            <IconCash />
          </div>
          <p class="text-xs">Efectivo</p>
        </button>
        <button
          class="border-background-base m-[1%] flex h-24 w-[48%] flex-col items-center justify-center rounded-2xl border-1 shadow-lg shadow-black/20"
        >
          <div class="w-[20%]">
            <IconCard />
          </div>
          <p class="text-xs">BBVA 1234</p>
        </button>
        <button
          class="border-background-base m-[1%] flex h-24 w-[48%] flex-col items-center justify-center rounded-2xl border-1 shadow-lg shadow-black/20"
        >
          <div class="w-[20%]">
            <IconCard />
          </div>
          <p class="text-xs">Santander 1234</p>
        </button>
      </div>
    </div>
  </div>
</template>
