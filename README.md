# Next Invitation Builder

一個使用 Next.js 15、TypeScript、Tailwind CSS 和 Zustand 構建的邀請函生成器專案。

## 技術棧

- **Next.js 15** - React 框架（使用 App Router）
- **TypeScript** - 類型安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Zustand** - 輕量級狀態管理庫

## 開始使用

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

### 構建生產版本

```bash
npm run build
```

### 啟動生產伺服器

```bash
npm start
```

## 專案結構

```
next-invitation-builder/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   └── layout.tsx         # 根佈局
├── components/            # React 組件
│   └── Counter.tsx        # 範例計數器組件
├── store/                 # Zustand 狀態管理
│   └── useStore.ts        # 範例 store
├── lib/                   # 工具函數
├── public/                # 靜態資源
└── package.json          # 專案配置

```

## Zustand 使用範例

在 `store/useStore.ts` 中定義狀態：

```typescript
import { create } from "zustand";

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
```

在組件中使用：

```typescript
'use client';

import { useStore } from '@/store/useStore';

export default function Counter() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>增加</button>
      <button onClick={decrement}>減少</button>
      <button onClick={reset}>重置</button>
    </div>
  );
}
```

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs)
- [TypeScript 文檔](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Zustand 文檔](https://docs.pmnd.rs/zustand/getting-started/introduction)

## 部署

推薦使用 [Vercel Platform](https://vercel.com) 部署 Next.js 應用。

查看 [Next.js 部署文檔](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多詳情。
