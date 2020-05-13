import Layout from "@/views/layout/App.vue";
export default {
  path: "/user_manage",
  component: Layout,
  name: "UserManage",
  redirect: "/user_manage/list",
  meta: {
    title: "用户管理"
  },
  children: [
    {
      path: "list",
      name: "UserManageList",
      meta: {
        title: "用户列表"
      },
      component: resolve =>
        require(["@/views/userManage/userList/Index.vue"], resolve)
    }
  ]
};
