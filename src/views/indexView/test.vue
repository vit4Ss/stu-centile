<template>
  <div id = "hello">
    测试
    {{test}}
  </div>
</template>

<script>
export default {
name: "test",
  data(){
  return{
    path:"ws://192.168.0.200:8005/qrCodePage/ID=1/refreshTime=5",
    socket:"",
    test:''
  }
},
  methods:{
    init: function () {
      if(typeof(WebSocket) === "undefined"){
        alert("您的浏览器不支持socket")
      }else{
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log("socket连接成功")
    },
    error: function () {
      console.log("连接错误")
    },
    getMessage: function (msg) {
      console.log(msg.data)
    },
    send: function () {
      this.socket.send(params)
    },
    close: function () {
      console.log("socket已经关闭")
    }
  },

  created() {
    this.$axios.post('/hello').then(res=>{
      this.test = res;
      console.log("aaaa")
      console.log(res)
    })
  },
  mounted() {
  },
  destroyed() {
    this.socket.onclose = this.close
  }
}
</script>

<style scoped>

</style>
