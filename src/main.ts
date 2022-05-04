import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import createRouter from '/src/controller/routes'
import App from './view/App.vue'

import './view/styles/style.scss'
import 'uno.css'

const store = createPinia()
const router = createRouter(createWebHistory())

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
