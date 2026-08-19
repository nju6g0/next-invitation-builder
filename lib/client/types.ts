// API 回應的資料型別定義

export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
