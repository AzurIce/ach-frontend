import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import router from './router'
import store from './store'

co// nst pinia = createPinia()

createApp(App)
    .use(router)
    .use(store)
    // .use(pinia)
    .mount('#app')

