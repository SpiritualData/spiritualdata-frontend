import axios from "axios";

const localUrl = process.env.REACT_APP_BACKEND_URL || "";

const api = axios.create({
  baseURL: localUrl,
});

api.interceptors.request.use((req) => req);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response && error.response.status === 403) {
      // clearState();
    } else if (error && error.response && error.response.status === 500) {
      // alert('Something went wrong with backend');
    }

    throw error;
  }
);

export const setToken = (accessToken) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
// using interceptors in future
// api.defaults.headers.common['Authorization'] = 'kdjflsdkjflksdjflksdj'

export default api;
