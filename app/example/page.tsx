import Counter from "@/components/Counter";

export default function Example() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="w-full max-w-4xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Invitation Builder
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Next.js + TypeScript + Tailwind CSS + Zustand
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <Counter />

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
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
        </div>
      </main>
    </div>
  );
}
