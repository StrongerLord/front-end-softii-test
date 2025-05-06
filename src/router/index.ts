import { createRouter, createWebHistory } from 'vue-router'
import TipsView from '@/views/TipsView.vue'
import ReceiptView from '@/views/ReceiptView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/divide-tips',
      name: 'divide-tips',
      component: TipsView,
    },
    {
      path: '/generate-receipt',
      name: 'generate-receipt',
      component: ReceiptView,
    },
  ],
})

export default router
