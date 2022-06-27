import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path:'/index',
    name: 'Index',
    redirect: '/index/student/stuMsg',
    component: ()=>import('../views/index.vue'),
    meta:{
      requireAuth:true
    },
    children:[
      {
        path: '/index/user/account',
        name: '账号修改',
        component: ()=>import('@/views/indexView/Account')
      },
      {
        path: '/index/user/userCenter',
        name: '个人中心',
        component: ()=>import('@/views/indexView/userCenter')
      },
      {
        path:'/index/student/room',
        name: '房间管理',
        component: ()=>import("@/views/indexView/studentRoom")
      },
      {
        path:'/index/student/stuMsg',
        name: '学生信息',
        title:'学生信息',
        component: ()=>import("@/views/indexView/stuMsg")
      },
      {
        path:'/index/visit',
        name:'外来人员',
        component:()=>import("@/views/indexView/Visit"),
        meta:{
          title:'外来人员登记'
        }
      },
      {
        path:'/index/repairLog',
        name: '维修记录',
        component:()=>import("@/views/indexView/repairLog"),
        meta: {
          title: '维修记录'
        }
      },
      {
        path:'/index/later',
        name: '晚归',
        component:()=>import("@/views/indexView/later"),
        meta: {
          title: '晚归'
        }
      },
      {
        path:'/index/cost',
        name: '水电费',
        component:()=>import("@/views/indexView/feiyong"),
        meta: {
          title: '水电费'
        }
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/test',
    name:'test',
    component: ()=>import('../views/indexView/test.vue')
  },
  {
    path: '/video',
    name:'video',
    component:()=>import('../views/videos.vue')
  },
  {
    path: '/video2',
    name:'video2',
    component:()=>import('../views/videos2.vue')
  },
  {
    path:'*',
      component:Error
  }
]

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})
export default router
