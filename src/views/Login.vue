<template>
  <div class="container" id = "box">

    <div id = "login">
      <h2>学生宿舍信息管理系统</h2>
      <div id ="loginBox">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" >
          <div id = "input_login">
            <!--账号框-->
            <el-form-item prop="account">
              <el-input type="text" v-model="ruleForm.account"  placeholder="账号"></el-input>
            </el-form-item>
            <!--密码框-->
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
            </el-form-item>
          </div>
          <div id = "bt_login">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" :loading="ruleForm.isBtnLoading" @keyup.enter="login">{{ btnText }}</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name:"login",
  data() {
    let validateAccount = (rule, value, callback) => {
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
        password: '',
        isBtnLoading: false
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
      },
      loading:{
        onLoading:"登录中..",
        noLoading:"登录"
      }
    };
  },
  computed: {
    btnText() {
      if (this.ruleForm.isBtnLoading) return this.loading.onLoading;
      return this.loading.noLoading;
    }
  },
  methods: {
    //重置输入框
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('/login', this.ruleForm).then(res => {
            _this.ruleForm.isBtnLoading = true;
            console.log(res.data)
            const jwt = res.headers['authorization']
            const userInfo = res.data.data
            // 把数据共享出去
            _this.$store.commit("SET_TOKEN", jwt)
            _this.$store.commit("SET_USERINFO", userInfo)
            // 获取
            console.log(_this.$store.getters.getUser)
            _this.$router.push('/index')

          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    login() {
      document.onkeydown = e => {
        //13表示回车键，baseURI是当前页面的地址，为了更严谨，也可以加别的，可以打印e看一下
        if (e.keyCode === 13) {
          //回车后执行搜索方法
          this.submitForm();
        }
      }

    }, created() {
      this.login();
    }
  }
}
</script>

<style>
  #login{
    position: absolute;
    left: 45%;
    top:30%;
  }
  body{
    background-image: url("../assets/school.png");
  }
</style>

