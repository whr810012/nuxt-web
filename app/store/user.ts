import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {
      userId: '',
    } as any,
    isLoggedIn: false
  }),

  getters: {
    getToken: state => state.token,
    getUserInfo: state => state.userInfo,
    getLoginStatus: state => state.isLoggedIn
  },

  actions: {
    setToken(token: string) {
      this.token = token
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('token', token)
      }
    },
    setUserId(id: string) {
      this.userInfo.userId = id
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('userId', id)
      }
    },

    setUserInfo(info: any) {
      this.userInfo = info
      this.isLoggedIn = true
    },

    logout() {
      this.token = ''
      this.userInfo = null
      this.isLoggedIn = false
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('token')
      }
    }
  }
})