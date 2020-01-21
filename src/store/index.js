import Vue   from 'vue'
import Vuex  from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        menus            : [],
        paginas_dinamicas: []
    },
    getters  : {
        menus            : state =>
        {
            return state.menus;
        },
        paginas_dinamicas: state =>
        {
            return pageId =>
            {
                return state.paginas_dinamicas.find(page => parseInt(page.id) === parseInt(pageId));
            }
        }
    },
    mutations: {
        SET_MENUS(state, menus)
        {
            state.menus = menus;
        },
        SET_PAGINAS_DINAMICAS(state, paginas_dinamicas)
        {
            state.paginas_dinamicas = paginas_dinamicas;
        }
    },
    actions  : {

        async fetchData({commit})
        {
            return await axios
                .get('https://gist.githubusercontent.com/rodrigowaters/b7c4b0d879a97979010cbf40a0608f93/raw/bbfb1f45ada36767401118d89d46c69c5af3a392/getInfos.json', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response =>
                {
                    commit('SET_MENUS', response.data.menus);
                    commit('SET_PAGINAS_DINAMICAS', response.data.paginas_dinamicas);
                })
                .catch(function (error)
                {
                    alert(error);
                });
        },

    },
})
