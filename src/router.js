import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './pages/LoginPage/LoginPage.vue'
import MainPage from './pages/MainPage/MainPage.vue'
import Console from './pages/MainPage/Console/Console.vue'
import Index from './pages/MainPage/Index/Index.vue'
import Servers from './pages/MainPage/Servers/Servers.vue'
import store from './store'

const routes = [
  {
    name: 'MainPage',
    path: '/',
    component: MainPage,
    meta: {
      requireLogin: true
    },
    children: [
      {
        name: 'Index',
        path: '/',
        component: Index,
        alias: '/index'
      },
      {
        name: 'Servers',
        path: '/servers',
        component: Servers,
      },
      {
        name: 'Console',
        path: '/console',
        component: Console,
        meta: {
          requireAdmin: true
        }
      }
    ]
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from) => {
  // console.log(store)
  if (to.meta.requireLogin && !store.state.isLoggedIn) {
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }
  }
  // console.log(to, from)
})

router.beforeEach((to, from) => {
  if (to.meta.requireAdmin && !store.state.isAdmin) {
    return {
      path: from.fullPath
    }
  }
  // console.log(to, from)
})

export default router