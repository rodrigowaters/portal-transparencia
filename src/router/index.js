import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/page-1', name: 'page_1', component: () => import('../views/Page1.vue')},
  {path: '/page-2', name: 'page_2', component: () => import('../views/Page2.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
