# React + Typescript 4.1 + react-intl

https://www.bilibili.com/video/BV1Sv4y1Z7KV

## 痛点

```tsx
import { FormattedMessage } from 'react-intl'
const lang {
  "app.name": "charlzyx's app",
  "navbar.lang": "中文"
} as const;

<FormattedMessage id="app.name" >
//------------------^------------
// 一个 const 类型再这里没有类型提示, ts 强迫症就很难受
```

## 痒点

```ts
const lang {
  // dot 分割天然是 object 访问字符, 那么, 为什么不能
  "app.name": "charlzyx's app",
  "navbar.lang": "中文"
  // 直接写成 JSON 对象呢
  app: {
    name: "charlzyx's app",
  },
  navbar: {
    lang: "中文"
  }
} as const;
```

## Solution
> 痒点, lodash.walk (好像不再export, 当然手写一个也不是很难

- walk 遍历对象, 将叶子节点存储为 [path: string]: string 格式即可, 难度系数 0

> 痛点
1. 补丁: 添加类型补丁包, 困难度比较高
2. 套娃: 通过包装原有组件



