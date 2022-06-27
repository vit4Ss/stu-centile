<template>
  <div class="container">
  <search> </search>
  <div id = 'Dorm'>
    <el-table
        :data="repair"
        :header-cell-style="{'text-align':'center'}"
        id = 'export-table'
        border
        :row-class-name="rowColor">
      <el-table-column
          align="center"
          prop="builder.buildername"
          :formatter="upperCase"
          label="楼栋名"
          width="120">
      </el-table-column>
      <el-table-column
          align="center"
          prop="builder.sadminid"
          label="管理员"
          width="100">
      </el-table-column>
      <el-table-column
          align="center"
          prop="builder.sex"
          width="100"
          :formatter="setSex"
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
          prop="description"
          label="维修备注">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="createtime"
          :formatter="ctimeFormat"
          label="创建时间">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          :formatter="repairState"
          prop="state"
          label="维修状态">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="completetime"
          :formatter="dtimeFormat"
          label="完成时间">
      </el-table-column>

      <el-table-column class="el-table__fixed"
                       width="150px" label="操作" >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row);dialogFormVisible =true">编辑</el-button>
          <el-button
              size="mini"
              v-if = "isComplete(scope.$index, scope.row)"
              @click="handDone(scope.$index, scope.row)">完成</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script>
import search from "@/components/search";
export default {
name: "repairLog",
  components:{
    search
  },
  data(){
    return{
      repair:[],
      form:{},
    }
  },
  computed:{
  },
  methods:{
    isComplete(index,row){
      return row.state === 1;
    },
    handleEdit(index, row) {
      this.form =  row;
    },
    handDone(index, row){
      console.log(this.nowDate());
      row.completetime = this.nowDate();
      row.state = 0;
      let params = JSON.stringify({
        id: 100,
        builderId:row.builderid,
        dormId:row.dormid,
        state:row.state,
        completeTime:row.completetime
      })
    console.log(params)
      this.$axios.post('/repairUpdate',params
      ).then(res=>{
        console.log(res)
      })
    },
    nowDate(){
      return Math.round(new Date() / 1000);
    },
    upperCase:function (row){
      return row.builder.buildername.toUpperCase() +"楼";
    },
    setSex:function (row){
      return  row.builder.sex ===0?'女':'男';
    },
    //时间戳转换为时间
    getYMDHMS (timestamp) {
      let time = new Date(timestamp*1000)
      let year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = (time.getDate()).toString().padStart(2, '0')
      const hours = (time.getHours()).toString().padStart(2, '0')
      const minute = (time.getMinutes()).toString().padStart(2, '0')
      const second = (time.getSeconds()).toString().padStart(2, '0')

      return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
    },
    ctimeFormat:function (row){
      let str =  row.createtime;
      return this.getYMDHMS(str);
    },
    dtimeFormat:function (row){
      let str =  row.completetime;
      if(str!== 0){
        return this.getYMDHMS(str)
      }return '未完成';
    },
    repairState:function(row){
      if(row.state===1){
        return "待完成"
      }
      if(row.state===0){
        return "已完成"
      }
    },
    rowColor({row}){
      if(row.state === 0){
        return "success-row"
      }
      if(row.state === 1){
        return "warning-row"
      }
      return '';
    },
  },
  beforeCreate() {
    let id  = 100
    this.$axios.get('/repair?admin='+id).then(res =>{
      this.repair = res.data.data
      this.form = res.data.data[0];
    })
  },
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
