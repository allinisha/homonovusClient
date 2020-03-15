import request from '../utils/request';

export const getUserInfo  = _ => {
  return request({
    url: '/userInfo',
    method: 'get'
  });
}