<template>
  <div class="settings-container">
    <h1 class="settings-title">用户设置</h1>
    
    <div class="settings-content">
      <div class="settings-sidebar">
        <ul class="settings-nav">
          <li v-for="(section, index) in settingSections" 
              :key="index" 
              :class="{ active: activeSection === index }"
              @click="activeSection = index">
            <span class="nav-icon" v-html="section.icon"></span>
            <span>{{ section.title }}</span>
          </li>
        </ul>
      </div>
      
      <div class="settings-main">
        <transition name="fade" mode="out-in">
          <div :key="activeSection" class="settings-section">
            <!-- 个人信息 -->
            <template v-if="activeSection === 0">
              <h2>个人信息</h2>
              <div class="form-card">
                <div class="form-group">
                  <label for="username">用户名</label>
                  <input type="text" id="username" v-model="settings.username" placeholder="请输入您的用户名" />
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" id="email" v-model="settings.email" placeholder="请输入您的邮箱地址" />
                </div>
                <div class="form-group">
                  <label for="bio">个人简介</label>
                  <textarea id="bio" v-model="settings.bio" placeholder="请简单介绍一下自己..."></textarea>
                </div>
              </div>
            </template>
            
            <!-- 通知设置 -->
            <template v-else-if="activeSection === 1">
              <h2>通知设置</h2>
              <div class="form-card">
                <div class="form-group checkbox">
                  <input type="checkbox" id="emailNotif" v-model="settings.emailNotifications" />
                  <label for="emailNotif">接收邮件通知</label>
                  <p class="form-help">我们会通过邮件通知您重要的更新和活动</p>
                </div>
                <div class="form-group checkbox">
                  <input type="checkbox" id="pushNotif" v-model="settings.pushNotifications" />
                  <label for="pushNotif">接收推送通知</label>
                  <p class="form-help">允许在您的设备上接收实时推送通知</p>
                </div>
              </div>
            </template>
            
            <!-- 主题设置 -->
            <template v-else-if="activeSection === 2">
              <h2>主题设置</h2>
              <div class="form-card">
                <div class="form-group">
                  <label for="theme">主题</label>
                  <select id="theme" v-model="settings.theme">
                    <option value="light">浅色</option>
                    <option value="dark">深色</option>
                    <option value="system">跟随系统</option>
                  </select>
                  <p class="form-help">选择您喜欢的界面主题风格</p>
                </div>
              </div>
            </template>
          </div>
        </transition>
        
        <button class="save-button" @click="saveSettings">
          保存设置
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 0,
      settingSections: [
        { title: '个人信息', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
        { title: '通知设置', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>' },
        { title: '主题设置', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>' }
      ],
      settings: {
        username: '',
        email: '',
        bio: '',
        emailNotifications: true,
        pushNotifications: false,
        theme: 'light'
      },
      isSaving: false
    }
  },
  methods: {
    async saveSettings() {
      this.isSaving = true;
      
      try {
        // 模拟API请求
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // 这里添加保存设置的逻辑
        this.$useToast?.success('设置已成功保存');
      } catch (error) {
        this.$useToast?.error('保存设置失败，请重试');
        console.error('保存设置失败:', error);
      } finally {
        this.isSaving = false;
      }
    }
  }
}
</script>
<style scoped>
.settings-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px 30px;
  color: #f8f9fa;
}

.settings-title {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  /* background-image: linear-gradient(to right, #f8f9fa 60%, #a5b4fc); */
}

.settings-content {
  display: flex;
  gap: 30px;
  min-height: 500px;
  /* background-color: rgba(15, 23, 42, 0.8); */
  border-radius: 12px;
  /* border: 1px solid rgba(148, 163, 184, 0.2); */
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); */
  overflow: hidden;
}

.settings-sidebar {
  width: 220px;
  /* background-color: rgba(15, 23, 42, 0.5); */
  padding: 25px 0;
  border-right: 1px solid rgba(148, 163, 184, 0.1);
}

.settings-nav {
  list-style: none;
  padding: 0 15px;
  margin: 0;
}

.settings-nav li {
  padding: 14px 18px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}

.nav-icon {
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.settings-nav li:hover {
  /* background-color: rgba(168, 85, 247, 0.15); */
  color: #a855f7;
}

.settings-nav li:hover .nav-icon svg {
  stroke: #a855f7;
}

.settings-nav li.active {
  background-color: #a855f7;
  color: white;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.4);
}

.settings-nav li.active .nav-icon svg {
  stroke: white;
}

.settings-main {
  flex: 1;
  padding: 30px 40px;
  /* background-color: rgba(15, 23, 42, 0.3); */
}

.settings-section {
  margin-bottom: 30px;
  animation: fadeIn 0.3s ease-in-out;
}

.settings-section h2 {
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: 600;
  color: #f8f9fa;
  border-bottom: 2px solid rgba(148, 163, 184, 0.2);
  padding-bottom: 10px;
}

.form-card {
  /* background-color: rgba(30, 41, 59, 0.5); */
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.form-group {
  margin-bottom: 24px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #e2e8f0;
}

.form-help {
  margin-top: 6px;
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.4;
}

.form-group.checkbox .form-help {
  margin-left: 30px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s ease;
  background-color: rgba(15, 23, 42, 0.6);
  color: #e2e8f0;
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #a855f7;
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.25);
  background-color: rgba(15, 23, 42, 0.8);
  outline: none;
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.form-group.checkbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.form-group.checkbox input {
  margin-right: 12px;
  width: 18px;
  height: 18px;
  accent-color: #a855f7;
}

.form-group.checkbox label {
  margin-bottom: 0;
  cursor: pointer;
}

.save-button {
  background-color: #a855f7;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(168, 85, 247, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.save-icon {
  margin-right: 8px;
  font-size: 18px;
}

.save-button:hover {
  background-color: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.5);
}

.save-button:active {
  transform: translateY(0);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .settings-content {
    flex-direction: column;
  }
  
  .settings-sidebar {
    width: 100%;
    padding: 15px;
  }
  
  .settings-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .settings-nav li {
    margin-bottom: 0;
    flex: 1 0 auto;
    text-align: center;
    padding: 10px 15px;
  }
  
  .nav-icon {
    margin-right: 8px;
  }
  
  .settings-main {
    padding: 20px;
  }
  
  .form-card {
    padding: 20px 15px;
  }
}
</style>
