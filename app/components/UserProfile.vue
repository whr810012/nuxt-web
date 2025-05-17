<template>
  <div class="user-profile p-4">
    <div v-if="isLoggedIn" class="text-slate-300">
      <h2 class="text-xl font-semibold mb-4">用户信息</h2>
      <div class="space-y-2">
        <p>用户名: {{ userInfo?.username }}</p>
        <button 
          @click="handleLogout"
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          退出登录
        </button>
      </div>
    </div>
    <div v-else class="text-slate-400">
      <p>请先登录</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const isLoggedIn = computed(() => userStore.getLoginStatus)
const userInfo = computed(() => userStore.getUserInfo)

const handleLogout = () => {
  userStore.logout()
}
</script>