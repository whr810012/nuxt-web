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
    target: 'http://81.69.165.136',
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
  ],
  vite: {
    server: {
      proxy
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 6008
  },


  compatibilityDate: '2025-04-17',

  ui: {
    fonts: false
  }
})