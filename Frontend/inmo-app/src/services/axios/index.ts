import axios from 'axios';
import cookie from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const privateInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicInstance.interceptors.response.use(
  response => response,
  error => {
    const {data} = error.response;
    return Promise.reject(data.error);
  },
);

privateInstance.interceptors.response.use(
  response => response,
  error => {
    const {data} = error.response;
    return Promise.reject(data.error);
  },
);

const setToken = (token: string) => {
  privateInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeToken = () => {
  delete privateInstance.defaults.headers.common['Authorization'];
};

export {publicInstance, privateInstance, setToken, removeToken};
