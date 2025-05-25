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
useHead({
  title: '智旅星途',
})
import { useUserStore } from '~/store/user'
import { get } from '~/utils/request'
const userStore = useUserStore()
const init = async () => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  if (!!token) {
    console.log('token11', token)
    userStore.setToken(token)
    try {
      console.log('开始请求用户信息')
      let userInfo = await get(`/user/query`)
      if (userInfo.email) {
        userInfo.email = decrypt(userInfo.email)
      }
      if (userInfo.phonenumber) {
        userInfo.phonenumber = decrypt(userInfo.phonenumber)
      }
      console.log('userInfo 响应数据:', userInfo);
      userStore.setUserInfo(userInfo)
      console.log('存储后的用户信息:', userStore.getUserInfo);
    } catch (error: any) {
      console.log('获取用户信息失败', error);
      // 打印更详细的错误信息
      if (error.response) {
        // 服务器响应了，但状态码不是2xx
        console.log('错误状态:', error.response.status);
        console.log('错误数据:', error.response.data);
      } else if (error.request) {
        // 请求发出但没有收到响应
        console.log('没有收到响应:', error.request);
      } else {
        // 设置请求时发生错误
        console.log('请求错误:', error.message);
      }
    }
  } 
}
onMounted(async() => {
  await nextTick()
  init()
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 500,
    easing: 'ease-out-cubic',
  })
})

</script>
