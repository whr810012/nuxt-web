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
        setAuthorizationHeader(options.headers, token);
      }
    },
    // 响应拦截
    onResponse({ response }) {
      const data = response._data as ApiResponse<T>;
      console.log('Response received:', data);
      if (data.code !== 200) {
        throw new Error(data.message || '请求失败');
      }
      // 确保返回的是处理后的数据对象
      return data;  
    },
    // 错误处理
    onResponseError({ response }) {
      const error = response._data as ApiResponse<T>;
      console.error('Response error:', error);
      // 返回错误信息以便页面处理
      throw error;
    },
  };

  // 合并配置
  const finalConfig = {
    ...defaultConfig,
    ...config,
  };

  try {
    const response = await useFetch<ApiResponse<T>>(url, finalConfig);
    console.log('Fetch successful:', response);
    const { data, error } = response;
    console.log('data',data);
    
    
    if (error.value) {
      throw error.value;
    }
    
    if (!data.value) {
      throw new Error('请求失败');
    }
    
    if (data.value.code === 200) {
      return data.value.data as T;
    } else {
      throw new Error(data.value.message || '请求失败');
    }
  } catch (error) {
    console.error('Request error:', error);
    throw error;
  }
};

// 设置授权头部的辅助函数
function setAuthorizationHeader(headers: Headers | Record<string, string>, token: string) {
  if (headers instanceof Headers) {
    headers.set('Authorization', `Bearer ${token}`);
  } else {
    headers['Authorization'] = `Bearer ${token}`;
  }
}

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
