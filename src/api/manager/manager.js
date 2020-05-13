import request from "@/utils/request.js";

let gatewayPrefix = "userService";

/**
 * 手机号密码登录
 * @param params
 * @returns {AxiosPromise}
 */
export function loginByPassword(params) {
  return request({
    url: gatewayPrefix + "/api/managerLogin/loginByPhoneAndPassword",
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}

/**
 * 用户列表
 * @param params
 * @returns {AxiosPromise}
 */
export function userPage(params) {
  return request({
    url: gatewayPrefix + "/api/manager/page",
    method: "post",
    data: params //注意：如果是get请求请使用 params: params
  });
}
