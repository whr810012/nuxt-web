<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/css/style.css'
console.log('app running...')

onMounted(() => {
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
  })
})

</script>
