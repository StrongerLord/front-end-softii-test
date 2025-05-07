<script lang="ts" setup>
import IconTip from '@/components/icons/IconTip.vue'
import IconReceipt from '@/components/icons/IconReceipt.vue'
import { useRoute } from 'vue-router'
defineOptions({
  name: 'AppNavbar',
})
const route = useRoute()
const isActive = (path: string) => {
  return route.path === path
}
</script>
<template>
  <nav class="flex h-full w-[5%] flex-col items-center border-r-1 border-zinc-300 py-[1%]">
    <button>
      <RouterLink to="/">
        <img alt="Vue logo" class="ml-[15%] w-[70%]" src="@/assets/softii-icon.jpg" />
      </RouterLink>
    </button>
    <div class="flex h-[50%] flex-col items-center justify-center space-y-[20%]">
      <button class="w-[80%]">
        <RouterLink to="/divide-tips"><IconTip :active="isActive('/divide-tips')" /></RouterLink>
      </button>
      <button class="w-[80%]">
        <RouterLink to="/generate-receipt"
          ><IconReceipt :active="isActive('/generate-receipt')"
        /></RouterLink>
      </button>
    </div>
  </nav>
</template>
