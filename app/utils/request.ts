import type { UseFetchOptions } from 'nuxt/app'

// 定义请求配置接口
interface RequestConfig extends UseFetchOptions<any> {
  loading?: boolean
}

// 定义响应接口
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

// 创建请求实例
export const request = async <T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  // 默认配置
  const defaultConfig: RequestConfig = {
    baseURL: 'http://localhost:8082', // 基础URL，与nuxt.config.ts中的代理配置对应
    headers: {
      'Content-Type': 'application/json',
    },
    // 请求拦截
    onRequest({ options }) {
      // 获取token（如果需要）
      const token = localStorage.getItem('token')
      if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
      }
    },
    // 响应拦截
    onResponse({ response }) {
      const data = response._data
      if (data.code !== 0) {
        throw new Error(data.message || '请求失败')
      }
      return data
    },
    // 错误处理
    onResponseError({ response }) {
      const error = response._data
      throw new Error(error?.message || '网络错误')
    }
  }

  // 合并配置
  const finalConfig = {
    ...defaultConfig,
    ...config,
  }

  try {
    return await useFetch<ApiResponse<T>>(url, finalConfig)
  } catch (error) {
    console.error('Request error:', error)
    throw error
  }
}

// 导出便捷方法
export const get = <T = any>(url: string, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'GET' })
}

export const post = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'POST', body: data })
}

export const put = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'PUT', body: data })
}

export const del = <T = any>(url: string, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'DELETE' })
}