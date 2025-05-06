<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import IconTip from '@/components/icons/IconTip.vue'
import IconReceipt from '@/components/icons/IconReceipt.vue'

defineOptions({
  name: 'AppLayout',
})
</script>
<template>
  <div class="flex h-screen w-full">
    <nav class="flex h-[100%] w-[5%] flex-col items-center border-r-1 border-zinc-300 py-3">
      <button>
        <RouterLink to="/">
          <img alt="Vue logo" class="w-11" src="@/assets/softii-icon.jpg" />
        </RouterLink>
      </button>
      <div class="flex h-[40%] flex-col items-center justify-center space-y-8">
        <button>
          <RouterLink to="/divide-tips"><IconTip /></RouterLink>
        </button>
        <button>
          <RouterLink to="/generate-receipt"><IconReceipt /></RouterLink>
        </button>
      </div>
    </nav>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <RouterView />
  </div>
</template>
