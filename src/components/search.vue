<template>
  <div id = "search">
    <div><el-input placeholder="搜索"><el-button @click="search()" slot="append"><i class="el-icon-search"></i></el-button>  </el-input></div>
  </div>
</template>

<script>
export default {
name: "search"
}
</script>

<style scoped>

#search{
  width: 300px;
  position:relative;
  left: 60%;
}
</style>
