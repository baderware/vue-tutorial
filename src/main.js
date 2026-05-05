import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import router from './router'
//import { routerKey } from 'vue-router'

const app=createApp(App)
app.use(router)
app.mount('#app')
