import axios from "axios";
import nprogress from "nprogress";
import { Message } from "element-ui";

const service = axios.create({
  timeout: 20 * 1000, // 响应时间
  withCredentials: true,
  baseURL: "http://127.0.0.1:3000"
});

service.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  nprogress.start();
  if (!config.data) config.data = {};
  return config;
});

service.interceptors.response.use(res => {
  console.log(res);
});

export default service;
