import type { UseFetchOptions } from 'nuxt/app';
import { useUserStore } from '~/store/user';
import { useToast } from '~/composables/useToast';

// 定义错误类型
type FetchError = any;

// 定义请求配置接口
interface RequestConfig extends UseFetchOptions<any> {
  loading?: boolean;
  showErrorToast?: boolean; // 是否显示错误提示，默认为true
  showSuccessToast?: boolean; // 是否显示成功提示，默认为false
  successMessage?: string; // 自定义成功提示消息
}

// 定义响应接口
interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建请求实例
export const requestWithToast = async <T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<T> => {
  const { showToast } = useToast();
  
  // 默认配置
  const defaultConfig: RequestConfig = {
    baseURL: '',
    headers: {
      'Content-Type': 'application/json',
    },
    showErrorToast: true, // 默认显示错误提示
    showSuccessToast: false, // 默认不显示成功提示
    // 请求拦截
    onRequest({ options }) {
      const userStore = useUserStore();
      const token = userStore.getToken;
      // 有两个接口不需要token
      if (token) {
        if (url === '/login/user' || url === '/login/capacha') {
          return;
        } else{
          options.headers.set('Authorization', `${token}`);
        }
      }
    },
    // 响应拦截
    onResponse({ response }) {
      const data = response._data as ApiResponse<T>;
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
    const { data, error } = response;
    
    if (error.value) {
      throw error.value;
    }
    
    if (!data.value) {
      throw new Error('请求失败');
    }
    
    if (data.value.code === 200) {
      // 显示成功提示
      if (finalConfig.showSuccessToast) {
        showToast(finalConfig.successMessage || data.value.message || '操作成功');
      }
      return data.value.data as T;
    } else {
      throw new Error(data.value.message || '请求失败');
    }
  } catch (error: any) {
    console.error('Request error:', error);
    // 显示错误提示
    if (finalConfig.showErrorToast) {
      showToast(error.message || error.msg || '请求失败');
    }
    throw error;
  }
};

// 导出便捷方法
export const getWithToast = <T = any>(url: string, config?: RequestConfig) => {
  return requestWithToast<T>(url, { ...config, method: 'GET' });
};

export const postWithToast = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  // 如果 data 是 FormData 类型，则不设置 'Content-Type'，浏览器会自动处理
  const headers = data instanceof FormData ? undefined : { 'Content-Type': 'application/json' };
  
  return requestWithToast<T>(url, { ...config, method: 'POST', body: data, headers });
};

export const putWithToast = <T = any>(url: string, data?: any, config?: RequestConfig) => {
  return requestWithToast<T>(url, { ...config, method: 'PUT', body: data });
};

export const delWithToast = <T = any>(url: string, config?: RequestConfig) => {
  return requestWithToast<T>(url, { ...config, method: 'DELETE' });
};