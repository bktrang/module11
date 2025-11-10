import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // only if you’re using vue-router
//import store from './store'   // only if you’re using Vuex

const app = createApp(App)

app.use(router) // remove if not using
//app.use(store)  // remove if not using

app.mount('#app')
