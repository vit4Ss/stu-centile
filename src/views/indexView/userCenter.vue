<template>
  <div>
    <b>个人中心</b>
    <el-form :model="form" label-width="80px" id="userFrom" >
      <el-form-item label="用户名:">
        <el-input v-model="form.account" disabled></el-input>
      </el-form-item>
      <el-form-item label="权限:">
        <el-input v-model="form.role" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="电话：">
        <el-input v-model="form.phone" disabled></el-input>
      </el-form-item>
      <el-form-item label="楼栋：">
        <el-input v-model="form.roles" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
name: "userCenter",
  data(){
    return{
      form:{
        account: 'admina',
        role:"系统管理员",
        name:"张三",
        phone:"1234567890",
        roles:"all"
      }
    }
  }
}
</script>

<style scoped>
  #userFrom{
    width: 300px;
    position: fixed;
    left: 50%;
    transform: translate(50,0 );
    margin-top: 30px;
  }

</style>
