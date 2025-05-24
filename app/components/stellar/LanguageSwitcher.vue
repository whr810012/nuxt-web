<template>
  <div class="relative" v-click-outside="closeDropdown">
    <button 
      @click="isOpen = !isOpen" 
      class="flex items-center px-3 py-1.5 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
      :class="{ 'bg-slate-700/30': isOpen }"
    >
      <span class="mr-1.5">{{ currentLocale.name }}</span>
      <svg 
        class="w-4 h-4 transition-transform duration-200" 
        :class="{ 'transform rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <transition name="dropdown">
      <div v-if="isOpen" class="absolute right-0 mt-1 py-1 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-xl z-50 overflow-hidden">
        <a 
          v-for="locale in availableLocales" 
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="flex items-center px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 cursor-pointer transition-colors duration-150"
          :class="{ 'bg-slate-700/30 text-white': locale.code === currentLocale.code }"
        >
          <span v-if="locale.code === currentLocale.code" class="mr-2 text-emerald-400">✓</span>
          <span v-else class="mr-2 opacity-0">✓</span>
          {{ locale.name }}
        </a>
      </div>
    </transition>
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
  if (code === locale.value) {
    isOpen.value = false
    return
  }
  
  isOpen.value = false
  await setLocale(code)
}

// 关闭下拉菜单
const closeDropdown = () => {
  isOpen.value = false
}

// 点击外部关闭指令
const vClickOutside = {
  mounted(el: any, binding: any) {
    el._clickOutside = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el._clickOutside)
  }
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
