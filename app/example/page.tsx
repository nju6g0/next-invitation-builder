import Counter from "@/components/Counter";
import AsyncUserList from "@/components/AsyncUserList";

export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <main className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Zustand 範例展示
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            同步與非同步狀態管理示範
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 同步 Store 範例 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              同步 Store
            </h2>
            <Counter />
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                這是一個簡單的同步狀態管理範例，展示了基本的狀態更新操作。
              </p>
            </div>
          </div>

          {/* 非同步 Store 範例 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              非同步 Store
            </h2>
            <AsyncUserList />
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                這是一個非同步狀態管理範例，展示了 API
                呼叫、載入狀態和錯誤處理。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            專案技術棧
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Next.js 15 (App Router)</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>TypeScript</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-blue-500">✓</span>
              <span>Zustand (State Management)</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
