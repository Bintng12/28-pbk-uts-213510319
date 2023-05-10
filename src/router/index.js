import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import NotFound404 from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/myapp',
        name: 'myapp',
        component: () => import('../views/myapp.vue')
      },
      //catchAll 404
      {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound404
      }
  ]
})

export default router