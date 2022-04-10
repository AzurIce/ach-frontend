import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './pages/LoginPage/LoginPage.vue'
import MainPage from './pages/MainPage/MainPage.vue'
import Console from './pages/MainPage/Console/Console.vue'
import Index from './pages/MainPage/Index/Index.vue'

const routes = [
    {
        name: 'MainPage',
        path: '/',
        component: MainPage,
        children: [
            {
                name: 'Index',
                path: '/',
                component: Index,
                alias: '/index'
            },
            {
                name: 'Console',
                path: '/console',
                component: Console
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
    console.log(to, from)
})

export default router