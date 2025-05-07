<script lang="ts" setup>
import { formatCurrency } from '@/helpers/currency'
import IconErase from '@/components/icons/IconErase.vue'

defineProps({
  totalTips: {
    type: Number,
    required: true,
  },
  tipToggleActivate: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update-total-tips'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update-total-tips', Number(target.value))
}
</script>
<template>
  <div
    class="bg-background-primary flex h-fit w-1/3 flex-wrap rounded-3xl p-[2%] pb-[4%] transition-all"
    :class="{
      'bg-background-primary': !tipToggleActivate,
      'bg-tertiary border-primary border-2': tipToggleActivate,
    }"
  >
    <div class="border-background-base mx-[8%] flex w-full flex-row border-b-2">
      <input
        type="number"
        class="w-[92%] items-end py-[4%] text-right text-2xl text-black"
        disabled
        placeholder=""
        :value="formatCurrency(totalTips)"
      />
      <button class="w-[12%]">
        <IconErase />
      </button>
    </div>
    <div class="mx-[8%] grid w-full grid-cols-3 items-center justify-items-center gap-3 py-[5%]">
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="handleInput"
      >
        1
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        2
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        3
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        4
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        5
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        6
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        7
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        8
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        9
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        00
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
      >
        0
      </button>
      <button
        class="border-background-base bg-background-base aspect-square w-[60%] items-center justify-center rounded-xl border-1 text-2xl font-medium"
      >
        ✔️
      </button>
    </div>
  </div>
</template>
