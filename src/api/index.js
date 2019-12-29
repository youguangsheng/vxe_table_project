import axios from "axios";
import nprogress from "nprogress";
import { Message } from "element-ui";

const service = axios.create({
  timeout: 6 * 1000, // 响应时间
  withCredentials: true
});

service.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  nprogress.start();
  if (!config.data) config.data = {};
  return config;
});

service.interceptors.response.use(
  res => {
    nprogress.done();
    if (res.status === 200) {
      res = res.data;
      nprogress.done();
      switch (res.code) {
        case -2:
          Message.error(res.message);
          var currPath = window.location.href;
          var url = currPath.substr(0, currPath.indexOf(window.location.hash));
          window.location.replace(`${url}#/login`);
          return Promise.reject(res);
        case -1:
        case 0:
          res.message
            ? Message.error(res.message)
            : Message.error("接口异常,请联系管理员。");
          return Promise.reject(res);
        case 1:
          if (!res.data) {
            Message.success(res.message);
          }
          if (res.hasOwnProperty("totalCount")) return res;

          return res.data;

        case "SUCCESS" || "REMAINING_TIME" || "OUT_TIME": //微信支付查询返回的状态码，需要判断所以得返回res
          return res;
        default:
          return res;
      }
    } else {
      Message.error("接口返回识别码异常,请联系管理员");
      return Promise.reject(res);
    }
  },
  err => {
    // 判断请求异常信息中是否含有超时timeout字符串
    err.message.includes("timeout")
      ? Message.error("请求超时,请检查网络设置。")
      : Message.error("系统异常,请联系管理员。");
    return Promise.reject(err);
  }
);

export default service;
