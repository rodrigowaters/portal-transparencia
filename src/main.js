import Vue                         from 'vue'
import App                         from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Element                     from 'element-ui'
import './registerServiceWorker'
import router                      from './router'
import store                       from './store'

Vue.config.productionTip = false;

// Bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Element
Vue.use(Element);

// Importar CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/styles.min.css'

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
