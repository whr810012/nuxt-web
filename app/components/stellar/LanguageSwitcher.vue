<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="inline-flex items-center justify-center font-medium text-sm text-slate-300 hover:text-white transition duration-150 ease-in-out"
      @click="isOpen = !isOpen"
    >
      {{ currentLocale.name }}
      <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1" role="menu" aria-orientation="vertical">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          class="block w-full px-4 py-2 text-sm text-left text-slate-300 hover:text-white hover:bg-slate-700"
          role="menuitem"
          @click="switchLanguage(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { locale, locales } = useI18n()
const isOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.map((l: any) => ({
    code: l.code,
    name: l.name
  }))
})

const currentLocale = computed(() => {
  return availableLocales.value.find((l: any) => l.code === locale.value) || availableLocales.value[0]
})

const switchLanguage = (code: string) => {
  locale.value = code
  isOpen.value = false
}
</script>

<template>
  <div>
    <button @click="switchLanguage('en')">English</button>
    <button @click="switchLanguage('zh')">中文</button>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  methods: {
    switchLanguage(locale) {
      this.$i18n.setLocale(locale);
    }
  }
}
</script>