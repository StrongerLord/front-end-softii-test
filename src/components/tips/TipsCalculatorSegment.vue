<template>
  <div
    class="bg-background-primary flex h-fit w-1/3 flex-wrap rounded-3xl p-[2%] pb-[4%] transition-all"
    :class="{
      'bg-background-primary':
        (!isCalculatorActive && stage < 3) || (isCalculatorActive && stage === 3),
      'bg-tertiary border-primary border-2':
        (isCalculatorActive && stage < 3) || (!isCalculatorActive && stage === 3),
    }"
  >
    <div class="border-background-base mx-[8%] flex w-full flex-row border-b-2">
      <div class="flex w-[5%] items-center text-2xl">
        {{ stage === 1 ? '$' : stage === 2 ? '#' : '$' }}
      </div>
      <input
        type="text"
        class="w-[70%] items-end py-[4%] text-right text-2xl text-black"
        disabled
        placeholder=""
        :value="
          stage === 1 && isCalculatorActive
            ? formatCurrency(totalTips)
            : stage === 2 && isCalculatorActive
              ? numberOfEmployees
              : stage === 3 && !isCalculatorActive
                ? formatCurrency(totalTipsPerEmployee)
                : ''
        "
      />
      <button
        class="ml-[15%] w-[12%]"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, '-1')
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, '-1')
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        <IconErase />
      </button>
    </div>
    <div class="mx-[8%] grid w-full grid-cols-3 items-center justify-items-center gap-3 py-[5%]">
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 1)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 1)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        1
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 2)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 2)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        2
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 3)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 3)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        3
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 4)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 4)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        4
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 5)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 5)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        5
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 6)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 6)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        6
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(numberOfEmployees, 7)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 7)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        7
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(numberOfEmployees, 8)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 8)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        8
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 9)
            : stage === 2
              ? handleInputNumberOfEmployees(totalTips, 9)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        9
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, '00')
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, '00')
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        00
      </button>
      <button
        class="border-background-base aspect-square w-full rounded-xl border-1 bg-white text-4xl font-medium"
        @click="
          stage === 1
            ? handleInputTotalTips(totalTips, 0)
            : stage === 2
              ? handleInputNumberOfEmployees(numberOfEmployees, 0)
              : stage === 3
                ? handleIndividualTip(totalTipsPerEmployee, 0)
                : ''
        "
        :disabled="!isCalculatorActive"
      >
        0
      </button>
      <button
        class="border-background-base bg-background-base aspect-square w-[60%] items-center justify-center rounded-xl border-1 text-2xl font-medium"
        @click="nextStage()"
      >
        ✔️
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { formatCurrency } from '@/utils/currency'
import IconErase from '@/components/icons/IconErase.vue'
import { useTipsCalculator } from '@/composables/useTipsCalculator'
const {
  totalTipsPerEmployee,
  totalTips,
  isCalculatorActive,
  numberOfEmployees,
  stage,
  nextStage,
  updateTotalTips,
  updateNumberOfEmployees,
} = useTipsCalculator()

const handleInputTotalTips = (oldValue: number, addValue: number | string) => {
  if (addValue === '-1') {
    updateTotalTips(Number(String(oldValue).slice(0, -1)))
    return
  }
  updateTotalTips(Number(String(oldValue) + String(addValue)))
}

const handleInputNumberOfEmployees = (oldValue: number, addValue: number | string) => {
  if (addValue === '-1') {
    updateNumberOfEmployees(Number(String(oldValue).slice(0, -1)))
    return
  }
  updateNumberOfEmployees(Number(String(oldValue) + String(addValue)))
}

const handleIndividualTip = (oldValue: number, addValue: number | string) => {
  if (addValue === '-1') {
    // emit('update-total-tips', String(oldValue).slice(0, -1))
    return
  }
  // emit('update-total-tips', Number(String(oldValue) + String(addValue)))
}
</script>
