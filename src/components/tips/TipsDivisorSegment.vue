<template>
  <div>
    <!-- Total propinas -->
    <p>{{ formatCurrency(totalTips) }}</p>
    <button @click="toggleCalculator(true)" v-if="stage === 1">✏️</button>

    <!-- División -->
    <input
      v-if="stage === 2 && isCalculatorActive"
      type="number"
      :value="numberOfEmployees"
      @input="updateNumberOfEmployees(+($event.target as HTMLInputElement).value)"
    />
    <button v-if="stage === 2" @click="nextStage()">✔️</button>

    <!-- Métodos de pago -->
    <div v-if="stage === 3">
      <button
        @click="
          addOrder({
            id: Date.now().toString(),
            method: {
              type: 'cash',
              information: '',
            },
            quantity: totalTipsPerEmployee,
          })
        "
      >
        Efectivo {{ formatCurrency(totalTipsPerEmployee) }}
      </button>
      <!-- Más botones… -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTipsCalculator } from '@/composables/useTipsCalculator'
import { formatCurrency } from '@/utils/currency'

const {
  totalTips,
  totalTipsPerEmployee,
  numberOfEmployees,
  isCalculatorActive,
  stage,
  toggleCalculator,
  updateNumberOfEmployees,
  nextStage,
  addOrder,
} = useTipsCalculator()
</script>
