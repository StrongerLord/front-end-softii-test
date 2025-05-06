<script setup lang="ts">
import IconPencil from '@/components/icons/IconPencil.vue'
import IconWallet from '@/components/icons/IconWallet.vue'
</script>

<template class="flex-col justify-between">
  <div class="flex h-full w-1/3 flex-col items-start justify-start space-y-[3%] text-xl">
    <div class="w-full flex-wrap px-[15%]">
      <p class="text-md text-primary w-full text-sm">Total de Propinas</p>
      <div class="mt-[2%] flex flex-row items-center justify-between">
        <p
          class="text-primary bg-secondary w-fit rounded-md pt-[2%] pr-[4%] pb-[5%] pl-[6%] text-4xl"
        >
          $1,500.00
        </p>
        <button class="m-[1%] ml-[4%]">
          <IconPencil />
        </button>
      </div>
    </div>
    <p>¿Entre cuántos quieres dividir las Propinas?</p>
    <div class="flex w-full flex-row items-center justify-between">
      <input
        type="number"
        class="border-background-base w-[30%] rounded-2xl border-2 px-[10%] py-[2%] text-2xl text-black"
        placeholder="#"
      />
      <p class="text-primary mt-[2%] w-[70%] items-end px-[5%] text-right text-xl">
        $0.00 x Persona
      </p>
    </div>
    <div class="space-y-[3%]">
      <div class="flex flex-row items-center justify-start">
        <IconWallet />
        <p class="pl-[4%]">Elige el método de pago</p>
      </div>
      <div class="flex flex-wrap items-center p-[2%]">
        <button class="border-background-base m-[1%] h-24 w-[48%] rounded-2xl border-1">a</button>
        <button class="border-background-base m-[1%] h-24 w-[48%] rounded-2xl border-1">a</button>
        <button class="border-background-base m-[1%] h-24 w-[48%] rounded-2xl border-1">a</button>
        <button class="border-background-base m-[1%] h-24 w-[48%] rounded-2xl border-1">a</button>
      </div>
    </div>
  </div>
</template>
