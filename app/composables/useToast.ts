import { ref } from 'vue';

/**
 * Toast通知功能
 * 在任何组件中使用：const { showToast } = useToast();
 */
export const useToast = () => {
  // 添加样式到文档中，确保样式只添加一次
  const styleId = 'toast-style';
  if (process.client && !document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #9d19d1;
        padding: 15px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: opacity 0.5s ease, transform 0.5s ease;
        color: #e0e0e0;
        opacity: 1;
        z-index: 1000;
      }
      .toast.hidden {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * 显示一个toast通知
   * @param message 要显示的消息
   * @param duration 显示持续时间（毫秒），默认3000ms
   */
  const showToast = (message: string, duration: number = 3000) => {
    if (!process.client) return; // 确保只在客户端执行
    
    console.log('Toast message:', message); // 调试信息
    
    // 创建一个新的 toast 元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // 将 toast 元素添加到 body 中
    document.body.appendChild(toast);

    // 指定时间后隐藏并移除元素
    setTimeout(() => {
      toast.classList.add('hidden');
      setTimeout(() => {
        toast.remove();
      }, 500); // 确保过渡效果完成后移除
    }, duration);
  };

  return {
    showToast
  };
};