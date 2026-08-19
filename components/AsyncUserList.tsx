"use client";

import { useAsyncUserStore } from "@/store/useAsyncUserStore";
import { useEffect } from "react";

export default function AsyncUserList() {
  const {
    users,
    selectedUser,
    isLoading,
    error,
    fetchUsers,
    fetchUserById,
    clearError,
  } = useAsyncUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-red-500">⚠️</span>
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </div>
          <button
            onClick={clearError}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            清除
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          用戶列表 ({users.length})
        </h3>
        <button
          onClick={() => fetchUsers()}
          className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          重新載入
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => fetchUserById(user.id)}
            className={`text-left p-4 rounded-lg border-2 transition-all ${
              selectedUser?.id === user.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <div className="font-medium text-gray-900 dark:text-white">
              {user.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {user.email}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {user.company.name}
            </div>
          </button>
        ))}
      </div>

      {selectedUser && (
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            選中的用戶詳情
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                ID:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {selectedUser.id}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                姓名:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {selectedUser.name}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Email:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {selectedUser.email}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                公司:
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {selectedUser.company.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
