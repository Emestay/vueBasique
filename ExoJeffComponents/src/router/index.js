import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/uno',
      name: 'Uno',
      component: () => import('../views/uno.vue')
    },
    {
      path: '/dos',
      name: 'Deux',
      component: () => import('../views/dos.vue')
    },
    {
      path: '/tres',
      name: 'Tres',
      component: () => import('../views/tres.vue')
    }
  ]
})

export default router
