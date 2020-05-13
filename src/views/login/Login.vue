<template>
  <div class="login">
    <div class="login-form">
      <div class="form">
        <div class="ms-title">博客后台管理系统</div>
        <input
          class="input"
          placeholder="请输入手机号"
          v-model.trim="phone"
          maxlength="11"
        />
        <input
          class="input password"
          placeholder="请输入密码"
          v-model.trim="password"
          style="margin-bottom: 20px"
          @keyup.enter="login"
        />
        <el-button
          type="primary"
          class="login-btn"
          :loading="loginLoading"
          style="width: 100%;marginTop: 20px"
          @click.native="login"
          >登录
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { setToken, setPermissions, setUserInfo } from "../../utils/dataStorage";
import { loginByPassword } from "@/api/manager/manager.js";

export default {
  data() {
    return {
      loginLoading: false,
      password: "",
      phone: ""
    };
  },
  methods: {
    login() {
      if (this.phone.length != 11) {
        this.$message("请输入正确的手机号！");
        return;
      }
      if (!this.password && this.isPassword) {
        this.$message("请输入密码！");
        return;
      }
      this.loginLoading = true;
      this.loginInit();
    },
    //密码登录
    loginInit() {
      loginByPassword({
        phone: this.phone,
        password: this.password,
        platform: this.$Cfg.platformUUID
      })
        .then(r => {
          this.$notify({
            title: "登录成功",
            type: "success"
          });
          setUserInfo(r);
          setToken(r.token);
          setPermissions(r.managerPermissionCodeSet);
          this.loginLoading = false;
          this.$message.success("登录成功");
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          this.loginLoading = false;
        });
    },
    loginSuccess(res) {}
  }
};
</script>

<style lang="scss">
@import "Login.scss";
</style>
