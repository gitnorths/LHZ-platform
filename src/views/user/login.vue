<template>
  <div class="login">
    <el-form ref="formLogin" :model="formLogin">
      <el-form-item>
        <el-icon slot:label>
          <Avatar />
        </el-icon>
        <el-input
          type="text"
          v-model="formLogin.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="formLogin.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('formLogin')"
          style="width: 100%"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    image: url(~@/assets/img/login-bg.png);
  }
}
.el-form {
  width: 450px;
  height: 468px;
  margin: 0 auto;
  padding: 0 70px;
  background: {
    repeat: no-repeat;
    image: url(~@/assets/img/login-form-bg.png);
  }
}
</style>