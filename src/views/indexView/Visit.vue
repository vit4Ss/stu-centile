<template>
  <div id = 'Dorm'>
    <el-table
        :data="visit"
        :header-cell-style="{'text-align':'center'}"
        id = 'export-table'
        border>
      <el-table-column
          align="center"
          prop="buildername"
          label="楼栋名"
          width="120">
      </el-table-column>
      <el-table-column
          align="center"
          prop="sadminid"
          label="管理员"
          width="100">
      </el-table-column>
      <el-table-column
          align="center"
          prop="sex"
          width="100"
          label="宿舍类别">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="dormid"
          label="房间号">
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
          prop="intime"
          label="进入时间">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="leavetime"
          label="离开时间">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="description"
          label="访问备注">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name: "Visit",
  data(){
    return{
      visit:[
        {
          buildername:"A1楼",
          sadminid:'1',
          sex:'女',
          name:'王xx',
          dormid:"101",
          intime:'2021-4-26  8:30',
          leavetime:"2021-4-26  12:30",
          description:"访问好友"
        },
      ]
    }
  },
  methods:{
    setSex:function (row){
      return  row.builder.sex ===0?'女':'男'
    },
    upperCase:function (row){
      return row.builder.buildername.toUpperCase() +"楼";
    },
  }
}
</script>

<style scoped>

</style>
