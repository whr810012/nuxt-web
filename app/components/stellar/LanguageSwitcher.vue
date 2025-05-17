<template>
  <div class="relative">
    <button 
      @click="isOpen = !isOpen" 
      class="flex items-center text-sm font-medium text-slate-200 hover:text-white transition-colors duration-150"
    >
      {{ currentLocale.name }}
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-xl z-50">
      <a 
        v-for="locale in availableLocales" 
        :key="locale.code"
        @click="switchLanguage(locale.code)"
        class="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 cursor-pointer transition-colors duration-150"
      >
        {{ locale.name }}
      </a>
    </div>
  </div>
</template>


<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

// 可用语言列表
const availableLocales = computed(() => {
  return locales.value.map(l => {
    return { 
      code: l.code, 
      name: l.name 
    }
  })
})

// 当前语言
const currentLocale = computed(() => {
  return availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0]
})

// 切换语言方法
const switchLanguage = async (code: string) => {
  console.log('切换语言', code)
  isOpen.value = false
  await setLocale(code)
}
</script>
