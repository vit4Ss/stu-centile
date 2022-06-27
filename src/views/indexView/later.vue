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
          prop="snum"
          label="学号">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="time"
          label="时间">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="description"
          label="备注">
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
  name: "later",
  data(){
    return{
      visit:[
        {
          buildername:"A1楼",
          sadminid:'1',
          sex:'女',
          dormid:"101",
          name:'李',
          snum:"10005",
          description:"迟到",
          time:"2021-4-29 23:00",
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

