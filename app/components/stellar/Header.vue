<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="flex-1">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="Cruip">
            <img class="max-w-none" src="@/assets/images/logo.svg" width="38" height="38" alt="Stellar">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="flex grow justify-center flex-wrap items-center">
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/about">{{ $t('nav.about') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/integrations">{{ $t('nav.integrations') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/pricing">{{ $t('nav.pricing') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/customers">{{ $t('nav.customers') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/changelog">{{ $t('nav.changelog') }}</router-link>
            </li>
          </ul>

        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center">
          <li>
            <router-link class="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out" to="/signin">{{ $t('auth.signIn') }}</router-link>
          </li>
          <li class="ml-4">
            <LanguageSwitcher />
          </li>
          <li class="ml-6">
            <router-link class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" to="/signup">
              <span class="relative inline-flex items-center">
                {{ $t('auth.signUp') }} <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </span>
            </router-link>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="md:hidden flex items-center ml-4">

          <!-- Hamburger button -->
          <button 
            class="group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition" 
            ref="hamburger" 
            aria-controls="mobile-nav" 
            :aria-expanded="mobileNavOpen" 
            @click.stop="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0" y="7" width="16" height="2" rx="1"></rect>
              <rect class="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]" y="7" width="16" height="2" rx="1"></rect>
              <rect class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0" y="7" width="16" height="2" rx="1"></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" ref="mobileNav" :style="[mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 }]" @click.outside="expanded = false" @keydown.escape.window="expanded = false">
            <ul class="border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/about">{{ $t('nav.about') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/integrations">{{ $t('nav.integrations') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/pricing">{{ $t('nav.pricing') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/customers">{{ $t('nav.customers') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/changelog">{{ $t('nav.changelog') }}</router-link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'Header',
  setup() {

    const mobileNavOpen = ref(false)
    const mobileNav = ref(null)
    const hamburger = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.value || mobileNav.value.contains(target) || hamburger.value.contains(target)) return
      mobileNavOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen.value || keyCode !== 27) return
      mobileNavOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      mobileNavOpen,
      mobileNav,
      hamburger,
    }
  }
}
</script>