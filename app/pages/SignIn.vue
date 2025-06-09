<template>
  <main class="grow">
    <section class="relative">
      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true">
        <img src="@/assets/images/auth-illustration.svg" class="max-w-none" width="1440" height="450"
          alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div
                  class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                  <img class="relative" src="@/assets/images/logo.svg" width="42" height="42" alt="Stellar">
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              {{ $t('auth.signIn') }}</h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">
            
            <!-- 登录方式切换 -->
            <div class="flex mb-6 bg-slate-800 rounded-lg p-1">
              <button 
                type="button" 
                class="flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors"
                :class="loginType === 'password' ? 'bg-purple-500 text-white shadow' : 'text-slate-400'"
                @click="switchLoginType('password')"
              >
                密码登录
              </button>
              <button 
                type="button" 
                class="flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors"
                :class="loginType === 'sms' ? 'bg-purple-500 text-white shadow' : 'text-slate-400'"
                @click="switchLoginType('sms')"
              >
                短信登录
              </button>
            </div>

            <form @submit="signIn">
              <!-- 密码登录表单 -->
              <template v-if="loginType === 'password'">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="email">{{ $t('auth.userName') }}</label>
                    <input v-model="email" id="email" class="form-input w-full" required />
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label class="block text-sm text-slate-300 font-medium mb-1" for="password">{{ $t('auth.password') }}</label>
                      <router-link
                        class="text-sm font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out ml-2"
                        to="/resetpassword">{{ $t('auth.forgot') }}</router-link>
                    </div>
                    <input v-model="password" id="password" class="form-input w-full" type="password" autocomplete="on"
                      required />
                  </div>
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="captcha">{{ $t('auth.verification') }}</label>
                    <div class="flex items-center space-x-2">
                      <input id="captcha" v-model="captchaCode" class="form-input flex-1" type="text" required />
                      <!-- 验证码图片，点击可刷新 -->
                      <img :src="img" @click="init"
                        class="h-10 w-24 cursor-pointer rounded border border-slate-800"
                        alt="Verification Code" />
                    </div>
                  </div>
                </div>
              </template>
              
              <!-- 短信登录表单 -->
              <template v-else>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="phone">手机号 <span class="text-rose-500">*</span></label>
                    <input id="phone" v-model="phone" class="form-input w-full" type="tel" placeholder="请输入手机号" @blur="validatePhone" required />
                    <p v-if="phoneError" class="text-rose-500 text-xs mt-1">{{ phoneError }}</p>
                  </div>
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="smsCode">短信验证码 <span class="text-rose-500">*</span></label>
                    <div class="flex space-x-2">
                      <input id="smsCode" v-model="smsCode" class="form-input flex-1" type="text" placeholder="请输入验证码" required />
                      <button 
                        type="button" 
                        class="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 disabled:cursor-not-allowed rounded transition-colors"
                        :disabled="smsLoading || smsCountdown > 0 || !isPhoneValid"
                        @click="sendSmsCode"
                      >
                        <span v-if="smsLoading">发送中...</span>
                        <span v-else-if="smsCountdown > 0">{{ smsCountdown }}s</span>
                        <span v-else>获取验证码</span>
                      </button>
                    </div>
                  </div>
                </div>
              </template>
              
              <div class="mt-6">
                <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group" :disabled="loading">
                  <span v-if="loading">{{ $t('common.loading') }}...</span>
                  <span v-else>{{ $t('auth.signIn') }} <span
                    class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></span>
                </button>
              </div>
            </form>

            <div class="text-center mt-4">
              <div class="text-sm text-slate-400">
                <router-link class="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" to="/signup">{{ $t('auth.signUp') }}</router-link>
              </div>
            </div>
            <!-- Divider -->
            <div class="flex items-center my-6">
              <div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
              <div class="text-sm text-slate-500 italic">{{ $t('common.or') }}</div>
              <div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
            </div>

            <!-- Social login -->
            <div class="flex space-x-3">
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('auth.continueWith') }} Twitter</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                    <path
                      d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z" />
                  </svg>
                </span>
              </button>
              <button
                class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('auth.continueWith') }} GitHub</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                    <path
                      d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { encrypt, decrypt } from '~/utils/encrypt'
import { useToast } from '~/composables/useToast'

const router = useRouter()
const userStore = useUserStore()
const { showToast } = useToast()
const email = ref('ersan')
const password = ref('123456')
const captchaCode = ref()
const img = ref()
const uuid = ref()
const loading = ref(false)
const loginType = ref('password') // 'password' 或 'sms'
const phone = ref('')
const smsCode = ref('')
const phoneError = ref('')
const smsLoading = ref(false)
const smsCountdown = ref(0)
const smsTimer = ref(null)

// 手机号验证
const isPhoneValid = computed(() => {
  return /^1[3-9]\d{9}$/.test(phone.value)
})

// 切换登录方式
const switchLoginType = (type: string) => {
  loginType.value = type
  phoneError.value = ''
  // 清空表单数据
  if (type === 'sms') {
    email.value = ''
    password.value = ''
    captchaCode.value = ''
  } else {
    phone.value = ''
    smsCode.value = ''
  }
}

// 验证手机号
const validatePhone = () => {
  if (!phone.value) {
    phoneError.value = '请输入手机号码'
    return false
  }
  if (!isPhoneValid.value) {
    phoneError.value = '请输入有效的手机号码'
    return false
  }
  phoneError.value = ''
  return true
}

// 发送短信验证码
const sendSmsCode = async () => {
  if (!validatePhone()) {
    return
  }
  
  try {
    smsLoading.value = true
    await get('/sms/enroll', { number: phone.value })
    showToast('验证码发送成功')
    
    // 开始倒计时
    smsCountdown.value = 60
    smsTimer.value = setInterval(() => {
      smsCountdown.value--
      if (smsCountdown.value <= 0) {
        clearInterval(smsTimer.value)
        smsTimer.value = null
      }
    }, 1000)
  } catch (error: any) {
    console.error('发送短信验证码失败:', error)
    showToast(error.message || '发送验证码失败，请稍后重试')
  } finally {
    smsLoading.value = false
  }
}

const signIn = async (event: any) => {
  event.preventDefault();
  
  try {
    loading.value = true
    let response
    
    if (loginType.value === 'password') {
      // 密码登录
      if (!email.value || !password.value || !captchaCode.value) {
        return showToast('请输入完整信息');
      }
      
      // 对密码进行AES加密
      const encryptedPassword = encrypt(password.value);
      
      const formData = new FormData();
      formData.append('userName', email.value);
      formData.append('password', encryptedPassword); // 使用加密后的密码
      formData.append('captcha', captchaCode.value);
      formData.append('captchaKey', uuid.value);
      response = await post('/login/user', formData);
    } else {
      // 短信验证码登录
      if (!validatePhone()) {
        return
      }
      if (!smsCode.value) {
        return showToast('请输入短信验证码');
      }
      
      const data = {
        phone: phone.value,
        smsCode: smsCode.value
      }
      // 这里假设后端有短信登录接口，如果没有需要添加
      response = await post('/login/sms/user', data);
    }
    
    console.log('response', response);
    if (response?.token) {
      showToast('登录成功');
      userStore.setToken(response.token)
      userStore.setUserInfo({userId:response.userId})
      localStorage.setItem('token', response.token)
      localStorage.setItem('userId', JSON.stringify(response.userId))
      
      try {
        const userInfo = await get(`/user/query`)
        if (userInfo.email) {
          userInfo.email = decrypt(userInfo.email)
        }
        if (userInfo.phonenumber) {
          userInfo.phonenumber = decrypt(userInfo.phonenumber)
        }
        userStore.setUserInfo(userInfo)
        router.push('/');
      } catch (error: any) {
        console.log('获取用户信息失败', error);
        showToast(error.message || error.msg || '获取用户信息失败');
      }
    } else {
      console.log('登录失败', response);
      throw new Error('登录失败');
    }
  } catch (error: any) {
    console.log('登录失败', error);
    const errorMsg = loginType.value === 'password' ? '登录失败，请检查用户名和密码' : '登录失败，请检查手机号和验证码'
    showToast(error.message || error.msg || errorMsg);
    
    // 密码登录失败时刷新验证码
    if (loginType.value === 'password') {
      init();
    }
  } finally {
    loading.value = false
  }
}
const init = async () => {
  const response = await get('/capacha') // 直接获取数据，而不是响应对象
  img.value = 'data:image/png;base64,' + response.img
  uuid.value = response.uuid
}


init()
</script>

<style>
/* Toast样式已移至useToast.ts */
</style>