<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import AOS from 'aos'
import { useUserStore } from '~/store/user'
import 'aos/dist/aos.css'
import './assets/css/style.css'
const userStore = useUserStore()
console.log('app running...')
const init = async () => {
  const token = useCookie('token')
  if (token && (token as any).value) {
    userStore.setToken((token as any).value)
    try {
      const userInfo = await get('/user/query')
      userStore.setUserInfo(userInfo)
    } catch (error: any) {
      console.log('获取用户信息失败', error);
    }
  } 
}

onMounted(() => {
  init()
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
  }) 
})

</script>
