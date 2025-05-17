const proxy_api_prefix_list = [
  '/api',
  '/rest',
  '/mock-api',
  '/login',
  '/uc',
  '/rest',
  '/public',
  '/general'
]
const proxy = proxy_api_prefix_list.reduce((proxy, prefix) => {
  proxy[prefix] = {
    target: 'http://localhost:8082',
    changeOrigin: true,
    ws: true,
    rewrite: (p: string) => p.replace('/mock-api', '')
  }
  return proxy
}, {} as Record<string, any>)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: ''
  },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/ui', // to auto-load tailwindcss and will use ui components later
    // '@nuxt/content', // 暂时不使用cms模块
    // '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  vite: {
    server: {
      proxy
    }
  },

  devServer: {
    host: 'localhost',
    port: 6008
  },


  compatibilityDate: '2025-04-17',

  ui: {
    fonts: false
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' }
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    langDir: 'locales/',
  }
})