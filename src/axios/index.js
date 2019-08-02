import axios from 'axios';
const service = axios.create({
  baseURL: '/',
  timeout: 3000,
  withCredentials: true // 允许携带cookie
});

export default service;
