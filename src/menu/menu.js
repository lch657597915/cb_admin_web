let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: "首页",
  path: "/",
  icon: "fa fa-tachometer"
};

// 用户管理
menu.admin_user_manage = {
  name: "用户管理",
  permissionsKey: "OM-YHGL",
  icon: "fa fa-flag",
  children: {}
};

let AdminUserManage = menu.admin_user_manage.children;

AdminUserManage.userList = {
  name: "用户列表",
  permissionsKey: "OM-YHGL-YHLB",
  path: "/userManage/userList"
};
