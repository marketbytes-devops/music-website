import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 400) {
      return Promise.reject({ response: { data: { error: 'Invalid request. Please check your input.' } } });
    }
    if (error.response?.status === 500) {
      return Promise.reject({ response: { data: { error: 'Server error. Please try again later.' } } });
    }
    return Promise.reject(error);
  }
);

export default apiClient;