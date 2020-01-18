import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/busca-rapida', component: () => import('../views/Busca-Rapida.vue')},
    {path: '/busca-rapida/:query', component: () => import('../views/Busca-Rapida.vue'), props: true},
    {path: '/page-1', name: 'page_1', component: () => import('../views/Page1.vue')},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
