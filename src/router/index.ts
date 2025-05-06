import { createRouter, createWebHistory } from 'vue-router'
import TipView from '@/views/TipView.vue'
import ReceiptView from '@/views/ReceiptView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/divide-tips',
      name: 'divide-tips',
      component: TipView,
    },
    {
      path: '/generate-receipt',
      name: 'generate-receipt',
      component: ReceiptView,
    },
  ],
})

export default router
