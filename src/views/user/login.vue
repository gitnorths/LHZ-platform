<template>
  <div class="login">
    <div class="login-title login-title-bg">
      <span>浏河镇农业面源污染智慧监管平台</span>
    </div>
    <el-form
      class="login-form"
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
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
            style="margin-left: 1vh"
          />
        </div>
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <div class="el-input-group__prepend">
          <img
            class="login-form__icon"
            src="~@/assets/img/login/form-pass.png"
            alt="#"
            style="margin-left: 1vh"
          />
        </div>
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="loginForm.checkedPassword">
          <el-checkbox label="记住密码" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button
          type="success"
          @click="submitForm('loginForm')"
          style="width: 100%"
        >
          登 录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
const loginRef = ref(null);
const loginForm = reactive({
  username: "admin",
  password: "123",
  checkedPassword: [],
});
const loginRules = reactive({
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
      message: "请输入密码",
      trigger: "blur",
    },
  ],
});

const submitForm = async () => {
  const valid = await loginRef.value.validate();

  if (valid) {
    if (loginForm.username != "admin") {
      ElMessage({
        showClose: true,
        message: "用户名错误！",
        type: "warning",
      });
    } else if (loginForm.password != "123") {
      ElMessage({
        showClose: true,
        message: "密码错误！",
        type: "warning",
      });
    } else {
      // 路由跳转
      router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: {
    repeat: no-repeat;
    size: 100%;
    image: url(./../../assets/img/login/bg.png);
  }

  &-title {
    position: relative;
    margin: 0 0 8.5vh 0;
    padding-bottom: 5vh;

    & > span {
      font-weight: bold;
      font-size: 5.4vh;
      line-height: 5.4vh;
      color: #ffffff;
      text-shadow: 0 0.2vh 0.6vh rgba(2, 64, 68, 0.5);
      -webkit-text-stroke: 0.1vh #297979;
      text-stroke: 0.1vh #297979;
      background: linear-gradient(180deg, #a0dbd5 0%, #ffffff 59.5947265625%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-bg {
      background: {
        repeat: no-repeat;
        position: center bottom;
        size: 100%;
        image: url(./../../assets/img/login/title-bot.png);
      }
    }
  }
}
.el-form {
  width: 45vh;
  height: 46.8vh;
  margin-left: 55vh;
  padding: 0 7vh;
  background: {
    repeat: no-repeat;
    image: url(./../../assets/img/login/form-bg.png);
  }
  &-item {
    margin-bottom: 2vh;

    h1 {
      margin: 0;
      padding: 4vh 0;
      font-size: 3.2vh;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
    }

    .el-button {
      height: 5vh;
      line-height: 5vh;
      background-color: #05bf99;
      border-color: #05bf99;
      padding: 0;
      font-size: 2vh;
      font-weight: bold;
      color: #002323;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .el-input-group__prepend {
    position: absolute;
    left: 0;
    top: 50%;
    background-color: initial;
    height: 1.8vh;
    line-height: 1.8vh;
    margin-top: -0.9vh;
    border: 0;
    z-index: 10;
    border-right: 0.1vh solid #2a7a7a;
  }
}
</style>