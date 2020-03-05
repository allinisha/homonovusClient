import axios from 'axios';

const request = axios.create({
  // baseURL: 'http://47.96.30.143:3100/',
  baseURL: 'http://localhost:3100/',
  withCredentials: true
});

export default request;