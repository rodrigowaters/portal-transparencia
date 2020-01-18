import Vue                         from 'vue'
import App                         from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './registerServiceWorker'
import router                      from './router'
import store                       from './store'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import VTree from 'vue-vtree';
Vue.component('v-tree', VTree);

// Importar CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/styles.min.css'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
