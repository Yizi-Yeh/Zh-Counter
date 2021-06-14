import { createRouter, createWebHistory } from 'vue-router'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
