"use client";

import { useCounterStore } from "@/store/useStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Zustand Counter 範例
      </h2>

      <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">
        {count}
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          減少
        </button>

        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          重置
        </button>

        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          增加
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        這是使用 Zustand 管理狀態的簡單範例
      </p>
    </div>
  );
}
