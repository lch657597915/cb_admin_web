export default [
  {
    path: "/",
    name: "Dashboard",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: resolve => require(["@/views/home/Index.vue"], resolve)
  }
];
