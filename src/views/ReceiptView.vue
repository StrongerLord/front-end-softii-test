<template>
  <main class="my-[2%] flex aspect-[1.35] h-[95%] flex-col pr-[2%] pl-[3%]">
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <!-- Segmento de Operaciones (Reemplaza TipsPaysSegment) -->
      <div class="flex h-full w-1/3 flex-col overflow-y-auto">
        <div class="flex flex-col space-y-4 p-[2%]">
          <!-- Grupo por hora -->
          <div
            v-for="(group, index) in groupedOperations"
            :key="index"
            class="rounded-xl bg-white p-4 shadow-md"
          >
            <!-- Header del grupo -->
            <div class="flex items-center justify-between border-b border-gray-200 pb-2">
              <h3 class="text-lg font-semibold text-gray-700">{{ formatHour(group.hour) }}</h3>
              <span class="text-primary text-lg font-bold">{{ formatCurrency(group.total) }}</span>
            </div>

            <!-- Métodos de pago -->
            <div class="mt-3 grid grid-cols-2 gap-2">
              <div
                v-for="(payment, pIndex) in group.payments"
                :key="pIndex"
                class="flex items-center rounded-lg bg-gray-50 p-3"
              >
                <div class="mr-3">
                  <IconCash v-if="payment.method.type === 'cash'" class="text-primary h-6 w-6" />
                  <IconCard v-else class="text-primary h-6 w-6" />
                </div>
                <div class="flex flex-col">
                  <span class="text-sm font-medium text-gray-600">
                    {{ payment.method.type === 'cash' ? 'Efectivo' : payment.method.information }}
                  </span>
                  <span class="text-primary text-sm font-bold">{{
                    formatCurrency(payment.quantity)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { fetchAllTips } from '@/helpers/fetchTips'
import { ref, onMounted } from 'vue'
import { formatCurrency } from '@/utils/currency'
import IconCash from '@/components/icons/IconCash.vue'
import IconCard from '@/components/icons/IconCard.vue'
import TipsCalculatorSegment from '@/components/tips/TipsCalculatorSegment.vue'
import TipsDivisorSegment from '@/components/tips/TipsDivisorSegment.vue'
import TipsFooter from '@/components/tips/TipsFooter.vue'
import TipsHeader from '@/components/tips/TipsHeader.vue'

interface Payment {
  method: {
    type: string
    information: string
  }
  quantity: number
  createdAt: string
  id: string
}

interface OperationGroup {
  hour: string
  payments: Payment[]
  total: number
}

const groupedOperations = ref<OperationGroup[]>([])

// Función para agrupar por hora
const groupByHour = (payments: Payment[]) => {
  const groupsMap = new Map<string, OperationGroup>()

  payments.forEach((payment) => {
    const date = new Date(payment.createdAt)
    const hour = `${date.getHours()}:00`

    if (!groupsMap.has(hour)) {
      groupsMap.set(hour, {
        hour,
        payments: [],
        total: 0,
      })
    }

    const group = groupsMap.get(hour)!
    group.payments.push(payment)
    group.total += payment.quantity
  })

  // Ordenar de más reciente a más antiguo
  groupedOperations.value = Array.from(groupsMap.values()).sort((a, b) => {
    return b.hour.localeCompare(a.hour)
  })
}

const formatHour = (hour: string) => {
  const [h] = hour.split(':')
  return `${h}:00 - ${parseInt(h) + 1}:00`
}

// Simulamos la carga de datos (reemplaza con tu fetch real)
const loadData = async () => {
  try {
    const mockData = await fetchAllTips()
    groupByHour(mockData)
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

onMounted(() => {
  loadData()
})
</script>
