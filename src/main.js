import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import router from './router'

createApp(App).use(router)
  .use(VueSweetalert2)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .mount('#app')
