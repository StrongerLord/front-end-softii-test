<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
defineOptions({
  name: 'AppLayout',
})
</script>
<template>
  <div class="flex h-screen w-full">
    <Navbar />
    <RouterView />
  </div>
</template>
