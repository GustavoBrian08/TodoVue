import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(bootstrap).mount('#app')
