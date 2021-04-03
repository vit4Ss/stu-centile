<template>
  <div id = "login">
    <h2>学生宿舍信息管理系统</h2>
    <div id ="loginBox">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">

        <div id = "input_login">
          <!--账号框-->
          <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm.account" autocomplete="off" placeholder="账号"></el-input>
          </el-form-item>
          <!--密码框-->
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
        </div>
        <div id = "bt_login">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
        <div id = "url-SignUp">
          <div class="url-a" style="float: left">
            <router-link to="/Sign_up">注册账号</router-link>
          </div>
          <div class="url-a" style="float: right">
            <router-link to="/forgot_password">忘记密码？</router-link>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name:"login",
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      }else{
        callback();
      }
    };
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    //重置输入框
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },


}

</script>

<style lang="less">
  @import "../css/login.less";
</style>

