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
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/about">{{ $t('nav.about') }}</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/integrations">{{ $t('nav.integrations') }}</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/pricing">{{ $t('nav.pricing') }}</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/customers">{{ $t('nav.customers') }}</router-link>
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/changelog">{{ $t('nav.changelog') }}</router-link>
            </li>
            <!-- <li>
              <div class="language-switcher flex items-center">
                <router-link class="lang-link font-medium text-sm transition duration-200 ease-in-out px-2"
                  :class="!$route.path.includes('/en') ? 'text-white' : 'text-slate-400 hover:text-slate-200'" to="/">
                  中文
                </router-link>
                <span class="text-slate-500 text-sm">|</span>
                <router-link class="lang-link font-medium text-sm transition duration-200 ease-in-out px-2"
                  :class="$route.path.includes('/en') ? 'text-white' : 'text-slate-400 hover:text-slate-200'" to="/en">
                  English
                </router-link>
              </div>
            </li> -->
          </ul>

        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center">
          <template v-if="!userStore.getUserInfo?.username">
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                to="/signin">{{ $t('auth.signIn') }}</router-link>
            </li>
            <li class="ml-6">
              <router-link
                class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                to="/signup">
                <span class="relative inline-flex items-center">
                  {{ $t('auth.signUp') }} <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </router-link>
            </li>
          </template>
          <template v-else>
            <li class="relative">
              <div
                @click="toggleDropdown"
                class="flex items-center cursor-pointer font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out">
                <span>{{userStore.getUserInfo?.username}}</span>
                <svg class="w-4 h-4 ml-1" :class="{'rotate-180': isDropdownOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <!-- Dropdown Menu -->
              <div v-show="isDropdownOpen" 
                class="absolute right-0 mt-2 w-48 py-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700"
                @click.stop>
                <a href="#" 
                  class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out"
                  @click="handleLogout">
                  退出登录
                </a>
              </div>
            </li>
          </template>
        </ul>

        <!-- Mobile menu -->
        <div class="md:hidden flex items-center ml-4">

          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-slate-300 hover:text-white text-center items-center justify-center transition"
            ref="hamburger" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen"
            @click.stop="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
                y="7" width="16" height="2" rx="1"></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            ref="mobileNav"
            :style="[mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 }]"
            @click.outside="expanded = false" @keydown.escape.window="expanded = false">
            <ul
              class="border border-transparent [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] rounded-lg px-4 py-1.5">
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/about">{{
                  $t('nav.about') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/integrations">{{ $t('nav.integrations') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/pricing">{{
                  $t('nav.pricing') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/customers">{{
                  $t('nav.customers') }}</router-link>
              </li>
              <li>
                <router-link class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5" to="/changelog">{{
                  $t('nav.changelog') }}</router-link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { useRouter } from 'vue-router'
import { toast } from '#build/ui'
// import LanguageSwitcher from './LanguageSwitcher.vue'

const userStore = useUserStore()
const router = useRouter()
const mobileNavOpen = ref(false)
const mobileNav = ref<HTMLElement | null>(null)
const hamburger = ref<HTMLElement | null>(null)
const isDropdownOpen = ref(false)

// Toggle dropdown menu
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Handle logout
const handleLogout = async () => {
  await get('/user/logout')
  await userStore.logout()
  showToast('退出登录成功')
  isDropdownOpen.value = false
  router.push('/signin')
}

// close on click outside for both mobile nav and dropdown
const clickHandler = ({ target }: MouseEvent) => {
  if (!mobileNavOpen.value || mobileNav.value?.contains(target as Node) || hamburger.value?.contains(target as Node)) {
    // Handle mobile nav
  } else {
    mobileNavOpen.value = false
  }
  
  // Close dropdown when clicking outside
  if (isDropdownOpen.value && !(target as HTMLElement).closest('.relative')) {
    isDropdownOpen.value = false
  }
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }: KeyboardEvent) => {
  if (keyCode === 27) {
    mobileNavOpen.value = false
    isDropdownOpen.value = false
  }
}
const showToast = (message: string) => {
  console.log('Toast message:', message); // 调试信息
  // 创建一个新的 toast 元素
  const toast = document.createElement('div');
  toast.className = 'toast'; // 使用已有的样式类
  toast.textContent = message;
  
  // 将 toast 元素添加到 body 中
  document.body.appendChild(toast);

  // 3秒后隐藏并移除元素
  setTimeout(() => {
    toast.classList.add('hidden');
    setTimeout(() => {
      toast.remove();
    }, 500); // 确保过渡效果完成后移除
  }, 3000);
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})
</script>

<style>
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #9d19d1; /* 更深的背景色，与页面背景一致 */
  padding: 15px 30px; /* 增加内边距 */
  border-radius: 8px; /* 更圆的边角 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 更明显的阴影 */
  transition: opacity 0.5s ease, transform 0.5s ease; /* 添加平滑的变换效果 */
  color: #e0e0e0; /* 更浅的文字颜色，与页面文字一致 */
  opacity: 1; /* 默认显示 */
  z-index: 1000; /* 确保在最上层 */
}
</style>