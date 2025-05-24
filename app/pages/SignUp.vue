<template>
  <main class="grow">

    <section class="relative">

      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <img src="@/assets/images/auth-illustration.svg" class="max-w-none" width="1440" height="450" alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">

          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                  <img class="relative" src="@/assets/images/logo.svg" width="42" height="42" alt="Stellar">
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">{{ $t('auth.createAccount') }}</h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">

            <form @submit.prevent="handleSignUp">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="nick-name">昵称 <span class="text-rose-500">*</span></label>
                  <input id="nick-name" v-model="formData.nickName" class="form-input w-full" type="text" placeholder="请输入昵称（至少2个字符）" required />
                  <p v-if="errors.nickName" class="text-rose-500 text-xs mt-1">{{ errors.nickName }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="user-name">用户名 <span class="text-rose-500">*</span></label>
                  <input id="user-name" v-model="formData.userName" class="form-input w-full" type="text" placeholder="请输入用户名（仅英文和数字，至少5个字符）" required />
                  <p v-if="errors.userName" class="text-rose-500 text-xs mt-1">{{ errors.userName }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="email">邮箱 <span class="text-rose-500">*</span></label>
                  <input id="email" v-model="formData.email" class="form-input w-full" type="email" placeholder="example@company.com" required />
                  <p v-if="errors.email" class="text-rose-500 text-xs mt-1">{{ errors.email }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="phonenumber">手机号 <span class="text-rose-500">*</span></label>
                  <input id="phonenumber" v-model="formData.phonenumber" class="form-input w-full" type="tel" placeholder="请输入手机号" required />
                  <p v-if="errors.phonenumber" class="text-rose-500 text-xs mt-1">{{ errors.phonenumber }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="password">密码 <span class="text-rose-500">*</span></label>
                  <input id="password" v-model="formData.password" class="form-input w-full" type="password" autocomplete="on" placeholder="至少6个字符，包含数字、大小写字母" required />
                  <p v-if="errors.password" class="text-rose-500 text-xs mt-1">{{ errors.password }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="gender">性别 <span class="text-rose-500">*</span></label>
                  <select id="gender" v-model="formData.sex" class="form-select text-sm py-2 w-full" required>
                    <option value="">请选择</option>
                    <option value="男">男</option>
                    <option value="女">女</option>
                  </select>
                  <p v-if="errors.sex" class="text-rose-500 text-xs mt-1">{{ errors.sex }}</p>
                </div>
              </div>
              <div class="mt-6">
                <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group" :disabled="loading">
                  <span v-if="loading">{{ $t('common.loading') }}...</span>
                  <span v-else>{{ $t('auth.signUp') }} <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></span>
                </button>
              </div>
            </form>

            <div class="text-center mt-4">
              <div class="text-sm text-slate-400">
                {{ $t('auth.alreadyHaveAccount') }} <router-link class="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out" to="/signin">{{ $t('auth.signIn') }}</router-link>
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
              <button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('auth.continueWith') }} Twitter</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                    <path d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z" />
                  </svg>
                </span>
              </button>
              <button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('auth.continueWith') }} GitHub</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                    <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
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

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store/user';
import { post } from '~/utils/request';
import { useToast } from '~/composables/useToast';
import { encrypt } from '~/utils/encrypt';

const router = useRouter();
const userStore = useUserStore();
const { showToast } = useToast();
const loading = ref(false);

const formData = ref({
  nickName: '',
  userName: '',
  email: '',
  phonenumber: '',
  password: '',
  sex: ''
});

const errors = reactive({
  nickName: '',
  userName: '',
  email: '',
  phonenumber: '',
  password: '',
  sex: ''
});

// 验证函数
const validate = () => {
  let isValid = true;
  
  // 重置所有错误
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });
  
  // 验证昵称
  if (formData.value.nickName.length < 2) {
    errors.nickName = '昵称至少需要2个字符';
    isValid = false;
  }
  
  // 验证用户名
  if (!/^[a-zA-Z0-9]{5,}$/.test(formData.value.userName)) {
    errors.userName = '用户名只能包含英文和数字，且至少5个字符';
    isValid = false;
  }
  
  // 验证密码
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.value.password)) {
    errors.password = '密码至少6个字符，且必须包含数字、大小写字母';
    isValid = false;
  }
  
  // 验证邮箱
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.email = '请输入有效的邮箱地址';
    isValid = false;
  }
  
  // 验证手机号
  if (!/^1[3-9]\d{9}$/.test(formData.value.phonenumber)) {
    errors.phonenumber = '请输入有效的手机号';
    isValid = false;
  }
  
  // 验证性别
  if (!formData.value.sex) {
    errors.sex = '请选择性别';
    isValid = false;
  }
  
  return isValid;
};

const handleSignUp = async () => {
  // 表单验证
  if (!validate()) {
    return;
  }
  
  try {
    loading.value = true;
    
    // 对敏感信息进行加密
    const encryptedPassword = encrypt(formData.value.password);
    const encryptedEmail = encrypt(formData.value.email);
    const encryptedPhonenumber = encrypt(formData.value.phonenumber);
    
    // 调用注册接口
    const response = await post('/user/enroll', {
      nickName: formData.value.nickName,
      userName: formData.value.userName,
      email: encryptedEmail, // 使用加密后的邮箱
      phonenumber: encryptedPhonenumber, // 使用加密后的手机号
      password: encryptedPassword, // 使用加密后的密码
      sex: formData.value.sex
    });
    
    // 注册成功后处理响应
    if (response) {      
      showToast('注册成功');
      // 注册成功后跳转到首页或其他页面
      router.push('/signin');
    }
  } catch (error) {
    console.error('注册失败:', error);
    // 显示错误消息
    showToast(error.message || '注册失败，请重试');
  } finally {
    loading.value = false;
  }
};
</script>

<script>
export default {
  name: 'SignUp',
}
</script>