<template>
  <div class="index-page">
    <Hero />
    <Clients />
    <Features />
    <Features02 />
    <Features03 />
    <TestimonialsCarousel />
    <Features04 />
    <Pricing />
    <Testimonials />
    <Cta />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/user'
import { get } from '~/utils/request'
import Hero from '../components/stellar/Hero.vue'
import Clients from '../components/stellar/Clients.vue'
import Features from '../components/stellar/Features.vue'
import Features02 from '../components/stellar/Features02.vue'
import Features03 from '../components/stellar/Features03.vue'
import TestimonialsCarousel from '../components/stellar/TestimonialsCarousel.vue'
import Features04 from '../components/stellar/Features04.vue'
import Pricing from '../components/stellar/PricingHome.vue'
import Testimonials from '../components/stellar/Testimonials.vue'
import Cta from '../components/stellar/Cta.vue'
const userStore = useUserStore()
const init = async () => {
  console.log('initinit');
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  if (!!userId) {
    userStore.setUserId(userId)
  }
  if (!!token) {
    console.log('token11', token);
    userStore.setToken(token)
    try {
      const userInfo = await get(`/user/query`)
      userStore.setUserInfo(userInfo)
    } catch (error: any) {
      console.log('获取用户信息失败', error);
    }
  } 
}
init()
</script>
