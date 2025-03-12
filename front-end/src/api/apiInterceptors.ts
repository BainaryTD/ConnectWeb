import axios, { AxiosRequestConfig } from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// สร้าง Axios Instance พร้อม Interceptors
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Timeout 10 วินาที
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: เพิ่ม Authorization Header อัตโนมัติ
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: ตรวจจับ Unauthorized (401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
    //   sessionStorage.removeItem("access_token");
    //   window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// API Methods (GET, POST, PUT, DELETE)
export interface ApiClientConfig {
  endpoint: string;
  data?: Record<string, any>;
  isFormData?: boolean;
  config?: AxiosRequestConfig;
}

const apiInterceptors = {
  get: async <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.get<T>(endpoint, config);
    return response.data;
  },

  post: async <T = any>({ endpoint, data, isFormData, config }: ApiClientConfig): Promise<T> => {
    let payload: any = data;

    if (isFormData && data) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      payload = formData;
      config = {
        ...config,
        headers: {
          ...(config?.headers || {}),
          "Content-Type": "multipart/form-data",
        },
      };
    }

    const response = await apiClient.post<T>(endpoint, payload, config);
    return response.data;
  },

  put: async <T = any>({ endpoint, data, isFormData, config }: ApiClientConfig): Promise<T> => {
    let payload: any = data;

    if (isFormData && data) {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      payload = formData;
      config = {
        ...config,
        headers: {
          ...(config?.headers || {}),
          "Content-Type": "multipart/form-data",
        },
      };
    }

    const response = await apiClient.put<T>(endpoint, payload, config);
    return response.data;
  },

  delete: async <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiClient.delete<T>(endpoint, config);
    return response.data;
  },
};

export default apiInterceptors;
