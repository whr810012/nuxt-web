# Composables 使用指南

## useToast

`useToast` 是一个用于显示临时通知消息的 composable 函数。

### 基本用法

```typescript
import { useToast } from '~/composables/useToast';

// 在组件中使用
const { showToast } = useToast();

// 显示一条消息
showToast('操作成功');

// 自定义显示时间（毫秒）
showToast('操作成功', 5000); // 显示5秒
```

### 特点

- 自动处理样式，无需额外CSS
- 自动在指定时间后消失
- 平滑的过渡动画
- 在所有页面中都可以使用

## requestWithToast

`requestWithToast` 是一个集成了 toast 通知功能的请求工具，可以在请求成功或失败时自动显示提示消息。

### 基本用法

```typescript
import { postWithToast, getWithToast } from '~/utils/requestWithToast';

// 发送GET请求，失败时自动显示错误提示
const data = await getWithToast('/api/data');

// 发送POST请求，成功时显示成功提示
const result = await postWithToast('/api/submit', formData, {
  showSuccessToast: true,
  successMessage: '提交成功'
});

// 禁用错误提示
const silentResult = await postWithToast('/api/action', data, {
  showErrorToast: false
});
```

### 配置选项

- `showErrorToast`: 是否显示错误提示，默认为 `true`
- `showSuccessToast`: 是否显示成功提示，默认为 `false`
- `successMessage`: 自定义成功提示消息

### 与原有请求工具的区别

`requestWithToast` 是对原有 `request` 工具的增强，主要区别是：

1. 自动集成了 toast 通知功能
2. 提供了更多的配置选项，如控制成功/错误提示的显示
3. 使用方式与原有工具基本一致，便于迁移