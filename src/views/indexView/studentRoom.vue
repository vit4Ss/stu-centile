<template>
  <div id = 'Dorm'>
    <el-table
        :data="dorm"
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
          label="性别">
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
          prop="health"
          :formatter="setHealth"
          label="卫生情况">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="galleryful"
          label="床铺数量">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="count"
          label="已住人数">
      </el-table-column>

      <el-table-column class="el-table__fixed"
                       width="150px" label="操作" >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row);dialogFormVisible =true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="阈值详情" width="400px">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="楼栋">
          <el-input v-model="form.builder.buildername" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="管理员id">
          <el-input v-model="form.builder.sadminid" disabled auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="房间号">
          <el-input v-model="form.builder.sex" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="楼栋id">
          <el-input v-model="form.dormid" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="学号">
          <el-input v-model="form.health" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="学号">
          <el-input v-model="form.galleryful" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="学号">
          <el-input v-model="form.count" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
name: "studentRoom",
  data(){
    return {
      dorm:[],//Room msg
      form:{},
      formLabelWidth :'70',
      dialogFormVisible: false,
    }
  },
  methods:{
    rowColor({row}){
      if(row.health ===-1){
        return 'warning-row';
      }
      if(row.health === 1){
        return 'success-row';
      }


      return '';
    },
    setSex:function (row){
      return  row.builder.sex ===0?'女':'男'
    },
    upperCase:function (row){
      return row.builder.buildername.toUpperCase() +"楼";
    },
    handleEdit(index, row) {
      this.form =  row;
    },
    setHealth:function (row){
      if(row.health===0){
        return "合格"
      }
      if(row.health===-1){
        return "不合格"
      }
      if(row.health === 1){
        return "优秀"
      }
    }
  },
   beforeCreate(){
    let id  = 100
    this.$axios.get('/roomMsg?admin='+id).then(res =>{
      this.dorm = res.data.data
      this.form = res.data.data[0];

    })
  }
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
