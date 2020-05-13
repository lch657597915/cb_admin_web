import Axios from "axios";
import Config from "@/config/app";
import { Notification, Loading } from "element-ui";
import { getToken } from "../utils/common";
import Router from "@/router/index.js";
const service = Axios.create({
  baseURL: Config.apiUrl + "/",
  headers: {
    Accept: "*/*"
  },
  timeout: Config.timeout
});
service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
  config => {
    if (!config.closeLoading) {
      window.loadingInstance = Loading.service();
    }
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    //Grade
    if (!response.config.closeLoading) {
      setTimeout(() => {
        window.loadingInstance.close();
      }, 400);
    }
    const res = response;
    if (res.status !== 200) {
      Notification({
        title: "数据返回出错",
        message: "请稍后重试",
        type: "warning"
      });
      //return Promise.reject('error')
    } else {
      if (
        response.config.hasOwnProperty("closeInterceptors") &&
        response.config.closeInterceptors
      ) {
        return res.data;
      }

      if (res.data.code != 100000) {
        Notification({
          title: res.data.msg,
          type: "warning"
        });
        if (res.data.code == 100004) {
          //登录状态失效
          // removeToken();
          setTimeout(() => {
            Router.push("/login");
          }, 1000);
        }
        return Promise.reject("error");
      }

      return res.data.data;
    }
  },
  error => {
    setTimeout(() => {
      window.loadingInstance.close();
    }, 300);
    Notification({
      title: "请求未响应",
      message: "服务器可能出了点问题",
      type: "warning"
    });
    return Promise.reject(error); //千万不能去掉，，，否则请求超时会进入到then方法，导致逻辑错误。
  }
);

export default service;
