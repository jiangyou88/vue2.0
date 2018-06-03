import axios from 'axios';

//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.response.use((res) => {
  return res.data; //在这里统一拦截结果 把结果处理成res.data
});

//获取列表数据
export let getLists = () => {
  return axios.get('/lists');
};
