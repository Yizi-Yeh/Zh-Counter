import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/counters',
    name: 'Counters',
    component: () => import('../views/Counters/index.vue')
  },
  {
    path: '/counters/:id',
    name: 'Counters_id',
    component: () => import('../views/Counters/_id.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
