import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from "axios";

const localUrl: string = import.meta.env.VITE_BACKEND_URL || "";

const api: AxiosInstance = axios.create({
  baseURL: localUrl,
});

api.interceptors.request.use((req: any) => req);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 403) {
    } else if (error?.response?.status === 500) {
    }
    throw error;
  }
);

export const setToken = (accessToken: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export default api;
