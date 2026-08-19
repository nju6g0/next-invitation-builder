import { create } from "zustand";
import { userApi, type User } from "@/lib/client";

// 非同步 Store - User API
interface AsyncUserState {
  users: User[];
  selectedUser: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: number) => Promise<void>;
  clearError: () => void;
}

export const useAsyncUserStore = create<AsyncUserState>((set) => ({
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await userApi.getUsers();
      set({ users: data, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "發生未知錯誤",
        isLoading: false,
      });
    }
  },

  fetchUserById: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const data = await userApi.getUserById(id);
      set({ selectedUser: data, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "發生未知錯誤",
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),
}));
