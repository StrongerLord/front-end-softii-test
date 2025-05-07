// composables/useTipsCalculator.ts
import { ref, computed, watch } from 'vue'
import type { Order } from '@/types/Order'

const totalCash = ref(5500)
const totalTips = ref(1828)
const numberOfEmployees = ref(0)
const totalTipsPerEmployee = ref(0)
const isCalculatorActive = ref(false)
const orders = ref<Order[]>([])
const stage = ref(1)

// 1.1 recálculo de la propina por persona
watch([totalTips, numberOfEmployees], () => {
  totalTipsPerEmployee.value =
    numberOfEmployees.value > 0
      ? parseFloat((totalTips.value / numberOfEmployees.value).toFixed(2))
      : 0
})

// 1.2 total pagado, derivado de las órdenes
const totalPaid = computed(() => orders.value.reduce((sum, o) => sum + o.quantity, 0))
// 1.3 restante por pagar
const remaining = computed(() => totalTips.value - totalPaid.value)

// 1.4 habilitar botón “Pagar” solo cuando no quede nada o stage sea 4
const canPay = computed(
  () => stage.value === 4 || (totalPaid.value >= totalTips.value && orders.value.length > 0),
)

function toggleCalculator(on: boolean) {
  isCalculatorActive.value = on
}

function addOrder(order: Order) {
  orders.value.push(order)
  stage.value = 4
}

function removeOrder(orderId: string) {
  orders.value = orders.value.filter((o) => o.id !== orderId)
}

function updateTotalTips(v: number) {
  totalTips.value = v
}

function updateNumberOfEmployees(v: number) {
  numberOfEmployees.value = v
}

function nextStage() {
  stage.value++
}

export function useTipsCalculator() {
  return {
    totalCash,
    totalTips,
    numberOfEmployees,
    totalTipsPerEmployee,
    isCalculatorActive,
    stage,
    orders,
    totalPaid,
    remaining,
    canPay,
    toggleCalculator,
    addOrder,
    removeOrder,
    updateTotalTips,
    updateNumberOfEmployees,
    nextStage,
  }
}
