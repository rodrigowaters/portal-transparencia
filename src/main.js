import Vue                         from 'vue'
import App                         from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VTree                       from 'vue-vtree';
import './registerServiceWorker'
import router                      from './router'
import store                       from './store'

Vue.config.productionTip = false;

// Bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Importar CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/styles.min.css'

// V-Tree ( utilizado em Busca-Rapida e Mapa-do-Site )
Vue.component('v-tree', VTree);

// Progressbar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
    color      : 'rgb(143, 255, 199)',
    failedColor: 'red',
    height     : '2px'
});

// Carregar informacoes
store.dispatch('fetchData').then(() =>
{
    // Iniciar App
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
}).catch((error) =>
{
    alert(error);
});
