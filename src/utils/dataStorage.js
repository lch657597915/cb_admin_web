import Storage from "good-storage";
import Config from "../config/app.js";

export function getUserInfo(key = null) {
  let userInfo = Storage.get(Config.userInfoKey);
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
  return userInfo;
}

// 设置用户信息
export function setUserInfo(user) {
  Storage.set(Config.userInfoKey, user);
  return user;
}
// 设置权限
export function setPermissions(permissionsArr) {
  Storage.set(Config.permissionsKey, permissionsArr);
  return permissionsArr;
}
// 权限
export function hasPermissions(permissionsKey) {
  let permissionsArr = Storage.get(Config.permissionsKey, []);
  console.log("打印权限：" + permissionsArr);
  if (permissionsArr.indexOf("*") != -1) {
    return true;
  }
  return permissionsArr.indexOf(permissionsKey) != -1;
}
export function getToken() {
  return Storage.get(Config.tokenKey);
}

export function setToken(token) {
  return Storage.set(Config.tokenKey, token);
  //return Cookies.set(Config.tokenKey, token ,{ expires: Config.cookiesExpires })
}

export function removeToken() {
  return Storage.remove(Config.tokenKey);
}

export function isLogin() {
  return (getToken() || "").length > 5;
}
