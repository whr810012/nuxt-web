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
          <div class="flex items-end mx-2 mt-1">
            <LanguageSwitcher />
          </div>
          <template v-if="!userStore.getUserInfo?.nickName">
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
            <li class="relative" v-click-outside="closeDropdown">
              <!-- 用户信息触发按钮 -->
              <div @click="toggleDropdown"
                class="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-700/30 whitespace-nowrap transition-all duration-200"
                :class="{ 'bg-slate-700/30 text-white': isDropdownOpen }">
                <!-- 用户头像 -->
                <div
                  class="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 text-xs font-bold overflow-hidden">
                  <img v-if="userStore.getUserInfo?.avatar" :src="userStore.getUserInfo.avatar" alt="Avatar"
                    class="w-full h-full object-cover">
                  <span v-else>{{ userStore.getUserInfo?.nickName?.charAt(0).toUpperCase() }}</span>
                </div>
                <span class="max-w-[100px] truncate">{{ userStore.getUserInfo?.nickName }}</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isDropdownOpen }"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              <!-- 下拉菜单 -->
              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <div v-show="isDropdownOpen"
                  class="absolute right-0 mt-1 w-56 py-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700/50 backdrop-blur-sm z-50 overflow-hidden"
                  @click.stop>
                  <!-- 用户信息区域 -->
                  <div class="px-4 py-2 border-b border-slate-700/50 mb-1">
                    <div class="text-sm font-medium text-white">{{ userStore.getUserInfo?.nickName }}</div>
                    <div class="text-xs text-slate-400 truncate">{{ userStore.getUserInfo?.email || '未设置邮箱' }}</div>
                  </div>

                  <!-- 菜单选项 -->
                  <router-link to="/profile"
                    class="flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-150">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    个人资料
                  </router-link>

                  <router-link to="/settings"
                    class="flex items-center px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors duration-150">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    设置
                  </router-link>

                  <div class="border-t border-slate-700/50 my-1"></div>

                  <a href="#"
                    class="flex items-center px-4 py-2 text-sm text-rose-400 hover:bg-slate-700/50 hover:text-rose-300 transition-colors duration-150"
                    @click="handleLogout">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                      </path>
                    </svg>
                    退出登录
                  </a>
                </div>
              </transition>
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
                  to="/integrations">{{
                  $t('nav.integrations') }}</router-link>
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
import { useToast } from '~/composables/useToast'
import LanguageSwitcher from './LanguageSwitcher.vue'
const { showToast } = useToast()
// import LanguageSwitcher from './LanguageSwitcher.vue'

const userStore = useUserStore()
const router = useRouter()
const mobileNavOpen = ref(false)
const mobileNav = ref<HTMLElement | null>(null)
const hamburger = ref<HTMLElement | null>(null)
const isDropdownOpen = ref(false)
// 关闭下拉菜单
const closeDropdown = () => {
  isDropdownOpen.value = false
}

// 点击外部关闭指令
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
}

// Toggle dropdown menu
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Handle logout
const handleLogout = async () => {
  try {
    await get('/user/logout')
    await userStore.logout()
    showToast('退出登录成功')
    isDropdownOpen.value = false
  }
  catch (error) {
    console.log(error);

  }
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
  background-color: #9d19d1;
  /* 更深的背景色，与页面背景一致 */
  padding: 15px 30px;
  /* 增加内边距 */
  border-radius: 8px;
  /* 更圆的边角 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  /* 更明显的阴影 */
  transition: opacity 0.5s ease, transform 0.5s ease;
  /* 添加平滑的变换效果 */
  color: #e0e0e0;
  /* 更浅的文字颜色，与页面文字一致 */
  opacity: 1;
  /* 默认显示 */
  z-index: 1000;
  /* 确保在最上层 */
}
</style>