<template>
  <div id = 'stuMsg'>
    <el-table
        :data="stuMsg"
        :header-cell-style="{'text-align':'center'}"
        height="600"
        border
        id = 'export-table'
        style="width: 100%">
      <el-table-column
          align="center"
          prop="builder.buildername"
          label="楼栋名"
          :formatter="upperCase"
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
          prop="dorm.dormid"
          label="房间号">
      </el-table-column>
      <el-table-column
          align="center"
          width="120"
          prop="studentid"
          label="学号">
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
          prop="grade"
          label="年级">
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
    <el-button
        plain
        @click="ExcelAll">全部导出</el-button>

    <el-dialog :visible.sync="dialogFormVisible" title="编辑" width="400px">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label="楼栋">
          <el-input v-model="form.builder.buildername" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="管理员id">
          <el-input v-model="form.builder.sadminid" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="房间号">
          <el-input v-model="form.dorm.dormid" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth"  label="学号">
          <el-input v-model="form.studentid" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="姓名">
          <el-input v-model="form.name" auto-complete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="年级">
          <el-input v-model="form.grade" auto-complete="off"/>
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

import FileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
name: "stuMsg",
  data(){
    return {
      stuMsg:[],
      dialogFormVisible: false,
      form: {},
      formLabelWidth :'70'
      }
    },
  computed:{

  },
  methods:{
    upperCase:function (row){
      return row.builder.buildername.toUpperCase() +"栋";
    },
    setSex:function (row){
      return  row.builder.sex ===0?'女':'男'
    },
    handleEdit(index, row) {
      this.form =  row;
    },
    //导出excel文件
    ExcelAll(){
      const h = this.$createElement;
      let wb = XLSX.utils.table_to_book(document.querySelector('#export-table'))
      let wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'stuMsg.xlsx')
        this.$notify({
          title: '导出Excel',
          message: h('i', { style: 'color: teal'}, '导出成功')
        });
      } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
      return wbout
    }
    },
  created(){
    let id  = 100
    this.$axios.get('/stuMsg?admin='+id).then(res =>{
      this.stuMsg = res.data.data
      this.form = res.data.data[0];

    })
  }

}

</script>

<style scoped>
  .el-input{
    width: 200px;
  }
  .el-form-item{
    text-align: right;
  }
</style>
