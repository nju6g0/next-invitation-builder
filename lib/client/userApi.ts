// User API - 用戶相關的 API 呼叫

import { apiClient } from "./apiClient";
import { API_CLIENT_CONFIG } from "./config";
import type { User } from "./types";

export const userApi = {
  /**
   * 獲取所有用戶列表
   */
  async getUsers(): Promise<User[]> {
    return apiClient.get<User[]>(API_CLIENT_CONFIG.ENDPOINTS.USERS);
  },

  /**
   * 根據 ID 獲取單一用戶
   */
  async getUserById(id: number): Promise<User> {
    return apiClient.get<User>(API_CLIENT_CONFIG.ENDPOINTS.USER_BY_ID(id));
  },

  /**
   * 創建新用戶
   */
  async createUser(userData: Partial<User>): Promise<User> {
    return apiClient.post<User>(API_CLIENT_CONFIG.ENDPOINTS.USERS, userData);
  },

  /**
   * 更新用戶資料
   */
  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    return apiClient.put<User>(
      API_CLIENT_CONFIG.ENDPOINTS.USER_BY_ID(id),
      userData,
    );
  },

  /**
   * 刪除用戶
   */
  async deleteUser(id: number): Promise<void> {
    return apiClient.delete<void>(API_CLIENT_CONFIG.ENDPOINTS.USER_BY_ID(id));
  },
};
