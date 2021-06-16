import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import router from './router'

const app = createApp(App)
app.directive('focus', {
  // 在 directive中為mounted
  // mounted 會回傳 dom(el)
  mounted (el) {
  // 回傳掛載元素
    el.children[0].focus()
    console.log(el)
  }
})
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .mount('#app')
