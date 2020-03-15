import axios from 'axios';

const request = axios.create({
  // baseURL: 'http://localhost:3100/',
  baseURL: 'http://47.96.30.143/api/',
  withCredentials: true
});

export default request;