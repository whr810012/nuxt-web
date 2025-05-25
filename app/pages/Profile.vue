<template>
  <main>
    <section class="relative">
      <!-- 背景装饰 -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true">
        <img src="@/assets/images/auth-illustration.svg" class="max-w-none" width="1440" height="450"
          alt="Page Illustration">
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <!-- 页面标题 -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <h1 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              个人资料</h1>
          </div>

          <!-- 切换按钮 -->
          <div class="max-w-xl mx-auto mb-6 flex space-x-4">
            <button @click="toggleSection('profile')"
              class="flex-1 py-2 px-4 rounded-lg transition-all duration-300 font-medium text-center"
              :class="{ 'bg-purple-500 text-white': activeSection === 'profile', 'bg-slate-700/50 text-slate-300 hover:bg-slate-700': activeSection !== 'profile' }">
              个人信息
            </button>
            <button @click="toggleSection('password')" v-if="false"
              class="flex-1 py-2 px-4 rounded-lg transition-all duration-300 font-medium text-center"
              :class="{ 'bg-purple-500 text-white': activeSection === 'password', 'bg-slate-700/50 text-slate-300 hover:bg-slate-700': activeSection !== 'password' }">
              修改密码
            </button>
          </div>

          <!-- 个人资料表单 -->
          <div
            class="max-w-xl mx-auto bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm p-6 shadow-lg">
            <!-- 用户头像区域 -->
            <div v-if="activeSection === 'profile'" class="flex flex-col items-center mb-6">
              <div class="relative group">
                <div
                  class="w-24 h-24 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 text-2xl font-bold overflow-hidden mb-4 transition-all duration-300 group-hover:opacity-80">
                  <img v-if="profileData.authorities" :src="profileData.authorities" alt="Avatar"
                    class="w-full h-full object-cover">
                  <span v-else>{{ userInfo?.nickName?.charAt(0).toUpperCase() }}</span>
                </div>
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <label for="authorities-upload" class="cursor-pointer">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                      </path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </label>
                  <input id="authorities-upload" type="file" accept="image/*" @change="handleAvatarUpload"
                    class="hidden">
                </div>
              </div>
              <span class="text-sm text-slate-400">点击头像更换</span>
            </div>



            <!-- 个人信息表单 -->
            <form v-if="activeSection === 'profile'" @submit.prevent="updateProfile">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="nick-name">昵称</label>
                  <input id="nick-name" v-model="profileData.nickName" class="form-input w-full" type="text" required />
                  <p v-if="errors.nickName" class="text-rose-500 text-xs mt-1">{{ errors.nickName }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="user-name">用户名</label>
                  <input id="user-name" v-model="profileData.userName" class="form-input w-full" type="text" disabled />
                  <p class="text-xs text-slate-500 mt-1">用户名不可修改</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="email">邮箱</label>
                  <input id="email" v-model="profileData.email" class="form-input w-full" type="email" />
                  <p v-if="errors.email" class="text-rose-500 text-xs mt-1">{{ errors.email }}</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="phonenumber">手机号</label>
                  <input id="phonenumber" v-model="profileData.phonenumber" class="form-input w-full" type="tel"
                    disabled />
                  <p class="text-xs text-slate-500 mt-1">手机号不可修改</p>
                </div>
                <div>
                  <label class="block text-sm text-slate-300 font-medium mb-1" for="gender">性别</label>
                  <select id="gender" v-model="profileData.sex" class="form-select text-sm py-2 w-full">
                    <option value="男">男</option>
                    <option value="女">女</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs"
                  :disabled="loading">
                  <span v-if="loading">保存中...</span>
                  <span v-else>保存修改</span>
                </button>
              </div>
            </form>

            <!-- 修改密码区域 -->
            <div v-if="activeSection === 'password'">
              <form @submit.prevent="updatePassword">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="current-password">当前密码</label>
                    <input id="current-password" v-model="passwordData.currentPassword" class="form-input w-full"
                      type="password" required />
                  </div>
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="new-password">新密码</label>
                    <input id="new-password" v-model="passwordData.newPassword" class="form-input w-full"
                      type="password" required />
                  </div>
                  <div>
                    <label class="block text-sm text-slate-300 font-medium mb-1" for="confirm-password">确认新密码</label>
                    <input id="confirm-password" v-model="passwordData.confirmPassword" class="form-input w-full"
                      type="password" required />
                  </div>
                </div>
                <div class="mt-6">
                  <button type="submit"
                    class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs"
                    :disabled="passwordLoading">
                    <span v-if="passwordLoading">更新中...</span>
                    <span v-else>更新密码</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useUserStore } from '~/store/user'
import { useToast } from '~/composables/useToast'

const userStore = useUserStore()
const { showToast } = useToast()
const loading = ref(false)
const passwordLoading = ref(false)
const activeSection = ref('profile') // 添加状态变量控制显示哪个部分

// 获取用户信息
const userInfo = computed(() => userStore.getUserInfo)
const changeFile = ref(null)
// 个人资料表单数据
const profileData = reactive({
  nickName: '',
  userName: '',
  email: '',
  phonenumber: '',
  sex: ''
})

// 密码表单数据
const passwordData = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const errors = reactive({
  nickName: '',
  userName: '',
  email: '',
  phonenumber: '',
  password: '',
  sex: ''
});

// 初始化表单数据
onMounted(() => {
  if (userInfo.value) {
    profileData.nickName = userInfo.value.nickName || ''
    profileData.userName = userInfo.value.userName || ''
    profileData.email = userInfo.value.email || ''
    profileData.phonenumber = userInfo.value.phonenumber || ''
    profileData.sex = userInfo.value.sex || '男'
  }
})

const handleAvatarUpload = (event) => {
  const file = event.target.files[0];
  changeFile.value = file;
  if (file) {
    // 创建一个URL来预览图片
    const imageUrl = URL.createObjectURL(file);
    // 更新用户信息的avatar字段
    profileData.authorities = imageUrl;
    // 这里可以添加上传文件的逻辑，比如调用API上传文件
  }
};

const validate = () => {
  let isValid = true;
  
  // 重置所有错误
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });
  console.log('验证开始');
  // 验证昵称
  if (profileData.nickName.length < 2) {
    errors.nickName = '昵称至少需要2个字符';
    console.log('昵称错误:', errors.nickName);
    isValid = false;
  }
  
  // 验证用户名
  if (!/^[a-zA-Z0-9]{5,}$/.test(profileData.userName)) {
    errors.userName = '用户名只能包含英文和数字，且至少5个字符';
    isValid = false;
  }
  
  
  // 验证邮箱
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileData.email)) {
    errors.email = '请输入有效的邮箱地址';
    isValid = false;
  }
  
  // 验证手机号
  if (!/^1[3-9]\d{9}$/.test(profileData.phonenumber)) {
    errors.phonenumber = '请输入有效的手机号';
    isValid = false;
  }
  
  // 验证性别
  if (!profileData.sex) {
    errors.sex = '请选择性别';
    isValid = false;
  }
  
  return isValid;
};

// 更新个人资料
const updateProfile = async () => {
  if (!validate()) {
    return;
  }
  try {
    loading.value = true
    // 发送表单数据
    let changeForm = new FormData();
    if (profileData.nickName !== userInfo.value.nickName) {
      changeForm.append('nickName', profileData.nickName);
    }
    if (profileData.email !== userInfo.value.email) {
      changeForm.append('email', profileData.email);
    }
    if (profileData.sex !== userInfo.value.sex) {
      changeForm.append('sex', profileData.sex);
    }
    if (changeFile.value) {
      changeForm.append('file', changeFile.value);
    }
    // 调用API更新用户信息
    const response = await post('/user/amend', changeForm)

    if (response.code === 200) {
      // 更新本地存储的用户信息
      userStore.setUserInfo({
        ...userInfo.value,
        ...profileData
      })
      showToast('个人资料更新成功')
    }
  } catch (error) {
    console.error('更新个人资料失败:', error)
    showToast('个人资料更新失败')
  } finally {
    loading.value = false
  }
}

// 更新密码
const updatePassword = async () => {
  // 验证两次密码输入是否一致
  if (passwordData.newPassword !== passwordData.confirmPassword) {
    showToast('两次密码输入不一致')
    return
  }

  try {
    passwordLoading.value = true

    // 调用API更新密码
    const response = await put('/user/updatePwd', {
      oldPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword
    })

    if (response.code === 200) {
      showToast('密码更新成功')
      // 清空密码表单
      passwordData.currentPassword = ''
      passwordData.newPassword = ''
      passwordData.confirmPassword = ''
    }
  } catch (error) {
    console.error('更新密码失败:', error)
    showToast('密码更新失败')
  } finally {
    passwordLoading.value = false
  }
}

// 切换显示的部分
const toggleSection = (section) => {
  activeSection.value = section
}
</script>
