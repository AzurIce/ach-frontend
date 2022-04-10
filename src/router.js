import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './pages/LoginPage/LoginPage.vue'
import MainPage from './pages/MainPage/MainPage.vue'
import Console from './pages/MainPage/Console/Console.vue'
import Index from './pages/MainPage/Index/Index.vue'
import Server from './pages/MainPage/Server/Server.vue'
import Player from './pages/MainPage/Player/Player.vue'
import store from './store'

import { isAdmin } from './lib/api/user'

const routes = [
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  },
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
        name: 'Player',
        path: '/player',
        component: Player,
      },
      {
        name: 'Server',
        path: '/server',
        component: Server,
      },
      {
        name: 'Console',
        path: '/console',
        component: Console,
        meta: {
          requireAdmin: true
        }
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/'
      }
    ]
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from) => {
  if (to.meta.requireLogin && !store.state.isLoggedIn) {
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来（“以后再来”以后再写）
      query: { redirect: to.fullPath },
    }
  }
})

router.beforeEach(async (to, from) => {
  if (to.meta.requireAdmin) {
    
    try {
      var res = await isAdmin()
      store.commit('setAdmin', res.status == 200)
    } catch (e) {
      console.log(e)
    }

    if (!store.state.isAdmin) {
      return {
        path: from.fullPath
      }
    }
  }
})

export default router