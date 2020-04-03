<template>
  <div class="login-container">
    <div class="title-container">
      <h1 class="title">登录</h1>
    </div>
    <div class="login-box">
      <div class="head-box">
        <img src="../../assets/img/head.jpg" />
      </div>
      <el-form class="login-form" ref="loginForm" :model="loginForm">
        <el-form-item>
          <span class="svg-container">
            <i class="el-icon-user-solid"></i>
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <span class="svg-container">
            <i class="el-icon-s-comment"></i>
          </span>
          <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            show-password
          />
        </el-form-item>
        <el-link type="primary" class="loss-password" >忘记密码？</el-link>
        <el-row>
          <el-col :span="12">
            <el-button type="primary">登录</el-button>
          </el-col>
          <el-col :span="12">
            <el-button >注册</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      }
    };
  }
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg: #ffffff;
$light_gray: #fff;
$cursor: rgb(0, 0, 0);

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(143, 143, 143, 0.1);
    border-radius: 5px;
  }

  .el-button {
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
$bg: #fff;
$light_gray: #fff;
$dark_gray: #000000;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  text-align: center;

  .title-container {
    margin: 0 auto;
  }
  .login-box {
    width: 520px;
    height: 320px;
    border: 2px solid #eeeeee;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $light_gray;
  }
  .head-box {
    width: 120px;
    height: 120px;
    border: 1px solid #eeeeee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #dddddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #eeeeee;
      border-radius: 50%;
      background-color: $light_gray;
    }
  }
  .login-form {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    overflow: hidden;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .loss-password {
    display: flex;
    justify-content: flex-end;
  }
}
</style>