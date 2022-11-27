import { createApp } from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import './styles/index.scss'
import './permission'
import App from './App.vue'
import router from './router'
import { errorHandler } from './error'
import store from './store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
errorHandler(app)

app.mount("#app")

