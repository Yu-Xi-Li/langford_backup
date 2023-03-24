import axios from 'axios';

const http = axios.create({
  baseURL: ' http://124.70.15.55:8099',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error.response && error.response.status === 401) {
      // handle unauthorized error
    }
    return Promise.reject(error);
  }
);

export default {
  get(url, params = {}) {
    return http.get(url, { params });
  },
  post(url, data = {}) {
    return http.post(url, data);
  },
  put(url, data = {}) {
    return http.put(url, data);
  },
  delete(url, params = {}) {
    return http.delete(url, { params });
  }
};
