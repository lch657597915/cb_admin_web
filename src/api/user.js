import request from "@/utils/request.js";
import { userService } from "@/config/deploy.js";
/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */
export function login(params) {
  return request({
    // closeLoading: true,
    // closeInterceptors: true,
    url: userService + "/user/login",
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}

/**
 * 退出登录
 * @param params
 * @returns {AxiosPromise}
 */
export function loginOut(params) {
  return request({
    url: userService + "/managerLogin/loginOut",
    method: "post",
    data: params
  });
}
