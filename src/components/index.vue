<template>
  <div>
    <el-container>
      <el-header style="background-color: #2c3e50">
        <top></top>
      </el-header>
      <el-container>
        <el-aside><left></left></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import left from "@/components/left.vue"
import top from "@/components/top.vue"
export default {
name: "index",
  components:{
    left,
    top,
  }

}
</script>

<style scoped>

</style>
