<template>
  <div class="login">
    <div class="login-title login-title-bg">
      <span>浏河镇农业面源污染智慧监管平台</span>
    </div>
    <el-form
      ref="formLogin"
      :model="formLogin"
      :rules="rules"
      class="login-form"
    >
      <el-form-item>
        <h1 class="login-title-bg">登 录</h1>
      </el-form-item>
      <el-form-item prop="username">
        <div class="el-input-group__prepend">
          <img
            class="login-form__icon"
            src="~@/assets/img/login/form-user.png"
            alt="#"
            style="margin-left: -10px"
          />
        </div>
        <el-input
          type="text"
          v-model="formLogin.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div class="el-input-group__prepend">
          <img
            class="login-form__icon"
            src="~@/assets/img/login/form-pass.png"
            alt="#"
            style="margin-left: -10px"
          />
        </div>
        <el-input
          type="password"
          v-model="formLogin.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="formLogin.checkedPassword">
          <el-checkbox label="记住密码" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="submitForm('formLogin')"
          style="width: 100%"
        >
          登 录
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
        username: "1",
        password: "1",
        checkedPassword: [],
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push(`/home`);
          // router.push({ name: "home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    image: url(~@/assets/img/login/bg.png);
  }

  &-title {
    position: relative;
    margin: 0 0 85px 0;
    padding-bottom: 50px;

    & > span {
      font-family: Source Han Sans CN;
      font-weight: bold;
      font-size: 54px;
      line-height: 54px;
      color: #ffffff;
      text-shadow: 0px 2px 6px rgba(2, 64, 68, 0.5);
      -webkit-text-stroke: 1px #297979;
      text-stroke: 1px #297979;
      background: linear-gradient(180deg, #a0dbd5 0%, #ffffff 59.5947265625%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-bg {
      background: {
        repeat: no-repeat;
        position: center bottom;
        size: 100%;
        image: url(~@/assets/img/login/title-bot.png);
      }
    }
  }
}
.el-form {
  width: 450px;
  height: 468px;
  margin-left: 550px;
  padding: 0 70px;
  background: {
    repeat: no-repeat;
    image: url(~@/assets/img/login/form-bg.png);
  }
  &-item {
    margin-bottom: 20px;

    h1 {
      margin: 0;
      padding: 40px 0;
      font-size: 32px;
      font-weight: bold;
      font-family: Source Han Sans CN;
      color: #ffffff;
      text-align: center;
    }

    .el-button {
      height: 50px;
      line-height: 50px;
      background-color: #05bf99;
      border-color: #05bf99;
      padding: 0;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #002323;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .el-input__inner {
    padding-left: 64px;
  }

  .el-input-group__prepend {
    position: absolute;
    left: 0;
    top: 50%;
    background-color: initial;
    height: 18px;
    line-height: 18px;
    margin-top: -9px;
    border: 0;
    z-index: 10;
    border-right: 1px solid #2a7a7a;
  }
}
</style>