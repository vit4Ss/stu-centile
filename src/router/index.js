import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/Sign_up',
    name:'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path:'/forgot_password',
    name:'forgotPassword',
    component: () =>import('../views/forgotPassword.vue')
  },
  {
    path:'*',
    component:Error
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
