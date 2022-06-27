<template>
  <span>
    <b>宿舍信息管理系统</b>
    <span id = "down">
      <el-dropdown>
  <span class="el-dropdown-link" style="color: white;font-size: 16px" ><i class="el-icon-user-solid"></i>
    个人中心<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled>用户名：{{user.userName}}</el-dropdown-item>
          <el-dropdown-item disabled>权限：{{user.role}}</el-dropdown-item>
          <el-dropdown-item><router-link to="/index/user/userCenter" style="text-decoration: none; color: #2c3e50">个人中心</router-link></el-dropdown-item>
          <el-dropdown-item >注销登录 <i class="el-icon-right"></i></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </span>
</template>

<script>
export default {
name: "top",
  data(){
    return {
      user:{
          userName:'admin',
          role:'管理员'
        }
      }
    },
}
</script>

<style scoped>
  b{
    color: white;
    font-size: 30px;
    line-height: 2;
    position: fixed;
    left: 50px;
  }
  *{
    margin: 0;
    padding: 0;
  }
  #down{
    position: fixed;
    right: 60px;
    top: 25px;
  }
</style>
