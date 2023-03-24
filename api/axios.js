import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

request.interceptors.request.use(
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

request.interceptors.response.use(
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
    return request.get(url, { params });
  },
  post(url, data = {}) {
    return request.post(url, data);
  },
  put(url, data = {}) {
    return request.put(url, data);
  },
  delete(url, params = {}) {
    return request.delete(url, { params });
  }
};
