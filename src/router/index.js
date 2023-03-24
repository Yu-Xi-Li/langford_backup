import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index')
  },
  {
    path: '/logon',
    name: 'logon',
    component: () => import('../views/Logon/index')
  },
  {
    path: '/',
    name: '/',
    component: Main,
    children: [
      {
        path: '/User',
        name: 'User',
        component: () => import('../views/User/index')
      },
      {
        path: '/LogList',
        name: 'LogList',
        component: () => import('../views/LogList/index')
      },
      {
        path: '/BaseInfo',
        name: 'BaseInfo',
        component: () => import('../views/BaseInfo/index')
      },
      {
        path: '/Sponsor',
        name: 'Sponsor',
        component: () => import('../views/Sponsor/index')
      },
      {
        path: '/Account',
        name: 'Account',
        component: () => import('../views/Account/index')
      },
      {
        path: 'Setting/UserSolid',
        name: 'UserSolid',
        component: () => import('../views/UserSolid/index')
      },
      {
        path: 'Setting/MenuSetting',
        name: 'MenuSetting',
        component: () => import('../views/MenuSetting/index')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
