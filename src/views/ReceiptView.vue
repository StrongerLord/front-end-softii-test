<template>
  <main class="my-[2%] flex aspect-[1.35] h-[95%] flex-col pr-[2%] pl-[3%]">
    <div class="flex h-[70%] w-full flex-row space-x-[2%] py-[2%]">
      <div class="flex h-full w-1/3 flex-col overflow-y-auto">
        <div class="flex flex-col space-y-4 p-[2%]">
          <div
            v-for="(group, index) in groupedOperations"
            :key="index"
            class="rounded-xl bg-white p-4 shadow-md"
          >
            <div class="flex items-center justify-between border-b border-gray-200 pb-2">
              <h3 class="text-lg font-semibold text-gray-700">{{ group.timeRange }}</h3>
              <span class="text-primary text-lg font-bold">{{ formatCurrency(group.total) }}</span>
            </div>
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
  timeRange: string
  payments: Payment[]
  total: number
}

const groupedOperations = ref<OperationGroup[]>([])

const groupByTimeWindow = (payments: Payment[]) => {
  if (payments.length === 0) return []

  const sortedPayments = [...payments].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )

  const groups: OperationGroup[] = []
  let currentGroup: Payment[] = []
  let groupStartTime: Date | null = null

  sortedPayments.forEach((payment, index) => {
    const paymentTime = new Date(payment.createdAt)

    if (!groupStartTime) {
      groupStartTime = paymentTime
      currentGroup.push(payment)
    } else {
      const timeDiff = paymentTime.getTime() - groupStartTime.getTime()

      if (timeDiff <= 120000) {
        currentGroup.push(payment)
      } else {
        groups.push(createGroup(currentGroup, groupStartTime))
        currentGroup = [payment]
        groupStartTime = paymentTime
      }
    }
    if (index === sortedPayments.length - 1) {
      groups.push(createGroup(currentGroup, groupStartTime!))
    }
  })

  return groups.sort(
    (a, b) =>
      new Date(b.payments[0].createdAt).getTime() - new Date(a.payments[0].createdAt).getTime(),
  )
}

const createGroup = (payments: Payment[], startTime: Date): OperationGroup => {
  const endTime = new Date(startTime.getTime() + 120000)

  return {
    timeRange: `${formatTime(startTime)} - ${formatTime(endTime)}`,
    total: payments.reduce((sum, p) => sum + p.quantity, 0),
    payments,
  }
}

const formatTime = (date: Date) => {
  return date
    .toLocaleTimeString('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .replace(/AM|PM/, '')
}

const loadData = async () => {
  try {
    const data = await fetchAllTips()
    groupedOperations.value = groupByTimeWindow(data)
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

onMounted(() => {
  loadData()
})
</script>
