import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "element-ui/lib/theme-chalk/index.css"
import Element from 'element-ui'
import axios from 'axios'
import "./config/axios"
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css';
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
Vue.use(vueMiniPlayer)
Vue.use(Element);
Vue.use(VideoPlayer)
Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


