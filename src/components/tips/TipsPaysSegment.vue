<script setup lang="ts">
import IconCash from '../icons/IconCash.vue'

defineProps({
  title: {
    type: String,
    default: 'Pagos',
  },
})
</script>
<template>
  <div class="scroll-tight flex w-1/3 flex-col space-y-[5%]">
    <p class="text-xl">Pagos</p>
    <div class="h-[75%] space-y-[5%] overflow-visible overflow-y-scroll p-[1%]">
      <div class="h-auto w-full space-y-[2%]">
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
        <div
          class="border-background-base flex h-16 flex-row items-center justify-between rounded-2xl border-1 px-[2%] shadow-md shadow-black/15"
        >
          <div class="ml-[5%] w-[8%] items-center justify-center">
            <IconCash />
          </div>
          <p>Efectivo</p>
          <p>$300.00</p>
          <button class="flex h-10 w-10 items-center justify-center rounded-full text-red-500">
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
