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
  console.log('initinit');
  const token = localStorage.getItem('token')
  console.log('token', token);
  if (!!token) {
    console.log('token11', token);
    userStore.setToken(token)
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
