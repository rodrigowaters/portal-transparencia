import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/mapa-do-site', component: () => import('../views/Mapa-Do-Site')},
    {path: '/busca-rapida', component: () => import('../views/Busca-Rapida.vue')},
    {path: '/busca-rapida/:query', component: () => import('../views/Busca-Rapida.vue'), props: true},
    {path: '/dinamico/:page_id', component: () => import('../views/Dinamico.vue'), props: true},
    {
        path     : "*",
        name     : "not-found",
        component: () =>
            import("../views/Not-Found.vue"),
        meta     : {
            visible: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
