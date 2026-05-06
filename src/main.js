import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
//import { routerKey } from 'vue-router'

const app=createApp(App)
app.use(Toast)
app.use(router)
app.mount('#app')
