// API Client 設定檔

export const API_CLIENT_CONFIG = {
  // API Base URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",

  // Timeout 設定 (ms)
  TIMEOUT: 30000,

  // API 端點
  ENDPOINTS: {
    USERS: "/users",
    USER_BY_ID: (id: number) => `/users/${id}`,
  },
};
