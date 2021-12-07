import { createApp } from 'vue'
import App from './App.vue'
import { Lazyload } from 'vant'
const app = createApp(App)
app.use(Lazyload)
app.mount('#app')
