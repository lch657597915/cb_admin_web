import Vue from "vue";
import App from "./App.vue";
import elementUi from "element-ui";
import Config from "@/config/app";
import "@/assets/css/style.scss";
import router from "./router";
import store from "./store";
import "@/utils/v-auth.js";
import "./components";
import { isLogin } from "./utils/dataStorage";

Vue.config.productionTip = false;
Vue.prototype.$Cfg = Config;
Vue.use(elementUi);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
    ? to.meta.title + "-" + Config.siteName
    : Config.siteName;

  if (!isLogin() && to.path != "/login") {
    next({ path: "/login" });
  } else {
    next();
  }
});
router.afterEach(transition => {});

window.vm = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
