<template>
  <div class="signup-container">
    <div class="signup-box">
      <div class="title-container">
        <h1 class="title">注册</h1>
      </div>

      <el-form class="signup-form" ref="signupForm" :model="signupForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="重新输入">
          <el-input v-model="repassword" placeholder="确认密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="sex">
            <el-radio :label="0">女</el-radio>
            <el-radio :label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-button type="primary">注册</el-button>
            </el-col>
            <el-col :span="12">
              <el-button>取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      signupForm: {
        username: "",
        password: "123123",
        repassword: "123123",
        sex: "0",
        email: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$bg: #eeeeee;
$light_gray: #fff;
$dark_gray: #000000;

.signup-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .signup-box {
    width: 520px;
    background-color: $bg;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .title-container {
    margin: 0 auto;
  }
  .el-form {
    width: 95%;
    .el-form-item {
      width: 100%;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>