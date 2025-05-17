<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen" 
      class="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
    >
      {{ currentLocale.name }}
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <!-- 下拉菜单 -->
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50">
      <a 
        v-for="locale in availableLocales" 
        :key="locale.code"
        @click="switchLanguage(locale.code)"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
      >
        {{ locale.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

// 可用语言列表
const availableLocales = computed(() => {
  return [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' }
  ]
})

// 当前语言
const currentLocale = computed(() => {
  return availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0]
})

// 切换语言方法
const switchLanguage = (code: string) => {
  isOpen.value = false
  // 保存用户语言偏好
  const cookie = useCookie('i18n_redirected')
  console.log(cookie);
  cookie.value = code
}

</script>