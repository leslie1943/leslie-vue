<template>
  <div class="temp-main-container">
    <div style="margin-top:20%;text-align:center;">
      <el-form :model="loginForm" ref="loginForm" label-width="100px">
        <el-row>
          <el-col :offset="8" :span="6">
            <el-form-item prop="name" label>
              <el-input v-model="loginForm.name" placeholder="Identity"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :offset="8" :span="6">
            <el-form-item prop="password" label>
              <el-input v-model="loginForm.password" type="password" placeholder="Password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-row style="text-align:center;padding-right:30px;">
        <el-button size="small" type="primary" @click="handleLogin">Login</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      loginForm: {
        name: "suzhen",
        password: "1234",
      },
    }
  },
  methods: {
    async handleLogin() {
      let con = {
        name: this.loginForm.name,
        password: this.loginForm.password,
      }
      let res = await login(con)
      console.info(res);
      if (res.data.status === 1) {
        this.$message.success('Login success');
        this.$router.replace("/");
      } else {
        this.$message.error('Login error');
      }
    }
  }
}
</script>

<style lang="scss">
.temp-main-container {
  // background-color: #0073b1;
  background-color: darkgray;
  min-height: 735px;
  background-image: url("~@/assets/main.jpg");
  background-size: cover;
}
</style>
