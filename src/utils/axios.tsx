import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const localUrl: string = import.meta.env.VITE_BACKEND_URL || "";

const api: AxiosInstance = axios.create({
  baseURL: localUrl,
  timeout: 30000, // 30 second timeout
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      try {
        const parsedToken = JSON.parse(token);
        config.headers.Authorization = `Bearer ${parsedToken}`;
      } catch (error) {
        console.error("Error parsing token from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem("user");
      window.location.href = "/sign-in";
    } else if (error?.response?.status === 403) {
      // Forbidden - user doesn't have permission
      console.error("Access forbidden:", error.response?.data);
    } else if (error?.response?.status === 500) {
      // Server error
      console.error("Server error:", error.response?.data);
    } else if (error?.code === "ERR_NETWORK") {
      // Network error
      console.error("Network error:", error.message);
    } else if (error?.code === "ERR_BAD_REQUEST") {
      // Bad request - often auth related
      console.error("Bad request:", error.response?.data);
    }
    throw error;
  }
);

export const setToken = (accessToken: string) => {
  if (accessToken) {
    localStorage.setItem("user", JSON.stringify(accessToken));
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
};

export const clearToken = () => {
  localStorage.removeItem("user");
  delete api.defaults.headers.common["Authorization"];
};

export default api;
