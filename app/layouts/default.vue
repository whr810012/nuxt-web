<template>
  <div class="default-layout flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/stellar/Header.vue'
import Footer from '@/components/stellar/Footer.vue'
</script>
