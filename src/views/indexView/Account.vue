<template>
  <div id = 'Dorm'>
    <el-table
        :data="user"
        :header-cell-style="{'text-align':'center'}"
        id = 'export-table'
        border>
      <el-table-column
          align="center"
          prop="createtime"
          label="创建时间"
          width="120">
      </el-table-column>
      <el-table-column
          align="center"
          prop="permission"
          label="权限"
          width="100">
      </el-table-column>
      <el-table-column
          align="center"
          prop="role"
          width="100"
          label="角色">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="name"
          label="姓名">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="sadminid"
          label="权限ID">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="status"
          label="状态">
      </el-table-column>

      <el-table-column class="el-table__fixed"
                       width="150px" label="操作" >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row);dialogFormVisible =true">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name: "Account",
  data(){
  return{
    user:[
      {
        createtime:"2021-4-15",
        permission:"admin",
        role:"系统管理员",
        name:"张三",
        sadminid:"100",
        status:"可用",
      },
      {
        createtime:"2021-4-15",
        permission:"sadmin",
        role:"宿舍管理员",
        name:"周吴",
        sadminid:"2",
        status:"可用",
      },
      {
        createtime:"2021-4-15",
        permission:"sadmin",
        role:"宿舍管理员",
        name:"王五",
        sadminid:"1",
        status:"可用",
      },
      {
        createtime:"2021-4-15",
        permission:"admin",
        role:"系统管理员",
        name:"李四",
        sadminid:"101",
        status:"禁用",
      },
    ]
  }}

}
</script>

<style scoped>

</style>
