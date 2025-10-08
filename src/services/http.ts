import axios from 'axios';

export const baseURL = 'http://loja-brinquedos.onrender.com/';

const http = axios.create({
  baseURL: `${baseURL}api/`,
});

http.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'multipart/form-data';

    return config;
  },
  error => Promise.reject(error),
);

export { http };
