import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "../views/layout/App.vue";
import Personal from "./personal";
import userManage from "./userManage";
import Common from "./common.js";

let RouteList = [
  {
    path: "/",
    component: Layout,
    children: [...Common, Personal]
  },

  userManage,

  {
    path: "/login",
    name: "Login",
    meta: {
      title: "后台登录",
      keepAlive: false
    },
    components: {
      blank: resolve => require(["@/views/login/Login.vue"], resolve)
    }
  }
];

export default new Router({
  routes: RouteList
});
