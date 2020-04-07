import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE ONLY';

instance.interceptors.request.use(request => {
  console.log('Instance request');
  return request;
}, err => {
  console.log(err);
  return Promise.reject(err);
});

export default instance;