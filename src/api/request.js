import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config'

export function request(config) { // eslint-disable-line
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  // 拦截器
  instance.interceptors.request.use((data) => data, (err) => {
    console.log(err);
    return err;
  });

  return instance(config);
}
