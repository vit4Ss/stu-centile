<template>
  <el-row class="tac">
    <el-col :span="20">
      <router-link to="/" style="color: black"><h5>首页</h5></router-link>
      <el-menu
          default-active="$router.path"
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose">
            <el-menu-item v-if="show()" index="/index/user/account">账号管理</el-menu-item>
            <el-menu-item index="/index/user/userCenter">个人中心</el-menu-item>
            <el-menu-item index="/index/student/room">寝室信息</el-menu-item>
            <el-menu-item index="/index/repairLog">维修记录</el-menu-item>
            <el-menu-item index="/index/student/stuMsg">学生信息</el-menu-item>
            <el-menu-item index="/index/visit">外来人员</el-menu-item>
            <el-menu-item index="/index/later">晚归</el-menu-item>
            <el-menu-item index="/index/cost">水电费</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>


</template>

<script>
export default {
name: "left",
  data(){
  return{
      user:{
        account: "",
        roleId: "",
        sex: null,
        userId: null,
        userName: "admin",
      },
    }
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    show:function (){
      let id = 100;
      return id >= 100;
    }
  }
}

</script>

<style scoped lang ="less">

</style>
