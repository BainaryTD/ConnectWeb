import axios, { AxiosRequestConfig } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export interface ApiClientConfig {
    endpoint: string;
    data?: Record<string, any>;
    isFormData?: boolean;
    config?: AxiosRequestConfig;
}

export const apiClient = {
    get: async <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
        try {
            const response = await axios.get<T>(`${API_URL}/${endpoint}`, config);
            return response.data;
        } catch (error) {
            console.error('GET Error:', error);
            throw error;
        }
    },

    post: async <T = any>({
        endpoint,
        data,
        isFormData,
        config
    }: ApiClientConfig): Promise<T> => {
        try {
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
                        'Content-Type': 'multipart/form-data'
                    }
                };
            }

            const response = await axios.post<T>(`${API_URL}/${endpoint}`, payload, config);
            return response.data;
        } catch (error) {
            console.error('POST Error:', error);
            throw error;
        }
    },

    put: async <T = any>({
        endpoint,
        data,
        isFormData,
        config
    }: ApiClientConfig): Promise<T> => {
        try {
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
                        'Content-Type': 'multipart/form-data'
                    }
                };
            }

            const response = await axios.put<T>(`${API_URL}/${endpoint}`, payload, config);
            return response.data;
        } catch (error) {
            console.error('PUT Error:', error);
            throw error;
        }
    },

    delete: async <T = any>(endpoint: string, config?: AxiosRequestConfig): Promise<T> => {
        try {
            const response = await axios.delete<T>(`${API_URL}/${endpoint}`, config);
            return response.data;
        } catch (error) {
            console.error('DELETE Error:', error);
            throw error;
        }
    }
};
