import axios from 'axios';

const request = axios.create({
  baseURL: 'http://47.96.30.143/'
});

export default request;