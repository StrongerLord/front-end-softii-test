<template>
  <div
    class="bg-background-primary flex h-fit w-1/3 flex-wrap rounded-3xl p-[2%] pb-[4%] transition-all"
    :class="{
      'bg-background-primary': !isCalculatorActive,
      'bg-tertiary border-primary border-2': isCalculatorActive,
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
              : isCalculatorActive
                ? formatCurrency(tempOrder.quantity)
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
              : handleIndividualTip(tempOrder.quantity, '-1')
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
              : handleIndividualTip(tempOrder.quantity, 1)
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
              : handleIndividualTip(tempOrder.quantity, 2)
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
              : handleIndividualTip(tempOrder.quantity, 3)
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
              : handleIndividualTip(tempOrder.quantity, 4)
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
              : handleIndividualTip(tempOrder.quantity, 5)
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
              : handleIndividualTip(tempOrder.quantity, 6)
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
              : handleIndividualTip(tempOrder.quantity, 7)
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
              : handleIndividualTip(tempOrder.quantity, 8)
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
              : handleIndividualTip(tempOrder.quantity, 9)
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
              : handleIndividualTip(tempOrder.quantity, '00')
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
              : handleIndividualTip(tempOrder.quantity, 0)
        "
        :disabled="!isCalculatorActive"
      >
        0
      </button>
      <button
        class="border-background-base bg-background-base aspect-square w-[60%] items-center justify-center rounded-xl border-1 text-2xl font-medium"
        @click="handleConfirmStage"
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
  remaining,
  totalTips,
  isCalculatorActive,
  numberOfEmployees,
  stage,
  nextStage,
  updateTotalTips,
  updateNumberOfEmployees,
  addOrder,
  tempOrder,
  setTempOrder,
  toggleCalculator,
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
  console.log(oldValue, addValue)
  let newQuantity: number

  if (addValue === '-1') {
    newQuantity = Number(String(oldValue).slice(0, -1))
  } else {
    newQuantity = Number(String(oldValue) + String(addValue))
  }

  setTempOrder({
    ...tempOrder.value,
    quantity: newQuantity,
  })
}

const handleConfirmStage = () => {
  if (stage.value === 1 && totalTips.value > 0) {
    nextStage()
  } else if (stage.value === 2 && numberOfEmployees.value > 0) {
    toggleCalculator(!isCalculatorActive)
    nextStage()
  } else if (stage.value >= 3) {
    if (tempOrder.value.quantity > remaining.value) {
      alert('La cantidad de propina no puede ser mayor a la cantidad total de propinas')
      return
    }
    if (tempOrder.value.quantity <= 0) {
      alert('La cantidad de propina no puede ser menor o igual a 0')
      return
    }
    toggleCalculator(!isCalculatorActive)
    addOrder(tempOrder.value)
    setTempOrder({ id: Date.now().toString(), method: { type: '', information: '' }, quantity: 0 })
  }
}
</script>
