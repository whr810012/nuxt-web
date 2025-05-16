import type { UseFetchOptions } from 'nuxt/app';

// 定义错误类型
type FetchError = any;

// 定义请求配置接口
interface RequestConfig extends UseFetchOptions<any> {
  loading?: boolean;
}

// 定义响应接口
interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建请求实例
export const request = async <T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<T> => {
  // 默认配置
  const defaultConfig: RequestConfig = {
    baseURL: 'http://localhost:8082',
    headers: {
      'Content-Type': 'application/json',
    },
    // 请求拦截
    onRequest({ options }) {
      const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
      if (token) {
        if (options.headers instanceof Headers) {
          options.headers.set('Authorization', `Bearer ${token}`);
        } else {
          options.headers = options.headers || {};
          if (options.headers instanceof Headers) {
            options.headers.set('Authorization', `Bearer ${token}`);
          }
        }
      }
    },
    // 响应拦截
    onResponse({ response }) {
      const data = response._data as ApiResponse<T>;
      if (data.code !== 200) {
        throw new Error(data?.message || '请求错误')
      }
      return data;  // 返回处理后的数据对象
    },
    // 错误处理
    onResponseError({ response }) {
      const error = response._data as ApiResponse<T>;
      throw new Error(error?.message || '网络错误');
    },
  };

  // 合并配置
  const finalConfig = {
    ...defaultConfig,
    ...config,
  };

  try {
    const { data } = await useFetch<ApiResponse<T>>(url, finalConfig);
    return data.value?.data as T;  // 访问完整响应中的实际数据
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

// 导出便捷方法
export const get = <T = any>(url: string, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'GET' });
};

export const post = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  // 如果 data 是 FormData 类型，则不设置 'Content-Type'，浏览器会自动处理
  const headers = data instanceof FormData ? undefined : { 'Content-Type': 'application/json' };
  
  return request<T>(url, { ...config, method: 'POST', body: data, headers });
};

export const put = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'PUT', body: data });
};

export const del = <T = any>(url: string, config?: RequestConfig) => {
  return request<T>(url, { ...config, method: 'DELETE' });
};
